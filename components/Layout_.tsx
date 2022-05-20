import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { node_ } from './atoms/atoms'

import React, { useEffect, useState } from "react";
import { ethers } from 'ethers'
interface Layout_Props {
  children: JSX.Element
}

export const Layout_ = ({ children }: Layout_Props) => {
  const [sample_, setSample_] = useRecoilState(node_)
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <title>{sample_}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <div
        className={`absolute top-1 right-[0px] m-2 flex w-[150px] h-[45px] flex-row items-center pl-4 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-200 neumorphism`}

        onClick={() => {
          connectWallet()
        }}
      >
        <img src={`/assets/images/metamask.png`} className={`w-[35px]`} />
        <div
          className={`flex w-10 h-[28px] flex-col items-start pl-2 justify-center`}
        >
          <p className={`text-[13px] font-thin m-0 realtive top-1`}>{currentAccount.length > 0 ? 'MetaMask' : 'Connect'}</p>
          <p className={`text-[14px] font-black m-0 realtive bottom-1`}>{currentAccount.length > 0 ? 'Connected' : 'MetaMask'}</p>
        </div>
      </div>

      <div className={`absolute bottom-0 h-28 w-full bg-gray-900`} />
    </div>
  )
}

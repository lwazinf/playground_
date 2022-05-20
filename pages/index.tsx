import type { NextPage } from 'next'

import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { wallet_ } from '../components/atoms/atoms'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPowerOff,
  faCartShopping,
  faAdd,
  faInfoCircle,
  faHeart,
  faUserFriends,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  const [user_, setUser_] = useRecoilState(wallet_)
  
  return (
    <div className="flex flex-col items-center justify-center">
      
      <p
        className={`flex flex-row items-center justify-center font-thin text-gray-700`}
      >
        Welcome to Fund Fiction
      </p>
      {user_ ? (
        <div
          className={`m-2 mx-auto flex h-[66px] w-[350px] flex-row items-center justify-center rounded-[5px] font-thin`}
        >
          {/* <FontAwesomeIcon icon={faHeart} className="h-[25px] w-[25px] text-[ghostwhite] hover:text-pink-400" /> */}

          <div
            className={`m-1 flex h-[50px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-[4px] border-[1px] border-solid border-white bg-gray-800 p-0 text-[15px] font-black text-white transition-all duration-200 hover:bg-white hover:border-gray-800 hover:text-gray-800 hover:pt-3`}
          >
            create
          </div>

          <div
            className={`m-1 flex h-[50px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-[4px] border-[1px] border-solid border-gray-800 bg-white p-0 text-[15px] font-black text-gray-800 transition-all duration-300 hover:border-white hover:bg-gray-700 hover:pt-3 hover:text-white`}
          >
            fund
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div
        className={`m-0 flex h-[50px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-[4px] border-[1px] border-solid border-gray-800 bg-white p-0 text-[15px] font-black text-gray-800 transition-all duration-300 hover:border-white hover:bg-gray-700 hover:pt-3 hover:text-white`}
      >
        participate
      </div>
    </div>
  )
}

export default Home

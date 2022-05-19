import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { node_ } from './atoms/atoms'

interface Layout_Props {
  children: JSX.Element
}

export const Layout_ = ({ children }: Layout_Props) => {
  const [sample_, setSample_] = useRecoilState(node_)
  return (
    <div className={`flex min-h-screen flex-col items-center justify-center py-2`}>
        <Head>
        <title>{ sample_ }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { children }
      
    </div>
  )
}
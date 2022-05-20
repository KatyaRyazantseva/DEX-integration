import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'

const style = {
  wrapper: `h-screen max-h-screen min-h-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-start`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
    </div>
  )
}

export default Home

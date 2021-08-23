import Head from 'next/head'
import {Input} from "postcss";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import {useState} from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="">
      <Head>
        <title>FinnQL</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <NavBar openMenu={openMenu} setOpenMenu = {setOpenMenu}/>
        <div className={"w-full flex"}>
          { openMenu && <SideBar className={""}/>}
          <Body/>
        </div>

      </main>



    </div>
  )
}

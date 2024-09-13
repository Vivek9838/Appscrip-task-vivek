"use client"
import React, { useState } from 'react'
import style from "./Navbar.module.css"
import Logo from "@/assests/download.png"
import Image from 'next/image'


function Navbar() {
  const [showMenu, setShowMenu] = useState(false); 

    return (
        <>
            <div className={style.navbar}>
                <div className={style.menu} onClick={()=>setShowMenu(!showMenu)}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className={style.logoImages}>
                    <Image src={Logo} className={style.logo} />
                </div>

                <div className={style.LogoTexts}>
                    <h2>LOGO</h2>
                </div>
                {showMenu ? <div className={style.menuDiv}>
                    <div className={style.shop}>
                        <p>SHOP</p>
                        <p>SKILLS</p>
                        <p>STORIES</p>
                        <p>ABOUT</p>
                        <p>CONTACT US</p>
                    </div>
                </div> : null}
                <div className={style.logoImage}>
                    <Image src={Logo} className={style.logo} />
                </div>

                <div className={style.LogoText}>
                    <h2>LOGO</h2>
                </div>
                <div className={style.adminPanel}>
                    <div className="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="favorite">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="bag">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div className={style.user}>
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div className={style.language}>
                        <span>ENG <i class="fa-solid fa-angle-down"></i></span>
                    </div>
                </div>
            </div>
            <div className={style.btnShop}>
                <p>SHOP</p>
                <p>SKILLS</p>
                <p>STORIES</p>
                <p>ABOUT</p>
                <p>CONTACT US</p>
            </div>
            <hr className={style.hr} />
            <div className={style.home}> <span className={style.homes}> HOME </span> | <span>SHOP</span></div>
            <div className={style.discover}>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />
                    Ad earum mollitia ea totam dicta dolores fugiat officia officiis odio necessitatibus at,
                    <br />
                    nobis beatae, nisi in expedita quisquam sequi soluta aliquam! </p>
            </div>
            <hr className={style.hr} />
        </>
    )
}

export default Navbar

"use client"
import React, { useState } from 'react';
import style from "./Footer.module.css"
import Flag from "@/assests/usaFlag.png"
import Image from 'next/image';
import Google from "@/assests/gpay.png"
import Master from "@/assests/master.jpeg"
import Paypal from "@/assests/paypal.png"
import Amex from "@/assests/amex.png"
import Apple from "@/assests/apple.png"
import Phone from "@/assests/phone.png"


function Footer() {
  const [showMeta , setShowMeta] = useState(false)
  const [showQuick , setShowQuick] = useState(false)
  const [showSocial , setShowSocial] = useState(false)

  return (
    <div className={style.footer}>
      <div className={style.contactUs}>
        <div className={style.input}>
          <p className={style.bepara}>BE THE FIRST TO KNOW</p><br />
          <span className={style.res}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse in voluptas.</span>
          <span className={style.unres}>Sign up for updates from metta muse.</span><br />
          <div className={style.inputs}>
          <input className={style.beinput} type="text" placeholder='Enter your e-mail' />
          <button>SUBSCRIBE</button>
          </div>
        </div>
        <hr className={style.hrs} />
        <div className={style.contact}>
          <div className="div">
          <p>CONTACT US</p><br />
          <span>+44 221 133 5360</span><br /><br />
          <span>customercare@mettamuse.com</span>
          </div><br />
          <hr className={style.hrs} />
          <div>
            <p>CURRENCY</p><br />
            <ul className={style.flag}>
            <Image src={Flag} alt="" className={style.img} />
            <li>USD</li>
            </ul><br />
             <span className={style.tran}>Transactions will be complete in Euros and a currency reference is available.</span>
          </div>
        </div>
      </div>
      <hr className={style.hr} />
      <div className={style.footerData}>
        <div className={style.metaRes} onClick={()=>setShowMeta(!showMeta)}>
          <p>metta muse</p>
          {showMeta ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
        </div>
        {showMeta ? <div className={style.metaCrus}>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances</p>
              </div> : null}
              <hr className={style.hrss} />
              
          <div className={style.metta}>
             <ul>
              <p className={style.mettap}>metta muse</p>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances</li>
             </ul>
          </div>
          <div className={style.quickRes} onClick={()=>setShowQuick(!showQuick)}>
          <p>QUICK LINKS</p>
          {showQuick ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
        </div>
        {showQuick ? <div className={style.quickCrus}>
              <p>Orders & Shipping</p>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FASQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              </div> : null}
              <hr className={style.hrss} />
          <div className={style.quick}>
          <ul>
              <p>QUICK LINKS</p>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FASQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
             </ul>
          </div>
          <div className={style.follow}>
          <div className={style.metaRes} onClick={()=>setShowSocial(!showSocial)}>
          <p>FOLLOW US</p><br />
          {showSocial ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
        </div>
        {showSocial ?  <div className={style.followsRes}>
            <div className={style.linkdRes}>
              <div className={style.linked}>
              <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className={style.instra}><i class="fa-brands fa-instagram"></i></div>
            </div>
            </div> : null}
              <hr className={style.hrss} />
            <div className={style.follows}>
            <p>FOLLOW US</p><br />
            <div className={style.linkd}>
              <div className={style.linked}>
              <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className={style.instra}><i class="fa-brands fa-instagram"></i></div>
            </div>
            </div>
            <br />
            <p className={style.museAcc}>metta muse ACCEPTS</p><br />
            <div className={style.images}>
             <Image src={Google} className={style.imgss} alt='cdjh' />
             <Image src={Master} className={style.imgss} alt='cdjh'/>
             <Image src={Paypal} className={style.imgss} alt='cdjh' />
             <Image src={Amex} className={style.imgss}  alt='cdjh'/>
             <Image src={Apple} className={style.imgss} alt='cdjh'/>
             <Image src={Phone} className={style.imgss} alt='cdjh'/>
            </div>
          </div>
      </div>
      <div className={style.copyRight}>
      <span >Copyright © 2023 mettamuse.All rights reserved</span>

      </div>
    </div>
  )
}

export default Footer

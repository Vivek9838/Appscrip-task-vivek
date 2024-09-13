"use client"
import React, { useState } from 'react'
import style from "./Filter.module.css"
import Sidebar from '../sidebar/Sidebar';
import Item from '../main/Item';


function Filter() {
    const [hide, setHide] = useState(false);
    const [hideSideBar, setHideSideBar] = useState(false);
    const [hideSideBars, setHideSideBars] = useState(false);
    const [selectedParagraph, setSelectedParagraph] = useState(null);

    const paragraphs = [
        'RECOMMENDED',
        'NEWEST FIRST',
        'POPULAR',
        'PRICE: HIGH TO LOW',
        'PRICE: LOW TO HIGH',
      ];

      function handleClick(index){
        setSelectedParagraph(index)
      }

    return (
        <>
            <div className={style.divide}>
                <div className={style.filter}>
                    <div className={style.items}>
                        <p>3425 ITEMS</p>
                    </div>
                    <div className={style.showAndHide}>
                        {hideSideBar ? <p onClick={() => setHideSideBar(!hideSideBar)}><i class="fa-solid fa-angle-left"></i> HIDE FILTER</p> : <p onClick={() => setHideSideBar(!hideSideBar)}><i class="fa-solid fa-angle-right"></i> SHOW FILTER</p>}
                    </div>
                </div>
                <div className={style.filters}>
                    <div className={style.showAndHides}>
                       <p onClick={()=>setHideSideBars(!hideSideBars)}>FILTER</p>
                    </div>
                    <div className="recomndeds">
                        <p  onClick={() => setHide(!hide)}>RECOMMENDED <i class="fa-solid fa-angle-down"></i></p>
                    </div>
                </div>
                <div className={style.recomnded}>
                    <p onClick={() => setHide(!hide)}>RECOMMENDED <i class="fa-solid fa-angle-down"></i></p>
                </div>
                {hide ? <div className={style.hideAndShow}>
                    {paragraphs.map((text,index)=>(
                        <div onClick={()=>handleClick(index)} className={style.para} key={index}>
                            <div className={style.icon}>
                            {selectedParagraph === index && <i class="fa-solid fa-check"></i> }
                            </div>
                            <p>{text}</p>
                            
                        </div>
                    ))}
                </div> : null}
            </div>
            <hr className={style.hr} />
            {hideSideBar ? <div className={style.sideBarShow}>
                <Sidebar />
                <Item />
            </div> : <div className={style.sideBarHide}>
                {/* <Sidebar /> */}
                <Item />
            </div>}
            {hideSideBars ? <div className={style.sideBarShows}>
                <Sidebar />
            </div> : <div className={style.sideBarHide}>
                {/* <Sidebar /> */}
                <Item />
            </div>}


        </>

    )
}

export default Filter

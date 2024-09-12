"use client"
import React, { useState } from 'react';
import style from "./Sidebar.module.css"

function Sidebar() {
 const [hide , setHide] = useState(true);
 const [hideOcc , setHideOcc] = useState(false);
 const [hideWork , setHideWork] = useState(false);
 const [hideFabric , setHideFabric] = useState(false);
 const [hideSeg , setHideSeg] = useState(false);
 const [hideSuit , setHideSuit] = useState(false);
 const [hideRaw , setHideRaw] = useState(false);
 const [hidePattern , setHidePattern] = useState(false);

    return (
        <>
            <div className={style.filter}>
                <div className="customizle">
                    <input type="checkbox" name="custom" /> CUSTOMZBLE
                </div>
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHide(!hide)}>
                    <div className="ideal">
                        <p>IDEAL FOR</p>
                        <span>All</span>
                    </div>
                    {hide ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hide ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHideOcc(!hideOcc)}>
                    <div className="ideal">
                        <p>OCCASION</p>
                        <span>All</span>
                    </div>
                    {hideOcc ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hideOcc ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHideWork(!hideWork)}>
                    <div className="ideal">
                        <p>WORK</p>
                        <span>All</span>
                    </div>
                    {hideWork ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hideWork ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHideFabric(!hideFabric)}>
                    <div className="ideal">
                        <p>FABRIC</p>
                        <span>All</span>
                    </div>
                    {hideFabric ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hideFabric ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHideSeg(!hideSeg)}>
                    <div className="ideal">
                        <p>SEGMENT</p>
                        <span>All</span>
                    </div>
                    {hideSeg ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hideSeg ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHideSuit(!hideSuit)}>
                    <div className="ideal">
                        <p>SUITABLE FOR</p>
                        <span>All</span>
                    </div>
                    {hideSuit ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hideSuit ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHideRaw(!hideRaw)}>
                    <div className="ideal">
                        <p>RAW MATERIALS</p>
                        <span>All</span>
                    </div>
                    {hideRaw ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hideRaw ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
                <div className={style.idealfor} onClick={()=>setHidePattern(!hidePattern)}>
                    <div className="ideal">
                        <p>PATTERN</p>
                        <span>All</span>
                    </div>
                    {hidePattern ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </div>
               {hidePattern ?  <div className={style.dropDown}>
                    <p className={style.para}>unselect all</p>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Men
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="men" aria-label="Men Category" />
                        Baby & kids
                    </label>
                </div> : null}
                <hr className={style.hr} />
            </div>

        </>
    )
}

export default Sidebar

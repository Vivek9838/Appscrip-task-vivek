"use client"
import React, { useEffect, useState } from 'react'
import style from "./Item.module.css"
import Link from 'next/link'


function Item() {

  const [data,setData] = useState([])

  useEffect(()=>{
    async function fetchData() {
      const response =await fetch("https://fakestoreapi.com/products");
      const res =await response.json();
      setData(res);
    }
    fetchData()
  },[])

  
  
  return (
    <div className={style.item}>
      <div className={style.itemImage}>
      {data?.map((el)=>(
        <div className={style.card}>
        <div className="cardImage">
          <img src={el.image} alt='image' />
          <p>{el.title}</p>
          <Link href='/' >Sign in </Link><span>or Create an account to see pricing.</span>
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default Item

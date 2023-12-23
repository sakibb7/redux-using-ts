'use client'
import Image from 'next/image'
import {useState} from "react"

import { addText } from "@/redux/features/searchSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function Home() {
  const [value, setValue] = useState("another")
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main>
      hello
      <button className='' onClick={()=> dispatch(addText(value))}>Click me</button>
      <input type='text' onChange={(e)=> dispatch(addText(e.target.value))} />
    </main>
  )
}

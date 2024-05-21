'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux-global/store";
import { fetchPosts } from "@/src/redux-global/posterSlice";
import { useAppDispath, useAppSelector } from "@/src/redux-global/hooks";


export default function Catalog() {
  const dispatch = useAppDispath();
  const posters = useAppSelector((state: RootState) => state.list)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  return (
    <div className="posters">
      {posters.map((poster) => (
        <div key={poster.id} className="posters_items" >
          <li>
            <Image
              src={poster.urls.small}
              alt={poster.alt_description}
              width={300}
              height={300}
              layout="responsive"
              priority={true} />
          </li>
        </div>
      ))}
    </div>
  )
}
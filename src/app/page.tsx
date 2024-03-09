"use client"

import React, {useEffect} from "react";
import ParentContainer from "@/components/ParentContainer";
export default function Home() {


useEffect(()=> {
  removeFouc(document.documentElement);
})

  const removeFouc = (foucElement: any) => {
    foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
  };

  return (
   <ParentContainer/>
  );
}

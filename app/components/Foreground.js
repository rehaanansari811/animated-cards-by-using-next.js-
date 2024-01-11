"use client"
import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const data = [
        { desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", fileSize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now" ,tagColor:"blue"} },
        { desc: "Vel voluptatibus? Corporis, asperiores!", fileSize: ".5mb", close: false, tag: { isOpen: true, tagTitle: "Upload now",tagColor:"green" } },
        { desc: " At ipsum eveniet sequi voluptatum debitis quo.", fileSize: ".2mb", close: true, tag: { isOpen: false, tagTitle: "Download Now" } }
    ]
    const ref = useRef(null);
    return (
        <div ref={ref} className="w-full top-0 left-0 h-screen fixed z-[3] flex gap-10 p-5 flex-wrap" >
            {
                data.map((item,index) => (
                    <Card item={item} refference={ref} />

                ))
            }
        </div>
    )
}

export default Foreground
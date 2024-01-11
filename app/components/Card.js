"use client"
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ item, refference }) => {

    return (
        <motion.div drag dragConstraints={refference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 5 }} className="w-60 h-72 flex-shrink-0 relative overflow-hidden rounded-[30px] bg-zinc-900/60 px-8 py-10 text-white ">
            <FaRegFileAlt />
            <p className='text-sm  leading-tight mt-5 font-light '>{item.desc}</p>
            <div className="footer absolute bottom-0  w-full left-0">
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5 className='text-sm'>{item.fileSize}</h5>
                    {item.close ?
                        (<MdOutlineDownloadForOffline className='text-zinc-400 h-7 w-7' />)
                        :
                        (<IoCloseCircleOutline className='text-zinc-400 h-7 w-7' />)
                    }

                </div>
                {item.tag.isOpen &&
                    (
                        <div className={`tag w-full py-4 ${item.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-400"}`}>
                            <h3 className='text-center font-semibold text-xs'>{item.tag.tagTitle}</h3>
                        </div>
                    )

                }

            </div>
        </motion.div>
    )
}

export default Card
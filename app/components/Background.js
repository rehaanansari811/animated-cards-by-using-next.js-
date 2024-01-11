import React from 'react'

const Background = () => {
    return (
        <div className='w-full h-screen z-[2] fixed'>
            <div className='w-full absolute top-[5%] py-10 flex justify-center text-zinc-400 text-xl font-semibold tracking-wide'>Documents</div>
            <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-wider leading-none font-medium text-zinc-500'>Docs</h1>
        </div>
    )
}

export default Background
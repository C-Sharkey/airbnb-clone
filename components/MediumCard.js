import React from 'react'
import Image from 'next/image'

export default function Medium({ liveAnywhereData }) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 rounded-lg ease-out">
            <div className="relative h-80 w-80 mb-4">
                <Image 
                    src={liveAnywhereData.img} 
                    layout="fill"
                    className="rounded-xl"
                />
            </div>
            <h3 className="font-bold text-lg">{liveAnywhereData.title}</h3>

        </div>
    )
}

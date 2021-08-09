import React from 'react'

export default function SmallCard({ exploreData }) {
    return (
        <div className="rounded-md flex p-2 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200">
            <img src={exploreData.img} className="mr-2 h-16 w-16 rounded-lg ease-out"/>
            <div className="">
                <h3 className="font-bold text-lg">{exploreData.location}</h3>
                <span className="">{exploreData.distance}</span>
            </div>
        </div>
    )
}

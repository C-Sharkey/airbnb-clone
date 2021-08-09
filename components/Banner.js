import React from 'react'

const backgroundImage = "https://links.papareact.com/0fm"

export default function Banner() {
    return (
        <div 
            className="relative w-full bg-cover bg-center h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div
                className="absolute top-1/2 w-full text-center"
            >
                <p 
                    className="text-sm sm:text-lg"
                >
                    Not sure where to go?</p>
                    <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                        I'm Flexible
                    </button>
            </div>
        </div>
    )
}

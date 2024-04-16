import React from 'react'

export const SectionInformation = ({ prevFeature, features, currentFeature, nextFeature }) => {
    return (
        <div className="relative mt-10 w-full">
            <div className="flex items-center space-x-5 justify-center">
                <button className="text-2xl text-white" onClick={prevFeature}>
                    {/* Flecha izquierda */}
                    <div className="w-0 h-0 
                border-t-[20px] border-t-transparent
                border-r-[20px] border-r-gray-900
                border-b-[20px] border-b-transparent">
                    </div>
                </button>
                <div className="w-4/6"> {/* Cambia el ancho al 4/6 del contenedor */}
                    <div className="bg-gray-900 p-5 flex flex-col items-center rounded-lg">
                        <img
                            src={features[currentFeature].image}
                            alt={features[currentFeature].title}
                            className={`w-24 h-24 mb-3 transition-opacity duration-500 ease-in-out ${currentFeature === 0 ? 'slide-enter' : 'slide-enter-active'}`}
                        />
                        <h3 className="text-xl font-bold text-green-500 mb-2">
                            {features[currentFeature].title}
                        </h3>
                        <p className="text-gray-500 text-lg mt-2 font-semibold">
                            {features[currentFeature].description}
                        </p>
                    </div>
                </div>
                <button className="text-2xl text-white" onClick={nextFeature}>
                    {/* Flecha derecha */}
                    <div className="w-0 h-0 
                border-t-[20px] border-t-transparent
                border-l-[20px] border-l-gray-900
                border-b-[20px] border-b-transparent">
                    </div>
                </button>
            </div>
            <div className="mt-3 flex justify-center">
                {features.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 mx-2 rounded-full ${index === currentFeature ? 'bg-black' : 'bg-white'}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

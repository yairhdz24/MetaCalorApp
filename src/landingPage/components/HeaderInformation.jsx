import React from 'react'

export const HeaderInformation = ({ImgLogo}) => {
    return (
        <div className="bg-white p-14">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold text-green-500">¿Qué es MetaCalor?</h2>
                    <p className="text-gray-600 text-lg mt-4 font-semibold">
                        Metacalor es una aplicación web que te permite calcular el número de calorías que debes consumir al día para mantener tu peso, perder peso o aumentar de peso.
                    </p>
                </div>
                <p className="text-orange-600 mt-4 text-cente text-xl font-bold">
                    "Cumple tus metas con MetaCalor"
                </p>
                <ImgLogo />
            </div>
        </div>
    )
}

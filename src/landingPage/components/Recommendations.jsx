

export const Recommendations = ({ imageStyle, img, username, recommendation, id, nextRecomendations }) => {
    return (
        <>
            <p className='text-2xl font-bold text-white text-center mt-10 mb- uppercase'>Recomendaciones de nuestros usuarios:</p>
            <div className="bg-slate-800 mx-auto rounded-md mt-16 max-w-[870px]">

                <div id="about" className="container mx-auto p-8 text-center">
                    <div className="relative">
                        <img
                            style={imageStyle}
                            src={img}
                            alt={img}
                            className="w-48 h-48 rounded-full mx-auto -mt-24 object-cover"
                        />
                    </div>

                    <div className='mt-3'>
                        <p className='font-semibold text-orange-500'>{username}</p>
                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <div key={id}>
                            <h2 className='text-white text-xl font-bold'>{recommendation}</h2>
                        </div>
                    </div>

                    <button
                        className="bg-green-500 hover:bg-green-700 mt-5 text-white p-4 rounded-md text-lg transition duration-300"
                        onClick={nextRecomendations}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    )
}

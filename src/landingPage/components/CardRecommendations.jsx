import React from 'react';

export const CardRecommendations = ({ nextQuote, prevQuote, currentQuote }) => {
  return (
    <section className="bg-gray-500 dark:bg-gray-900 w-full">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        {/* <p className="text-4xl font-bold text-white md:pl-0">tESTIMONIOS</p> */}

        <h1 className="mt-2 text-4xl text-center font-bold text-gray-800 capitalize lg:text-5xl dark:text-white  lg:ml-0">
        ¿Que dicen nuestros <span className="text-orange-500">expertos</span>?
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-green-600 -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-5 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={currentQuote.img} 
              alt="client photo"
              loading="lazy"

            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  {currentQuote.name}
                </p>
                <p className="text-yellow-400" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} >{currentQuote.role} </p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                "{currentQuote.consejo}"
              </p>

              <div className="flex items-center justify-between mt-6 md:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-white bg-orange-500 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-orange-600"
                  onClick={prevQuote}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-white bg-orange-500 transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-orange-600"
                  onClick={nextQuote}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

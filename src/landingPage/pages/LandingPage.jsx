import { InformationLandingPage } from "../components/InformationLandingPage";
import { CardRecommendations } from "../components/CardRecommendations";
import { Header } from "../components/Header";
import { dataQuotes } from "../data/dataQuotes";
import { useState } from "react";
import { Fotter } from "../components/Fotter";
import { Testimonials } from "../components/Testimonials";
import { ImageGallery } from "../components/ImageGalery";
import platillo from '../../images/about.jpg'
import { NavLink } from "react-router-dom";

export const LandingPage = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = dataQuotes;

  const nextQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <div className="max-h-screen flex flex-col items-center bg-white">
      <Header />

      <InformationLandingPage />

      <div className="container mx-auto mt-5 p-8 text-center text-gray-900 bg-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Descubre por qué <span className="text-green-500">METACALOR</span> es tu mejor elección
        </h2>
        
        <p className="text-sm md:text-base lg:text-lg font-poppins">
          Supervisa con precisión tu consumo calórico, recibe recomendaciones personalizadas de platillos y realiza un seguimiento detallado de tus calorías diarias con nuestra aplicación.<br />
          Únete a la revolución nutricional con <span className="text-green-500 font-semibold">METACALOR</span> y transforma tu bienestar desde hoy.
        </p>
      </div>
      


      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="relative">
          <img className="w-full rounded-lg shadow-lg" src={platillo} alt="platillo image" />
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-poppins">
            <span className="text-gray-900">¿Quiénes</span> <span className="text-green-500">somos?</span>
          </h2>



          <p className="mb-6 font-poppins text-gray-900 md:text-lg">
            <span className="text-green-500 font-poppins">
              MetaCalor</span> es tu compañero en el viaje hacia una vida más saludable.
            Contar calorías y recibir consejos especializados son solo el principio.
            Conéctate con una comunidad que comparte tus intereses nutrimentales.
            Descubre nuevas formas de mejorar tu estilo de vida con <span className="text-green-500 font-poppins">MetaCalor</span>.
          </p>
          <NavLink
            to="/auth/login"
            className="inline-flex items-center text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
          >
            Empezar ahora
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </NavLink>
        </div>
      </div>

      <Testimonials/>
      
      <CardRecommendations nextQuote={nextQuote} prevQuote={prevQuote} currentQuote={currentQuote} />

      <Fotter />
    </div>

  );
}

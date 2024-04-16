import image from '../../../src/images/platolanding.jpg';

export const InformationLandingPage = () => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="landing"
        className="w-full"
      />

    <div className="absolute bottom-0 left-0 sm:left-20 w-full sm:w-1/2 h-1/2 bg-green-600 opacity-80">
      </div>

      <div className="felx-1 absolute bottom-0 left-0 sm:left-20 w-full sm:w-1/2 h-1/2 flex flex-col items-center justify-center text-white">
        <p className="font-extrabold text-2xl sm:text-4xl leading-tight">¡Tu Viaje hacia una Vida Saludable!</p>
        <p className=" text-lg sm:text-xl font-semibold">Controla tu Dieta, Alcanza tus Metas</p>
      </div>

    </div>

  );
};

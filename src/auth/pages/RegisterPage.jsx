import { FormRegister } from "../components/FormRegister";
import { ImgLogo } from "../../components/ImgLogo";
import frutas from "../../images/frutas.jpg"
import { BackButton } from "../../landingPage/components/ButtonBack.jsx";

export const RegisterPage = () => {

  return (

    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${frutas})`,
        backgroundSize: 'cover',
      }
      }
    >
      <BackButton />

      <div className="bg-green-800 opacity-60 w-full h-full absolute top-0 left-0 z-0 blur-md rounded-lg"></div>

      <div className='flex flex-col items-center justify-end min-h-screen'
        style={{ backgroundImage: `url(${''})`, backgroundSize: 'cover', backgroundPosition: 'center', width: 'full' }}>
        <div className="flex justify-center z-10">
          <ImgLogo />
        </div>
        <FormRegister />
        <footer className="text-white font-semibold mt-10 mb-10 text-center z-10" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          &copy; 2023 MetaCalor - Todos los derechos reservados.
        </footer>
      </div>
    </div>

  );
};
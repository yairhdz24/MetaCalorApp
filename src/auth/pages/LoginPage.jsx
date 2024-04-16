import { FormLogin } from "../components/FormLogin.jsx";
import { ImgLogo } from "../../components/ImgLogo";
import { BackButton } from "../../landingPage/components/ButtonBack.jsx";
import image from '../../images/frutas_login.jpg';


export const LoginPage = () => {

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      <BackButton />

      <div className="bg-green-800 opacity-50 w-full h-full absolute top-0 left-0 z-0 blur-md rounded-lg"></div>
      <div className="sm:w-auto md:w-1/3 lg:w-2/5 mx-auto items-center relative">
        <div className="flex justify-center items-center relative z-1">
          <ImgLogo className="w-1/2 sm:w-1/3 md:w-1/2 relative" />
        </div>

        <FormLogin />

        <footer className="text-white font-semibold mt-10 mb-10 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          &copy; 2023 MetaCalor - Todos los derechos reservados.
        </footer>

      </div>
    </div>
  );
};

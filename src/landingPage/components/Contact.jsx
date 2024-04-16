import React from 'react';
import almuerzoImage from '../images/almuerzo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';
import whatsapp from '../images/whatsapp.png';
import { BackButton } from './ButtonBack';



export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Mensaje enviado:', message);

        emailjs.send('service_10esysk', 'template_iui8o56', {
            to_email: 'yair',
            from_email: email, 
            from_name: name,  
            message: message
          }, '1QxEknEezuKzpAErk')

            .then(function (response) {
                console.log('Correo electrónico enviado con éxito', response);
                toast.success('Mensaje enviado correctamente', {
                    duration: 5000,
                    position: 'top-right',
                });
                form.reset();
            }, function (error) {
                console.error('Error al enviar el correo electrónico', error);
                toast.error('Error al enviar el mensaje', {
                    duration: 5000,
                    position: 'top-right',
                });
            });
    };

    return (
        <div
            className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${almuerzoImage})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="z-10">
            <BackButton />
            </div>
            
            <div className="bg-green-600 opacity-70 w-full h-full absolute top-0 left-0 z-0 blur-md rounded-lg"></div>
            <div className="bg-white text-center p-8 rounded-lg shadow-lg z-9 relative">
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-poppins">
                    CONTACTO
                </h1>
                <p className="text-lg text-gray-700 sm:text-sm mb-6 font-poppins text-center">
                    Puedes contactarnos enviándonos un mensaje o a través de nuestras redes sociales.<br />
                    ¡Estamos aquí para ayudarte!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 ">
                    <ContactItem
                        iconSrc={instagram}
                        text="Instagram"
                        link="https://www.instagram.com/meta.calor/"
                    />
                    <ContactItem
                        iconSrc={whatsapp}
                        text="WhatsApp"
                        link="https://api.whatsapp.com/send?phone=523326242538"
                    />
                    <ContactItem
                        iconSrc={facebook}
                        text="Facebook"
                        link="https://www.facebook.com/profile.php?id=61553302805321"
                    />
                    <ContactItem
                        iconSrc={gmail}
                        text="Correo"
                        link="mailto:metacalor@gmail.com"
                    />
                </div>
                <div className="my-2">
                    <hr className="border-t border-gray-400" />
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-1 text-left rounded p-3">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-poppins text-sm mb-1">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-blue-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-poppins text-sm mb-1">
                            Correo Electrónico:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-blue-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-poppins text-sm mb-1">
                            Mensaje:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-blue-100"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-5 rounded-lg font-poppins hover:bg-green-800"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
                <div className="mt-2 text-gray-600 text-sm font-poppins">
                    &copy; 2023 MetaCalor - Todos los derechos reservados.
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

const ContactItem = ({ iconSrc, text, link }) => (
    <div className="bg-white p-2 md:p-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <a href={link} target="_blank" rel="noreferrer">
            <img
                src={iconSrc}
                alt={text}
                className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-2"
                loading="lazy"
            />
        </a>
        <p className="text-sm md:text-base font-semibold text-gray-700">{text}</p>
    </div>
);

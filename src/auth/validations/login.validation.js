import * as yup from "yup";


const messageRequire = 'Este campo es requerido';

export const loginSchema = yup.object({
    password: yup.string().min(8, 'La contraseña debe tener minimo 8 caracteres').required(messageRequire),
    email: yup.string().email('Debe de ser un email valido').required(messageRequire),
}).required();
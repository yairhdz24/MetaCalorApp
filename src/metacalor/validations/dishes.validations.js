import * as yup from "yup";


const messageRequire = 'Este campo es requerido';

export const disheschema = yup.object({
    name: yup.string().required(messageRequire),
    aliments: yup.array().required(messageRequire),
}).required();
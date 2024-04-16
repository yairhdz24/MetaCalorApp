import * as yup from "yup";


const messageRequire = 'Este campo es requerido';

export const profileSchema = yup.object({
    name: yup.string().required(messageRequire),
    lastName: yup.string().required(messageRequire),
    birthday: yup.date().required(messageRequire),
    gender: yup.string().oneOf(['male', 'female']).required(messageRequire),
    height: yup.number().typeError('El campo tiene que ser numerico').required(messageRequire),
    weight: yup.number().typeError('El campo tiene que ser numerico').required(messageRequire),
}).required();

import { useEffect, useMemo, useState } from "react"

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const [formValidation, setFormValidation] = useState({});

    
    //Cada vez que cambia el formState ejecutaremos la funcion de createValidators();
    useEffect(() => {
        createValidators();
    }, [formState]);


    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys(formValidation )) {
            //Si no es valido retorna false
            if(formValidation[formValue] !== null ) return false;
        }
        //SI es valido retorna true
        return true;
    },[formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }
    //Reset Form
    const onResetForm = () => {
        setFormState(initialForm)
    }

    const createValidators = () => {
        const formCheckedValues = {}

        for (const formField of Object.keys( formValidations )) {
            const [fn, errorMessage] = formValidations[formField];
            //Es como crear una propiedad computada...
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        
        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}
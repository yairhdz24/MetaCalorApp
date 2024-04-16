import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { parse, differenceInYears } from 'date-fns';

export const InputField = ({ label, placeholder, name, register, errors, type, validationRules, children }) => {
    const handleInput = (event) => {
        if (type === 'text' && event.target.value !== '') {
            // Validar el formato permitiendo solo números y un punto como decimal
            const regex = /^[0-9]*\.?[0-9]*$/;
            if (!regex.test(event.target.value)) {
                // Limitar la longitud a cuatro caracteres
                const inputValue = event.target.value.slice(0, 4);
                event.target.value = inputValue.replace(/[^0-9.]/g, '');
            }
        }
    };

    const validateDate = (value) => {
        const selectedDate = parse(value, 'yyyy-MM-dd', new Date());
        const currentDate = new Date();
      
        if (differenceInYears(currentDate, selectedDate) < 18) {
          return 'Debes ser mayor de 18 años.';
        }
      
        return undefined;
      };

    return (
        <div className="">
            <label className="font-bold uppercase flex justify-start" style={{ color: '#0DB30D' }}>
                {label}
            </label>
            {type === 'select' ? (
                <select
                    className={`pl-7 border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md shadow-md ${errors[name] ? 'border-red-500' : ''}`}
                    {...register(name, { ...validationRules, validate: validateDate })}
                >
                    {children}
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-md ${errors[name] ? 'border-red-500' : ''}`}
                    {...register(name, { ...validationRules, validate: validateDate })}
                    onInput={handleInput}
                />
            )}
            {errors[name]?.type === 'required' && <ErrorMessage error={validationRules?.required?.message || 'Campo requerido'} />}
            {errors[name]?.type === 'pattern' && <ErrorMessage error={'Comprueba tu email'} />}
            {errors[name]?.type === 'minLength' && <ErrorMessage error={'Debe de contener más de 8 caracteres'} />}
            {errors[name]?.type === 'min' && <ErrorMessage error={'Número inválido'} />}
            {errors[name]?.type === 'max' && <ErrorMessage error={'Número inválido'} />}
            {errors[name]?.type === 'validate' && <ErrorMessage error={'Debes ser mayor de 18 años.'} />}
        </div>
    );
};

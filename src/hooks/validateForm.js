


export const validateForm = (values) => {
    let errors = {};
    
    if (!values.name) {
        errors.name = 'Name is required';
    }
    
    if (!values.email) {
        errors.email = 'Email is required';
    }
    
    if (!values.password) {
        errors.password = 'Password is required';
    }
    
    return errors;
    }
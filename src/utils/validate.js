export const validateName = (name) => {
    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{6,28}$/.test(name);
    return isNameValid ? null : "Username not valid";
};

export const checkValidData = (email,password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    

    return null;
};
export const validateData = (name,email,password,isSignIn) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]+(?:['\- ][a-zA-Z]+)*$/;
    const isEmailValid = emailRegex.test(email)
    const isPasswordValid = passwordRegex.test(password);
    const isNameValid = nameRegex.test(name);
    if(!isSignIn){
        if(!isNameValid) return "Full Name is not Valid";
    }
    if(!isEmailValid){
        return "Email is not Valid";
    }
    if(!isPasswordValid){
        if (password.length === 0) {
            return "Password cannot be empty.";
        }

        if (password.length < 8) {
            return "Password must be at least 8 characters long.";
        }

        if (password[0] !== password[0].toUpperCase()) {
            return "The first letter must be a capital letter.";
        }

        if (!/\d/.test(password)) {
            return "The password must contain at least one number.";
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return "The password must contain at least one symbol (e.g., !, @, #, $).";
        }

        return "";
   
    }
    return null;

}
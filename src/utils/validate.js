export const validateData = (name,email,password,isSignIn) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
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
        return "Password is not Valid";
    }
    return null;

}
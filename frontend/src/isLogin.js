import React, { useState } from 'react';

function IsLogin() {
    const initialClass = "border-b border-slate-400 placeholder:text-gray-400 pb-2";

    const [inputClasses, setInputClasses] = useState({
        hospitalName: initialClass,
        email: initialClass,
        password: initialClass,
        accessCode: initialClass,
    });

    const [inputValues, setInputValues] = useState({
        hospitalName: "",
        email: "",
        password: "",
        accessCode: "",
    });

    const [focusedInput, setFocusedInput] = useState("");
    const [errorMessages, setErrorMessages] = useState({});

    const handleInputFocus = (inputName) => {
        setFocusedInput(inputName);
        setInputClasses((prev) => ({
            ...prev,
            [inputName]: "text-black text-xl font-semibold border-b border-black placeholder:text-black focus:outline-none pb-2",
        }));

        // Reset error message for the focused input
        setErrorMessages((prev) => ({
            ...prev,
            [inputName]: "",
        }));

        // Reset other input classes
        Object.keys(inputClasses).forEach((key) => {
            if (key !== inputName) {
                setInputClasses((prev) => ({
                    ...prev,
                    [key]: initialClass,
                }));
            }
        });
    };

    const resetInputClasses = () => {
        setInputClasses({
            hospitalName: initialClass,
            email: initialClass,
            password: initialClass,
            accessCode: initialClass,
        });
        setInputValues({
            hospitalName: "",
            email: "",
            password: "",
            accessCode: "",
        });
        setFocusedInput(""); // Reset focused input
        setErrorMessages({}); // Reset error messages
    };

    const LoginClick = (event) => {
        event.preventDefault(); // Prevent default form submission

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, at least 1 letter and 1 number
        const accessCodePattern = /^[0-9]{3,}$/; // Example: 5 alphanumeric characters

        const newErrorMessages = {};

        // Validation checks
        if (!inputValues.hospitalName) {
            newErrorMessages.hospitalName = "Hospital Name is required.";
        }
        if (!emailPattern.test(inputValues.email)) {
            newErrorMessages.email = "Invalid email format.";
        }
        if (!passwordPattern.test(inputValues.password)) {
            newErrorMessages.password = "Password must be at least 8 characters long and include letters and numbers.";
        }
        if (!accessCodePattern.test(inputValues.accessCode)) {
            newErrorMessages.accessCode = "Access Code must be 3 nuber long.";
        }

        if (Object.keys(newErrorMessages).length > 0) {
            setErrorMessages(newErrorMessages);
            return; // Stop execution if there are errors
        }

        // Handle form submission logic here
        alert("Form submitted!");
        resetInputClasses(); // Reset input classes and values after submission
    };

    return (
        <div>
            <form className="login-form-field">
                <div className="shadow-2xl mt-[80px] border-l-2 border-t-2 border-gray-300 flex flex-col w-[500px] pb-[140px] rounded-3xl ml-[220px] p-[34px]">
                    <div className="top">
                        <h1 className="text-center text-2xl font-semibold">Welcome to Sicu-aura</h1>
                        <p className="text-gray-400 mt-4 text-center text-sm">Your one-stop safety solutions using innovative technology</p>
                    </div>
                    <div className="fields w-[300px] m-auto">
                        <input
                            type="text"
                            placeholder="Hospital Name"
                            className={`w-[320px] h-[32px] mt-[50px] ${inputClasses.hospitalName} p-2`}
                            value={inputValues.hospitalName} // Bind state value
                            onChange={(e) => {
                                setInputValues({ ...inputValues, hospitalName: e.target.value });
                                setErrorMessages((prev) => ({ ...prev, hospitalName: "" })); // Clear error message
                            }} // Handle input change
                            onFocus={() => handleInputFocus('hospitalName')}
                        />
                        {errorMessages.hospitalName && <p className="text-red-500">{errorMessages.hospitalName}</p>}
                        
                        <input
                            type="text"
                            placeholder="Email Id"
                            className={`w-[320px] h-[32px] mt-[50px] ${inputClasses.email} p-2`}
                            value={inputValues.email} // Bind state value
                            onChange={(e) => {
                                setInputValues({ ...inputValues, email: e.target.value });
                                setErrorMessages((prev) => ({ ...prev, email: "" })); // Clear error message
                            }} // Handle input change
                            onFocus={() => handleInputFocus('email')}
                        />
                        {errorMessages.email && <p className="text-red-500">{errorMessages.email}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            className={`w-[320px] h-[32px] mt-[50px] ${inputClasses.password} p-2`}
                            value={inputValues.password} // Bind state value
                            onChange={(e) => {
                                setInputValues({ ...inputValues, password: e.target.value });
                                setErrorMessages((prev) => ({ ...prev, password: "" })); // Clear error message
                            }} // Handle input change
                            onFocus={() => handleInputFocus('password')}
                        />
                        {errorMessages.password && <p className="text-red-500">{errorMessages.password}</p>}

                        <input
                            type="text"
                            placeholder="Special Access Code"
                            className={`w-[320px] h-[32px] mt-[50px] ${inputClasses.accessCode} p-2`}
                            value={inputValues.accessCode} // Bind state value
                            onChange={(e) => {
                                setInputValues({ ...inputValues, accessCode: e.target.value });
                                setErrorMessages((prev) => ({ ...prev, accessCode: "" })); // Clear error message
                            }} // Handle input change
                            onFocus={() => handleInputFocus('accessCode')}
                        />
                        {errorMessages.accessCode && <p className="text-red-500">{errorMessages.accessCode}</p>}
                    </div>
                </div>
                <div className="flex justify-center pt-[50px]">
                    <button className="w-[160px] h-[50px] m-auto bg-black text-white pt-1 pl-3 pr-3 rounded-2xl cursor-pointer text-center block font-bold text-xl"
                        onClick={LoginClick}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default IsLogin;

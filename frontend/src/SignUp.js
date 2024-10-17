import React, { useState, useRef } from "react";

function SignUp({ onSignUpComplete }) {
    const initialClass = "border-b border-slate-400 placeholder:text-gray-400 pb-2";

    // Set up state for each input field class
    const [hospitalNameClass, setHospitalNameClass] = useState(initialClass);
    const [addressClass, setAddressClass] = useState(initialClass);
    const [cityClass, setCityClass] = useState(initialClass);
    const [stateClass, setStateClass] = useState(initialClass);
    const [pincodeClass, setPincodeClass] = useState(initialClass);
    const [registrationDateClass, setRegistrationDateClass] = useState(initialClass);
    const [ambulanceClass, setAmbulanceClass] = useState(initialClass);
    const [emailClass, setEmailClass] = useState(initialClass);
    const [phoneClass, setPhoneClass] = useState(initialClass);
    const [hospitalRegNumberClass, setHospitalRegNumberClass] = useState(initialClass);
    const [emergencyWardNumberClass, setEmergencyWardNumberClass] = useState(initialClass);
    const [registrationCertificateClass, setRegistrationCertificateClass] = useState(initialClass);
    const [createPasswordClass, setCreatePasswordClass] = useState(initialClass);
    const [confirmPasswordClass, setConfirmPasswordClass] = useState(initialClass);

    const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State to control success message visibility
    const inputRef = useRef(null); // Reference to the last input field

    const handleInputClick = (setClass) => {
        setClass("text-black text-xl font-semibold border-b border-black placeholder:text-black focus:outline-none pb-2");
    };

    const resetInputClasses = () => {
        setHospitalNameClass(initialClass);
        setAddressClass(initialClass);
        setCityClass(initialClass);
        setStateClass(initialClass);
        setPincodeClass(initialClass);
        setRegistrationDateClass(initialClass);
        setAmbulanceClass(initialClass);
        setEmailClass(initialClass);
        setPhoneClass(initialClass);
        setHospitalRegNumberClass(initialClass);
        setEmergencyWardNumberClass(initialClass);
        setRegistrationCertificateClass(initialClass);
        setCreatePasswordClass(initialClass);
        setConfirmPasswordClass(initialClass);
    };

    const SignUpClick = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Show success message
        setSuccessMessageVisible(true);
        resetInputClasses(); // Reset input classes after submission

        // Hide success message after 3 seconds and call onSignUpComplete
        setTimeout(() => {
            setSuccessMessageVisible(false);
            onSignUpComplete(); // Call the prop function to navigate to login
        }, 3000);
    };

    return (
        <div className="relative">
            <div className={`flex ml-[90px] text-lg`}>
                <div className="w-[390px] flex flex-col">
                    <input
                        type="text"
                        placeholder="Hospital Name"
                        className={`w-[320px] h-[32px] mt-[50px] ${hospitalNameClass} p-2`}
                        onClick={() => handleInputClick(setHospitalNameClass)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className={`w-[320px] h-[32px] mt-[50px] ${addressClass} p-2`}
                        onClick={() => handleInputClick(setAddressClass)}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className={`w-[320px] h-[32px] mt-[50px] ${cityClass} p-2`}
                        onClick={() => handleInputClick(setCityClass)}
                    />
                    <input
                        type="text"
                        placeholder="State"
                        className={`w-[320px] h-[32px] mt-[50px] ${stateClass} p-2`}
                        onClick={() => handleInputClick(setStateClass)}
                    />
                    <input
                        type="text"
                        placeholder="Pincode"
                        className={`w-[320px] h-[32px] mt-[50px] ${pincodeClass} p-2`}
                        onClick={() => handleInputClick(setPincodeClass)}
                    />
                    <input
                        type="text"
                        placeholder="Hospital Registration Date"
                        className={`w-[320px] h-[32px] mt-[50px] ${registrationDateClass} p-2`}
                        onClick={() => handleInputClick(setRegistrationDateClass)}
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Number Of Ambulance Available"
                        className={`mt-[50px] w-[320px] h-[32px] ${ambulanceClass} p-2`}
                        onClick={() => handleInputClick(setAmbulanceClass)}
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Email Id"
                        className={`w-[320px] h-[32px] mt-[50px] ${emailClass} p-2`}
                        onClick={() => handleInputClick(setEmailClass)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className={`w-[320px] h-[32px] mt-[50px] ${phoneClass} p-2`}
                        onClick={() => handleInputClick(setPhoneClass)}
                    />
                    <input
                        type="text"
                        placeholder="Hospital Registration Number"
                        className={`w-[320px] h-[32px] mt-[50px] ${hospitalRegNumberClass} p-2`}
                        onClick={() => handleInputClick(setHospitalRegNumberClass)}
                    />
                    <input
                        type="text"
                        placeholder="Emergency-Ward Number"
                        className={`w-[320px] h-[32px] mt-[50px] ${emergencyWardNumberClass} p-2`}
                        onClick={() => handleInputClick(setEmergencyWardNumberClass)}
                    />
                    <input
                        type="text"
                        placeholder="Registration Certificate Upload"
                        className={`w-[320px] h-[32px] mt-[50px] ${registrationCertificateClass} p-2 border-b border-gray-400`}
                        onClick={() => handleInputClick(setRegistrationCertificateClass)}
                    />
                    <label className="w-[120px] h-[39px] bg-slate-700 text-white pt-1 pl-3 pr-3 rounded-md cursor-pointer text-center mt-[16px] block">
                        Choose
                        <input type="file" className="hidden" />
                    </label>
                    <input
                        type="password"
                        placeholder="Create Password"
                        className={`w-[320px] h-[32px] mt-[20px] ${createPasswordClass} p-2`}
                        onClick={() => handleInputClick(setCreatePasswordClass)}
                    />
                    <input
                        ref={inputRef}
                        type="password"
                        placeholder="Confirm Password"
                        className={`mt-[50px] w-[320px] h-[32px] ${confirmPasswordClass} p-2`}
                        onClick={() => handleInputClick(setConfirmPasswordClass)}
                    />
                </div>
            </div>
            {/* Sign up button */}
            <div className="flex justify-center pt-[50px]">
                <button
                    className="w-[160px] h-[50px] m-auto bg-black text-white pt-1 pl-3 pr-3 rounded-2xl cursor-pointer text-center block font-bold text-xl"
                    onClick={SignUpClick}
                >
                    Sign Up
                </button>
            </div>

            {/* Success message overlay */}
            {successMessageVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-white opacity-96 flex items-center justify-center z-10">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-[700px] h-[200px]" >
                        <span className="text-green-600 text-6xl justify-center">&#10004;</span>
                        <h2 className="text-3xl font-bold">Your Registration is Successfully Completed!</h2>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUp;

import React, { useState } from "react";
import Logo from "./logo.png"; // Adjust path as necessary
import Login from "./isLogin"; // Ensure this path is correct
import SignUp from "./SignUp"; // Ensure this path is correct

function Right({ isLogin, setIsLogin }) {
    // State to manage which component to display
    const [showLogin, setShowLogin] = useState(isLogin);

    const handleSignUpComplete = () => {
        setShowLogin(true); // Switch to Login component after sign up
    };

    return (
        <div>
            <div className="flex items-center justify-center pt-[73px] w-[calc(100vw-560px)]">
                <img src={Logo} alt="Logo" className="w-[98px] h-[98px] ml-[90px]" />
                <div className="headingWrapper flex items-center pl-[140px] size-full text-3xl cursor-pointer">
                    <h1
                        className={!showLogin ? "font-bold" : "text-gray-300"}
                        onClick={() => {
                            setShowLogin(false); // Show SignUp
                        }}
                    >
                        Sign Up
                    </h1>
                    <p className="ml-4 mr-4 font-normal text-4xl text-gray-300"> / </p>
                    <h1
                        className={showLogin ? "font-bold" : "text-gray-300"}
                        onClick={() => {
                            setShowLogin(true); // Show Login
                        }}
                    >
                        Login
                    </h1>
                </div>
            </div>

            {/* Show SignUp or Login based on state */}
            {!showLogin ? <SignUp onSignUpComplete={handleSignUpComplete} /> : <Login />}

            <div className="text-center mt-[50px] text-slate-400">
                • Terms and Condition Privacy Policy
            </div>
        </div>
    );
}

export default Right;

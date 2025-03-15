"use client"
import React from 'react'
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaRegEyeSlash , FaEye} from "react-icons/fa";
import PasswordValidation from './PasswordValidation';

// ---------------------------------------- Types & Interfaces ---------------------------------------- //

interface Pass {
password: string;
confirmPassword: string;
}

// ---------------------------------------- Component Definition ---------------------------------------- //

const PasswordInfo = ({ password = "alexSunday123",
confirmPassword= "alzxSunday123",
}: Pass) =>{
const [showPassword , setShowPassword] = useState(false)
const handleShowPassword = () => {
setShowPassword(!showPassword)
}
const [showConfirmPassword, setShowConfirmPassword] = useState(false)
const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
}
const [isEditing , setIsEditing] = useState(false)
const [isValid, setIsValid] = useState(false)
const [formData, setFormData] = useState({
password,
confirmPassword
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: value,
    }));
    };

    const handleSubmit = () => {
    if (isValid) {
        setIsEditing(false);
    }
    };

    const handleCancel = () => {
    setFormData({
    password,
    confirmPassword
    });
    setIsEditing(false);
    };


    return (
    <section className='w-full max-w-lg p-4 md:p-6 rounded-lg'>
        <div className='flex justify-between items-center mb-4 '>
            <h3 className="font-semibold text-gray-800">Password</h3>
            {!isEditing ? (
            <button onClick={()=> setIsEditing(true)}
                className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md flex
                items-center gap-1 transition hover:bg-gray-50 hover:shadow-sm"
                >
                Change Password
                <CiEdit className='text-sm' />
            </button>
            ) : (
            <div className="flex gap-2">
                <button 
                    onClick={handleSubmit}
                    disabled={!isValid}
                    className={`px-3 py-1.5 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-md transition ${isValid ? 'hover:bg-blue-100' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Save
                </button>
                <button onClick={handleCancel}
                    className="px-3 py-1.5 text-sm text-red-600 bg-blue-50 border border-blue-200 rounded-md transition hover:bg-blue-100">
                    Cancel
                </button>
            </div>
            )}
        </div>
        <div className="relative">
            {isEditing ? (
            <>
                <input name="password" value={formData.password} onChange={handleInputChange} {...(showPassword ? {
                    type: "text" } : { type: "password" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <div className="relative mt-4">
                    <input name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" {...(showConfirmPassword ?
                    { type: "text" } : { type: "password" })} />
                    <button type="button" onClick={handleShowConfirmPassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
                        {showConfirmPassword ?
                        <FaEye className="w-5 h-5" /> :
                        <FaRegEyeSlash className="w-5 h-5" />}
                    </button>
                </div>
                <button type="button" onClick={handleShowPassword}
                    className="absolute right-3 top-[22px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    {showPassword ?
                    <FaEye className="w-5 h-5" /> :
                    <FaRegEyeSlash className="w-5 h-5" />}
                </button>
                <PasswordValidation 
                    password={formData.password}
                    confirmPassword={formData.confirmPassword}
                    onValidationChange={setIsValid}
                />
            </>
            ) : (
            <>
                <input name="password" value={formData.password} readOnly
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md pr-10" {...(showPassword ?
                    { type: "text" } : { type: "password" })} />
                
                <button type="button" onClick={handleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    {showPassword ?
                    <FaEye className="w-5 h-5" /> :
                    <FaRegEyeSlash className="w-5 h-5" />}
                </button>
            </>
            )}
        </div>
    </section>
    )
    }

    export default PasswordInfo
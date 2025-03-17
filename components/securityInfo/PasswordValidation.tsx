"use client"

import React from 'react';
import { useState , useEffect } from 'react';

interface PasswordValidationProps {
    password: string;
    confirmPassword: string;
    onValidationChange: (isValid: boolean) => void;
}

const PasswordValidation= ({ 
    password, 
    confirmPassword,
    onValidationChange
} : PasswordValidationProps) => {
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (password && confirmPassword) {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                onValidationChange(false);
            } else {
                setError('');
                onValidationChange(true);
            }
        } else {
            setError('');
            onValidationChange(false);
        }
    }, [password, confirmPassword, onValidationChange]);

    return (
        <div className="mt-2">
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default PasswordValidation;
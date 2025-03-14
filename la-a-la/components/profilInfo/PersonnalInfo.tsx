"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";

interface PersonalInfoProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  bio?: string;
  onEdit?: () => void;
}

const PersonnalInfo: React.FC<PersonalInfoProps> = ({
  firstName = "Rafiqur",
  lastName = "Rahman",
  email = "rafiqurrahman51@gmail.com",
  phone = "+09 345 346 46",
  bio = "Team Manager",
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsEditing(false);
    // Here you would typically call an API to update the phone number
  };

  return (
    <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Personal Information</h3>
        {!isEditing ? (
          <Button
            className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md flex items-center gap-1 transition hover:bg-gray-50 hover:shadow-sm"
            onClick={() => setIsEditing(true)}
            variant="outline"
          >
            Edit
            <CiEdit className="text-sm" />
          </Button>
        ) : (
          <Button
            className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-md transition hover:bg-blue-100"
            onClick={handleSubmit}
          >
            Save
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">First Name</p>
          <p className="text-gray-700">{firstName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Last Name</p>
          <p className="text-gray-700">{lastName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Email address</p>
          <p className="text-gray-700 break-words">{email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Phone</p>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700">{formData.phone}</p>
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="text-sm text-gray-500 mb-1">Bio</p>
          <p className="text-gray-700">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonnalInfo;
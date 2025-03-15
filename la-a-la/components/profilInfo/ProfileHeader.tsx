"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";

interface UserProfileCardProps {
  UserName?: string;
  Occupation?: string;
  userInfo?: string;
  location?: string;
  imageUrl?: string;
  onEdit?: () => void;
}

const ProfileHeader: React.FC<UserProfileCardProps> = ({
  UserName = "Alex Sunday",
  Occupation = "Software Engineer",
  userInfo = "User info",
  location = "Leeds, United Kingdom",
  imageUrl = "https://randomuser.me/api/portraits/men/32.jpg",
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(imageUrl);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 md:mb-6">My Profile</h2>

      <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-blue-100">
              <img 
                src={profileImage} 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <span className="text-white text-xs">Change</span>
                </label>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{UserName}</h3>
              <p className="text-gray-500 text-sm">{Occupation}</p>
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default ProfileHeader;

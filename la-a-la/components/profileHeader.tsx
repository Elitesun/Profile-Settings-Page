import React from "react";
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
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 md:mb-6">My Profile</h2>

      <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-100">
              <img 
                src={imageUrl} 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{UserName}</h3>
              <p className="text-gray-500 text-sm">{Occupation}</p>
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
          </div>
          <Button
            className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md flex items-center gap-1 transition hover:bg-gray-50 hover:shadow-sm"
            onClick={onEdit}
            variant="outline"
          >
            Edit
            <CiEdit className="text-sm" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";

interface UserProfileCardProps {
  UserName?: string;
  Occupation?: string;
  userInfo?: string;
  onEdit?: () => void;
}

const ProfileHeader: React.FC<UserProfileCardProps> = ({
  UserName = "Alex Sunday",
  Occupation = "Software Engineer",
  userInfo = "User info",
  onEdit,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>

      <div className="relative flex items-center gap-4 border-2 border-gray-200 p-4 rounded-lg shadow-md">
        {/* Profile Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image
            src=""
            alt="Profile Picture"
            width={144}
            height={144}
            className="object-cover w-full h-full"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{UserName}</h3>
          <h4 className="text-gray-600">{Occupation}</h4>
          <p className="text-sm text-gray-500">{userInfo}</p>
        </div>

        {/* Edit Button */}
        <Button
          className="absolute bottom-4 right-4"
          onClick={onEdit}
          variant="outline"
        >
          Edit
          <CiEdit />
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;

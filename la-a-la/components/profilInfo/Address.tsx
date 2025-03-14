"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";

interface AddressProps {
  country?: string;
  cityState?: string;
  postalCode?: string;
  taxId?: string;
  onEdit?: () => void;
}

const Address = ({
  country = "United Kingdom",
  cityState = "Leeds, East London",
  postalCode = "ER1 2354",
  taxId = "A54546756",
  onEdit,
}: AddressProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    country,
    cityState,
    postalCode,
    taxId,
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
    
  };

  return (
    <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Address</h3>
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
          <p className="text-sm text-gray-500 mb-1">Country</p>
          {isEditing ? (
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700">{formData.country}</p>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">City/State</p>
          {isEditing ? (
            <input
              type="text"
              name="cityState"
              value={formData.cityState}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700">{formData.cityState}</p>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Postal Code</p>
          {isEditing ? (
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700">{formData.postalCode}</p>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">TAX ID</p>
          {isEditing ? (
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700">{formData.taxId}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Address;
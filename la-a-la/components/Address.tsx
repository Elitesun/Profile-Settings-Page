import React from "react";
import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";

interface AddressProps {
  country?: string;
  cityState?: string;
  postalCode?: string;
  taxId?: string;
  onEdit?: () => void;
}

const Address: React.FC<AddressProps> = ({
  country = "United Kingdom",
  cityState = "Leeds, East London",
  postalCode = "ER1 2354",
  taxId = "A54546756",
  onEdit,
}) => {
  return (
    <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <Button
          className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md flex items-center gap-1 transition hover:bg-gray-50 hover:shadow-sm"
          onClick={onEdit}
          variant="outline"
        >
          Edit
          <CiEdit className="text-sm" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Country</p>
          <p className="text-gray-700">{country}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">City/State</p>
          <p className="text-gray-700">{cityState}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Postal Code</p>
          <p className="text-gray-700">{postalCode}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">TAX ID</p>
          <p className="text-gray-700">{taxId}</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
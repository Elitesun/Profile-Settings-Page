import React from "react";
import ProfileHeader from "@/components/profilInfo/ProfileHeader";
import PersonnalInfo from "@/components/profilInfo/PersonnalInfo";
import Address from "@/components/profilInfo/Address";

const page = () => {
  return (
    <section>
      <ProfileHeader />
      <PersonnalInfo />
      <Address />
      {/* Mobile Delete Account Button */}
      <div className="md:hidden mb-4">
                        <button className="w-full py-2 px-4 text-red-500 font-medium rounded-lg transition hover:bg-red-50 border border-transparent hover:border-red-100">Delete Account</button>
                    </div>
    </section>
  );
};

export default page;

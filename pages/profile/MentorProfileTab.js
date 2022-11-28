import { config } from "process";
import React, { useEffect, useState } from "react";
import { color } from "../../public/theme/Color";
import BoxBodyContainer from "../components/common/BoxBodyContainer";
import TextField from "../ui-kit/TextField";
import Header from "../components/profile/header";
import Button from "../ui-kit/Button";
import ProfileInfo from "../../pages/profile/ProfileInfo" 
import ContactInfo from "../../pages/profile/ContactInfo"
import ProfessionalInfo from "../../pages/profile/ProfessionalInfo";
import useWindowDimensions from "../../public/utils/useWindowDimensions";


const MentorProfileTab = () => {
  const { width, height } = useWindowDimensions();
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <Header/>
    {/* <BoxBodyContainer
       styleOverride={{ alignItems: "flex-start" }}
       body={
         <div
           style={{
             display: "flex",
             flex: 1,
             flexDirection: "column",
           }}
         >
         </div>
       }
     />  */}


<div className="flex flex-row w-full">
        <div className="w-full">
          <div className="bg-grey-50">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <li className="mr-2">
                <a
                  href="#"
                  className={openTab === 1 ? "inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active":"inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400"}
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                >
                  Profile info
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className={openTab === 2 ? "inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active":"inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400"}
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                >
                  Contact info
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className={openTab === 3 ? "inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active":"inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400"}
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                >
                  Professional info
                </a>
              </li>
            </ul>
            {/* Profile */}
            <div className={openTab === 1 ? "block" : "hidden"}>
              <ProfileInfo/>
            </div>
          

            {/* contact */}
            <div className={openTab === 2 ? "block" : "hidden"}>
            <ContactInfo/>
            </div>


            {/* Professional */}
            <div className={openTab === 3 ? "block" : "hidden"}>
            <ProfessionalInfo/>
            </div>

          </div>
        </div>
        
      </div>
    </>
  );
};

export default MentorProfileTab;

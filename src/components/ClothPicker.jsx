import React from "react";
import CustomButton from "./CustomButton";
import { ClothTypes } from "../config/constants";

const ClothPicker = ({ setCloth, setActiveEditorTab }) => {
  return (
    <div className="flex-1 absolute left-full ml-3 aipicker-container overflow-y-auto ">
      <div className=" overflow-hidden">
        <div className="w-full h-40  overflow-y-auto">
          {ClothTypes.map((item) => {
            return (
              <CustomButton
                key={Math.random()}
                type="filled"
                title={item.name}
                handleClick={() => {
                  setActiveEditorTab(""), setCloth({name:item.name,fov:item.fov,pos:item.pos})
                }}
                customStyles="w-full font-bold text-sm mt-2"
              />
            );
          })}
        </div>
        <CustomButton
          type="filled"
          title="Close"
          handleClick={() => setActiveEditorTab("")}
          customStyles="w-full font-bold text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default ClothPicker;

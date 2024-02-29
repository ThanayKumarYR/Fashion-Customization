import React from "react";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile, setActiveEditorTab }) => {
  return (
    <div className="filepicker-container absolute bottom-1">
      <div className=" flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-5">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Close"
          handleClick={() => setActiveEditorTab("")}
          customStyles="w-full  p-0 font-bold text-sm"
        />
      </div>
    </div>
  );
};

export default FilePicker;

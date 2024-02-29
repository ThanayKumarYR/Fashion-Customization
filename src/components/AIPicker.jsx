import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit ,setActiveEditorTab}) => {
  return (
    <div className="flex-1">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className=" aipicker-textarea"
      />
      <div className="flex flex-wrap gap-4">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
             <CustomButton
              type="filled"
              title="Close"
              handleClick={() => setActiveEditorTab("")}
              customStyles="w-full font-bold text-sm "
            />
          </>

        )}
      </div>
    </div>
  );
};

export default AIPicker;

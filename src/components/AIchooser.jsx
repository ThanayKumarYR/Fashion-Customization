import React, { useState } from "react";
import { aiApiTypes } from "../config/constants";
import CustomButton from "./CustomButton";
import AIPicker from "./AIPicker";

const AIchooser = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
  setActiveEditorTab,
  setUrl,
}) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  return (
    <div className="absolute left-full ml-3 aipicker-container overflow-y-auto ">
      {!displayPicker ? 
      (
        aiApiTypes.map((ai) => {
          return (
            <CustomButton
              key={Math.random()}
              type="filled"
              title={ai.name}
              handleClick={() => {
                setDisplayPicker(true);
                setUrl(ai.apiUrl);
              }}
            />
          );
        })
      )
      : (
        <AIPicker
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
          setActiveEditorTab={setActiveEditorTab}
        />
      )}
    </div>
  );
};

export default AIchooser;

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

// import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIchooser,
  ColorPicker,
  CustomButton,
  FilePicker,
  ClothPicker,
  Tab,
} from "../components";

const Customizer = ({setCloth}) => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [url,setUrl] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker setActiveEditorTab={setActiveEditorTab}/>;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} setActiveEditorTab={setActiveEditorTab} />;
      case "aipicker":
        return (
          <AIchooser
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
            setActiveEditorTab={setActiveEditorTab}
            url={url}
            setUrl={setUrl}
          />
        );
        case "clothpicker":
          return <ClothPicker setCloth={setCloth} setActiveEditorTab={setActiveEditorTab}/>
      default:
        return null;
    }
  };

  async function query(data) {
    console.log(url);
    const response = await fetch(
      url,
      {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");
    try {
      setGeneratingImg(true);
      query({ inputs: prompt }).then((response) => {
        // Use image
        var reader = new FileReader();
        reader.onload = function () {
          var b64 = reader.result.replace(/^data:.+;base64,/, "");
          handleDecals(type, `data:image/png;base64,${b64}`);
        };
        reader.readAsDataURL(response);
      });
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container "
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
            {/* Download button */}
            <button className="download-btn" onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;

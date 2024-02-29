import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import CustomButton from './CustomButton';

import state from '../store';

const ColorPicker = ({setActiveEditorTab}) => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
      <CustomButton
              type="filled"
              title="Close"
              handleClick={() => setActiveEditorTab("")}
              customStyles="w-full mt-1 px-1 py-1 font-bold text-sm"
            />
    </div>
  )
}

export default ColorPicker
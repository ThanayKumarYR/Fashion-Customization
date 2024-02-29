import { swatch, fileIcon, ai, logoShirt, stylishShirt,cloth } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
  {
    name: "clothpicker",
    icon: cloth,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export const aiApiTypes=[
  {
    name:"runwayml",
    apiUrl:"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"
  },
  {
    name:"CompVis",
    apiUrl:"https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4"
  },
  {
    name:"stabilityai-2-1-base",
    apiUrl:"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1-base"
  },
  {
    name:"realistic_vision",
    apiUrl:"https://api-inference.huggingface.co/models/SG161222/Realistic_Vision_V1.4"
  },
  {
    name:"stabilityai-2-1",
    apiUrl:"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1"
  },
  {
    name:"openjourney",
    apiUrl:"https://api-inference.huggingface.co/models/prompthero/openjourney"
  },
  {
    name:"waifu-diffusion",
    apiUrl:"https://api-inference.huggingface.co/models/hakurei/waifu-diffusion"
  },
  {
    name:"stabilityai-2",
    apiUrl:"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2"
  },
  {
    name:"openjourney-v4",
    apiUrl:"https://api-inference.huggingface.co/models/prompthero/openjourney-v4"
  },
  {
    name:"anything-v4.0",
    apiUrl:" https://api-inference.huggingface.co/models/andite/anything-v4.0"
  }
]

export const ClothTypes = [
  {
    name:"t-shirt",
    fov:25,
    pos:[0,0,0]
  },
  {
    name:"coat",
    fov:120,
    pos:[0,0,0]
  },
  {
    name:"Shoes",
    fov:75,
    pos:[1,0,0]
  },
  {
    name:"FemaleTshirt",
    fov:100,
    pos:[0,1,0]
  },
  {
    name:"DesingShoes",
    fov:10,
    pos:[0,0,0]
  }
]

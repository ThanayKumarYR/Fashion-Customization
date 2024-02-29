import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Coat from "./Coat";
import FemaleTshirt from "./FemaleTshirt";
import DesingShoes from "./DesingShoes";
import Shoes from "./Shoes";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = ({ cloth }) => {
  const generateCloth = () => {
    switch (cloth.name) {
      case "t-shirt":
        return <Shirt />;
      case "coat":
        return <Coat />;
      case "Shoes":
        return <Shoes />;
      case "DesingShoes":
        return <DesingShoes/>;
      case "FemaleTshirt":
        return <FemaleTshirt/>;
      default:
        return <Shirt />;
    }
  };

  return (
    <Canvas
      shadows
      camera={{ position: cloth.pos, fov: cloth.fov }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      {/* <Environment preset="city"/> */}
      <CameraRig cloth={cloth}>
        {/* <Backdrop /> */}
        <Center>{generateCloth()}</Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;

import { useState } from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  const [cloth, setCloth] = useState({name:"t-shirt",fov:25,pos:[0,0,0]});
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas cloth={cloth}/>
      <Customizer setCloth={setCloth} />
    </main>
  )
}

export default App

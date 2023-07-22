  import { useState,createContext,useRef,useEffect} from 'react'
  import {Canvas,useFrame} from "@react-three/fiber"
  import { animated, useSpring } from '@react-spring/three'
  import {useGLTF } from '@react-three/drei'
  import Player from "./Meshes/Player"
  import GK from "./Meshes/GK"
  import SoccerBall from "./Meshes/SoccerBall"
  import "./CSS/CSS.css"

  export const Shoot = createContext()
  function App() {
      const Stadium = useGLTF("/Soccer/SoccerPitch.glb")
      const [Left, setLeft] = useState(false)
      const [Right, setRight] = useState(false)
      const [Center, setCenter] = useState(false)
      const [Buttons, setButtons] = useState(false)

      const AllButtons = useRef()
      const animationStarted = useRef(false);
      const animationFinished = useRef(false);

      const { rotationC, positionC } = useSpring({
        from: { rotationC:[0, 1, 0] , 
                positionC:[5,-1, 0]},
        to: [{ rotationC: [0,1.9,0], 
              positionC:[-3.25, -2, -7]},],
        config: {
          duration: 5000,
        },
        onStart: () => {
          animationStarted.current = true;
          console.log("Hello,OnStart");
        },
        onRest: () => {
          if (animationStarted.current && animationFinished.current) {
            AllButtons.current.style.opacity = 1
            console.log("Hello,OnRest");
          }
          animationFinished.current = true;
        },});   

      const LeftShot = () =>{ 
        setLeft(true)
      }
      const CenterShot = () =>{
        setCenter(true)
      }
      const RightShot = () =>{
        setRight(true)
      }
      
    return (
      <Shoot.Provider value={{setLeft,setCenter,setRight,setButtons,Left,Center,Right,Buttons,AllButtons}} >
        <div ref = {AllButtons} style={{opacity:0}} className='Controls' >
          <button className='Left'  onClick={(e)=>LeftShot(e)}  >Left</button>
          <button className='Center' onClick={(e)=>CenterShot(e)} >Center</button>
          <button className='Right'  onClick={(e)=>RightShot(e)} >Right</button>
        </div>
      <Canvas style={{backgroundColor:"skyblue"}}  >
        <animated.perspectiveCamera position={positionC} rotation={rotationC} >
        <Player />
        <GK/>
        <SoccerBall/>
        <primitive object={Stadium.scene} />
        <ambientLight />
        <pointLight intensity={.2} />
        </animated.perspectiveCamera>
      </Canvas>
      </Shoot.Provider>
    )
  }

  export default App

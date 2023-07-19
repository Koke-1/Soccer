
import React, { useEffect,useState,useContext } from "react";
import { useSpring,animated} from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import {Shoot} from "../App"
export default function Model(props) {
  const { nodes, materials } = useGLTF("/SoccerBall.glb");
  const [BallL, setBallL] = useState(false)
  const [BallC, setBallC] = useState(false)
  const [BallR, setBallR] = useState(false)
  const {Left,Center,Right} = useContext(Shoot)

    useEffect(() => {
      
    if (Left) {
      setTimeout(()=>{
     setBallL(true)
      },5000)
      
    } else  {setBallL(false)}
    if (Center) {
      setTimeout(()=>{
     setBallC(true)
      },5000)
      
    } else { setBallC(false)}
    if (Right) {
      setTimeout(()=>{
      setBallR(true)
      },5000)
      
    } else {setBallR(false)}
    console.log("Soccer");
     
    }, [Left,Center,Right])

   const {position} = useSpring({
    from:{position: BallL ? [-5.4,0.165,0]: BallC ? [-5.4,0.165,0] : BallR ? [-5.4,0.165,0]: [-5.4,0.165,0]},
    to:{position: BallL ? [1,.165,-2]: BallC ? [.85,.9,0] : BallR ? [.85,0.2,2]: [-5.4,0.165,0]},
   }) 

  
  return (
      <animated.group position={position} scale={[.175,.175,.175]}   >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials["Material.002"]}
        />
      </animated.group>
  );
}


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect,useState, useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring,animated} from "@react-spring/three"
import {Shoot} from "../App"
export default function Model({props}) {
  const { nodes, materials } = useGLTF("/Player.glb")
  const [PlayerA, setPlayerA] = useState(true)
  const Player = useRef()

  const {setLeft,setCenter,setRight,Left,Center,Right,AllButtons} = useContext(Shoot)

  useEffect(() => {
    if (Left || Center || Right) {
      setPlayerA(false);
      setTimeout(()=>{
        setPlayerA(true)
        setLeft(false)
        setCenter(false)
        setRight(false)    
      },7500)
      AllButtons.current.style.opacity = 0
    } 
    console.log("Player");
  }, [Left, Center, Right]  );
 

  const {rotation,position,leftleg,rightleg,leftarm,rightarm} = useSpring({
    from:{
        rotation:PlayerA ? [0,1,0]:[0,1,0],
        position:PlayerA ? [-5,-.3,0]:[-9,-.3,-2],
        leftleg:PlayerA ? [0,1,0]:[0,0,0],
        rightleg:PlayerA ? [0,1,0]:[0,0,0],
        leftarm:PlayerA ? [0,0,0]:[0,0,0],
        rightarm:PlayerA ? [0,0,0]:[0,0,0],},
    to:[
      {rotation:PlayerA ? [0,-2,0] : [0,1,0],
       position:PlayerA ? [-5,-.3,0] : [-9,-.3,-2],
       leftleg:PlayerA ? [1,0,0] : [-1,0,0],
       rightleg:PlayerA ? [-1,0,0] : [1,0,0],
       leftarm:PlayerA ? [-.5,0,0] : [-.5,0,0],
       rightarm:PlayerA ? [.5,0,0] : [.5,0,0]},

      {rotation:PlayerA ? [0,-2,0] : [0,1,0],
       position:PlayerA ? [-6,-.3,-.5] : [-8.5,-.3,-1.66],
       leftleg:PlayerA ? [-1,0,0] : [1,0,0],
       rightleg:PlayerA ? [1,0,0] : [-1,0,0],
       leftarm:PlayerA ? [.5,0,0] : [.5,0,0],
       rightarm:PlayerA ? [-.5,0,0] : [-.5,0,0] },

      {rotation:PlayerA ? [0,-2,0] : [0,1,0],
       position:PlayerA ? [-7,-.3,-1] : [-8,-.3,-1.33] ,
       leftleg:PlayerA ? [1,0,0] : [-1,0,0],
       rightleg:PlayerA ? [-1,0,0] : [1,0,0],
       leftarm:PlayerA ? [-.5,0,0] : [-.5,0,0],
       rightarm:PlayerA ? [.5,0,0] : [.5,0,0]},

      {rotation:PlayerA ? [0,-2,0]:[0,1,0],
       position:PlayerA ? [-8,-.3,-1.5]:[-7,-.3,-1],
       leftleg:PlayerA ? [-1,0,0]:[1,0,0],
       rightleg:PlayerA ? [1,0,0]:[-1,0,0],
       leftarm:PlayerA ? [.5,0,0]:[.5,0,0],
       rightarm:PlayerA ? [-.5,0,0]:[-.5,0,0]},

      {rotation:PlayerA ? [0,-2,0]:[0,1,0],
       position:PlayerA ? [-9,-.3,-2]:[-6,-.3,-.45],
       leftleg:PlayerA ? [1,0,0]:[-1.5,0,0],
       rightleg:PlayerA ? [-1,0,0]:[1,0,0],
       leftarm:PlayerA ? [-.5,0,0]:[-.5,0,0],
       rightarm:PlayerA ? [.5,0,0]:[.5,0,0]},

      {rotation: PlayerA ? [0,1,0] : [0,1,0] ,
       position:PlayerA ? [-9,-.3,-2] : [-5.5,-.3,-.3],
       leftleg:PlayerA ? [0,0,0]:[1,0,0] ,
       rightleg:PlayerA ? [0,0,0]:[-.5,0,0],
       leftarm:PlayerA ? [0,0,0]:[.5,0,0],
       rightarm:PlayerA ? [0,0,0]:[-.5,0,0]}],
      config:{
        duration:1000,
      },
      onRest:()=>{
        
      }
  })
  
  return (
    <animated.group ref={Player} position={position} rotation={rotation} scale={[.2,.2,.2]}  {...props} dispose={null}>
      <mesh
        name="Torso"
        geometry={nodes.Torso.geometry}
        material={materials.Material}
        position={[0.68057, 5.79351, 0]}
        scale={[1.25977, 1.52817, 0.68826]}
      />
      <animated.mesh
        name="Left_Leg001"
        geometry={nodes.Left_Leg001.geometry}
        material={materials.Material}
        position={[-0.94182, 7.03361, -0.04493]}
        scale={[0.37922, 0.29014, 0.41012]}
        rotation={leftarm}
      />
      <animated.mesh
        name="Right_Leg001"
        geometry={nodes.Right_Leg001.geometry}
        material={materials.Material}
        position={[2.32157, 7.03361, -0.04493]}
        scale={[0.37922, 0.29014, 0.41012]}
        rotation={rightarm}
      />
      <animated.mesh
        name="Left_Leg"
        geometry={nodes.Left_Leg.geometry}
        material={nodes.Left_Leg.material}
        position={[0.68057, 3.74978, 0]}
        scale={[1.27937, 0.54362, 0.57857]}
        rotation={leftleg}
      />
      <animated.mesh
        name="Right_Leg"
        geometry={nodes.Right_Leg.geometry}
        material={nodes.Right_Leg.material}
        position={[0.68057, 3.74978, 0]}
        scale={[1.27937, 0.54362, 0.57857]}
        rotation={rightleg}
      />
      <mesh
        name="Head"
        geometry={nodes.Head.geometry}
        material={nodes.Head.material}
        position={[0.68057, 7.32137, 0]}
        scale={[0.60748, 1.04625, 0.53254]}
      />
    </animated.group>
  );
}



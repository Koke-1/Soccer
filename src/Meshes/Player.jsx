/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect,useState, useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring,animated} from "@react-spring/three"
import {Shoot} from "../App"
export default function Model({props}) {
  const { nodes, materials } = useGLTF("/Soccer/Player.glb")

  const {setLeft,setCenter,setRight,Left,Center,Right,AllButtons} = useContext(Shoot)
  const [ShootA, setShootA] = useState(false)
  useEffect(() => {
    if (Left || Center || Right) {
      setShootA(true)
      setTimeout(()=>{
        setShootA(false)
        setLeft(false)
        setCenter(false)
        setRight(false)    
      },7500)
    } 
    console.log("Player");
  }, [Left, Center, Right]  );
  
  if (ShootA) {
    AllButtons.current.style.opacity = 0
  } else {
    AllButtons.current.style.opacity = 1
  }

  const {rotation,position,leftleg,rightleg,leftarm,rightarm} = useSpring({
    from:{
        rotation:[0,1,0],
        position:[-9,-.3,-2],
        leftleg:[0,0,0],
        rightleg:[0,0,0],
        leftarm:[0,0,0],
        rightarm:[0,0,0],},
    to:[
      {rotation:[0,1,0],
       position:[-9,-.3,-2],
       leftleg:[-1,0,0],
       rightleg:[1,0,0],
       leftarm:[-.5,0,0],
       rightarm:[.5,0,0]},

      {rotation:[0,1,0],
       position:[-8.5,-.3,-1.66],
       leftleg:[1,0,0],
       rightleg:[-1,0,0],
       leftarm:[.5,0,0],
       rightarm:[-.5,0,0] },

      {rotation:[0,1,0],
       position:[-8,-.3,-1.33] ,
       leftleg:[-1,0,0],
       rightleg:[1,0,0],
       leftarm:[-.5,0,0],
       rightarm:[.5,0,0]},

      {rotation:[0,1,0],
       position:[-7,-.3,-1],
       leftleg:[1,0,0],
       rightleg:[-1,0,0],
       leftarm:[.5,0,0],
       rightarm:[-.5,0,0]},

      {rotation:[0,1,0],
       position:[-6,-.3,-.45],
       leftleg:[-1.5,0,0],
       rightleg:[1,0,0],
       leftarm:[-.5,0,0],
       rightarm:[.5,0,0]},

      {rotation:[0,1,0] ,
       position:[-5.5,-.3,-.3],
       leftleg:[1,0,0] ,
       rightleg:[-.5,0,0],
       leftarm:[.5,0,0],
       rightarm:[-.5,0,0]}],
      config:{
        duration:1000,
      },
  })
  
  return (
    <animated.group position={ShootA ? position : [-9,-.3,-2]} rotation={ ShootA ? rotation : [0,1,0]} scale={[.2,.2,.2]}  {...props} dispose={null}>
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
        rotation={ShootA ?  leftarm : [0,0,0]}
      />
      <animated.mesh
        name="Right_Leg001"
        geometry={nodes.Right_Leg001.geometry}
        material={materials.Material}
        position={[2.32157, 7.03361, -0.04493]}
        scale={[0.37922, 0.29014, 0.41012]}
        rotation={ShootA ?  rightarm : [0,0,0]}
      />
      <animated.mesh
        name="Left_Leg"
        geometry={nodes.Left_Leg.geometry}
        material={nodes.Left_Leg.material}
        position={[0.68057, 3.74978, 0]}
        scale={[1.27937, 0.54362, 0.57857]}
        rotation={ShootA ?  leftleg : [0,0,0]}
      />
      <animated.mesh
        name="Right_Leg"
        geometry={nodes.Right_Leg.geometry}
        material={nodes.Right_Leg.material}
        position={[0.68057, 3.74978, 0]}
        scale={[1.27937, 0.54362, 0.57857]}
        rotation={ShootA ?  rightleg : [0,0,0]}
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



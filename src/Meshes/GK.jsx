/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect,useState,useContext } from "react";
import {useGLTF} from "@react-three/drei";
import {useSpring,animated,config} from "@react-spring/three"
import {Shoot} from "../App"

export default function Model({props}) {
  const { nodes, materials } = useGLTF("/Player.glb")
  const [Zero, setZero] = useState(false)
  const [One, setOne] = useState(false)
  const [Two, setTwo] = useState(false)
  const {Left,Center,Right} = useContext(Shoot)

  useEffect(() => {
    if (Left || Center || Right) {
      let Rando = Math.floor(Math.random() * 3 )
      if (Rando === 0 ) {
        setTimeout(() => {
          setZero(true)
          setTimeout(()=>{
            setZero(false)
          },2500)
        }, 5000);}
      if (Rando === 1 ) {
        setTimeout(() => {
          setOne(true)
          setTimeout(()=>{
            setOne(false)
          },2500)
        }, 5000);}
      if (Rando === 2 ) {
        setTimeout(() => {
          setTwo(true)
          setTimeout(()=>{
            setTwo(false)
          },2500)
        }, 5000);    
      }
      console.log("GK");
    }},[Left,Center,Right])
    
  const {position,rotation,ArmL,ArmR,LegL,LegR} = useSpring({
    from:{position: Zero ? [1,-.3,-.15] : One ? [1,-.3,-.15] : Two ? [1,-.3,.15] : [1,-.3,-.15],
          rotation:Zero ? [0,-1.6,0] : One ? [0,-1.6,0]  : Two ? [0,-1.6,0] : [0,-1.6,0],
          ArmL:Zero ? [0,0,0] : One ? [0,0,0] : Two ? [0,0,0] : [0,0,0],
          ArmR:Zero ? [0,0,0] : One ? [0,0,0] : Two ? [0,0,0] : [0,0,0]},

    to:[{position:Zero ? [.9,.1,-.45] : One ? [1,-.3,-.15] : Two ? [.9,.35,.45] :[1,-.3,-.15],
        rotation: Zero ? [0,-1.6,1.5] : One ? [0,-1.6,0] : Two ? [0,-1.6,-1.5] : [0,-1.6,0],
        ArmL:Zero ? [3.5,0,0] : One ? [0,0,-2] : Two ? [3.5,0,0] : [0,0,0],
        ArmR:Zero ? [3.5,0,0] : One ? [0,0,2] : Two ? [3.5,0,0] :[0,0,0],
        LegL:Zero ? [0,0,0] : One ? [0,0,-.3] : Two ? [0,0,0] : [0,0,0],
        LegR:Zero ? [0,0,0] : One ? [0,0,.3] : Two ? [0,0,0] :[0,0,0]},],
    config:{
      duration:500
    },
  })
  
  return (
    <animated.group position={position}  rotation={rotation}  scale={[.2,.2,.2]}  {...props} dispose={null}>
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
        rotation={ArmL}
      />
      <animated.mesh
        name="Right_Leg001"
        geometry={nodes.Right_Leg001.geometry}
        material={materials.Material}
        position={[2.32157, 7.03361, -0.04493]}
        scale={[0.37922, 0.29014, 0.41012]}
        rotation={ArmR}
      />
      <animated.mesh
        name="Left_Leg"
        geometry={nodes.Left_Leg.geometry}
        material={nodes.Left_Leg.material}
        position={[0.68057, 3.74978, 0]}
        scale={[1.27937, 0.54362, 0.57857]}
        rotation={LegL}
      />
      <animated.mesh
        name="Right_Leg"
        geometry={nodes.Right_Leg.geometry}
        material={nodes.Right_Leg.material}
        position={[0.68057, 3.74978, 0]}
        scale={[1.27937, 0.54362, 0.57857]}
        rotation={LegR}
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


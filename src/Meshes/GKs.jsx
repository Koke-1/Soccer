/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect,useState,useContext } from "react";
import {useGLTF} from "@react-three/drei";
import {useSpring,animated,config} from "@react-spring/three"
import {Shoot} from "../App"


export default function Model(props) {
  const { nodes, materials } = useGLTF("/Soccer/GK.glb");
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
    <animated.group position={position} rotation={rotation} scale={[.2,.2,.2]}  {...props} dispose={null}>
      <group
        name="Torso"
        position={[0.681, 5.794, 0]}
        scale={[1.26, 1.528, 0.688]}
      >
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Cube003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <animated.group
        name="Left_Leg001"
        position={[-0.942, 7.034, -0.045]}
        scale={[0.379, 0.29, 0.41]}
        rotation={ArmL}
      >
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Cube006_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.003"]}
        />
      </animated.group>
      <animated.group
        name="Right_Leg001"
        position={[2.322, 7.034, -0.045]}
        scale={[0.379, 0.29, 0.41]}
        rotation={ArmR}
      >
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Cube007_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.003"]}
        />
      </animated.group>
      <animated.group
        name="Left_Leg"
        position={[0.681, 3.75, 0]}
        scale={[1.279, 0.544, 0.579]}
        rotation={LegL}
      >
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Cube008_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["Material.003"]}
        />
      </animated.group>
      <animated.group
        name="Right_Leg"
        position={[0.681, 3.75, 0]}
        scale={[1.279, 0.544, 0.579]}
        rotation={LegR}
      >
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          name="Cube009_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Material.002"]}
        />
      </animated.group>
      <mesh
        name="Head"
        castShadow
        receiveShadow
        geometry={nodes.Head.geometry}
        material={materials["Material.002"]}
        position={[0.681, 7.321, 0]}
        scale={[0.607, 1.046, 0.533]}
      />
    </animated.group>
  );
}

useGLTF.preload("/BluePlayer.glb");

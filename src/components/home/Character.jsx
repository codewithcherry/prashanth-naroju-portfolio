"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const Character = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cool_man.glb");
  const { actions } = useAnimations(animations, group);

  // State to track the current animation
  const [currentAnimation, setCurrentAnimation] = useState("walking");

  useEffect(() => {
    if (!actions) return;

    const playAnimation = (name, nextAnimation) => {
      const action = actions[name];
      if (!action) {
        console.warn(`Animation "${name}" not found!`);
        return;
      }

      action.reset().fadeIn(0.5).play();
      action.clampWhenFinished = name !== "sit"; // Only clamp non-looping animations

      if (name !== "sit") {
        // Transition to the next animation after current one finishes
        setTimeout(() => {
          action.fadeOut(0.5);
          if (nextAnimation) setCurrentAnimation(nextAnimation);
        }, action.getClip().duration * 1000);
      } else {
        // Keep looping "sit" animation
        action.setLoop(THREE.LoopRepeat, Infinity);
      }
    };

    if (currentAnimation === "walking") {
      playAnimation("walking", "shakehand");
    } else if (currentAnimation === "shakehand") {
      playAnimation("shakehand", "sit");
    } else if (currentAnimation === "sit") {
      playAnimation("sit"); // Sit animation loops indefinitely
    }
    else if (currentAnimation === "salute") {
        playAnimation("salute"); // Sit animation loops indefinitely
      }
  }, [currentAnimation, actions]);

  return (
    <group ref={group} dispose={null} position={[0, -1.2, 0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.3}
          onPointerOver={() => setCurrentAnimation('salute')} // ✅ Triggers on hover
          onPointerOut={() => setCurrentAnimation('sit')} // ✅ Triggers when the mouse leaves
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_178">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Wolf3D_Skin.003"]}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Wolf3D_Teeth.003"]}
                    skeleton={nodes.Object_9.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Wolf3D_Body.003"]}
                    skeleton={nodes.Object_11.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Wolf3D_Outfit_Bottom.003"]}
                    skeleton={nodes.Object_13.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials["Wolf3D_Outfit_Footwear.003"]}
                    skeleton={nodes.Object_15.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials["Wolf3D_Outfit_Top.003"]}
                    skeleton={nodes.Object_17.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials["Wolf3D_Hair.003"]}
                    skeleton={nodes.Object_19.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials["Wolf3D_Glasses.003"]}
                    skeleton={nodes.Object_21.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials["Wolf3D_Eye.003"]}
                    skeleton={nodes.Object_23.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials["Wolf3D_Eye.003"]}
                    skeleton={nodes.Object_25.skeleton}
                    castShadow
                    receiveShadow
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/cool_man.glb");

export default Character;

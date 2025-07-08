import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./avatar";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: 'Typing',
      options: ["Typing", "Falling", "FallingToRoll", "Standing"]
    },
  })
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows opacity={0.42} scale={10} blur={2} far={5} resolution={256} color="#000000" />
        <Avatar animation={animation} />
      </group>
      {/* Suelo fuera del grupo para que esté visible */}
      <mesh scale={[5, 5, 5]} rotation-x={-Math.PI * 0.5} position-y={-1.001}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

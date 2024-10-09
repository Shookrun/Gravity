import Image from "next/image";
import Crypto from "./components/Crypto/page";
import GravityTeam from "./components/GravityTeam/page";

export default function Home() {
  return (
    <div>
      <Crypto/>
      <GravityTeam/>
    </div>
  );
}

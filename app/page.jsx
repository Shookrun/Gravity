import Image from "next/image";
import Crypto from "./components/Crypto/page";
import GravityTeam from "./components/GravityTeam/page";
import CrypoMarketing from "./components/CryptoMarketing/page";
import MarketingProject from "./components/MarketingProject/page";
import Exchange from "./components/Exchange/page";
import Partners from "./components/Partners/page";

export default function Home() {
  return (
    <div>
      <Crypto/>
      <GravityTeam/>
      <CrypoMarketing/>
      <MarketingProject/>
      <Exchange/>
      <Partners/>
    </div>
  );
}

import CardComponent from "@/components/Cards/CardComponent";
import HeroComponent from "@/components/Hero/HeroComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Image from "next/image";
import { cities } from "@/utils/data";

export default function Home() {
  return (
    <>
    <NavbarComponent  />
    <HeroComponent />
    <CardComponent items={cities} type="city" />
    <div>
     
    </div>
    </>
  );
}

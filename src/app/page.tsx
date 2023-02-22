import Image from "next/image";
import Cards from "./component/cards";
import MainSection from "./component/section";
import Stats from "./component/stats";



export default function Home() {
  return (
    <>
    <MainSection/>     
    <Stats/> 
    <Cards/>
    </>
  );
}

import Image from "next/image";
import Cards from "./component/cards";
import MainSection from "./component/section";
import Stats from "./component/stats";



export default function Home() {
  return (
    <div className="bg-scroll" >
    <MainSection/>     
    <Stats/> 
    <Cards/>
    
    </div>
  );
}

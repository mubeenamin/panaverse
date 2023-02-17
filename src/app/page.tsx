import Cards from "./component/cards";
import MainSection from "./component/section";
import Stats from "./component/stats";



export default function Home() {
  return (
    <div className=" m-4 md:m-16 2xl:m-48">
    <MainSection/>     
    <Stats/> 
    <Cards/> 
    </div>
  );
}

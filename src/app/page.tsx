import Cards from "./component/cards";
import Footer from "./component/footer";
import MainSection from "./component/section";
import Stats from "./component/stats";



export default function Home() {
  return (
    <div className=" m-4 md:m-16 2xl:m-36">
    <MainSection/>     
    <Stats/> 
    <Cards/>
    
    </div>
  );
}

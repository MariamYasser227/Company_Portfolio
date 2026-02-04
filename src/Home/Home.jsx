import HomeCarousel from "./HomeCarousel";
import About from "./about";
import  ActivitiesCarousel  from "./Activity";
import Last from "./Last";

const Home = () => {
  return (
    <div className="w-full h-full font-arabic">
      <HomeCarousel />
      <About />
      <ActivitiesCarousel />
      <Last />
      
    </div>
  );
} 

export default Home;
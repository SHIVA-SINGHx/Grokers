import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import NewsLetter from "../components/NewsLetter";
import ProductCard from "../components/ProductCart";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner/>
      <Category/>
      <BestSeller/>
      <NewsLetter/>
      
    </div>
  );
};
export default Home;
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import ProductCard from "../components/ProductCart";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner/>
      <Category/>
      <BestSeller/>
      {/* <ProductCard/> */}
    </div>
  );
};
export default Home;
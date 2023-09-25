import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeatureCards from "../FeatureCards/FeatureCards";

const Home = () => {
  const cards = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <FeatureCards cards={cards}></FeatureCards>
    </>
  );
};

export default Home;

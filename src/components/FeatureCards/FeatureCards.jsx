import FeatureCard from "./FeatureCard/FeatureCard";
import PropTypes from "prop-types";

const FeatureCards = ({ cards }) => {
  return (
    <div className="pt-5 my-6">
      <div className="grid grid-cols gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cards?.map((card, index) => (
          <FeatureCard key={index} card={card}></FeatureCard>
        ))}
      </div>
    </div>
  );
};
FeatureCards.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default FeatureCards;

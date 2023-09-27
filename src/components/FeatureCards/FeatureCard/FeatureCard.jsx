import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const FeatureCard = (card) => {
  const { id, title, picture, card_bg, category, text_button_bg, category_bg } =
    card.card;

  const navigate = useNavigate();

  const handleFeatureCard = () => {
    navigate(`/cardDetails/${id}`);
  };

  return (
    <div>
      <div
        onClick={() => handleFeatureCard()}
        className={` rounded-md flex max-w-[24rem] flex-col  mx-4 md:mx-0  shadow-md`}
        style={{ backgroundColor: `${card_bg}` }}
      >
        <img className="w-full h-52 md:h-44 rounded-t-md" src={picture} />

        <div className="mt-3 pl-2 ">
          <span
            className="ml-2 text-sm p-1 rounded-sm font-medium f"
            style={{
              backgroundColor: `${category_bg}`,
              color: `${text_button_bg}`,
            }}
          >
            {category}
          </span>
        </div>
        <div className="mt-2 mb-3  ">
          <p
            className="pl-4 text-lg font-semibold  "
            style={{ color: `${text_button_bg}` }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  card: PropTypes.object.isRequired,
};
export default FeatureCard;

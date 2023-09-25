import { useLoaderData, useParams } from "react-router-dom";

const FeatureCardDetails = () => {
  const { id } = useParams();
  const dataCards = useLoaderData();

  const idInt = parseInt(id);
  const card = dataCards.find((card) => card.id === idInt);
  const { title, picture, description, price, text_button_bg } = card;

  return (
    <div className="w-full  md:w-4/5 px-4 md:mx-auto my-2 h-screen] ">
      <div>
        <div className="relative ">
          <img className="h-auto md:h-96 w-full   rounded-md" src={picture} />
          <button
            className=" absolute bottom-2 left-2 md:bottom-4 md:left-3 p-2 rounded-md text-white text-sm md:text-xl font-semibold"
            style={{ backgroundColor: `${text_button_bg}` }}
          >
            Donate $<span>{price}</span>
          </button>
        </div>

        <div className=" mt-3 space-y-3">
          <h1 className="text[#0B0B0B] font-bold text-xl md:text-4xl">
            {title}
          </h1>
          <p className="text-[#0B0B0BB2]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardDetails;

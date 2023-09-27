import { useState } from "react";
import bannerImg from "../../assets/Rectangle-4281.png";
import PropTypes from "prop-types";
import FeatureCards from "../FeatureCards/FeatureCards";

const Banner = ({ cards }) => {
  const [inputValue, setInputValue] = useState(null);
  const [searchObjData, setObjData] = useState([]);
  const [allCard, setAllCard] = useState(true);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleClickBtn = () => {
    const searchValue = inputValue.toLowerCase();
    // console.log(searchValue);
    const searchCards = cards.filter(
      (card) => card.category.toLowerCase() === searchValue
    );
    setObjData(searchCards);
    setAllCard(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="relative">
        <div className="">
          <img
            className="opacity-20 filter brightness-100 h-48 md:h-auto"
            src={bannerImg}
            alt="Banner"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="mb-5 text-[#0B0B0B] font-bold text-lg mt-10 md:mt-0 lg:text-4xl md:text-3xl ">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSubmit} className=" w-9/12 lg:w-2/5 md:w-2/4">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>

              <input
                onChange={handleInput}
                type="search"
                id="default-search"
                className="block w-full p-2 pr-10 md:p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
                placeholder="Search here...."
                required
              />
              <button
                onClick={() => handleClickBtn()}
                type="submit"
                className="text-[#FFF] absolute right-0 md:right-2.5 bottom-1 md:bottom-2 bg-[#FF444A]  font-normal  md:font-semibold rounded-lg text-xs md:text-base px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <FeatureCards searchObjData={searchObjData}></FeatureCards>
      {allCard && <FeatureCards cards={cards}></FeatureCards>}
    </div>
  );
};
Banner.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default Banner;

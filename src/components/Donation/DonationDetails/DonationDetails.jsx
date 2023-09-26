import PropTypes from "prop-types";

const DonationDetails = ({ donationCard }) => {
  const {
    picture,
    category_bg,
    text_button_bg,
    category,
    title,
    card_bg,
    price,
  } = donationCard;
  return (
    <div>
      <div
        className="card flex flex-col md:flex-row card-side mx-3 md:mx-0  shadow-xl  "
        style={{ backgroundColor: `${card_bg}` }}
      >
        <figure>
          <img
            className="rounded-t-xl rounded-b-2xl md:rounded-t-none md:rounded-b-none h-40 md:w-64 md:h-52"
            src={picture}
          />
        </figure>

        <div className="card-body -ml-6 md:ml-0 -my-3 md:my-0 ">
          <div>
            <span
              className=" text-sm p-1 rounded-sm font-medium "
              style={{
                backgroundColor: `${category_bg}`,
                color: `${text_button_bg}`,
              }}
            >
              {category}
            </span>
          </div>
          <div className=" ">
            <p className="text-base md:text-xl font-semibold text-[#0B0B0B] ">
              {title}
            </p>
            <p
              className="text-base font-semibold"
              style={{
                color: `${text_button_bg}`,
              }}
            >
              ${price}.00
            </p>
            <button
              className="btn btn-sm md:btn-md mt-2 text-white "
              style={{
                backgroundColor: `${text_button_bg}`,
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
DonationDetails.propTypes = {
  donationCard: PropTypes.object.isRequired,
};
export default DonationDetails;

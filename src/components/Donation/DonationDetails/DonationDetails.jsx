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
  console.log(price);
  return (
    <div>
      <div
        className="card   card-side  shadow-xl "
        style={{ backgroundColor: `${card_bg}` }}
      >
        <figure>
          <img className="w-64 h-52" src={picture} />
        </figure>

        <div className="card-body">
          <div>
            <span
              className=" text-sm p-1 rounded-sm font-medium f"
              style={{
                backgroundColor: `${category_bg}`,
                color: `${text_button_bg}`,
              }}
            >
              {category}
            </span>
          </div>
          <div className=" ">
            <p className=" text-xl font-semibold text-[#0B0B0B] ">{title}</p>
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

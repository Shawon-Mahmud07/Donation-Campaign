import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { saveDonationInfo } from "../../../Utility/localStorage";

const FeatureCardDetails = () => {
  const { id } = useParams();
  const dataCards = useLoaderData();

  const idInt = parseInt(id);
  const card = dataCards.find((card) => card.id === idInt);
  const { title, picture, description, price, text_button_bg } = card;

  const handleDonateClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, donate",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        saveDonationInfo(idInt);
        Swal.fire("Thank you!", "Your donation has been received.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your donation has been cancelled.", "info");
      }
    });
  };

  return (
    <div className="w-full  md:w-4/5 px-4 md:mx-auto my-2 h-screen] ">
      <div>
        <div className="relative ">
          <img className="h-auto md:h-96 w-full   rounded-md" src={picture} />
          <button
            onClick={() => handleDonateClick()}
            className="z-10 absolute bottom-2 left-2 md:bottom-4 md:left-3 p-2 rounded-md text-white text-xs md:text-xl font-semibold"
            style={{ backgroundColor: `${text_button_bg}` }}
          >
            Donate $<span>{price}</span>
          </button>
          <div className="z-0 absolute bottom-0 w-full h-12 md:h-20 bg-black opacity-70 rounded-sm"></div>
        </div>{" "}
        <div className=" mt-3 space-y-3">
          <h1 className="text[#0B0B0B] font-bold text-xl md:text-4xl">
            {title}
          </h1>
          <p className="text-[#0B0B0BB2] text-base text-justify font-normal ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardDetails;

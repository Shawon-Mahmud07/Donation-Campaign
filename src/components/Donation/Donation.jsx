import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationInfo } from "../../Utility/localStorage";
import DonationDetails from "./DonationDetails/DonationDetails";

const Donation = () => {
  const donationData = useLoaderData();
  const [donationDetails, setDonationDetails] = useState([]);
  const [setCard, setAllCard] = useState(4);
  useEffect(() => {
    const storedDonationId = getDonationInfo();
    if (donationData.length > 0) {
      const donation = donationData.filter((data) =>
        storedDonationId.includes(data.id)
      );
      setDonationDetails(donation);
    }
  }, [donationData]);

  return (
    <>
      <div className="grid py-10 gap-6 md:gap-10 h-auto  grid-cols md:grid-cols-2">
        {donationDetails.slice(0, setCard).map((donationCard, index) => (
          <DonationDetails
            key={index}
            donationCard={donationCard}
          ></DonationDetails>
        ))}
      </div>

      <div
        className={
          setCard === donationDetails.length || donationDetails.length < setCard
            ? "hidden"
            : "text-center mb-10"
        }
      >
        <button
          onClick={() => setAllCard(donationDetails.length)}
          className="btn btn-sm md:btn-md bg-[#009444] text-white font-semibold text-base hover:bg-[#009444]  "
        >
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;

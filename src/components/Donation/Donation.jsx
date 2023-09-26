import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationInfo } from "../../Utility/localStorage";
import DonationDetails from "./DonationDetails/DonationDetails";

const Donation = () => {
  const donationData = useLoaderData();
  const [donationDetails, setDonationDetails] = useState([]);
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
      <div className="grid py-10 gap-10 h-auto  grid-cols md:grid-cols-2">
        {donationDetails.map((donationCard, index) => (
          <DonationDetails
            key={index}
            donationCard={donationCard}
          ></DonationDetails>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-sm md:btn-md bg-[#009444] text-white font-semibold text-base hover:bg-[#009444]  ">
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;

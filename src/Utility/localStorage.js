const getDonationInfo = () => {
  const storedDonationInfo = localStorage.getItem("donation-info");
  if (storedDonationInfo) {
    return JSON.parse(storedDonationInfo);
  }
  return [];
};
const saveDonationInfo = (id) => {
  const storedAllDonationInfo = getDonationInfo();
  const exist = storedAllDonationInfo.find((donationId) => donationId === id);
  if (!exist) {
    storedAllDonationInfo.push(id);
    localStorage.setItem(
      "donation-info",
      JSON.stringify(storedAllDonationInfo)
    );
  }
};

export { getDonationInfo, saveDonationInfo };

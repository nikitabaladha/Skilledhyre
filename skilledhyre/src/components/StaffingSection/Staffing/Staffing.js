import React from "react";

import PermanentStaffing from "../PermanentStaffing/PermanentStaffing.js";
import ContractStaffing from "../ContractStaffing/ContractStaffing.js";
import HRConsulting from "../HRConsulting/HRConsulting.js";
import ContractToHire from "../ContractToHire/ContractToHire.js";
import RPO from "../RPO/RPO.js";
import HeadHunting from "../HeadHunting/HeadHunting.js";

const Staffing = () => {
  return (
    <>
      <PermanentStaffing />
      <ContractStaffing />
      <HRConsulting />
      <ContractToHire />
      <RPO />
      <HeadHunting />
    </>
  );
};

export default Staffing;

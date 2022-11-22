import React from "react";

import { Header } from "../../components";
import { StackedChart } from "../../components";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-6 sm:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />

      <StackedChart />
    </div>
  );
};
export default Stacked;

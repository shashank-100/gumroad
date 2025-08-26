import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { CustomersContent } from "./CustomersContent";

const CustomersPage = () => {
  return (
    <div className="customers-page">
      <CustomersContent />
    </div>
  );
};

export default register({
  component: CustomersPage,
  propParser: () => ({})
});

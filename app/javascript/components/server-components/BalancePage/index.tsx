import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { BalanceContent } from "./BalanceContent";

const BalancePage = () => {
  return (
    <div className="balance-page">
      <BalanceContent />
    </div>
  );
};

export default register({
  component: BalancePage,
  propParser: () => ({})
});

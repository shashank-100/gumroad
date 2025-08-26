import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { AnalyticsContent } from "./AnalyticsContent";

const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <AnalyticsContent />
    </div>
  );
};

export default register({
  component: AnalyticsPage,
  propParser: () => ({})
});

import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { AudienceContent } from "./AudienceContent";

const AudiencePage = () => {
  return (
    <div className="audience-page">
      <AudienceContent />
    </div>
  );
};

export default register({
  component: AudiencePage,
  propParser: () => ({})
});

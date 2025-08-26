import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { SettingsContent } from "./SettingsContent";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <SettingsContent />
    </div>
  );
};

export default register({
  component: SettingsPage,
  propParser: () => ({})
});

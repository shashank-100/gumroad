import ReactOnRails from "react-on-rails";

import BasePage from "$app/utils/base_page";

import DashboardRouter from "$app/components/server-components/DashboardRouter";

BasePage.initialize();
ReactOnRails.register({ DashboardRouter });

import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { DashboardPage } from "../DashboardPage";

// Type for the dashboard props passed from Rails
type DashboardProps = {
  name: string;
  has_sale: boolean;
  getting_started_stats: {
    customized_profile: boolean;
    first_follower: boolean;
    first_product: boolean;
    first_sale: boolean;
    first_payout: boolean;
    first_email: boolean;
    purchased_small_bets: boolean;
  };
  sales: any[];
  balances: {
    balance: string;
    last_seven_days_sales_total: string;
    last_28_days_sales_total: string;
    total: string;
  };
  activity_items: any[];
  stripe_verification_message?: string | null;
  tax_forms: Record<number, string>;
  show_1099_download_notice: boolean;
};

const DashboardRouter = (props: DashboardProps) => {
  return <DashboardPage {...props} />;
};

export default register({
  component: DashboardRouter,
  propParser: (data: unknown) => data as DashboardProps
});

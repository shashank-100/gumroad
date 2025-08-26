import * as React from "react";
import {
  isRouteErrorResponse,
  useRouteError,
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StaticRouterProvider } from "react-router-dom/server";

import { buildStaticRouter, GlobalProps, register } from "$app/utils/serverComponentUtil";

import { DashboardPage } from "../DashboardPage";
import { DashboardNavigation } from "./DashboardNavigation";

// Import existing components
import Analytics from "$app/components/Dashboard/Analytics";
import Products from "$app/components/Dashboard/Products";

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

const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <main>
      <div>
        <div className="placeholder">
          <p>
            {isRouteErrorResponse(error) && error.status === 404
              ? "The resource you're looking for doesn't exist."
              : "Something went wrong."}
          </p>
        </div>
      </div>
    </main>
  );
};

// Layout component that includes navigation
const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: "flex",
    minHeight: "100vh"
  }}>
    <DashboardNavigation />
    <main style={{
      flex: 1,
      marginLeft: "250px",
      padding: "2rem",
      background: "white"
    }}>
      {children}
    </main>
  </div>
);

// Simple SPA Router that uses existing components
const DashboardRouter = ({ ...props }: DashboardProps) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <DashboardPage {...props} />
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/analytics",
      element: (
        <DashboardLayout>
          <Analytics />
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/audience",
      element: (
        <DashboardLayout>
          <div>
            <h1>Audience</h1>
            <p>This will load the existing Audience component</p>
            {/* TODO: Import and use existing Audience component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/products",
      element: (
        <DashboardLayout>
          <Products />
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/customers",
      element: (
        <DashboardLayout>
          <div>
            <h1>Customers</h1>
            <p>This will load the existing Customers component</p>
            {/* TODO: Import and use existing Customers component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/balance",
      element: (
        <DashboardLayout>
          <div>
            <h1>Balance & Payouts</h1>
            <p>This will load the existing Balance component</p>
            {/* TODO: Import and use existing Balance component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/settings",
      element: (
        <DashboardLayout>
          <div>
            <h1>Settings</h1>
            <p>This will load the existing Settings component</p>
            {/* TODO: Import and use existing Settings component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/workflows",
      element: (
        <DashboardLayout>
          <div>
            <h1>Workflows</h1>
            <p>This will load the existing Workflows component</p>
            {/* TODO: Import and use existing Workflows component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/emails",
      element: (
        <DashboardLayout>
          <div>
            <h1>Emails</h1>
            <p>This will load the existing Emails component</p>
            {/* TODO: Import and use existing Emails component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/utm-links",
      element: (
        <DashboardLayout>
          <div>
            <h1>UTM Links</h1>
            <p>This will load the existing UTM Links component</p>
            {/* TODO: Import and use existing UTM Links component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/communities",
      element: (
        <DashboardLayout>
          <div>
            <h1>Communities</h1>
            <p>This will load the existing Communities component</p>
            {/* TODO: Import and use existing Communities component */}
          </div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
  ];

  const router = createBrowserRouter(routes, {
    basename: "/dashboard"
  });

  return <RouterProvider router={router} />;
};

const DashboardRouterSSR = async (global: GlobalProps) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <DashboardPage 
            name=""
            has_sale={false}
            getting_started_stats={{
              customized_profile: false,
              first_follower: false,
              first_product: false,
              first_sale: false,
              first_payout: false,
              first_email: false,
              purchased_small_bets: false,
            }}
            sales={[]}
            balances={{
              balance: "",
              last_seven_days_sales_total: "",
              last_28_days_sales_total: "",
              total: "",
            }}
            activity_items={[]}
            tax_forms={{}}
            show_1099_download_notice={false}
          />
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    // Other routes with placeholder content for SSR
    {
      path: "/analytics",
      element: (
        <DashboardLayout>
          <div>Analytics Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/audience",
      element: (
        <DashboardLayout>
          <div>Audience Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/products",
      element: (
        <DashboardLayout>
          <div>Products Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/customers",
      element: (
        <DashboardLayout>
          <div>Customers Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/balance",
      element: (
        <DashboardLayout>
          <div>Balance Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/settings",
      element: (
        <DashboardLayout>
          <div>Settings Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/workflows",
      element: (
        <DashboardLayout>
          <div>Workflows Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/emails",
      element: (
        <DashboardLayout>
          <div>Emails Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/utm-links",
      element: (
        <DashboardLayout>
          <div>UTM Links Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/communities",
      element: (
        <DashboardLayout>
          <div>Communities Page</div>
        </DashboardLayout>
      ),
      errorElement: <ErrorBoundary />,
    },
  ];

  const { router, context } = await buildStaticRouter(global, routes);
  const component = () => <StaticRouterProvider router={router} context={context} nonce={global.csp_nonce} />;
  component.displayName = "DashboardRouterSSR";
  return component;
};

export default register({
  component: DashboardRouter,
  ssrComponent: DashboardRouterSSR,
  propParser: (data: unknown) => data as DashboardProps
});

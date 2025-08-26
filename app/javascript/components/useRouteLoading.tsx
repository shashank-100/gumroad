import React from "react";
import { usePage } from "@inertiajs/react";

export function useRouteLoading() {
  const { component } = usePage();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(false);
  }, [component]);

  return isLoading;
}

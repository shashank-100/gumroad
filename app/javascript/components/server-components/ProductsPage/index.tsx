import * as React from "react";

import { register } from "$app/utils/serverComponentUtil";

import { ProductsContent } from "./ProductsContent";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <ProductsContent />
    </div>
  );
};

export default register({
  component: ProductsPage,
  propParser: () => ({})
});

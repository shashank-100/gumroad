import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import ReactDOM from "react-dom/client";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
    return pages[`./pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    const root = ReactDOM.createRoot(el);
    root.render(<App {...props} />);
  },
});

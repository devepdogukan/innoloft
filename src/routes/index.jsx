import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "~/layout";
import MainVieww from "~/pages/main";
import ProductView from "~/pages/product/view";
import FourOhFour from "~/pages/404/notFound";
import ProductEditView from "~/pages/product/edit";

export default function RouteWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainVieww />} />
          <Route path="product" element={<ProductView />} />
          <Route path="product/edit" element={<ProductEditView />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

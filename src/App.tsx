import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader";

const DashBoard = lazy(() => import("./pages/DashBoard"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));

const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* charts */}
          {/* apps */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

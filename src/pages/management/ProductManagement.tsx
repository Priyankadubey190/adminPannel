import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

const ProductManagement = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">Products</main>
    </div>
  );
};

export default ProductManagement;

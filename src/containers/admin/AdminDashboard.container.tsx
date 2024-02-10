import React from "react";
// import { AdminSidebar } from "../../components";
import styles from "./AdminDashboard.module.scss";
import { AdminSidebar } from "@components";

export const AdminDashboardContainer = () => {
  return (
    <div>
      <div className={styles.admin_container2}></div>
      {/*sidebar*/}
      <AdminSidebar />
      {/*main*/}
      <main>qqqqq</main>
      <div></div>
    </div>
  );
};

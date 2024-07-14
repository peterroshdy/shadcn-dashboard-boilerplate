// src/pages/Dashboard.js
import React from "react";
import Navbar from "@/components/Navbar";
import DashboardCards from "@/components/DashboardCards";
import RecentTransactions from "@/components/RecentTransactions";
import RecentSales from "@/components/RecentSales";

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardCards />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <RecentTransactions />
          <RecentSales />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

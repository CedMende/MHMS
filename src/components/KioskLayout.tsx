import React from "react";
import { Outlet } from "react-router-dom";
export const KioskLayout = () => {
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Outlet />
    </div>;
};
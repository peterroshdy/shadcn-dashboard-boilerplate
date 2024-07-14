// src/pages/Settings.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/settings/Sidebar';
import GeneralSettings from '@/components/settings/GeneralSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
// Import other settings components

const Settings = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <Sidebar />
          <div className="grid gap-6">
            <Routes>
              <Route path="/" element={<Navigate to="/settings/general" replace />} />
              <Route path="general" element={<GeneralSettings />} />
              <Route path="security" element={<SecuritySettings />} />
              {/* Add routes for other settings components */}
              {/* <Route path="integrations" element={<IntegrationsSettings />} />
              <Route path="support" element={<SupportSettings />} />
              <Route path="organizations" element={<OrganizationsSettings />} />
              <Route path="advanced" element={<AdvancedSettings />} /> */}
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;

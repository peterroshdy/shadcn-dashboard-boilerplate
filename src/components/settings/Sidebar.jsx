// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="grid gap-4 text-sm text-muted-foreground">
    <NavLink
      to="/settings/general"
      className={({ isActive }) => (isActive ? "font-semibold text-primary" : "")}
    >
      General
    </NavLink>
    <NavLink
      to="/settings/security"
      className={({ isActive }) => (isActive ? "font-semibold text-primary" : "")}
    >
      Security
    </NavLink>
    <NavLink
      to="/settings/integrations"
      className={({ isActive }) => (isActive ? "font-semibold text-primary" : "")}
    >
      Integrations
    </NavLink>
    <NavLink
      to="/settings/support"
      className={({ isActive }) => (isActive ? "font-semibold text-primary" : "")}
    >
      Support
    </NavLink>
    <NavLink
      to="/settings/organizations"
      className={({ isActive }) => (isActive ? "font-semibold text-primary" : "")}
    >
      Organizations
    </NavLink>
    <NavLink
      to="/settings/advanced"
      className={({ isActive }) => (isActive ? "font-semibold text-primary" : "")}
    >
      Advanced
    </NavLink>
  </nav>
);

export default Sidebar;

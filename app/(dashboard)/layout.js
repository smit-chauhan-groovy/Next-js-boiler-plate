import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}

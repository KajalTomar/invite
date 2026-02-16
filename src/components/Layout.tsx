import React from "react";

interface LayoutProps {
  className?: string,
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
      <header style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>My App</h2>
      </header>

      <main>{children}</main>

      <footer style={{ marginTop: 32, fontSize: 12, color: "#666" }}>
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default Layout;
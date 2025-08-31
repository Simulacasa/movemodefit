import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

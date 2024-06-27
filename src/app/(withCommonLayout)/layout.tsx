import Footer from "@/components/shared/footer/Footer";
import NavBar from "@/components/shared/navbar/NavBar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

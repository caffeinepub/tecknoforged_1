import { useEffect } from "react";
import ContactPage from "./ContactPage";

export default function RFQPage() {
  useEffect(() => {
    document.title = "Request Quote | Tecknoforged Screw Mfg Co.";
  }, []);
  return <ContactPage />;
}

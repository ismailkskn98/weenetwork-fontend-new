import Footer from "@/components/site/footer";
import Header from "@/components/site/header";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

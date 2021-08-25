import Header from "Components/layout/header";
import Footer from "Components/layout/footer";

export default function Home({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-full">{children}</div>
      <Footer />
    </div>
  );
}

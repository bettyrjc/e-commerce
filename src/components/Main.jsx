import Header from "Components/layout/header";
import Footer from "Components/layout/footer";

export default function Home({ children }) {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="scroll overflow-auto my-8 lg:mx-24">{children}</div>
      <Footer />
    </div>
  );
}

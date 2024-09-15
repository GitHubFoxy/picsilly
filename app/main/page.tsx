import Footer from "~/components/shared/landing/footer";
import Header from "~/components/shared/landing/header";
import Main from "~/components/shared/landing/main";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-1 max-w-[1440px] mx-auto py-6 px-2">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

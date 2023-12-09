// import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { About } from "./sections/About";
// import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Social } from "./sections/Social";

export const Page = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-center">
        <About />
        <Projects />
        <Social />
      </main>
      {/* <Footer /> */}
    </>
  );
};

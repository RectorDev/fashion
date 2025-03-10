import Hero from "./sections/Hero";
import Companies from "@/components/Companies";
import NewArrivals from "./sections/NewArrivals";
import Payday from "./sections/Payday";
import Youngs from "./sections/Youngs";
import DownloadApp from "./sections/DownloadApp";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <section className="mx-auto my-0 padding-x">
        <Hero />
      </section>
      <Companies />
      <section className="padding-x">
        <NewArrivals />
      </section>
      <section className="">
        <Payday />
      </section>
      <section className="padding-x-xl">
        <Youngs />
      </section>
      <section className="padding-x">
        <DownloadApp />
      </section>
      <section className="padding-x bg-accent">
        <Contact />
      </section>
      <section className="padding-x bg-black xl:h-1/2">
        <Footer />
      </section>
    </>
  );
}

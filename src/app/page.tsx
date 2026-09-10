import About from "@/sections/About";
import Companies from "@/sections/Companies";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Principles from "@/sections/Principles";
import Stack from "@/sections/Stack";
import Work from "@/sections/Work";

export default function Home() {
    return (
        <>
            <Navbar />
            <main id="main">
                <Hero />
                <Companies />
                <About />
                <Work />
                <Principles />
                <Stack />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

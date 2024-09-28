import Experience from "@/components/Experience/Experience"
import Navbar from "@/components/Navbar/Navbar"
import Projects from "@/components/Projects/Projects"
import Footer from "@/components/Footer/Footer"
import Home2 from "@/components/Home/Home2"

export default function Home() {
  return (
    <div className="bg-black h-auto w-full overflow-hidden">
      <Navbar />
      <Home2 />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

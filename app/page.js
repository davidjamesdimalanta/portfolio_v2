'use client'

import About from "./components/about";
import Contact from "./components/contact";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Featured from "./components/featured";
import Last from "./components/last";


export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center">
      <Landing />
      <Featured />
      <About />
      <Projects />
      <Contact />
      <Last />
    </main>
  );
}


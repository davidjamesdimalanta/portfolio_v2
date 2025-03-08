import Landing from './components/landing'
import About from './components/about'
import Featured from './components/featured'
import Projects from './components/projects'
import Contact from './components/contact'
import Last from './components/last'

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


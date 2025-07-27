import Landing from './components/landing'
import About from './components/about'
import Contact from './components/contact'
import Last from './components/last'
import ProjectMapper from './components/ProjectMapper'

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center">
      <Landing />
      <ProjectMapper />
      <About />
      <Contact />
      <Last />
    </main>
  );
}


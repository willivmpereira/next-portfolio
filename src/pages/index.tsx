import { HomeContainer } from '../styles/HomeStyles'
import { Header } from "../components/Header";
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <HomeContainer>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </HomeContainer>
  );
}

import { HomeContainer } from '../styles/HomeStyles'
import { Header } from "../components/Header";
import { About } from '../components/About';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <HomeContainer>
      <Header/>
      <About/>
      <Projects/>
    </HomeContainer>
  );
}

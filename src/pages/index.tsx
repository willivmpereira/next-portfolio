import { HomeContainer } from '../styles/HomeStyles'
import { Header } from "../components/Header";
import { About } from '../components/About';

export default function Home() {
  return (
    <HomeContainer>
      <Header/>
      <About/>
    </HomeContainer>
  );
}

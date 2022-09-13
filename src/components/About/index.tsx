import { AboutUs } from "./styles"

export const About = () => {
    return (
        <AboutUs>
            <div className="container">
                <div className="display">
                    <div className="about__title">
                        <h4>Let's Connect</h4>
                        <h1>Conectando<br/>você ao<br/>seu público</h1>
                        <div className="status">
                            <div className="projects">
                                <h4>105+</h4>
                                <span>Projetos</span>
                            </div>
                            <div className="clients">
                                <h4>13+</h4>
                                <span>Clientes</span>
                            </div>
                        </div>
                    </div>
                    <div className="about__description">
                        <p>Estamos agora na era da audiência - onde as pessoas que estamos tentando alcançar estão no comando. Sabemos que o público está menos tolerante à publicidade do que nunca. A publicidade hoje é recebida nos termos de um público, não de uma marca. E eles vão dispensar o indesejável instantaneamente.</p>
                        <br/>
                        
                        <p>Nós da co.Blvck somos movidos por tecnologia e dados tanto quanto por design e conteúdo para garantir que cumpramos nossa principal missão de ajudar nossos clientes a alcançar seu sucesso. Nossas soluções digitais usam dados para segmentar consumidores por demografia ou interesses, a fim de encontrar o Santo Graal que é a pessoa certa no dispositivo certo no momento certo. Com a segmentação de público, é mais provável que você alcance consumidores interessados em seus produtos ou serviços com mensagens relevantes. também diminui os gastos com anúncios que você dominará em olhos desinteressados e ajuda a mover clientes em potencial pelo túnel. Nós nunca permitimos que você 'deixe dinheiro na mesa', por assim dizer.</p>
                    </div>
                </div>
            </div>
        </AboutUs>
    )
}
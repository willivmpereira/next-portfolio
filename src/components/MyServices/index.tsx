import { useEffect } from "react"
import Imagem from 'next/image';
import { MyServicesContainer } from "./styles"
import { SERVICESINFO } from '../../constants/services';
import imageUrl from '../../assets/icons/icon01.svg'
import MyPhoto from '../../assets/icons/icon01.jpg';

export const MyServices = () => {

    const image = '/src/assets/icons/'

    useEffect(() => {

        const person = document.querySelectorAll('.person');
        const detailMe = document.querySelector('.detail_me');

        const title = document.querySelector('.title');
        const subtitle = document.querySelector('.subtitle');

        person.forEach((tab, index) => {
            tab.addEventListener('mouseover', () => {
                tab.classList.add('active')

                detailMe.classList.add('animation')
                title.innerHTML = SERVICESINFO[index].name
                subtitle.innerHTML = SERVICESINFO[index].description

            })

            tab.addEventListener('mouseout', () => {
                tab.classList.remove('active');

                detailMe.classList.remove('animation');
                title.innerHTML = 'O que eu faço? 🤔'
                subtitle.innerHTML = 'Clique ou passe sobre os ícones para descobrir'
            })
        })
    })

    return (
        <MyServicesContainer>
            <div className="container">
                <div className="display">
                    <div className="detail_me">
                        <h2 className="title">O que eu faço? 🤔</h2>
                        <p className="subtitle">Clique ou passe sobre os ícones para descobrir</p>
                    </div>
                    
                    <div className="icons">
                        <ul>
                            {SERVICESINFO.map(item => (
                            <li className="person" key={item.name}>
                                <div>
                                <Imagem src={'/' + item.icon} alt="Picture of the author"
      width={100}
      height={100} />
                                </div>
                                {/* <img src={`../../assets/icons/${item.icon}`} width={100} height={100} alt="" /> */}
                                <div className="overlay"></div>
                            </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </MyServicesContainer>
    )
}
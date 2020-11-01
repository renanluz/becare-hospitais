import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'
import logoImg from '../assets/images/logo.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="BeCare"/>        
                <main>
                    <h1>Descubra o tempo para atendimento em serviços de Saúde.</h1>
                    <p>Escolha o hospital mais adequado à sua necessidade, antes de sair de casa.</p>
                </main>
                <div className="location">
                    <strong>São José do Rio Preto</strong>
                    <span>São Paulo</span>
                </div> 
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={30} color="rgba(0, 0, 0, 0.6)" />
                </Link>
                
            </div>
        </div>
    );
}

export default Landing;
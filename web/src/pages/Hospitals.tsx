import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import Map from '../components/Map/index'

import mapMarkerImg from '../assets/images/map-marker.svg';

import '../styles/pages/hospitals.css'

function Hospitals() {
    return (
        
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="BeCare"/>
                    
                    <h2>Escolha um hospital no mapa</h2>
                    <p></p>
                </header>

                <footer>
                    <strong>São José do Rio Preto</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map/>
            <Link to="" className="create-hospital">
                <FiPlus size={32} color="#FFF"/>
            </Link>    

        </div>
    );
}

export default Hospitals;
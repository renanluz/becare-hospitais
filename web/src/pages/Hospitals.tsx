import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

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

            <Map
                center={[20.7959755, -49.3353081]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-hospital">
                <FiPlus size={32} color="#FFF"/>
            </Link>    

        </div>
    );
}

export default Hospitals;
import React from 'react';
import Particles from 'react-particles-js';
import { config } from '../../Assets/particle-config';
import './particle.css';


export const ParticleBackground = () => {
    return (
        <Particles params={config} className="particle" />
    );
}
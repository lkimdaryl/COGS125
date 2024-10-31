import React, { useEffect, useState } from 'react';
import Light from './light'; // Adjust the import path as needed

const ParticleSystem = ({color}) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const createParticle = () => {
            const x = Math.random() * window.innerWidth/4 + window.innerWidth/4;
            const y = Math.random() * 200 + 100; // range from 100 to 300
            const blurAmount = Math.random() * 10 + 5; // range from 5 to 15
            const duration = Math.random() * 10000 + 20000; // Duration between 2000 and 5000 ms

            const newParticle = {
                id: crypto.randomUUID(), // Unique ID for each particle
                x,
                y, 
                blurAmount,
                duration,
            };

            // Add the new particle to the existing array
            setParticles((prevParticles) => [...prevParticles, newParticle]);

            // Remove the particle after its animation ends
            setTimeout(() => {
                setParticles((prevParticles) =>
                    prevParticles.filter((p) => p.id !== newParticle.id)
                );
            }, duration);
        };

        const interval = setInterval(createParticle, 200); // Create a new particle every 200ms

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div style={{ position: 'absolute', top: '0', left: '0', height: 'inherit', width: 'inherit', overflow: 'hidden', zIndex: '-8' }}>
            {particles.map((particle) => (
                <Light
                    key={particle.id}
                    blurAmount={particle.blurAmount}
                    addStyles={{
                        left: `${particle.x}px`,
                        top: `${window.innerHeight - particle.y}px`,
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        backgroundColor: color,
                        zIndex: '-8',
                        animation: `floatUp ${particle.duration}ms forwards`,
                    }}
                />
            ))}
            <style>
                {`
                    @keyframes floatUp {
                        0% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                        100% {
                            transform: translateY(-1000px); /* Move up */
                            opacity: 0; /* Fade out */
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ParticleSystem;

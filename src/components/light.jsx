import React, { useState, useEffect } from 'react';

export default function Light({blurAmount, addStyles}) {
    const MIN_BRIGHTNESS = 1; // Minimum brightness
    const MAX_BRIGHTNESS = 1.5; // Maximum brightness
    const [brightness, setBrightness] = useState(MAX_BRIGHTNESS); // Initial brightness level
    const [increasing, setIncreasing] = useState(false); // State to determine direction

    useEffect(() => {
        // Function to adjust brightness
        const interval = setInterval(() => {
            setBrightness(prev => {
                if (increasing) {
                    // If increasing, check if we need to switch to decreasing
                    if (prev < MAX_BRIGHTNESS) {
                        return prev + 0.1; // Increase brightness
                    } else {
                        setIncreasing(false); // Switch to decreasing
                        return prev; // Keep brightness at max
                    }
                } else {
                    // If decreasing, check if we need to switch to increasing
                    if (prev > MIN_BRIGHTNESS) {
                        return prev - 0.1; // Decrease brightness
                    } else {
                        setIncreasing(true); // Switch to increasing
                        return prev; // Keep brightness at min
                    }
                }
            });
        }, 200); // Update every 100 milliseconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [increasing]); // Depend on increasing state

    const finalStyles = {
        borderRadius: '50%', 
        position: 'absolute',
        filter: `blur(${blurAmount}px) brightness(${brightness}`,
        zIndex: '-9',
        ...addStyles
    }

    return (
        <div className="light" style={finalStyles}/>
    )
}
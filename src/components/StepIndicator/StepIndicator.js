// src/components/StepIndicator.js

import React from 'react';
import './StepIndicator.css'; // Assuming you will style your component

function StepIndicator({ currentStep, totalSteps }) {
    return (
        <div className="step-indicator-container">
            {Array.from({ length: totalSteps }, (_, index) => (
                <div key={index} className={`step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}>
                    {index + 1}
                </div>
            ))}
        </div>
    );
}

export default StepIndicator;

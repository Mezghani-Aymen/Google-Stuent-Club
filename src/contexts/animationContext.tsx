import React, { createContext, useContext, useState } from 'react';
import { AnimationContextType } from "../types/animationContextInterface";

// Create the context with a default value
const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

// Provider component
export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAnimated, setIsAnimated] = useState<boolean>(true);

    return (
        <AnimationContext.Provider value={{ isAnimated, setIsAnimated }}>
            {children}
        </AnimationContext.Provider>
    );
};

// Custom hook for consuming the context
export const useAnimation = (): AnimationContextType => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
};

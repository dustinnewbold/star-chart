import { CelestialBody } from '../types/CelestialBody';

export const getCelestialBodies = (): CelestialBody[] => {
    return [
        'sun',
        'moon',
        'mercury',
        'venus',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune',
        'pluto',
    ];
};

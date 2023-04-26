import { CelestialBody } from '../types/CelestialBody';
import { ResultBodies, ResultElements } from '../types/Result';

export const calculateBodyElements = (bodies: ResultBodies): ResultElements => {
    const elements: ResultElements = {
        fire: 0,
        earth: 0,
        air: 0,
        water: 0,
    };

    Object.keys(bodies).forEach(bodyString => {
        const bodyKey = bodyString as (CelestialBody | 'ascendant');
        const body = bodies[bodyKey];
        if ( ! body ) return;

        const element = body.element;
        if ( ! element ) return;

        elements[element]++;
    });

    return elements;
};

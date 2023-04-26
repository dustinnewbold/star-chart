import { CelestialBody } from './CelestialBody';
import { Element } from './Element';
import { Sign } from './Sign';
export type BodyResult = {
    sign: Sign;
    element: Element | null;
} | null;
export type ResultBodies = {
    [key in CelestialBody]: BodyResult;
} & {
    ascendant: BodyResult;
};
export type ResultElements = {
    [key in Element]: number;
};
export type Result = {
    bodies: ResultBodies;
    elements: ResultElements;
};

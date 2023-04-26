import { Element } from '../types/Element';
import { Sign } from '../types/Sign';

const SIGN_ELEMENT_MAP: any = {
    aries: 'fire',
    leo: 'fire',
    sagittarius: 'fire',
  
    taurus: 'earth',
    virgo: 'earth',
    capricorn: 'earth',
  
    gemini: 'air',
    libra: 'air',
    aquarius: 'air',
  
    cancer: 'water',
    scorpio: 'water',
    pisces: 'water',
};

export const getSignElement = (body: Sign): Element | null => {
    return SIGN_ELEMENT_MAP[body] || null;
};

import { CelestialBody } from '../types/CelestialBody';
import { Input } from '../types/Input';
import { LibCelestialBody } from '../types/LibCelestialBody';
import { BodyResult, ResultBodies } from '../types/Result';
import { calculateBodyElements } from './calculateBodyElements';
import { getHoroscope } from './getHoroscope';
import { getSignElement } from './getSignElement';

export const getNatalResult = (inputs: Input) => {
	const horoscope = getHoroscope(inputs);

	const getBodyResult = (body: CelestialBody): BodyResult => {
		const libBody: LibCelestialBody = horoscope.CelestialBodies[body];
		if ( ! libBody ) return null;

		const sign = libBody.Sign?.key;
		if ( ! sign ) return null;

		const element = getSignElement(sign);

		return {
			sign,
			element,
		};
	};

	const getAscendantResult = (): BodyResult => {
		const sign = horoscope.Ascendant?.Sign?.key;
		if ( ! sign ) return null;

		const element = getSignElement(sign);

		return {
			sign,
			element,
		};
	};

	const resultBodies: ResultBodies = {
		sun: getBodyResult('sun'),
		moon: getBodyResult('moon'),
		mercury: getBodyResult('mercury'),
		venus: getBodyResult('venus'),
		mars: getBodyResult('mars'),
		jupiter: getBodyResult('jupiter'),
		saturn: getBodyResult('saturn'),
		uranus: getBodyResult('uranus'),
		neptune: getBodyResult('neptune'),
		pluto: getBodyResult('pluto'),
		ascendant: getAscendantResult(),
	};

	const natal = {
		bodies: resultBodies,
		elements: calculateBodyElements(resultBodies),
	};

	return natal;
};

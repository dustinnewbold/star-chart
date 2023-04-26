import { Horoscope, Origin } from 'circular-natal-horoscope-js';
import { Input } from '../types/Input';

export const getHoroscope = ({ birthEvent, latitude, longitude }: Input) => {
    const year = birthEvent.getFullYear();
    const month = birthEvent.getMonth();
    const day = birthEvent.getDate();
    const hour = birthEvent.getHours();
    const minute = birthEvent.getMinutes();

    const origin = new Origin({
		year,
		month,
		date: day,
		hour,
		minute,
		latitude,
		longitude,
	});

	return new Horoscope({
		origin,
	});
};

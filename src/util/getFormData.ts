import { Input } from '../types/Input';

export const getFormData = (): Input => {
    const dobElement = document.getElementById('dob') as HTMLInputElement;
    const date = new Date(dobElement.value);

    return {
        birthEvent: date,
        latitude: 18.5791152,
        longitude: -72.3194794,
    };
};

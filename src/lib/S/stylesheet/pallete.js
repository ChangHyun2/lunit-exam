import { PALLETE } from '../values';

export const pallete = { ...PALLETE };

Object.keys(pallete).forEach((key) => (pallete[key] += ';'));

export default pallete;

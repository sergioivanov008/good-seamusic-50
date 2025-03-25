import { getRandomNumber } from '../get-random-number/getRandomNumber';

export function getRandomCode(numDigit: number) {
	if (numDigit <= 0) return 0;

	const min = Number('1' + new Array(numDigit - 1).fill(0).join(''));
	const max = Number(new Array(numDigit).fill(9).join(''));

	return getRandomNumber(min, max);
}

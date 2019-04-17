import {formatUnixDate, formatTemperature} from '../index';

describe('helper functions', () => {
	test('formatUnixDate', () => {
		expect(formatUnixDate(1550767124)).toBe('Thursday, Feb 21');
	});

	test('formatTemperature', () => {
		expect(formatTemperature(10)).toBe(10);
	});

	test('formatTemperature should round down', () => {
		expect(formatTemperature(10.3)).toBe(10);
	});
});

import { formatPhoneNumber } from '../index';

describe('formatPhoneNumber', () => {
  test('Format a 10-digit phone number correctly', () => {
    const input = '2198765432';
    const expectedOutput = '(21) 9876-5432';
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });

  test('Format an 11-digit phone number correctly', () => {
    const input = '21987654321';
    const expectedOutput = '(21) 98765-4321';
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });

  test('Truncate input to 11 digits', () => {
    const input = '219876543212345';
    const expectedOutput = '(21) 98765-4321';
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });

  test('Handle non-numeric characters by removing them', () => {
    const input = '(21) 98765-4321';
    const expectedOutput = '(21) 98765-4321';
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });

  test('Return an empty string for an empty input', () => {
    const input = '';
    const expectedOutput = '';
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });
});

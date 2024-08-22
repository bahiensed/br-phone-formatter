/**
 * Formats a phone number to the formats (XX) XXXXX-XXXX or (XX) XXXX-XXXX.
 * 
 * The function removes all non-numeric characters from the input, limits the input
 * to a maximum of 11 digits, and formats the number based on the length:
 * - (XX) XXXXX-XXXX for 11 digits
 * - (XX) XXXX-XXXX for 10 digits
 *
 * @param value - The phone number as a string of digits.
 * @returns The formatted phone number.
 */
export function formatPhoneNumber(value: string): string;

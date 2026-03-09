import { isValidEmail } from "./inputSanitizer.js";

/**
 * Validate signup form data.
 * @param {{ name: string, email: string, password: string, targetBand: number, examDate: string }} data
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateSignup(data) {
  const errors = {};
  if (!data.name || data.name.trim().length < 2)   errors.name = "Name must be at least 2 characters.";
  if (!isValidEmail(data.email))                   errors.email = "Please enter a valid email address.";
  if (!data.password || data.password.length < 8)  errors.password = "Password must be at least 8 characters.";
  if (!data.targetBand)                            errors.targetBand = "Please select a target band.";
  if (!data.examDate)                              errors.examDate = "Please enter your exam date.";
  return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Validate login form data.
 * @param {{ email: string, password: string }} data
 */
export function validateLogin(data) {
  const errors = {};
  if (!isValidEmail(data.email))       errors.email = "Please enter a valid email address.";
  if (!data.password || !data.password.length) errors.password = "Password is required.";
  return { valid: Object.keys(errors).length === 0, errors };
}

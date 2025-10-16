import { ERROR_MESSAGES } from "./errorMessage.js";

export function validateNegative (numbers) {
    if(numbers.some((n) => n < 0)) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }
}

export function validateInvalidCharacter (numbers) {
    if(numbers.some((n) => isNaN(n))){
        throw new Error(ERROR_MESSAGES.INVALID_CHARACTER);
    }
}
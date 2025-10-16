import { Console } from "@woowacourse/mission-utils";
import { CUSTOM_DELIMITER_PATTERN, DEFAULT_DELIMITER} from "./delimiterConfig.js";

export async function getInput () {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return INPUT;
}

export function parseCustomDelimiter (INPUT) {
    const nomalizedInput = INPUT.replace(/\\n/g, '\n');
    const match = nomalizedInput.match(CUSTOM_DELIMITER_PATTERN);
    const customDelimiter = match[1];
    const inputWithoutCustom = nomalizedInput.replace(CUSTOM_DELIMITER_PATTERN, '');
    
    return { customDelimiter, inputWithoutCustom };
}

export function splitByDelimiter (inputWithoutCustom, customDelimiter) {
    let delimiter = DEFAULT_DELIMITER.join('|');
    if(customDelimiter){
        delimiter =  delimiter + '|' + customDelimiter;
    }
    const delimiterRegex = new RegExp(delimiter);
    const tokens = inputWithoutCustom.split(delimiterRegex);
    const numbers = tokens.map(x=>Number(x));

    return numbers;
}
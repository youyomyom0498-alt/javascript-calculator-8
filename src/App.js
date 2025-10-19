import { Console } from "@woowacourse/mission-utils";
import { addNumbers, getInput, parseCustomDelimiter, splitByDelimiter } from "./utils/calculator.js";
import { handleError } from "./utils/errorHandler.js";
import { validateInvalidCharacter, validateNegative } from "./utils/validator.js";

class App {
  async run() {
    try{
      const INPUT = await getInput();
      const { customDelimiter, inputWithoutCustom } = parseCustomDelimiter(INPUT);
      const numbers = splitByDelimiter(inputWithoutCustom, customDelimiter);

      validateNegative(numbers);
      validateInvalidCharacter(numbers);
      
      const calculatedSum = addNumbers(numbers);
      Console.print(`결과 : ${calculatedSum}`);
    } catch (error){
      handleError(error);
    }
  } 
}

export default App;

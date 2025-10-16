import { Console } from "@woowacourse/mission-utils";
import { addNumbers, getInput, parseCustomDelimiter, splitByDelimiter } from "./utils/calculator.js";
import { handleError } from "./utils/errorHandler.js";

class App {
  async run() {
    try{
      const INPUT = await getInput();
      const { customDelimiter, inputWithoutCustom } = parseCustomDelimiter(INPUT);
      const numbers = splitByDelimiter(inputWithoutCustom, customDelimiter);
      const calculatedSum = addNumbers(numbers);
      Console.print(calculatedSum);
    } catch (error){
      handleError(error);
    }
  } 
}

export default App;

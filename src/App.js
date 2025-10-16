import { Console } from "@woowacourse/mission-utils";
import { addNumbers, getInput, parseCustomDelimiter, splitByDelimiter } from "./utils/calculator.js";

class App {
  async run() {
    const INPUT = await getInput();
    const { customDelimiter, inputWithoutCustom } = parseCustomDelimiter(INPUT);
    const numbers = splitByDelimiter(inputWithoutCustom, customDelimiter);
    const calculatedSum = addNumbers(numbers);
    Console.print(calculatedSum);
  }
}

export default App;

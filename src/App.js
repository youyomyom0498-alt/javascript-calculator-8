import { getInput, parseCustomDelimiter, splitByDelimiter } from "./utils/calculator.js";

class App {
  async run() {
    const INPUT = await getInput();
    const { customDelimiter, inputWithoutCustom } = parseCustomDelimiter(INPUT);
    const numbers = splitByDelimiter(inputWithoutCustom, customDelimiter);
  }
}

export default App;

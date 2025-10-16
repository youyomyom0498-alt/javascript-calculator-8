import { getInput, parseCustomDelimiter } from "./utils/calculator.js";

class App {
  async run() {
    const INPUT = await getInput();
    const { customDelimiter, inputWithoutCustom } = parseCustomDelimiter(INPUT);
  }
}

export default App;

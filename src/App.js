import { getInput } from "./utils/calculator.js";

class App {
  async run() {
    const INPUT = await getInput();
  }
}

export default App;

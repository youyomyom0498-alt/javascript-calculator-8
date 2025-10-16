import { Console } from "@woowacourse/mission-utils";

export function handleError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
    process.exit(1);
}
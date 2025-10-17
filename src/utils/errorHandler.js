import { Console } from "@woowacourse/mission-utils";

export function handleError(error) {
    Console.print(`[ERROR] ${error.message}`);
}
import { Console } from "@woowacourse/mission-utils";

export function handleError(error) {
    throw new Error(`[ERROR] ${error.message}`);
}
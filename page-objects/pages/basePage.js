import { Selector, t } from "testcafe";

class BasePage {
	/**
	 * Pauses execution for specified duration
	 * @param {Number} milliseconds Length of pause in milliseconds
	 */
	async waitFor(milliseconds) {
		await t.wait(milliseconds);
	}

	/**
	 * Adjust test execution speed multiplier
	 * @param {Number} speed 0.01 to 1.0
	 */
	async setTestSpeed(speed) {
		await t.setTestSpeed(speed);
	}
}

export default BasePage;

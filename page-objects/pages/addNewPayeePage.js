import { Selector, t } from "testcafe";
import BasePage from "./basePage";

class AddNewPayeePage extends BasePage {
	constructor() {
		super();
		this.newPayeeForm = Selector("form");
		this.payeeName = Selector("#np_new_payee_name");
		this.payeeAddress = Selector("#np_new_payee_address");
		this.payeeAccount = Selector("#np_new_payee_account");
		this.payeeDetails = Selector("#np_new_payee_details");
		this.submitButton = Selector("#add_new_payee");
		this.successMessage = Selector("#alert_content");
	}

	/**
	 * Enters new payee data and submits form
	 *
	 * @param {String} name Name field data
	 * @param {String} address Address field data
	 * @param {String} account Account field data
	 * @param {String} details Details feld data
	 * @param {Boolean} submit If true, submits form. Otherwise, will not submit
	 */
	async addNewPayee(name, address, account, details, submit) {
		if (name) {
			await t.typeText(this.payeeName, name, { paste: true, replace: true });
		}
		if (address) {
			await t.typeText(this.payeeAddress, address, {
				paste: true,
				replace: true,
			});
		}
		if (account) {
			await t.typeText(this.payeeAccount, account, {
				paste: true,
				replace: true,
			});
		}
		if (details) {
			await t.typeText(this.payeeDetails, details, {
				paste: true,
				replace: true,
			});
		}
		if (submit) {
			await t.click(this.submitButton);
		}
	}

	/**
	 * Clears the new payee form's fields
	 */
	async clearFormFields() {
		const fields = [
			this.payeeName,
			this.payeeAddress,
			this.payeeAccount,
			this.payeeDetails,
		];

		for (let field of fields) {
			await t.click(field).pressKey("ctrl+a delete");
		}
	}
}

export default AddNewPayeePage;

import { Selector, t } from "testcafe";
import BasePage from "./basePage";

class LoginPage extends BasePage {
	constructor() {
		super();
		this.loginForm = Selector("#login_form");
		this.usernameInput = Selector("#user_login");
		this.passwordInput = Selector("#user_password");
		this.submitButton = Selector(".btn-primary");
		this.errorMessage = Selector(".alert-error");
		this.forgottenPasswordLink = Selector("a").withText(
			"Forgot your password ?"
		);
	}

	/**
	 * Logs into the application with the provided username and password
	 *
	 * @param {String} username Username to log in with
	 * @param {String} password Password to log in with
	 */
	async loginToApp(username, password) {
		await t
			.typeText(this.usernameInput, username, {
				paste: true,
				replace: true,
			})
			.typeText(this.passwordInput, password, { paste: true, replace: true })
			.click(this.submitButton);
	}
}

export default LoginPage;

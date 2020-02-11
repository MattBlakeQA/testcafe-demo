import { Selector, t } from "testcafe";
import BasePage from "./basePage";

class ForgottenPasswordPage extends BasePage {
	constructor() {
		super();
		this.emailInput = Selector("#user_email");
		this.passwordSentMessage = Selector("div");
	}
}

export default ForgottenPasswordPage;

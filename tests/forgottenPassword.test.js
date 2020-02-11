import Navbar from "../page-objects/components/navbar";
import LoginPage from "../page-objects/pages/loginPage";
import ForgottenPasswordPage from "../page-objects/pages/forgottenPasswordPage";

const navbar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

// prettier-ignore
fixture `Send Forgot Password Email Tests`
  .page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be sent to them", async t => {
	await t.click(navbar.signInButton);
	await t.click(loginPage.forgottenPasswordLink);
	await t.typeText(
		forgottenPasswordPage.emailInput,
		"coolemail@doesnt.exist.com",
		{ paste: true, replace: true }
	);
	await t.pressKey("enter");

	await t
		.expect(forgottenPasswordPage.passwordSentMessage.innerText)
		.contains("coolemail@doesnt.exist.com");
	await t.expect(forgottenPasswordPage.emailInput.exists).notOk();
});

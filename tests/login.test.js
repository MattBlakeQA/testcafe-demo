import LoginPage from "../page-objects/pages/loginPage";
import Navbar from "../page-objects/components/navbar";
import AccountTabs from "../page-objects/components/accountTabs";

const navbar = new Navbar();
const loginPage = new LoginPage();
const accountTabs = new AccountTabs();

// prettier-ignore
fixture `Login Test`
  .page `http://zero.webappsecurity.com/index.html`
  .beforeEach(async t => {
	await t.click(navbar.signInButton);
  })

test("User cannot login with invalid username and password", async t => {
	await loginPage.loginToApp("invalid username", "invalid password");

	await t
		.expect(loginPage.errorMessage.innerText)
		.contains("Login and/or password are wrong.");
});

test("User can login with valid username and password", async t => {
	await loginPage.loginToApp("username", "password");

	await t.expect(accountTabs.accountSummaryTab.exists).ok();
	await t.expect(loginPage.loginForm.exists).notOk();
	await t.expect(navbar.userIcon.exists).ok();
});

test("User can log out", async t => {
	await loginPage.loginToApp("username", "password");
	await t.click(navbar.userIcon);
	await t.click(navbar.logoutButton);

	await t.expect(navbar.logoutButton.exists).notOk();
	await t.expect(navbar.signInButton.exists).ok();
});

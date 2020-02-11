import LoginPage from "../page-objects/pages/loginPage";
import AccountTabs from "../page-objects/components/accountTabs";
import PayBillsTabs from "../page-objects/components/payBillsTabs";
import AddNewPayeePage from "../page-objects/pages/addNewPayeePage";
import Navbar from "../page-objects/components/navbar";

const loginPage = new LoginPage();
const navbar = new Navbar();
const accountTabs = new AccountTabs();
const payBillsTabs = new PayBillsTabs();
const addNewPayeePage = new AddNewPayeePage();

// prettier-ignore
fixture `New Payee Test`
  .page `http://zero.webappsecurity.com/index.html`
  .beforeEach(async t => {
	await t.click(navbar.signInButton);
	await loginPage.loginToApp("username", "password");
	await t.click(accountTabs.payBillsTab);
	await t.click(payBillsTabs.addNewPayee);
})

test("User can add new payee to list of payees", async t => {
	await addNewPayeePage.addNewPayee(
		"Bob Johnson",
		"123 Fake Street, New York, New York 10003",
		"offshore",
		"No need for receipt.",
		true
	);

	await t
		.expect(addNewPayeePage.successMessage.innerText)
		.contains("The new payee Bob Johnson was successfully created.");
});

test("Submit with empty fields", async t => {
	const testData = [
		["", "", "", "", true],
		[
			"",
			"123 Fake Street, New York, New York 10003",
			"offshore",
			"No need for receipt.",
			true,
		],
		["Bob Johnson", "", "offshore", "No need for receipt.", true],
		[
			"Bob Johnson",
			"123 Fake Street, New York, New York 10003",
			"",
			"No need for receipt.",
			true,
		],
	];

	for (let data of testData) {
		await addNewPayeePage.addNewPayee(...data);
		await t.expect(addNewPayeePage.newPayeeForm).ok();
		await addNewPayeePage.clearFormFields();
	}
});

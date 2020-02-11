import { Selector, t } from "testcafe";

class AccountTabs {
	constructor() {
		this.accountSummaryTab = Selector("#account_summary_tab");
		this.accountActivityTab = Selector("#account_activity_tab");
		this.transferFundsTab = Selector("#transfer_funds_tab");
		this.payBillsTab = Selector("#pay_bills_tab");
		this.myMoneyMapTab = Selector("#money_map_tab");
		this.onlineStatementsTab = Selector("#online_statements_tab");
	}
}

export default AccountTabs;

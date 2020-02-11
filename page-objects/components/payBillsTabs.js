import { Selector, t } from "testcafe";

class PayBillsTabs {
	constructor() {
		this.paySavedPayee = Selector("a").withAttribute("href", "#ui-tabs-1");
		this.addNewPayee = Selector("a").withAttribute("href", "#ui-tabs-2");
		this.purchaseForeignCurrency = Selector("a").withAttribute(
			"href",
			"#ui-tabs-3"
		);
	}
}

export default PayBillsTabs;

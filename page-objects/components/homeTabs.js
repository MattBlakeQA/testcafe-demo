import { Selector, t } from "testcafe";

class HomeTabs {
	constructor() {
		this.homeTab = Selector("#homeMenu");
		this.onlineBankingTab = Selector("#onlineBankingMenu");
		this.feedbackTab = Selector("#feedback");
	}
}

export default HomeTabs;

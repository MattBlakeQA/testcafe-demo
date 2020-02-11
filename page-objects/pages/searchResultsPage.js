import { Selector, t } from "testcafe";
import BasePage from "./basePage";

class SearchResultsPage extends BasePage {
	constructor() {
		super();
		this.resultstitle = Selector("h2");
		this.linkText = Selector("li").find("a");
	}
}

export default SearchResultsPage;

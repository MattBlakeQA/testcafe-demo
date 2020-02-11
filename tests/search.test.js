import Navbar from "../page-objects/components/navbar";
import SearchResultsPage from "../page-objects/pages/searchResultsPage";

const navbar = new Navbar();
const searchResultsPage = new SearchResultsPage();

// prettier-ignore
fixture `Search Bar Test`
  .page `http://zero.webappsecurity.com/index.html`

test("Search for keyword returns relevant results", async t => {
	await navbar.search("online bank");

	await t.expect(searchResultsPage.resultstitle.exists).ok();
	await t.expect(navbar.searchBox.exists).ok();
	await t
		.expect(searchResultsPage.linkText.innerText)
		.contains("Zero - Free Access to Online Banking");
});

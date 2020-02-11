import { Selector } from "testcafe";
import FeedbackPage from "../page-objects/pages/feedbackPage";
import HomeTabs from "../page-objects/components/homeTabs";

const feedbackPage = new FeedbackPage();
const homeTabs = new HomeTabs();

// prettier-ignore
fixture `Feedback Form Tests`
  .page `http://zero.webappsecurity.com/index.html`
  .beforeEach(async t => {
	await t.click(homeTabs.feedbackTab);
  })

test("Submit valid feedback", async t => {
	await feedbackPage.submitFeedbackForm(
		"Bob",
		"bob@fake.email.com",
		"Question",
		"I have a question about something.",
		true
	);

	await t
		.expect(feedbackPage.feedbackSubmittedMessage.innerText)
		.contains("Thank you for your comments, Bob");
});

test("Clear feedback form", async t => {
	await feedbackPage.submitFeedbackForm(
		"Bob",
		"bob@fake.email.com",
		"Question",
		"I have a question about something.",
		false
	);

	await t.click(feedbackPage.feedbackClearFormButton);

	await t.expect(feedbackPage.feedbackName.innerText).eql("");
	await t.expect(feedbackPage.feedbackEmail.innerText).eql("");
	await t.expect(feedbackPage.feedbackSubject.innerText).eql("");
	await t.expect(feedbackPage.feedbackComment.innerText).eql("");
});

test("Submit with empty fields", async t => {
	const testData = [
		["", "", "", "", true],
		[
			"",
			"bob@fake.email.com",
			"Question",
			"I have a question about something.",
			true,
		],
		["Bob", "", "Question", "I have a question about something.", true],
		[
			"Bob",
			"bob@fake.email.com",
			"",
			"I have a question about something.",
			true,
		],
		["Bob", "bob@fake.email.com", "Question", "", true],
	];

	for (let data of testData) {
		await feedbackPage.submitFeedbackForm(...data);
		await t.expect(feedbackPage.feedbackForm.exists).ok();
		await t.click(feedbackPage.feedbackClearFormButton);
	}
});

import { Selector, t } from "testcafe";
import BasePage from "./basePage";

class FeedbackPage extends BasePage {
	constructor() {
		super();
		this.feedbackForm = Selector("form");
		this.feedbackTab = Selector("#feedback");
		this.feedbackName = Selector("#name");
		this.feedbackEmail = Selector("#email");
		this.feedbackSubject = Selector("#subject");
		this.feedbackComment = Selector("#comment");
		this.feedbackSubmitButton = Selector("input").withAttribute(
			"name",
			"submit"
		);
		this.feedbackClearFormButton = Selector("input").withAttribute(
			"name",
			"clear"
		);
		this.feedbackSubmittedMessage = Selector("div");
	}

	/**
	 * Enters feedback form data and submits form
	 *
	 * @param {String} name Name field data
	 * @param {String} email Email field data
	 * @param {String} subject Subject field data
	 * @param {String} comment Comment field data
	 * @param {Boolean} submit If true, submits form. Otherwise, will not submit
	 */
	async submitFeedbackForm(name, email, subject, comment, submit) {
		if (name) {
			await t.typeText(this.feedbackName, name, { paste: true, replace: true });
		}
		if (email) {
			await t.typeText(this.feedbackEmail, email, {
				paste: true,
				replace: true,
			});
		}
		if (subject) {
			await t.typeText(this.feedbackSubject, subject, {
				paste: true,
				replace: true,
			});
		}
		if (comment) {
			await t.typeText(this.feedbackComment, comment, {
				paste: true,
				replace: true,
			});
		}
		if (submit) {
			await t.click(this.feedbackSubmitButton);
		}
	}

	/**
	 * Clears the feedback form's fields
	 */
	async clearFeedbackForm() {
		await t.click(this.clearFeedbackForm);
	}
}

export default FeedbackPage;

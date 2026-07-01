import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/send-email-DuHEsngJ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var resend = new Resend(process.env.RESEND_API_KEY);
var sendEmail_createServerFn_handler = createServerRpc({
	id: "8a81c8cf5b42026ee0eedaaec5fe44e869252b0a92af1aea2a8bf8b4f7faf35e",
	name: "sendEmail",
	filename: "src/lib/send-email.ts"
}, (opts) => sendEmail.__executeServer(opts));
var sendEmail = createServerFn({ method: "POST" }).validator((data) => data).handler(sendEmail_createServerFn_handler, async ({ data }) => {
	try {
		await resend.emails.send({
			from: "Havilah <onboarding@resend.dev>",
			to: ["robinson30122000@gmail.com"],
			replyTo: data.email,
			subject: `New Contact Form - ${data.name}`,
			html: `
          <h2>New Project Inquiry</h2>
          <p><b>Name:</b> ${data.name}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Company:</b> ${data.company}</p>
          <p><b>Service:</b> ${data.service}</p>
          <p><b>Budget:</b> ${data.budget}</p>
          <p><b>Date:</b> ${data.date}</p>
          <hr>
          <p>${data.message}</p>
        `
		});
		return { success: true };
	} catch (error) {
		console.error(error);
		throw new Error("Failed to send email");
	}
});
//#endregion
export { sendEmail_createServerFn_handler };

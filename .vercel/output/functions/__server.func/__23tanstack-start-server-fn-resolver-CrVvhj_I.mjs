//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CrVvhj_I.js
var manifest = { "8a81c8cf5b42026ee0eedaaec5fe44e869252b0a92af1aea2a8bf8b4f7faf35e": {
	functionName: "sendEmail_createServerFn_handler",
	importer: () => import("./_ssr/send-email-DuHEsngJ.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };

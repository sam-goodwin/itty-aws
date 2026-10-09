import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { RETRYABLE_HTTP_STATUSES } from "./errors.js";
import * as Duration from "effect/Duration";

//#region lib/retry-after.js
var retry_after_exports = /* @__PURE__ */ __exportAll({
	parseRatelimit: () => parseRatelimit,
	parseRetryAfter: () => parseRetryAfter,
	parseRetryAfterForStatus: () => parseRetryAfterForStatus,
	parseServerRetryHint: () => parseServerRetryHint
});
const parseRetryAfter = (headers) => {
	const raw = headers?.["retry-after"];
	if (!raw) return void 0;
	const trimmed = raw.trim();
	if (trimmed.length === 0) return void 0;
	if (/^\d+$/.test(trimmed)) {
		const seconds = Number(trimmed);
		if (Number.isFinite(seconds) && seconds >= 0) return Duration.seconds(seconds);
	}
	if (/^[-+]?\d+(?:\.\d+)?$/.test(trimmed)) return void 0;
	const ts = Date.parse(trimmed);
	if (!Number.isNaN(ts)) {
		const ms = Math.max(0, ts - Date.now());
		return Duration.millis(ms);
	}
};
const parseRatelimit = (headers) => {
	const raw = headers?.["ratelimit"];
	if (!raw) return void 0;
	let remaining;
	let reset;
	for (const piece of raw.split(/[,;]/)) {
		const eq = piece.indexOf("=");
		if (eq < 0) continue;
		const key = piece.slice(0, eq).trim().toLowerCase();
		const value = piece.slice(eq + 1).trim();
		const num = Number(value);
		if (!Number.isFinite(num)) continue;
		if (key === "r" || key === "remaining") remaining = num;
		else if (key === "t" || key === "reset") reset = num;
	}
	if (remaining !== 0) return void 0;
	if (reset === void 0 || reset < 0) return void 0;
	return Duration.seconds(reset);
};
const parseServerRetryHint = (headers) => parseRetryAfter(headers) ?? parseRatelimit(headers);
const parseRetryAfterForStatus = (status, headers) => {
	if (!RETRYABLE_HTTP_STATUSES.has(status)) return void 0;
	return parseServerRetryHint(headers);
};

//#endregion
export { parseRatelimit, parseRetryAfter, parseRetryAfterForStatus, parseServerRetryHint, retry_after_exports as t };
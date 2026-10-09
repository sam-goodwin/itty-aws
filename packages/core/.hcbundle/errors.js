import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { withAuthError, withBadRequestError, withConfigurationError, withConflictError, withLockedError, withNotFoundError, withRetryable, withServerError, withThrottlingError } from "./category.js";
import { Number, String, TaggedError, declare, optional } from "./schema-lite.js";
import * as Duration from "effect/Duration";

//#region lib/errors.js
var errors_exports = /* @__PURE__ */ __exportAll({
	API_ERRORS: () => API_ERRORS,
	BadGateway: () => BadGateway,
	BadRequest: () => BadRequest,
	ConfigError: () => ConfigError,
	Conflict: () => Conflict,
	DEFAULT_ERRORS: () => DEFAULT_ERRORS,
	DEFAULT_ERROR_STATUSES: () => DEFAULT_ERROR_STATUSES,
	DurationSchema: () => DurationSchema,
	Forbidden: () => Forbidden,
	GatewayTimeout: () => GatewayTimeout,
	HTTP_STATUS_MAP: () => HTTP_STATUS_MAP,
	InternalServerError: () => InternalServerError,
	Locked: () => Locked,
	NotFound: () => NotFound,
	RETRYABLE: () => RETRYABLE,
	RETRYABLE_HTTP_STATUSES: () => RETRYABLE_HTTP_STATUSES,
	ServiceUnavailable: () => ServiceUnavailable,
	TooManyRequests: () => TooManyRequests,
	Unauthorized: () => Unauthorized,
	UnprocessableEntity: () => UnprocessableEntity
});
const DurationSchema = /*@__PURE__*/ declare(Duration.isDuration);
var Unauthorized = class extends TaggedError()("Unauthorized", { message: String }).pipe(withAuthError) {};
var Forbidden = class extends TaggedError()("Forbidden", { message: String }).pipe(withAuthError) {};
var NotFound = class extends TaggedError()("NotFound", { message: String }).pipe(withNotFoundError) {};
var BadRequest = class extends TaggedError()("BadRequest", { message: String }).pipe(withBadRequestError) {};
var Conflict = class extends TaggedError()("Conflict", { message: String }).pipe(withConflictError) {};
var UnprocessableEntity = class extends TaggedError()("UnprocessableEntity", { message: String }).pipe(withBadRequestError) {};
var TooManyRequests = class extends TaggedError()("TooManyRequests", {
	message: String,
	retryAfter: /*@__PURE__*/ optional(DurationSchema)
}).pipe(withThrottlingError, /*@__PURE__*/ withRetryable({ throttling: true })) {};
var Locked = class extends TaggedError()("Locked", {
	message: String,
	retryAfter: /*@__PURE__*/ optional(DurationSchema)
}).pipe(withLockedError, /*@__PURE__*/ withRetryable()) {};
var InternalServerError = class extends TaggedError()("InternalServerError", {
	message: String,
	code: /*@__PURE__*/ optional(Number),
	retryAfter: /*@__PURE__*/ optional(DurationSchema)
}).pipe(withServerError, /*@__PURE__*/ withRetryable()) {};
var BadGateway = class extends TaggedError()("BadGateway", {
	message: String,
	retryAfter: /*@__PURE__*/ optional(DurationSchema)
}).pipe(withServerError, /*@__PURE__*/ withRetryable()) {};
var ServiceUnavailable = class extends TaggedError()("ServiceUnavailable", {
	message: String,
	retryAfter: /*@__PURE__*/ optional(DurationSchema)
}).pipe(withServerError, /*@__PURE__*/ withRetryable()) {};
var GatewayTimeout = class extends TaggedError()("GatewayTimeout", {
	message: String,
	retryAfter: /*@__PURE__*/ optional(DurationSchema)
}).pipe(withServerError, /*@__PURE__*/ withRetryable()) {};
var ConfigError = class extends TaggedError()("ConfigError", { message: String }).pipe(withConfigurationError) {};
const HTTP_STATUS_MAP = {
	400: BadRequest,
	401: Unauthorized,
	403: Forbidden,
	404: NotFound,
	408: GatewayTimeout,
	409: Conflict,
	422: UnprocessableEntity,
	423: Locked,
	429: TooManyRequests,
	500: InternalServerError,
	502: BadGateway,
	503: ServiceUnavailable,
	504: GatewayTimeout
};
const DEFAULT_ERROR_STATUSES = /*@__PURE__*/ new Set([
	401,
	429,
	500,
	502,
	503,
	504
]);
const RETRYABLE_HTTP_STATUSES = /*@__PURE__*/ new Set([
	408,
	423,
	429,
	500,
	502,
	503,
	504
]);
const API_ERRORS = [
	Unauthorized,
	Forbidden,
	NotFound,
	BadRequest,
	Conflict,
	UnprocessableEntity,
	TooManyRequests,
	Locked,
	InternalServerError,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout
];
const DEFAULT_ERRORS = [
	Unauthorized,
	TooManyRequests,
	InternalServerError,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout
];
const RETRYABLE = "@distilled/errors/retryable";

//#endregion
export { API_ERRORS, BadGateway, BadRequest, ConfigError, Conflict, DEFAULT_ERRORS, DEFAULT_ERROR_STATUSES, DurationSchema, Forbidden, GatewayTimeout, HTTP_STATUS_MAP, InternalServerError, Locked, NotFound, RETRYABLE, RETRYABLE_HTTP_STATUSES, ServiceUnavailable, TooManyRequests, Unauthorized, UnprocessableEntity, errors_exports as t };
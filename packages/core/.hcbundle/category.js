import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import * as Effect from "effect/Effect";
import * as HttpClientError from "effect/http/HttpClientError";
import * as Predicate from "effect/Predicate";

//#region lib/category.js
var category_exports = /* @__PURE__ */ __exportAll({
	AbortedError: () => AbortedError,
	AlreadyExistsError: () => AlreadyExistsError,
	AuthError: () => AuthError,
	BadRequestError: () => BadRequestError,
	ConfigurationError: () => ConfigurationError,
	ConflictError: () => ConflictError,
	DependencyViolationError: () => DependencyViolationError,
	LockedError: () => LockedError,
	NetworkError: () => NetworkError,
	NotFoundError: () => NotFoundError,
	ParseError: () => ParseError,
	QuotaError: () => QuotaError,
	RetryableError: () => RetryableError,
	ServerError: () => ServerError,
	ThrottlingError: () => ThrottlingError,
	TimeoutError: () => TimeoutError,
	catch: () => catchErrors,
	catchAbortedError: () => catchAbortedError,
	catchAlreadyExistsError: () => catchAlreadyExistsError,
	catchAuthError: () => catchAuthError,
	catchBadRequestError: () => catchBadRequestError,
	catchCategory: () => catchCategory,
	catchConfigurationError: () => catchConfigurationError,
	catchConflictError: () => catchConflictError,
	catchDependencyViolationError: () => catchDependencyViolationError,
	catchErrors: () => catchErrors,
	catchLockedError: () => catchLockedError,
	catchNetworkError: () => catchNetworkError,
	catchNotFoundError: () => catchNotFoundError,
	catchParseError: () => catchParseError,
	catchQuotaError: () => catchQuotaError,
	catchRetryableError: () => catchRetryableError,
	catchServerError: () => catchServerError,
	catchThrottlingError: () => catchThrottlingError,
	catchTimeoutError: () => catchTimeoutError,
	categoriesKey: () => categoriesKey,
	hasCategory: () => hasCategory,
	isAbortedError: () => isAbortedError,
	isAlreadyExistsError: () => isAlreadyExistsError,
	isAuthError: () => isAuthError,
	isBadRequestError: () => isBadRequestError,
	isConfigurationError: () => isConfigurationError,
	isConflictError: () => isConflictError,
	isDependencyViolationError: () => isDependencyViolationError,
	isLockedError: () => isLockedError,
	isNetworkError: () => isNetworkError,
	isNotFoundError: () => isNotFoundError,
	isParseError: () => isParseError,
	isQuotaError: () => isQuotaError,
	isRetryable: () => isRetryable,
	isRetryableError: () => isRetryableError,
	isServerError: () => isServerError,
	isThrottling: () => isThrottling,
	isThrottlingError: () => isThrottlingError,
	isTimeoutError: () => isTimeoutError,
	isTransientError: () => isTransientError,
	retryableKey: () => retryableKey,
	withAbortedError: () => withAbortedError,
	withAlreadyExistsError: () => withAlreadyExistsError,
	withAuthError: () => withAuthError,
	withBadRequestError: () => withBadRequestError,
	withCategory: () => withCategory,
	withConfigurationError: () => withConfigurationError,
	withConflictError: () => withConflictError,
	withDependencyViolationError: () => withDependencyViolationError,
	withLockedError: () => withLockedError,
	withNetworkError: () => withNetworkError,
	withNotFoundError: () => withNotFoundError,
	withParseError: () => withParseError,
	withQuotaError: () => withQuotaError,
	withRetryable: () => withRetryable,
	withRetryableError: () => withRetryableError,
	withServerError: () => withServerError,
	withThrottlingError: () => withThrottlingError,
	withTimeoutError: () => withTimeoutError
});
const AuthError = "AuthError";
const BadRequestError = "BadRequestError";
const ConflictError = "ConflictError";
const NotFoundError = "NotFoundError";
const QuotaError = "QuotaError";
const ServerError = "ServerError";
const ThrottlingError = "ThrottlingError";
const NetworkError = "NetworkError";
const ParseError = "ParseError";
const ConfigurationError = "ConfigurationError";
const TimeoutError = "TimeoutError";
const RetryableError = "RetryableError";
const LockedError = "LockedError";
const AbortedError = "AbortedError";
const AlreadyExistsError = "AlreadyExistsError";
const DependencyViolationError = "DependencyViolationError";
const categoriesKey = "@distilled.cloud/error/categories";
const retryableKey = "@distilled.cloud/error/retryable";
const withCategory = (...categories) => (C) => {
	for (const category of categories) {
		if (!("@distilled.cloud/error/categories" in C.prototype)) C.prototype[categoriesKey] = {};
		C.prototype[categoriesKey][category] = true;
	}
	return C;
};
const withRetryable = (info = {}) => (C) => {
	C.prototype[retryableKey] = info;
	return C;
};
const withAuthError = /*@__PURE__*/ withCategory(AuthError);
const withBadRequestError = /*@__PURE__*/ withCategory(BadRequestError);
const withConflictError = /*@__PURE__*/ withCategory(ConflictError);
const withNotFoundError = /*@__PURE__*/ withCategory(NotFoundError);
const withQuotaError = /*@__PURE__*/ withCategory(QuotaError);
const withServerError = /*@__PURE__*/ withCategory(ServerError);
const withThrottlingError = /*@__PURE__*/ withCategory(ThrottlingError);
const withNetworkError = /*@__PURE__*/ withCategory(NetworkError);
const withParseError = /*@__PURE__*/ withCategory(ParseError);
const withConfigurationError = /*@__PURE__*/ withCategory(ConfigurationError);
const withTimeoutError = /*@__PURE__*/ withCategory(TimeoutError);
const withRetryableError = /*@__PURE__*/ withCategory(RetryableError);
const withLockedError = /*@__PURE__*/ withCategory(LockedError);
const withAbortedError = /*@__PURE__*/ withCategory(AbortedError);
const withAlreadyExistsError = /*@__PURE__*/ withCategory(AlreadyExistsError);
const withDependencyViolationError = /*@__PURE__*/ withCategory(DependencyViolationError);
const hasCategory = (error, category) => {
	if (Predicate.isObject(error) && Predicate.hasProperty("@distilled.cloud/error/categories")(error)) return category in error[categoriesKey];
	return false;
};
const isAuthError = (error) => hasCategory(error, AuthError);
const isBadRequestError = (error) => hasCategory(error, BadRequestError);
const isConflictError = (error) => hasCategory(error, ConflictError);
const isNotFoundError = (error) => hasCategory(error, NotFoundError);
const isQuotaError = (error) => hasCategory(error, QuotaError);
const isServerError = (error) => hasCategory(error, ServerError);
const isThrottlingError = (error) => hasCategory(error, ThrottlingError);
const isNetworkError = (error) => hasCategory(error, NetworkError);
const isParseError = (error) => hasCategory(error, ParseError);
const isConfigurationError = (error) => hasCategory(error, ConfigurationError);
const isTimeoutError = (error) => hasCategory(error, TimeoutError);
const isRetryableError = (error) => hasCategory(error, RetryableError);
const isLockedError = (error) => hasCategory(error, LockedError);
const isAbortedError = (error) => hasCategory(error, AbortedError);
const isAlreadyExistsError = (error) => hasCategory(error, AlreadyExistsError);
const isDependencyViolationError = (error) => hasCategory(error, DependencyViolationError);
const isRetryable = (error) => {
	if (Predicate.isObject(error) && Predicate.hasProperty("@distilled.cloud/error/retryable")(error)) return true;
	return false;
};
const isThrottling = (error) => {
	if (Predicate.isObject(error) && Predicate.hasProperty("@distilled.cloud/error/retryable")(error)) return error[retryableKey]?.throttling === true;
	return hasCategory(error, ThrottlingError);
};
const isHttpTransportError = (error) => HttpClientError.isHttpClientError(error) && error.reason._tag === "TransportError";
const isTransientError = (error) => {
	if (isRetryable(error)) return true;
	return hasCategory(error, "RetryableError") || hasCategory(error, "ThrottlingError") || hasCategory(error, "ServerError") || hasCategory(error, "NetworkError") || hasCategory(error, "TimeoutError") || hasCategory(error, "LockedError") || isHttpTransportError(error);
};
const makeCatcher = (category) => (f) => (effect) => Effect.catchIf(effect, (e) => hasCategory(e, category), f);
const catchErrors = (...args) => (effect) => {
	const handler = args.pop();
	const categories = args;
	return Effect.catchIf(effect, (e) => categories.some((cat) => hasCategory(e, cat)), handler);
};
const catchAuthError = /*@__PURE__*/ makeCatcher(AuthError);
const catchBadRequestError = /*@__PURE__*/ makeCatcher(BadRequestError);
const catchConflictError = /*@__PURE__*/ makeCatcher(ConflictError);
const catchNotFoundError = /*@__PURE__*/ makeCatcher(NotFoundError);
const catchQuotaError = /*@__PURE__*/ makeCatcher(QuotaError);
const catchServerError = /*@__PURE__*/ makeCatcher(ServerError);
const catchThrottlingError = /*@__PURE__*/ makeCatcher(ThrottlingError);
const catchNetworkError = /*@__PURE__*/ makeCatcher(NetworkError);
const catchParseError = /*@__PURE__*/ makeCatcher(ParseError);
const catchConfigurationError = /*@__PURE__*/ makeCatcher(ConfigurationError);
const catchTimeoutError = /*@__PURE__*/ makeCatcher(TimeoutError);
const catchRetryableError = /*@__PURE__*/ makeCatcher(RetryableError);
const catchLockedError = /*@__PURE__*/ makeCatcher(LockedError);
const catchAbortedError = /*@__PURE__*/ makeCatcher(AbortedError);
const catchAlreadyExistsError = /*@__PURE__*/ makeCatcher(AlreadyExistsError);
const catchDependencyViolationError = /*@__PURE__*/ makeCatcher(DependencyViolationError);
const catchCategory = (...args) => (effect) => {
	const f = args.pop();
	const categories = args;
	return Effect.catchIf(effect, (e) => {
		if (Predicate.isObject(e) && Predicate.hasProperty("@distilled.cloud/error/categories")(e)) {
			for (const cat of categories) if (cat in e["@distilled.cloud/error/categories"]) return true;
		}
		return false;
	}, (e) => f(e));
};

//#endregion
export { AbortedError, AlreadyExistsError, AuthError, BadRequestError, ConfigurationError, ConflictError, DependencyViolationError, LockedError, NetworkError, NotFoundError, ParseError, QuotaError, RetryableError, ServerError, ThrottlingError, TimeoutError, catchErrors as catch, catchErrors, catchAbortedError, catchAlreadyExistsError, catchAuthError, catchBadRequestError, catchCategory, catchConfigurationError, catchConflictError, catchDependencyViolationError, catchLockedError, catchNetworkError, catchNotFoundError, catchParseError, catchQuotaError, catchRetryableError, catchServerError, catchThrottlingError, catchTimeoutError, categoriesKey, hasCategory, isAbortedError, isAlreadyExistsError, isAuthError, isBadRequestError, isConfigurationError, isConflictError, isDependencyViolationError, isLockedError, isNetworkError, isNotFoundError, isParseError, isQuotaError, isRetryable, isRetryableError, isServerError, isThrottling, isThrottlingError, isTimeoutError, isTransientError, retryableKey, category_exports as t, withAbortedError, withAlreadyExistsError, withAuthError, withBadRequestError, withCategory, withConfigurationError, withConflictError, withDependencyViolationError, withLockedError, withNetworkError, withNotFoundError, withParseError, withQuotaError, withRetryable, withRetryableError, withServerError, withThrottlingError, withTimeoutError };
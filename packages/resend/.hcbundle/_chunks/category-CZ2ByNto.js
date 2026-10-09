import * as Effect from "effect/Effect";
import * as HttpClientError from "effect/http/HttpClientError";
import * as Predicate from "effect/Predicate";

//#region lib/category.js
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
const withCategory =
  (...categories) =>
  (C) => {
    for (const category of categories) {
      if (!("@distilled.cloud/error/categories" in C.prototype)) C.prototype[categoriesKey] = {};
      C.prototype[categoriesKey][category] = true;
    }
    return C;
  };
const withRetryable =
  (info = {}) =>
  (C) => {
    C.prototype[retryableKey] = info;
    return C;
  };
const withAuthError = withCategory(AuthError);
const withBadRequestError = withCategory(BadRequestError);
const withConflictError = withCategory(ConflictError);
const withNotFoundError = withCategory(NotFoundError);
const withQuotaError = withCategory(QuotaError);
const withServerError = withCategory(ServerError);
const withThrottlingError = withCategory(ThrottlingError);
const withNetworkError = withCategory(NetworkError);
const withParseError = withCategory(ParseError);
const withConfigurationError = withCategory(ConfigurationError);
const withTimeoutError = withCategory(TimeoutError);
const withRetryableError = withCategory(RetryableError);
const withLockedError = withCategory(LockedError);
const withAbortedError = withCategory(AbortedError);
const withAlreadyExistsError = withCategory(AlreadyExistsError);
const withDependencyViolationError = withCategory(DependencyViolationError);
const hasCategory = (error, category) => {
  if (
    Predicate.isObject(error) &&
    Predicate.hasProperty("@distilled.cloud/error/categories")(error)
  )
    return category in error[categoriesKey];
  return false;
};
const isRetryable = (error) => {
  if (Predicate.isObject(error) && Predicate.hasProperty("@distilled.cloud/error/retryable")(error))
    return true;
  return false;
};
const isThrottling = (error) => {
  if (Predicate.isObject(error) && Predicate.hasProperty("@distilled.cloud/error/retryable")(error))
    return error[retryableKey]?.throttling === true;
  return hasCategory(error, ThrottlingError);
};
const isHttpTransportError = (error) =>
  HttpClientError.isHttpClientError(error) && error.reason._tag === "TransportError";
const isTransientError = (error) => {
  if (isRetryable(error)) return true;
  return (
    hasCategory(error, "RetryableError") ||
    hasCategory(error, "ThrottlingError") ||
    hasCategory(error, "ServerError") ||
    hasCategory(error, "NetworkError") ||
    hasCategory(error, "TimeoutError") ||
    hasCategory(error, "LockedError") ||
    isHttpTransportError(error)
  );
};
const makeCatcher = (category) => (f) => (effect) =>
  Effect.catchIf(effect, (e) => hasCategory(e, category), f);
const catchAuthError = makeCatcher(AuthError);
const catchBadRequestError = makeCatcher(BadRequestError);
const catchConflictError = makeCatcher(ConflictError);
const catchNotFoundError = makeCatcher(NotFoundError);
const catchQuotaError = makeCatcher(QuotaError);
const catchServerError = makeCatcher(ServerError);
const catchThrottlingError = makeCatcher(ThrottlingError);
const catchNetworkError = makeCatcher(NetworkError);
const catchParseError = makeCatcher(ParseError);
const catchConfigurationError = makeCatcher(ConfigurationError);
const catchTimeoutError = makeCatcher(TimeoutError);
const catchRetryableError = makeCatcher(RetryableError);
const catchLockedError = makeCatcher(LockedError);
const catchAbortedError = makeCatcher(AbortedError);
const catchAlreadyExistsError = makeCatcher(AlreadyExistsError);
const catchDependencyViolationError = makeCatcher(DependencyViolationError);

//#endregion
export {
  withConfigurationError as a,
  withNotFoundError as c,
  withServerError as d,
  withThrottlingError as f,
  withBadRequestError as i,
  withParseError as l,
  isTransientError as n,
  withConflictError as o,
  withAuthError as r,
  withLockedError as s,
  isThrottling as t,
  withRetryable as u,
};

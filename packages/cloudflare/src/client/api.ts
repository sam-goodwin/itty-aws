/**
 * Cloudflare API operations factory.
 *
 * This module is imported as `import * as API from "../client/api.ts"` by
 * generated service files so that `API.make()`, `API.OperationMethod`, etc.
 * are all accessible as namespace members.
 */
import { retryableKey } from "@distilled.cloud/core/category";
import {
  makeAPI,
  type ApiErrorClass,
  type OperationMethod,
  type PaginatedOperationMethod,
} from "@distilled.cloud/core/client";
import {
  paginateCursor,
  paginateSingle,
  paginateWithDefaults,
  type PaginationStrategy,
} from "@distilled.cloud/core/pagination";
import {
  parseRetryAfterForStatus,
  parseServerRetryHint,
} from "@distilled.cloud/core/retry-after";
import { getPath, type RequestParts } from "@distilled.cloud/core/traits";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import * as Stream from "effect/Stream";
import { Credentials, formatHeaders } from "../credentials.ts";
import {
  CloudflareHttpError,
  Forbidden,
  GatewayTimeout,
  HTTP_STATUS_MAP,
  InternalServerError,
  InvalidRoute,
  TooManyRequests,
  Unauthorized,
  UnknownCloudflareError,
} from "../errors.ts";
import { Retry } from "../retry.ts";
import { getErrorMatchers, type ErrorMatcher } from "../traits.ts";

// ============================================================================
// Global Cloudflare error codes
// ============================================================================

/**
 * Tag an error instance as retryable. Cloudflare reuses code 10001 for
 * both a permanent permission failure ("Method not allowed for token")
 * and a transient internal hiccup ("internal error"). Marking the
 * specific instance — not the whole class — keeps legitimate
 * permission failures non-retryable while letting the blanket retry
 * policy ride out the transient case.
 */
const tagRetryable = <E>(error: E): E => {
  (error as Record<string, unknown>)[retryableKey] = {};
  return error;
};

const GLOBAL_RATE_LIMIT_MESSAGE =
  /\b(rate ?limit(ed|ing)?|throttl(ed|ing) your request)\b/i;

/**
 * Cloudflare error codes that map to global/default errors regardless of operation.
 * These are infrastructure-level errors that can occur on any endpoint.
 */
const GLOBAL_ERROR_CODE_MAP: Record<
  number,
  (message: string, headers?: Record<string, string | undefined>) => unknown
> = {
  // "Please wait and consider throttling your request speed"
  // Cloudflare returns this code inside an envelope with arbitrary HTTP status
  // (often 200), so we don't gate on status — TooManyRequests always declares
  // `retryAfter`.
  971: (message, headers) =>
    new TooManyRequests({
      message,
      retryAfter: parseServerRetryHint(headers),
    }),
  // Authentication-related error codes — surfaced regardless of HTTP status
  // (Cloudflare frequently returns these inside a 400 envelope rather than 401).
  // 6003: Invalid request headers (e.g. missing/invalid auth headers)
  6003: (message) => new Unauthorized({ message }),
  // 9103: Unknown X-Auth-Key
  9103: (message) => new Unauthorized({ message }),
  // 9106: X-Auth-Key header missing
  9106: (message) => new Unauthorized({ message }),
  // 9109: Unauthorized to access requested resource / Max auth failures reached
  9109: (message) => new Unauthorized({ message }),
  // 10000: Authentication error / Authentication failed.
  // Deliberately NOT tagged retryable: Cloudflare uses the same message
  // for both transient auth-edge blips and a genuinely invalid token,
  // so there is no message we can match on to discriminate. Auto-retrying
  // would silently loop on real auth failures, making them slower to
  // surface without fixing anything. If callers want to retry these
  // anyway, they can override the retry predicate.
  10000: (message) => new Unauthorized({ message }),
  // 10001: dual-use code. The permanent-failure variant has message
  // "Method not allowed for token" (legitimate permission denial); the
  // transient variant has message "internal error" (CF infrastructure
  // hiccup mistagged as 403). Those two messages are unambiguously
  // distinct, so we can safely tag only the transient variant retryable.
  10001: (message) => {
    const error = new Forbidden({ message });
    return /internal error/i.test(message) ? tagRetryable(error) : error;
  },
  // 7003: "Invalid request: invalid route. Make sure you've checked the URL
  // and method." Cloudflare returns this when a path component (typically
  // accountId or zoneId) doesn't resolve to a real resource. Surfacing it
  // globally keeps tests for unknown-resource cases off UnknownCloudflareError.
  7003: (message) => new InvalidRoute({ code: 7003, message }),
  // 1000: dual-use code. Cloudflare uses it for several unrelated conditions,
  // but the "Request timeout" variant is unambiguous from the message and is
  // a transient, retryable failure. Map only that variant to GatewayTimeout
  // (retryable + server error); fall back to UnknownCloudflareError for
  // anything else carried under code 1000 to preserve existing behavior.
  1000: (message) =>
    /\btimeout\b/i.test(message)
      ? new GatewayTimeout({ message })
      : new UnknownCloudflareError({ code: 1000, message }),
};

/**
 * Create an appropriate error for an HTTP status code.
 *
 * For status codes in HTTP_STATUS_MAP (400, 401, 500, 502, 503, 504, etc.),
 * returns the properly categorized error (with retry categories for 5xx).
 * For unmapped 5xx codes (e.g., Cloudflare-specific 520-530), returns a
 * CloudflareHttpError so the status is preserved.
 *
 * Retryable errors carry an optional `retryAfter` parsed from the standard
 * `Retry-After` / `RateLimit` response headers; the retry policy honors it.
 */
function httpStatusError(
  status: number,
  body?: string,
  headers?: Record<string, string | undefined>,
): unknown {
  const ErrorClass = HTTP_STATUS_MAP[status as keyof typeof HTTP_STATUS_MAP];
  const message = body ?? String(status);
  if (ErrorClass) {
    return new ErrorClass({
      message,
      retryAfter: parseRetryAfterForStatus(status, headers),
    });
  }
  // For unmapped 5xx codes (e.g., Cloudflare-specific 520-530), use
  // InternalServerError so they get ServerError + Retryable categories
  if (status >= 500) {
    return new InternalServerError({
      message,
      retryAfter: parseRetryAfterForStatus(status, headers),
    });
  }
  return new CloudflareHttpError({
    status,
    statusText: String(status),
    body,
    message,
  });
}

export type { OperationMethod, PaginatedOperationMethod };

// ============================================================================
// Error matching
// ============================================================================

/**
 * Extract the _tag literal value from a TaggedError schema AST.
 */
function extractTagFromAst(ast: AST.AST): string | undefined {
  if (ast.encoding && ast.encoding.length > 0) {
    return extractTagFromAst(ast.encoding[0].to);
  }
  if (ast._tag === "Objects") {
    const tagProp = ast.propertySignatures.find(
      (p: { name: PropertyKey }) => p.name === "_tag",
    );
    if (
      tagProp &&
      tagProp.type._tag === "Literal" &&
      typeof tagProp.type.literal === "string"
    ) {
      return tagProp.type.literal;
    }
  }
  return undefined;
}

/**
 * Check if an error matches an expression-based matcher.
 */
function matchesExpression(
  matcher: ErrorMatcher,
  code: number | undefined,
  status: number,
  message: string,
): boolean {
  if (matcher.code === undefined && matcher.status === undefined) return false;
  if (matcher.code !== undefined && matcher.code !== code) return false;
  if (matcher.status !== undefined && matcher.status !== status) return false;
  if (matcher.message !== undefined) {
    if (typeof matcher.message === "string") {
      if (matcher.message !== message) return false;
    } else if (matcher.message.includes !== undefined) {
      if (!message.includes(matcher.message.includes)) return false;
    }
  }
  return true;
}

/**
 * Calculate specificity score for a matcher.
 */
function matcherSpecificity(matcher: ErrorMatcher): number {
  let score = 0;
  if (matcher.code !== undefined) score += 1;
  if (matcher.status !== undefined) score += 1;
  if (matcher.message !== undefined) score += 1;
  return score;
}

interface MatchedError {
  schema: Schema.Top;
  tag: string;
}

/**
 * Find matching error schema using annotations from the schema AST.
 */
function findMatchingError(
  errorSchemas: Map<string, Schema.Top>,
  code: number | undefined,
  status: number,
  message: string,
): MatchedError | undefined {
  let bestMatch: MatchedError | undefined;
  let bestScore = 0;

  for (const [name, schema] of errorSchemas) {
    const ast = schema.ast;
    const matchers = getErrorMatchers(ast);
    if (!matchers || matchers.length === 0) continue;

    for (const matcher of matchers) {
      if (matchesExpression(matcher, code, status, message)) {
        const score = matcherSpecificity(matcher);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = { schema, tag: name };
        }
      }
    }
  }

  return bestMatch;
}

/**
 * Match a Cloudflare API error response using per-operation error schemas.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  errors?: readonly ApiErrorClass[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  // Handle non-JSON error responses (e.g., HTML from malformed URLs, 520 pages)
  const isNonJsonError =
    typeof errorBody === "object" &&
    errorBody !== null &&
    "_nonJsonError" in errorBody;
  if (isNonJsonError) {
    const message = String((errorBody as any).body);
    // For 5xx errors, return a properly categorized error so retries work
    if (status >= 500) {
      return Effect.fail(httpStatusError(status, message, headers));
    }
    return Effect.fail(
      new CloudflareHttpError({
        status,
        statusText: String(status),
        body: message,
        message,
      }),
    );
  }

  // Parse the Cloudflare error envelope
  const envelope =
    typeof errorBody === "object" && errorBody !== null ? errorBody : undefined;
  const cfErrors =
    envelope && "errors" in envelope && Array.isArray((envelope as any).errors)
      ? ((envelope as any).errors as Array<{
          code?: number;
          message?: string;
        }>)
      : undefined;
  const firstError = cfErrors?.[0];
  // Cloudflare sometimes omits the code field entirely (e.g., webhook errors).
  // Treat missing code as 0 (the default) so matchers with { code: 0 } can match.
  const errorCode =
    firstError && typeof firstError.code === "number"
      ? firstError.code
      : firstError
        ? 0
        : undefined;
  const errorMessage = firstError?.message ?? String(status);

  // Check if this is a valid Cloudflare envelope (has success field)
  const isEnvelope =
    envelope && "success" in envelope && (envelope as any).success === false;

  if (!isEnvelope) {
    // Not a Cloudflare envelope — HTTP-level error
    // For 5xx errors, return a properly categorized error so retries work
    const bodyStr =
      typeof errorBody === "string" ? errorBody : JSON.stringify(errorBody);
    if (status >= 500) {
      return Effect.fail(httpStatusError(status, bodyStr, headers));
    }
    return Effect.fail(
      new CloudflareHttpError({
        status,
        statusText: String(status),
        body: bodyStr,
        message: bodyStr,
      }),
    );
  }

  // Build error schema map from the per-operation errors
  if (errors && errors.length > 0) {
    const errorSchemas = new Map<string, Schema.Top>();
    for (const errorSchema of errors) {
      const identifier = extractTagFromAst(
        (errorSchema as unknown as Schema.Top).ast,
      );
      if (identifier) {
        errorSchemas.set(identifier, errorSchema as unknown as Schema.Top);
      }
    }

    const matched = findMatchingError(
      errorSchemas,
      errorCode,
      status,
      errorMessage,
    );

    if (matched) {
      // Decode using the schema - properly instantiates TaggedError classes
      const errorData = {
        _tag: matched.tag,
        code: errorCode ?? 0,
        message: errorMessage,
      };
      return Schema.decodeUnknownEffect(matched.schema)(errorData).pipe(
        Effect.flatMap((decoded: unknown) => Effect.fail(decoded)),
        Effect.catchIf(
          (e: unknown) =>
            typeof e === "object" &&
            e !== null &&
            "_tag" in e &&
            (e as any)._tag === "SchemaError",
          () =>
            Effect.fail(
              new UnknownCloudflareError({
                code: errorCode,
                message: errorMessage,
              }),
            ),
        ),
      ) as Effect.Effect<never, unknown>;
    }
  }

  // Check global error codes before falling through to unknown
  if (errorCode !== undefined && errorCode in GLOBAL_ERROR_CODE_MAP) {
    return Effect.fail(GLOBAL_ERROR_CODE_MAP[errorCode](errorMessage, headers));
  }

  if (status === 429 || GLOBAL_RATE_LIMIT_MESSAGE.test(errorMessage)) {
    return Effect.fail(
      new TooManyRequests({
        message: errorMessage,
        retryAfter: parseServerRetryHint(headers),
      }),
    );
  }

  // Heuristic fallback: map by HTTP status, but only for non-retryable
  // 4xx client errors. Envelope errors that didn't match any per-op or
  // global error code still carry a meaningful HTTP status (400/404/etc.),
  // so surface that as the typed status error instead of
  // UnknownCloudflareError.
  //
  // We deliberately exclude 5xx and 429 here: the matching error classes
  // (InternalServerError, ServiceUnavailable, TooManyRequests) carry
  // retryable categories and the default `Retry.transient` policy will
  // loop forever on an envelope-shaped 5xx that has no matching error
  // code. For those, falling through to UnknownCloudflareError preserves
  // the previous (non-retryable) behavior.
  if (status >= 400 && status < 500 && status !== 429) {
    const StatusErrorClass =
      HTTP_STATUS_MAP[status as keyof typeof HTTP_STATUS_MAP];
    if (StatusErrorClass) {
      return Effect.fail(
        new StatusErrorClass({
          message: errorMessage,
          retryAfter: parseRetryAfterForStatus(status, headers),
        }),
      );
    }
  }

  // No match — return unknown Cloudflare error
  return Effect.fail(
    new UnknownCloudflareError({
      code: errorCode,
      message: errorMessage,
    }),
  );
};

/**
 * Wrap schema decode failures as CloudflareHttpError to match the original's behavior.
 * The original project maps all decode errors to CloudflareHttpError (not a separate parse error type).
 */
class CloudflareDecodeError extends CloudflareHttpError {
  constructor(props: { body: unknown; cause: unknown }) {
    const message =
      typeof props.body === "string" ? props.body : JSON.stringify(props.body);
    super({
      status: 200,
      statusText: "Schema decode failed",
      body: message,
      message,
    });
  }
}

const ASSET_UPLOAD_PATH = "/accounts/{account_id}/workers/assets/upload";

export const transformCloudflareRequestParts = ({
  pathTemplate,
  parts,
}: {
  pathTemplate: string;
  parts: RequestParts;
}): RequestParts => {
  if (pathTemplate !== ASSET_UPLOAD_PATH) {
    return parts;
  }

  const authorization = parts.headers.Authorization;
  if (!authorization || authorization.startsWith("Bearer ")) {
    return parts;
  }

  return {
    ...parts,
    headers: {
      ...parts.headers,
      Authorization: `Bearer ${authorization}`,
    },
  };
};

const _API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: formatHeaders as any,
  matchError,
  ParseError: CloudflareDecodeError as any,
  transformRequestParts: ({ pathTemplate, parts }) =>
    transformCloudflareRequestParts({ pathTemplate, parts }),
  retry: Retry as any,
});

const paginatePageByItems: PaginationStrategy = (
  operation,
  input,
  pagination,
) => {
  const inputToken = pagination.inputToken;
  if (!inputToken) {
    return Stream.die(
      new Error("Cloudflare page pagination requires an inputToken"),
    );
  }

  type State = { page: number; done: boolean };
  const startPage =
    typeof input[inputToken] === "number" ? (input[inputToken] as number) : 1;

  return Stream.unfold({ page: startPage, done: false } as State, (state) =>
    Effect.gen(function* () {
      if (state.done) return undefined;

      const requestPayload = { ...input, [inputToken]: state.page };
      const response = yield* operation(requestPayload);
      const items =
        pagination.items !== undefined
          ? (getPath(response, pagination.items) as
              | readonly unknown[]
              | undefined)
          : undefined;

      return [
        response,
        {
          page: state.page + 1,
          done: (items ?? []).length === 0,
        },
      ] as const;
    }),
  );
};

const cloudflarePaginate: PaginationStrategy = (
  operation,
  input,
  pagination,
) => {
  switch (pagination.mode) {
    case "single":
      return paginateSingle(operation, input, pagination);
    case "page":
      return paginatePageByItems(operation, input, pagination);
    case "cursor":
      return paginateCursor(operation, input, pagination);
    case "token":
    default:
      return paginateWithDefaults(operation, input, pagination);
  }
};

export const make = _API.make;
export const makePaginated = ((
  configFn: any,
  paginateFn?: PaginationStrategy,
) =>
  _API.makePaginated(
    configFn,
    paginateFn ?? cloudflarePaginate,
  )) as typeof _API.makePaginated;

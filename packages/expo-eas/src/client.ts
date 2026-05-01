/**
 * EAS API client.
 *
 * The EAS backend is a single GraphQL endpoint at `${apiBaseUrl}/graphql`
 * (api.expo.dev or staging-api.expo.dev). All operations are dispatched as
 * `POST /graphql` with a `{ query, operationName, variables }` envelope —
 * the shared client takes care of that wrapping when an operation's input
 * schema carries a `T.GraphQLOp` annotation (see `scripts/generate.ts`).
 *
 * Errors come back two ways:
 *
 * 1. HTTP status >= 400 (network/auth/proxy errors) — body usually has
 *    `{ message }` or a plain `{ errors: [{ message }] }` envelope.
 * 2. HTTP 200 with `{ errors: [...] }` (GraphQL validation/business errors).
 *    Each error has `message` and `extensions.errorCode`. The shared client
 *    detects this case and routes the envelope through `matchError`.
 *
 * `matchError` first checks the GraphQL `extensions.errorCode` against the
 * typed `EAS_ERROR_CODE_MAP`, then falls back to the HTTP status map, and
 * finally to `UnknownEasError`.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  UnknownEasError,
  EasParseError,
  EAS_ERROR_CODE_MAP,
} from "./errors.ts";

// Re-export for backwards compatibility with consumers importing from ./client
export { UnknownEasError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

/**
 * Single GraphQL error in the `errors[]` array of a response envelope.
 * Mirrors the shape produced by graphql-js and used by api.expo.dev.
 */
const GraphQLError = Schema.Struct({
  message: Schema.String,
  path: Schema.optional(Schema.Array(Schema.Unknown)),
  locations: Schema.optional(Schema.Array(Schema.Unknown)),
  extensions: Schema.optional(
    Schema.Struct({
      errorCode: Schema.optional(Schema.String),
      code: Schema.optional(Schema.String),
    }),
  ),
});

/** Top-level GraphQL envelope for an error response. */
const GraphQLEnvelope = Schema.Struct({
  data: Schema.optional(Schema.NullOr(Schema.Unknown)),
  errors: Schema.optional(Schema.Array(GraphQLError)),
});

/** Plain REST-ish error body, returned for some HTTP-level failures. */
const RestErrorResponse = Schema.Struct({
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
});

const decodeEnvelope = Schema.decodeUnknownOption(GraphQLEnvelope);
const decodeRest = Schema.decodeUnknownOption(RestErrorResponse);

/**
 * Match an EAS error response (GraphQL envelope or HTTP-level body) to the
 * appropriate error class.
 */
const matchError = (
  status: number,
  errorBody: unknown,
): Effect.Effect<never, unknown> => {
  // Try GraphQL envelope first — works for both HTTP 200 with errors[] and
  // HTTP 400 responses returned by the GraphQL gateway.
  const envelope = decodeEnvelope(errorBody);
  if (envelope._tag === "Some" && envelope.value.errors?.length) {
    const first = envelope.value.errors[0];
    const code = first.extensions?.errorCode ?? first.extensions?.code;
    const message = first.message;

    if (code) {
      const TypedClass = EAS_ERROR_CODE_MAP[code];
      if (TypedClass) {
        return Effect.fail(new TypedClass({ message }));
      }
    }

    const StatusClass = (HTTP_STATUS_MAP as Record<number, unknown>)[status] as
      | (new (args: { message: string }) => unknown)
      | undefined;
    if (StatusClass && status >= 400) {
      return Effect.fail(new StatusClass({ message }) as never);
    }

    return Effect.fail(
      new UnknownEasError({
        code,
        message,
        body: errorBody,
      }),
    );
  }

  // Plain REST-ish error body
  const rest = decodeRest(errorBody);
  if (rest._tag === "Some") {
    const StatusClass = (HTTP_STATUS_MAP as Record<number, unknown>)[status] as
      | (new (args: { message: string }) => unknown)
      | undefined;
    if (StatusClass) {
      return Effect.fail(
        new StatusClass({ message: rest.value.message ?? "" }) as never,
      );
    }
    return Effect.fail(
      new UnknownEasError({
        code: rest.value.code,
        message: rest.value.message,
        body: errorBody,
      }),
    );
  }

  return Effect.fail(new UnknownEasError({ body: errorBody }));
};

/**
 * EAS GraphQL API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
  }),
  matchError,
  ParseError: EasParseError as any,
});

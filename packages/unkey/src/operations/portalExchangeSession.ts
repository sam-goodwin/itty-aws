import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const PortalExchangeSessionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/portal.exchangeSession" }));
export type PortalExchangeSessionInput = typeof PortalExchangeSessionInput.Type;

// Output Schema
export const PortalExchangeSessionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      token: Schema.String,
      expiresAt: Schema.Number,
    }),
  });
export type PortalExchangeSessionOutput =
  typeof PortalExchangeSessionOutput.Type;

// The operation
/**
 * Exchange session token
 *
 * Exchange a short-lived session token for a long-lived browser session.
 * This endpoint is unauthenticated. The session token itself serves as proof of authorization.
 * Each token can only be exchanged once; subsequent attempts return 401.
 * The returned browser session token is valid for 24 hours and should be stored as an
 * httpOnly cookie or used in the Authorization header for subsequent API calls.
 */
export const portalExchangeSession = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PortalExchangeSessionInput,
    outputSchema: PortalExchangeSessionOutput,
    errors: [BadRequest] as const,
  }),
);

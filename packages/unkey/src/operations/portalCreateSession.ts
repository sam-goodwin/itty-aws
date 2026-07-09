import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PortalCreateSessionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String,
    externalId: Schema.String,
    permissions: Schema.Array(Schema.String),
    preview: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/v2/portal.createSession" }));
export type PortalCreateSessionInput = typeof PortalCreateSessionInput.Type;

// Output Schema
export const PortalCreateSessionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      sessionId: Schema.String,
      url: Schema.String,
    }),
  });
export type PortalCreateSessionOutput = typeof PortalCreateSessionOutput.Type;

// The operation
/**
 * Create portal session
 *
 * Create a short-lived session token for an end user to access the Customer Portal.
 * The returned session ID is valid for 15 minutes and can be exchanged exactly once
 * for a 24-hour browser session via `portal.exchangeSession`. Redirect the end user
 * to the returned URL to start the portal experience.
 * **Required Permissions**
 * Your root key must be associated with a workspace that has an enabled portal configuration.
 */
export const portalCreateSession = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PortalCreateSessionInput,
  outputSchema: PortalCreateSessionOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

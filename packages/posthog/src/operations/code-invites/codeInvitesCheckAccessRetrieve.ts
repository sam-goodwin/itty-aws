import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden } from "../../errors.ts";

// Input Schema
export const CodeInvitesCheckAccessRetrieveInput = /*@__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/api/code/invites/check-access/" }));
export type CodeInvitesCheckAccessRetrieveInput =
  typeof CodeInvitesCheckAccessRetrieveInput.Type;

// Output Schema
export const CodeInvitesCheckAccessRetrieveOutput = Schema.Void;
export type CodeInvitesCheckAccessRetrieveOutput =
  typeof CodeInvitesCheckAccessRetrieveOutput.Type;

// The operation
/**
 * Check access
 *
 * Check whether the authenticated user has access to PostHog Code.
 */
export const codeInvitesCheckAccessRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeInvitesCheckAccessRetrieveInput,
  outputSchema: CodeInvitesCheckAccessRetrieveOutput,
  errors: [Forbidden] as const,
}));

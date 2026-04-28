import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden } from "../../errors";

// Input Schema
export const CodeInvitesCheckAccessRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/code/invites/check-access/" }),
  );
export type CodeInvitesCheckAccessRetrieveInput =
  typeof CodeInvitesCheckAccessRetrieveInput.Type;

// Output Schema
export const CodeInvitesCheckAccessRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CodeInvitesCheckAccessRetrieveOutput =
  typeof CodeInvitesCheckAccessRetrieveOutput.Type;

// The operation
/**
 * Check access
 *
 * Check whether the authenticated user has access to PostHog Code.
 */
export const codeInvitesCheckAccessRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CodeInvitesCheckAccessRetrieveInput,
    outputSchema: CodeInvitesCheckAccessRetrieveOutput,
    errors: [Forbidden] as const,
  }));

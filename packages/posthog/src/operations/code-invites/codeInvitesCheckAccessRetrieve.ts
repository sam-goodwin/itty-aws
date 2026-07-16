import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden } from "../../errors.ts";

// Input Schema
export interface CodeInvitesCheckAccessRetrieveInput {}
export const CodeInvitesCheckAccessRetrieveInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/code/invites/check-access/" }),
  ) as unknown as Schema.Codec<CodeInvitesCheckAccessRetrieveInput>;

// Output Schema
export type CodeInvitesCheckAccessRetrieveOutput = void;
export const CodeInvitesCheckAccessRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CodeInvitesCheckAccessRetrieveOutput>;

// The operation
/**
 * Check access
 *
 * Check whether the authenticated user has access to PostHog Code.
 */
export const codeInvitesCheckAccessRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CodeInvitesCheckAccessRetrieveInput,
    outputSchema: CodeInvitesCheckAccessRetrieveOutput,
    errors: [Forbidden] as const,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";

// Input Schema
export interface CodeInvitesRedeemCreateInput {
  code?: string;
}
export const CodeInvitesRedeemCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/api/code/invites/redeem/" }),
  ) as unknown as Schema.Codec<CodeInvitesRedeemCreateInput>;

// Output Schema
export type CodeInvitesRedeemCreateOutput = void;
export const CodeInvitesRedeemCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CodeInvitesRedeemCreateOutput>;

// The operation
/**
 * Redeem invite code
 *
 * Redeem a PostHog Code invite code to enable access.
 */
export const codeInvitesRedeemCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CodeInvitesRedeemCreateInput,
    outputSchema: CodeInvitesRedeemCreateOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);

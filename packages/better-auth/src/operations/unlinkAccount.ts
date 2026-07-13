import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface UnlinkAccountInput {
  providerId: string;
  accountId?: string;
}
export const UnlinkAccountInput = /*@__PURE__*/ Schema.Struct({
  providerId: Schema.String,
  accountId: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/unlink-account" }),
) as unknown as Schema.Codec<UnlinkAccountInput>;

// Output Schema
export interface UnlinkAccountOutput {
  status: boolean;
}
export const UnlinkAccountOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<UnlinkAccountOutput>;

/**
 * Unlink a linked account from the current user.
 *
 * Requires a fresh authenticated session. The server refuses to unlink the
 * last remaining credential if doing so would lock the user out.
 *
 * @param providerId - The provider id of the account to unlink.
 * @param accountId - Optional; disambiguates when several accounts share a provider.
 */
export const unlinkAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: UnlinkAccountInput,
  outputSchema: UnlinkAccountOutput,
  errors: [BadRequest, Unauthorized] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CurrentTokenShowInput {}
export const CurrentTokenShowInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/tokens/current" }),
) as unknown as Schema.Codec<CurrentTokenShowInput>;

// Output Schema
export interface CurrentTokenShowOutput {
  tokens?: {
    apps?: string[];
    org_slug?: string;
    organization?: string;
    restricted_to_machine?: string;
    source_machine_id?: string;
    token_id?: string;
    user?: string;
  }[];
}
export const CurrentTokenShowOutput = /*@__PURE__*/ Schema.Struct({
  tokens: Schema.optional(
    Schema.Array(
      Schema.Struct({
        apps: Schema.optional(Schema.Array(Schema.String)),
        org_slug: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        restricted_to_machine: Schema.optional(Schema.String),
        source_machine_id: Schema.optional(Schema.String),
        token_id: Schema.optional(Schema.String),
        user: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<CurrentTokenShowOutput>;

// The operation
/**
 * Get Current Token Information
 *
 * Get information about the current macaroon token(s), including organizations, apps, user identity hashes, and machine restrictions
 */
export const CurrentTokenShow = /*@__PURE__*/ API.make(() => ({
  inputSchema: CurrentTokenShowInput,
  outputSchema: CurrentTokenShowOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListAPITokensInput {}
export const ListAPITokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v1/auth/api-tokens" }),
) as unknown as Schema.Codec<ListAPITokensInput>;

// Output Schema
export interface ListAPITokensOutput {
  tokens?: {
    name?: string;
    id?: string;
    organization?: string;
    group?: string;
    scopes?: string[];
    created_at?: string;
  }[];
}
export const ListAPITokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tokens: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        group: Schema.optional(Schema.String),
        scopes: Schema.optional(Schema.Array(Schema.String)),
        created_at: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ListAPITokensOutput>;

// The operation
/**
 * List API Tokens
 *
 * Returns a list of API tokens belonging to a user.
 */
export const listAPITokens = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListAPITokensInput,
  outputSchema: ListAPITokensOutput,
}));

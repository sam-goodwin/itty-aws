import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetKeysInput {}
export const GetKeysInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/keys" }),
) as unknown as Schema.Codec<GetKeysInput>;

// Output Schema
export interface GetKeysOutput {
  keys: {
    value?: string;
    description: string;
    actions: string[];
    collections: string[];
    expires_at?: number;
    id?: number;
    value_prefix?: string;
  }[];
}
export const GetKeysOutput = /*@__PURE__*/ Schema.Struct({
  keys: Schema.Array(
    Schema.Struct({
      value: Schema.optional(Schema.String),
      description: Schema.String,
      actions: Schema.Array(Schema.String),
      collections: Schema.Array(Schema.String),
      expires_at: Schema.optional(Schema.Number),
      id: Schema.optional(Schema.Number),
      value_prefix: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<GetKeysOutput>;

// The operation
/**
 * Retrieve (metadata about) all keys.
 */
export const getKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetKeysInput,
  outputSchema: GetKeysOutput,
}));

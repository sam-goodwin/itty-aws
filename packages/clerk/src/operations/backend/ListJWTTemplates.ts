import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListJWTTemplatesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  paginated: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/jwt_templates" }));
export type ListJWTTemplatesInput = typeof ListJWTTemplatesInput.Type;

// Output Schema
export const ListJWTTemplatesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    object: Schema.Literals(["jwt_template"]),
    id: Schema.String,
    name: Schema.String,
    claims: Schema.Unknown,
    lifetime: Schema.Number,
    allowed_clock_skew: Schema.Number,
    custom_signing_key: Schema.Boolean,
    signing_algorithm: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  }),
);
export type ListJWTTemplatesOutput = typeof ListJWTTemplatesOutput.Type;

// The operation
/**
 * List all templates
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListJWTTemplates = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListJWTTemplatesInput,
  outputSchema: ListJWTTemplatesOutput,
}));

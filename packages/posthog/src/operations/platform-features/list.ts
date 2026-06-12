import * as Schema from "effect/Schema";
import { OrganizationSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";

// Input Schema
export const ListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/api/organizations/" }));
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => OrganizationSchema)),
  ),
});
export type ListOutput = typeof ListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const list = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInput,
  outputSchema: ListOutput,
  errors: [BadRequest, Forbidden] as const,
}));

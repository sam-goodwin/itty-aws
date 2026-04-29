import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersonsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  distinct_id: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  properties: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/api/projects/{project_id}/persons/" }));
export type PersonsListInput = typeof PersonsListInput.Type;

// Output Schema
export const PersonsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  count: Schema.optional(Schema.Number),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        distinct_ids: Schema.Array(Schema.String),
        properties: Schema.optional(Schema.Unknown),
        created_at: Schema.String,
        uuid: Schema.String,
        last_seen_at: Schema.NullOr(Schema.String),
      }),
    ),
  ),
});
export type PersonsListOutput = typeof PersonsListOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param distinct_id - Filter list by distinct id.
 * @param email - Filter persons by email (exact match)
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param properties - Filter Persons by person properties.
 * @param search - Search persons, either by email (full text search) or distinct_id (exact match).
 */
export const personsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PersonsListInput,
  outputSchema: PersonsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

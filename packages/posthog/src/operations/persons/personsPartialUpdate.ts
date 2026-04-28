import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    name: Schema.optional(Schema.String),
    distinct_ids: Schema.optional(Schema.Array(Schema.String)),
    properties: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    uuid: Schema.optional(Schema.String),
    last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/persons/{id}/",
    }),
  );
export type PersonsPartialUpdateInput = typeof PersonsPartialUpdateInput.Type;

// Output Schema
export const PersonsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    distinct_ids: Schema.Array(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    uuid: Schema.String,
    last_seen_at: Schema.NullOr(Schema.String),
  });
export type PersonsPartialUpdateOutput = typeof PersonsPartialUpdateOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param id - A unique value identifying this person. Accepts both numeric ID and UUID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsPartialUpdateInput,
    outputSchema: PersonsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersonsSplitCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    name: Schema.String,
    distinct_ids: Schema.Array(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    uuid: Schema.String,
    last_seen_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/{id}/split/",
    }),
  );
export type PersonsSplitCreateInput = typeof PersonsSplitCreateInput.Type;

// Output Schema
export const PersonsSplitCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsSplitCreateOutput = typeof PersonsSplitCreateOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param id - A unique integer value identifying this person.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsSplitCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PersonsSplitCreateInput,
  outputSchema: PersonsSplitCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

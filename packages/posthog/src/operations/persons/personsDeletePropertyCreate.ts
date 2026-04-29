import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersonsDeletePropertyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    $unset: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/{id}/delete_property/",
    }),
  );
export type PersonsDeletePropertyCreateInput =
  typeof PersonsDeletePropertyCreateInput.Type;

// Output Schema
export const PersonsDeletePropertyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsDeletePropertyCreateOutput =
  typeof PersonsDeletePropertyCreateOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param id - A unique value identifying this person. Accepts both numeric ID and UUID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsDeletePropertyCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsDeletePropertyCreateInput,
    outputSchema: PersonsDeletePropertyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

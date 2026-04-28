import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  name: Schema.String,
  distinct_ids: Schema.Array(Schema.String),
  properties: Schema.optional(Schema.Unknown),
  created_at: Schema.String,
  uuid: Schema.String,
  last_seen_at: Schema.NullOr(Schema.String),
}).pipe(
  T.Http({ method: "PUT", path: "/api/projects/{project_id}/persons/{id}/" }),
);
export type PersonsUpdateInput = typeof PersonsUpdateInput.Type;

// Output Schema
export const PersonsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  distinct_ids: Schema.Array(Schema.String),
  properties: Schema.optional(Schema.Unknown),
  created_at: Schema.String,
  uuid: Schema.String,
  last_seen_at: Schema.NullOr(Schema.String),
});
export type PersonsUpdateOutput = typeof PersonsUpdateOutput.Type;

// The operation
/**
 * Only for setting properties on the person. "properties" from the request data will be updated via a "$set" event.
 * This means that only the properties listed will be updated, but other properties won't be removed nor updated.
 * If you would like to remove a property use the `delete_property` endpoint.
 *
 * @param id - A unique value identifying this person. Accepts both numeric ID and UUID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PersonsUpdateInput,
  outputSchema: PersonsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

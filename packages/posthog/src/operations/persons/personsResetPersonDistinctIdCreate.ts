import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsResetPersonDistinctIdCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    id: Schema.Number,
    name: Schema.String,
    distinct_ids: Schema.Array(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    uuid: Schema.String,
    last_seen_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/reset_person_distinct_id/",
    }),
  );
export type PersonsResetPersonDistinctIdCreateInput =
  typeof PersonsResetPersonDistinctIdCreateInput.Type;

// Output Schema
export const PersonsResetPersonDistinctIdCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsResetPersonDistinctIdCreateOutput =
  typeof PersonsResetPersonDistinctIdCreateOutput.Type;

// The operation
/**
 * Reset a distinct_id for a deleted person. This allows the distinct_id to be used again.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsResetPersonDistinctIdCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PersonsResetPersonDistinctIdCreateInput,
    outputSchema: PersonsResetPersonDistinctIdCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

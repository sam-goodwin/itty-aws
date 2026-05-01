import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersonsDeletionStatusListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    person_uuid: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["all", "completed", "pending"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/deletion_status/",
    }),
  );
export type PersonsDeletionStatusListInput =
  typeof PersonsDeletionStatusListInput.Type;

// Output Schema
export const PersonsDeletionStatusListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    count: Schema.optional(Schema.Number),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          person_uuid: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          delete_verified_at: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  });
export type PersonsDeletionStatusListOutput =
  typeof PersonsDeletionStatusListOutput.Type;

// The operation
/**
 * List the status of queued event deletions for persons. When you delete a person with `delete_events=true`, an async deletion is queued. Use this endpoint to check whether those deletions are still pending or have been completed.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param person_uuid - Filter by a specific person UUID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param status - Filter by deletion status: 'pending', 'completed', or 'all'.
 */
export const personsDeletionStatusList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsDeletionStatusListInput,
    outputSchema: PersonsDeletionStatusListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

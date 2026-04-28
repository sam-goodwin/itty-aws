import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsBulkDeleteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    ids: Schema.optional(Schema.Array(Schema.String)),
    distinct_ids: Schema.optional(Schema.Array(Schema.String)),
    delete_events: Schema.optional(Schema.Boolean),
    delete_recordings: Schema.optional(Schema.Boolean),
    keep_person: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/bulk_delete/",
    }),
  );
export type PersonsBulkDeleteCreateInput =
  typeof PersonsBulkDeleteCreateInput.Type;

// Output Schema
export const PersonsBulkDeleteCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsBulkDeleteCreateOutput =
  typeof PersonsBulkDeleteCreateOutput.Type;

// The operation
/**
 * This endpoint allows you to bulk delete persons, either by the PostHog person IDs or by distinct IDs. You can pass in a maximum of 1000 IDs per call. Only events captured before the request will be deleted.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsBulkDeleteCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsBulkDeleteCreateInput,
    outputSchema: PersonsBulkDeleteCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

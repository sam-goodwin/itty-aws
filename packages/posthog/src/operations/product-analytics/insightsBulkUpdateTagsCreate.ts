import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsBulkUpdateTagsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    ids: Schema.Array(Schema.Number),
    action: Schema.Literals(["add", "remove", "set"]),
    tags: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insights/bulk_update_tags/",
    }),
  );
export type InsightsBulkUpdateTagsCreateInput =
  typeof InsightsBulkUpdateTagsCreateInput.Type;

// Output Schema
export const InsightsBulkUpdateTagsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updated: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        tags: Schema.Array(Schema.String),
      }),
    ),
    skipped: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        reason: Schema.String,
      }),
    ),
  });
export type InsightsBulkUpdateTagsCreateOutput =
  typeof InsightsBulkUpdateTagsCreateOutput.Type;

// The operation
/**
 * Bulk update tags on multiple objects.
 * Accepts:
 * - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]}
 * Actions:
 * - "add": Add tags to existing tags on each object
 * - "remove": Remove specific tags from each object
 * - "set": Replace all tags on each object with the provided list
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsBulkUpdateTagsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InsightsBulkUpdateTagsCreateInput,
    outputSchema: InsightsBulkUpdateTagsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

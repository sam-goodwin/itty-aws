import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsBulkUpdateTagsCreateInput {
  project_id: string;
  format?: "csv" | "json";
  ids?: number[];
  action?: "add" | "remove" | "set";
  tags?: string[];
}
export const InsightsBulkUpdateTagsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    ids: Schema.optional(Schema.Array(Schema.Number)),
    action: Schema.optional(Schema.Literals(["add", "remove", "set"])),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insights/bulk_update_tags/",
    }),
  ) as unknown as Schema.Codec<InsightsBulkUpdateTagsCreateInput>;

// Output Schema
export interface InsightsBulkUpdateTagsCreateOutput {
  updated?: { id?: number; tags?: string[] }[];
  skipped?: { id?: number; reason?: string }[];
}
export const InsightsBulkUpdateTagsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updated: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          tags: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    skipped: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          reason: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<InsightsBulkUpdateTagsCreateOutput>;

// The operation
/**
 * Bulk update tags on multiple objects.
 * PAT access: this action has no ``required_scopes=`` on the decorator —
 * inheriting viewsets must add ``"bulk_update_tags"`` to their
 * ``scope_object_write_actions`` list to accept personal API keys.
 * Without that opt-in, ``APIScopePermission`` rejects PAT requests with
 * "This action does not support personal API key access". Done per-viewset
 * so granting ``<scope>:write`` for one resource doesn't leak access to
 * sibling resources that share this mixin.
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

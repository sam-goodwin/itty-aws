import * as Schema from "effect/Schema";
import { OrgVolumeSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VolumesOrgListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  org_slug: Schema.String.pipe(T.PathParam()),
  include_deleted: Schema.optional(Schema.Boolean),
  region: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.Boolean),
  updated_after: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/orgs/{org_slug}/volumes" }));
export type VolumesOrgListInput = typeof VolumesOrgListInput.Type;

// Output Schema
export const VolumesOrgListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  last_updated_at: Schema.optional(Schema.String),
  last_volume_id: Schema.optional(Schema.String),
  next_cursor: Schema.optional(Schema.String),
  volumes: Schema.optional(Schema.Array(Schema.suspend(() => OrgVolumeSchema))),
});
export type VolumesOrgListOutput = typeof VolumesOrgListOutput.Type;

// The operation
/**
 * List All Volumes
 *
 * List all volumes for an organization with optional filters and cursor-based pagination.
 *
 * @param org_slug - Fly Organization Slug
 * @param include_deleted - Include deleted volumes
 * @param region - Region filter
 * @param state - Comma separated list of volume states to filter
 * @param summary - Only return summary info about volumes (omit blocks, block size, etc)
 * @param updated_after - Only return volumes updated after this time. Timestamp must be in the RFC 3339 format
 * @param cursor - Pagination cursor from previous response (takes precedence over updated_after)
 * @param limit - The number of volumes to fetch (max of 1000). This limit is advisory. Responses may be shorter, even when more volumes remain. If omitted, the maximum is used
 */
export const VolumesOrgList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesOrgListInput,
  outputSchema: VolumesOrgListOutput,
}));

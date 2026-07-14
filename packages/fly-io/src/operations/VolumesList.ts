import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface VolumesListInput {
  app_name: string;
  summary?: boolean;
}
export const VolumesListInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  summary: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/apps/{app_name}/volumes" }),
) as unknown as Schema.Codec<VolumesListInput>;

// Output Schema
export type VolumesListOutput = {
  attached_alloc_id?: string;
  attached_machine_id?: string;
  auto_backup_enabled?: boolean;
  block_size?: number;
  blocks?: number;
  blocks_avail?: number;
  blocks_free?: number;
  bytes_total?: number;
  bytes_used?: number;
  created_at?: string;
  encrypted?: boolean;
  fstype?: string;
  host_status?: "ok" | "unknown" | "unreachable";
  id?: string;
  name?: string;
  region?: string;
  size_gb?: number;
  snapshot_retention?: number;
  state?: string;
  type?: "local" | "cache";
  zone?: string;
}[];
export const VolumesListOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
    attached_alloc_id: Schema.optional(Schema.String),
    attached_machine_id: Schema.optional(Schema.String),
    auto_backup_enabled: Schema.optional(Schema.Boolean),
    block_size: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Number),
    blocks_avail: Schema.optional(Schema.Number),
    blocks_free: Schema.optional(Schema.Number),
    bytes_total: Schema.optional(Schema.Number),
    bytes_used: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    encrypted: Schema.optional(Schema.Boolean),
    fstype: Schema.optional(Schema.String),
    host_status: Schema.optional(
      Schema.Literals(["ok", "unknown", "unreachable"]),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    size_gb: Schema.optional(Schema.Number),
    snapshot_retention: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literals(["local", "cache"])),
    zone: Schema.optional(Schema.String),
  }),
) as unknown as Schema.Codec<VolumesListOutput>;

// The operation
/**
 * List Volumes
 *
 * List all volumes associated with a specific app.
 *
 * @param app_name - Fly App Name
 * @param summary - Only return summary info about volumes (omit blocks, block size, etc)
 */
export const VolumesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesListInput,
  outputSchema: VolumesListOutput,
  errors: [Forbidden, NotFound] as const,
}));

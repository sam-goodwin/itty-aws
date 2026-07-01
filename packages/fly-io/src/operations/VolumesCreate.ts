import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface VolumesCreateInput {
  app_name: string;
  auto_backup_enabled?: boolean;
  compute?: {
    cpu_kind?: string;
    cpus?: number;
    gpu_kind?: string;
    gpus?: number;
    host_dedication_id?: string;
    kernel_args?: string[];
    max_memory_mb?: number;
    memory_mb?: number;
    persist_rootfs?: "never" | "always" | "restart";
  };
  compute_image?: string;
  encrypted?: boolean;
  fstype?: string;
  name?: string;
  region?: string;
  require_unique_zone?: boolean;
  size_gb?: number;
  snapshot_id?: string;
  snapshot_retention?: number;
  source_volume_id?: string;
  unique_zone_app_wide?: boolean;
}
export const VolumesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  auto_backup_enabled: Schema.optional(Schema.Boolean),
  compute: Schema.optional(
    Schema.Struct({
      cpu_kind: Schema.optional(Schema.String),
      cpus: Schema.optional(Schema.Number),
      gpu_kind: Schema.optional(Schema.String),
      gpus: Schema.optional(Schema.Number),
      host_dedication_id: Schema.optional(Schema.String),
      kernel_args: Schema.optional(Schema.Array(Schema.String)),
      max_memory_mb: Schema.optional(Schema.Number),
      memory_mb: Schema.optional(Schema.Number),
      persist_rootfs: Schema.optional(
        Schema.Literals(["never", "always", "restart"]),
      ),
    }),
  ),
  compute_image: Schema.optional(Schema.String),
  encrypted: Schema.optional(Schema.Boolean),
  fstype: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  require_unique_zone: Schema.optional(Schema.Boolean),
  size_gb: Schema.optional(Schema.Number),
  snapshot_id: Schema.optional(Schema.String),
  snapshot_retention: Schema.optional(Schema.Number),
  source_volume_id: Schema.optional(Schema.String),
  unique_zone_app_wide: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/apps/{app_name}/volumes" }),
) as unknown as Schema.Codec<VolumesCreateInput>;

// Output Schema
export interface VolumesCreateOutput {
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
}
export const VolumesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesCreateOutput>;

// The operation
/**
 * Create Volume
 *
 * Create a volume for a specific app using the details provided in the request body.
 *
 * @param app_name - Fly App Name
 */
export const VolumesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesCreateInput,
  outputSchema: VolumesCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface VolumesExtendInput {
  app_name: string;
  volume_id: string;
  size_gb?: number;
}
export const VolumesExtendInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  volume_id: Schema.String.pipe(T.PathParam()),
  size_gb: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/apps/{app_name}/volumes/{volume_id}/extend",
  }),
) as unknown as Schema.Codec<VolumesExtendInput>;

// Output Schema
export interface VolumesExtendOutput {
  needs_restart?: boolean;
  volume?: {
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
  };
}
export const VolumesExtendOutput = /*@__PURE__*/ Schema.Struct({
  needs_restart: Schema.optional(Schema.Boolean),
  volume: Schema.optional(
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
  ),
}) as unknown as Schema.Codec<VolumesExtendOutput>;

// The operation
/**
 * Extend Volume
 *
 * Extend a volume's size within an app using the details provided in the request body.
 *
 * @param app_name - Fly App Name
 * @param volume_id - Volume ID
 */
export const VolumesExtend = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesExtendInput,
  outputSchema: VolumesExtendOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

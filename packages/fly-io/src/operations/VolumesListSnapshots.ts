import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface VolumesListSnapshotsInput {
  app_name: string;
  volume_id: string;
}
export const VolumesListSnapshotsInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    volume_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apps/{app_name}/volumes/{volume_id}/snapshots",
    }),
  ) as unknown as Schema.Codec<VolumesListSnapshotsInput>;

// Output Schema
export type VolumesListSnapshotsOutput = {
  created_at?: string;
  digest?: string;
  id?: string;
  retention_days?: number;
  size?: number;
  status?: string;
  volume_size?: number;
}[];
export const VolumesListSnapshotsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      created_at: Schema.optional(Schema.String),
      digest: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      retention_days: Schema.optional(Schema.Number),
      size: Schema.optional(Schema.Number),
      status: Schema.optional(Schema.String),
      volume_size: Schema.optional(Schema.Number),
    }),
  ) as unknown as Schema.Codec<VolumesListSnapshotsOutput>;

// The operation
/**
 * List Snapshots
 *
 * List all snapshots for a specific volume within an app.
 *
 * @param app_name - Fly App Name
 * @param volume_id - Volume ID
 */
export const VolumesListSnapshots = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesListSnapshotsInput,
  outputSchema: VolumesListSnapshotsOutput,
  errors: [Forbidden, NotFound] as const,
}));

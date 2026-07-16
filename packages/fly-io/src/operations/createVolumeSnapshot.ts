import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CreateVolumeSnapshotInput {
  app_name: string;
  volume_id: string;
}
export const CreateVolumeSnapshotInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    volume_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apps/{app_name}/volumes/{volume_id}/snapshots",
    }),
  ) as unknown as Schema.Codec<CreateVolumeSnapshotInput>;

// Output Schema
export type CreateVolumeSnapshotOutput = void;
export const CreateVolumeSnapshotOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateVolumeSnapshotOutput>;

// The operation
/**
 * Create Snapshot
 *
 * Create a snapshot for a specific volume within an app.
 *
 * @param app_name - Fly App Name
 * @param volume_id - Volume ID
 */
export const createVolumeSnapshot = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateVolumeSnapshotInput,
  outputSchema: CreateVolumeSnapshotOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

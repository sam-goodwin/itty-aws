import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SetSnapshotScheduleInput {
  project_id: string;
  branch_id: string;
  schedule: {
    frequency: string;
    hour?: number;
    day?: number;
    month?: number;
    retention_seconds?: number;
  }[];
}
export const SetSnapshotScheduleInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    schedule: Schema.Array(
      Schema.Struct({
        frequency: Schema.String,
        hour: Schema.optional(Schema.Number),
        day: Schema.optional(Schema.Number),
        month: Schema.optional(Schema.Number),
        retention_seconds: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/projects/{project_id}/branches/{branch_id}/backup_schedule",
    }),
  ) as unknown as Schema.Codec<SetSnapshotScheduleInput>;

// Output Schema
export interface SetSnapshotScheduleOutput {}
export const SetSnapshotScheduleOutput =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<SetSnapshotScheduleOutput>;

// The operation
/**
 * Update backup schedule
 *
 * Updates the backup schedule for the specified branch.
 * The schedule defines how often automatic snapshots are created (e.g., `hourly`, `daily`).
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const setSnapshotSchedule = /*@__PURE__*/ API.make(() => ({
  inputSchema: SetSnapshotScheduleInput,
  outputSchema: SetSnapshotScheduleOutput,
}));

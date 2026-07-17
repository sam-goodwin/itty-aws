import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSnapshotScheduleInput {
  project_id: string;
  branch_id: string;
}
export const GetSnapshotScheduleInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/backup_schedule",
    }),
  ) as unknown as Schema.Codec<GetSnapshotScheduleInput>;

// Output Schema
export interface GetSnapshotScheduleOutput {
  schedule: {
    frequency: string;
    hour?: number;
    day?: number;
    month?: number;
    retention_seconds?: number;
  }[];
}
export const GetSnapshotScheduleOutput =
  /*@__PURE__*/ Schema.Struct({
    schedule: Schema.Array(
      Schema.Struct({
        frequency: Schema.String,
        hour: Schema.optional(Schema.Number),
        day: Schema.optional(Schema.Number),
        month: Schema.optional(Schema.Number),
        retention_seconds: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<GetSnapshotScheduleOutput>;

// The operation
/**
 * Retrieve backup schedule
 *
 * Returns the backup schedule for the specified branch, including the configured snapshot frequencies.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const getSnapshotSchedule = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetSnapshotScheduleInput,
  outputSchema: GetSnapshotScheduleOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1UpdateBackupScheduleInput {
  ref: string;
  schedule_for: string;
}
export const V1UpdateBackupScheduleInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    schedule_for: Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/projects/{ref}/database/backups/schedule",
    }),
  ) as unknown as Schema.Codec<V1UpdateBackupScheduleInput>;

// Output Schema
export interface V1UpdateBackupScheduleOutput {
  schedule_for: string;
  updated_at: string;
}
export const V1UpdateBackupScheduleOutput =
  /*@__PURE__*/ Schema.Struct({
    schedule_for: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<V1UpdateBackupScheduleOutput>;

// The operation
/**
 * Updates the backup schedule time for a project
 *
 * Sets the time at which the daily backup runs. The change takes effect on the next backup window that includes the new time. If the new time has already passed for today, the first backup at the new time will occur the following day. It can only be updated 3 times per 24 hours.
 *
 * @param ref - Project ref
 */
export const v1UpdateBackupSchedule = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdateBackupScheduleInput,
  outputSchema: V1UpdateBackupScheduleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

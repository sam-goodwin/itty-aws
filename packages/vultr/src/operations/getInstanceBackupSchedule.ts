import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceBackupScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/instances/{instanceId}/backup-schedule" }),
  );
export type GetInstanceBackupScheduleInput =
  typeof GetInstanceBackupScheduleInput.Type;

// Output Schema
export const GetInstanceBackupScheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backup_schedule: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
        type: Schema.optional(Schema.String),
        next_scheduled_time_utc: Schema.optional(Schema.String),
        hour: Schema.optional(Schema.Number),
        dow: Schema.optional(Schema.Number),
        dom: Schema.optional(Schema.Number),
      }),
    ),
  });
export type GetInstanceBackupScheduleOutput =
  typeof GetInstanceBackupScheduleOutput.Type;

// The operation
/**
 * Get Instance Backup Schedule
 *
 * Get the backup schedule for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const getInstanceBackupSchedule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInstanceBackupScheduleInput,
    outputSchema: GetInstanceBackupScheduleOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);

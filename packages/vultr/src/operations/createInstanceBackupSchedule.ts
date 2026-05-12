import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const CreateInstanceBackupScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    hour: Schema.optional(Schema.Number),
    dow: Schema.optional(Schema.Number),
    dom: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "POST", path: "/instances/{instanceId}/backup-schedule" }),
  );
export type CreateInstanceBackupScheduleInput =
  typeof CreateInstanceBackupScheduleInput.Type;

// Output Schema
export const CreateInstanceBackupScheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateInstanceBackupScheduleOutput =
  typeof CreateInstanceBackupScheduleOutput.Type;

// The operation
/**
 * Set Instance Backup Schedule
 *
 * Set the backup schedule for an Instance in UTC. The `type` is required.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const createInstanceBackupSchedule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateInstanceBackupScheduleInput,
    outputSchema: CreateInstanceBackupScheduleOutput,
    errors: [NotFound] as const,
  }));

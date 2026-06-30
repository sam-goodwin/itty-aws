import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetBackupScheduleInput {
  ref: string;
}
export const V1GetBackupScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/database/backups/schedule",
    }),
  ) as unknown as Schema.Codec<V1GetBackupScheduleInput>;

// Output Schema
export interface V1GetBackupScheduleOutput {
  schedule_for: string;
  updated_at: string;
}
export const V1GetBackupScheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule_for: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<V1GetBackupScheduleOutput>;

// The operation
/**
 * Gets the backup schedule for a project
 *
 * @param ref - Project ref
 */
export const v1GetBackupSchedule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetBackupScheduleInput,
  outputSchema: V1GetBackupScheduleOutput,
  errors: [Forbidden, NotFound] as const,
}));

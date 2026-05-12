import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateRetentionScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    cron: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/registry/{registryId}/retention/schedule",
    }),
  );
export type UpdateRetentionScheduleInput =
  typeof UpdateRetentionScheduleInput.Type;

// Output Schema
export const UpdateRetentionScheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.optional(Schema.String),
    next_scheduled_time: Schema.optional(Schema.String),
  });
export type UpdateRetentionScheduleOutput =
  typeof UpdateRetentionScheduleOutput.Type;

// The operation
/**
 * Update Retention Policy Schedule
 *
 * Update when a Retention Policy is scheduled to run in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const updateRetentionSchedule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateRetentionScheduleInput,
    outputSchema: UpdateRetentionScheduleOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);

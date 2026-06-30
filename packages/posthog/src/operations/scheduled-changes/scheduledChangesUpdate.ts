import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ScheduledChangesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    team_id: Schema.Number,
    record_id: Schema.String,
    model_name: Schema.Literals(["FeatureFlag"]),
    payload: Schema.Unknown,
    scheduled_at: Schema.String,
    executed_at: Schema.NullOr(Schema.String),
    failure_reason: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.optional(Schema.Number),
      uuid: Schema.optional(Schema.String),
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    updated_at: Schema.String,
    is_recurring: Schema.optional(Schema.Boolean),
    recurrence_interval: Schema.optional(Schema.Unknown),
    cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.NullOr(Schema.String),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/scheduled_changes/{id}/",
    }),
  );
export type ScheduledChangesUpdateInput =
  typeof ScheduledChangesUpdateInput.Type;

// Output Schema
export const ScheduledChangesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    team_id: Schema.Number,
    record_id: Schema.String,
    model_name: Schema.Literals(["FeatureFlag"]),
    payload: Schema.Unknown,
    scheduled_at: Schema.String,
    executed_at: Schema.NullOr(Schema.String),
    failure_reason: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.optional(Schema.Number),
      uuid: Schema.optional(Schema.String),
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    updated_at: Schema.String,
    is_recurring: Schema.optional(Schema.Boolean),
    recurrence_interval: Schema.optional(Schema.Unknown),
    cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.NullOr(Schema.String),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.NullOr(Schema.String),
  });
export type ScheduledChangesUpdateOutput =
  typeof ScheduledChangesUpdateOutput.Type;

// The operation
/**
 * Create, read, update and delete scheduled changes.
 *
 * @param id - A unique integer value identifying this scheduled change.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const scheduledChangesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledChangesUpdateInput,
    outputSchema: ScheduledChangesUpdateOutput,
  }),
);

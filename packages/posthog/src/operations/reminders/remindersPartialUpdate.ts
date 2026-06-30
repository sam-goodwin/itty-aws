import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const RemindersPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization: Schema.optional(Schema.String),
    team: Schema.optional(Schema.NullOr(Schema.Number)),
    title: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    resource_type: Schema.optional(Schema.NullOr(Schema.String)),
    resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    scheduled_at: Schema.optional(Schema.NullOr(Schema.String)),
    recurrence_interval: Schema.optional(Schema.Unknown),
    cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.optional(Schema.String),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    next_fire_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_fired_at: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.Literals(["active", "completed", "errored"]),
    ),
    created_by: Schema.optional(
      Schema.Struct({
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
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "PATCH", path: "/api/reminders/{id}/" }));
export type RemindersPartialUpdateInput =
  typeof RemindersPartialUpdateInput.Type;

// Output Schema
export const RemindersPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    organization: Schema.String,
    team: Schema.optional(Schema.NullOr(Schema.Number)),
    title: Schema.String,
    message: Schema.optional(Schema.String),
    resource_type: Schema.optional(Schema.NullOr(Schema.String)),
    resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    scheduled_at: Schema.optional(Schema.NullOr(Schema.String)),
    recurrence_interval: Schema.optional(Schema.Unknown),
    cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.optional(Schema.String),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    next_fire_at: Schema.NullOr(Schema.String),
    last_fired_at: Schema.NullOr(Schema.String),
    status: Schema.Literals(["active", "completed", "errored"]),
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
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  });
export type RemindersPartialUpdateOutput =
  typeof RemindersPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this reminder.
 */
export const remindersPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemindersPartialUpdateInput,
    outputSchema: RemindersPartialUpdateOutput,
  }),
);

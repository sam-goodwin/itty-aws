import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const ListServiceAlertsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    databaseId: Schema.String.pipe(T.PathParam()),
    period: Schema.String,
  },
).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/alerts" }));
export type ListServiceAlertsInput = typeof ListServiceAlertsInput.Type;

// Output Schema
export const ListServiceAlertsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alerts: Schema.optional(
      Schema.Struct({
        timestamp: Schema.optional(Schema.String),
        message_type: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        recommendation: Schema.optional(Schema.String),
        maintenance_scheduled: Schema.optional(Schema.String),
        resource_type: Schema.optional(Schema.String),
        table_count: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ListServiceAlertsOutput = typeof ListServiceAlertsOutput.Type;

// The operation
/**
 * List Service Alerts
 *
 * List service alert messages for the Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listServiceAlerts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListServiceAlertsInput,
  outputSchema: ListServiceAlertsOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));

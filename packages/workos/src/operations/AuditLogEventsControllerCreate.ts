import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuditLogEventsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String,
    event: Schema.Struct({
      action: Schema.String,
      occurred_at: Schema.String,
      actor: Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        name: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.Unknown),
      }),
      targets: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          type: Schema.String,
          name: Schema.optional(Schema.String),
          metadata: Schema.optional(Schema.Unknown),
        }),
      ),
      context: Schema.Struct({
        location: Schema.String,
        user_agent: Schema.optional(Schema.String),
      }),
      metadata: Schema.optional(Schema.Unknown),
      version: Schema.optional(Schema.Number),
    }),
  }).pipe(T.Http({ method: "POST", path: "/audit_logs/events" }));
export type AuditLogEventsControllerCreateInput =
  typeof AuditLogEventsControllerCreateInput.Type;

// Output Schema
export const AuditLogEventsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  });
export type AuditLogEventsControllerCreateOutput =
  typeof AuditLogEventsControllerCreateOutput.Type;

// The operation
/**
 * Create Event
 *
 * Create an Audit Log Event.
 * This API supports idempotency which guarantees that performing the same operation multiple times will have the same result as if the operation were performed only once. This is handy in situations where you may need to retry a request due to a failure or prevent accidental duplicate requests from creating more than one resource.
 * To achieve idempotency, you can add `Idempotency-Key` request header to a Create Event request with a unique string as the value. Each subsequent request matching this unique string will return the same response. We suggest using [v4 UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier) for idempotency keys to avoid collisions.
 * Idempotency keys expire after 24 hours. The API will generate a new response if you submit a request with an expired key.
 *
 * @param idempotency-key - A unique string to prevent duplicate requests. Each subsequent request matching this unique string will return the same response. We suggest using v4 UUIDs. Keys expire after 24 hours.
 */
export const AuditLogEventsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogEventsControllerCreateInput,
    outputSchema: AuditLogEventsControllerCreateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuditLogValidatorVersionsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionName: Schema.String.pipe(T.PathParam()),
    actor: Schema.optional(
      Schema.Struct({
        metadata: Schema.Unknown,
      }),
    ),
    targets: Schema.Array(
      Schema.Struct({
        type: Schema.String,
        metadata: Schema.optional(Schema.Unknown),
      }),
    ),
    metadata: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/audit_logs/actions/{actionName}/schemas",
    }),
  );
export type AuditLogValidatorVersionsControllerCreateInput =
  typeof AuditLogValidatorVersionsControllerCreateInput.Type;

// Output Schema
export const AuditLogValidatorVersionsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    version: Schema.Number,
    actor: Schema.optional(
      Schema.Struct({
        metadata: Schema.Record(Schema.String, Schema.Unknown),
      }),
    ),
    targets: Schema.Array(
      Schema.Struct({
        type: Schema.String,
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.String,
  });
export type AuditLogValidatorVersionsControllerCreateOutput =
  typeof AuditLogValidatorVersionsControllerCreateOutput.Type;

// The operation
/**
 * Create Schema
 *
 * Creates a new Audit Log schema used to validate the payload of incoming Audit Log Events. If the `action` does not exist, it will also be created.
 *
 * @param actionName - The name of the Audit Log action.
 */
export const AuditLogValidatorVersionsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogValidatorVersionsControllerCreateInput,
    outputSchema: AuditLogValidatorVersionsControllerCreateOutput,
    errors: [UnprocessableEntity] as const,
  }));

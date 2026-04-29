import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuditLogValidatorVersionsControllerSchemasInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionName: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({ method: "GET", path: "/audit_logs/actions/{actionName}/schemas" }),
  );
export type AuditLogValidatorVersionsControllerSchemasInput =
  typeof AuditLogValidatorVersionsControllerSchemasInput.Type;

// Output Schema
export const AuditLogValidatorVersionsControllerSchemasOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.Unknown),
              ),
            }),
          ),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_at: Schema.String,
        }),
      ),
    ),
  });
export type AuditLogValidatorVersionsControllerSchemasOutput =
  typeof AuditLogValidatorVersionsControllerSchemasOutput.Type;

// The operation
/**
 * List Schemas
 *
 * Get a list of all schemas for the Audit Logs action identified by `:name`.
 *
 * @param actionName - The name of the Audit Log action.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 */
export const AuditLogValidatorVersionsControllerSchemas =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogValidatorVersionsControllerSchemasInput,
    outputSchema: AuditLogValidatorVersionsControllerSchemasOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));

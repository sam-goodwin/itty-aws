import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuditLogValidatorsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(T.Http({ method: "GET", path: "/audit_logs/actions" }));
export type AuditLogValidatorsControllerListInput =
  typeof AuditLogValidatorsControllerListInput.Type;

// Output Schema
export const AuditLogValidatorsControllerListOutput =
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
          name: Schema.String,
          schema: Schema.Struct({
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
          created_at: Schema.String,
          updated_at: Schema.String,
        }),
      ),
    ),
  });
export type AuditLogValidatorsControllerListOutput =
  typeof AuditLogValidatorsControllerListOutput.Type;

// The operation
/**
 * List Actions
 *
 * Get a list of all Audit Log actions in the current environment.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 */
export const AuditLogValidatorsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogValidatorsControllerListInput,
    outputSchema: AuditLogValidatorsControllerListOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));

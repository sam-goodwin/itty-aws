import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuditLogValidatorsControllerListInput {
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const AuditLogValidatorsControllerListInput =
  /*@__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/audit_logs/actions" }),
  ) as unknown as Schema.Codec<AuditLogValidatorsControllerListInput>;

// Output Schema
export interface AuditLogValidatorsControllerListOutput {
  object?: string;
  list_metadata?: { before: string | null; after: string | null };
  data?: ReadonlyArray<{
    object?: string;
    name?: string;
    schema?: {
      object?: string;
      version?: number;
      actor?: { metadata: Record<string, unknown> };
      targets?: ReadonlyArray<{
        type: string;
        metadata?: Record<string, unknown>;
      }>;
      metadata?: Record<string, unknown>;
      created_at?: string;
    };
    created_at?: string;
    updated_at?: string;
  }>;
}
export const AuditLogValidatorsControllerListOutput =
  /*@__PURE__*/ Schema.Struct({
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
          object: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          schema: Schema.optional(
            Schema.Struct({
              object: Schema.optional(Schema.String),
              version: Schema.optional(Schema.Number),
              actor: Schema.optional(
                Schema.Struct({
                  metadata: Schema.Record(Schema.String, Schema.Unknown),
                }),
              ),
              targets: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.String,
                    metadata: Schema.optional(
                      Schema.Record(Schema.String, Schema.Unknown),
                    ),
                  }),
                ),
              ),
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.Unknown),
              ),
              created_at: Schema.optional(Schema.String),
            }),
          ),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AuditLogValidatorsControllerListOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuditLogValidatorsControllerListInput,
    outputSchema: AuditLogValidatorsControllerListOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));

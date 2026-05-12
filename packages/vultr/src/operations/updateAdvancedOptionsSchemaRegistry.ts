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
export const UpdateAdvancedOptionsSchemaRegistryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    leader_eligibility: Schema.optional(Schema.Boolean),
    schema_reader_strict_mode: Schema.optional(Schema.Boolean),
    retriable_errors_silenced: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/advanced-options/schema-registry",
    }),
  );
export type UpdateAdvancedOptionsSchemaRegistryInput =
  typeof UpdateAdvancedOptionsSchemaRegistryInput.Type;

// Output Schema
export const UpdateAdvancedOptionsSchemaRegistryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateAdvancedOptionsSchemaRegistryOutput =
  typeof UpdateAdvancedOptionsSchemaRegistryOutput.Type;

// The operation
/**
 * Update Schema Registry Advanced Options
 *
 * Updates a Schema Registry advanced configuration option for the Managed Database (Kafka engine types only on business plans or higher).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const updateAdvancedOptionsSchemaRegistry =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateAdvancedOptionsSchemaRegistryInput,
    outputSchema: UpdateAdvancedOptionsSchemaRegistryOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));

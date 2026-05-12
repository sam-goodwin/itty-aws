import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListAdvancedOptionsKafkaRestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/databases/{databaseId}/advanced-options/kafka-rest",
    }),
  );
export type ListAdvancedOptionsKafkaRestInput =
  typeof ListAdvancedOptionsKafkaRestInput.Type;

// Output Schema
export const ListAdvancedOptionsKafkaRestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configured_options: Schema.optional(Schema.Unknown),
    available_options: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          enumerals: Schema.optional(Schema.Array(Schema.String)),
          min_value: Schema.optional(Schema.Number),
          max_value: Schema.optional(Schema.Number),
          alt_values: Schema.optional(Schema.Array(Schema.Number)),
          units: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListAdvancedOptionsKafkaRestOutput =
  typeof ListAdvancedOptionsKafkaRestOutput.Type;

// The operation
/**
 * List Kafka REST Advanced Options
 *
 * List all configured and available Kafka REST advanced options for the Managed Database (Kafka engine types only on business plans or higher).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listAdvancedOptionsKafkaRest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAdvancedOptionsKafkaRestInput,
    outputSchema: ListAdvancedOptionsKafkaRestOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

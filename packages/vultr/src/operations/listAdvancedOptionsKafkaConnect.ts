import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListAdvancedOptionsKafkaConnectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/databases/{databaseId}/advanced-options/kafka-connect",
    }),
  );
export type ListAdvancedOptionsKafkaConnectInput =
  typeof ListAdvancedOptionsKafkaConnectInput.Type;

// Output Schema
export const ListAdvancedOptionsKafkaConnectOutput =
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
export type ListAdvancedOptionsKafkaConnectOutput =
  typeof ListAdvancedOptionsKafkaConnectOutput.Type;

// The operation
/**
 * List Kafka Connect Advanced Options
 *
 * List all configured and available Kafka Connect advanced options for the Managed Database (Kafka engine types only on business plans or higher).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listAdvancedOptionsKafkaConnect =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAdvancedOptionsKafkaConnectInput,
    outputSchema: ListAdvancedOptionsKafkaConnectOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

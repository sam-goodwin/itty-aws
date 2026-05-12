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
export const UpdateAdvancedOptionsKafkaRestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    producer_acks: Schema.optional(Schema.String),
    producer_compression_type: Schema.optional(
      Schema.Literals(["gzip", "snappy", "lz4", "zstd", "none"]),
    ),
    producer_linger_ms: Schema.optional(Schema.Number),
    producer_max_request_size: Schema.optional(Schema.Number),
    consumer_enable_auto_commit: Schema.optional(Schema.Boolean),
    consumer_request_max_bytes: Schema.optional(Schema.Number),
    consumer_request_timeout_ms: Schema.optional(Schema.Number),
    name_strategy: Schema.optional(Schema.String),
    name_strategy_validation: Schema.optional(Schema.Boolean),
    simpleconsumer_pool_size_max: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/advanced-options/kafka-rest",
    }),
  );
export type UpdateAdvancedOptionsKafkaRestInput =
  typeof UpdateAdvancedOptionsKafkaRestInput.Type;

// Output Schema
export const UpdateAdvancedOptionsKafkaRestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateAdvancedOptionsKafkaRestOutput =
  typeof UpdateAdvancedOptionsKafkaRestOutput.Type;

// The operation
/**
 * Update Kafka REST Advanced Options
 *
 * Updates a Kafka REST advanced configuration option for the Managed Database (Kafka engine types only on business plans or higher).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const updateAdvancedOptionsKafkaRest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateAdvancedOptionsKafkaRestInput,
    outputSchema: UpdateAdvancedOptionsKafkaRestOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));

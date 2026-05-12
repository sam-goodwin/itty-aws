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
export const UpdateAdvancedOptionsKafkaConnectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connector_client_config_override_policy: Schema.optional(Schema.String),
    consumer_auto_offset_reset: Schema.optional(Schema.String),
    consumer_fetch_max_bytes: Schema.optional(Schema.Number),
    consumer_isolation_level: Schema.optional(Schema.String),
    consumer_max_partition_fetch_bytes: Schema.optional(Schema.Number),
    consumer_max_poll_interval_ms: Schema.optional(Schema.Number),
    consumer_max_poll_records: Schema.optional(Schema.Number),
    offset_flush_interval_ms: Schema.optional(Schema.Number),
    offset_flush_timeout_ms: Schema.optional(Schema.Number),
    producer_batch_size: Schema.optional(Schema.Number),
    producer_buffer_memory: Schema.optional(Schema.Number),
    producer_compression_type: Schema.optional(
      Schema.Literals(["gzip", "snappy", "lz4", "zstd", "none"]),
    ),
    producer_linger_ms: Schema.optional(Schema.Number),
    producer_max_request_size: Schema.optional(Schema.Number),
    scheduled_rebalance_max_delay_ms: Schema.optional(Schema.Number),
    session_timeout_ms: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/advanced-options/kafka-connect",
    }),
  );
export type UpdateAdvancedOptionsKafkaConnectInput =
  typeof UpdateAdvancedOptionsKafkaConnectInput.Type;

// Output Schema
export const UpdateAdvancedOptionsKafkaConnectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateAdvancedOptionsKafkaConnectOutput =
  typeof UpdateAdvancedOptionsKafkaConnectOutput.Type;

// The operation
/**
 * Update Kafka Connect Advanced Options
 *
 * Updates a Kafka Connect advanced configuration option for the Managed Database (Kafka engine types only on business plans or higher).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const updateAdvancedOptionsKafkaConnect =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateAdvancedOptionsKafkaConnectInput,
    outputSchema: UpdateAdvancedOptionsKafkaConnectOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));

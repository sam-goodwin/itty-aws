import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdateRealtimeConfigInput {
  ref: string;
  private_only?: boolean;
  connection_pool?: number;
  max_concurrent_users?: number;
  max_events_per_second?: number;
  max_bytes_per_second?: number;
  max_channels_per_client?: number;
  max_joins_per_second?: number;
  max_presence_events_per_second?: number;
  max_payload_size_in_kb?: number;
  suspend?: boolean;
  presence_enabled?: boolean;
}
export const V1UpdateRealtimeConfigInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    private_only: Schema.optional(Schema.Boolean),
    connection_pool: Schema.optional(Schema.Number),
    max_concurrent_users: Schema.optional(Schema.Number),
    max_events_per_second: Schema.optional(Schema.Number),
    max_bytes_per_second: Schema.optional(Schema.Number),
    max_channels_per_client: Schema.optional(Schema.Number),
    max_joins_per_second: Schema.optional(Schema.Number),
    max_presence_events_per_second: Schema.optional(Schema.Number),
    max_payload_size_in_kb: Schema.optional(Schema.Number),
    suspend: Schema.optional(Schema.Boolean),
    presence_enabled: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/projects/{ref}/config/realtime" }),
  ) as unknown as Schema.Codec<V1UpdateRealtimeConfigInput>;

// Output Schema
export type V1UpdateRealtimeConfigOutput = void;
export const V1UpdateRealtimeConfigOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1UpdateRealtimeConfigOutput>;

// The operation
/**
 * Updates realtime configuration
 *
 * @param ref - Project ref
 */
export const v1UpdateRealtimeConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdateRealtimeConfigInput,
  outputSchema: V1UpdateRealtimeConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1ShutdownRealtimeInput {
  ref: string;
}
export const V1ShutdownRealtimeInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/config/realtime/shutdown",
    }),
  ) as unknown as Schema.Codec<V1ShutdownRealtimeInput>;

// Output Schema
export type V1ShutdownRealtimeOutput = void;
export const V1ShutdownRealtimeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1ShutdownRealtimeOutput>;

// The operation
/**
 * Shutdowns realtime connections for a project
 *
 * @param ref - Project ref
 */
export const v1ShutdownRealtime = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ShutdownRealtimeInput,
  outputSchema: V1ShutdownRealtimeOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

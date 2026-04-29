import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetV1ComputeServicesVersionsByVersionIdLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionId: Schema.String.pipe(T.PathParam()),
    tail: Schema.optional(Schema.Number),
    from_start: Schema.optional(Schema.Literals(["true", "false"])),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/compute-services/versions/{versionId}/logs",
    }),
  );
export type GetV1ComputeServicesVersionsByVersionIdLogsInput =
  typeof GetV1ComputeServicesVersionsByVersionIdLogsInput.Type;

// Output Schema
export const GetV1ComputeServicesVersionsByVersionIdLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GetV1ComputeServicesVersionsByVersionIdLogsOutput =
  typeof GetV1ComputeServicesVersionsByVersionIdLogsOutput.Type;

// The operation
/**
 * Stream compute version logs via WebSocket
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Upgrades to a WebSocket connection that streams log output for the specified compute version. Each message is a JSON object with `type: "log"` (log text + byte metadata) or `type: "terminal"` (end-of-segment signal with reconnect cursor). The stream ends after 10 minutes; reconnect with the `cursor` query parameter to continue.
 */
export const getV1ComputeServicesVersionsByVersionIdLogs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetV1ComputeServicesVersionsByVersionIdLogsInput,
    outputSchema: GetV1ComputeServicesVersionsByVersionIdLogsOutput,
    errors: [Forbidden, NotFound] as const,
  }));

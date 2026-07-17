import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetActionRunLogsInput {
  ref: string;
  run_id: string;
}
export const V1GetActionRunLogsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/actions/{run_id}/logs" }),
  ) as unknown as Schema.Codec<V1GetActionRunLogsInput>;

// Output Schema
export type V1GetActionRunLogsOutput = void;
export const V1GetActionRunLogsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1GetActionRunLogsOutput>;

// The operation
/**
 * Get the logs of an action run
 *
 * Returns the logs from the specified action run.
 *
 * @param ref - Project ref
 * @param run_id - Action Run ID
 */
export const v1GetActionRunLogs = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetActionRunLogsInput,
  outputSchema: V1GetActionRunLogsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

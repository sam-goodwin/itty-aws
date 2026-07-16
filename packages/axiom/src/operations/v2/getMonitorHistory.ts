import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface GetMonitorHistoryInput {
  id: string;
  startTime: string;
  endTime: string;
}
export const GetMonitorHistoryInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  startTime: Schema.String,
  endTime: Schema.String,
}).pipe(
  T.Http({ method: "GET", path: "/v2/monitors/{id}/history" }),
) as unknown as Schema.Codec<GetMonitorHistoryInput>;

// Output Schema
export type GetMonitorHistoryOutput = ReadonlyArray<{
  checkId: string;
  name: string;
  state: "open" | "closed";
  timestamp: string;
}>;
export const GetMonitorHistoryOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
    checkId: Schema.String,
    name: Schema.String,
    state: Schema.Literals(["open", "closed"]),
    timestamp: Schema.String,
  }),
) as unknown as Schema.Codec<GetMonitorHistoryOutput>;

// The operation
/**
 * Get monitor history
 *
 * @param startTime - Start time (ISO 8601 format) for filtering alert history.
 * @param endTime - End time (ISO 8601 format) for filtering alert history.
 */
export const getMonitorHistory = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetMonitorHistoryInput,
  outputSchema: GetMonitorHistoryOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));

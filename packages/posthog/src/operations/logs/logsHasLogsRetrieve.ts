import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsHasLogsRetrieveInput {
  project_id: string;
}
export const LogsHasLogsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/logs/has_logs/",
    }),
  ) as unknown as Schema.Codec<LogsHasLogsRetrieveInput>;

// Output Schema
export type LogsHasLogsRetrieveOutput = Record<string, unknown>;
export const LogsHasLogsRetrieveOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<LogsHasLogsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsHasLogsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsHasLogsRetrieveInput,
  outputSchema: LogsHasLogsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

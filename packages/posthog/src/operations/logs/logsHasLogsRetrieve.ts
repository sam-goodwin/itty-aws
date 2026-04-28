import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const LogsHasLogsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/logs/has_logs/",
    }),
  );
export type LogsHasLogsRetrieveInput = typeof LogsHasLogsRetrieveInput.Type;

// Output Schema
export const LogsHasLogsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type LogsHasLogsRetrieveOutput = typeof LogsHasLogsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsHasLogsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsHasLogsRetrieveInput,
  outputSchema: LogsHasLogsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

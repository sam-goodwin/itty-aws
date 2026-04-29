import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsExportCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/logs/export/" }),
);
export type LogsExportCreateInput = typeof LogsExportCreateInput.Type;

// Output Schema
export const LogsExportCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
);
export type LogsExportCreateOutput = typeof LogsExportCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsExportCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsExportCreateInput,
  outputSchema: LogsExportCreateOutput,
  errors: [Forbidden, NotFound] as const,
}));

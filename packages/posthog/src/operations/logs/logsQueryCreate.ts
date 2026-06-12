import * as Schema from "effect/Schema";
import {
  SeverityLevelsEnumSchema,
  _LogEntrySchema,
  _LogPropertyFilterSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsQueryCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  query: Schema.optional(
    Schema.Struct({
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      severityLevels: Schema.optional(
        Schema.Array(Schema.suspend(() => SeverityLevelsEnumSchema)),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
      orderBy: Schema.optional(Schema.Literals(["latest", "earliest"])),
      searchTerm: Schema.optional(Schema.String),
      filterGroup: Schema.optional(
        Schema.Array(Schema.suspend(() => _LogPropertyFilterSchema)),
      ),
      limit: Schema.optional(Schema.Number),
      after: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/logs/query/" }),
);
export type LogsQueryCreateInput = typeof LogsQueryCreateInput.Type;

// Output Schema
export const LogsQueryCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => _LogEntrySchema))),
  hasMore: Schema.optional(Schema.Boolean),
  nextCursor: Schema.optional(Schema.NullOr(Schema.String)),
  maxExportableLogs: Schema.optional(Schema.Number),
});
export type LogsQueryCreateOutput = typeof LogsQueryCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsQueryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsQueryCreateInput,
  outputSchema: LogsQueryCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

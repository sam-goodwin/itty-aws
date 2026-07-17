import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsLogsRetrieveInput {
  id: string;
  project_id: string;
  after?: string;
  before?: string;
  instance_id?: string;
  level?: string;
  limit?: number;
  search?: string;
}
export const HogFlowsLogsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
    instance_id: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/logs/",
    }),
  ) as unknown as Schema.Codec<HogFlowsLogsRetrieveInput>;

// Output Schema
export type HogFlowsLogsRetrieveOutput = void;
export const HogFlowsLogsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HogFlowsLogsRetrieveOutput>;

// The operation
/**
 *
 * @param after - Only return entries after this ISO 8601 timestamp.
 * @param before - Only return entries before this ISO 8601 timestamp.
 * @param id - A UUID string identifying this hog flow.
 * @param instance_id - Filter logs to a specific execution instance.
 * @param level - Comma-separated log levels to include, e.g. 'WARN,ERROR'. Valid levels: DEBUG, LOG, INFO, WARN, ERROR.
 * @param limit - Maximum number of log entries to return (1-500, default 50).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Case-insensitive substring search across log messages.
 */
export const hogFlowsLogsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsLogsRetrieveInput,
  outputSchema: HogFlowsLogsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsRunCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    client_query_id: Schema.optional(Schema.Unknown),
    debug: Schema.optional(Schema.Unknown),
    filters_override: Schema.optional(Schema.Unknown),
    limit: Schema.optional(Schema.Unknown),
    offset: Schema.optional(Schema.Unknown),
    refresh: Schema.optional(Schema.Unknown),
    variables: Schema.optional(Schema.Unknown),
    version: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/endpoints/{name}/run/",
    }),
  );
export type EndpointsRunCreateInput = typeof EndpointsRunCreateInput.Type;

// Output Schema
export const EndpointsRunCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    execution_id: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Schema.Unknown)),
    columns: Schema.optional(Schema.Array(Schema.String)),
    hasMore: Schema.optional(Schema.Boolean),
    endpoint_version: Schema.optional(Schema.Number),
  });
export type EndpointsRunCreateOutput = typeof EndpointsRunCreateOutput.Type;

// The operation
/**
 * Execute endpoint with optional materialization. Supports version parameter, runs latest version if not set.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsRunCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsRunCreateInput,
  outputSchema: EndpointsRunCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

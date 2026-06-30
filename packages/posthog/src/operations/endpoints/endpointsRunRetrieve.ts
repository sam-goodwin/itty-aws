import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsRunRetrieveInput {
  name: string;
  project_id: string;
}
export const EndpointsRunRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/endpoints/{name}/run/",
    }),
  ) as unknown as Schema.Codec<EndpointsRunRetrieveInput>;

// Output Schema
export interface EndpointsRunRetrieveOutput {
  name?: string;
  execution_id?: string;
  results?: unknown[];
  columns?: string[];
  hasMore?: boolean;
  endpoint_version?: number;
}
export const EndpointsRunRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    execution_id: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Schema.Unknown)),
    columns: Schema.optional(Schema.Array(Schema.String)),
    hasMore: Schema.optional(Schema.Boolean),
    endpoint_version: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<EndpointsRunRetrieveOutput>;

// The operation
/**
 * Execute endpoint with optional materialization. Supports version parameter, runs latest version if not set.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsRunRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsRunRetrieveInput,
    outputSchema: EndpointsRunRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsRunRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/endpoints/{name}/run/",
    }),
  );
export type EndpointsRunRetrieveInput = typeof EndpointsRunRetrieveInput.Type;

// Output Schema
export const EndpointsRunRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Schema.Unknown)),
    columns: Schema.optional(Schema.Array(Schema.String)),
    hasMore: Schema.optional(Schema.Boolean),
    endpoint_version: Schema.optional(Schema.Number),
  });
export type EndpointsRunRetrieveOutput = typeof EndpointsRunRetrieveOutput.Type;

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

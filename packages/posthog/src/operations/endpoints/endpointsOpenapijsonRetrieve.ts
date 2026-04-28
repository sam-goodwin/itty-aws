import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const EndpointsOpenapijsonRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/endpoints/{name}/openapi.json/",
    }),
  );
export type EndpointsOpenapijsonRetrieveInput =
  typeof EndpointsOpenapijsonRetrieveInput.Type;

// Output Schema
export const EndpointsOpenapijsonRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EndpointsOpenapijsonRetrieveOutput =
  typeof EndpointsOpenapijsonRetrieveOutput.Type;

// The operation
/**
 * Get OpenAPI 3.0 specification for this endpoint. Use this to generate typed SDK clients.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific endpoint version to generate the spec for. Defaults to latest.
 */
export const endpointsOpenapijsonRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsOpenapijsonRetrieveInput,
    outputSchema: EndpointsOpenapijsonRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

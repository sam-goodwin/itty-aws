import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsOpenapiSpecRetrieveInput {
  name: string;
  project_id: string;
  version?: number;
}
export const EndpointsOpenapiSpecRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/endpoints/{name}/openapi.json/",
    }),
  ) as unknown as Schema.Codec<EndpointsOpenapiSpecRetrieveInput>;

// Output Schema
export type EndpointsOpenapiSpecRetrieveOutput = void;
export const EndpointsOpenapiSpecRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsOpenapiSpecRetrieveOutput>;

// The operation
/**
 * Get OpenAPI 3.0 specification for this endpoint. Use this to generate typed SDK clients.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific endpoint version to generate the spec for. Defaults to latest.
 */
export const endpointsOpenapiSpecRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsOpenapiSpecRetrieveInput,
    outputSchema: EndpointsOpenapiSpecRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

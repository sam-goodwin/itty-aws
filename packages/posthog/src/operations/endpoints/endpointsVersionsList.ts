import * as Schema from "effect/Schema";
import { EndpointVersionResponseSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.Number),
    is_active: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/endpoints/{name}/versions/",
    }),
  );
export type EndpointsVersionsListInput = typeof EndpointsVersionsListInput.Type;

// Output Schema
export const EndpointsVersionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => EndpointVersionResponseSchema)),
    ),
  });
export type EndpointsVersionsListOutput =
  typeof EndpointsVersionsListOutput.Type;

// The operation
/**
 * List all versions for an endpoint.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsVersionsListInput,
    outputSchema: EndpointsVersionsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

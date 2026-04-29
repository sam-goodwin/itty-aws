import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsMaterializationStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/endpoints/{name}/materialization_status/",
    }),
  );
export type EndpointsMaterializationStatusRetrieveInput =
  typeof EndpointsMaterializationStatusRetrieveInput.Type;

// Output Schema
export const EndpointsMaterializationStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    status: Schema.optional(Schema.String),
    can_materialize: Schema.Boolean,
    reason: Schema.optional(Schema.NullOr(Schema.String)),
    last_materialized_at: Schema.optional(Schema.NullOr(Schema.String)),
    error: Schema.optional(Schema.String),
    sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
    saved_query_id: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type EndpointsMaterializationStatusRetrieveOutput =
  typeof EndpointsMaterializationStatusRetrieveOutput.Type;

// The operation
/**
 * Get materialization status for an endpoint. Supports ?version=N query param.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsMaterializationStatusRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsMaterializationStatusRetrieveInput,
    outputSchema: EndpointsMaterializationStatusRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));

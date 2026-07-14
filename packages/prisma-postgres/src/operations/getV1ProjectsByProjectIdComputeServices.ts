import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1ProjectsByProjectIdComputeServicesInput {
  projectId: string;
  cursor?: string;
  limit?: number;
}
export const GetV1ProjectsByProjectIdComputeServicesInput =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{projectId}/compute-services",
    }),
  ) as unknown as Schema.Codec<GetV1ProjectsByProjectIdComputeServicesInput>;

// Output Schema
export interface GetV1ProjectsByProjectIdComputeServicesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    region: { id: string; name: string };
    projectId: string;
    branchId: string | null;
    latestVersionId: string | null;
    serviceEndpointDomain: string;
    createdAt: string;
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1ProjectsByProjectIdComputeServicesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        name: Schema.String,
        region: Schema.Struct({
          id: Schema.String,
          name: Schema.String,
        }),
        projectId: Schema.String,
        branchId: Schema.NullOr(Schema.String),
        latestVersionId: Schema.NullOr(Schema.String),
        serviceEndpointDomain: Schema.String,
        createdAt: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<GetV1ProjectsByProjectIdComputeServicesOutput>;

// The operation
/**
 * List compute services for a project
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns all compute services belonging to a project, ordered by creation time (oldest first). Supports cursor-based pagination.
 */
export const getV1ProjectsByProjectIdComputeServices =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1ProjectsByProjectIdComputeServicesInput,
    outputSchema: GetV1ProjectsByProjectIdComputeServicesOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));

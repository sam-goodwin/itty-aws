import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ManagedViewsetsRetrieveInput {
  kind: "revenue_analytics";
  project_id: string;
}
export const ManagedViewsetsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.Literals(["revenue_analytics"]).pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/managed_viewsets/{kind}/",
    }),
  ) as unknown as Schema.Codec<ManagedViewsetsRetrieveInput>;

// Output Schema
export type ManagedViewsetsRetrieveOutput = void;
export const ManagedViewsetsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedViewsetsRetrieveOutput>;

// The operation
/**
 * Get all views associated with a specific managed viewset.
 * GET /api/environments/{team_id}/managed_viewsets/{kind}/
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const managedViewsetsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedViewsetsRetrieveInput,
    outputSchema: ManagedViewsetsRetrieveOutput,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ManagedViewsetsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.Literals(["revenue_analytics"]).pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/managed_viewsets/{kind}/",
    }),
  );
export type ManagedViewsetsRetrieveInput =
  typeof ManagedViewsetsRetrieveInput.Type;

// Output Schema
export const ManagedViewsetsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedViewsetsRetrieveOutput =
  typeof ManagedViewsetsRetrieveOutput.Type;

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

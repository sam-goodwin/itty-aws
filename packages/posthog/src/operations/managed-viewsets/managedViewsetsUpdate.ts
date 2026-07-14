import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ManagedViewsetsUpdateInput {
  kind: "revenue_analytics";
  project_id: string;
}
export const ManagedViewsetsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.Literals(["revenue_analytics"]).pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/managed_viewsets/{kind}/",
    }),
  ) as unknown as Schema.Codec<ManagedViewsetsUpdateInput>;

// Output Schema
export type ManagedViewsetsUpdateOutput = void;
export const ManagedViewsetsUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedViewsetsUpdateOutput>;

// The operation
/**
 * Enable or disable a managed viewset by kind.
 * PUT /api/environments/{team_id}/managed_viewsets/{kind}/ with body {"enabled": true/false}
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const managedViewsetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedViewsetsUpdateInput,
  outputSchema: ManagedViewsetsUpdateOutput,
}));

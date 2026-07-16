import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteDashboardInput {
  uid: string;
}
export const DeleteDashboardInput = /*@__PURE__*/ Schema.Struct({
  uid: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/dashboards/uid/{uid}" }),
) as unknown as Schema.Codec<DeleteDashboardInput>;

// Output Schema
export type DeleteDashboardOutput = void;
export const DeleteDashboardOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteDashboardOutput>;

// The operation
/**
 * Delete dashboard
 *
 * Delete a dashboard by UID.
 */
export const deleteDashboard = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteDashboardInput,
  outputSchema: DeleteDashboardOutput,
  errors: [NotFound] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WarehouseDagListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/warehouse_dag/" }),
);
export type WarehouseDagListInput = typeof WarehouseDagListInput.Type;

// Output Schema
export const WarehouseDagListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WarehouseDagListOutput = typeof WarehouseDagListOutput.Type;

// The operation
/**
 * Return this team's DAG as a set of edges and nodes
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseDagList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WarehouseDagListInput,
  outputSchema: WarehouseDagListOutput,
}));

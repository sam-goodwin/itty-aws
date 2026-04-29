import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const QueryUpgradeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Unknown,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/query/upgrade/",
    }),
  );
export type QueryUpgradeCreateInput = typeof QueryUpgradeCreateInput.Type;

// Output Schema
export const QueryUpgradeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.Unknown,
  });
export type QueryUpgradeCreateOutput = typeof QueryUpgradeCreateOutput.Type;

// The operation
/**
 * Upgrades a query without executing it. Returns a query with all nodes migrated to the latest version.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryUpgradeCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryUpgradeCreateInput,
  outputSchema: QueryUpgradeCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

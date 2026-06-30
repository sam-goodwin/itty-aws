import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AccountsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/accounts/{id}/",
  }),
);
export type AccountsDestroyInput = typeof AccountsDestroyInput.Type;

// Output Schema
export const AccountsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountsDestroyOutput = typeof AccountsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this account.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsDestroyInput,
  outputSchema: AccountsDestroyOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AccountsNotebooksDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/accounts/{account_id}/notebooks/{short_id}/",
    }),
  );
export type AccountsNotebooksDestroyInput =
  typeof AccountsNotebooksDestroyInput.Type;

// Output Schema
export const AccountsNotebooksDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountsNotebooksDestroyOutput =
  typeof AccountsNotebooksDestroyOutput.Type;

// The operation
/**
 *
 * @param account_id - UUID of the parent account.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsNotebooksDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsNotebooksDestroyInput,
    outputSchema: AccountsNotebooksDestroyOutput,
  }),
);

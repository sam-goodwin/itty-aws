import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AccountsDestroyInput {
  id: string;
  project_id: string;
}
export const AccountsDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/accounts/{id}/",
  }),
) as unknown as Schema.Codec<AccountsDestroyInput>;

// Output Schema
export type AccountsDestroyOutput = void;
export const AccountsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this account.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsDestroyInput,
  outputSchema: AccountsDestroyOutput,
}));

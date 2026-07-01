import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteTrafficBudgetInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const DeleteTrafficBudgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{id}",
    }),
  ) as unknown as Schema.Codec<DeleteTrafficBudgetInput>;

// Output Schema
export type DeleteTrafficBudgetOutput = void;
export const DeleteTrafficBudgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteTrafficBudgetOutput>;

// The operation
/**
 * Delete a traffic budget
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The ID of the traffic budget
 */
export const deleteTrafficBudget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteTrafficBudgetInput,
  outputSchema: DeleteTrafficBudgetOutput,
  errors: [Forbidden, NotFound] as const,
}));

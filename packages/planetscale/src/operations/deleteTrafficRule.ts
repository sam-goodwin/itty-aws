import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";
import { Forbidden, NotFound } from "../errors";

// Input Schema
export const DeleteTrafficRuleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    budget_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{budget_id}/rules/{id}",
  }),
);
export type DeleteTrafficRuleInput = typeof DeleteTrafficRuleInput.Type;

// Output Schema
export const DeleteTrafficRuleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteTrafficRuleOutput = typeof DeleteTrafficRuleOutput.Type;

// The operation
/**
 * Delete a traffic rule
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param budget_id - The ID of the traffic budget
 * @param id - The ID of the traffic rule
 */
export const deleteTrafficRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteTrafficRuleInput,
  outputSchema: DeleteTrafficRuleOutput,
  errors: [Forbidden, NotFound] as const,
}));

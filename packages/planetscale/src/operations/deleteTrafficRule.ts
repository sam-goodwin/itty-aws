import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteTrafficRuleInput {
  organization: string;
  database: string;
  branch: string;
  budget_id: string;
  id: string;
}
export const DeleteTrafficRuleInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  budget_id: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{budget_id}/rules/{id}",
  }),
) as unknown as Schema.Codec<DeleteTrafficRuleInput>;

// Output Schema
export type DeleteTrafficRuleOutput = void;
export const DeleteTrafficRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteTrafficRuleOutput>;

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
export const deleteTrafficRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteTrafficRuleInput,
  outputSchema: DeleteTrafficRuleOutput,
  errors: [Forbidden, NotFound] as const,
}));

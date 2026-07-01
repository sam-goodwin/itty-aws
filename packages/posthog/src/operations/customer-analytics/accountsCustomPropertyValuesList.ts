import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AccountsCustomPropertyValuesListInput {
  account_id: string;
  project_id: string;
}
export const AccountsCustomPropertyValuesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/accounts/{account_id}/custom_property_values/",
    }),
  ) as unknown as Schema.Codec<AccountsCustomPropertyValuesListInput>;

// Output Schema
export type AccountsCustomPropertyValuesListOutput = {
  id: string;
  account_id: string;
  definition_id: string;
  value: string | number | boolean;
  created_at: string;
  created_by_id: number | null;
}[];
export const AccountsCustomPropertyValuesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      account_id: Schema.String,
      definition_id: Schema.String,
      value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      created_at: Schema.String,
      created_by_id: Schema.NullOr(Schema.Number),
    }),
  ) as unknown as Schema.Codec<AccountsCustomPropertyValuesListOutput>;

// The operation
/**
 *
 * @param account_id - UUID of the parent account.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsCustomPropertyValuesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountsCustomPropertyValuesListInput,
    outputSchema: AccountsCustomPropertyValuesListOutput,
  }));

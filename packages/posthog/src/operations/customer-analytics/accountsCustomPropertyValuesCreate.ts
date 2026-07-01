import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AccountsCustomPropertyValuesCreateInput {
  account_id: string;
  project_id: string;
  definition: string;
  value: string | number | boolean;
}
export const AccountsCustomPropertyValuesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    definition: Schema.String,
    value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/accounts/{account_id}/custom_property_values/",
    }),
  ) as unknown as Schema.Codec<AccountsCustomPropertyValuesCreateInput>;

// Output Schema
export interface AccountsCustomPropertyValuesCreateOutput {
  id: string;
  account_id: string;
  definition_id: string;
  value: string | number | boolean;
  created_at: string;
  created_by_id: number | null;
}
export const AccountsCustomPropertyValuesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    account_id: Schema.String,
    definition_id: Schema.String,
    value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    created_at: Schema.String,
    created_by_id: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<AccountsCustomPropertyValuesCreateOutput>;

// The operation
/**
 *
 * @param account_id - UUID of the parent account.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsCustomPropertyValuesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountsCustomPropertyValuesCreateInput,
    outputSchema: AccountsCustomPropertyValuesCreateOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AccountsCustomPropertyValuesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/accounts/{account_id}/custom_property_values/",
    }),
  );
export type AccountsCustomPropertyValuesListInput =
  typeof AccountsCustomPropertyValuesListInput.Type;

// Output Schema
export const AccountsCustomPropertyValuesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      account_id: Schema.String,
      definition_id: Schema.String,
      value: Schema.Unknown,
      created_at: Schema.String,
      created_by_id: Schema.NullOr(Schema.Number),
    }),
  );
export type AccountsCustomPropertyValuesListOutput =
  typeof AccountsCustomPropertyValuesListOutput.Type;

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

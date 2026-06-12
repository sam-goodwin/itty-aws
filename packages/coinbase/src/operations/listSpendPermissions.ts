import * as Schema from "effect/Schema";
import { SpendPermissionResponseObjectSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSpendPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/evm/smart-accounts/{address}/spend-permissions/list",
    }),
  );
export type ListSpendPermissionsInput = typeof ListSpendPermissionsInput.Type;

// Output Schema
export const ListSpendPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spendPermissions: Schema.Array(
      Schema.suspend(() => SpendPermissionResponseObjectSchema),
    ),
    nextPageToken: Schema.optional(Schema.String),
  });
export type ListSpendPermissionsOutput = typeof ListSpendPermissionsOutput.Type;

// The operation
/**
 * List spend permissions
 *
 * Lists spend permission for the given smart account address.
 *
 * @param address - The address of the Smart account to list spend permissions for.
 * @param pageSize - The number of spend permissions to return per page.
 * @param pageToken - The token for the next page of spend permissions. Will be empty if there are no more spend permissions to fetch.
 */
export const listSpendPermissions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListSpendPermissionsInput,
    outputSchema: ListSpendPermissionsOutput,
  }),
);

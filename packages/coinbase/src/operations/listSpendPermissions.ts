import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListSpendPermissionsInput {
  address: string;
  pageSize?: number;
  pageToken?: string;
}
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
  ) as unknown as Schema.Codec<ListSpendPermissionsInput>;

// Output Schema
export interface ListSpendPermissionsOutput {
  spendPermissions: {
    permission: {
      account: string;
      spender: string;
      token: string;
      allowance: string;
      period: string;
      start: string;
      end: string;
      salt: string;
      extraData: string;
    };
    permissionHash: string;
    revoked: boolean;
    revokedAt?: string;
    createdAt: string;
    network:
      | "base"
      | "base-sepolia"
      | "ethereum"
      | "ethereum-sepolia"
      | "optimism"
      | "arbitrum"
      | "avalanche"
      | "polygon";
  }[];
  nextPageToken?: string;
}
export const ListSpendPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spendPermissions: Schema.Array(
      Schema.Struct({
        permission: Schema.Struct({
          account: Schema.String,
          spender: Schema.String,
          token: Schema.String,
          allowance: Schema.String,
          period: Schema.String,
          start: Schema.String,
          end: Schema.String,
          salt: Schema.String,
          extraData: Schema.String,
        }),
        permissionHash: Schema.String,
        revoked: Schema.Boolean,
        revokedAt: Schema.optional(Schema.String),
        createdAt: Schema.String,
        network: Schema.Literals([
          "base",
          "base-sepolia",
          "ethereum",
          "ethereum-sepolia",
          "optimism",
          "arbitrum",
          "avalanche",
          "polygon",
        ]),
      }),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListSpendPermissionsOutput>;

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

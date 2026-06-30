import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetFoundationAccountByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v2/accounts/{accountId}" }));
export type GetFoundationAccountByIdInput =
  typeof GetFoundationAccountByIdInput.Type;

// Output Schema
export const GetFoundationAccountByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String,
    type: Schema.Literals(["prime", "business", "cdp"]),
    owner: Schema.String,
    name: Schema.optional(Schema.String),
    createdAt: Schema.String,
    updatedAt: Schema.String,
  });
export type GetFoundationAccountByIdOutput =
  typeof GetFoundationAccountByIdOutput.Type;

// The operation
/**
 * Get account
 *
 * Get an account by its ID.
 *
 * @param accountId - The ID of the account to retrieve.
 */
export const getFoundationAccountById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetFoundationAccountByIdInput,
    outputSchema: GetFoundationAccountByIdOutput,
  }),
);

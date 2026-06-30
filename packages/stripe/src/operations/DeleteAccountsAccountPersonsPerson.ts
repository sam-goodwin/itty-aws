import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteAccountsAccountPersonsPersonInput {
  account: string;
  person: string;
}
export const DeleteAccountsAccountPersonsPersonInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    person: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/accounts/{account}/persons/{person}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteAccountsAccountPersonsPersonInput>;

// Output Schema
export interface DeleteAccountsAccountPersonsPersonOutput {
  deleted: true;
  id: string;
  object: "person";
}
export const DeleteAccountsAccountPersonsPersonOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["person"]),
  }) as unknown as Schema.Codec<DeleteAccountsAccountPersonsPersonOutput>;

// The operation
/**
 * Delete a person
 *
 * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
 */
export const DeleteAccountsAccountPersonsPerson =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAccountsAccountPersonsPersonInput,
    outputSchema: DeleteAccountsAccountPersonsPersonOutput,
  }));

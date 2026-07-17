import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface DeleteCustomersCustomerSourcesIdInput {
  customer: string;
  id: string;
  expand?: string[];
}
export const DeleteCustomersCustomerSourcesIdInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/customers/{customer}/sources/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteCustomersCustomerSourcesIdInput>;

// Output Schema
export type DeleteCustomersCustomerSourcesIdOutput =
  | unknown
  | {
      currency?: string | null;
      deleted: true;
      id: string;
      object: "bank_account";
    }
  | { currency?: string | null; deleted: true; id: string; object: "card" };
export const DeleteCustomersCustomerSourcesIdOutput =
  /*@__PURE__*/ Schema.Union([
    Schema.Unknown,
    Schema.Union([
      Schema.Struct({
        currency: Schema.optional(Schema.NullOr(Schema.String)),
        deleted: Schema.Literals([true]),
        id: Schema.String,
        object: Schema.Literals(["bank_account"]),
      }),
      Schema.Struct({
        currency: Schema.optional(Schema.NullOr(Schema.String)),
        deleted: Schema.Literals([true]),
        id: Schema.String,
        object: Schema.Literals(["card"]),
      }),
    ]),
  ]) as unknown as Schema.Codec<DeleteCustomersCustomerSourcesIdOutput>;

// The operation
/**
 * Delete a customer source
 *
 * <p>Delete a specified source for a given customer.</p>
 */
export const DeleteCustomersCustomerSourcesId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteCustomersCustomerSourcesIdInput,
    outputSchema: DeleteCustomersCustomerSourcesIdOutput,
  }));

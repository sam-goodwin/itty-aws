import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetCustomersCustomerSourcesIdInput {
  customer: string;
  id: string;
  expand?: string;
}
export const GetCustomersCustomerSourcesIdInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/sources/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerSourcesIdInput>;

// Output Schema
export type GetCustomersCustomerSourcesIdOutput = unknown;
export const GetCustomersCustomerSourcesIdOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetCustomersCustomerSourcesIdOutput>;

// The operation
/**
 * <p>Retrieve a specified source for a given customer.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomerSourcesId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerSourcesIdInput,
    outputSchema: GetCustomersCustomerSourcesIdOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCustomersCustomerSourcesIdInput {
  customer: string;
  id: string;
  account_holder_name?: string;
  account_holder_type?: "company" | "individual";
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  exp_month?: string;
  exp_year?: string;
  expand?: string[];
  metadata?: Record<string, string> | "";
  name?: string;
  owner?: {
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    email?: string;
    name?: string;
    phone?: string;
  };
}
export const PostCustomersCustomerSourcesIdInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    account_holder_name: Schema.optional(Schema.String),
    account_holder_type: Schema.optional(
      Schema.Literals(["company", "individual"]),
    ),
    address_city: Schema.optional(Schema.String),
    address_country: Schema.optional(Schema.String),
    address_line1: Schema.optional(Schema.String),
    address_line2: Schema.optional(Schema.String),
    address_state: Schema.optional(Schema.String),
    address_zip: Schema.optional(Schema.String),
    exp_month: Schema.optional(Schema.String),
    exp_year: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    name: Schema.optional(Schema.String),
    owner: Schema.optional(
      Schema.Struct({
        address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
        ),
        email: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        phone: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/{customer}/sources/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCustomersCustomerSourcesIdInput>;

// Output Schema
export type PostCustomersCustomerSourcesIdOutput = unknown;
export const PostCustomersCustomerSourcesIdOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PostCustomersCustomerSourcesIdOutput>;

// The operation
/**
 * <p>Update a specified source for a given customer.</p>
 */
export const PostCustomersCustomerSourcesId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostCustomersCustomerSourcesIdInput,
    outputSchema: PostCustomersCustomerSourcesIdOutput,
  }));

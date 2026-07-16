import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetAccountsAccountExternalAccountsInput {
  account: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  object?: "bank_account" | "card";
  starting_after?: string;
}
export const GetAccountsAccountExternalAccountsInput =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    object: Schema.optional(Schema.Literals(["bank_account", "card"])),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}/external_accounts",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetAccountsAccountExternalAccountsInput>;

// Output Schema
export interface GetAccountsAccountExternalAccountsOutput {
  data: (
    | {
        account?: unknown;
        account_holder_name: string | null;
        account_holder_type: string | null;
        account_type: string | null;
        available_payout_methods?: ("instant" | "standard")[] | null;
        bank_name: string | null;
        country: string;
        currency: string;
        customer?: unknown;
        default_for_currency?: boolean | null;
        fingerprint: string | null;
        future_requirements?: unknown;
        id: string;
        last4: string;
        metadata?: Record<string, string> | null;
        object: "bank_account";
        requirements?: unknown;
        routing_number: string | null;
        status: string;
      }
    | {
        account?: unknown;
        address_city: string | null;
        address_country: string | null;
        address_line1: string | null;
        address_line1_check: string | null;
        address_line2: string | null;
        address_state: string | null;
        address_zip: string | null;
        address_zip_check: string | null;
        allow_redisplay?: "always" | "limited" | "unspecified" | null;
        available_payout_methods?: ("instant" | "standard")[] | null;
        brand: string;
        country: string | null;
        currency?: string | null;
        customer?: unknown;
        cvc_check: string | null;
        default_for_currency?: boolean | null;
        description?: string;
        dynamic_last4: string | null;
        exp_month: number;
        exp_year: number;
        fingerprint?: string | null;
        funding: string;
        id: string;
        iin?: string;
        issuer?: string;
        last4: string;
        metadata: Record<string, string> | null;
        name: string | null;
        networks?: { preferred: string | null };
        object: "card";
        regulated_status: "regulated" | "unregulated" | null;
        status?: string | null;
        tokenization_method: string | null;
      }
  )[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetAccountsAccountExternalAccountsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Union([
        Schema.Struct({
          account: Schema.optional(Schema.Unknown),
          account_holder_name: Schema.NullOr(Schema.String),
          account_holder_type: Schema.NullOr(Schema.String),
          account_type: Schema.NullOr(Schema.String),
          available_payout_methods: Schema.optional(
            Schema.NullOr(
              Schema.Array(Schema.Literals(["instant", "standard"])),
            ),
          ),
          bank_name: Schema.NullOr(Schema.String),
          country: Schema.String,
          currency: Schema.String,
          customer: Schema.optional(Schema.Unknown),
          default_for_currency: Schema.optional(Schema.NullOr(Schema.Boolean)),
          fingerprint: Schema.NullOr(Schema.String),
          future_requirements: Schema.optional(Schema.Unknown),
          id: Schema.String,
          last4: Schema.String,
          metadata: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          ),
          object: Schema.Literals(["bank_account"]),
          requirements: Schema.optional(Schema.Unknown),
          routing_number: Schema.NullOr(Schema.String),
          status: Schema.String,
        }),
        Schema.Struct({
          account: Schema.optional(Schema.Unknown),
          address_city: Schema.NullOr(Schema.String),
          address_country: Schema.NullOr(Schema.String),
          address_line1: Schema.NullOr(Schema.String),
          address_line1_check: Schema.NullOr(Schema.String),
          address_line2: Schema.NullOr(Schema.String),
          address_state: Schema.NullOr(Schema.String),
          address_zip: Schema.NullOr(Schema.String),
          address_zip_check: Schema.NullOr(Schema.String),
          allow_redisplay: Schema.optional(
            Schema.NullOr(
              Schema.Literals(["always", "limited", "unspecified"]),
            ),
          ),
          available_payout_methods: Schema.optional(
            Schema.NullOr(
              Schema.Array(Schema.Literals(["instant", "standard"])),
            ),
          ),
          brand: Schema.String,
          country: Schema.NullOr(Schema.String),
          currency: Schema.optional(Schema.NullOr(Schema.String)),
          customer: Schema.optional(Schema.Unknown),
          cvc_check: Schema.NullOr(Schema.String),
          default_for_currency: Schema.optional(Schema.NullOr(Schema.Boolean)),
          description: Schema.optional(Schema.String),
          dynamic_last4: Schema.NullOr(Schema.String),
          exp_month: Schema.Number,
          exp_year: Schema.Number,
          fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
          funding: Schema.String,
          id: Schema.String,
          iin: Schema.optional(Schema.String),
          issuer: Schema.optional(Schema.String),
          last4: Schema.String,
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          name: Schema.NullOr(Schema.String),
          networks: Schema.optional(
            Schema.Struct({
              preferred: Schema.NullOr(Schema.String),
            }),
          ),
          object: Schema.Literals(["card"]),
          regulated_status: Schema.NullOr(
            Schema.Literals(["regulated", "unregulated"]),
          ),
          status: Schema.optional(Schema.NullOr(Schema.String)),
          tokenization_method: Schema.NullOr(Schema.String),
        }),
      ]),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetAccountsAccountExternalAccountsOutput>;

// The operation
/**
 * List all external accounts
 *
 * <p>List external accounts for an account.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param object - Filter external accounts according to a particular object type.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetAccountsAccountExternalAccounts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetAccountsAccountExternalAccountsInput,
    outputSchema: GetAccountsAccountExternalAccountsOutput,
  }));

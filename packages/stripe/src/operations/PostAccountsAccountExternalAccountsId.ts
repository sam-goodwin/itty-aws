import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostAccountsAccountExternalAccountsIdInput {
  account: string;
  id: string;
  account_holder_name?: string;
  account_holder_type?: "" | "company" | "individual";
  account_type?: "checking" | "futsu" | "savings" | "toza";
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  default_for_currency?: boolean;
  documents?: { bank_account_ownership_verification?: { files?: string[] } };
  exp_month?: string;
  exp_year?: string;
  expand?: string[];
  metadata?: Record<string, string> | "";
  name?: string;
}
export const PostAccountsAccountExternalAccountsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    account_holder_name: Schema.optional(Schema.String),
    account_holder_type: Schema.optional(
      Schema.Literals(["", "company", "individual"]),
    ),
    account_type: Schema.optional(
      Schema.Literals(["checking", "futsu", "savings", "toza"]),
    ),
    address_city: Schema.optional(Schema.String),
    address_country: Schema.optional(Schema.String),
    address_line1: Schema.optional(Schema.String),
    address_line2: Schema.optional(Schema.String),
    address_state: Schema.optional(Schema.String),
    address_zip: Schema.optional(Schema.String),
    default_for_currency: Schema.optional(Schema.Boolean),
    documents: Schema.optional(
      Schema.Struct({
        bank_account_ownership_verification: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/accounts/{account}/external_accounts/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostAccountsAccountExternalAccountsIdInput>;

// Output Schema
export type PostAccountsAccountExternalAccountsIdOutput =
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
    };
export const PostAccountsAccountExternalAccountsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      account: Schema.optional(Schema.Unknown),
      account_holder_name: Schema.NullOr(Schema.String),
      account_holder_type: Schema.NullOr(Schema.String),
      account_type: Schema.NullOr(Schema.String),
      available_payout_methods: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.Literals(["instant", "standard"]))),
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
        Schema.NullOr(Schema.Literals(["always", "limited", "unspecified"])),
      ),
      available_payout_methods: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.Literals(["instant", "standard"]))),
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
  ]) as unknown as Schema.Codec<PostAccountsAccountExternalAccountsIdOutput>;

// The operation
/**
 * <p>Updates the metadata, account holder name, account holder type of a bank account belonging to
 * a connected account and optionally sets it as the default for its currency. Other bank account
 * details are not editable by design.</p>
 * <p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>
 * <p>You can re-enable a disabled bank account by performing an update call without providing any
 * arguments or changes.</p>
 */
export const PostAccountsAccountExternalAccountsId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostAccountsAccountExternalAccountsIdInput,
    outputSchema: PostAccountsAccountExternalAccountsIdOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostRadarValueListsInput {
  alias: string;
  expand?: string[];
  item_type?:
    | "account"
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "crypto_fingerprint"
    | "customer_id"
    | "email"
    | "ip_address"
    | "sepa_debit_fingerprint"
    | "string"
    | "us_bank_account_fingerprint";
  metadata?: Record<string, string>;
  name: string;
}
export const PostRadarValueListsInput =
  /*@__PURE__*/ Schema.Struct({
    alias: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
    item_type: Schema.optional(
      Schema.Literals([
        "account",
        "card_bin",
        "card_fingerprint",
        "case_sensitive_string",
        "country",
        "crypto_fingerprint",
        "customer_id",
        "email",
        "ip_address",
        "sepa_debit_fingerprint",
        "string",
        "us_bank_account_fingerprint",
      ]),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/radar/value_lists",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostRadarValueListsInput>;

// Output Schema
export interface PostRadarValueListsOutput {
  alias: string;
  created: number;
  created_by: string;
  id: string;
  item_type:
    | "account"
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "crypto_fingerprint"
    | "customer_id"
    | "email"
    | "ip_address"
    | "sepa_debit_fingerprint"
    | "string"
    | "us_bank_account_fingerprint";
  list_items: {
    data: {
      created: number;
      created_by: string;
      id: string;
      livemode: boolean;
      object: "radar.value_list_item";
      value: string;
      value_list: string;
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  metadata: Record<string, string>;
  name: string;
  object: "radar.value_list";
}
export const PostRadarValueListsOutput =
  /*@__PURE__*/ Schema.Struct({
    alias: Schema.String,
    created: Schema.Number,
    created_by: Schema.String,
    id: Schema.String,
    item_type: Schema.Literals([
      "account",
      "card_bin",
      "card_fingerprint",
      "case_sensitive_string",
      "country",
      "crypto_fingerprint",
      "customer_id",
      "email",
      "ip_address",
      "sepa_debit_fingerprint",
      "string",
      "us_bank_account_fingerprint",
    ]),
    list_items: Schema.Struct({
      data: Schema.Array(
        Schema.Struct({
          created: Schema.Number,
          created_by: Schema.String,
          id: Schema.String,
          livemode: Schema.Boolean,
          object: Schema.Literals(["radar.value_list_item"]),
          value: Schema.String,
          value_list: Schema.String,
        }),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["radar.value_list"]),
  }) as unknown as Schema.Codec<PostRadarValueListsOutput>;

// The operation
/**
 * Create a value list
 *
 * <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>
 */
export const PostRadarValueLists = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostRadarValueListsInput,
  outputSchema: PostRadarValueListsOutput,
}));

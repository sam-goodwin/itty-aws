import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostV2CoreAccountLinksInput {
  account: string;
  use_case: {
    account_onboarding?: {
      collection_options?: {
        fields?: "currently_due" | "eventually_due";
        future_requirements?: "include" | "omit";
      };
      configurations: ("customer" | "merchant" | "recipient")[];
      refresh_url: string;
      return_url?: string;
    };
    account_update?: {
      collection_options?: {
        fields?: "currently_due" | "eventually_due";
        future_requirements?: "include" | "omit";
      };
      configurations: ("customer" | "merchant" | "recipient")[];
      refresh_url: string;
      return_url?: string;
    };
    type: "account_onboarding" | "account_update";
  };
}
export const PostV2CoreAccountLinksInput =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.String,
    use_case: Schema.Struct({
      account_onboarding: Schema.optional(
        Schema.Struct({
          collection_options: Schema.optional(
            Schema.Struct({
              fields: Schema.optional(
                Schema.Literals(["currently_due", "eventually_due"]),
              ),
              future_requirements: Schema.optional(
                Schema.Literals(["include", "omit"]),
              ),
            }),
          ),
          configurations: Schema.Array(
            Schema.Literals(["customer", "merchant", "recipient"]),
          ),
          refresh_url: Schema.String,
          return_url: Schema.optional(Schema.String),
        }),
      ),
      account_update: Schema.optional(
        Schema.Struct({
          collection_options: Schema.optional(
            Schema.Struct({
              fields: Schema.optional(
                Schema.Literals(["currently_due", "eventually_due"]),
              ),
              future_requirements: Schema.optional(
                Schema.Literals(["include", "omit"]),
              ),
            }),
          ),
          configurations: Schema.Array(
            Schema.Literals(["customer", "merchant", "recipient"]),
          ),
          refresh_url: Schema.String,
          return_url: Schema.optional(Schema.String),
        }),
      ),
      type: Schema.Literals(["account_onboarding", "account_update"]),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/core/account_links" }),
  ) as unknown as Schema.Codec<PostV2CoreAccountLinksInput>;

// Output Schema
export interface PostV2CoreAccountLinksOutput {
  account: string;
  created: string;
  expires_at: string;
  livemode: boolean;
  object: "v2.core.account_link";
  url: string;
  use_case: {
    account_onboarding?: {
      collection_options?: {
        fields?: "currently_due" | "eventually_due";
        future_requirements?: "include" | "omit";
      };
      configurations: ("customer" | "merchant" | "recipient")[];
      refresh_url: string;
      return_url?: string;
    };
    account_update?: {
      collection_options?: {
        fields?: "currently_due" | "eventually_due";
        future_requirements?: "include" | "omit";
      };
      configurations: ("customer" | "merchant" | "recipient")[];
      refresh_url: string;
      return_url?: string;
    };
    type: "account_onboarding" | "account_update";
  };
}
export const PostV2CoreAccountLinksOutput =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.String,
    created: Schema.String,
    expires_at: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["v2.core.account_link"]),
    url: Schema.String,
    use_case: Schema.Struct({
      account_onboarding: Schema.optional(
        Schema.Struct({
          collection_options: Schema.optional(
            Schema.Struct({
              fields: Schema.optional(
                Schema.Literals(["currently_due", "eventually_due"]),
              ),
              future_requirements: Schema.optional(
                Schema.Literals(["include", "omit"]),
              ),
            }),
          ),
          configurations: Schema.Array(
            Schema.Literals(["customer", "merchant", "recipient"]),
          ),
          refresh_url: Schema.String,
          return_url: Schema.optional(Schema.String),
        }),
      ),
      account_update: Schema.optional(
        Schema.Struct({
          collection_options: Schema.optional(
            Schema.Struct({
              fields: Schema.optional(
                Schema.Literals(["currently_due", "eventually_due"]),
              ),
              future_requirements: Schema.optional(
                Schema.Literals(["include", "omit"]),
              ),
            }),
          ),
          configurations: Schema.Array(
            Schema.Literals(["customer", "merchant", "recipient"]),
          ),
          refresh_url: Schema.String,
          return_url: Schema.optional(Schema.String),
        }),
      ),
      type: Schema.Literals(["account_onboarding", "account_update"]),
    }),
  }) as unknown as Schema.Codec<PostV2CoreAccountLinksOutput>;

// The operation
/**
 * Create an account link
 *
 * Creates an AccountLink object that includes a single-use URL that an account can use to access a Stripe-hosted flow for collecting or updating required information.
 */
export const PostV2CoreAccountLinks = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV2CoreAccountLinksInput,
  outputSchema: PostV2CoreAccountLinksOutput,
}));

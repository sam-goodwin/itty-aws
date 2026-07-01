import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCustomerSessionsInput {
  components: {
    buy_button?: { enabled: boolean };
    customer_sheet?: {
      enabled: boolean;
      features?: {
        payment_method_allow_redisplay_filters?: (
          | "always"
          | "limited"
          | "unspecified"
        )[];
        payment_method_remove?: "disabled" | "enabled";
      };
    };
    mobile_payment_element?: {
      enabled: boolean;
      features?: {
        payment_method_allow_redisplay_filters?: (
          | "always"
          | "limited"
          | "unspecified"
        )[];
        payment_method_redisplay?: "disabled" | "enabled";
        payment_method_remove?: "disabled" | "enabled";
        payment_method_save?: "disabled" | "enabled";
        payment_method_save_allow_redisplay_override?:
          | "always"
          | "limited"
          | "unspecified";
      };
    };
    payment_element?: {
      enabled: boolean;
      features?: {
        payment_method_allow_redisplay_filters?: (
          | "always"
          | "limited"
          | "unspecified"
        )[];
        payment_method_redisplay?: "disabled" | "enabled";
        payment_method_redisplay_limit?: number;
        payment_method_remove?: "disabled" | "enabled";
        payment_method_save?: "disabled" | "enabled";
        payment_method_save_usage?: "off_session" | "on_session";
      };
    };
    pricing_table?: { enabled: boolean };
  };
  customer?: string;
  customer_account?: string;
  expand?: string[];
}
export const PostCustomerSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    components: Schema.Struct({
      buy_button: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
        }),
      ),
      customer_sheet: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              payment_method_allow_redisplay_filters: Schema.optional(
                Schema.Array(
                  Schema.Literals(["always", "limited", "unspecified"]),
                ),
              ),
              payment_method_remove: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
            }),
          ),
        }),
      ),
      mobile_payment_element: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              payment_method_allow_redisplay_filters: Schema.optional(
                Schema.Array(
                  Schema.Literals(["always", "limited", "unspecified"]),
                ),
              ),
              payment_method_redisplay: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_remove: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_save: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_save_allow_redisplay_override: Schema.optional(
                Schema.Literals(["always", "limited", "unspecified"]),
              ),
            }),
          ),
        }),
      ),
      payment_element: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              payment_method_allow_redisplay_filters: Schema.optional(
                Schema.Array(
                  Schema.Literals(["always", "limited", "unspecified"]),
                ),
              ),
              payment_method_redisplay: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_redisplay_limit: Schema.optional(Schema.Number),
              payment_method_remove: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_save: Schema.optional(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_save_usage: Schema.optional(
                Schema.Literals(["off_session", "on_session"]),
              ),
            }),
          ),
        }),
      ),
      pricing_table: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
        }),
      ),
    }),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer_sessions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCustomerSessionsInput>;

// Output Schema
export interface PostCustomerSessionsOutput {
  client_secret: Redacted.Redacted<string>;
  components?: {
    buy_button: { enabled: boolean };
    customer_sheet: {
      enabled: boolean;
      features: {
        payment_method_allow_redisplay_filters:
          | ("always" | "limited" | "unspecified")[]
          | null;
        payment_method_remove: "disabled" | "enabled" | null;
      } | null;
    };
    mobile_payment_element: {
      enabled: boolean;
      features: {
        payment_method_allow_redisplay_filters:
          | ("always" | "limited" | "unspecified")[]
          | null;
        payment_method_redisplay: "disabled" | "enabled" | null;
        payment_method_remove: "disabled" | "enabled" | null;
        payment_method_save: "disabled" | "enabled" | null;
        payment_method_save_allow_redisplay_override:
          | "always"
          | "limited"
          | "unspecified"
          | null;
      } | null;
    };
    payment_element: {
      enabled: boolean;
      features: {
        payment_method_allow_redisplay_filters: (
          | "always"
          | "limited"
          | "unspecified"
        )[];
        payment_method_redisplay: "disabled" | "enabled";
        payment_method_redisplay_limit: number | null;
        payment_method_remove: "disabled" | "enabled";
        payment_method_save: "disabled" | "enabled";
        payment_method_save_usage: "off_session" | "on_session" | null;
      } | null;
    };
    pricing_table: { enabled: boolean };
  };
  created: number;
  customer: unknown;
  customer_account: string | null;
  expires_at: number;
  livemode: boolean;
  object: "customer_session";
}
export const PostCustomerSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_secret: SensitiveOutputString,
    components: Schema.optional(
      Schema.Struct({
        buy_button: Schema.Struct({
          enabled: Schema.Boolean,
        }),
        customer_sheet: Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.NullOr(
            Schema.Struct({
              payment_method_allow_redisplay_filters: Schema.NullOr(
                Schema.Array(
                  Schema.Literals(["always", "limited", "unspecified"]),
                ),
              ),
              payment_method_remove: Schema.NullOr(
                Schema.Literals(["disabled", "enabled"]),
              ),
            }),
          ),
        }),
        mobile_payment_element: Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.NullOr(
            Schema.Struct({
              payment_method_allow_redisplay_filters: Schema.NullOr(
                Schema.Array(
                  Schema.Literals(["always", "limited", "unspecified"]),
                ),
              ),
              payment_method_redisplay: Schema.NullOr(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_remove: Schema.NullOr(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_save: Schema.NullOr(
                Schema.Literals(["disabled", "enabled"]),
              ),
              payment_method_save_allow_redisplay_override: Schema.NullOr(
                Schema.Literals(["always", "limited", "unspecified"]),
              ),
            }),
          ),
        }),
        payment_element: Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.NullOr(
            Schema.Struct({
              payment_method_allow_redisplay_filters: Schema.Array(
                Schema.Literals(["always", "limited", "unspecified"]),
              ),
              payment_method_redisplay: Schema.Literals([
                "disabled",
                "enabled",
              ]),
              payment_method_redisplay_limit: Schema.NullOr(Schema.Number),
              payment_method_remove: Schema.Literals(["disabled", "enabled"]),
              payment_method_save: Schema.Literals(["disabled", "enabled"]),
              payment_method_save_usage: Schema.NullOr(
                Schema.Literals(["off_session", "on_session"]),
              ),
            }),
          ),
        }),
        pricing_table: Schema.Struct({
          enabled: Schema.Boolean,
        }),
      }),
    ),
    created: Schema.Number,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    expires_at: Schema.Number,
    livemode: Schema.Boolean,
    object: Schema.Literals(["customer_session"]),
  }) as unknown as Schema.Codec<PostCustomerSessionsOutput>;

// The operation
/**
 * Create a Customer Session
 *
 * <p>Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.</p>
 */
export const PostCustomerSessions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostCustomerSessionsInput,
    outputSchema: PostCustomerSessionsOutput,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostApplePayDomainsInput {
  domain_name: string;
  expand?: string[];
}
export const PostApplePayDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain_name: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/apple_pay/domains",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostApplePayDomainsInput>;

// Output Schema
export interface PostApplePayDomainsOutput {
  created: number;
  domain_name: string;
  id: string;
  livemode: boolean;
  object: "apple_pay_domain";
}
export const PostApplePayDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    domain_name: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["apple_pay_domain"]),
  }) as unknown as Schema.Codec<PostApplePayDomainsOutput>;

// The operation
/**
 * <p>Create an apple pay domain.</p>
 */
export const PostApplePayDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostApplePayDomainsInput,
  outputSchema: PostApplePayDomainsOutput,
}));

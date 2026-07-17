import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetApplePayDomainsDomainInput {
  domain: string;
  expand?: string;
}
export const GetApplePayDomainsDomainInput =
  /*@__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/apple_pay/domains/{domain}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetApplePayDomainsDomainInput>;

// Output Schema
export interface GetApplePayDomainsDomainOutput {
  created: number;
  domain_name: string;
  id: string;
  livemode: boolean;
  object: "apple_pay_domain";
}
export const GetApplePayDomainsDomainOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.Number,
    domain_name: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["apple_pay_domain"]),
  }) as unknown as Schema.Codec<GetApplePayDomainsDomainOutput>;

// The operation
/**
 * <p>Retrieve an apple pay domain.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetApplePayDomainsDomain = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetApplePayDomainsDomainInput,
  outputSchema: GetApplePayDomainsDomainOutput,
}));

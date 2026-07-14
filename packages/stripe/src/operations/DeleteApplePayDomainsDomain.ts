import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteApplePayDomainsDomainInput {
  domain: string;
}
export const DeleteApplePayDomainsDomainInput =
  /*@__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/apple_pay/domains/{domain}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteApplePayDomainsDomainInput>;

// Output Schema
export interface DeleteApplePayDomainsDomainOutput {
  deleted: true;
  id: string;
  object: "apple_pay_domain";
}
export const DeleteApplePayDomainsDomainOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["apple_pay_domain"]),
  }) as unknown as Schema.Codec<DeleteApplePayDomainsDomainOutput>;

// The operation
/**
 * <p>Delete an apple pay domain.</p>
 */
export const DeleteApplePayDomainsDomain = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteApplePayDomainsDomainInput,
  outputSchema: DeleteApplePayDomainsDomainOutput,
}));

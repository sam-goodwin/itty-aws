import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const VerifyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.optional(Schema.String),
  proxy_url: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/proxy_checks" }));
export type VerifyInput = typeof VerifyInput.Type;

// Output Schema
export const VerifyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["proxy_check"]),
  id: Schema.String,
  domain_id: Schema.String,
  last_run_at: Schema.NullOr(Schema.Number),
  proxy_url: Schema.String,
  successful: Schema.Boolean,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type VerifyOutput = typeof VerifyOutput.Type;

// The operation
/**
 * Verify the proxy configuration for your domain
 *
 * This endpoint can be used to validate that a proxy-enabled domain is operational.
 * It tries to verify that the proxy URL provided in the parameters maps to a functional proxy that can reach the Clerk Frontend API.
 * You can use this endpoint before you set a proxy URL for a domain. This way you can ensure that switching to proxy-based
 * configuration will not lead to downtime for your instance.
 * The `proxy_url` parameter allows for testing proxy configurations for domains that don't have a proxy URL yet, or operate on
 * a different proxy URL than the one provided. It can also be used to re-validate a domain that is already configured to work with a proxy.
 */
export const verify = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyInput,
  outputSchema: VerifyOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));

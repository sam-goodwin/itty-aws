import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ChangeProductionInstanceDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    home_url: Schema.optional(Schema.String),
    is_secondary: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/instance/change_domain" }));
export type ChangeProductionInstanceDomainInput =
  typeof ChangeProductionInstanceDomainInput.Type;

// Output Schema
export const ChangeProductionInstanceDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ChangeProductionInstanceDomainOutput =
  typeof ChangeProductionInstanceDomainOutput.Type;

// The operation
/**
 * Update production instance domain
 *
 * Change the domain of a production instance.
 * Changing the domain requires updating the [DNS records](https://clerk.com/docs/deployments/overview#dns-records) accordingly, deploying new [SSL certificates](https://clerk.com/docs/deployments/overview#deploy-certificates), updating your Social Connection's redirect URLs and setting the new keys in your code.
 * WARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out). Also, while your application is being deployed, a small downtime is expected to occur.
 */
export const ChangeProductionInstanceDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ChangeProductionInstanceDomainInput,
    outputSchema: ChangeProductionInstanceDomainOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));

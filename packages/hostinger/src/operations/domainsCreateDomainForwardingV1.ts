import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DomainsCreateDomainForwardingV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
    redirect_type: Schema.Literals(["301", "302"]),
    redirect_url: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/api/domains/v1/forwarding" }));
export type DomainsCreateDomainForwardingV1Input =
  typeof DomainsCreateDomainForwardingV1Input.Type;

// Output Schema
export const DomainsCreateDomainForwardingV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.NullOr(Schema.String)),
    redirect_type: Schema.optional(Schema.Literals(["301", "302"])),
    redirect_url: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type DomainsCreateDomainForwardingV1Output =
  typeof DomainsCreateDomainForwardingV1Output.Type;

// The operation
/**
 * Create domain forwarding
 *
 * Create domain forwarding configuration.
 * Use this endpoint to set up domain redirects to other URLs.
 */
export const domainsCreateDomainForwardingV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsCreateDomainForwardingV1Input,
    outputSchema: DomainsCreateDomainForwardingV1Output,
    errors: [UnprocessableEntity] as const,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateDnsDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.String,
  ip: Schema.optional(Schema.String),
  dns_sec: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/domains" }));
export type CreateDnsDomainInput = typeof CreateDnsDomainInput.Type;

// Output Schema
export const CreateDnsDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(
    Schema.Struct({
      domain: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      dns_sec: Schema.optional(Schema.String),
    }),
  ),
});
export type CreateDnsDomainOutput = typeof CreateDnsDomainOutput.Type;

// The operation
/**
 * Create DNS Domain
 *
 * Create a DNS Domain for `domain`. If no `ip` address is supplied a domain with no records will be created.
 */
export const createDnsDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDnsDomainInput,
  outputSchema: CreateDnsDomainOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DNSResetDNSRecordsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    sync: Schema.optional(Schema.Boolean),
    reset_email_records: Schema.optional(Schema.Boolean),
    whitelisted_record_types: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/api/dns/v1/zones/{domain}/reset" }));
export type DNSResetDNSRecordsV1Input = typeof DNSResetDNSRecordsV1Input.Type;

// Output Schema
export const DNSResetDNSRecordsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DNSResetDNSRecordsV1Output = typeof DNSResetDNSRecordsV1Output.Type;

// The operation
/**
 * Reset DNS records
 *
 * Reset DNS zone to the default records.
 * Use this endpoint to restore domain DNS to original configuration.
 *
 * @param domain - Domain name
 */
export const DNSResetDNSRecordsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DNSResetDNSRecordsV1Input,
    outputSchema: DNSResetDNSRecordsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);

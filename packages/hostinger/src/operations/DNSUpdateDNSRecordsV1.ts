import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DNSUpdateDNSRecordsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    overwrite: Schema.optional(Schema.Boolean),
    zone: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        records: Schema.Array(
          Schema.Struct({
            content: Schema.String,
          }),
        ),
        ttl: Schema.optional(Schema.Number),
        type: Schema.Literals([
          "A",
          "AAAA",
          "CNAME",
          "ALIAS",
          "MX",
          "TXT",
          "NS",
          "SOA",
          "SRV",
          "CAA",
        ]),
      }),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/api/dns/v1/zones/{domain}" }));
export type DNSUpdateDNSRecordsV1Input = typeof DNSUpdateDNSRecordsV1Input.Type;

// Output Schema
export const DNSUpdateDNSRecordsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DNSUpdateDNSRecordsV1Output =
  typeof DNSUpdateDNSRecordsV1Output.Type;

// The operation
/**
 * Update DNS records
 *
 * Update DNS records for the selected domain.
 * Using `overwrite = true` will replace existing records with the provided ones.
 * Otherwise existing records will be updated and new records will be added.
 * Use this endpoint to modify domain DNS configuration.
 *
 * @param domain - Domain name
 */
export const DNSUpdateDNSRecordsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DNSUpdateDNSRecordsV1Input,
    outputSchema: DNSUpdateDNSRecordsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);

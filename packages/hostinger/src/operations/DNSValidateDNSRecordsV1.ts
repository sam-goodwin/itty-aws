import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DNSValidateDNSRecordsV1Input =
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
  }).pipe(
    T.Http({ method: "POST", path: "/api/dns/v1/zones/{domain}/validate" }),
  );
export type DNSValidateDNSRecordsV1Input =
  typeof DNSValidateDNSRecordsV1Input.Type;

// Output Schema
export const DNSValidateDNSRecordsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DNSValidateDNSRecordsV1Output =
  typeof DNSValidateDNSRecordsV1Output.Type;

// The operation
/**
 * Validate DNS records
 *
 * Validate DNS records prior to update for the selected domain.
 * If the validation is successful, the response will contain `200 Success` code.
 * If there is validation error, the response will fail with `422 Validation error` code.
 * Use this endpoint to verify DNS record validity before applying changes.
 *
 * @param domain - Domain name
 */
export const DNSValidateDNSRecordsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DNSValidateDNSRecordsV1Input,
    outputSchema: DNSValidateDNSRecordsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);

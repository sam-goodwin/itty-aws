import * as Schema from "effect/Schema";
import {
  CertificateEntrySchema,
  CertificateValidationErrorSchema,
  CertificateValidationSchema,
  DNSRecordsSchema,
  DNSRequirementsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AppCertificatesCheckInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    hostname: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apps/{app_name}/certificates/{hostname}/check",
    }),
  );
export type AppCertificatesCheckInput = typeof AppCertificatesCheckInput.Type;

// Output Schema
export const AppCertificatesCheckOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acme_requested: Schema.optional(Schema.Boolean),
    certificates: Schema.optional(
      Schema.Array(Schema.suspend(() => CertificateEntrySchema)),
    ),
    configured: Schema.optional(Schema.Boolean),
    dns_provider: Schema.optional(Schema.String),
    dns_records: Schema.optional(Schema.suspend(() => DNSRecordsSchema)),
    dns_requirements: Schema.optional(
      Schema.suspend(() => DNSRequirementsSchema),
    ),
    hostname: Schema.optional(Schema.String),
    rate_limited_until: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    validation: Schema.optional(
      Schema.suspend(() => CertificateValidationSchema),
    ),
    validation_errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CertificateValidationErrorSchema)),
    ),
  });
export type AppCertificatesCheckOutput = typeof AppCertificatesCheckOutput.Type;

// The operation
/**
 * Check DNS and re-validate certificate
 *
 * @param app_name - Fly App Name
 * @param hostname - Certificate Hostname
 */
export const AppCertificatesCheck = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppCertificatesCheckInput,
    outputSchema: AppCertificatesCheckOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

import * as Schema from "effect/Schema";
import {
  CertificateEntrySchema,
  CertificateValidationErrorSchema,
  CertificateValidationSchema,
  DNSRequirementsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AppCertificatesCustomDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    hostname: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apps/{app_name}/certificates/{hostname}/custom",
    }),
  );
export type AppCertificatesCustomDeleteInput =
  typeof AppCertificatesCustomDeleteInput.Type;

// Output Schema
export const AppCertificatesCustomDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acme_requested: Schema.optional(Schema.Boolean),
    certificates: Schema.optional(
      Schema.Array(Schema.suspend(() => CertificateEntrySchema)),
    ),
    configured: Schema.optional(Schema.Boolean),
    dns_provider: Schema.optional(Schema.String),
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
    warning: Schema.optional(Schema.String),
  });
export type AppCertificatesCustomDeleteOutput =
  typeof AppCertificatesCustomDeleteOutput.Type;

// The operation
/**
 * Remove custom certificate
 *
 * @param app_name - Fly App Name
 * @param hostname - Certificate Hostname
 */
export const AppCertificatesCustomDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppCertificatesCustomDeleteInput,
    outputSchema: AppCertificatesCustomDeleteOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);

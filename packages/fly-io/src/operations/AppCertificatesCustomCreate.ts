import * as Schema from "effect/Schema";
import {
  CertificateEntrySchema,
  CertificateValidationErrorSchema,
  CertificateValidationSchema,
  DNSRequirementsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AppCertificatesCustomCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    fullchain: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    private_key: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({ method: "POST", path: "/apps/{app_name}/certificates/custom" }),
  );
export type AppCertificatesCustomCreateInput =
  typeof AppCertificatesCustomCreateInput.Type;

// Output Schema
export const AppCertificatesCustomCreateOutput =
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
  });
export type AppCertificatesCustomCreateOutput =
  typeof AppCertificatesCustomCreateOutput.Type;

// The operation
/**
 * Upload custom certificate
 *
 * @param app_name - Fly App Name
 */
export const AppCertificatesCustomCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppCertificatesCustomCreateInput,
    outputSchema: AppCertificatesCustomCreateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);

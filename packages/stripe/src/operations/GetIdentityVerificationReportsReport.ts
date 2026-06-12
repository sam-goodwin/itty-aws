import * as Schema from "effect/Schema";
import {
  gelato_document_reportSchema,
  gelato_email_reportSchema,
  gelato_id_number_reportSchema,
  gelato_phone_reportSchema,
  gelato_selfie_reportSchema,
  gelato_verification_report_optionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIdentityVerificationReportsReportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    report: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/identity/verification_reports/{report}",
      contentType: "form-urlencoded",
    }),
  );
export type GetIdentityVerificationReportsReportInput =
  typeof GetIdentityVerificationReportsReportInput.Type;

// Output Schema
export const GetIdentityVerificationReportsReportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_reference_id: Schema.NullOr(Schema.String),
    created: Schema.Number,
    document: Schema.optional(
      Schema.suspend(() => gelato_document_reportSchema),
    ),
    email: Schema.optional(Schema.suspend(() => gelato_email_reportSchema)),
    id: Schema.String,
    id_number: Schema.optional(
      Schema.suspend(() => gelato_id_number_reportSchema),
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["identity.verification_report"]),
    options: Schema.optional(
      Schema.suspend(() => gelato_verification_report_optionsSchema),
    ),
    phone: Schema.optional(Schema.suspend(() => gelato_phone_reportSchema)),
    selfie: Schema.optional(Schema.suspend(() => gelato_selfie_reportSchema)),
    type: Schema.Literals(["document", "id_number", "verification_flow"]),
    verification_flow: Schema.optional(Schema.String),
    verification_session: Schema.NullOr(Schema.String),
  });
export type GetIdentityVerificationReportsReportOutput =
  typeof GetIdentityVerificationReportsReportOutput.Type;

// The operation
/**
 * Retrieve a VerificationReport
 *
 * <p>Retrieves an existing VerificationReport</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIdentityVerificationReportsReport =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetIdentityVerificationReportsReportInput,
    outputSchema: GetIdentityVerificationReportsReportOutput,
  }));

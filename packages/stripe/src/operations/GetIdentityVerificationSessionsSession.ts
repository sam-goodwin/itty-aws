import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetIdentityVerificationSessionsSessionInput {
  session: string;
  expand?: string;
}
export const GetIdentityVerificationSessionsSessionInput =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/identity/verification_sessions/{session}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIdentityVerificationSessionsSessionInput>;

// Output Schema
export interface GetIdentityVerificationSessionsSessionOutput {
  client_reference_id: string | null;
  client_secret: Redacted.Redacted<string> | null;
  created: number;
  id: string;
  last_error: {
    code:
      | "abandoned"
      | "consent_declined"
      | "country_not_supported"
      | "device_not_supported"
      | "document_expired"
      | "document_type_not_supported"
      | "document_unverified_other"
      | "email_unverified_other"
      | "email_verification_declined"
      | "id_number_insufficient_document_data"
      | "id_number_mismatch"
      | "id_number_unverified_other"
      | "phone_unverified_other"
      | "phone_verification_declined"
      | "selfie_document_missing_photo"
      | "selfie_face_mismatch"
      | "selfie_manipulated"
      | "selfie_unverified_other"
      | "under_supported_age"
      | null;
    reason: string | null;
  } | null;
  last_verification_report:
    | string
    | {
        client_reference_id: string | null;
        created: number;
        document?: {
          address: {
            city: string | null;
            country: string | null;
            line1: string | null;
            line2: string | null;
            postal_code: string | null;
            state: string | null;
          } | null;
          dob?: {
            day: number | null;
            month: number | null;
            year: number | null;
          } | null;
          error: {
            code:
              | "document_expired"
              | "document_type_not_supported"
              | "document_unverified_other"
              | null;
            reason: string | null;
          } | null;
          expiration_date?: {
            day: number | null;
            month: number | null;
            year: number | null;
          } | null;
          files: string[] | null;
          first_name: string | null;
          issued_date: {
            day: number | null;
            month: number | null;
            year: number | null;
          } | null;
          issuing_country: string | null;
          last_name: string | null;
          number?: string | null;
          sex?: "[redacted]" | "female" | "male" | "unknown" | null;
          status: "unverified" | "verified";
          type: "driving_license" | "id_card" | "passport" | null;
          unparsed_place_of_birth?: string | null;
          unparsed_sex?: string | null;
        };
        email?: {
          email: string | null;
          error: {
            code:
              | "email_unverified_other"
              | "email_verification_declined"
              | null;
            reason: string | null;
          } | null;
          status: "unverified" | "verified";
        };
        id: string;
        id_number?: {
          dob?: {
            day: number | null;
            month: number | null;
            year: number | null;
          } | null;
          error: {
            code:
              | "id_number_insufficient_document_data"
              | "id_number_mismatch"
              | "id_number_unverified_other"
              | null;
            reason: string | null;
          } | null;
          first_name: string | null;
          id_number?: string | null;
          id_number_type: "br_cpf" | "sg_nric" | "us_ssn" | null;
          last_name: string | null;
          status: "unverified" | "verified";
        };
        livemode: boolean;
        object: "identity.verification_report";
        options?: {
          document?: {
            allowed_types?: ("driving_license" | "id_card" | "passport")[];
            require_id_number?: boolean;
            require_live_capture?: boolean;
            require_matching_selfie?: boolean;
          };
          id_number?: {};
        };
        phone?: {
          error: {
            code:
              | "phone_unverified_other"
              | "phone_verification_declined"
              | null;
            reason: string | null;
          } | null;
          phone: string | null;
          status: "unverified" | "verified";
        };
        selfie?: {
          document: string | null;
          error: {
            code:
              | "selfie_document_missing_photo"
              | "selfie_face_mismatch"
              | "selfie_manipulated"
              | "selfie_unverified_other"
              | null;
            reason: string | null;
          } | null;
          selfie: string | null;
          status: "unverified" | "verified";
        };
        type: "document" | "id_number" | "verification_flow";
        verification_flow?: string;
        verification_session: string | null;
      }
    | null;
  livemode: boolean;
  metadata: Record<string, string>;
  object: "identity.verification_session";
  options: {
    document?: {
      allowed_types?: ("driving_license" | "id_card" | "passport")[];
      require_id_number?: boolean;
      require_live_capture?: boolean;
      require_matching_selfie?: boolean;
    };
    email?: { require_verification?: boolean };
    id_number?: {};
    matching?: { dob?: "none" | "similar"; name?: "none" | "similar" };
    phone?: { require_verification?: boolean };
  } | null;
  provided_details?: { email?: string; phone?: string } | null;
  redaction: { status: "processing" | "redacted" | "validated" } | null;
  related_customer: string | null;
  related_customer_account: string | null;
  related_person?: { account: string; person: string };
  status: "canceled" | "processing" | "requires_input" | "verified";
  type: "document" | "id_number" | "verification_flow";
  url: string | null;
  verification_flow?: string;
  verified_outputs?: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    } | null;
    dob?: {
      day: number | null;
      month: number | null;
      year: number | null;
    } | null;
    email: string | null;
    first_name: string | null;
    id_number?: string | null;
    id_number_type: "br_cpf" | "sg_nric" | "us_ssn" | null;
    last_name: string | null;
    phone: string | null;
    sex?: "[redacted]" | "female" | "male" | "unknown" | null;
    unparsed_place_of_birth?: string | null;
    unparsed_sex?: string | null;
  } | null;
}
export const GetIdentityVerificationSessionsSessionOutput =
  /*@__PURE__*/ Schema.Struct({
    client_reference_id: Schema.NullOr(Schema.String),
    client_secret: SensitiveOutputNullableString,
    created: Schema.Number,
    id: Schema.String,
    last_error: Schema.NullOr(
      Schema.Struct({
        code: Schema.NullOr(
          Schema.Literals([
            "abandoned",
            "consent_declined",
            "country_not_supported",
            "device_not_supported",
            "document_expired",
            "document_type_not_supported",
            "document_unverified_other",
            "email_unverified_other",
            "email_verification_declined",
            "id_number_insufficient_document_data",
            "id_number_mismatch",
            "id_number_unverified_other",
            "phone_unverified_other",
            "phone_verification_declined",
            "selfie_document_missing_photo",
            "selfie_face_mismatch",
            "selfie_manipulated",
            "selfie_unverified_other",
            "under_supported_age",
          ]),
        ),
        reason: Schema.NullOr(Schema.String),
      }),
    ),
    last_verification_report: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["identity.verification_session"]),
    options: Schema.NullOr(
      Schema.Struct({
        document: Schema.optional(
          Schema.Struct({
            allowed_types: Schema.optional(
              Schema.Array(
                Schema.Literals(["driving_license", "id_card", "passport"]),
              ),
            ),
            require_id_number: Schema.optional(Schema.Boolean),
            require_live_capture: Schema.optional(Schema.Boolean),
            require_matching_selfie: Schema.optional(Schema.Boolean),
          }),
        ),
        email: Schema.optional(
          Schema.Struct({
            require_verification: Schema.optional(Schema.Boolean),
          }),
        ),
        id_number: Schema.optional(Schema.Struct({})),
        matching: Schema.optional(
          Schema.Struct({
            dob: Schema.optional(Schema.Literals(["none", "similar"])),
            name: Schema.optional(Schema.Literals(["none", "similar"])),
          }),
        ),
        phone: Schema.optional(
          Schema.Struct({
            require_verification: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    provided_details: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
        }),
      ),
    ),
    redaction: Schema.NullOr(
      Schema.Struct({
        status: Schema.Literals(["processing", "redacted", "validated"]),
      }),
    ),
    related_customer: Schema.NullOr(Schema.String),
    related_customer_account: Schema.NullOr(Schema.String),
    related_person: Schema.optional(
      Schema.Struct({
        account: Schema.String,
        person: Schema.String,
      }),
    ),
    status: Schema.Literals([
      "canceled",
      "processing",
      "requires_input",
      "verified",
    ]),
    type: Schema.Literals(["document", "id_number", "verification_flow"]),
    url: Schema.NullOr(Schema.String),
    verification_flow: Schema.optional(Schema.String),
    verified_outputs: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          address: Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
            }),
          ),
          dob: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                day: Schema.NullOr(Schema.Number),
                month: Schema.NullOr(Schema.Number),
                year: Schema.NullOr(Schema.Number),
              }),
            ),
          ),
          email: Schema.NullOr(Schema.String),
          first_name: Schema.NullOr(Schema.String),
          id_number: Schema.optional(Schema.NullOr(Schema.String)),
          id_number_type: Schema.NullOr(
            Schema.Literals(["br_cpf", "sg_nric", "us_ssn"]),
          ),
          last_name: Schema.NullOr(Schema.String),
          phone: Schema.NullOr(Schema.String),
          sex: Schema.optional(
            Schema.NullOr(
              Schema.Literals(["[redacted]", "female", "male", "unknown"]),
            ),
          ),
          unparsed_place_of_birth: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
          unparsed_sex: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<GetIdentityVerificationSessionsSessionOutput>;

// The operation
/**
 * Retrieve a VerificationSession
 *
 * <p>Retrieves the details of a VerificationSession that was previously created.</p>
 * <p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
 * <code>client_secret</code> or <code>url</code> to allow re-submission.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIdentityVerificationSessionsSession =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetIdentityVerificationSessionsSessionInput,
    outputSchema: GetIdentityVerificationSessionsSessionOutput,
  }));

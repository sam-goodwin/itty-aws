import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetIdentityVerificationReportsInput {
  client_reference_id?: string;
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
  type?: "document" | "id_number";
  verification_session?: string;
}
export const GetIdentityVerificationReportsInput =
  /*@__PURE__*/ Schema.Struct({
    client_reference_id: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literals(["document", "id_number"])),
    verification_session: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/identity/verification_reports",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIdentityVerificationReportsInput>;

// Output Schema
export interface GetIdentityVerificationReportsOutput {
  data: {
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
        code: "email_unverified_other" | "email_verification_declined" | null;
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
        code: "phone_unverified_other" | "phone_verification_declined" | null;
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetIdentityVerificationReportsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        client_reference_id: Schema.NullOr(Schema.String),
        created: Schema.Number,
        document: Schema.optional(
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
            error: Schema.NullOr(
              Schema.Struct({
                code: Schema.NullOr(
                  Schema.Literals([
                    "document_expired",
                    "document_type_not_supported",
                    "document_unverified_other",
                  ]),
                ),
                reason: Schema.NullOr(Schema.String),
              }),
            ),
            expiration_date: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  day: Schema.NullOr(Schema.Number),
                  month: Schema.NullOr(Schema.Number),
                  year: Schema.NullOr(Schema.Number),
                }),
              ),
            ),
            files: Schema.NullOr(Schema.Array(Schema.String)),
            first_name: Schema.NullOr(Schema.String),
            issued_date: Schema.NullOr(
              Schema.Struct({
                day: Schema.NullOr(Schema.Number),
                month: Schema.NullOr(Schema.Number),
                year: Schema.NullOr(Schema.Number),
              }),
            ),
            issuing_country: Schema.NullOr(Schema.String),
            last_name: Schema.NullOr(Schema.String),
            number: Schema.optional(Schema.NullOr(Schema.String)),
            sex: Schema.optional(
              Schema.NullOr(
                Schema.Literals(["[redacted]", "female", "male", "unknown"]),
              ),
            ),
            status: Schema.Literals(["unverified", "verified"]),
            type: Schema.NullOr(
              Schema.Literals(["driving_license", "id_card", "passport"]),
            ),
            unparsed_place_of_birth: Schema.optional(
              Schema.NullOr(Schema.String),
            ),
            unparsed_sex: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        email: Schema.optional(
          Schema.Struct({
            email: Schema.NullOr(Schema.String),
            error: Schema.NullOr(
              Schema.Struct({
                code: Schema.NullOr(
                  Schema.Literals([
                    "email_unverified_other",
                    "email_verification_declined",
                  ]),
                ),
                reason: Schema.NullOr(Schema.String),
              }),
            ),
            status: Schema.Literals(["unverified", "verified"]),
          }),
        ),
        id: Schema.String,
        id_number: Schema.optional(
          Schema.Struct({
            dob: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  day: Schema.NullOr(Schema.Number),
                  month: Schema.NullOr(Schema.Number),
                  year: Schema.NullOr(Schema.Number),
                }),
              ),
            ),
            error: Schema.NullOr(
              Schema.Struct({
                code: Schema.NullOr(
                  Schema.Literals([
                    "id_number_insufficient_document_data",
                    "id_number_mismatch",
                    "id_number_unverified_other",
                  ]),
                ),
                reason: Schema.NullOr(Schema.String),
              }),
            ),
            first_name: Schema.NullOr(Schema.String),
            id_number: Schema.optional(Schema.NullOr(Schema.String)),
            id_number_type: Schema.NullOr(
              Schema.Literals(["br_cpf", "sg_nric", "us_ssn"]),
            ),
            last_name: Schema.NullOr(Schema.String),
            status: Schema.Literals(["unverified", "verified"]),
          }),
        ),
        livemode: Schema.Boolean,
        object: Schema.Literals(["identity.verification_report"]),
        options: Schema.optional(
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
            id_number: Schema.optional(Schema.Struct({})),
          }),
        ),
        phone: Schema.optional(
          Schema.Struct({
            error: Schema.NullOr(
              Schema.Struct({
                code: Schema.NullOr(
                  Schema.Literals([
                    "phone_unverified_other",
                    "phone_verification_declined",
                  ]),
                ),
                reason: Schema.NullOr(Schema.String),
              }),
            ),
            phone: Schema.NullOr(Schema.String),
            status: Schema.Literals(["unverified", "verified"]),
          }),
        ),
        selfie: Schema.optional(
          Schema.Struct({
            document: Schema.NullOr(Schema.String),
            error: Schema.NullOr(
              Schema.Struct({
                code: Schema.NullOr(
                  Schema.Literals([
                    "selfie_document_missing_photo",
                    "selfie_face_mismatch",
                    "selfie_manipulated",
                    "selfie_unverified_other",
                  ]),
                ),
                reason: Schema.NullOr(Schema.String),
              }),
            ),
            selfie: Schema.NullOr(Schema.String),
            status: Schema.Literals(["unverified", "verified"]),
          }),
        ),
        type: Schema.Literals(["document", "id_number", "verification_flow"]),
        verification_flow: Schema.optional(Schema.String),
        verification_session: Schema.NullOr(Schema.String),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetIdentityVerificationReportsOutput>;

// The operation
/**
 * List VerificationReports
 *
 * <p>List all verification reports.</p>
 *
 * @param client_reference_id - A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
 * @param created - Only return VerificationReports that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param type - Only return VerificationReports of this type
 * @param verification_session - Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.
 */
export const GetIdentityVerificationReports =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetIdentityVerificationReportsInput,
    outputSchema: GetIdentityVerificationReportsOutput,
  }));

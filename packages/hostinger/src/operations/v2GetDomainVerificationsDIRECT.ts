import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const V2GetDomainVerificationsDIRECTInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.Array(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/api/v2/direct/verifications/active" }),
  );
export type V2GetDomainVerificationsDIRECTInput =
  typeof V2GetDomainVerificationsDIRECTInput.Type;

// Output Schema
export const V2GetDomainVerificationsDIRECTOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Struct({
        PENDING: Schema.optional(
          Schema.Struct({
            "DOMAIN.TLD": Schema.optional(
              Schema.Struct({
                VERIFICATION_TYPE: Schema.optional(
                  Schema.Struct({
                    records: Schema.optional(Schema.Array(Schema.String)),
                    last_verification_attempt: Schema.optional(Schema.String),
                    next_verification_attempt: Schema.optional(Schema.String),
                    verification_expiration: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        VERIFIED: Schema.optional(
          Schema.Struct({
            "DOMAIN.TLD": Schema.optional(
              Schema.Struct({
                VERIFICATION_TYPE: Schema.optional(
                  Schema.Struct({
                    records: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  });
export type V2GetDomainVerificationsDIRECTOutput =
  typeof V2GetDomainVerificationsDIRECTOutput.Type;

// The operation
/**
 * Get domain verifications
 *
 * Retrieve a list of pending and completed domain verifications.
 */
export const v2GetDomainVerificationsDIRECT =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V2GetDomainVerificationsDIRECTInput,
    outputSchema: V2GetDomainVerificationsDIRECTOutput,
    errors: [UnprocessableEntity] as const,
  }));

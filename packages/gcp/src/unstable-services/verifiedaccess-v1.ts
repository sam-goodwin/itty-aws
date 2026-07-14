// ==========================================================================
// Chrome Verified Access API (verifiedaccess v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "verifiedaccess",
  version: "v1",
  rootUrl: "https://verifiedaccess.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SignedData {
  /** The data to be signed. */
  data?: string;
  /** The signature of the data field. */
  signature?: string;
}

export const SignedData: Schema.Codec<SignedData> =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignedData" });

export interface VerifyChallengeResponseResult {
  /** Device enrollment id is returned in this field (for the machine response only). */
  deviceEnrollmentId?: string;
  /** Attested device id (ADID) of the device, read from the verified data. */
  attestedDeviceId?: string;
  /** For EMCert check, device permanent id is returned here. For EUCert check, signed_public_key_and_challenge [base64 encoded] is returned if present, otherwise empty string is returned. This field is deprecated, please use device_permanent_id or signed_public_key_and_challenge fields. */
  verificationOutput?: string;
  /** Device permanent id is returned in this field (for the machine response only). */
  devicePermanentId?: string;
  /** Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) */
  signedPublicKeyAndChallenge?: string;
}

export const VerifyChallengeResponseResult: Schema.Codec<VerifyChallengeResponseResult> =
  /*@__PURE__*/ Schema.Struct({
    deviceEnrollmentId: Schema.optional(Schema.String),
    attestedDeviceId: Schema.optional(Schema.String),
    verificationOutput: Schema.optional(Schema.String),
    devicePermanentId: Schema.optional(Schema.String),
    signedPublicKeyAndChallenge: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyChallengeResponseResult" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Challenge {
  /** Generated challenge */
  challenge?: SignedData;
  /** Challenge generated with the old signing key (this will only be present during key rotation) */
  alternativeChallenge?: SignedData;
}

export const Challenge: Schema.Codec<Challenge> =
  /*@__PURE__*/ Schema.Struct({
    challenge: Schema.optional(SignedData),
    alternativeChallenge: Schema.optional(SignedData),
  }).annotate({ identifier: "Challenge" });

export interface VerifyChallengeResponseRequest {
  /** Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match. */
  expectedIdentity?: string;
  /** The generated response to the challenge */
  challengeResponse?: SignedData;
}

export const VerifyChallengeResponseRequest: Schema.Codec<VerifyChallengeResponseRequest> =
  /*@__PURE__*/ Schema.Struct({
    expectedIdentity: Schema.optional(Schema.String),
    challengeResponse: Schema.optional(SignedData),
  }).annotate({ identifier: "VerifyChallengeResponseRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface CreateChallengeRequest {
  /** Request body */
  body?: Empty;
}

export const CreateChallengeRequest = /*@__PURE__*/ Schema.Struct({
  body: Schema.optional(Empty).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/challenge", hasBody: true }),
  svc,
) as unknown as Schema.Codec<CreateChallengeRequest>;

export type CreateChallengeResponse = Challenge;
export const CreateChallengeResponse = /*@__PURE__*/ Challenge;

export type CreateChallengeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CreateChallenge API */
export const createChallenge: API.OperationMethod<
  CreateChallengeRequest,
  CreateChallengeResponse,
  CreateChallengeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChallengeRequest,
  output: CreateChallengeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyChallengeRequest {
  /** Request body */
  body?: VerifyChallengeResponseRequest;
}

export const VerifyChallengeRequest = /*@__PURE__*/ Schema.Struct({
  body: Schema.optional(VerifyChallengeResponseRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/challenge:verify", hasBody: true }),
  svc,
) as unknown as Schema.Codec<VerifyChallengeRequest>;

export type VerifyChallengeResponse = VerifyChallengeResponseResult;
export const VerifyChallengeResponse =
  /*@__PURE__*/ VerifyChallengeResponseResult;

export type VerifyChallengeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** VerifyChallengeResponse API */
export const verifyChallenge: API.OperationMethod<
  VerifyChallengeRequest,
  VerifyChallengeResponse,
  VerifyChallengeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyChallengeRequest,
  output: VerifyChallengeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

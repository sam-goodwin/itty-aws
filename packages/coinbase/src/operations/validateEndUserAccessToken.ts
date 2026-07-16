import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ValidateEndUserAccessTokenInput {
  accessToken: string | Redacted.Redacted<string>;
}
export const ValidateEndUserAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: SensitiveString,
  }).pipe(
    T.Http({ method: "POST", path: "/v2/end-users/auth/validate-token" }),
  ) as unknown as Schema.Codec<ValidateEndUserAccessTokenInput>;

// Output Schema
export interface ValidateEndUserAccessTokenOutput {
  userId: string;
  authenticationMethods: (
    | { type: "email"; email: string }
    | { type: "sms"; phoneNumber: string }
    | { type: "jwt"; kid: string; sub: string }
    | {
        type: "google" | "apple" | "x" | "telegram" | "github";
        sub: string;
        email?: string;
        name?: string;
        username?: string;
      }
    | {
        type: "google" | "apple" | "x" | "telegram" | "github";
        id: number;
        firstName?: string;
        lastName?: string;
        photoUrl?: string;
        authDate: number;
        username?: string;
      }
    | { type: "siwe"; address: string }
  )[];
  mfaMethods?: {
    enrollmentPromptedAt?: string;
    totp?: { enrolledAt: string };
    sms?: { enrolledAt: string };
  };
  evmAccounts: string[];
  evmAccountObjects: { address: string; createdAt: string }[];
  evmSmartAccounts: string[];
  evmSmartAccountObjects: {
    address: string;
    ownerAddresses: string[];
    createdAt: string;
  }[];
  solanaAccounts: string[];
  solanaAccountObjects: { address: string; createdAt: string }[];
  createdAt: string;
}
export const ValidateEndUserAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    userId: Schema.String,
    authenticationMethods: Schema.Array(
      Schema.Union([
        Schema.Struct({
          type: Schema.Literals(["email"]),
          email: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["sms"]),
          phoneNumber: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["jwt"]),
          kid: Schema.String,
          sub: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["google", "apple", "x", "telegram", "github"]),
          sub: Schema.String,
          email: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          username: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          type: Schema.Literals(["google", "apple", "x", "telegram", "github"]),
          id: Schema.Number,
          firstName: Schema.optional(Schema.String),
          lastName: Schema.optional(Schema.String),
          photoUrl: Schema.optional(Schema.String),
          authDate: Schema.Number,
          username: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          type: Schema.Literals(["siwe"]),
          address: Schema.String,
        }),
      ]),
    ),
    mfaMethods: Schema.optional(
      Schema.Struct({
        enrollmentPromptedAt: Schema.optional(Schema.String),
        totp: Schema.optional(
          Schema.Struct({
            enrolledAt: Schema.String,
          }),
        ),
        sms: Schema.optional(
          Schema.Struct({
            enrolledAt: Schema.String,
          }),
        ),
      }),
    ),
    evmAccounts: Schema.Array(Schema.String),
    evmAccountObjects: Schema.Array(
      Schema.Struct({
        address: Schema.String,
        createdAt: Schema.String,
      }),
    ),
    evmSmartAccounts: Schema.Array(Schema.String),
    evmSmartAccountObjects: Schema.Array(
      Schema.Struct({
        address: Schema.String,
        ownerAddresses: Schema.Array(Schema.String),
        createdAt: Schema.String,
      }),
    ),
    solanaAccounts: Schema.Array(Schema.String),
    solanaAccountObjects: Schema.Array(
      Schema.Struct({
        address: Schema.String,
        createdAt: Schema.String,
      }),
    ),
    createdAt: Schema.String,
  }) as unknown as Schema.Codec<ValidateEndUserAccessTokenOutput>;

// The operation
/**
 * Validate end user access token
 *
 * Validates the end user's access token and returns the end user's information. Returns an error if the access token is invalid or expired.
 * This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 */
export const validateEndUserAccessToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: ValidateEndUserAccessTokenInput,
  outputSchema: ValidateEndUserAccessTokenOutput,
}));

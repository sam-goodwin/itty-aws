import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface LookupEndUserInput {
  email?: string;
  oauthProvider?: string;
  oauthSubject?: string;
  phoneNumber?: string;
  siweAddress?: string;
}
export const LookupEndUserInput = /*@__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  oauthProvider: Schema.optional(Schema.String),
  oauthSubject: Schema.optional(Schema.String),
  phoneNumber: Schema.optional(Schema.String),
  siweAddress: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v2/end-users/lookup" }),
) as unknown as Schema.Codec<LookupEndUserInput>;

// Output Schema
export interface LookupEndUserOutput {
  endUsers: {
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
  }[];
}
export const LookupEndUserOutput = /*@__PURE__*/ Schema.Struct({
  endUsers: Schema.Array(
    Schema.Struct({
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
            type: Schema.Literals([
              "google",
              "apple",
              "x",
              "telegram",
              "github",
            ]),
            sub: Schema.String,
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
          }),
          Schema.Struct({
            type: Schema.Literals([
              "google",
              "apple",
              "x",
              "telegram",
              "github",
            ]),
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
    }),
  ),
}) as unknown as Schema.Codec<LookupEndUserOutput>;

// The operation
/**
 * Look up end users by identity
 *
 * Looks up end users. Exactly one lookup type must be provided per request:
 * - **email**: searches across all email-based authentication methods
 * (email, Google, Apple, GitHub). May return multiple end users if the
 * same email address appears across different auth methods.
 * - **oauthProvider + oauthSubject**: looks up a user by their OAuth
 * provider and subject (the `sub` claim from the provider's ID token).
 * Both params must be provided together.
 * - **phoneNumber**: looks up a user by their SMS-verified phone number.
 * - **siweAddress**: looks up a user by the Ethereum address they authenticated
 * with via Sign In With Ethereum (EIP-4361).
 * Returns all matching end users. If no end users match, an empty array is returned.
 * This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 *
 * @param email - The email address to search for across all email-based authentication methods.
 * @param oauthProvider - The OAuth provider to search by. Must be provided together with oauthSubject.
 * @param oauthSubject - The OAuth subject (the `sub` claim from the provider's ID token). Must be provided together with oauthProvider.
 * @param phoneNumber - The E.164-formatted phone number to search for. Must be URL-encoded when passed as a query parameter (e.g. `+14155552671` → `%2B14155552671`).
 * @param siweAddress - The ERC-55 checksummed Ethereum address to search for. Looks up a user by the address they authenticated with via Sign In With Ethereum (EIP-4361).
 */
export const lookupEndUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: LookupEndUserInput,
  outputSchema: LookupEndUserOutput,
}));

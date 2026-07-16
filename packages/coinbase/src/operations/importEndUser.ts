import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ImportEndUserInput {
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
  encryptedPrivateKey: string;
  keyType: "evm" | "solana";
}
export const ImportEndUserInput = /*@__PURE__*/ Schema.Struct({
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
  encryptedPrivateKey: Schema.String,
  keyType: Schema.Literals(["evm", "solana"]),
}).pipe(
  T.Http({ method: "POST", path: "/v2/end-users/import" }),
) as unknown as Schema.Codec<ImportEndUserInput>;

// Output Schema
export interface ImportEndUserOutput {
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
export const ImportEndUserOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImportEndUserOutput>;

// The operation
/**
 * Import end user private key
 *
 * Imports an existing private key for an end user into the developer's CDP Project. The private key must be encrypted using the CDP SDK's encryption scheme before being sent to this endpoint. This API should be called from the [CDP SDK](https://github.com/coinbase/cdp-sdk) to ensure that the associated private key is properly encrypted.
 * This endpoint allows developers to import existing keys for their end users, supporting both EVM and Solana key types. The end user must have at least one authentication method configured.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const importEndUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImportEndUserInput,
  outputSchema: ImportEndUserOutput,
}));

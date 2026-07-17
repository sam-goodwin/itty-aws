import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListEndUsersInput {
  pageSize?: number;
  pageToken?: string;
  sort?: string;
}
export const ListEndUsersInput = /*@__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number),
  pageToken: Schema.optional(Schema.String),
  sort: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v2/end-users" }),
) as unknown as Schema.Codec<ListEndUsersInput>;

// Output Schema
export interface ListEndUsersOutput {
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
  nextPageToken?: string;
}
export const ListEndUsersOutput = /*@__PURE__*/ Schema.Struct({
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
  nextPageToken: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ListEndUsersOutput>;

// The operation
/**
 * List end users
 *
 * Lists the end users belonging to the developer's CDP Project.
 * By default, the response is sorted by creation date in ascending order and paginated to 20 users per page.
 *
 * @param pageSize - The number of end users to return per page.
 * @param pageToken - The token for the desired page of end users. Will be empty if there are no more end users to fetch.
 * @param sort - Sort end users. Defaults to ascending order (oldest first).
 */
export const listEndUsers = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListEndUsersInput,
  outputSchema: ListEndUsersOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetNeonAuthPluginConfigsInput {
  project_id: string;
  branch_id: string;
}
export const GetNeonAuthPluginConfigsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins",
    }),
  ) as unknown as Schema.Codec<GetNeonAuthPluginConfigsInput>;

// Output Schema
export interface GetNeonAuthPluginConfigsOutput {
  organization?: {
    enabled: boolean;
    organization_limit: number;
    membership_limit: number;
    creator_role: "admin" | "owner";
    send_invitation_email: boolean;
  };
  magic_link?: {
    enabled: boolean;
    expires_in: number;
    disable_sign_up: boolean;
  };
  phone_number?: { enabled: boolean; otp_expires_in?: number };
  email_provider?:
    | {
        host: string;
        port: number;
        username: string;
        password: Redacted.Redacted<string>;
        sender_email: string;
        sender_name: string;
      }
    | { sender_email?: string; sender_name?: string };
  email_and_password?: {
    enabled: boolean;
    email_verification_method: "link" | "otp";
    require_email_verification: boolean;
    auto_sign_in_after_verification: boolean;
    send_verification_email_on_sign_up: boolean;
    send_verification_email_on_sign_in: boolean;
    disable_sign_up: boolean;
  };
  oauth_providers?: {
    id: "google" | "github" | "microsoft" | "vercel";
    type: "standard" | "shared";
    client_id?: string;
    client_secret?: Redacted.Redacted<string>;
  }[];
  allow_localhost?: boolean;
}
export const GetNeonAuthPluginConfigsOutput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        organization_limit: Schema.Number,
        membership_limit: Schema.Number,
        creator_role: Schema.Literals(["admin", "owner"]),
        send_invitation_email: Schema.Boolean,
      }),
    ),
    magic_link: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        expires_in: Schema.Number,
        disable_sign_up: Schema.Boolean,
      }),
    ),
    phone_number: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        otp_expires_in: Schema.optional(Schema.Number),
      }),
    ),
    email_provider: Schema.optional(
      Schema.Union([
        Schema.Struct({
          host: Schema.String,
          port: Schema.Number,
          username: Schema.String,
          password: SensitiveOutputString,
          sender_email: Schema.String,
          sender_name: Schema.String,
        }),
        Schema.Struct({
          sender_email: Schema.optional(Schema.String),
          sender_name: Schema.optional(Schema.String),
        }),
      ]),
    ),
    email_and_password: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        email_verification_method: Schema.Literals(["link", "otp"]),
        require_email_verification: Schema.Boolean,
        auto_sign_in_after_verification: Schema.Boolean,
        send_verification_email_on_sign_up: Schema.Boolean,
        send_verification_email_on_sign_in: Schema.Boolean,
        disable_sign_up: Schema.Boolean,
      }),
    ),
    oauth_providers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.Literals(["google", "github", "microsoft", "vercel"]),
          type: Schema.Literals(["standard", "shared"]),
          client_id: Schema.optional(Schema.String),
          client_secret: Schema.optional(SensitiveOutputString),
        }),
      ),
    ),
    allow_localhost: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<GetNeonAuthPluginConfigsOutput>;

// The operation
/**
 * Retrieve Neon Auth plugin configurations
 *
 * Returns all plugin configurations for Neon Auth in a single response.
 * This endpoint aggregates organization, email provider, email and password,
 * OAuth providers, and localhost settings.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuthPluginConfigs = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetNeonAuthPluginConfigsInput,
  outputSchema: GetNeonAuthPluginConfigsOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface SendNeonAuthTestEmailInput {
  project_id: string;
  branch_id: string;
  host: string;
  port: number;
  username: string;
  password: string | Redacted.Redacted<string>;
  sender_email: string;
  sender_name: string;
  recipient_email: string;
}
export const SendNeonAuthTestEmailInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    host: Schema.String,
    port: Schema.Number,
    username: Schema.String,
    password: SensitiveString,
    sender_email: Schema.String,
    sender_name: Schema.String,
    recipient_email: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/auth/send_test_email",
    }),
  ) as unknown as Schema.Codec<SendNeonAuthTestEmailInput>;

// Output Schema
export interface SendNeonAuthTestEmailOutput {
  success: boolean;
  error_message?: string;
}
export const SendNeonAuthTestEmailOutput =
  /*@__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
    error_message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SendNeonAuthTestEmailOutput>;

// The operation
/**
 * Send test email
 *
 * Sends a test email using the configured email server settings to verify SMTP connectivity and credentials.
 * The request body must include the SMTP server settings
 * (`host`, `port`, `username`, `password`, `sender_email`, `sender_name`) and the `recipient_email` address.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const sendNeonAuthTestEmail = /*@__PURE__*/ API.make(() => ({
  inputSchema: SendNeonAuthTestEmailInput,
  outputSchema: SendNeonAuthTestEmailOutput,
}));

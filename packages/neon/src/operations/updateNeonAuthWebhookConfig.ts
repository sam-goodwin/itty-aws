import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateNeonAuthWebhookConfigInput {
  project_id: string;
  branch_id: string;
  enabled: boolean;
  webhook_url?: string;
  enabled_events?: (
    | "user.before_create"
    | "user.created"
    | "send.otp"
    | "send.magic_link"
    | "organization.invitation.created"
    | "organization.invitation.accepted"
    | "phone_number.verified"
  )[];
  timeout_seconds?: number;
}
export const UpdateNeonAuthWebhookConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.Boolean,
    webhook_url: Schema.optional(Schema.String),
    enabled_events: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "user.before_create",
          "user.created",
          "send.otp",
          "send.magic_link",
          "organization.invitation.created",
          "organization.invitation.accepted",
          "phone_number.verified",
        ]),
      ),
    ),
    timeout_seconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthWebhookConfigInput>;

// Output Schema
export interface UpdateNeonAuthWebhookConfigOutput {
  enabled: boolean;
  webhook_url?: string;
  enabled_events?: (
    | "user.before_create"
    | "user.created"
    | "send.otp"
    | "send.magic_link"
    | "organization.invitation.created"
    | "organization.invitation.accepted"
    | "phone_number.verified"
  )[];
  timeout_seconds?: number;
}
export const UpdateNeonAuthWebhookConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    webhook_url: Schema.optional(Schema.String),
    enabled_events: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "user.before_create",
          "user.created",
          "send.otp",
          "send.magic_link",
          "organization.invitation.created",
          "organization.invitation.accepted",
          "phone_number.verified",
        ]),
      ),
    ),
    timeout_seconds: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<UpdateNeonAuthWebhookConfigOutput>;

// The operation
/**
 * Update Neon Auth webhook configuration
 *
 * Updates the webhook configuration for the specified branch's Neon Auth integration.
 * Webhooks notify an external endpoint when auth events occur, such as user creation or sign-in.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthWebhookConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateNeonAuthWebhookConfigInput,
    outputSchema: UpdateNeonAuthWebhookConfigOutput,
  }),
);

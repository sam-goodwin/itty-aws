import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateNeonAuthEmailAndPasswordConfigInput {
  project_id: string;
  branch_id: string;
  enabled?: boolean;
  email_verification_method?: "link" | "otp";
  require_email_verification?: boolean;
  auto_sign_in_after_verification?: boolean;
  send_verification_email_on_sign_up?: boolean;
  send_verification_email_on_sign_in?: boolean;
  disable_sign_up?: boolean;
}
export const UpdateNeonAuthEmailAndPasswordConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    email_verification_method: Schema.optional(
      Schema.Literals(["link", "otp"]),
    ),
    require_email_verification: Schema.optional(Schema.Boolean),
    auto_sign_in_after_verification: Schema.optional(Schema.Boolean),
    send_verification_email_on_sign_up: Schema.optional(Schema.Boolean),
    send_verification_email_on_sign_in: Schema.optional(Schema.Boolean),
    disable_sign_up: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthEmailAndPasswordConfigInput>;

// Output Schema
export interface UpdateNeonAuthEmailAndPasswordConfigOutput {
  enabled: boolean;
  email_verification_method: "link" | "otp";
  require_email_verification: boolean;
  auto_sign_in_after_verification: boolean;
  send_verification_email_on_sign_up: boolean;
  send_verification_email_on_sign_in: boolean;
  disable_sign_up: boolean;
}
export const UpdateNeonAuthEmailAndPasswordConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    email_verification_method: Schema.Literals(["link", "otp"]),
    require_email_verification: Schema.Boolean,
    auto_sign_in_after_verification: Schema.Boolean,
    send_verification_email_on_sign_up: Schema.Boolean,
    send_verification_email_on_sign_in: Schema.Boolean,
    disable_sign_up: Schema.Boolean,
  }) as unknown as Schema.Codec<UpdateNeonAuthEmailAndPasswordConfigOutput>;

// The operation
/**
 * Update email and password configuration
 *
 * Updates the email and password authentication configuration for the specified branch's Neon Auth integration.
 * Only the fields provided in the request body are updated.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthEmailAndPasswordConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNeonAuthEmailAndPasswordConfigInput,
    outputSchema: UpdateNeonAuthEmailAndPasswordConfigOutput,
  }));

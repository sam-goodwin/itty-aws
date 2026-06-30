import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetNeonAuthEmailAndPasswordConfigInput {
  project_id: string;
  branch_id: string;
}
export const GetNeonAuthEmailAndPasswordConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
    }),
  ) as unknown as Schema.Codec<GetNeonAuthEmailAndPasswordConfigInput>;

// Output Schema
export interface GetNeonAuthEmailAndPasswordConfigOutput {
  enabled: boolean;
  email_verification_method: "link" | "otp";
  require_email_verification: boolean;
  auto_sign_in_after_verification: boolean;
  send_verification_email_on_sign_up: boolean;
  send_verification_email_on_sign_in: boolean;
  disable_sign_up: boolean;
}
export const GetNeonAuthEmailAndPasswordConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    email_verification_method: Schema.Literals(["link", "otp"]),
    require_email_verification: Schema.Boolean,
    auto_sign_in_after_verification: Schema.Boolean,
    send_verification_email_on_sign_up: Schema.Boolean,
    send_verification_email_on_sign_in: Schema.Boolean,
    disable_sign_up: Schema.Boolean,
  }) as unknown as Schema.Codec<GetNeonAuthEmailAndPasswordConfigOutput>;

// The operation
/**
 * Retrieve email and password configuration
 *
 * Retrieves the email and password authentication configuration for the specified branch's Neon Auth integration,
 * including whether it is enabled and the email verification method.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuthEmailAndPasswordConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetNeonAuthEmailAndPasswordConfigInput,
    outputSchema: GetNeonAuthEmailAndPasswordConfigOutput,
  }));

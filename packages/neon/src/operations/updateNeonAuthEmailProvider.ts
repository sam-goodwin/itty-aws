import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UpdateNeonAuthEmailProviderInput {
  project_id: string;
  branch_id: string;
}
export const UpdateNeonAuthEmailProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthEmailProviderInput>;

// Output Schema
export type UpdateNeonAuthEmailProviderOutput =
  | {
      host: string;
      port: number;
      username: string;
      password: Redacted.Redacted<string>;
      sender_email: string;
      sender_name: string;
    }
  | { sender_email?: string; sender_name?: string };
export const UpdateNeonAuthEmailProviderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
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
  ]) as unknown as Schema.Codec<UpdateNeonAuthEmailProviderOutput>;

// The operation
/**
 * Update email provider configuration
 *
 * Updates the email provider configuration for the specified branch's Neon Auth integration.
 * The email provider handles transactional messages such as verification emails and password reset links.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthEmailProvider = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateNeonAuthEmailProviderInput,
    outputSchema: UpdateNeonAuthEmailProviderOutput,
  }),
);

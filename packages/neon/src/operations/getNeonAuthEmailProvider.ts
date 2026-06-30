import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetNeonAuthEmailProviderInput {
  project_id: string;
  branch_id: string;
}
export const GetNeonAuthEmailProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
    }),
  ) as unknown as Schema.Codec<GetNeonAuthEmailProviderInput>;

// Output Schema
export type GetNeonAuthEmailProviderOutput =
  | {
      host: string;
      port: number;
      username: string;
      password: Redacted.Redacted<string>;
      sender_email: string;
      sender_name: string;
    }
  | { sender_email?: string; sender_name?: string };
export const GetNeonAuthEmailProviderOutput =
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
  ]) as unknown as Schema.Codec<GetNeonAuthEmailProviderOutput>;

// The operation
/**
 * Retrieve email provider configuration
 *
 * Retrieves the email provider configuration for the specified branch's Neon Auth integration,
 * including the provider type and server settings.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuthEmailProvider = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetNeonAuthEmailProviderInput,
    outputSchema: GetNeonAuthEmailProviderOutput,
  }),
);

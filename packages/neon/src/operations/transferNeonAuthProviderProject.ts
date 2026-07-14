import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface TransferNeonAuthProviderProjectInput {
  project_id: string;
  auth_provider: "mock" | "stack" | "better_auth";
}
export const TransferNeonAuthProviderProjectInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String,
    auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
  }).pipe(
    T.Http({ method: "POST", path: "/projects/auth/transfer_ownership" }),
  ) as unknown as Schema.Codec<TransferNeonAuthProviderProjectInput>;

// Output Schema
export interface TransferNeonAuthProviderProjectOutput {
  url: string;
}
export const TransferNeonAuthProviderProjectOutput =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.String,
  }) as unknown as Schema.Codec<TransferNeonAuthProviderProjectOutput>;

// The operation
/**
 * Transfer Neon-managed auth project to your own account
 *
 * Transfers ownership of your Neon-managed auth project to your own auth provider account.
 */
export const transferNeonAuthProviderProject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TransferNeonAuthProviderProjectInput,
    outputSchema: TransferNeonAuthProviderProjectOutput,
  }));

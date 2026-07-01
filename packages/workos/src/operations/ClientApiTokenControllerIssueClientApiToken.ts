import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface ClientApiTokenControllerIssueClientApiTokenInput {
  organization_id: string;
  user_id: string;
}
export const ClientApiTokenControllerIssueClientApiTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String,
    user_id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/client/token" }),
  ) as unknown as Schema.Codec<ClientApiTokenControllerIssueClientApiTokenInput>;

// Output Schema
export interface ClientApiTokenControllerIssueClientApiTokenOutput {
  token: string;
}
export const ClientApiTokenControllerIssueClientApiTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  }) as unknown as Schema.Codec<ClientApiTokenControllerIssueClientApiTokenOutput>;

// The operation
/**
 * Generate a Client API token
 *
 * Generate a short-lived, session-bound token for the Client GraphQL API, scoped to an organization and user.
 */
export const ClientApiTokenControllerIssueClientApiToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClientApiTokenControllerIssueClientApiTokenInput,
    outputSchema: ClientApiTokenControllerIssueClientApiTokenOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ClientApiTokenControllerIssueClientApiTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String,
    user_id: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/client/token" }));
export type ClientApiTokenControllerIssueClientApiTokenInput =
  typeof ClientApiTokenControllerIssueClientApiTokenInput.Type;

// Output Schema
export const ClientApiTokenControllerIssueClientApiTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  });
export type ClientApiTokenControllerIssueClientApiTokenOutput =
  typeof ClientApiTokenControllerIssueClientApiTokenOutput.Type;

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

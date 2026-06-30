import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersIntegrationsGithubPrepareCallbackCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    installation_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/integrations/github/prepare_callback/",
    }),
  );
export type UsersIntegrationsGithubPrepareCallbackCreateInput =
  typeof UsersIntegrationsGithubPrepareCallbackCreateInput.Type;

// Output Schema
export const UsersIntegrationsGithubPrepareCallbackCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersIntegrationsGithubPrepareCallbackCreateOutput =
  typeof UsersIntegrationsGithubPrepareCallbackCreateOutput.Type;

// The operation
/**
 * Seed personal GitHub manage callback state before opening installation settings on GitHub.
 */
export const usersIntegrationsGithubPrepareCallbackCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsGithubPrepareCallbackCreateInput,
    outputSchema: UsersIntegrationsGithubPrepareCallbackCreateOutput,
  }));

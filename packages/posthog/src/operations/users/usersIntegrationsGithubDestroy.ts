import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersIntegrationsGithubDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/users/{uuid}/integrations/github/{installation_id}/",
    }),
  );
export type UsersIntegrationsGithubDestroyInput =
  typeof UsersIntegrationsGithubDestroyInput.Type;

// Output Schema
export const UsersIntegrationsGithubDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersIntegrationsGithubDestroyOutput =
  typeof UsersIntegrationsGithubDestroyOutput.Type;

// The operation
/**
 * Disconnect a personal GitHub integration
 *
 * Remove a specific GitHub installation by its installation_id.
 */
export const usersIntegrationsGithubDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsGithubDestroyInput,
    outputSchema: UsersIntegrationsGithubDestroyOutput,
  }));

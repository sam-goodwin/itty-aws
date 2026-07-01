import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersIntegrationsGithubDestroyInput {
  installation_id: string;
  uuid: string;
}
export const UsersIntegrationsGithubDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/users/{uuid}/integrations/github/{installation_id}/",
    }),
  ) as unknown as Schema.Codec<UsersIntegrationsGithubDestroyInput>;

// Output Schema
export type UsersIntegrationsGithubDestroyOutput = void;
export const UsersIntegrationsGithubDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersIntegrationsGithubDestroyOutput>;

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

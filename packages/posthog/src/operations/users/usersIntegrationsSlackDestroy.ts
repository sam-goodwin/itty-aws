import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersIntegrationsSlackDestroyInput {
  slack_user_id: string;
  uuid: string;
}
export const UsersIntegrationsSlackDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slack_user_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/users/{uuid}/integrations/slack/{slack_user_id}/",
    }),
  ) as unknown as Schema.Codec<UsersIntegrationsSlackDestroyInput>;

// Output Schema
export type UsersIntegrationsSlackDestroyOutput = void;
export const UsersIntegrationsSlackDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersIntegrationsSlackDestroyOutput>;

// The operation
/**
 * Unlink a Slack identity
 *
 * Remove a Slack identity link by Slack user id. Idempotent and
 * flag-agnostic — users must always be able to unlink even after the
 * feature flag is turned off.
 */
export const usersIntegrationsSlackDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsSlackDestroyInput,
    outputSchema: UsersIntegrationsSlackDestroyOutput,
  }));

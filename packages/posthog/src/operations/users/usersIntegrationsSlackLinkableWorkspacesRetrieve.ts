import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersIntegrationsSlackLinkableWorkspacesRetrieveInput {
  uuid: string;
}
export const UsersIntegrationsSlackLinkableWorkspacesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/users/{uuid}/integrations/slack/linkable_workspaces/",
    }),
  ) as unknown as Schema.Codec<UsersIntegrationsSlackLinkableWorkspacesRetrieveInput>;

// Output Schema
export interface UsersIntegrationsSlackLinkableWorkspacesRetrieveOutput {
  results: {
    posthog_team_id: number;
    posthog_team_name: string;
    posthog_organization_name: string;
    slack_team_id: string;
    slack_team_name?: string | null;
  }[];
}
export const UsersIntegrationsSlackLinkableWorkspacesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        posthog_team_id: Schema.Number,
        posthog_team_name: Schema.String,
        posthog_organization_name: Schema.String,
        slack_team_id: Schema.String,
        slack_team_name: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<UsersIntegrationsSlackLinkableWorkspacesRetrieveOutput>;

// The operation
/**
 * List Slack workspaces this user could link to
 *
 * Return Slack workspaces in the user's organizations that they have
 * not yet linked. The settings UI uses this list to decide whether to
 * show a "Link my Slack account" button (non-empty list) and what to
 * offer in the picker when several are connectable.
 */
export const usersIntegrationsSlackLinkableWorkspacesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsSlackLinkableWorkspacesRetrieveInput,
    outputSchema: UsersIntegrationsSlackLinkableWorkspacesRetrieveOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersIntegrationsSlackStartCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    slack_team_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/integrations/slack/start/",
    }),
  );
export type UsersIntegrationsSlackStartCreateInput =
  typeof UsersIntegrationsSlackStartCreateInput.Type;

// Output Schema
export const UsersIntegrationsSlackStartCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    install_url: Schema.String,
  });
export type UsersIntegrationsSlackStartCreateOutput =
  typeof UsersIntegrationsSlackStartCreateOutput.Type;

// The operation
/**
 * Start Slack identity link from settings
 *
 * Mint a Sign-in-with-Slack invite URL initiated from settings, without
 * Slack-DM context. The returned URL takes the user through PostHog login
 * (already satisfied here), then to Slack OAuth, then back to our callback
 * which writes the ``UserIntegration`` row.
 * Without body params, falls back to the user's ``current_team`` and that
 * team's first Slack ``Integration`` — works when there's exactly one
 * linkable workspace. With ``team_id`` + ``slack_team_id``, links against
 * the exact pair (what the frontend uses when a picker is shown).
 * Refuses if the target team has no matching Slack workspace, if the
 * feature flag is off for the workspace, or if the user is already linked
 * to it.
 */
export const usersIntegrationsSlackStartCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsSlackStartCreateInput,
    outputSchema: UsersIntegrationsSlackStartCreateOutput,
  }));

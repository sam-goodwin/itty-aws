import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersIntegrationsListInput {
  uuid: string;
  kind?: "github" | "slack";
  limit?: number;
  offset?: number;
}
export const UsersIntegrationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.Literals(["github", "slack"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/integrations/" }),
  ) as unknown as Schema.Codec<UsersIntegrationsListInput>;

// Output Schema
export interface UsersIntegrationsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    results: {
      id: string;
      kind: string;
      installation_id: string;
      repository_selection?: string | null;
      account?: { type?: string | null; name?: string | null } | null;
      uses_shared_installation: boolean;
      created_at: string;
    }[];
  }[];
}
export const UsersIntegrationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        results: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            kind: Schema.String,
            installation_id: Schema.String,
            repository_selection: Schema.optional(Schema.NullOr(Schema.String)),
            account: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  type: Schema.optional(Schema.NullOr(Schema.String)),
                  name: Schema.optional(Schema.NullOr(Schema.String)),
                }),
              ),
            ),
            uses_shared_installation: Schema.Boolean,
            created_at: Schema.String,
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<UsersIntegrationsListOutput>;

// The operation
/**
 * List the user's personal integrations of a given kind
 *
 * Return the authenticated user's personal integrations of a given
 * ``kind`` (``github`` or ``slack``).
 * The response shape varies per kind because the underlying ``UserIntegration``
 * rows carry different identity fields — GitHub rows expose
 * ``installation_id`` / ``account`` / ``uses_shared_installation``; Slack
 * rows expose ``slack_user_id`` / ``slack_team_id`` / ``slack_team_name``.
 * Kind-specific destroy and start actions remain split so their distinct
 * semantics (e.g. Slack's lack of "uninstall on last reference") stay
 * explicit at the URL layer.
 * Default of ``kind=github`` is load-bearing: mobile (``apps/mobile/...``)
 * and the Code SDK (``packages/api-client/...``) both call this endpoint
 * without a query param today and rely on receiving GitHub rows.
 *
 * @param kind - Integration kind to list. Defaults to `github` for back-compat with mobile and the Code SDK, which call this endpoint without a query param and expect GitHub-shaped items.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const usersIntegrationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersIntegrationsListInput,
    outputSchema: UsersIntegrationsListOutput,
  }),
);

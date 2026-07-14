import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersIntegrationsGithubStartCreateInput {
  uuid: string;
  team_id?: number | null;
  connect_from?: string;
}
export const UsersIntegrationsGithubStartCreateInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    connect_from: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/integrations/github/start/",
    }),
  ) as unknown as Schema.Codec<UsersIntegrationsGithubStartCreateInput>;

// Output Schema
export interface UsersIntegrationsGithubStartCreateOutput {
  install_url: string;
  connect_flow: string;
}
export const UsersIntegrationsGithubStartCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    install_url: Schema.String,
    connect_flow: Schema.String,
  }) as unknown as Schema.Codec<UsersIntegrationsGithubStartCreateOutput>;

// The operation
/**
 * Start GitHub personal integration linking
 *
 * Start GitHub linking: either full App install or OAuth-only (user-to-server).
 * ``**_kwargs`` absorbs ``parent_lookup_uuid`` from the nested
 * ``/api/users/{uuid}/integrations/`` router (same pattern as ``local_evaluation``
 * under projects).
 * Usually returns ``install_url`` pointing at ``/installations/new`` so the
 * user can pick any GitHub org (new or already connected).  GitHub's install
 * page handles both cases: orgs where the app is installed show "Configure"
 * (no admin needed), orgs where it isn't show "Install" (needs admin).
 * **OAuth fast path:** when the current project already has a team-level
 * GitHub installation, and the user has no ``UserIntegration`` for that
 * installation yet, we skip the org picker and redirect straight to
 * ``/login/oauth/authorize`` so the user only authorizes themselves.
 * ``connect_from`` is preserved for first-party clients so they return to
 * the originating client immediately.
 * In both cases the response key is ``install_url`` for compatibility with callers.
 */
export const usersIntegrationsGithubStartCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsGithubStartCreateInput,
    outputSchema: UsersIntegrationsGithubStartCreateOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsPreviewTokenMintInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    revision_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{id}/preview-token/",
    }),
  );
export type AgentApplicationsPreviewTokenMintInput =
  typeof AgentApplicationsPreviewTokenMintInput.Type;

// Output Schema
export const AgentApplicationsPreviewTokenMintOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    expires_in: Schema.Number,
    ingress_slug: Schema.String,
    endpoints: Schema.Unknown,
    auth: Schema.Unknown,
    preview_proxy: Schema.Unknown,
  });
export type AgentApplicationsPreviewTokenMintOutput =
  typeof AgentApplicationsPreviewTokenMintOutput.Type;

// The operation
/**
 * Mint a short-lived JWT for talking to a non-live revision
 * directly via the public ingress URL. The caller attaches it as
 * the `x-agent-preview-token` header (or `?preview_token=` query
 * param for `EventSource`). See `_mint_preview_jwt` for the
 * payload + claim binding.
 * The response also includes `endpoints`, `auth`, and
 * `preview_proxy` blocks so the caller can wire a preview
 * invocation without grepping the agent-ingress source for which
 * path each trigger exposes or which header name carries the
 * token. This is the "self-describing" half of preview-mode —
 * every piece of info you need to hit ingress is in one response.
 * POST is the canonical verb — minting credentials for downstream
 * `run`/`send`/`cancel` is a write-class capability. A GET sibling
 * exists at the same URL for `EventSource` callers (which can't set
 * headers); it is also write-scoped, since it returns the same token.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param revision_id - Target draft revision. Must belong to this application and not be live.
 */
export const agentApplicationsPreviewTokenMint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsPreviewTokenMintInput,
    outputSchema: AgentApplicationsPreviewTokenMintOutput,
  }));

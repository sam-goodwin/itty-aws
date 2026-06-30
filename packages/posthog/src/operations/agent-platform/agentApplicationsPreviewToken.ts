import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsPreviewTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    revision_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/preview-token/",
    }),
  );
export type AgentApplicationsPreviewTokenInput =
  typeof AgentApplicationsPreviewTokenInput.Type;

// Output Schema
export const AgentApplicationsPreviewTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    expires_in: Schema.Number,
    ingress_slug: Schema.String,
    endpoints: Schema.Unknown,
    auth: Schema.Unknown,
    preview_proxy: Schema.Unknown,
  });
export type AgentApplicationsPreviewTokenOutput =
  typeof AgentApplicationsPreviewTokenOutput.Type;

// The operation
/**
 * GET sibling of `preview_token_mint`. Same body and response
 * shape — exists because `EventSource` can't set headers, so SSE
 * callers fetch the token via GET and then attach `?preview_token=`
 * to the ingress URL. Behind the same URL (`url_path="preview-token"`)
 * thanks to DRF's `@<action>.mapping.get`; DRF resolves it to a
 * distinct `view.action`, but it is in `scope_object_write_actions`
 * alongside the POST sibling — both return a usable credential, so
 * both require `agents:write`.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param revision_id - Target draft revision. Must belong to this application and not be live.
 */
export const agentApplicationsPreviewToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsPreviewTokenInput,
    outputSchema: AgentApplicationsPreviewTokenOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsRevisionsDestroyInput {
  application_id: string;
  id: string;
  project_id: string;
}
export const AgentApplicationsRevisionsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsRevisionsDestroyInput>;

// Output Schema
export type AgentApplicationsRevisionsDestroyOutput = void;
export const AgentApplicationsRevisionsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsRevisionsDestroyOutput>;

// The operation
/**
 * Revisions of an agent. Created in `draft`, promoted through
 * `ready → live` once the bundle has been uploaded + frozen.
 * URLs (nested under an application):
 * Model CRUD:
 * GET   .../revisions/                       list
 * POST  .../revisions/                       create draft
 * GET   .../revisions/<id>/                  retrieve
 * PATCH .../revisions/<id>/                  update spec (draft only)
 * Lifecycle:
 * POST  .../revisions/<id>/promote/          ready → live
 * POST  .../revisions/<id>/archive/          → archived
 * POST  .../revisions/<id>/freeze/           draft → ready (stamps sha256)
 * POST  .../revisions/<id>/clone_from/       copy bundle from another rev
 * POST  .../revisions/new_draft/             create draft + clone_from atomically
 * Bundle authoring (proxied to the janitor):
 * GET    .../revisions/<id>/manifest/        list paths + sha256
 * GET    .../revisions/<id>/file/?path=…     read one file
 * PUT    .../revisions/<id>/file/?path=…     write one file (draft)
 * DELETE .../revisions/<id>/file/?path=…     delete one file (draft)
 * GET    .../revisions/<id>/bundle/          bulk pull all files
 * PUT    .../revisions/<id>/bundle/          bulk push (replace|merge)
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsDestroyInput,
    outputSchema: AgentApplicationsRevisionsDestroyOutput,
  }));

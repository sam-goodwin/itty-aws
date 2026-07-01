import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WizardSessionsStreamRetrieveInput {
  project_id: string;
  skill_id?: string;
  workflow_id: string;
}
export const WizardSessionsStreamRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_id: Schema.optional(Schema.String),
    workflow_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/wizard/sessions/stream/",
    }),
  ) as unknown as Schema.Codec<WizardSessionsStreamRetrieveInput>;

// Output Schema
export type WizardSessionsStreamRetrieveOutput = void;
export const WizardSessionsStreamRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WizardSessionsStreamRetrieveOutput>;

// The operation
/**
 * Server-Sent Events stream of wizard session updates for a (workflow_id, skill_id) pair. On connect, the current latest session (if any) is emitted as the first event; subsequent upserts are streamed in real time. The server closes the connection after 900 seconds with an `event: end` line so the client (EventSource) can reconnect.
 * **SDK consumers**: do not call the generated fetch wrapper for this path — it will buffer the entire infinite stream. Use the URL builder (`getWizardSessionsStreamRetrieveUrl`) with the browser's `EventSource` API instead.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const wizardSessionsStreamRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WizardSessionsStreamRetrieveInput,
    outputSchema: WizardSessionsStreamRetrieveOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SignalsProcessingPauseUpdateInput {
  project_id: string;
  timestamp?: string;
}
export const SignalsProcessingPauseUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    timestamp: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/signals/processing/pause/",
    }),
  ) as unknown as Schema.Codec<SignalsProcessingPauseUpdateInput>;

// Output Schema
export interface SignalsProcessingPauseUpdateOutput {
  status?: string;
  paused_until?: string;
}
export const SignalsProcessingPauseUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    paused_until: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SignalsProcessingPauseUpdateOutput>;

// The operation
/**
 * View and control signal processing pipeline state for a team.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsProcessingPauseUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsProcessingPauseUpdateInput,
    outputSchema: SignalsProcessingPauseUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

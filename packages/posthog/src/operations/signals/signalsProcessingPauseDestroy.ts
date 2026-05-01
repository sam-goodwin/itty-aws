import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsProcessingPauseDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/signals/processing/pause/",
    }),
  );
export type SignalsProcessingPauseDestroyInput =
  typeof SignalsProcessingPauseDestroyInput.Type;

// Output Schema
export const SignalsProcessingPauseDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    paused_until: Schema.optional(Schema.String),
  });
export type SignalsProcessingPauseDestroyOutput =
  typeof SignalsProcessingPauseDestroyOutput.Type;

// The operation
/**
 * View and control signal processing pipeline state for a team.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsProcessingPauseDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsProcessingPauseDestroyInput,
    outputSchema: SignalsProcessingPauseDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));

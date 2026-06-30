import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsScoutScratchpadForgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    key: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/scratchpad/forget/",
    }),
  );
export type SignalsScoutScratchpadForgetInput =
  typeof SignalsScoutScratchpadForgetInput.Type;

// Output Schema
export const SignalsScoutScratchpadForgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Boolean,
  });
export type SignalsScoutScratchpadForgetOutput =
  typeof SignalsScoutScratchpadForgetOutput.Type;

// The operation
/**
 * Forget a scratchpad entry by key
 *
 * Delete an entry by key. Returns `deleted=false` if no row matched.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutScratchpadForget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutScratchpadForgetInput,
    outputSchema: SignalsScoutScratchpadForgetOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsScoutScratchpadForgetInput {
  project_id: string;
  key: string;
}
export const SignalsScoutScratchpadForgetInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    key: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/scratchpad/forget/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutScratchpadForgetInput>;

// Output Schema
export interface SignalsScoutScratchpadForgetOutput {
  deleted: boolean;
}
export const SignalsScoutScratchpadForgetOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Boolean,
  }) as unknown as Schema.Codec<SignalsScoutScratchpadForgetOutput>;

// The operation
/**
 * Forget a scratchpad entry by key
 *
 * Delete an entry by key. Returns `deleted=false` if no row matched.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutScratchpadForget =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutScratchpadForgetInput,
    outputSchema: SignalsScoutScratchpadForgetOutput,
  }));

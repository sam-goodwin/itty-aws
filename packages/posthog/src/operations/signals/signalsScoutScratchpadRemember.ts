import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface SignalsScoutScratchpadRememberInput {
  project_id: string;
  key: string;
  content: string;
  run_id?: string | null;
}
export const SignalsScoutScratchpadRememberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    key: Schema.String,
    content: Schema.String,
    run_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/scratchpad/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutScratchpadRememberInput>;

// Output Schema
export interface SignalsScoutScratchpadRememberOutput {
  key: string;
  content: string;
  created_at: string | null;
  updated_at: string | null;
  created_by_run_id: string | null;
  created_by_skill?: string | null;
  created_by_run_url?: string | null;
}
export const SignalsScoutScratchpadRememberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    content: Schema.String,
    created_at: Schema.NullOr(Schema.String),
    updated_at: Schema.NullOr(Schema.String),
    created_by_run_id: Schema.NullOr(Schema.String),
    created_by_skill: Schema.optional(Schema.NullOr(Schema.String)),
    created_by_run_url: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<SignalsScoutScratchpadRememberOutput>;

// The operation
/**
 * Remember a scratchpad entry
 *
 * Upsert a memory keyed on `(team, key)`. Re-using a key updates the existing entry in place.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutScratchpadRemember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutScratchpadRememberInput,
    outputSchema: SignalsScoutScratchpadRememberOutput,
    errors: [BadRequest] as const,
  }));

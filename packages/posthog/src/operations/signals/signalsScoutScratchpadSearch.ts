import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsScoutScratchpadSearchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    content_max_chars: Schema.optional(Schema.Number),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    keys_only: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    text: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/scratchpad/",
    }),
  );
export type SignalsScoutScratchpadSearchInput =
  typeof SignalsScoutScratchpadSearchInput.Type;

// Output Schema
export const SignalsScoutScratchpadSearchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      key: Schema.String,
      content: Schema.String,
      created_at: Schema.NullOr(Schema.String),
      updated_at: Schema.NullOr(Schema.String),
      created_by_run_id: Schema.NullOr(Schema.String),
      created_by_skill: Schema.optional(Schema.NullOr(Schema.String)),
      created_by_run_url: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  );
export type SignalsScoutScratchpadSearchOutput =
  typeof SignalsScoutScratchpadSearchOutput.Type;

// The operation
/**
 * Search the scout scratchpad
 *
 * Return `SignalScratchpad` entries for this project, newest-first. ILIKE matches on `content` and `key`. `date_from` / `date_to` are a half-open window on `updated_at` (`>= date_from`, `< date_to`); pass `date_to` (the `updated_at` of the oldest entry seen) on subsequent calls to walk past the cap. Pass `keys_only=true` to scan keys without pulling entry bodies, or `content_max_chars` to cap each `content` to a preview — both keep a wide orientation scan from returning every entry's full prose. Results capped at 500.
 *
 * @param content_max_chars - Truncate each entry's `content` to the first N characters (a preview). Omit for the full body. Ignored when `keys_only=true`.
 * @param date_from - ISO-8601 inclusive lower bound on `updated_at`. Omit to skip the lower bound.
 * @param date_to - ISO-8601 exclusive upper bound on `updated_at`. Pass to walk back past the result cap on subsequent calls (cursor-style: set to the `updated_at` of the oldest entry from the prior page).
 * @param keys_only - When true, blank each entry's `content` and return only keys + metadata. Use to scan which memories exist without pulling their (potentially large) bodies, then re-query the ones worth a full read. Takes precedence over `content_max_chars`.
 * @param limit - Max rows to return (default 20, hard cap 500).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param text - ILIKE substring match against `content`. Omit to return the most recent entries.
 */
export const signalsScoutScratchpadSearch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutScratchpadSearchInput,
    outputSchema: SignalsScoutScratchpadSearchOutput,
  }));

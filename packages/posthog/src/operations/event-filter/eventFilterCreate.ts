import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventFilterCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    mode: Schema.optional(Schema.Literals(["disabled", "dry_run", "live"])),
    filter_tree: Schema.optional(Schema.NullOr(Schema.Unknown)),
    test_cases: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/api/environments/{project_id}/event_filter/",
  }),
);
export type EventFilterCreateInput = typeof EventFilterCreateInput.Type;

// Output Schema
export const EventFilterCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    mode: Schema.optional(Schema.Literals(["disabled", "dry_run", "live"])),
    filter_tree: Schema.optional(Schema.NullOr(Schema.Unknown)),
    test_cases: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type EventFilterCreateOutput = typeof EventFilterCreateOutput.Type;

// The operation
/**
 * Create or update the event filter config.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventFilterCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventFilterCreateInput,
  outputSchema: EventFilterCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EventFilterRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/event_filter/",
    }),
  );
export type EventFilterRetrieveInput = typeof EventFilterRetrieveInput.Type;

// Output Schema
export const EventFilterRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    mode: Schema.optional(Schema.Literals(["disabled", "dry_run", "live"])),
    filter_tree: Schema.optional(Schema.NullOr(Schema.Unknown)),
    test_cases: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type EventFilterRetrieveOutput = typeof EventFilterRetrieveOutput.Type;

// The operation
/**
 * Returns the event filter config for the team, or null if not yet created.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventFilterRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventFilterRetrieveInput,
  outputSchema: EventFilterRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

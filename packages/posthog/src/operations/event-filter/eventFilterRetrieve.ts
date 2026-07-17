import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EventFilterRetrieveInput {
  project_id: string;
}
export const EventFilterRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/projects/{project_id}/event_filter/" }),
  ) as unknown as Schema.Codec<EventFilterRetrieveInput>;

// Output Schema
export interface EventFilterRetrieveOutput {
  id?: string;
  mode?: "disabled" | "dry_run" | "live";
  filter_tree?: unknown;
  test_cases?: unknown;
  created_at?: string;
  updated_at?: string;
}
export const EventFilterRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.Literals(["disabled", "dry_run", "live"])),
    filter_tree: Schema.optional(Schema.Unknown),
    test_cases: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventFilterRetrieveOutput>;

// The operation
/**
 * Returns the event filter config for the team, or null if not yet created.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventFilterRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventFilterRetrieveInput,
  outputSchema: EventFilterRetrieveOutput,
}));

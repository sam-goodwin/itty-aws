import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EventFilterCreateInput {
  project_id: string;
  id?: string;
  mode?: "disabled" | "dry_run" | "live";
  filter_tree?: unknown;
  test_cases?: unknown;
  created_at?: string;
  updated_at?: string;
}
export const EventFilterCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.Literals(["disabled", "dry_run", "live"])),
    filter_tree: Schema.optional(Schema.Unknown),
    test_cases: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/event_filter/" }),
) as unknown as Schema.Codec<EventFilterCreateInput>;

// Output Schema
export interface EventFilterCreateOutput {
  id?: string;
  mode?: "disabled" | "dry_run" | "live";
  filter_tree?: unknown;
  test_cases?: unknown;
  created_at?: string;
  updated_at?: string;
}
export const EventFilterCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.Literals(["disabled", "dry_run", "live"])),
    filter_tree: Schema.optional(Schema.Unknown),
    test_cases: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventFilterCreateOutput>;

// The operation
/**
 * Create or update the event filter config.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventFilterCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventFilterCreateInput,
  outputSchema: EventFilterCreateOutput,
}));

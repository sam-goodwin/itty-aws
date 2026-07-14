import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PersonsSplitCreateInput {
  id: string;
  project_id: string;
  format?: "csv" | "json";
  main_distinct_id?: string | null;
  distinct_ids_to_split?: string[] | null;
}
export const PersonsSplitCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    main_distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    distinct_ids_to_split: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/{id}/split/",
    }),
  ) as unknown as Schema.Codec<PersonsSplitCreateInput>;

// Output Schema
export interface PersonsSplitCreateOutput {
  success: boolean;
}
export const PersonsSplitCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  }) as unknown as Schema.Codec<PersonsSplitCreateOutput>;

// The operation
/**
 * Split distinct_ids off a merged person. Two mutually exclusive modes:
 * - **`distinct_ids_to_split`** (recommended for surgical edits): moves only the listed distinct_ids off this person onto new single-id persons. The original person keeps every other distinct_id and its properties.
 * - **`main_distinct_id`**: keeps only the specified distinct_id on this person; moves every *other* distinct_id off onto its own new person. If omitted, the first distinct_id is kept.
 * The original person always retains its properties. To clear individual properties afterward, use the `delete_property` endpoint.
 * The split runs asynchronously: a 201 response means the task was enqueued. Newly-created split-off persons get a deterministic UUID derived from `(team_id, distinct_id)`, so they can be located client-side without polling. If you need to delete a split-off person after this call, prefer looking it up by that deterministic UUID rather than by distinct_id, since the latter still resolves to the original merged person until the async task completes.
 *
 * @param id - A unique value identifying this person. Accepts both numeric ID and UUID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsSplitCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PersonsSplitCreateInput,
  outputSchema: PersonsSplitCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));

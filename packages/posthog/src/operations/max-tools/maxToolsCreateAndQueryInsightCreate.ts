import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MaxToolsCreateAndQueryInsightCreateInput {
  project_id: string;
  query?: string;
  insight_type?: "trends" | "funnel" | "retention" | "sql";
}
export const MaxToolsCreateAndQueryInsightCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.optional(Schema.String),
    insight_type: Schema.optional(
      Schema.Literals(["trends", "funnel", "retention", "sql"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/max_tools/create_and_query_insight/",
    }),
  ) as unknown as Schema.Codec<MaxToolsCreateAndQueryInsightCreateInput>;

// Output Schema
export type MaxToolsCreateAndQueryInsightCreateOutput = Record<string, unknown>;
export const MaxToolsCreateAndQueryInsightCreateOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<MaxToolsCreateAndQueryInsightCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const maxToolsCreateAndQueryInsightCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MaxToolsCreateAndQueryInsightCreateInput,
    outputSchema: MaxToolsCreateAndQueryInsightCreateOutput,
  }));

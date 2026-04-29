import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const MaxToolsCreateAndQueryInsightCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.String,
    insight_type: Schema.Literals(["trends", "funnel", "retention", "sql"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/max_tools/create_and_query_insight/",
    }),
  );
export type MaxToolsCreateAndQueryInsightCreateInput =
  typeof MaxToolsCreateAndQueryInsightCreateInput.Type;

// Output Schema
export const MaxToolsCreateAndQueryInsightCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type MaxToolsCreateAndQueryInsightCreateOutput =
  typeof MaxToolsCreateAndQueryInsightCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const maxToolsCreateAndQueryInsightCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaxToolsCreateAndQueryInsightCreateInput,
    outputSchema: MaxToolsCreateAndQueryInsightCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

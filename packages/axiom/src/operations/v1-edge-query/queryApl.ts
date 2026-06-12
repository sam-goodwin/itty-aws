import * as Schema from "effect/Schema";
import { QueryOptionsSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const QueryAplInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  format: Schema.Literals(["legacy", "tabular", "tabular-rows"]),
  nocache: Schema.optional(Schema.Boolean),
  saveAsKind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  "streaming-duration": Schema.optional(Schema.String),
  "apl-source": Schema.optional(Schema.String),
  "apl-source-id": Schema.optional(Schema.String),
  totals: Schema.optional(Schema.Boolean),
  apl: Schema.String,
  cursor: Schema.optional(Schema.String),
  defaultLimit: Schema.optional(Schema.Number),
  defaultOrder: Schema.optional(
    Schema.Array(
      Schema.Struct({
        desc: Schema.optional(Schema.Boolean),
        field: Schema.optional(Schema.String),
      }),
    ),
  ),
  endTime: Schema.optional(Schema.String),
  includeCursor: Schema.optional(Schema.Boolean),
  includeCursorField: Schema.optional(Schema.Boolean),
  libraries: Schema.optional(Schema.Array(Schema.String)),
  maxBinAutoGroups: Schema.optional(Schema.Number),
  queryEdgeDeployment: Schema.optional(Schema.String),
  queryOptions: Schema.optional(Schema.suspend(() => QueryOptionsSchema)),
  queryRegion: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).pipe(T.Http({ method: "POST", path: "/v1/datasets/_apl?format=tabular" }));
export type QueryAplInput = typeof QueryAplInput.Type;

// Output Schema
export const QueryAplOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type QueryAplOutput = typeof QueryAplOutput.Type;

// The operation
/**
 *
 * @param id - when saveAsKind is true, this parameter indicates the id of the associated dataset
 * @param apl-source - contains the source of the APL query (for example console, dashboard, etc.)
 * @param apl-source-id - contains the id of the source, for example dashboard_id
 * @param totals - Include a totals table (only supported in MetricsDB)
 */
export const queryApl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryAplInput,
  outputSchema: QueryAplOutput,
}));

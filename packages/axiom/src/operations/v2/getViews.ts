import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface GetViewsInput {}
export const GetViewsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/views" }),
) as unknown as Schema.Codec<GetViewsInput>;

// Output Schema
export type GetViewsOutput = {
  aplQuery: string;
  datasets?: string[];
  description?: string;
  name: string;
  sharedByOrg?: string;
  sharedByOrgName?: string;
}[];
export const GetViewsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    aplQuery: Schema.String,
    datasets: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    name: Schema.String,
    sharedByOrg: Schema.optional(Schema.String),
    sharedByOrgName: Schema.optional(Schema.String),
  }),
) as unknown as Schema.Codec<GetViewsOutput>;

// The operation
export const getViews = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetViewsInput,
  outputSchema: GetViewsOutput,
}));

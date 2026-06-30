import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface GetViewInput {
  id: string;
}
export const GetViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/views/{id}" }),
) as unknown as Schema.Codec<GetViewInput>;

// Output Schema
export interface GetViewOutput {
  aplQuery: string;
  datasets?: string[];
  description?: string;
  name: string;
  sharedByOrg?: string;
  sharedByOrgName?: string;
}
export const GetViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GetViewOutput>;

// The operation
export const getView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetViewInput,
  outputSchema: GetViewOutput,
  errors: [NotFound] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface UpdateViewInput {
  id: string;
  aplQuery: string;
  datasets?: ReadonlyArray<string>;
  description?: string;
  name: string;
  sharedByOrg?: string;
  sharedByOrgName?: string;
}
export const UpdateViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "PUT", path: "/v2/views/{id}" }),
) as unknown as Schema.Codec<UpdateViewInput>;

// Output Schema
export interface UpdateViewOutput {
  aplQuery: string;
  datasets?: ReadonlyArray<string>;
  description?: string;
  name: string;
  sharedByOrg?: string;
  sharedByOrgName?: string;
}
export const UpdateViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UpdateViewOutput>;

// The operation
export const updateView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateViewInput,
  outputSchema: UpdateViewOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));

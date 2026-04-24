import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { UnprocessableEntity } from "../../errors";

// Input Schema
export const CreateViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/views" }));
export type CreateViewInput = typeof CreateViewInput.Type;

// Output Schema
export const CreateViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
});
export type CreateViewOutput = typeof CreateViewOutput.Type;

// The operation
export const createView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateViewInput,
  outputSchema: CreateViewOutput,
  errors: [UnprocessableEntity] as const,
}));

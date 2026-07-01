import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateViewInput {
  aplQuery: string;
  datasets?: ReadonlyArray<string>;
  description?: string;
  name: string;
  sharedByOrg?: string;
  sharedByOrgName?: string;
}
export const CreateViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/v2/views" }),
) as unknown as Schema.Codec<CreateViewInput>;

// Output Schema
export interface CreateViewOutput {
  aplQuery: string;
  datasets?: ReadonlyArray<string>;
  description?: string;
  name: string;
  sharedByOrg?: string;
  sharedByOrgName?: string;
}
export const CreateViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateViewOutput>;

// The operation
export const createView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateViewInput,
  outputSchema: CreateViewOutput,
  errors: [UnprocessableEntity] as const,
}));

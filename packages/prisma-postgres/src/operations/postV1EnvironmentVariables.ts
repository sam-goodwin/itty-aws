import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PostV1EnvironmentVariablesInput {
  projectId: string;
  branchId?: string;
  class: "production" | "preview";
  key: string;
  value: string;
}
export const PostV1EnvironmentVariablesInput =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String,
    branchId: Schema.optional(Schema.String),
    class: Schema.Literals(["production", "preview"]),
    key: Schema.String,
    value: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/environment-variables" }),
  ) as unknown as Schema.Codec<PostV1EnvironmentVariablesInput>;

// Output Schema
export interface PostV1EnvironmentVariablesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    projectId: string;
    branchId: string | null;
    class: "production" | "preview";
    key: string;
    valueKid: string;
    isManagedBySystem: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
export const PostV1EnvironmentVariablesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      projectId: Schema.String,
      branchId: Schema.NullOr(Schema.String),
      class: Schema.Literals(["production", "preview"]),
      key: Schema.String,
      valueKid: Schema.String,
      isManagedBySystem: Schema.Boolean,
      createdAt: Schema.String,
      updatedAt: Schema.String,
    }),
  }) as unknown as Schema.Codec<PostV1EnvironmentVariablesOutput>;

// The operation
/**
 * Create an environment variable
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Creates a new environment variable in a project's `production` or `preview` environment, or a preview branch override when `branchId` is supplied. Returns 409 if a variable with the same key already exists in that scope — use PATCH to replace its value. Values are stored encrypted and are not returned by subsequent reads.
 */
export const postV1EnvironmentVariables = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV1EnvironmentVariablesInput,
  outputSchema: PostV1EnvironmentVariablesOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));

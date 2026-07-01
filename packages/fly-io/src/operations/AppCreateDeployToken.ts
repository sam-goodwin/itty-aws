import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppCreateDeployTokenInput {
  app_name: string;
  expiry?: string;
}
export const AppCreateDeployTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    expiry: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/apps/{app_name}/deploy_token" }),
  ) as unknown as Schema.Codec<AppCreateDeployTokenInput>;

// Output Schema
export interface AppCreateDeployTokenOutput {
  token?: string;
}
export const AppCreateDeployTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppCreateDeployTokenOutput>;

// The operation
/**
 * Create App deploy token
 *
 * @param app_name - Fly App Name
 */
export const AppCreateDeployToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppCreateDeployTokenInput,
    outputSchema: AppCreateDeployTokenOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

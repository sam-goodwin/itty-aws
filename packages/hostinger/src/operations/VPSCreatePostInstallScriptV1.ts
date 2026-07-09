import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSCreatePostInstallScriptV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    content: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/api/vps/v1/post-install-scripts" }));
export type VPSCreatePostInstallScriptV1Input =
  typeof VPSCreatePostInstallScriptV1Input.Type;

// Output Schema
export const VPSCreatePostInstallScriptV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSCreatePostInstallScriptV1Output =
  typeof VPSCreatePostInstallScriptV1Output.Type;

// The operation
/**
 * Create post-install script
 *
 * Add a new post-install script to your account, which can then be used after virtual machine installation.
 * The script contents will be saved to the file `/post_install` with executable attribute set
 * and will be executed once virtual machine is installed.
 * The output of the script will be redirected to `/post_install.log`. Maximum script size is 48KB.
 * Use this endpoint to create automation scripts for VPS setup tasks.
 */
export const VPSCreatePostInstallScriptV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VPSCreatePostInstallScriptV1Input,
    outputSchema: VPSCreatePostInstallScriptV1Output,
    errors: [UnprocessableEntity] as const,
  }));

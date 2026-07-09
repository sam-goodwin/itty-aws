import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSDeletePostInstallScriptV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postInstallScriptId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/post-install-scripts/{postInstallScriptId}",
    }),
  );
export type VPSDeletePostInstallScriptV1Input =
  typeof VPSDeletePostInstallScriptV1Input.Type;

// Output Schema
export const VPSDeletePostInstallScriptV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type VPSDeletePostInstallScriptV1Output =
  typeof VPSDeletePostInstallScriptV1Output.Type;

// The operation
/**
 * Delete post-install script
 *
 * Delete a post-install script from your account.
 * Use this endpoint to remove unused automation scripts.
 *
 * @param postInstallScriptId - Post-install script ID
 */
export const VPSDeletePostInstallScriptV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VPSDeletePostInstallScriptV1Input,
    outputSchema: VPSDeletePostInstallScriptV1Output,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetPostInstallScriptV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postInstallScriptId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/post-install-scripts/{postInstallScriptId}",
    }),
  );
export type VPSGetPostInstallScriptV1Input =
  typeof VPSGetPostInstallScriptV1Input.Type;

// Output Schema
export const VPSGetPostInstallScriptV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSGetPostInstallScriptV1Output =
  typeof VPSGetPostInstallScriptV1Output.Type;

// The operation
/**
 * Get post-install script
 *
 * Retrieve post-install script by its ID.
 * Use this endpoint to view specific automation script details.
 *
 * @param postInstallScriptId - Post-install script ID
 */
export const VPSGetPostInstallScriptV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetPostInstallScriptV1Input,
    outputSchema: VPSGetPostInstallScriptV1Output,
  }),
);

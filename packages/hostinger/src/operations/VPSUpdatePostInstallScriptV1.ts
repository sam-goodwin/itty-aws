import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSUpdatePostInstallScriptV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postInstallScriptId: Schema.Number.pipe(T.PathParam()),
    name: Schema.String,
    content: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/vps/v1/post-install-scripts/{postInstallScriptId}",
    }),
  );
export type VPSUpdatePostInstallScriptV1Input =
  typeof VPSUpdatePostInstallScriptV1Input.Type;

// Output Schema
export const VPSUpdatePostInstallScriptV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSUpdatePostInstallScriptV1Output =
  typeof VPSUpdatePostInstallScriptV1Output.Type;

// The operation
/**
 * Update post-install script
 *
 * Update a specific post-install script.
 * Use this endpoint to modify existing automation scripts.
 *
 * @param postInstallScriptId - Post-install script ID
 */
export const VPSUpdatePostInstallScriptV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VPSUpdatePostInstallScriptV1Input,
    outputSchema: VPSUpdatePostInstallScriptV1Output,
    errors: [UnprocessableEntity] as const,
  }));

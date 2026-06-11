import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetPostInstallScriptsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/api/vps/v1/post-install-scripts" }));
export type VPSGetPostInstallScriptsV1Input =
  typeof VPSGetPostInstallScriptsV1Input.Type;

// Output Schema
export const VPSGetPostInstallScriptsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          content: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type VPSGetPostInstallScriptsV1Output =
  typeof VPSGetPostInstallScriptsV1Output.Type;

// The operation
/**
 * Get post-install scripts
 *
 * Retrieve post-install scripts associated with your account.
 * Use this endpoint to view available automation scripts for VPS deployment.
 *
 * @param page - Page number
 */
export const VPSGetPostInstallScriptsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetPostInstallScriptsV1Input,
    outputSchema: VPSGetPostInstallScriptsV1Output,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export const DeleteV1AppsByAppIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v1/apps/{appId}" }));
export type DeleteV1AppsByAppIdInput = typeof DeleteV1AppsByAppIdInput.Type;

// Output Schema
export const DeleteV1AppsByAppIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteV1AppsByAppIdOutput = typeof DeleteV1AppsByAppIdOutput.Type;

// The operation
/**
 * Delete app
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Deletes an app. Deployments under the app are deleted before the app is deleted.
 */
export const deleteV1AppsByAppId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteV1AppsByAppIdInput,
  outputSchema: DeleteV1AppsByAppIdOutput,
  errors: [Forbidden, NotFound, Conflict] as const,
}));

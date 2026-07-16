import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface DeleteV1AppsByAppIdInput {
  appId: string;
}
export const DeleteV1AppsByAppIdInput =
  /*@__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/apps/{appId}" }),
  ) as unknown as Schema.Codec<DeleteV1AppsByAppIdInput>;

// Output Schema
export type DeleteV1AppsByAppIdOutput = void;
export const DeleteV1AppsByAppIdOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1AppsByAppIdOutput>;

// The operation
/**
 * Delete app
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Deletes an app. Deployments under the app are deleted before the app is deleted.
 */
export const deleteV1AppsByAppId = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteV1AppsByAppIdInput,
  outputSchema: DeleteV1AppsByAppIdOutput,
  errors: [Forbidden, NotFound, Conflict] as const,
}));

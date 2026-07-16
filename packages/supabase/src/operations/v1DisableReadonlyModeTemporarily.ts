import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DisableReadonlyModeTemporarilyInput {
  ref: string;
}
export const V1DisableReadonlyModeTemporarilyInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/readonly/temporary-disable",
    }),
  ) as unknown as Schema.Codec<V1DisableReadonlyModeTemporarilyInput>;

// Output Schema
export type V1DisableReadonlyModeTemporarilyOutput = void;
export const V1DisableReadonlyModeTemporarilyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DisableReadonlyModeTemporarilyOutput>;

// The operation
/**
 * Disables project's readonly mode for the next 15 minutes
 *
 * @param ref - Project ref
 */
export const v1DisableReadonlyModeTemporarily =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: V1DisableReadonlyModeTemporarilyInput,
    outputSchema: V1DisableReadonlyModeTemporarilyOutput,
    errors: [BadRequest, Forbidden] as const,
  }));

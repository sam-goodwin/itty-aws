import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppsDeleteInput {
  app_name: string;
}
export const AppsDeleteInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/apps/{app_name}" }),
) as unknown as Schema.Codec<AppsDeleteInput>;

// Output Schema
export type AppsDeleteOutput = void;
export const AppsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppsDeleteOutput>;

// The operation
/**
 * Destroy App
 *
 * Delete an app by its name.
 *
 * @param app_name - Fly App Name
 */
export const AppsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsDeleteInput,
  outputSchema: AppsDeleteOutput,
  errors: [Forbidden, NotFound] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFunctionsIconsRetrieveInput {
  project_id: string;
}
export const HogFunctionsIconsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_functions/icons/",
    }),
  ) as unknown as Schema.Codec<HogFunctionsIconsRetrieveInput>;

// Output Schema
export type HogFunctionsIconsRetrieveOutput = void;
export const HogFunctionsIconsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HogFunctionsIconsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsIconsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFunctionsIconsRetrieveInput,
    outputSchema: HogFunctionsIconsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFunctionsIconRetrieveInput {
  project_id: string;
}
export const HogFunctionsIconRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_functions/icon/",
    }),
  ) as unknown as Schema.Codec<HogFunctionsIconRetrieveInput>;

// Output Schema
export type HogFunctionsIconRetrieveOutput = void;
export const HogFunctionsIconRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HogFunctionsIconRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsIconRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFunctionsIconRetrieveInput,
    outputSchema: HogFunctionsIconRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);

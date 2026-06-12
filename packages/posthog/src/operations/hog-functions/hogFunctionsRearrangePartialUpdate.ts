import * as Schema from "effect/Schema";
import { HogFunctionSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFunctionsRearrangePartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    orders: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/hog_functions/rearrange/",
    }),
  );
export type HogFunctionsRearrangePartialUpdateInput =
  typeof HogFunctionsRearrangePartialUpdateInput.Type;

// Output Schema
export const HogFunctionsRearrangePartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => HogFunctionSchema),
  );
export type HogFunctionsRearrangePartialUpdateOutput =
  typeof HogFunctionsRearrangePartialUpdateOutput.Type;

// The operation
/**
 * Update the execution order of multiple HogFunctions.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsRearrangePartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFunctionsRearrangePartialUpdateInput,
    outputSchema: HogFunctionsRearrangePartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));

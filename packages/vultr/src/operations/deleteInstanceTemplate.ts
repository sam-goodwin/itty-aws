import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteInstanceTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instancetemplateId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/instances/templates/{instancetemplateId}",
    }),
  );
export type DeleteInstanceTemplateInput =
  typeof DeleteInstanceTemplateInput.Type;

// Output Schema
export const DeleteInstanceTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteInstanceTemplateOutput =
  typeof DeleteInstanceTemplateOutput.Type;

// The operation
/**
 * Delete Instance Template
 *
 * Delete an instance template.
 *
 * @param instancetemplateId - The [Instance Template ID](#operation/list-instance-templates).
 */
export const deleteInstanceTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteInstanceTemplateInput,
    outputSchema: DeleteInstanceTemplateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

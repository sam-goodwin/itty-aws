import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsTestRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/batch_exports/test/",
    }),
  );
export type BatchExportsTestRetrieveInput =
  typeof BatchExportsTestRetrieveInput.Type;

// Output Schema
export const BatchExportsTestRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchExportsTestRetrieveOutput =
  typeof BatchExportsTestRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsTestRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BatchExportsTestRetrieveInput,
    outputSchema: BatchExportsTestRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);

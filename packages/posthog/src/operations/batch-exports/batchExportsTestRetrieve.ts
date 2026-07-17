import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface BatchExportsTestRetrieveInput {
  project_id: string;
}
export const BatchExportsTestRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/batch_exports/test/",
    }),
  ) as unknown as Schema.Codec<BatchExportsTestRetrieveInput>;

// Output Schema
export type BatchExportsTestRetrieveOutput = void;
export const BatchExportsTestRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchExportsTestRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsTestRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchExportsTestRetrieveInput,
  outputSchema: BatchExportsTestRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

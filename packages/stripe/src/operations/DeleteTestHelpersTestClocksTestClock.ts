import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteTestHelpersTestClocksTestClockInput {
  test_clock: string;
}
export const DeleteTestHelpersTestClocksTestClockInput =
  /*@__PURE__*/ Schema.Struct({
    test_clock: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/test_helpers/test_clocks/{test_clock}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteTestHelpersTestClocksTestClockInput>;

// Output Schema
export interface DeleteTestHelpersTestClocksTestClockOutput {
  deleted: true;
  id: string;
  object: "test_helpers.test_clock";
}
export const DeleteTestHelpersTestClocksTestClockOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["test_helpers.test_clock"]),
  }) as unknown as Schema.Codec<DeleteTestHelpersTestClocksTestClockOutput>;

// The operation
/**
 * Delete a test clock
 *
 * <p>Deletes a test clock.</p>
 */
export const DeleteTestHelpersTestClocksTestClock =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteTestHelpersTestClocksTestClockInput,
    outputSchema: DeleteTestHelpersTestClocksTestClockOutput,
  }));

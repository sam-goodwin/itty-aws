import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTestHelpersTestClocksTestClockInput {
  test_clock: string;
  expand?: string;
}
export const GetTestHelpersTestClocksTestClockInput =
  /*@__PURE__*/ Schema.Struct({
    test_clock: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/test_helpers/test_clocks/{test_clock}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTestHelpersTestClocksTestClockInput>;

// Output Schema
export interface GetTestHelpersTestClocksTestClockOutput {
  created: number;
  deletes_after: number;
  frozen_time: number;
  id: string;
  livemode: boolean;
  name: string | null;
  object: "test_helpers.test_clock";
  status: "advancing" | "internal_failure" | "ready";
  status_details: { advancing?: { target_frozen_time: number } };
}
export const GetTestHelpersTestClocksTestClockOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.Number,
    deletes_after: Schema.Number,
    frozen_time: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["test_helpers.test_clock"]),
    status: Schema.Literals(["advancing", "internal_failure", "ready"]),
    status_details: Schema.Struct({
      advancing: Schema.optional(
        Schema.Struct({
          target_frozen_time: Schema.Number,
        }),
      ),
    }),
  }) as unknown as Schema.Codec<GetTestHelpersTestClocksTestClockOutput>;

// The operation
/**
 * Retrieve a test clock
 *
 * <p>Retrieves a test clock.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTestHelpersTestClocksTestClock =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetTestHelpersTestClocksTestClockInput,
    outputSchema: GetTestHelpersTestClocksTestClockOutput,
  }));

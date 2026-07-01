import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTestHelpersTestClocksTestClockAdvanceInput {
  test_clock: string;
  expand?: string[];
  frozen_time: number;
}
export const PostTestHelpersTestClocksTestClockAdvanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    test_clock: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    frozen_time: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/test_clocks/{test_clock}/advance",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersTestClocksTestClockAdvanceInput>;

// Output Schema
export interface PostTestHelpersTestClocksTestClockAdvanceOutput {
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
export const PostTestHelpersTestClocksTestClockAdvanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostTestHelpersTestClocksTestClockAdvanceOutput>;

// The operation
/**
 * Advance a test clock
 *
 * <p>Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to <code>Ready</code>.</p>
 */
export const PostTestHelpersTestClocksTestClockAdvance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersTestClocksTestClockAdvanceInput,
    outputSchema: PostTestHelpersTestClocksTestClockAdvanceOutput,
  }));

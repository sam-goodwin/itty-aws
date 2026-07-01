import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTestHelpersTestClocksInput {
  customer?: string;
  expand?: string[];
  frozen_time: number;
  name?: string;
}
export const PostTestHelpersTestClocksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    frozen_time: Schema.Number,
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/test_clocks",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersTestClocksInput>;

// Output Schema
export interface PostTestHelpersTestClocksOutput {
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
export const PostTestHelpersTestClocksOutput =
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
  }) as unknown as Schema.Codec<PostTestHelpersTestClocksOutput>;

// The operation
/**
 * Create a test clock
 *
 * <p>Creates a new test clock that can be attached to new customers and quotes.</p>
 */
export const PostTestHelpersTestClocks = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostTestHelpersTestClocksInput,
    outputSchema: PostTestHelpersTestClocksOutput,
  }),
);

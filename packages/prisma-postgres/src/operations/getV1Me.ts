import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV1MeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v1/me" }),
);
export type GetV1MeInput = typeof GetV1MeInput.Type;

// Output Schema
export const GetV1MeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    user: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        email: Schema.String,
        name: Schema.NullOr(Schema.String),
      }),
    ),
    workspace: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
    credential: Schema.Struct({
      type: Schema.Literals(["oauth", "service_token", "management_token"]),
      id: Schema.NullOr(Schema.String),
      name: Schema.NullOr(Schema.String),
    }),
  }),
});
export type GetV1MeOutput = typeof GetV1MeOutput.Type;

// The operation
/**
 * Get current authenticated principal
 *
 * Returns the user, workspace, and credential represented by the current token.
 */
export const getV1Me = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV1MeInput,
  outputSchema: GetV1MeOutput,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UpdateCurrentUserInput {
  name: string;
}
export const UpdateCurrentUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
  },
).pipe(
  T.Http({ method: "PUT", path: "/v2/user" }),
) as unknown as Schema.Codec<UpdateCurrentUserInput>;

// Output Schema
export interface UpdateCurrentUserOutput {
  email: string;
  id: string;
  name: string;
  role?: { id: string; name: string };
}
export const UpdateCurrentUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    id: Schema.String,
    name: Schema.String,
    role: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<UpdateCurrentUserOutput>;

// The operation
/**
 * Update current user
 */
export const updateCurrentUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateCurrentUserInput,
  outputSchema: UpdateCurrentUserOutput,
}));

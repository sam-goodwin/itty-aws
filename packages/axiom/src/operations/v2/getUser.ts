import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface GetUserInput {
  id: string;
}
export const GetUserInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/users/{id}" }),
) as unknown as Schema.Codec<GetUserInput>;

// Output Schema
export interface GetUserOutput {
  email: string;
  id: string;
  name: string;
  role?: { id: string; name: string };
}
export const GetUserOutput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  id: Schema.String,
  name: Schema.String,
  role: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<GetUserOutput>;

// The operation
/**
 * Get user by ID
 */
export const getUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetUserInput,
  outputSchema: GetUserOutput,
  errors: [NotFound] as const,
}));

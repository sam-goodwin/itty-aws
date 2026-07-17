import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateUserInput {
  email: string;
  name: string;
  role: string;
}
export const CreateUserInput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  name: Schema.String,
  role: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/v2/users" }),
) as unknown as Schema.Codec<CreateUserInput>;

// Output Schema
export interface CreateUserOutput {
  email: string;
  id: string;
  name: string;
  role?: { id: string; name: string };
}
export const CreateUserOutput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  id: Schema.String,
  name: Schema.String,
  role: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<CreateUserOutput>;

// The operation
/**
 * Create user
 */
export const createUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateUserInput,
  outputSchema: CreateUserOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UsersHedgehogConfigRetrieveInput = /*@__PURE__*/ Schema.Struct({
  uuid: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/api/users/{uuid}/hedgehog_config/" }));
export type UsersHedgehogConfigRetrieveInput =
  typeof UsersHedgehogConfigRetrieveInput.Type;

// Output Schema
export const UsersHedgehogConfigRetrieveOutput = Schema.Void;
export type UsersHedgehogConfigRetrieveOutput =
  typeof UsersHedgehogConfigRetrieveOutput.Type;

// The operation
export const usersHedgehogConfigRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersHedgehogConfigRetrieveInput,
  outputSchema: UsersHedgehogConfigRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

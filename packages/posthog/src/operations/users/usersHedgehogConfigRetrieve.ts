import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersHedgehogConfigRetrieveInput {
  uuid: string;
}
export const UsersHedgehogConfigRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/hedgehog_config/" }),
  ) as unknown as Schema.Codec<UsersHedgehogConfigRetrieveInput>;

// Output Schema
export type UsersHedgehogConfigRetrieveOutput = void;
export const UsersHedgehogConfigRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersHedgehogConfigRetrieveOutput>;

// The operation
export const usersHedgehogConfigRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersHedgehogConfigRetrieveInput,
  outputSchema: UsersHedgehogConfigRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

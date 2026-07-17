import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersStart2faSetupRetrieveInput {
  uuid: string;
}
export const UsersStart2faSetupRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/start_2fa_setup/" }),
  ) as unknown as Schema.Codec<UsersStart2faSetupRetrieveInput>;

// Output Schema
export type UsersStart2faSetupRetrieveOutput = void;
export const UsersStart2faSetupRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersStart2faSetupRetrieveOutput>;

// The operation
export const usersStart2faSetupRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersStart2faSetupRetrieveInput,
  outputSchema: UsersStart2faSetupRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));

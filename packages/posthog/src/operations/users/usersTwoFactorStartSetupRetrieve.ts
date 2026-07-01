import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersTwoFactorStartSetupRetrieveInput {
  uuid: string;
}
export const UsersTwoFactorStartSetupRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/users/{uuid}/two_factor_start_setup/",
    }),
  ) as unknown as Schema.Codec<UsersTwoFactorStartSetupRetrieveInput>;

// Output Schema
export type UsersTwoFactorStartSetupRetrieveOutput = void;
export const UsersTwoFactorStartSetupRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersTwoFactorStartSetupRetrieveOutput>;

// The operation
export const usersTwoFactorStartSetupRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersTwoFactorStartSetupRetrieveInput,
    outputSchema: UsersTwoFactorStartSetupRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));

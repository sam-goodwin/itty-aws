import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const UsersTwoFactorStartSetupRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/users/{uuid}/two_factor_start_setup/",
    }),
  );
export type UsersTwoFactorStartSetupRetrieveInput =
  typeof UsersTwoFactorStartSetupRetrieveInput.Type;

// Output Schema
export const UsersTwoFactorStartSetupRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersTwoFactorStartSetupRetrieveOutput =
  typeof UsersTwoFactorStartSetupRetrieveOutput.Type;

// The operation
export const usersTwoFactorStartSetupRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersTwoFactorStartSetupRetrieveInput,
    outputSchema: UsersTwoFactorStartSetupRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));

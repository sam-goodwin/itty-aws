import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UsersStart2faSetupRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/start_2fa_setup/" }),
  );
export type UsersStart2faSetupRetrieveInput =
  typeof UsersStart2faSetupRetrieveInput.Type;

// Output Schema
export const UsersStart2faSetupRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersStart2faSetupRetrieveOutput =
  typeof UsersStart2faSetupRetrieveOutput.Type;

// The operation
export const usersStart2faSetupRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersStart2faSetupRetrieveInput,
    outputSchema: UsersStart2faSetupRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);

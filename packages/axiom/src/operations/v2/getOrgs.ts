import * as Schema from "effect/Schema";
import { OrgSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetOrgsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/orgs" }),
);
export type GetOrgsInput = typeof GetOrgsInput.Type;

// Output Schema
export const GetOrgsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => OrgSchema),
);
export type GetOrgsOutput = typeof GetOrgsOutput.Type;

// The operation
export const getOrgs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrgsInput,
  outputSchema: GetOrgsOutput,
}));

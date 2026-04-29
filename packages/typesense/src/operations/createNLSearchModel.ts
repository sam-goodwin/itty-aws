import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/nl_search_models" }),
  );
export type CreateNLSearchModelInput = typeof CreateNLSearchModelInput.Type;

// Output Schema
export const CreateNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type CreateNLSearchModelOutput = typeof CreateNLSearchModelOutput.Type;

// The operation
/**
 * Create a NL search model
 *
 * Create a new NL search model.
 */
export const createNLSearchModel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNLSearchModelInput,
  outputSchema: CreateNLSearchModelOutput,
  errors: [BadRequest] as const,
}));

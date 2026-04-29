import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ApiKeysControllerValidateApiKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/api_keys/validations" }));
export type ApiKeysControllerValidateApiKeyInput =
  typeof ApiKeysControllerValidateApiKeyInput.Type;

// Output Schema
export const ApiKeysControllerValidateApiKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    api_key: Schema.Unknown,
  });
export type ApiKeysControllerValidateApiKeyOutput =
  typeof ApiKeysControllerValidateApiKeyOutput.Type;

// The operation
/**
 * Validate API key
 *
 * Validate an API key value and return the API key object if valid.
 */
export const ApiKeysControllerValidateApiKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApiKeysControllerValidateApiKeyInput,
    outputSchema: ApiKeysControllerValidateApiKeyOutput,
    errors: [UnprocessableEntity] as const,
  }));

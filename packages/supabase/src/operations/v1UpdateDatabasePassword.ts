import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1UpdateDatabasePasswordInput {
  ref: string;
  password: string | Redacted.Redacted<string>;
}
export const V1UpdateDatabasePasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    password: SensitiveString,
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/projects/{ref}/database/password" }),
  ) as unknown as Schema.Codec<V1UpdateDatabasePasswordInput>;

// Output Schema
export interface V1UpdateDatabasePasswordOutput {
  message: string;
}
export const V1UpdateDatabasePasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.String,
  }) as unknown as Schema.Codec<V1UpdateDatabasePasswordOutput>;

// The operation
/**
 * Updates the database password
 *
 * @param ref - Project ref
 */
export const v1UpdateDatabasePassword = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpdateDatabasePasswordInput,
    outputSchema: V1UpdateDatabasePasswordOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);

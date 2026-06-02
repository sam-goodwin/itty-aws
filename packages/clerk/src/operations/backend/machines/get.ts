import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/machines/{machine_id}" }));
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["machine"]),
  id: Schema.String,
  name: Schema.String,
  instance_id: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
  default_token_ttl: Schema.optional(Schema.Number),
  scoped_machines: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["machine"]),
      id: Schema.String,
      name: Schema.String,
      instance_id: Schema.String,
      created_at: Schema.Number,
      updated_at: Schema.Number,
      default_token_ttl: Schema.optional(Schema.Number),
    }),
  ),
});
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Retrieve a machine
 *
 * Returns the details of a machine.
 *
 * @param machine_id - The ID of the machine to retrieve
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));

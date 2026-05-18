import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ModifyProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
  moderation_message: Schema.optional(Schema.NullOr(Schema.String)),
  moderation_message_body: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/project/{id_or_slug}" }));
export type ModifyProjectInput = typeof ModifyProjectInput.Type;

// Output Schema
export const ModifyProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ModifyProjectOutput = typeof ModifyProjectOutput.Type;

// The operation
/**
 * Modify a project
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const modifyProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModifyProjectInput,
  outputSchema: ModifyProjectOutput,
  errors: [BadRequest, NotFound] as const,
}));

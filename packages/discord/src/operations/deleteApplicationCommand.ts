import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteApplicationCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    command_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/applications/{application_id}/commands/{command_id}",
    }),
  );
export type DeleteApplicationCommandInput =
  typeof DeleteApplicationCommandInput.Type;

// Output Schema
export const DeleteApplicationCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteApplicationCommandOutput =
  typeof DeleteApplicationCommandOutput.Type;

// The operation
export const deleteApplicationCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteApplicationCommandInput,
    outputSchema: DeleteApplicationCommandOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

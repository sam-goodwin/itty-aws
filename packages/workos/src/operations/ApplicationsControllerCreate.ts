import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ApplicationsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/connect/applications" }),
  );
export type ApplicationsControllerCreateInput =
  typeof ApplicationsControllerCreateInput.Type;

// Output Schema
export const ApplicationsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    client_id: Schema.String,
    description: Schema.NullOr(Schema.String),
    name: Schema.String,
    scopes: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ApplicationsControllerCreateOutput =
  typeof ApplicationsControllerCreateOutput.Type;

// The operation
/**
 * Create a Connect Application
 *
 * Create a new Connect Application. Supports both OAuth and Machine-to-Machine (M2M) application types.
 */
export const ApplicationsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsControllerCreateInput,
    outputSchema: ApplicationsControllerCreateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));

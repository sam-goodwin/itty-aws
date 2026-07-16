import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ApplicationsControllerDeleteInput {
  id: string;
}
export const ApplicationsControllerDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/connect/applications/{id}" }),
  ) as unknown as Schema.Codec<ApplicationsControllerDeleteInput>;

// Output Schema
export type ApplicationsControllerDeleteOutput = void;
export const ApplicationsControllerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsControllerDeleteOutput>;

// The operation
/**
 * Delete a Connect Application
 *
 * Delete an existing Connect Application.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationsControllerDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsControllerDeleteInput,
    outputSchema: ApplicationsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));

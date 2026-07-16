import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppIPAssignmentsDeleteInput {
  app_name: string;
  ip: string;
}
export const AppIPAssignmentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    ip: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/apps/{app_name}/ip_assignments/{ip}" }),
  ) as unknown as Schema.Codec<AppIPAssignmentsDeleteInput>;

// Output Schema
export type AppIPAssignmentsDeleteOutput = void;
export const AppIPAssignmentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppIPAssignmentsDeleteOutput>;

// The operation
/**
 * Remove IP assignment from app
 *
 * @param app_name - Fly App Name
 * @param ip - IP address
 */
export const AppIPAssignmentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppIPAssignmentsDeleteInput,
  outputSchema: AppIPAssignmentsDeleteOutput,
  errors: [Forbidden, NotFound] as const,
}));

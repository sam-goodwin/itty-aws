import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const DataWarehouseResetPasswordCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/data_warehouse/reset-password/",
    }),
  );
export type DataWarehouseResetPasswordCreateInput =
  typeof DataWarehouseResetPasswordCreateInput.Type;

// Output Schema
export const DataWarehouseResetPasswordCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String,
    password: SensitiveOutputString,
  });
export type DataWarehouseResetPasswordCreateOutput =
  typeof DataWarehouseResetPasswordCreateOutput.Type;

// The operation
/**
 * Reset the root password for the managed warehouse.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseResetPasswordCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseResetPasswordCreateInput,
    outputSchema: DataWarehouseResetPasswordCreateOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CustomerProfileConfigsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/customer_profile_configs/{id}/",
    }),
  );
export type CustomerProfileConfigsDestroyInput =
  typeof CustomerProfileConfigsDestroyInput.Type;

// Output Schema
export const CustomerProfileConfigsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerProfileConfigsDestroyOutput =
  typeof CustomerProfileConfigsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this customer profile config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerProfileConfigsDestroyInput,
    outputSchema: CustomerProfileConfigsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));

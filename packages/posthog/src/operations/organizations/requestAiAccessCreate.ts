import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const RequestAiAccessCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{id}/request_ai_access/",
    }),
  );
export type RequestAiAccessCreateInput = typeof RequestAiAccessCreateInput.Type;

// Output Schema
export const RequestAiAccessCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  });
export type RequestAiAccessCreateOutput =
  typeof RequestAiAccessCreateOutput.Type;

// The operation
/**
 * Notify organization admins that a member is requesting PostHog AI be enabled.
 *
 * @param id - A UUID string identifying this organization.
 */
export const requestAiAccessCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RequestAiAccessCreateInput,
    outputSchema: RequestAiAccessCreateOutput,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface RequestAiAccessCreateInput {
  id: string;
}
export const RequestAiAccessCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{id}/request_ai_access/",
    }),
  ) as unknown as Schema.Codec<RequestAiAccessCreateInput>;

// Output Schema
export interface RequestAiAccessCreateOutput {
  success: boolean;
}
export const RequestAiAccessCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  }) as unknown as Schema.Codec<RequestAiAccessCreateOutput>;

// The operation
/**
 * Notify organization admins that a member is requesting PostHog AI be enabled.
 *
 * @param id - A UUID string identifying this organization.
 */
export const requestAiAccessCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RequestAiAccessCreateInput,
  outputSchema: RequestAiAccessCreateOutput,
}));

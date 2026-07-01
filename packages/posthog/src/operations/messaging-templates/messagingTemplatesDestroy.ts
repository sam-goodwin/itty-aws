import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MessagingTemplatesDestroyInput {
  id: string;
  project_id: string;
}
export const MessagingTemplatesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/messaging_templates/{id}/",
    }),
  ) as unknown as Schema.Codec<MessagingTemplatesDestroyInput>;

// Output Schema
export type MessagingTemplatesDestroyOutput = void;
export const MessagingTemplatesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MessagingTemplatesDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this message template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const messagingTemplatesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MessagingTemplatesDestroyInput,
    outputSchema: MessagingTemplatesDestroyOutput,
  }),
);

import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface NotebooksCollabMarkdownSaveCreateInput {
  project_id: string;
  short_id: string;
  client_id: string;
  version: number;
  content: unknown;
  text_content?: string;
  title?: string;
  cursor?: {
    head?: number;
    node_index?: number;
    offset?: number;
    list_item_index?: number;
  };
}
export const NotebooksCollabMarkdownSaveCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    client_id: Schema.String,
    version: Schema.Number,
    content: Schema.Unknown,
    text_content: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    cursor: Schema.optional(
      Schema.Struct({
        head: Schema.optional(Schema.Number),
        node_index: Schema.optional(Schema.Number),
        offset: Schema.optional(Schema.Number),
        list_item_index: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/notebooks/{short_id}/collab/markdown_save/",
    }),
  ) as unknown as Schema.Codec<NotebooksCollabMarkdownSaveCreateInput>;

// Output Schema
export type NotebooksCollabMarkdownSaveCreateOutput = void;
export const NotebooksCollabMarkdownSaveCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotebooksCollabMarkdownSaveCreateOutput>;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksCollabMarkdownSaveCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebooksCollabMarkdownSaveCreateInput,
    outputSchema: NotebooksCollabMarkdownSaveCreateOutput,
  }));

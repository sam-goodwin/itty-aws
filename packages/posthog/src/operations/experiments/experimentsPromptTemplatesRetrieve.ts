import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ExperimentsPromptTemplatesRetrieveInput {
  project_id: string;
}
export const ExperimentsPromptTemplatesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/prompt_templates/",
    }),
  ) as unknown as Schema.Codec<ExperimentsPromptTemplatesRetrieveInput>;

// Output Schema
export type ExperimentsPromptTemplatesRetrieveOutput = {
  key: string;
  label: string;
  description: string;
}[];
export const ExperimentsPromptTemplatesRetrieveOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      key: Schema.String,
      label: Schema.String,
      description: Schema.String,
    }),
  ) as unknown as Schema.Codec<ExperimentsPromptTemplatesRetrieveOutput>;

// The operation
/**
 * List the LLM metric templates that can be passed to `create_from_prompt`.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsPromptTemplatesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsPromptTemplatesRetrieveInput,
    outputSchema: ExperimentsPromptTemplatesRetrieveOutput,
  }));

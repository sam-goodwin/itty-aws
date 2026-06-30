import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ExperimentsPromptTemplatesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/prompt_templates/",
    }),
  );
export type ExperimentsPromptTemplatesRetrieveInput =
  typeof ExperimentsPromptTemplatesRetrieveInput.Type;

// Output Schema
export const ExperimentsPromptTemplatesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      key: Schema.String,
      label: Schema.String,
      description: Schema.String,
    }),
  );
export type ExperimentsPromptTemplatesRetrieveOutput =
  typeof ExperimentsPromptTemplatesRetrieveOutput.Type;

// The operation
/**
 * List the LLM metric templates that can be passed to `create_from_prompt`.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsPromptTemplatesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsPromptTemplatesRetrieveInput,
    outputSchema: ExperimentsPromptTemplatesRetrieveOutput,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListMarketplaceAppVariablesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/marketplace/apps/{imageId}/variables" }),
  );
export type ListMarketplaceAppVariablesInput =
  typeof ListMarketplaceAppVariablesInput.Type;

// Output Schema
export const ListMarketplaceAppVariablesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          required: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  });
export type ListMarketplaceAppVariablesOutput =
  typeof ListMarketplaceAppVariablesOutput.Type;

// The operation
/**
 * List Marketplace App Variables
 *
 * List all user-supplied variables for a Marketplace App.
 *
 * @param imageId - The application's [Image ID](#operation/list-applications).
 */
export const listMarketplaceAppVariables = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListMarketplaceAppVariablesInput,
    outputSchema: ListMarketplaceAppVariablesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);

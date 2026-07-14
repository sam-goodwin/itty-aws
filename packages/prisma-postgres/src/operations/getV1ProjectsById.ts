import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1ProjectsByIdInput {
  id: string;
}
export const GetV1ProjectsByIdInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{id}" }),
) as unknown as Schema.Codec<GetV1ProjectsByIdInput>;

// Output Schema
export interface GetV1ProjectsByIdOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    createdAt: string;
    defaultRegion: string | null;
    workspace: { id: string; url: string; name: string };
  };
}
export const GetV1ProjectsByIdOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      name: Schema.String,
      createdAt: Schema.String,
      defaultRegion: Schema.NullOr(Schema.String),
      workspace: Schema.Struct({
        id: Schema.String,
        url: Schema.String,
        name: Schema.String,
      }),
    }),
  }) as unknown as Schema.Codec<GetV1ProjectsByIdOutput>;

// The operation
/**
 * Get project
 *
 * Returns the project with the given ID.
 */
export const getV1ProjectsById = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1ProjectsByIdInput,
  outputSchema: GetV1ProjectsByIdOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));

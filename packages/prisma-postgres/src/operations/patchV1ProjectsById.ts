import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PatchV1ProjectsByIdInput {
  id: string;
  name?: string;
  settings?: Record<string, unknown>;
}
export const PatchV1ProjectsByIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/projects/{id}" }),
  ) as unknown as Schema.Codec<PatchV1ProjectsByIdInput>;

// Output Schema
export interface PatchV1ProjectsByIdOutput {
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
export const PatchV1ProjectsByIdOutput =
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
  }) as unknown as Schema.Codec<PatchV1ProjectsByIdOutput>;

// The operation
/**
 * Update project
 *
 * Updates the project with the given ID.
 */
export const patchV1ProjectsById = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchV1ProjectsByIdInput,
  outputSchema: PatchV1ProjectsByIdOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));

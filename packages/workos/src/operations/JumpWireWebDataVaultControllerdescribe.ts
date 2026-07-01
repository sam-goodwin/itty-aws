import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface JumpWireWebDataVaultControllerdescribeInput {
  id: string;
}
export const JumpWireWebDataVaultControllerdescribeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/vault/v1/kv/{id}/metadata" }),
  ) as unknown as Schema.Codec<JumpWireWebDataVaultControllerdescribeInput>;

// Output Schema
export interface JumpWireWebDataVaultControllerdescribeOutput {
  id: string;
  metadata: {
    context: Record<string, string>;
    environment_id: string;
    id: string;
    key_id: string;
    updated_at: string;
    updated_by: { id: string; name: string };
    version_id?: string | null;
  };
  name: string;
}
export const JumpWireWebDataVaultControllerdescribeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    metadata: Schema.Struct({
      context: Schema.Record(Schema.String, Schema.String),
      environment_id: Schema.String,
      id: Schema.String,
      key_id: Schema.String,
      updated_at: Schema.String,
      updated_by: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
      version_id: Schema.optional(Schema.NullOr(Schema.String)),
    }),
    name: Schema.String,
  }) as unknown as Schema.Codec<JumpWireWebDataVaultControllerdescribeOutput>;

// The operation
/**
 * Describe an object
 *
 * Fetch metadata for an object without decrypting it.
 *
 * @param id - Unique identifier of the object.
 */
export const JumpWireWebDataVaultControllerdescribe =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllerdescribeInput,
    outputSchema: JumpWireWebDataVaultControllerdescribeOutput,
    errors: [BadRequest, NotFound] as const,
  }));

import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListVFSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/vfs" }),
);
export type ListVFSInput = typeof ListVFSInput.Type;

// Output Schema
export const ListVFSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vfs: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Array(Schema.String)),
        disk_type: Schema.optional(Schema.Literals(["nvme"])),
        storage_size: Schema.optional(
          Schema.Struct({
            bytes: Schema.optional(Schema.Number),
            gb: Schema.optional(Schema.Number),
          }),
        ),
        storage_used: Schema.optional(
          Schema.Struct({
            bytes: Schema.optional(Schema.Number),
            gb: Schema.optional(Schema.Number),
          }),
        ),
        billing: Schema.optional(
          Schema.Struct({
            charges: Schema.optional(Schema.Number),
            monthly: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  ),
});
export type ListVFSOutput = typeof ListVFSOutput.Type;

// The operation
/**
 * List VFSs
 *
 * Retrieve a list of all VFS subscriptions for the account
 */
export const listVFS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVFSInput,
  outputSchema: ListVFSOutput,
  errors: [Forbidden, UnprocessableEntity] as const,
}));

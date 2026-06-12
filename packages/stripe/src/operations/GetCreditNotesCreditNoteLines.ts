import * as Schema from "effect/Schema";
import { credit_note_line_itemSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCreditNotesCreditNoteLinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credit_note: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/credit_notes/{credit_note}/lines",
      contentType: "form-urlencoded",
    }),
  );
export type GetCreditNotesCreditNoteLinesInput =
  typeof GetCreditNotesCreditNoteLinesInput.Type;

// Output Schema
export const GetCreditNotesCreditNoteLinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => credit_note_line_itemSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetCreditNotesCreditNoteLinesOutput =
  typeof GetCreditNotesCreditNoteLinesOutput.Type;

// The operation
/**
 * Retrieve a credit note's line items
 *
 * <p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetCreditNotesCreditNoteLines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCreditNotesCreditNoteLinesInput,
    outputSchema: GetCreditNotesCreditNoteLinesOutput,
  }));

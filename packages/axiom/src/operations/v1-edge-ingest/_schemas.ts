import * as Schema from "effect/Schema";

export const IngestFailureSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  error: Schema.String,
  timestamp: Schema.String,
});

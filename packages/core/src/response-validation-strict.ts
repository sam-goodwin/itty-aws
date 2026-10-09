/**
 * The strict response decoder. Kept apart from `response-validation.ts` so
 * Effect Schema is bundled and loaded only by programs that provide
 * `ResponseValidation.strict`.
 */
import * as Effect from "effect/Effect";
import {
  Any,
  Array,
  Boolean,
  Literal,
  make,
  Null,
  Number,
  Record,
  String,
  Struct,
  Tuple,
  Undefined,
  Union,
  Unknown,
  Void,
  optional,
  suspend,
  decodeUnknownEffect,
  type SchemaError,
  type Top,
} from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import { toEffect } from "./schema-lite-impl.ts";

export type Decode = (input: unknown) => Effect.Effect<unknown, SchemaError>;

const decoders = /*@__PURE__*/ new WeakMap<AST.AST, Decode>();

/** A decoder for an output AST; lite trees (and mixed ones) convert to the equivalent Effect schema. */
export const decoderFor = (ast: AST.AST): Decode => {
  let decode = decoders.get(ast);
  if (!decode) {
    decode = decodeUnknownEffect(
      toEffect(
        {
          Any,
          Array,
          Boolean,
          Literal,
          Null,
          Number,
          Record,
          String,
          Struct,
          Tuple,
          Undefined,
          Union,
          Unknown,
          Void,
          optional,
          suspend,
          make,
        },
        ast as any,
      ) as Top,
    ) as Decode;
    decoders.set(ast, decode);
  }
  return decode;
};

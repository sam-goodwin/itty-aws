/**
 * The strict response decoder. Kept apart from `response-validation.ts` so
 * Effect Schema is bundled and loaded only by programs that provide
 * `ResponseValidation.strict`.
 */
import {
  Any,
  Array,
  Boolean,
  declare,
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
  decodeUnknownExit,
  type SchemaError,
  type Top,
} from "effect/Schema";
import type * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import { toEffect } from "./schema-lite-impl.ts";

/**
 * Validate `input` synchronously: `undefined` when it matches, else the
 * schema error. A decoding defect (not a mismatch) is thrown.
 */
export type Decode = (input: unknown) => SchemaError | undefined;

const decoders = /*@__PURE__*/ new WeakMap<AST.AST, Decode>();

/** A decoder for an output AST; lite trees (and mixed ones) convert to the equivalent Effect schema. */
export const decoderFor = (ast: AST.AST): Decode => {
  let decode = decoders.get(ast);
  if (!decode) {
    const exitOf = decodeUnknownExit(
      toEffect(
        {
          Any,
          Array,
          Boolean,
          declare,
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
      ) as Top as S.Codec<unknown>,
    );
    decode = (input) => {
      const exit = exitOf(input);
      if (exit._tag === "Success") return undefined;
      for (const reason of exit.cause.reasons) {
        if (reason._tag === "Fail") return reason.error;
      }
      throw exit.cause.reasons[0]?._tag === "Die" ? exit.cause.reasons[0].defect : exit.cause;
    };
    decoders.set(ast, decode);
  }
  return decode;
};

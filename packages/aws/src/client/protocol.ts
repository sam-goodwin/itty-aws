import { failIfStrict } from "@distilled.cloud/core/response-validation";
import * as Effect from "effect/Effect";
import { ParseError } from "../errors.ts";
import type { Operation } from "./operation.ts";
import type { Request } from "./request.ts";
import type { Response } from "./response.ts";

/**
 * A ProtocolHandler is created by a Protocol factory function
 * with the operation pre-bound, allowing one-time preprocessing
 * of schema metadata (like getEncodedPropertySignatures, etc.).
 */
/**
 * Result of deserializing an error response.
 * Contains the sanitized error code and any additional data fields.
 */
export interface DeserializedError {
  /** The sanitized error code (e.g., "ValidationException") */
  errorCode: string;
  /** Additional data fields from the error response */
  data: Record<string, unknown>;
}

export interface ProtocolHandler {
  /**
   * Serialize an input object into an HTTP request.
   * @param input - The input object to serialize
   * @returns Effect yielding the serialized HTTP request
   */
  serializeRequest(input: unknown): Effect.Effect<Request, ParseError>;

  /**
   * Deserialize an HTTP response into an output object.
   * @param response - The HTTP response to deserialize
   * @returns Effect yielding the deserialized output object
   */
  deserializeResponse(response: Response): Effect.Effect<unknown, ParseError>;

  /**
   * Deserialize an error response and extract the error code and data.
   * @param response - The HTTP error response to deserialize
   * @returns Effect yielding the error code and additional data
   */
  deserializeError(response: Response): Effect.Effect<DeserializedError, ParseError>;

  /**
   * `serializeRequest` as a plain function: the same request, built without
   * effects. Throws the `ParseError` `serializeRequest` would fail with.
   */
  readonly serialize?: (input: unknown) => Request;

  /**
   * `deserializeResponse` for a body already read as text, without effects.
   * Only valid for operations whose output never streams. A body the
   * protocol cannot read comes back as {@link Unreadable}.
   */
  readonly deserializeText?: (response: TextResponse) => unknown;

  /** The loaded handler, for protocols whose implementation loads on first use. */
  readonly ready?: Effect.Effect<ProtocolHandler>;
}

/** A response whose body has been read as text. */
export interface TextResponse extends Response {
  body: string;
}

/**
 * A 2xx body a protocol could not read into its output shape (e.g. invalid
 * JSON). Strict mode fails with `error`; lenient mode returns `asRead`.
 */
export class Unreadable {
  constructor(
    readonly error: ParseError,
    readonly asRead: unknown,
  ) {}
}

/**
 * A Protocol is a factory function that takes an operation
 * and returns a ProtocolHandler with pre-computed metadata.
 *
 * This allows expensive operations like getEncodedPropertySignatures
 * to be done once at initialization time rather than on every request.
 */
export type Protocol = (operation: Operation) => ProtocolHandler;

/** `serializeRequest` from a `serialize`: a thrown `ParseError` fails, anything else dies. */
export const serializeEffect =
  (serialize: (input: unknown) => Request) =>
  (input: unknown): Effect.Effect<Request, ParseError> => {
    try {
      return Effect.succeed(serialize(input));
    } catch (e) {
      return e instanceof ParseError ? Effect.fail(e) : Effect.die(e);
    }
  };

/** A `deserializeText` result as `deserializeResponse` returns it. */
export const fromText = (result: unknown): Effect.Effect<unknown, ParseError> =>
  result instanceof Unreadable ? failIfStrict(result.error, result.asRead) : Effect.succeed(result);

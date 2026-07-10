import { isNotFoundError } from "@distilled.cloud/core/category";
import { it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import type * as S from "effect/Schema";
import { describe, expect } from "vitest";
import { makeResponseParser } from "../../src/client/response-parser.ts";
import type { Response } from "../../src/client/response.ts";
import { restJson1Protocol } from "../../src/protocols/rest-json.ts";

// Real generated schemas from X-Ray — the reference consumer of synthetic
// errors. X-Ray overloads InvalidRequestException for missing/duplicate
// groups and sampling rules, distinguishable only by message text; the
// patches/xray.json syntheticErrors entries carve those out as typed tags.
import {
  CreateGroupRequest,
  CreateGroupResult,
  DeleteSamplingRuleRequest,
  DeleteSamplingRuleResult,
  GroupAlreadyExists,
  GroupNotFound,
  InvalidRequestException,
  SamplingRuleNotFound,
  ThrottledException,
} from "../../src/services/xray.ts";

// Helper to parse an error response for an operation with the given error union
const parseResponse = (
  input: S.Top,
  output: S.Top,
  errors: S.Top[],
  response: Response,
) => {
  const operation = { input, output, errors };
  const parser = makeResponseParser(operation as any, {
    protocol: restJson1Protocol,
  });
  return parser(response);
};

const deleteSamplingRuleErrors = [
  InvalidRequestException,
  ThrottledException,
  SamplingRuleNotFound,
];

const errorResponse = (
  errorType: string,
  body: Record<string, unknown>,
): Response => ({
  status: 400,
  statusText: "Bad Request",
  headers: { "x-amzn-errortype": errorType },
  body: JSON.stringify(body),
});

describe("synthetic errors", () => {
  it.effect(
    "should decode the synthetic tag when the wire error + exact message match",
    () =>
      Effect.gen(function* () {
        const result = yield* parseResponse(
          DeleteSamplingRuleRequest,
          DeleteSamplingRuleResult,
          deleteSamplingRuleErrors,
          errorResponse("InvalidRequestException", {
            Message: "Sampling rule does not exist",
          }),
        ).pipe(Effect.flip);

        expect(result).toBeInstanceOf(SamplingRuleNotFound);
        expect((result as SamplingRuleNotFound)._tag).toBe(
          "SamplingRuleNotFound",
        );
        expect((result as SamplingRuleNotFound).Message).toBe(
          "Sampling rule does not exist",
        );
      }),
  );

  it.effect(
    "should carry the patched error category on the synthetic tag",
    () =>
      Effect.gen(function* () {
        const result = yield* parseResponse(
          DeleteSamplingRuleRequest,
          DeleteSamplingRuleResult,
          deleteSamplingRuleErrors,
          errorResponse("InvalidRequestException", {
            Message: "Sampling rule does not exist",
          }),
        ).pipe(Effect.flip);

        expect(isNotFoundError(result)).toBe(true);
      }),
  );

  it.effect(
    "should fall back to the base wire error when the message does not match",
    () =>
      Effect.gen(function* () {
        const result = yield* parseResponse(
          DeleteSamplingRuleRequest,
          DeleteSamplingRuleResult,
          deleteSamplingRuleErrors,
          errorResponse("InvalidRequestException", {
            Message: "Rule name cannot be Default",
          }),
        ).pipe(Effect.flip);

        expect(result).toBeInstanceOf(InvalidRequestException);
        expect((result as InvalidRequestException)._tag).toBe(
          "InvalidRequestException",
        );
      }),
  );

  it.effect(
    "should fall back to the base wire error when the message is absent",
    () =>
      Effect.gen(function* () {
        const result = yield* parseResponse(
          DeleteSamplingRuleRequest,
          DeleteSamplingRuleResult,
          deleteSamplingRuleErrors,
          errorResponse("InvalidRequestException", {}),
        ).pipe(Effect.flip);

        expect(result).toBeInstanceOf(InvalidRequestException);
      }),
  );

  it.effect("should not intercept other wire errors in the same union", () =>
    Effect.gen(function* () {
      const result = yield* parseResponse(
        DeleteSamplingRuleRequest,
        DeleteSamplingRuleResult,
        deleteSamplingRuleErrors,
        errorResponse("ThrottledException", {
          Message: "Sampling rule does not exist",
        }),
      ).pipe(Effect.flip);

      expect(result).toBeInstanceOf(ThrottledException);
    }),
  );

  it.effect("should match a regex message predicate (GroupAlreadyExists)", () =>
    Effect.gen(function* () {
      const result = yield* parseResponse(
        CreateGroupRequest,
        CreateGroupResult,
        [InvalidRequestException, ThrottledException, GroupAlreadyExists],
        errorResponse("InvalidRequestException", {
          Message: "my-test-group already exists",
        }),
      ).pipe(Effect.flip);

      expect(result).toBeInstanceOf(GroupAlreadyExists);
      expect((result as GroupAlreadyExists).Message).toBe(
        "my-test-group already exists",
      );
    }),
  );

  it.effect(
    "should match when the wire code uses the short form (suffix-stripped)",
    () =>
      Effect.gen(function* () {
        const result = yield* parseResponse(
          DeleteSamplingRuleRequest,
          DeleteSamplingRuleResult,
          deleteSamplingRuleErrors,
          errorResponse("InvalidRequest", {
            Message: "Sampling rule does not exist",
          }),
        ).pipe(Effect.flip);

        expect(result).toBeInstanceOf(SamplingRuleNotFound);
      }),
  );

  it.effect("should match against the lowercase message field as well", () =>
    Effect.gen(function* () {
      const result = yield* parseResponse(
        DeleteSamplingRuleRequest,
        DeleteSamplingRuleResult,
        deleteSamplingRuleErrors,
        errorResponse("InvalidRequestException", {
          message: "Sampling rule does not exist",
        }),
      ).pipe(Effect.flip);

      expect(result).toBeInstanceOf(SamplingRuleNotFound);
    }),
  );

  it.effect(
    "should keep GroupNotFound and GroupAlreadyExists disjoint on the same base error",
    () =>
      Effect.gen(function* () {
        const result = yield* parseResponse(
          CreateGroupRequest,
          CreateGroupResult,
          [
            InvalidRequestException,
            ThrottledException,
            GroupAlreadyExists,
            GroupNotFound,
          ],
          errorResponse("InvalidRequestException", {
            Message: "Group not found",
          }),
        ).pipe(Effect.flip);

        expect(result).toBeInstanceOf(GroupNotFound);
      }),
  );
});

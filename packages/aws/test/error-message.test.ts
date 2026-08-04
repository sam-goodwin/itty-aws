/**
 * Every AWS error class exposes the service's failure text as `Error.message`.
 *
 * AWS spells the member `message` in most models, `Message` in the XML-era
 * ones, and omits it entirely from others — every ec2 error shape declares no
 * members at all. Because the response parser decodes error payloads through
 * the class schema, and a struct decode drops any key the schema doesn't
 * declare, an undeclared message was silently discarded: `runInstances` with a
 * bad IAM instance profile produced an `InvalidParameterValue` carrying
 * nothing, strictly less useful than the `UnknownAwsError` it replaced, which
 * at least printed the text (distilled #160).
 *
 * The generator now emits exactly one `T.ErrorMessage`-tagged `message` member
 * per error class. These tests pin both halves of that contract: the schema
 * shape the generator must keep emitting, and the decoded result callers see.
 */
import { it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as S from "effect/Schema";
import { describe, expect } from "vitest";
import { makeResponseParser } from "../src/client/response-parser.ts";
import type { Response } from "../src/client/response.ts";
import { AccessDeniedException } from "../src/errors.ts";
import { ec2QueryProtocol } from "../src/protocols/ec2-query.ts";
import { hasErrorMessage } from "../src/traits.ts";
import { getPropertySignatures } from "../src/util/ast.ts";
import { BackupInUseException } from "../src/services/dynamodb.ts";
import {
  InvalidParameterValue,
  RunInstancesRequest,
} from "../src/services/ec2.ts";

const parseError = (response: Response, errors: S.Top[]) =>
  makeResponseParser<unknown>(
    { input: RunInstancesRequest, output: RunInstancesRequest, errors },
    { protocol: ec2QueryProtocol } as never,
  )(response);

const wire = (code: string, message: string): Response => ({
  status: 400,
  statusText: "Bad Request",
  headers: {},
  body: `<?xml version="1.0" encoding="UTF-8"?>
<Response><Errors><Error><Code>${code}</Code><Message>${message}</Message></Error></Errors><RequestID>req-160</RequestID></Response>`,
});

/** The exact message EC2 returns for the issue #160 repro. */
const IAM_MSG =
  "Value (not a valid profile name!!) for parameter iamInstanceProfile.name is invalid. Invalid IAM Instance Profile name";

describe("canonical error message", () => {
  describe("schema contract", () => {
    // One tagged member, named `message`, on every error class — whatever the
    // source model declared. Left untested, the generator could quietly go
    // back to emitting `{}` and the message would vanish again.
    for (const [label, schema] of [
      ["declared no members (ec2)", InvalidParameterValue],
      ["declared capital Message", AccessDeniedException],
      ["declared lowercase message", BackupInUseException],
    ] as const) {
      it(`${label} -> single tagged \`message\` member`, () => {
        const props = getPropertySignatures((schema as S.Top).ast);
        const tagged = props.filter(hasErrorMessage);

        expect(tagged).toHaveLength(1);
        expect(String(tagged[0]!.name)).toBe("message");
        expect(props.map((p) => String(p.name))).not.toContain("Message");
      });
    }
  });

  describe("decoded result", () => {
    it.effect("ec2 InvalidParameterValue keeps the message (#160)", () =>
      Effect.gen(function* () {
        const e = yield* parseError(wire("InvalidParameterValue", IAM_MSG), [
          InvalidParameterValue,
        ]).pipe(Effect.flip);

        expect(e).toBeInstanceOf(InvalidParameterValue);
        expect((e as InvalidParameterValue).message).toBe(IAM_MSG);
        // What lands in a log or an unhandled rejection. A bare tag here is
        // the regression that made the typed error worse than the untyped one.
        expect(String(e)).toContain(IAM_MSG);
      }),
    );

    it.effect("a renamed capital-Message class is not duplicated", () =>
      Effect.gen(function* () {
        const msg = "User is not authorized to perform ec2:RunInstances";
        const e = yield* parseError(
          wire("AccessDeniedException", msg),
          [],
        ).pipe(Effect.flip);

        expect(e).toBeInstanceOf(AccessDeniedException);
        expect((e as AccessDeniedException).message).toBe(msg);
        // Carrying the same text on two properties is what forced the parser
        // to guess by spelling before the trait existed.
        expect((e as Record<string, unknown>).Message).toBeUndefined();
      }),
    );

    it.effect("an unmatched wire code still reports its message", () =>
      Effect.gen(function* () {
        const e = yield* parseError(
          wire("SomeUnmodelledEc2Error", "an internal error occurred"),
          [],
        ).pipe(Effect.flip);

        expect((e as Error).message).toBe("an internal error occurred");
      }),
    );
  });
});

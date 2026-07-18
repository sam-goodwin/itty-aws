import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import { describe, expect, test } from "vitest";
import {
  isTerminalToken,
  paginateCursor,
  paginatePageNumber,
  paginateToken,
  paginateWithDefaults,
} from "../src/pagination.ts";

const trait = {
  mode: "page",
  inputToken: "page",
  outputToken: "resultInfo.page",
  items: "result",
  pageSize: "perPage",
} as const;

describe("paginatePageNumber", () => {
  test("terminates when the API echoes the CURRENT page (Cloudflare style)", async () => {
    // Cloudflare's `result_info.page` reports the page that was just
    // served, not the next one. Naively following it re-requests page 1
    // forever.
    let calls = 0;
    const op = (input: { page?: number }) =>
      Effect.sync(() => {
        calls++;
        if (calls > 10) throw new Error("infinite pagination loop");
        const page = input.page ?? 1;
        return {
          result:
            page === 1
              ? [{ id: "a" }, { id: "b" }]
              : page === 2
                ? [{ id: "c" }]
                : [],
          resultInfo: { page, perPage: 2 },
        };
      });

    const items = await Effect.runPromise(
      Stream.runCollect(
        paginatePageNumber(op as never, {}, trait).pipe(
          Stream.flatMap((p) =>
            Stream.fromIterable((p as { result: { id: string }[] }).result),
          ),
        ),
      ),
    );

    expect(Array.from(items).map((i) => i.id)).toEqual(["a", "b", "c"]);
    // pages 1 and 2 with items, page 3 empty → done
    expect(calls).toBe(3);
  });

  test("still follows a genuine next-page token and stops when it is absent", async () => {
    let calls = 0;
    const op = (input: { page?: number }) =>
      Effect.sync(() => {
        calls++;
        if (calls > 10) throw new Error("infinite pagination loop");
        const page = input.page ?? 1;
        return {
          result: [{ id: `item-${page}` }],
          // next-page semantics: points at the page AFTER this one,
          // absent on the final page
          resultInfo: { page: page < 3 ? page + 1 : undefined },
        };
      });

    const items = await Effect.runPromise(
      Stream.runCollect(
        paginatePageNumber(op as never, {}, trait).pipe(
          Stream.flatMap((p) =>
            Stream.fromIterable((p as { result: { id: string }[] }).result),
          ),
        ),
      ),
    );

    expect(Array.from(items).map((i) => i.id)).toEqual([
      "item-1",
      "item-2",
      "item-3",
    ]);
    expect(calls).toBe(3);
  });

  test("forwards request options to each page request", async () => {
    const options = { requestId: "req_123" };
    const seenOptions: Array<typeof options | undefined> = [];
    const op = (input: { page?: number }, requestOptions?: typeof options) =>
      Effect.sync(() => {
        seenOptions.push(requestOptions);
        const page = input.page ?? 1;
        return {
          result: page === 1 ? [{ id: "a" }] : [],
          resultInfo: { page, perPage: 1 },
        };
      });

    await Effect.runPromise(
      Stream.runCollect(paginatePageNumber(op, {}, trait, options)),
    );

    expect(seenOptions).toEqual([options, options]);
  });

  test("default pagination forwards request options", async () => {
    const options = { requestId: "req_456" };
    const seenOptions: Array<typeof options | undefined> = [];
    const op = (input: { page?: number }, requestOptions?: typeof options) =>
      Effect.sync(() => {
        seenOptions.push(requestOptions);
        const page = input.page ?? 1;
        return {
          result: page === 1 ? [{ id: "a" }] : [],
          resultInfo: { page, perPage: 1 },
        };
      });

    await Effect.runPromise(
      Stream.runCollect(paginateWithDefaults(op, {}, trait, options)),
    );

    expect(seenOptions).toEqual([options, options]);
  });
});

describe("isTerminalToken", () => {
  test("treats undefined, null, and empty string as terminal", () => {
    expect(isTerminalToken(undefined)).toBe(true);
    expect(isTerminalToken(null)).toBe(true);
    expect(isTerminalToken("")).toBe(true);
  });

  test("treats real tokens as live", () => {
    expect(isTerminalToken("abc123")).toBe(false);
    // object tokens (e.g. DynamoDB LastEvaluatedKey)
    expect(isTerminalToken({ pk: "a" })).toBe(false);
    expect(isTerminalToken(0)).toBe(false);
  });
});

describe("paginateToken", () => {
  const tokenTrait = {
    mode: "token",
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
  } as const;

  test("stops on an empty-string terminal token instead of looping", async () => {
    // Several APIs (e.g. AWS SSM, CloudWatch Logs) mark the final page
    // with `NextToken: ""` rather than omitting it. Treating "" as a live
    // token re-requests the first page forever.
    let calls = 0;
    const op = (input: { NextToken?: string }) =>
      Effect.sync(() => {
        calls++;
        if (calls > 10) throw new Error("infinite pagination loop");
        return input.NextToken === "page2"
          ? { Items: [{ id: "c" }], NextToken: "" }
          : { Items: [{ id: "a" }, { id: "b" }], NextToken: "page2" };
      });

    const items = await Effect.runPromise(
      Stream.runCollect(
        paginateToken(op as never, {}, tokenTrait).pipe(
          Stream.flatMap((p) =>
            Stream.fromIterable((p as { Items: { id: string }[] }).Items),
          ),
        ),
      ),
    );

    expect(Array.from(items).map((i) => i.id)).toEqual(["a", "b", "c"]);
    expect(calls).toBe(2);
  });

  test("stops when the token is absent on the final page", async () => {
    let calls = 0;
    const op = (input: { NextToken?: string }) =>
      Effect.sync(() => {
        calls++;
        if (calls > 10) throw new Error("infinite pagination loop");
        return input.NextToken === "page2"
          ? { Items: [{ id: "c" }] }
          : { Items: [{ id: "a" }, { id: "b" }], NextToken: "page2" };
      });

    const items = await Effect.runPromise(
      Stream.runCollect(
        paginateToken(op as never, {}, tokenTrait).pipe(
          Stream.flatMap((p) =>
            Stream.fromIterable((p as { Items: { id: string }[] }).Items),
          ),
        ),
      ),
    );

    expect(Array.from(items).map((i) => i.id)).toEqual(["a", "b", "c"]);
    expect(calls).toBe(2);
  });
});

describe("paginateCursor", () => {
  const cursorTrait = {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "pagination.cursor",
    items: "data",
  } as const;

  test("stops on an empty-string cursor instead of looping", async () => {
    // The request builder skips falsy cursors, so a live "" cursor would
    // re-fetch the first page in an infinite loop.
    let calls = 0;
    const op = (input: { cursor?: string }) =>
      Effect.sync(() => {
        calls++;
        if (calls > 10) throw new Error("infinite pagination loop");
        return input.cursor === "cur2"
          ? { data: [{ id: "c" }], pagination: { cursor: "" } }
          : {
              data: [{ id: "a" }, { id: "b" }],
              pagination: { cursor: "cur2" },
            };
      });

    const items = await Effect.runPromise(
      Stream.runCollect(
        paginateCursor(op as never, {}, cursorTrait).pipe(
          Stream.flatMap((p) =>
            Stream.fromIterable((p as { data: { id: string }[] }).data),
          ),
        ),
      ),
    );

    expect(Array.from(items).map((i) => i.id)).toEqual(["a", "b", "c"]);
    expect(calls).toBe(2);
  });
});

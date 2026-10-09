import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";

//#region lib/pagination.js
const getPath = (obj, path) => {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return;
    current = current[part];
  }
  return current;
};
const getItems = (obj, path) => {
  let current = [obj];
  for (const part of path.split(".")) {
    const next = [];
    for (const value of current) {
      if (value == null || typeof value !== "object") continue;
      const child = value[part];
      if (Array.isArray(child)) next.push(...child);
      else if (child != null) next.push(child);
    }
    current = next;
  }
  return current;
};
const missingPaginationConfig = (kind) => Stream.die(new Error(kind));
const isTerminalToken = (token) => token === void 0 || token === null || token === "";
const paginateSingle = (operation, input) =>
  Stream.fromEffect(Effect.suspend(() => operation(input)));
const paginatePageNumber = (operation, input, pagination) => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  if (!inputToken || !outputToken)
    return missingPaginationConfig("Page-number pagination requires inputToken and outputToken");
  const startPage = typeof input[inputToken] === "number" ? input[inputToken] : 1;
  return Stream.unfold(
    {
      page: startPage,
      done: false,
    },
    (state) =>
      Effect.gen(function* () {
        if (state.done) return void 0;
        const response = yield* operation({
          ...input,
          [inputToken]: state.page,
        });
        const nextPage = getPath(response, outputToken);
        const items = pagination.items ? getPath(response, pagination.items) : void 0;
        return [
          response,
          {
            page: typeof nextPage === "number" && nextPage > state.page ? nextPage : state.page + 1,
            done:
              nextPage === null || nextPage === void 0 || (items !== void 0 && items.length === 0),
          },
        ];
      }),
  );
};
const paginateCursor = (operation, input, pagination) => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  if (!inputToken || !outputToken)
    return missingPaginationConfig("Cursor pagination requires inputToken and outputToken");
  const startCursor = typeof input[inputToken] === "string" ? input[inputToken] : void 0;
  return Stream.suspend(() => {
    const requestedCursors = /* @__PURE__ */ new Set();
    return Stream.unfold(
      {
        cursor: startCursor,
        done: false,
      },
      (state) =>
        Effect.gen(function* () {
          if (state.done) return void 0;
          if (state.cursor !== void 0) requestedCursors.add(state.cursor);
          const response = yield* operation({
            ...input,
            ...(state.cursor ? { [inputToken]: state.cursor } : {}),
          });
          const nextCursor = getPath(response, outputToken);
          return [
            response,
            {
              cursor: nextCursor ?? void 0,
              done:
                isTerminalToken(nextCursor) ||
                (nextCursor != null && requestedCursors.has(nextCursor)),
            },
          ];
        }),
    );
  });
};
const paginateToken = (operation, input, pagination) => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  if (!inputToken || !outputToken)
    return missingPaginationConfig("Token pagination requires inputToken and outputToken");
  const startToken = input[inputToken];
  return Stream.unfold(
    {
      token: startToken,
      done: false,
    },
    (state) =>
      Effect.gen(function* () {
        if (state.done) return void 0;
        const response = yield* operation(
          state.token !== void 0
            ? {
                ...input,
                [inputToken]: state.token,
              }
            : input,
        );
        const nextToken = getPath(response, outputToken);
        return [
          response,
          {
            token: nextToken,
            done: isTerminalToken(nextToken),
          },
        ];
      }),
  );
};
const paginateRelay = (operation, input, pagination) => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  if (!inputToken || !outputToken)
    return missingPaginationConfig("Relay pagination requires inputToken and outputToken");
  const hasNextPath =
    pagination.hasNextPage ??
    `${outputToken.split(".").slice(0, -1).concat("hasNextPage").join(".")}`;
  const startCursor = typeof input[inputToken] === "string" ? input[inputToken] : void 0;
  return Stream.unfold(
    {
      cursor: startCursor,
      done: false,
    },
    (state) =>
      Effect.gen(function* () {
        if (state.done) return void 0;
        const response = yield* operation({
          ...input,
          ...(state.cursor ? { [inputToken]: state.cursor } : {}),
        });
        const nextCursor = getPath(response, outputToken);
        const hasNext = getPath(response, hasNextPath) === true;
        const emptyPage =
          pagination.items !== void 0 && getItems(response, pagination.items).length === 0;
        const stuckCursor =
          state.cursor !== void 0 &&
          nextCursor !== void 0 &&
          nextCursor !== null &&
          nextCursor === state.cursor;
        return [
          response,
          {
            cursor: nextCursor ?? void 0,
            done: !hasNext || isTerminalToken(nextCursor) || emptyPage || stuckCursor,
          },
        ];
      }),
  );
};
const paginateWithDefaults = (operation, input, pagination) => {
  switch (pagination.mode ?? "token") {
    case "page":
      return paginatePageNumber(operation, input, pagination);
    case "cursor":
      return paginateCursor(operation, input, pagination);
    case "relay":
      return paginateRelay(operation, input, pagination);
    case "single":
      return paginateSingle(operation, input, pagination);
    default:
      return paginateToken(operation, input, pagination);
  }
};
const extractItems = (pages, itemsPath) =>
  Stream.transformPull(pages, (pull) => {
    const next = Effect.flatMap(pull, (chunk) => {
      const items = [];
      for (const page of chunk) for (const item of getItems(page, itemsPath)) items.push(item);
      return items.length > 0 ? Effect.succeed(items) : next;
    });
    return Effect.succeed(next);
  });

//#endregion
export { paginateWithDefaults as i, getItems as n, getPath as r, extractItems as t };

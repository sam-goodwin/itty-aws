import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import { n as getItems, r as getPath } from "./_chunks/pagination-Br9V6XvR.js";

//#region ../resend/lib/pagination.js
const paginateResend = (operation, input, pagination) => {
  const inputToken = pagination.inputToken;
  if (!inputToken)
    return Stream.die(/* @__PURE__ */ new Error("Resend cursor pagination requires inputToken"));
  const hasNextPath = pagination.hasNextPage ?? "has_more";
  const itemsPath = pagination.items ?? "data";
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
        const last = getItems(response, itemsPath).at(-1);
        const nextCursor = typeof last?.id === "string" ? last.id : void 0;
        const hasNext = getPath(response, hasNextPath) === true;
        const stuckCursor = state.cursor !== void 0 && nextCursor === state.cursor;
        return [
          response,
          {
            cursor: nextCursor,
            done: !hasNext || nextCursor === void 0 || stuckCursor,
          },
        ];
      }),
  );
};

//#endregion
export { paginateResend };

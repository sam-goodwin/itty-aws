import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { i as makeRestProtocol } from "./_chunks/protocol-rest-CII8Ar_f.js";
import { Credentials } from "./credentials.js";
import { ResendParseError, UnknownResendError } from "./errors.js";

//#region ../resend/lib/protocol.js
const ResendProtocol = makeRestProtocol({
  credentials: Effect.gen(function* () {
    return yield* yield* Credentials;
  }),
  baseUrl: (creds) => creds.apiBaseUrl,
  headers: (creds) => ({ Authorization: `Bearer ${Redacted.value(creds.apiKey)}` }),
  errorEnvelope: (body) => {
    if (body === null || typeof body !== "object") return void 0;
    const rec = body;
    const code =
      typeof rec.name === "string" ? rec.name : typeof rec.code === "string" ? rec.code : void 0;
    const message = typeof rec.message === "string" ? rec.message : void 0;
    if (code === void 0 && message === void 0) return void 0;
    return {
      code,
      message,
    };
  },
  unknownError: ({ code, message, body }) =>
    new UnknownResendError({
      code: typeof code === "string" ? code : code !== void 0 ? String(code) : void 0,
      message,
      body,
    }),
  parseError: ({ body, cause }) =>
    new ResendParseError({
      body,
      cause,
    }),
});

//#endregion
export { ResendProtocol };

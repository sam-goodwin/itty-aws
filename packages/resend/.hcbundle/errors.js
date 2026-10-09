import * as Schema from "effect/Schema";
import { d as withServerError, l as withParseError } from "./_chunks/category-CZ2ByNto.js";
import {
  _ as UnprocessableEntity,
  a as Conflict,
  c as GatewayTimeout,
  d as Locked,
  f as NotFound,
  g as Unauthorized,
  h as TooManyRequests,
  i as ConfigError,
  l as HTTP_STATUS_MAP,
  m as ServiceUnavailable,
  n as BadGateway,
  o as DEFAULT_ERRORS,
  r as BadRequest,
  s as Forbidden,
  t as API_ERRORS,
  u as InternalServerError,
} from "./_chunks/errors-DKUnwzoV.js";

//#region ../resend/lib/errors.js
var UnknownResendError = class extends Schema.TaggedError()("UnknownResendError", {
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  body: Schema.Unknown,
}).pipe(withServerError) {};
var ResendParseError = class extends Schema.TaggedError()("ResendParseError", {
  body: Schema.Unknown,
  cause: Schema.Unknown,
}).pipe(withParseError) {};

//#endregion
export {
  API_ERRORS,
  BadGateway,
  BadRequest,
  ConfigError,
  Conflict,
  DEFAULT_ERRORS,
  Forbidden,
  GatewayTimeout,
  HTTP_STATUS_MAP,
  InternalServerError,
  Locked,
  NotFound,
  ResendParseError,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
  UnknownResendError,
  UnprocessableEntity,
};

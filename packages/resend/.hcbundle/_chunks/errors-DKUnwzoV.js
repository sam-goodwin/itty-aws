import * as Duration from "effect/Duration";
import { pipeArguments } from "effect/Pipeable";
import * as S from "effect/Schema";
import { declare } from "effect/Schema";
import {
  a as withConfigurationError,
  c as withNotFoundError,
  d as withServerError,
  f as withThrottlingError,
  i as withBadRequestError,
  o as withConflictError,
  r as withAuthError,
  s as withLockedError,
  u as withRetryable,
} from "./category-CZ2ByNto.js";

//#region lib/schema.js
const optional = S.optional;
const Struct = S.Struct;
const suspend = (f) => lazySuspend(f);
const Array = (item) => lazyArray(item);
const Record = (key, value) => lazyRecord(key, value);
const NullOr = S.NullOr;
const String = S.String;
const Number = S.Number;
const Boolean = S.Boolean;
const Unknown = S.Unknown;
const SchemaProto = /*@__PURE__*/ Object.getPrototypeOf(S.String);
const buildKey = Symbol.for("@distilled.cloud/core/schema/build");
const annotationsKey = Symbol.for("@distilled.cloud/core/schema/annotations");
const dataKey = Symbol.for("@distilled.cloud/core/schema/data");
const force = (self) => {
  const build = self[buildKey];
  if (!build) return;
  const annotations = self[annotationsKey];
  const built = typeof build === "function" ? build() : build.build(self[dataKey]);
  const real = annotations ? built.annotate(annotations) : built;
  delete self[buildKey];
  delete self[dataKey];
  delete self[annotationsKey];
  Object.defineProperties(self, Object.getOwnPropertyDescriptors(real));
};
const forwarded = (name) => ({
  configurable: true,
  get() {
    if (!this[buildKey]) return void 0;
    force(this);
    return this[name];
  },
});
const LazyProto = Object.create(SchemaProto, {
  ast: forwarded("ast"),
  value: forwarded("value"),
  key: forwarded("key"),
  annotate: {
    configurable: true,
    writable: true,
    value(annotations) {
      const build = this[buildKey];
      if (!build) return SchemaProto.annotate.call(this, annotations);
      const previous = this[annotationsKey];
      return lazy(
        build,
        previous
          ? {
              ...previous,
              ...annotations,
            }
          : annotations,
        this[dataKey],
      );
    },
  },
});
const supported = SchemaProto["~effect/Schema/Schema"] !== void 0;
const lazy = (build, annotations, data) => {
  if (!supported) {
    const built = typeof build === "function" ? build() : build.build(data);
    return annotations ? built.annotate(annotations) : built;
  }
  const self = Object.create(LazyProto);
  self[buildKey] = build;
  if (data !== void 0) self[dataKey] = data;
  if (annotations) self[annotationsKey] = annotations;
  return self;
};
const lazyFrom = (builder, data) => lazy(builder, void 0, data);
const lazySuspend = (f) => lazy(() => S.suspend(f));
const lazyArray = (item) => lazy(() => S.Array(item));
const lazyRecord = (key, value) => lazy(() => S.Record(key, value));
const lazyErrorKey = Symbol.for("@distilled.cloud/core/schema/lazyError");
const SchemaTypeId = "~effect/Schema/Schema";
let errorBase;
const ErrorBase = () => (errorBase ??= Object.getPrototypeOf(S.TaggedError()("Probe", {})));
const realErrorClass = (cls) => {
  const state = cls[lazyErrorKey];
  if (!state.real) {
    const real = S.TaggedError(state.identifier)(...state.args);
    state.real = real;
    Object.setPrototypeOf(state.lazy.prototype, real.prototype);
  }
  return state.real;
};
const FORWARDED_STATICS = [
  "ast",
  "fields",
  "make",
  "makeOption",
  "makeEffect",
  "annotate",
  "annotateKey",
  "check",
  "rebuild",
  "extend",
  "mapFields",
];
let lazyErrorStatics;
const LazyErrorStatics = () =>
  (lazyErrorStatics ??= Object.create(ErrorBase(), {
    [SchemaTypeId]: {
      value: SchemaTypeId,
      configurable: true,
    },
    identifier: {
      configurable: true,
      get() {
        const state = this[lazyErrorKey];
        return state.identifier ?? state.args[0];
      },
    },
    pipe: {
      configurable: true,
      writable: true,
      value() {
        return pipeArguments(this, arguments);
      },
    },
    ...Object.fromEntries(
      FORWARDED_STATICS.map((name) => [
        name,
        {
          configurable: true,
          get() {
            let owner = realErrorClass(this);
            let descriptor;
            while (owner && !(descriptor = Object.getOwnPropertyDescriptor(owner, name)))
              owner = Object.getPrototypeOf(owner);
            if (!descriptor) return void 0;
            if (descriptor.get) return descriptor.get.call(this);
            return typeof descriptor.value === "function"
              ? descriptor.value.bind(this)
              : descriptor.value;
          },
        },
      ]),
    ),
  }));
const lazyTaggedError =
  (identifier) =>
  (...args) => {
    function LazyTaggedError(input, options) {
      if (!new.target) throw new TypeError("Class constructor cannot be invoked without 'new'");
      return Reflect.construct(realErrorClass(new.target), [input, options], new.target);
    }
    Object.setPrototypeOf(LazyTaggedError, LazyErrorStatics());
    LazyTaggedError.prototype = Object.create(ErrorBase().prototype, {
      constructor: {
        value: LazyTaggedError,
        writable: true,
        configurable: true,
      },
    });
    Object.defineProperty(LazyTaggedError, lazyErrorKey, {
      value: {
        identifier,
        args,
        lazy: LazyTaggedError,
      },
    });
    return LazyTaggedError;
  };
const TaggedError = lazyTaggedError;

//#endregion
//#region lib/errors.js
const DurationSchema = declare(Duration.isDuration);
var Unauthorized = class extends TaggedError()("Unauthorized", { message: String }).pipe(
  withAuthError,
) {};
var Forbidden = class extends TaggedError()("Forbidden", { message: String }).pipe(
  withAuthError,
) {};
var NotFound = class extends TaggedError()("NotFound", { message: String }).pipe(
  withNotFoundError,
) {};
var BadRequest = class extends TaggedError()("BadRequest", { message: String }).pipe(
  withBadRequestError,
) {};
var Conflict = class extends TaggedError()("Conflict", { message: String }).pipe(
  withConflictError,
) {};
var UnprocessableEntity = class extends TaggedError()("UnprocessableEntity", {
  message: String,
}).pipe(withBadRequestError) {};
var TooManyRequests = class extends TaggedError()("TooManyRequests", {
  message: String,
  retryAfter: optional(DurationSchema),
}).pipe(withThrottlingError, withRetryable({ throttling: true })) {};
var Locked = class extends TaggedError()("Locked", {
  message: String,
  retryAfter: optional(DurationSchema),
}).pipe(withLockedError, withRetryable()) {};
var InternalServerError = class extends TaggedError()("InternalServerError", {
  message: String,
  code: optional(Number),
  retryAfter: optional(DurationSchema),
}).pipe(withServerError, withRetryable()) {};
var BadGateway = class extends TaggedError()("BadGateway", {
  message: String,
  retryAfter: optional(DurationSchema),
}).pipe(withServerError, withRetryable()) {};
var ServiceUnavailable = class extends TaggedError()("ServiceUnavailable", {
  message: String,
  retryAfter: optional(DurationSchema),
}).pipe(withServerError, withRetryable()) {};
var GatewayTimeout = class extends TaggedError()("GatewayTimeout", {
  message: String,
  retryAfter: optional(DurationSchema),
}).pipe(withServerError, withRetryable()) {};
var ConfigError = class extends TaggedError()("ConfigError", { message: String }).pipe(
  withConfigurationError,
) {};
const HTTP_STATUS_MAP = {
  400: BadRequest,
  401: Unauthorized,
  403: Forbidden,
  404: NotFound,
  408: GatewayTimeout,
  409: Conflict,
  422: UnprocessableEntity,
  423: Locked,
  429: TooManyRequests,
  500: InternalServerError,
  502: BadGateway,
  503: ServiceUnavailable,
  504: GatewayTimeout,
};
const RETRYABLE_HTTP_STATUSES = /* @__PURE__ */ new Set([408, 423, 429, 500, 502, 503, 504]);
const API_ERRORS = [
  Unauthorized,
  Forbidden,
  NotFound,
  BadRequest,
  Conflict,
  UnprocessableEntity,
  TooManyRequests,
  Locked,
  InternalServerError,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
];
const DEFAULT_ERRORS = [
  Unauthorized,
  TooManyRequests,
  InternalServerError,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
];

//#endregion
export {
  String as C,
  optional as D,
  lazyFrom as E,
  suspend as O,
  Record as S,
  Unknown as T,
  UnprocessableEntity as _,
  Conflict as a,
  NullOr as b,
  GatewayTimeout as c,
  Locked as d,
  NotFound as f,
  Unauthorized as g,
  TooManyRequests as h,
  ConfigError as i,
  HTTP_STATUS_MAP as l,
  ServiceUnavailable as m,
  BadGateway as n,
  DEFAULT_ERRORS as o,
  RETRYABLE_HTTP_STATUSES as p,
  BadRequest as r,
  Forbidden as s,
  API_ERRORS as t,
  InternalServerError as u,
  Array as v,
  Struct as w,
  Number as x,
  Boolean as y,
};

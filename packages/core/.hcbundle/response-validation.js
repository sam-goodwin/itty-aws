import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { decoderFor } from "./response-validation-strict.js";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

//#region lib/response-validation.js
var response_validation_exports = /* @__PURE__ */ __exportAll({
	ResponseValidation: () => ResponseValidation,
	StrictDecoder: () => StrictDecoder,
	failIfStrict: () => failIfStrict,
	isStrict: () => isStrict,
	lenient: () => lenient,
	strict: () => strict,
	validateResponse: () => validateResponse
});
const ResponseValidation = /*@__PURE__*/ Context.Reference("@distilled.cloud/core/ResponseValidation", { defaultValue: () => "lenient" });
const StrictDecoder = /*@__PURE__*/ Context.Reference("@distilled.cloud/core/ResponseValidation/StrictDecoder", { defaultValue: () => void 0 });
const strict = /*@__PURE__*/ Layer.mergeAll(/*@__PURE__*/ Layer.succeed(ResponseValidation, "strict"), /*@__PURE__*/ Layer.succeed(StrictDecoder, decoderFor));
const lenient = /*@__PURE__*/ Layer.succeed(ResponseValidation, "lenient");
const isStrict = /*@__PURE__*/ Effect.map(ResponseValidation, (mode) => mode === "strict");
const failIfStrict = (error, asRead) => Effect.flatMap(ResponseValidation, (mode) => mode === "strict" ? Effect.fail(error) : Effect.succeed(asRead));
const validateResponse = (outputAst, value, onError) => Effect.flatMap(ResponseValidation, (mode) => mode === "lenient" ? Effect.succeed(value) : Effect.flatMap(StrictDecoder, (decoderOf) => decoderOf ? decoderOf(outputAst)(value).pipe(Effect.mapError(onError), Effect.as(value)) : Effect.die(/* @__PURE__ */ new Error("strict response validation needs the ResponseValidation.strict layer"))));

//#endregion
export { ResponseValidation, StrictDecoder, failIfStrict, isStrict, lenient, strict, response_validation_exports as t, validateResponse };
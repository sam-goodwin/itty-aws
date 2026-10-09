import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Data from "effect/Data";

//#region lib/crypto.js
var crypto_exports = /* @__PURE__ */ __exportAll({
	Crypto: () => Crypto,
	CryptoError: () => CryptoError,
	hex: () => hex,
	layer: () => layer,
	makeNodeCrypto: () => makeNodeCrypto,
	makeWebCrypto: () => makeWebCrypto,
	nodeCrypto: () => nodeCrypto,
	webCrypto: () => webCrypto
});
var CryptoError = class extends Data.TaggedError("CryptoError") {};
const nodeModule = () => {
	try {
		return globalThis.process?.getBuiltinModule?.("node:crypto");
	} catch {
		return;
	}
};
const encoder = /*@__PURE__*/ new TextEncoder();
const toBytes = (data) => typeof data === "string" ? encoder.encode(data) : data;
const makeNodeCrypto = () => {
	const c = nodeModule();
	if (!c) return void 0;
	return {
		name: "node:crypto",
		sha256: (data) => Effect.try({
			try: () => c.createHash("sha256").update(data).digest(),
			catch: (cause) => new CryptoError({
				operation: "sha256",
				cause
			})
		}),
		importHmacKey: (key) => Effect.try({
			try: () => c.createSecretKey(toBytes(key)),
			catch: (cause) => new CryptoError({
				operation: "importKey",
				cause
			})
		}),
		hmacSha256: (key, data) => Effect.try({
			try: () => c.createHmac("sha256", key).update(data).digest(),
			catch: (cause) => new CryptoError({
				operation: "hmac",
				cause
			})
		})
	};
};
const buffer = (data) => {
	const b = toBytes(data);
	return b.buffer instanceof ArrayBuffer ? b : new Uint8Array(b);
};
const makeWebCrypto = () => ({
	name: "webcrypto",
	sha256: (data) => Effect.tryPromise({
		try: async () => new Uint8Array(await crypto.subtle.digest("SHA-256", buffer(data))),
		catch: (cause) => new CryptoError({
			operation: "sha256",
			cause
		})
	}),
	importHmacKey: (key) => Effect.tryPromise({
		try: () => crypto.subtle.importKey("raw", buffer(key), {
			name: "HMAC",
			hash: "SHA-256"
		}, false, ["sign"]),
		catch: (cause) => new CryptoError({
			operation: "importKey",
			cause
		})
	}),
	hmacSha256: (key, data) => Effect.tryPromise({
		try: async () => new Uint8Array(await crypto.subtle.sign("HMAC", key, buffer(data))),
		catch: (cause) => new CryptoError({
			operation: "hmac",
			cause
		})
	})
});
const Crypto = /*@__PURE__*/ Context.Reference("@distilled.cloud/core/Crypto", { defaultValue: () => makeNodeCrypto() ?? makeWebCrypto() });
const layer = (impl) => Layer.succeed(Crypto, impl);
const webCrypto = /*@__PURE__*/ Layer.sync(Crypto, makeWebCrypto);
const nodeCrypto = /*@__PURE__*/ Layer.effect(Crypto, /*@__PURE__*/ Effect.suspend(() => {
	const impl = makeNodeCrypto();
	return impl ? Effect.succeed(impl) : Effect.fail(new CryptoError({
		operation: "importKey",
		cause: "node:crypto is not available"
	}));
}));
const HEX = /*@__PURE__*/ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
const hex = (bytes) => {
	let out = "";
	for (let i = 0; i < bytes.length; i++) out += HEX[bytes[i]];
	return out;
};

//#endregion
export { Crypto, CryptoError, hex, layer, makeNodeCrypto, makeWebCrypto, nodeCrypto, crypto_exports as t, webCrypto };
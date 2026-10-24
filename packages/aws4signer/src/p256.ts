/**
 * Encodings for SigV4A's ECDSA P-256 keys and signatures.
 *
 * Curve arithmetic stays in the platform's crypto wherever it can: a private
 * key is imported as PKCS#8 without its public point, which `node:crypto`
 * (OpenSSL), Bun and workerd's WebCrypto (BoringSSL) derive on import.
 * {@link publicPoint} is the fallback for a WebCrypto that insists on the
 * point (it only accepts a JWK carrying `x`/`y`).
 */

const P = 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffffn;
/** The P-256 group order. */
export const N = 0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551n;
const A = P - 3n;
const G = {
  x: 0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296n,
  y: 0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5n,
};

/**
 * `PrivateKeyInfo { v0, { id-ecPublicKey, prime256v1 }, ECPrivateKey { v1, d } }`
 * up to the 32-byte private scalar `d`, which follows it.
 */
const PKCS8_PREFIX = /*@__PURE__*/ Uint8Array.from([
  0x30, 0x41, 0x02, 0x01, 0x00, 0x30, 0x13, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x02, 0x01,
  0x06, 0x08, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x03, 0x01, 0x07, 0x04, 0x27, 0x30, 0x25, 0x02, 0x01,
  0x01, 0x04, 0x20,
]);

export const toBigInt = (bytes: Uint8Array): bigint => {
  let n = 0n;
  for (const b of bytes) n = (n << 8n) | BigInt(b);
  return n;
};

/** Big-endian, left-padded to 32 bytes. */
export const toBytes32 = (n: bigint): Uint8Array<ArrayBuffer> => {
  const out = new Uint8Array(32);
  for (let i = 31; i >= 0; i--, n >>= 8n) out[i] = Number(n & 0xffn);
  return out;
};

/** The PKCS#8 DER of the P-256 private key with scalar `d` (no public point). */
export const pkcs8 = (d: bigint): Uint8Array<ArrayBuffer> => {
  const out = new Uint8Array(PKCS8_PREFIX.length + 32);
  out.set(PKCS8_PREFIX);
  out.set(toBytes32(d), PKCS8_PREFIX.length);
  return out;
};

//#region fallback point arithmetic

interface Point {
  readonly x: bigint;
  readonly y: bigint;
}

const mod = (a: bigint, m = P): bigint => {
  const r = a % m;
  return r >= 0n ? r : r + m;
};

const inverse = (a: bigint, m = P): bigint => {
  let [r0, r1] = [mod(a, m), m];
  let [s0, s1] = [1n, 0n];
  while (r1 !== 0n) {
    const q = r0 / r1;
    [r0, r1] = [r1, r0 - q * r1];
    [s0, s1] = [s1, s0 - q * s1];
  }
  return mod(s0, m);
};

const add = (p: Point | undefined, q: Point | undefined): Point | undefined => {
  if (p === undefined) return q;
  if (q === undefined) return p;
  let slope: bigint;
  if (p.x === q.x) {
    if (mod(p.y + q.y) === 0n) return undefined;
    slope = mod((3n * p.x * p.x + A) * inverse(2n * p.y));
  } else {
    slope = mod((q.y - p.y) * inverse(q.x - p.x));
  }
  const x = mod(slope * slope - p.x - q.x);
  return { x, y: mod(slope * (p.x - x) - p.y) };
};

/**
 * `d * G` in plain affine BigInt arithmetic. Not constant-time: only used
 * when the platform cannot derive the point itself, once per credential
 * (the key is cached).
 */
export const publicPoint = (d: bigint): Point => {
  let result: Point | undefined;
  let addend: Point | undefined = G;
  for (let k = d; k > 0n; k >>= 1n) {
    if (k & 1n) result = add(result, addend);
    addend = add(addend, addend);
  }
  return result!;
};

//#endregion

export const base64Url = (bytes: Uint8Array): string => {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

export const fromBase64Url = (s: string): Uint8Array =>
  Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

/** DER INTEGER of an unsigned big-endian value. */
const derInteger = (bytes: Uint8Array): number[] => {
  let i = 0;
  while (i < bytes.length - 1 && bytes[i] === 0) i++;
  const v = [...bytes.subarray(i)];
  if (v[0]! & 0x80) v.unshift(0);
  return [0x02, v.length, ...v];
};

/** A 64-byte `r || s` (IEEE P1363) ECDSA signature as an ASN.1 DER `SEQUENCE { r, s }`. */
export const p1363ToDer = (signature: Uint8Array): Uint8Array => {
  const body = [...derInteger(signature.subarray(0, 32)), ...derInteger(signature.subarray(32))];
  return new Uint8Array([0x30, body.length, ...body]);
};

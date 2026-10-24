/**
 * The NIST P-256 pieces SigV4A needs and the platform does not provide:
 * deriving the signing key from AWS credentials, its public point (WebCrypto
 * and `node:crypto` only import a private key alongside it), and the
 * IEEE P1363 -> DER signature encoding AWS expects.
 *
 * Only ever runs on secret-derived scalars once per credential (the result is
 * cached), so plain affine BigInt arithmetic is fast enough.
 */

const P = 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffffn;
/** The group order. */
export const N = 0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551n;
const A = P - 3n;
const G = {
  x: 0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296n,
  y: 0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5n,
};

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

/** `d * G`. */
export const publicPoint = (d: bigint): Point => {
  let result: Point | undefined;
  let addend: Point | undefined = G;
  for (let k = d; k > 0n; k >>= 1n) {
    if (k & 1n) result = add(result, addend);
    addend = add(addend, addend);
  }
  return result!;
};

export const toBigInt = (bytes: Uint8Array): bigint => {
  let n = 0n;
  for (const b of bytes) n = (n << 8n) | BigInt(b);
  return n;
};

/** Big-endian, left-padded to 32 bytes. */
export const toBytes32 = (n: bigint): Uint8Array => {
  const out = new Uint8Array(32);
  for (let i = 31; i >= 0; i--, n >>= 8n) out[i] = Number(n & 0xffn);
  return out;
};

export const base64Url = (bytes: Uint8Array): string => {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

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

import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import {
  constructEvent,
  verifySignature,
  type WebhookPayload,
} from "../src/webhooks.ts";

const encoder = new TextEncoder();

const payloadToBytes = (payload: WebhookPayload): Uint8Array => {
  if (typeof payload === "string") {
    return encoder.encode(payload);
  }
  if (payload instanceof ArrayBuffer) {
    return new Uint8Array(payload);
  }
  return payload;
};

const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");

const signatureFor = async (
  payload: WebhookPayload,
  secret: string,
  timestamp: number,
): Promise<string> => {
  const timestampBytes = encoder.encode(`${timestamp}.`);
  const payloadBytes = payloadToBytes(payload);
  const signedPayload = new Uint8Array(
    timestampBytes.byteLength + payloadBytes.byteLength,
  );
  signedPayload.set(timestampBytes);
  signedPayload.set(payloadBytes, timestampBytes.byteLength);

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, signedPayload);

  return toHex(new Uint8Array(signature));
};

const headerFor = async (
  payload: WebhookPayload,
  secret: string,
  timestamp = Math.floor(Date.now() / 1000),
): Promise<string> => {
  const signature = await signatureFor(payload, secret, timestamp);
  return `t=${timestamp},v1=${signature}`;
};

const expectSignatureError = async (
  effect: Effect.Effect<unknown, unknown, never>,
): Promise<void> => {
  const error = await Effect.runPromise(Effect.flip(effect));
  expect((error as { _tag?: string })._tag).toBe("StripeWebhookSignatureError");
};

describe("Stripe Webhooks", () => {
  const secret = "whsec_test_secret";
  const payload =
    '{"id":"evt_test_webhook","object":"event","type":"payment_intent.succeeded"}';

  it("returns the parsed event for a valid signature", async () => {
    const signature = await headerFor(payload, secret);

    const event = await Effect.runPromise(
      constructEvent({ payload, signature, secret }),
    );

    expect(event.id).toBe("evt_test_webhook");
    expect(event.object).toBe("event");
    expect(event.type).toBe("payment_intent.succeeded");
  });

  it("accepts raw Uint8Array and ArrayBuffer payloads", async () => {
    const bytes = encoder.encode(payload);
    const signature = await headerFor(bytes, secret);

    await Effect.runPromise(
      verifySignature({ payload: bytes, signature, secret }),
    );

    const arrayBuffer = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength,
    );
    await Effect.runPromise(
      verifySignature({ payload: arrayBuffer, signature, secret }),
    );
  });

  it("accepts redacted webhook secrets", async () => {
    const signature = await headerFor(payload, secret);

    const event = await Effect.runPromise(
      constructEvent({
        payload,
        signature,
        secret: Redacted.make(secret),
      }),
    );

    expect(event.id).toBe("evt_test_webhook");
  });

  it("fails when the signature header is missing", async () => {
    await expectSignatureError(
      constructEvent({ payload, signature: undefined, secret }),
    );
  });

  it("fails when the signature header is malformed or missing a timestamp", async () => {
    await expectSignatureError(
      constructEvent({ payload, signature: "not-a-signature", secret }),
    );
    await expectSignatureError(
      constructEvent({ payload, signature: "v1=abcd", secret }),
    );
  });

  it("fails when the secret or payload does not match the signature", async () => {
    const signature = await headerFor(payload, secret);

    await expectSignatureError(
      constructEvent({
        payload,
        signature,
        secret: "whsec_wrong_secret",
      }),
    );
    await expectSignatureError(
      constructEvent({
        payload: `${payload}\n`,
        signature,
        secret,
      }),
    );
  });

  it("fails old timestamps with the default tolerance", async () => {
    const oldTimestamp = Math.floor(Date.now() / 1000) - 1_000;
    const signature = await headerFor(payload, secret, oldTimestamp);

    await expectSignatureError(constructEvent({ payload, signature, secret }));
  });

  it("can skip timestamp tolerance for offline verification", async () => {
    const oldTimestamp = Math.floor(Date.now() / 1000) - 10_000;
    const signature = await headerFor(payload, secret, oldTimestamp);

    const event = await Effect.runPromise(
      constructEvent({
        payload,
        signature,
        secret,
        toleranceSeconds: 0,
      }),
    );

    expect(event.id).toBe("evt_test_webhook");
  });

  it("fails future timestamps outside the tolerance window", async () => {
    const futureTimestamp = Math.floor(Date.now() / 1000) + 1_000;
    const signature = await headerFor(payload, secret, futureTimestamp);

    await expectSignatureError(constructEvent({ payload, signature, secret }));
  });

  it("succeeds when any v1 signature matches", async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const validSignature = await signatureFor(payload, secret, timestamp);
    const signature = `t=${timestamp},v1=000000,v0=ignored,v1=${validSignature}`;

    const event = await Effect.runPromise(
      constructEvent({ payload, signature, secret }),
    );

    expect(event.id).toBe("evt_test_webhook");
  });

  it("signs the exact raw JSON payload instead of reserialized JSON", async () => {
    const rawPayload =
      '{ "id": "evt_raw", "object": "event", "type": "checkout.session.completed" }';
    const signature = await headerFor(rawPayload, secret);

    const event = await Effect.runPromise(
      constructEvent({ payload: rawPayload, signature, secret }),
    );
    expect(event.id).toBe("evt_raw");

    const reserializedPayload = JSON.stringify(JSON.parse(rawPayload));
    await expectSignatureError(
      constructEvent({ payload: reserializedPayload, signature, secret }),
    );
  });

  it("matches the public HMAC-SHA256 signed payload algorithm", async () => {
    const fixtureTimestamp = 1_700_000_000;
    const signature = await signatureFor(payload, secret, fixtureTimestamp);

    expect(signature).toBe(
      "130dc37d5a27b1b232a61e4f2ff00ed245f498112c11e8b747aff3d0fb754056",
    );
  });
});

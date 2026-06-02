import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { getAccountId, test, testRunId } from "./test.ts";
import * as Zones from "~/services/zones";

const accountId = () => getAccountId();
const zoneName = (name: string) => `distilled-cf-zone-${name}-${testRunId}.com`;

// A 32-char hex string that is well-formed but does not correspond to any
// real zone — Cloudflare answers these with code 9109 "Invalid zone identifier".
const BOGUS_ZONE_ID = "0".repeat(32);

describe("Zones", () => {
  describe("createZone", () => {
    test("error - DomainNotRegistered for a reserved pseudo-TLD", () =>
      Zones.createZone({
        account: { id: accountId() },
        name: zoneName("reserved").replace(/\.com$/, ".test"),
        type: "full",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("DomainNotRegistered")),
      ));

    test("error - SubdomainNotAllowed when given a subdomain", () =>
      Zones.createZone({
        account: { id: accountId() },
        name: `sub.${zoneName("subdomain")}`,
        type: "full",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("SubdomainNotAllowed")),
      ));

    test("error - InvalidDomain for a malformed name", () =>
      Zones.createZone({
        account: { id: accountId() },
        name: "not a domain!!",
        type: "full",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("InvalidDomain")),
      ));

    test("error - ZoneAlreadyExists when creating the same zone twice", () =>
      Effect.gen(function* () {
        const name = zoneName("dupe");
        const created = yield* Zones.createZone({
          account: { id: accountId() },
          name,
          type: "full",
        });

        const error = yield* Zones.createZone({
          account: { id: accountId() },
          name,
          type: "full",
        }).pipe(Effect.flip);
        expect(error._tag).toBe("ZoneAlreadyExists");

        yield* Effect.addFinalizer(() =>
          Zones.deleteZone({ zoneId: created.id }).pipe(Effect.ignore),
        );
      }).pipe(Effect.scoped));
  });

  describe("getZone", () => {
    test("error - InvalidZoneIdentifier for a bogus zone id", () =>
      Zones.getZone({ zoneId: BOGUS_ZONE_ID }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("InvalidZoneIdentifier")),
      ));
  });

  describe("patchZone", () => {
    test("error - InvalidZoneIdentifier for a bogus zone id", () =>
      Zones.patchZone({ zoneId: BOGUS_ZONE_ID, paused: true }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("InvalidZoneIdentifier")),
      ));
  });

  describe("deleteZone", () => {
    test("error - InvalidZoneIdentifier for a bogus zone id", () =>
      Zones.deleteZone({ zoneId: BOGUS_ZONE_ID }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("InvalidZoneIdentifier")),
      ));
  });
});

import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { transferTeamOwnership } from "../src/operations/transferTeamOwnership.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// PATCH /team/{id}/owner permanently transfers team ownership. Once
// transferred, the original owner loses admin privileges, so a
// self-restoring happy path requires a second API key for the partner
// who can transfer ownership back. The happy path is six-way gated:
//   - MODRINTH_API_KEY                          — current owner
//   - MODRINTH_TEST_TRANSFER_TEAM_ID            — sacrificial test team
//   - MODRINTH_TEST_TRANSFER_PARTNER_USER_ID    — partner's user id
//   - MODRINTH_TEST_TRANSFER_PARTNER_API_KEY    — partner's API key
//   - MODRINTH_TEST_OWNED_USER_ID               — original owner's id
//                                                 (target of restore)
//   - MODRINTH_TEST_ALLOW_TRANSFER_OWNERSHIP=1  — explicit opt-in
const TRANSFER_TEAM_ID = process.env.MODRINTH_TEST_TRANSFER_TEAM_ID;
const PARTNER_USER_ID = process.env.MODRINTH_TEST_TRANSFER_PARTNER_USER_ID;
const PARTNER_API_KEY = process.env.MODRINTH_TEST_TRANSFER_PARTNER_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;
const ALLOW_TRANSFER =
  process.env.MODRINTH_TEST_ALLOW_TRANSFER_OWNERSHIP === "1";
const SHOULD_RUN_HAPPY =
  HAS_API_KEY &&
  !!TRANSFER_TEAM_ID &&
  !!PARTNER_USER_ID &&
  !!PARTNER_API_KEY &&
  !!OWNED_USER_ID &&
  ALLOW_TRANSFER;

// Layer with no API key so we can deterministically trigger 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

// Layer authenticated as the partner user, used to transfer ownership
// back to the original owner during cleanup. Only constructed when the
// partner key env var is set.
const PartnerAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: PARTNER_API_KEY,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("transferTeamOwnership", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "transfers ownership to a partner user and restores it on cleanup",
    async () => {
      const teamId = TRANSFER_TEAM_ID as string;
      const partnerId = PARTNER_USER_ID as string;
      const ownerId = OWNED_USER_ID as string;

      const result = await runEffect(
        transferTeamOwnership({ id: teamId, user_id: partnerId }).pipe(
          Effect.ensuring(
            // The original owner no longer has permission to transfer
            // back, so cleanup MUST run as the partner. We swap the
            // credentials layer for the cleanup call only by piping
            // Effect.provide(PartnerAuthLayer) on the inner effect —
            // that overrides the TestLayer credentials supplied by
            // runEffect for this sub-call. Effect.ignore swallows any
            // failure of the restore so cleanup never masks the real
            // test result; if restore fails the team remains owned by
            // the partner and a human will need to intervene.
            transferTeamOwnership({ id: teamId, user_id: ownerId }).pipe(
              Effect.provide(PartnerAuthLayer),
              Effect.ignore,
            ),
          ),
        ),
      );

      // PATCH returns 204/Void.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth team ids are base62-encoded; the path validator rejects
    // ids containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key. This 400 mapping is
    // added by patches/002-add-mutation-bad-request.patch.json.
    const error = await runEffect(
      transferTeamOwnership({
        id: `zz!${testRunId}`,
        user_id: `zz${testRunId.slice(0, 6)}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped team id that does not exist",
    async () => {
      // With auth and a base62-shaped team id Modrinth resolves the
      // route, looks up the team, and returns 404 when nothing matches.
      // We pad the testRunId so the path validator accepts it and the
      // lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        transferTeamOwnership({
          id,
          user_id: `zz${testRunId.slice(0, 6)}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /team/{id}/owner requires auth — only the current team
    // owner may transfer ownership. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      transferTeamOwnership({
        id,
        user_id: `zz${testRunId.slice(0, 6)}`,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});

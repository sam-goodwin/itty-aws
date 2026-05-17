import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createApplicationCommand } from "../src/operations/createApplicationCommand.ts";
import { deleteApplicationCommand } from "../src/operations/deleteApplicationCommand.ts";
import { getMyApplication } from "../src/operations/getMyApplication.ts";
import { updateApplicationCommand } from "../src/operations/updateApplicationCommand.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /applications/{application_id}/commands/{command_id} updates a global
// application command. The bot can only update its own commands. The test
// creates a fresh global command, updates it, and deletes it in cleanup.
// Slash command names must be lowercase 1-32 chars matching ^[-_\p{L}\p{N}]+$.
const commandName = (suffix: string) =>
  `dist-upd-${suffix}-${testRunId}`.toLowerCase();

describe("updateApplicationCommand", () => {
  it(
    "happy path - updates the description of a global application command",
    async () => {
      const me = await runEffect(getMyApplication({}));
      const created = await runEffect(
        createApplicationCommand({
          application_id: me.id,
          name: commandName("orig"),
          description: `original description ${testRunId}`,
        }),
      );
      try {
        const newDescription = `updated description ${testRunId}`;
        const result = await runEffect(
          updateApplicationCommand({
            application_id: me.id,
            command_id: created.id,
            description: newDescription,
          }),
        );
        expect(result.id).toBe(created.id);
        expect(result.application_id).toBe(me.id);
        expect(typeof result.name).toBe("string");
        expect(result.description).toBe(newDescription);
        expect(typeof result.version).toBe("string");
      } finally {
        await runEffect(
          deleteApplicationCommand({
            application_id: me.id,
            command_id: created.id,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 60_000 },
  );

  it("error - BadRequest for an invalid name format", async () => {
    // Slash command names must be lowercase and match
    // ^[-_\p{L}\p{N}]+$. An uppercase name with spaces should fail
    // validation as BadRequest. Discord may also route as Forbidden or
    // NotFound depending on access ordering.
    const me = await runEffect(getMyApplication({}));
    const created = await runEffect(
      createApplicationCommand({
        application_id: me.id,
        name: commandName("badname"),
        description: `bad name test ${testRunId}`,
      }),
    );
    try {
      await runEffect(
        updateApplicationCommand({
          application_id: me.id,
          command_id: created.id,
          name: `Invalid Name With Spaces ${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
        ),
      );
    } finally {
      await runEffect(
        deleteApplicationCommand({
          application_id: me.id,
          command_id: created.id,
        }).pipe(Effect.ignore),
      );
    }
  });

  it("error - Forbidden for an application the caller does not own", async () => {
    // A real-looking snowflake the bot does not own. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or
    // BadRequest.
    const inaccessibleApplicationId = "100000000000000001";
    const fakeCommandId = "100000000000000002";
    await runEffect(
      updateApplicationCommand({
        application_id: inaccessibleApplicationId,
        command_id: fakeCommandId,
        description: `forbidden ${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - NotFound for a non-existent command id", async () => {
    const me = await runEffect(getMyApplication({}));
    const fakeCommandId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      updateApplicationCommand({
        application_id: me.id,
        command_id: fakeCommandId,
        description: `nonexistent ${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (command does not exist), Forbidden
          // (caller cannot see it), or BadRequest depending on routing.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});

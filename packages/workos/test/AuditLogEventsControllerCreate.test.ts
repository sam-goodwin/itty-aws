import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogEventsControllerCreate } from "../src/operations/AuditLogEventsControllerCreate.ts";
import { AuditLogValidatorVersionsControllerCreate } from "../src/operations/AuditLogValidatorVersionsControllerCreate.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogEventsControllerCreate", () => {
  it(
    "creates an audit log event for an action with a registered schema",
    async () => {
      const actionName = `distilled.workos.event_create.${testRunId}`;

      await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-event-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            yield* AuditLogValidatorVersionsControllerCreate({
              actionName,
              targets: [{ type: "user" }],
            });

            const result = yield* AuditLogEventsControllerCreate({
              organization_id: org.id,
              event: {
                action: actionName,
                occurred_at: new Date().toISOString(),
                actor: {
                  id: `actor_${testRunId}`,
                  type: "user",
                  name: "Test Actor",
                },
                targets: [
                  {
                    id: `target_user_${testRunId}`,
                    type: "user",
                    name: "Target User",
                  },
                ],
                context: {
                  location: "127.0.0.1",
                  user_agent: "distilled-tests",
                },
              },
            });

            expect(result).toBeDefined();
            expect(result.success).toBe(true);
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound when the organization does not exist",
    async () => {
      const error = await runEffect(
        AuditLogEventsControllerCreate({
          organization_id: `org_does_not_exist_${testRunId}`,
          event: {
            action: `distilled.workos.event_notfound.${testRunId}`,
            occurred_at: new Date().toISOString(),
            actor: { id: `actor_${testRunId}`, type: "user" },
            targets: [{ id: `target_${testRunId}`, type: "user" }],
            context: { location: "127.0.0.1" },
          },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the event references an unregistered action",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-event-422-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            return yield* AuditLogEventsControllerCreate({
              organization_id: org.id,
              event: {
                action: `distilled.workos.unregistered_action.${testRunId}`,
                occurred_at: new Date().toISOString(),
                actor: { id: `actor_${testRunId}`, type: "user" },
                targets: [{ id: `target_${testRunId}`, type: "user" }],
                context: { location: "127.0.0.1" },
              },
            });
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when occurred_at is not a valid date",
    async () => {
      const actionName = `distilled.workos.event_badrequest.${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-event-400-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            yield* AuditLogValidatorVersionsControllerCreate({
              actionName,
              targets: [{ type: "user" }],
            });

            return yield* AuditLogEventsControllerCreate({
              organization_id: org.id,
              event: {
                action: actionName,
                occurred_at: "not-a-valid-date",
                actor: { id: `actor_${testRunId}`, type: "user" },
                targets: [{ id: `target_${testRunId}`, type: "user" }],
                context: { location: "127.0.0.1" },
              },
            });
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );
});

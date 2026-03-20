import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getAccountId, testRunId } from "./test.ts";
import * as Containers from "~/services/containers";
import type {
  CreateContainerApplicationRequest,
  ListContainerApplicationsResponse,
  UpdateContainerApplicationRequest,
} from "~/services/containers";

const accountId = () => getAccountId();
const containerName = (name: string) =>
  `distilled-cf-containers-${name}-${testRunId}`;
type ExistingContainerApplication = ListContainerApplicationsResponse[number];

const getFirstContainerApplication = () =>
  Containers.listContainerApplications({
    accountId: accountId(),
  }).pipe(
    Effect.flatMap((applications) => {
      const first = applications[0];
      if (!first) {
        return Effect.fail(
          new Error("Expected at least one existing container application"),
        );
      }
      return Effect.succeed(first);
    }),
  );

const listContainerApplications = () =>
  Containers.listContainerApplications({
    accountId: accountId(),
  });

const deleteContainerApplicationByName = (name: string) =>
  listContainerApplications().pipe(
    Effect.flatMap((applications) =>
      Effect.forEach(
        applications.filter((application) => application.name === name),
        (application) =>
          Containers.deleteContainerApplication({
            accountId: accountId(),
            applicationId: application.id,
          }).pipe(Effect.catch(() => Effect.void)),
        { concurrency: "unbounded", discard: true },
      ),
    ),
    Effect.catch(() => Effect.void),
  );

const toCreateConfiguration = (
  base: ExistingContainerApplication["configuration"],
): CreateContainerApplicationRequest["configuration"] => ({
  image: base.image,
  observability: base.observability
    ? {
        logs: base.observability.logs
          ? {
              enabled: base.observability.logs.enabled,
            }
          : undefined,
      }
    : undefined,
  vcpu: base.vcpu ?? undefined,
  memory: base.memory ?? undefined,
  disk: base.disk
    ? {
        size: base.disk.size,
      }
    : undefined,
  network: base.network
    ? {
        assignIpv4: base.network.assignIpv4 ?? undefined,
        assignIpv6: base.network.assignIpv6 ?? undefined,
        mode: base.network.mode ?? undefined,
      }
    : undefined,
  command: base.command ?? undefined,
  entrypoint: base.entrypoint ?? undefined,
});

const toUpdateConfiguration = (
  base: ExistingContainerApplication["configuration"],
): UpdateContainerApplicationRequest["configuration"] =>
  toCreateConfiguration(base);

const getCreateContainerInput = (name: string, namespaceId?: string) =>
  getFirstContainerApplication().pipe(
    Effect.map(
      (base): CreateContainerApplicationRequest => ({
        accountId: accountId(),
        name,
        instances: 1,
        maxInstances: 1,
        schedulingPolicy: base.schedulingPolicy,
        configuration: toCreateConfiguration(base.configuration),
        durableObjects: namespaceId ? { namespaceId } : undefined,
        constraints: {
          tier: base.constraints.tier ?? undefined,
        },
      }),
    ),
  );

const withContainerApplication = <A, E, R>(
  name: string,
  fn: (
    application: Containers.CreateContainerApplicationResponse,
  ) => Effect.Effect<A, E, R>,
): Effect.Effect<A, E | any, R | any> =>
  Effect.gen(function* () {
    yield* deleteContainerApplicationByName(name);

    const input = yield* getCreateContainerInput(name);
    const application = yield* Containers.createContainerApplication(input);

    return yield* fn(application).pipe(
      Effect.ensuring(deleteContainerApplicationByName(name)),
    );
  });

describe("Containers", () => {
  describe("listContainerApplications", () => {
    test("happy path - lists container applications", { timeout: 30_000 }, () =>
      Effect.gen(function* () {
        const result = yield* Containers.listContainerApplications({
          accountId: accountId(),
        });

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);

        const first = result[0]!;
        expect(typeof first.id).toBe("string");
        expect(typeof first.accountId).toBe("string");
        expect(typeof first.name).toBe("string");
        expect(typeof first.version).toBe("number");
        expect(["moon", "gpu", "regional", "fill_metals", "default"]).toContain(
          first.schedulingPolicy,
        );
      }),
    );

    test(
      "error - InvalidRoute for invalid accountId",
      { timeout: 30_000 },
      () =>
        Containers.listContainerApplications({
          accountId: "invalid-account-id-000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("InvalidRoute")),
        ),
    );
  });

  describe("createContainerApplication", () => {
    test(
      "happy path - creates a new container application",
      { timeout: 30_000 },
      () =>
        withContainerApplication(containerName("create-happy"), (application) =>
          Effect.gen(function* () {
            expect(typeof application.id).toBe("string");
            expect(application.name).toBe(containerName("create-happy"));
            expect(application.accountId).toBe(accountId());

            const fetched = yield* Containers.getContainerApplication({
              accountId: accountId(),
              applicationId: application.id,
            });

            expect(fetched.id).toBe(application.id);
            expect(fetched.name).toBe(application.name);
          }),
        ),
    );

    test(
      "error - DurableObjectAlreadyHasApplication for an already-bound namespace",
      { timeout: 30_000 },
      () =>
        getFirstContainerApplication().pipe(
          Effect.flatMap((base) =>
            getCreateContainerInput(
              containerName("create-existing-durable-object"),
              base.durableObjects?.namespaceId,
            ),
          ),
          Effect.flatMap((input) =>
            Containers.createContainerApplication(input),
          ),
          Effect.flip,
          Effect.map((e) =>
            expect((e as { _tag?: string })._tag).toBe(
              "DurableObjectAlreadyHasApplication",
            ),
          ),
        ),
    );
  });

  describe("getContainerApplication", () => {
    test(
      "happy path - retrieves an existing container application",
      { timeout: 30_000 },
      () =>
        Effect.gen(function* () {
          const existing = yield* getFirstContainerApplication();

          const result = yield* Containers.getContainerApplication({
            accountId: accountId(),
            applicationId: existing.id,
          });

          expect(result.id).toBe(existing.id);
          expect(result.name).toBe(existing.name);
          expect(result.accountId).toBe(accountId());
          expect(typeof result.createdAt).toBe("string");
        }),
    );

    test(
      "error - ContainerApplicationNotFound for non-existent applicationId",
      { timeout: 30_000 },
      () =>
        Containers.getContainerApplication({
          accountId: accountId(),
          applicationId: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) =>
            expect(e._tag).toBe("ContainerApplicationNotFound"),
          ),
        ),
    );
  });

  describe("updateContainerApplication", () => {
    test(
      "happy path - updates a temporary container application idempotently",
      { timeout: 30_000 },
      () =>
        withContainerApplication(containerName("update-happy"), (existing) =>
          Effect.gen(function* () {
            const result = yield* Containers.updateContainerApplication({
              accountId: accountId(),
              applicationId: existing.id,
              instances: existing.instances,
              maxInstances: existing.maxInstances,
              schedulingPolicy: existing.schedulingPolicy,
              constraints: {
                tier: existing.constraints.tier ?? undefined,
              },
              configuration: toUpdateConfiguration(existing.configuration),
            });

            expect(result.id).toBe(existing.id);
            expect(result.name).toBe(existing.name);
            expect(result.accountId).toBe(accountId());
            expect(result.schedulingPolicy).toBe(existing.schedulingPolicy);
          }),
        ),
    );

    test(
      "error - ContainerApplicationNotFound for non-existent applicationId",
      { timeout: 30_000 },
      () =>
        Containers.updateContainerApplication({
          accountId: accountId(),
          applicationId: "00000000-0000-0000-0000-000000000000",
          instances: 1,
          maxInstances: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) =>
            expect(e._tag).toBe("ContainerApplicationNotFound"),
          ),
        ),
    );
  });

  describe("deleteContainerApplication", () => {
    test(
      "happy path - deletes a temporary container application",
      { timeout: 30_000 },
      () =>
        withContainerApplication(containerName("delete-happy"), (application) =>
          Effect.gen(function* () {
            yield* Containers.deleteContainerApplication({
              accountId: accountId(),
              applicationId: application.id,
            });

            yield* Containers.getContainerApplication({
              accountId: accountId(),
              applicationId: application.id,
            }).pipe(
              Effect.flip,
              Effect.map((e) =>
                expect(e._tag).toBe("ContainerApplicationNotFound"),
              ),
            );
          }),
        ),
    );
  });

  describe("getContainerIdentity", () => {
    test("happy path - retrieves container identity", { timeout: 30_000 }, () =>
      Effect.gen(function* () {
        const result = yield* Containers.getContainerIdentity({
          accountId: accountId(),
        });

        expect(typeof result.externalAccountId).toBe("string");
        expect(typeof result.legacyIdentity).toBe("string");
        expect(Array.isArray(result.locations)).toBe(true);
        expect(typeof result.defaults.vcpus).toBe("number");
        expect(typeof result.defaults.memoryMib).toBe("number");
        expect(typeof result.limits.totalVcpu).toBe("number");
        expect(Array.isArray(result.limits.networkModes)).toBe(true);
      }),
    );

    test(
      "error - InvalidRoute for invalid accountId",
      { timeout: 30_000 },
      () =>
        Containers.getContainerIdentity({
          accountId: "invalid-account-id-000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("InvalidRoute")),
        ),
    );
  });
});

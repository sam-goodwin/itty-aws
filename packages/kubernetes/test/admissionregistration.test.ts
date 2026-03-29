import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect, resourceName } from "./test";
import {
  createAdmissionregistrationV1MutatingAdmissionPolicy,
  deleteAdmissionregistrationV1MutatingAdmissionPolicy,
  createAdmissionregistrationV1MutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding,
  createAdmissionregistrationV1MutatingWebhookConfiguration,
  deleteAdmissionregistrationV1MutatingWebhookConfiguration,
  createAdmissionregistrationV1ValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1ValidatingAdmissionPolicy,
  createAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  createAdmissionregistrationV1ValidatingWebhookConfiguration,
  deleteAdmissionregistrationV1ValidatingWebhookConfiguration,
  createAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  createAdmissionregistrationV1beta1MutatingAdmissionPolicy,
  deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy,
  createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy,
  deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration,
  deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration,
  deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy,
  deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicy,
  deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicyBinding,
  getAdmissionregistrationAPIGroup,
  getAdmissionregistrationV1APIResources,
  getAdmissionregistrationV1alpha1APIResources,
  getAdmissionregistrationV1beta1APIResources,
  listAdmissionregistrationV1MutatingAdmissionPolicy,
  listAdmissionregistrationV1MutatingAdmissionPolicyBinding,
  listAdmissionregistrationV1MutatingWebhookConfiguration,
  listAdmissionregistrationV1ValidatingAdmissionPolicy,
  listAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  listAdmissionregistrationV1ValidatingWebhookConfiguration,
  listAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  listAdmissionregistrationV1beta1MutatingAdmissionPolicy,
  listAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1MutatingAdmissionPolicy,
  patchAdmissionregistrationV1MutatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1MutatingWebhookConfiguration,
  patchAdmissionregistrationV1ValidatingAdmissionPolicy,
  patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus,
  patchAdmissionregistrationV1ValidatingWebhookConfiguration,
  patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1beta1MutatingAdmissionPolicy,
} from "../src/services/admissionregistration";
import { BadRequest, Conflict, NotFound, UnprocessableEntity } from "../src/errors";

describe("Admissionregistration API", () => {
  describe("MutatingAdmissionPolicy", () => {
    describe("createAdmissionregistrationV1MutatingAdmissionPolicy", () => {
      it("happy path - creates a MutatingAdmissionPolicy", async () => {
        const policyName = resourceName("mutadmpol");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1MutatingAdmissionPolicy({
                metadata: { name: policyName },
                spec: {
                  matchConstraints: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                  mutations: [
                    {
                      patchType: "JSONPatch",
                      jsonPatch: {
                        expression:
                          '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                      },
                    },
                  ],
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(policyName);
            expect(result.kind).toBe("MutatingAdmissionPolicy");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1MutatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate policy", async () => {
        const policyName = resourceName("mutadmpol-dup");
        await runEffect(
          Effect.gen(function* () {
            // Create the policy first
            yield* createAdmissionregistrationV1MutatingAdmissionPolicy({
              metadata: { name: policyName },
              spec: {
                matchConstraints: {
                  resourceRules: [
                    {
                      apiGroups: [""],
                      apiVersions: ["v1"],
                      operations: ["CREATE"],
                      resources: ["pods"],
                    },
                  ],
                },
                mutations: [
                  {
                    patchType: "JSONPatch",
                    jsonPatch: {
                      expression:
                        '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                    },
                  },
                ],
              },
            } as any);

            // Try to create the same policy again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1MutatingAdmissionPolicy({
                metadata: { name: policyName },
                spec: {
                  matchConstraints: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                  mutations: [
                    {
                      patchType: "JSONPatch",
                      jsonPatch: {
                        expression:
                          '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                      },
                    },
                  ],
                },
              } as any).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1MutatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid policy spec", () =>
        runEffect(
          createAdmissionregistrationV1MutatingAdmissionPolicy({
            metadata: { name: resourceName("mutadmpol-invalid") },
            spec: {
              mutations: [
                {
                  patchType: "InvalidPatchType",
                },
              ],
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("MutatingAdmissionPolicyBinding", () => {
    describe("createAdmissionregistrationV1MutatingAdmissionPolicyBinding", () => {
      it("happy path - creates a MutatingAdmissionPolicyBinding", async () => {
        const bindingName = resourceName("mutadmpolbind");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
                metadata: { name: bindingName },
                spec: {
                  policyName: "nonexistent-policy",
                  matchResources: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(bindingName);
            expect(result.kind).toBe("MutatingAdmissionPolicyBinding");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate binding", async () => {
        const bindingName = resourceName("mutadmpolbind-dup");
        await runEffect(
          Effect.gen(function* () {
            // Create the binding first
            yield* createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              metadata: { name: bindingName },
              spec: {
                policyName: "nonexistent-policy",
                matchResources: {
                  resourceRules: [
                    {
                      apiGroups: [""],
                      apiVersions: ["v1"],
                      operations: ["CREATE"],
                      resources: ["pods"],
                    },
                  ],
                },
              },
            } as any);

            // Try to create the same binding again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
                metadata: { name: bindingName },
                spec: {
                  policyName: "nonexistent-policy",
                  matchResources: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                },
              } as any).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid binding spec", () =>
        runEffect(
          createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
            metadata: { name: resourceName("mutadmpolbind-invalid") },
            spec: {
              matchResources: {
                matchPolicy: "InvalidPolicy",
              },
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("MutatingWebhookConfiguration", () => {
    describe("createAdmissionregistrationV1MutatingWebhookConfiguration", () => {
      it("happy path - creates a MutatingWebhookConfiguration", async () => {
        const configName = resourceName("mutwh");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1MutatingWebhookConfiguration({
                metadata: { name: configName },
                webhooks: [
                  {
                    name: "test.webhook.distilled.cloud",
                    admissionReviewVersions: ["v1"],
                    sideEffects: "None",
                    clientConfig: {
                      url: "https://localhost:9443/mutate",
                    },
                    rules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                ],
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(configName);
            expect(result.kind).toBe("MutatingWebhookConfiguration");
            expect(result.webhooks).toBeDefined();
            expect(result.webhooks!.length).toBe(1);
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1MutatingWebhookConfiguration({
                name: configName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate webhook config", async () => {
        const configName = resourceName("mutwh-dup");
        const webhookPayload = {
          metadata: { name: configName },
          webhooks: [
            {
              name: "test.webhook.distilled.cloud",
              admissionReviewVersions: ["v1"],
              sideEffects: "None",
              clientConfig: {
                url: "https://localhost:9443/mutate",
              },
            },
          ],
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the webhook config first
            yield* createAdmissionregistrationV1MutatingWebhookConfiguration(
              webhookPayload as any,
            );

            // Try to create the same config again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1MutatingWebhookConfiguration(
                webhookPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1MutatingWebhookConfiguration({
                name: configName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid webhook config", () =>
        runEffect(
          createAdmissionregistrationV1MutatingWebhookConfiguration({
            metadata: { name: resourceName("mutwh-invalid") },
            webhooks: [
              {
                name: "invalid",
                admissionReviewVersions: [],
                sideEffects: "InvalidValue",
                clientConfig: {},
              },
            ],
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ValidatingAdmissionPolicy", () => {
    describe("createAdmissionregistrationV1ValidatingAdmissionPolicy", () => {
      it("happy path - creates a ValidatingAdmissionPolicy", async () => {
        const policyName = resourceName("valadmpol");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1ValidatingAdmissionPolicy({
                metadata: { name: policyName },
                spec: {
                  matchConstraints: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                  validations: [
                    {
                      expression: "object.metadata.name.size() > 0",
                      message: "name must not be empty",
                      reason: "Invalid",
                    },
                  ],
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(policyName);
            expect(result.kind).toBe("ValidatingAdmissionPolicy");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate policy", async () => {
        const policyName = resourceName("valadmpol-dup");
        const policyPayload = {
          metadata: { name: policyName },
          spec: {
            matchConstraints: {
              resourceRules: [
                {
                  apiGroups: [""],
                  apiVersions: ["v1"],
                  operations: ["CREATE"],
                  resources: ["pods"],
                },
              ],
            },
            validations: [
              {
                expression: "object.metadata.name.size() > 0",
                message: "name must not be empty",
              },
            ],
          },
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the policy first
            yield* createAdmissionregistrationV1ValidatingAdmissionPolicy(
              policyPayload as any,
            );

            // Try to create the same policy again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1ValidatingAdmissionPolicy(
                policyPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid policy spec", () =>
        runEffect(
          createAdmissionregistrationV1ValidatingAdmissionPolicy({
            metadata: { name: resourceName("valadmpol-invalid") },
            spec: {
              validations: [
                {
                  expression: "this is not valid CEL !!!",
                },
              ],
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ValidatingAdmissionPolicyBinding", () => {
    describe("createAdmissionregistrationV1ValidatingAdmissionPolicyBinding", () => {
      it("happy path - creates a ValidatingAdmissionPolicyBinding", async () => {
        const bindingName = resourceName("valadmpolbind");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
                metadata: { name: bindingName },
                spec: {
                  policyName: "nonexistent-policy",
                  validationActions: ["Deny"],
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(bindingName);
            expect(result.kind).toBe("ValidatingAdmissionPolicyBinding");
            expect(result.spec.policyName).toBe("nonexistent-policy");
            expect(result.spec.validationActions).toEqual(["Deny"]);
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate binding", async () => {
        const bindingName = resourceName("valadmpolbind-dup");
        const bindingPayload = {
          metadata: { name: bindingName },
          spec: {
            policyName: "nonexistent-policy",
            validationActions: ["Deny"],
          },
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the binding first
            yield* createAdmissionregistrationV1ValidatingAdmissionPolicyBinding(
              bindingPayload as any,
            );

            // Try to create the same binding again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1ValidatingAdmissionPolicyBinding(
                bindingPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid binding spec", () =>
        runEffect(
          createAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
            metadata: { name: resourceName("valadmpolbind-invalid") },
            spec: {
              policyName: "",
              validationActions: ["InvalidAction"],
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ValidatingWebhookConfiguration", () => {
    describe("createAdmissionregistrationV1ValidatingWebhookConfiguration", () => {
      it("happy path - creates a ValidatingWebhookConfiguration", async () => {
        const configName = resourceName("valwh");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1ValidatingWebhookConfiguration({
                metadata: { name: configName },
                webhooks: [
                  {
                    name: "test.validating.distilled.cloud",
                    admissionReviewVersions: ["v1"],
                    sideEffects: "None",
                    clientConfig: {
                      url: "https://localhost:9443/validate",
                    },
                    rules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                ],
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(configName);
            expect(result.kind).toBe("ValidatingWebhookConfiguration");
            expect(result.webhooks).toBeDefined();
            expect(result.webhooks!.length).toBe(1);
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
                name: configName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate webhook config", async () => {
        const configName = resourceName("valwh-dup");
        const webhookPayload = {
          metadata: { name: configName },
          webhooks: [
            {
              name: "test.validating.distilled.cloud",
              admissionReviewVersions: ["v1"],
              sideEffects: "None",
              clientConfig: {
                url: "https://localhost:9443/validate",
              },
            },
          ],
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the webhook config first
            yield* createAdmissionregistrationV1ValidatingWebhookConfiguration(
              webhookPayload as any,
            );

            // Try to create the same config again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1ValidatingWebhookConfiguration(
                webhookPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
                name: configName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid webhook config", () =>
        runEffect(
          createAdmissionregistrationV1ValidatingWebhookConfiguration({
            metadata: { name: resourceName("valwh-invalid") },
            webhooks: [
              {
                name: "invalid",
                admissionReviewVersions: [],
                sideEffects: "InvalidValue",
                clientConfig: {},
              },
            ],
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("MutatingAdmissionPolicy (v1alpha1)", () => {
    describe("createAdmissionregistrationV1alpha1MutatingAdmissionPolicy", () => {
      it("happy path - creates a v1alpha1 MutatingAdmissionPolicy", async () => {
        const policyName = resourceName("a1mutadmpol");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
                metadata: { name: policyName },
                spec: {
                  matchConstraints: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                  mutations: [
                    {
                      patchType: "JSONPatch",
                      jsonPatch: {
                        expression:
                          '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                      },
                    },
                  ],
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(policyName);
            expect(result.kind).toBe("MutatingAdmissionPolicy");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate policy", async () => {
        const policyName = resourceName("a1mutadmpol-dup");
        const policyPayload = {
          metadata: { name: policyName },
          spec: {
            matchConstraints: {
              resourceRules: [
                {
                  apiGroups: [""],
                  apiVersions: ["v1"],
                  operations: ["CREATE"],
                  resources: ["pods"],
                },
              ],
            },
            mutations: [
              {
                patchType: "JSONPatch",
                jsonPatch: {
                  expression:
                    '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                },
              },
            ],
          },
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the policy first
            yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicy(
              policyPayload as any,
            );

            // Try to create the same policy again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicy(
                policyPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid policy spec", () =>
        runEffect(
          createAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
            metadata: { name: resourceName("a1mutadmpol-invalid") },
            spec: {
              mutations: [
                {
                  patchType: "InvalidPatchType",
                },
              ],
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("MutatingAdmissionPolicyBinding (v1alpha1)", () => {
    describe("createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding", () => {
      it("happy path - creates a v1alpha1 MutatingAdmissionPolicyBinding", async () => {
        const bindingName = resourceName("a1mutadmpolbind");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
                metadata: { name: bindingName },
                spec: {
                  policyName: "nonexistent-policy",
                  matchResources: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(bindingName);
            expect(result.kind).toBe("MutatingAdmissionPolicyBinding");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate binding", async () => {
        const bindingName = resourceName("a1mutadmpolbind-dup");
        const bindingPayload = {
          metadata: { name: bindingName },
          spec: {
            policyName: "nonexistent-policy",
            matchResources: {
              resourceRules: [
                {
                  apiGroups: [""],
                  apiVersions: ["v1"],
                  operations: ["CREATE"],
                  resources: ["pods"],
                },
              ],
            },
          },
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the binding first
            yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
              bindingPayload as any,
            );

            // Try to create the same binding again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
                bindingPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid binding spec", () =>
        runEffect(
          createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
            metadata: { name: resourceName("a1mutadmpolbind-invalid") },
            spec: {
              matchResources: {
                matchPolicy: "InvalidPolicy",
              },
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("MutatingAdmissionPolicy (v1beta1)", () => {
    describe("createAdmissionregistrationV1beta1MutatingAdmissionPolicy", () => {
      it("happy path - creates a v1beta1 MutatingAdmissionPolicy", async () => {
        const policyName = resourceName("b1mutadmpol");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicy({
                metadata: { name: policyName },
                spec: {
                  matchConstraints: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                  mutations: [
                    {
                      patchType: "JSONPatch",
                      jsonPatch: {
                        expression:
                          '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                      },
                    },
                  ],
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(policyName);
            expect(result.kind).toBe("MutatingAdmissionPolicy");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate policy", async () => {
        const policyName = resourceName("b1mutadmpol-dup");
        const policyPayload = {
          metadata: { name: policyName },
          spec: {
            matchConstraints: {
              resourceRules: [
                {
                  apiGroups: [""],
                  apiVersions: ["v1"],
                  operations: ["CREATE"],
                  resources: ["pods"],
                },
              ],
            },
            mutations: [
              {
                patchType: "JSONPatch",
                jsonPatch: {
                  expression:
                    '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                },
              },
            ],
          },
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the policy first
            yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicy(
              policyPayload as any,
            );

            // Try to create the same policy again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicy(
                policyPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
                name: policyName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid policy spec", () =>
        runEffect(
          createAdmissionregistrationV1beta1MutatingAdmissionPolicy({
            metadata: { name: resourceName("b1mutadmpol-invalid") },
            spec: {
              mutations: [
                {
                  patchType: "InvalidPatchType",
                },
              ],
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("MutatingAdmissionPolicyBinding (v1beta1)", () => {
    describe("createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding", () => {
      it("happy path - creates a v1beta1 MutatingAdmissionPolicyBinding", async () => {
        const bindingName = resourceName("b1mutadmpolbind");
        await runEffect(
          Effect.gen(function* () {
            const result =
              yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
                metadata: { name: bindingName },
                spec: {
                  policyName: "nonexistent-policy",
                  matchResources: {
                    resourceRules: [
                      {
                        apiGroups: [""],
                        apiVersions: ["v1"],
                        operations: ["CREATE"],
                        resources: ["pods"],
                      },
                    ],
                  },
                },
              } as any);
            expect(result).toBeDefined();
            expect(result.metadata?.name).toBe(bindingName);
            expect(result.kind).toBe("MutatingAdmissionPolicyBinding");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - Conflict when creating duplicate binding", async () => {
        const bindingName = resourceName("b1mutadmpolbind-dup");
        const bindingPayload = {
          metadata: { name: bindingName },
          spec: {
            policyName: "nonexistent-policy",
            matchResources: {
              resourceRules: [
                {
                  apiGroups: [""],
                  apiVersions: ["v1"],
                  operations: ["CREATE"],
                  resources: ["pods"],
                },
              ],
            },
          },
        };
        await runEffect(
          Effect.gen(function* () {
            // Create the binding first
            yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding(
              bindingPayload as any,
            );

            // Try to create the same binding again — expect Conflict
            const error =
              yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding(
                bindingPayload as any,
              ).pipe(Effect.flip);

            expect(error).toBeInstanceOf(Conflict);
            expect(error._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
                name: bindingName,
              } as any).pipe(Effect.ignore),
            ),
          ),
        );
      }, 30_000);

      it("error - UnprocessableEntity for invalid binding spec", () =>
        runEffect(
          createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
            metadata: { name: resourceName("b1mutadmpolbind-invalid") },
            spec: {
              matchResources: {
                matchPolicy: "InvalidPolicy",
              },
            },
          } as any).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(UnprocessableEntity);
              expect(e._tag).toBe("UnprocessableEntity");
            }),
          ),
        ), 30_000);
    });
  });

  describe("deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1MutatingAdmissionPolicy", () => {
    it("happy path - deletes an existing MutatingAdmissionPolicy", async () => {
      const policyName = resourceName("mutadmpol-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to delete
          yield* createAdmissionregistrationV1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1MutatingAdmissionPolicy({
              name: policyName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent policy", () =>
      runEffect(
        deleteAdmissionregistrationV1MutatingAdmissionPolicy({
          name: "nonexistent-policy-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding", () => {
    it("happy path - deletes an existing MutatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("mutadmpolbind-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to delete
          yield* createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              matchResources: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent binding", () =>
      runEffect(
        deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
          name: "nonexistent-binding-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1MutatingWebhookConfiguration", () => {
    it("happy path - deletes an existing MutatingWebhookConfiguration", async () => {
      const configName = resourceName("mutwh-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a webhook config to delete
          yield* createAdmissionregistrationV1MutatingWebhookConfiguration({
            metadata: { name: configName },
            webhooks: [
              {
                name: "test.webhook.distilled.cloud",
                admissionReviewVersions: ["v1"],
                sideEffects: "None",
                clientConfig: {
                  url: "https://localhost:9443/mutate",
                },
              },
            ],
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1MutatingWebhookConfiguration({
              name: configName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingWebhookConfiguration({
              name: configName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent webhook config", () =>
      runEffect(
        deleteAdmissionregistrationV1MutatingWebhookConfiguration({
          name: "nonexistent-webhook-config-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1ValidatingAdmissionPolicy", () => {
    it("happy path - deletes an existing ValidatingAdmissionPolicy", async () => {
      const policyName = resourceName("valadmpol-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to delete
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              validations: [
                {
                  expression: "object.metadata.name.size() > 0",
                  message: "name must not be empty",
                },
              ],
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: policyName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent policy", () =>
      runEffect(
        deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
          name: "nonexistent-val-policy-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding", () => {
    it("happy path - deletes an existing ValidatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("valadmpolbind-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to delete
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              validationActions: ["Deny"],
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
              name: bindingName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent binding", () =>
      runEffect(
        deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
          name: "nonexistent-val-binding-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1ValidatingWebhookConfiguration", () => {
    it("happy path - deletes an existing ValidatingWebhookConfiguration", async () => {
      const configName = resourceName("valwh-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a webhook config to delete
          yield* createAdmissionregistrationV1ValidatingWebhookConfiguration({
            metadata: { name: configName },
            webhooks: [
              {
                name: "test.validating.distilled.cloud",
                admissionReviewVersions: ["v1"],
                sideEffects: "None",
                clientConfig: {
                  url: "https://localhost:9443/validate",
                },
              },
            ],
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
              name: configName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
              name: configName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent webhook config", () =>
      runEffect(
        deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
          name: "nonexistent-val-webhook-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy", () => {
    it("happy path - deletes an existing v1alpha1 MutatingAdmissionPolicy", async () => {
      const policyName = resourceName("a1mutadmpol-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to delete
          yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
              name: policyName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent policy", () =>
      runEffect(
        deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
          name: "nonexistent-a1-policy-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding", () => {
    it("happy path - deletes an existing v1alpha1 MutatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("a1mutadmpolbind-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to delete
          yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              matchResources: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent binding", () =>
      runEffect(
        deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
          name: "nonexistent-a1-binding-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicy", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicy({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicy({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicyBinding", () => {
    it("happy path - deletes collection with dryRun", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicyBinding({
              dryRun: "All",
            });
          expect(result).toBeDefined();
          expect(result.kind).toBe("Status");
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid dryRun value", () =>
      runEffect(
        deleteAdmissionregistrationV1beta1CollectionMutatingAdmissionPolicyBinding({
          dryRun: "InvalidValue",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy", () => {
    it("happy path - deletes an existing v1beta1 MutatingAdmissionPolicy", async () => {
      const policyName = resourceName("b1mutadmpol-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to delete
          yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
              name: policyName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent policy", () =>
      runEffect(
        deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
          name: "nonexistent-b1-policy-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding", () => {
    it("happy path - deletes an existing v1beta1 MutatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("b1mutadmpolbind-del");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to delete
          yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              matchResources: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
            },
          } as any);

          // Delete it
          const result =
            yield* deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any);
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent binding", () =>
      runEffect(
        deleteAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding({
          name: "nonexistent-b1-binding-does-not-exist",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("getAdmissionregistrationAPIGroup", () => {
    it("happy path - returns the admissionregistration API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAdmissionregistrationAPIGroup({});
          expect(result).toBeDefined();
          expect(result.name).toBe("admissionregistration.k8s.io");
          expect(result.kind).toBe("APIGroup");
        }),
      );
    }, 30_000);

    it("happy path - response contains versions list", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAdmissionregistrationAPIGroup({});
          expect(result).toBeDefined();
          expect(result.versions).toBeDefined();
          expect(Array.isArray(result.versions)).toBe(true);
          expect(result.versions.length).toBeGreaterThan(0);
          expect(result.preferredVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("getAdmissionregistrationV1APIResources", () => {
    it("happy path - returns v1 API resources list", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAdmissionregistrationV1APIResources({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("APIResourceList");
          expect(result.groupVersion).toBe("admissionregistration.k8s.io/v1");
        }),
      );
    }, 30_000);

    it("happy path - resources array contains expected resource types", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAdmissionregistrationV1APIResources({});
          expect(result.resources).toBeDefined();
          expect(Array.isArray(result.resources)).toBe(true);
          expect(result.resources.length).toBeGreaterThan(0);
          const resourceNames = result.resources.map((r: any) => r.name);
          expect(resourceNames).toContain("mutatingwebhookconfigurations");
          expect(resourceNames).toContain("validatingwebhookconfigurations");
        }),
      );
    }, 30_000);
  });

  describe("getAdmissionregistrationV1alpha1APIResources", () => {
    it("happy path - returns v1alpha1 API resources list", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* getAdmissionregistrationV1alpha1APIResources({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("APIResourceList");
          expect(result.groupVersion).toBe(
            "admissionregistration.k8s.io/v1alpha1",
          );
        }),
      );
    }, 30_000);

    it("happy path - resources array contains expected resource types", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* getAdmissionregistrationV1alpha1APIResources({});
          expect(result.resources).toBeDefined();
          expect(Array.isArray(result.resources)).toBe(true);
          expect(result.resources.length).toBeGreaterThan(0);
          const resourceNames = result.resources.map((r: any) => r.name);
          expect(resourceNames).toContain("mutatingadmissionpolicies");
        }),
      );
    }, 30_000);
  });

  describe("getAdmissionregistrationV1beta1APIResources", () => {
    it("happy path - returns v1beta1 API resources list", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* getAdmissionregistrationV1beta1APIResources({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("APIResourceList");
          expect(result.groupVersion).toBe(
            "admissionregistration.k8s.io/v1beta1",
          );
        }),
      );
    }, 30_000);

    it("happy path - resources array contains expected resource types", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* getAdmissionregistrationV1beta1APIResources({});
          expect(result.resources).toBeDefined();
          expect(Array.isArray(result.resources)).toBe(true);
          expect(result.resources.length).toBeGreaterThan(0);
          const resourceNames = result.resources.map((r: any) => r.name);
          expect(resourceNames).toContain("mutatingadmissionpolicies");
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1MutatingAdmissionPolicy", () => {
    it("happy path - returns a list of MutatingAdmissionPolicies", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1MutatingAdmissionPolicy({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingAdmissionPolicyList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1MutatingAdmissionPolicy({});
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1MutatingAdmissionPolicyBinding", () => {
    it("happy path - returns a list of MutatingAdmissionPolicyBindings", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1MutatingAdmissionPolicyBinding(
              {},
            );
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingAdmissionPolicyBindingList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1MutatingAdmissionPolicyBinding(
              {},
            );
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1MutatingWebhookConfiguration", () => {
    it("happy path - returns a list of MutatingWebhookConfigurations", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1MutatingWebhookConfiguration({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingWebhookConfigurationList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1MutatingWebhookConfiguration({});
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1ValidatingAdmissionPolicy", () => {
    it("happy path - returns a list of ValidatingAdmissionPolicies", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1ValidatingAdmissionPolicy({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("ValidatingAdmissionPolicyList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1ValidatingAdmissionPolicy({});
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1ValidatingAdmissionPolicyBinding", () => {
    it("happy path - returns a list of ValidatingAdmissionPolicyBindings", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1ValidatingAdmissionPolicyBinding(
              {},
            );
          expect(result).toBeDefined();
          expect(result.kind).toBe("ValidatingAdmissionPolicyBindingList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1ValidatingAdmissionPolicyBinding(
              {},
            );
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1ValidatingWebhookConfiguration", () => {
    it("happy path - returns a list of ValidatingWebhookConfigurations", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1ValidatingWebhookConfiguration(
              {},
            );
          expect(result).toBeDefined();
          expect(result.kind).toBe("ValidatingWebhookConfigurationList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1ValidatingWebhookConfiguration(
              {},
            );
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1alpha1MutatingAdmissionPolicy", () => {
    it("happy path - returns a list of v1alpha1 MutatingAdmissionPolicies", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1alpha1MutatingAdmissionPolicy(
              {},
            );
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingAdmissionPolicyList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1alpha1MutatingAdmissionPolicy(
              {},
            );
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding", () => {
    it("happy path - returns a list of v1alpha1 MutatingAdmissionPolicyBindings", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
              {},
            );
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingAdmissionPolicyBindingList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
              {},
            );
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1beta1MutatingAdmissionPolicy", () => {
    it("happy path - returns a list of v1beta1 MutatingAdmissionPolicies", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1beta1MutatingAdmissionPolicy({});
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingAdmissionPolicyList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1beta1MutatingAdmissionPolicy({});
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding", () => {
    it("happy path - returns a list of v1beta1 MutatingAdmissionPolicyBindings", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding(
              {},
            );
          expect(result).toBeDefined();
          expect(result.kind).toBe("MutatingAdmissionPolicyBindingList");
          expect(result.items).toBeDefined();
          expect(Array.isArray(result.items)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - response includes metadata", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result =
            yield* listAdmissionregistrationV1beta1MutatingAdmissionPolicyBinding(
              {},
            );
          expect(result.metadata).toBeDefined();
          expect(result.metadata?.resourceVersion).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("patchAdmissionregistrationV1MutatingAdmissionPolicy", () => {
    it("happy path - patches an existing MutatingAdmissionPolicy", async () => {
      const policyName = resourceName("mutadmpol-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to patch
          yield* createAdmissionregistrationV1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1MutatingAdmissionPolicy({
              name: policyName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent policy", () =>
      runEffect(
        patchAdmissionregistrationV1MutatingAdmissionPolicy({
          name: "nonexistent-policy-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid field", () =>
      runEffect(
        Effect.gen(function* () {
          const policyName = resourceName("mutadmpol-patch-upe");
          // Create a policy first
          yield* createAdmissionregistrationV1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Patch with invalid spec
          const error =
            yield* patchAdmissionregistrationV1MutatingAdmissionPolicy({
              name: policyName,
              spec: {
                mutations: [
                  {
                    patchType: "InvalidPatchType",
                    jsonPatch: {
                      expression: "invalid",
                    },
                  },
                ],
              },
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingAdmissionPolicy({
              name: resourceName("mutadmpol-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1MutatingAdmissionPolicyBinding", () => {
    it("happy path - patches an existing MutatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("mutadmpolbind-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to patch
          yield* createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              matchResources: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
            },
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              name: bindingName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent binding", () =>
      runEffect(
        patchAdmissionregistrationV1MutatingAdmissionPolicyBinding({
          name: "nonexistent-binding-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid spec", () =>
      runEffect(
        Effect.gen(function* () {
          const bindingName = resourceName("mutadmpolbind-patch-upe");
          // Create a binding first
          yield* createAdmissionregistrationV1MutatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              matchResources: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
            },
          } as any);

          // Patch with invalid paramRef
          const error =
            yield* patchAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              name: bindingName,
              spec: {
                paramRef: {
                  name: "",
                  parameterNotReadyAction: "InvalidAction",
                },
              },
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding({
              name: resourceName("mutadmpolbind-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1MutatingWebhookConfiguration", () => {
    it("happy path - patches an existing MutatingWebhookConfiguration", async () => {
      const configName = resourceName("mutwh-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a webhook config to patch
          yield* createAdmissionregistrationV1MutatingWebhookConfiguration({
            metadata: { name: configName },
            webhooks: [
              {
                name: "test.webhook.distilled.cloud",
                admissionReviewVersions: ["v1"],
                sideEffects: "None",
                clientConfig: {
                  url: "https://localhost:9443/mutate",
                },
              },
            ],
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1MutatingWebhookConfiguration({
              name: configName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingWebhookConfiguration({
              name: configName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent webhook config", () =>
      runEffect(
        patchAdmissionregistrationV1MutatingWebhookConfiguration({
          name: "nonexistent-webhook-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid webhook spec", () =>
      runEffect(
        Effect.gen(function* () {
          const configName = resourceName("mutwh-patch-upe");
          // Create a webhook config first
          yield* createAdmissionregistrationV1MutatingWebhookConfiguration({
            metadata: { name: configName },
            webhooks: [
              {
                name: "test.webhook.distilled.cloud",
                admissionReviewVersions: ["v1"],
                sideEffects: "None",
                clientConfig: {
                  url: "https://localhost:9443/mutate",
                },
              },
            ],
          } as any);

          // Patch with invalid sideEffects
          const error =
            yield* patchAdmissionregistrationV1MutatingWebhookConfiguration({
              name: configName,
              webhooks: [
                {
                  name: "test.webhook.distilled.cloud",
                  admissionReviewVersions: [],
                  sideEffects: "InvalidSideEffects",
                  clientConfig: {
                    url: "https://localhost:9443/mutate",
                  },
                },
              ],
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1MutatingWebhookConfiguration({
              name: resourceName("mutwh-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1ValidatingAdmissionPolicy", () => {
    it("happy path - patches an existing ValidatingAdmissionPolicy", async () => {
      const policyName = resourceName("valadmpol-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to patch
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              validations: [
                {
                  expression: "object.metadata.name.size() > 0",
                  message: "name must not be empty",
                },
              ],
            },
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: policyName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent policy", () =>
      runEffect(
        patchAdmissionregistrationV1ValidatingAdmissionPolicy({
          name: "nonexistent-val-policy-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid spec", () =>
      runEffect(
        Effect.gen(function* () {
          const policyName = resourceName("valadmpol-patch-upe");
          // Create a policy first
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              validations: [
                {
                  expression: "object.metadata.name.size() > 0",
                  message: "name must not be empty",
                },
              ],
            },
          } as any);

          // Patch with invalid validation expression
          const error =
            yield* patchAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: policyName,
              spec: {
                validations: [
                  {
                    expression: "",
                    message: "empty expression is invalid",
                  },
                ],
              },
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: resourceName("valadmpol-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding", () => {
    it("happy path - patches an existing ValidatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("valadmpolbind-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to patch
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              validationActions: ["Deny"],
            },
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding(
              {
                name: bindingName,
                metadata: {
                  labels: { patched: "true" },
                },
              } as any,
            );
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent binding", () =>
      runEffect(
        patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
          name: "nonexistent-val-binding-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid spec", () =>
      runEffect(
        Effect.gen(function* () {
          const bindingName = resourceName("valadmpolbind-patch-upe");
          // Create a binding first
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
            metadata: { name: bindingName },
            spec: {
              policyName: "nonexistent-policy",
              validationActions: ["Deny"],
            },
          } as any);

          // Patch with invalid validationActions
          const error =
            yield* patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding(
              {
                name: bindingName,
                spec: {
                  validationActions: ["InvalidAction"],
                },
              } as any,
            ).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding({
              name: resourceName("valadmpolbind-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus", () => {
    it("happy path - patches status of an existing ValidatingAdmissionPolicy", async () => {
      const policyName = resourceName("valadmpol-patchst");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to patch status on
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              validations: [
                {
                  expression: "object.metadata.name.size() > 0",
                  message: "name must not be empty",
                },
              ],
            },
          } as any);

          // Patch the status subresource
          const result =
            yield* patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus({
              name: policyName,
              status: {
                observedGeneration: 1,
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.name).toBe(policyName);
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching status of non-existent policy", () =>
      runEffect(
        patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus({
          name: "nonexistent-val-policy-status-does-not-exist",
          status: {
            observedGeneration: 1,
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching status with invalid data", () =>
      runEffect(
        Effect.gen(function* () {
          const policyName = resourceName("valadmpol-patchst-upe");
          // Create a policy first
          yield* createAdmissionregistrationV1ValidatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              validations: [
                {
                  expression: "object.metadata.name.size() > 0",
                  message: "name must not be empty",
                },
              ],
            },
          } as any);

          // Patch status with invalid typeChecking conditions
          const error =
            yield* patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus({
              name: policyName,
              status: {
                typeChecking: {
                  expressionWarnings: [
                    {
                      fieldRef: "",
                      warning: "",
                    },
                  ],
                },
              },
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingAdmissionPolicy({
              name: resourceName("valadmpol-patchst-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1ValidatingWebhookConfiguration", () => {
    it("happy path - patches an existing ValidatingWebhookConfiguration", async () => {
      const configName = resourceName("valwh-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a webhook config to patch
          yield* createAdmissionregistrationV1ValidatingWebhookConfiguration({
            metadata: { name: configName },
            webhooks: [
              {
                name: "test.validating.distilled.cloud",
                admissionReviewVersions: ["v1"],
                sideEffects: "None",
                clientConfig: {
                  url: "https://localhost:9443/validate",
                },
              },
            ],
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1ValidatingWebhookConfiguration({
              name: configName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
              name: configName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent webhook config", () =>
      runEffect(
        patchAdmissionregistrationV1ValidatingWebhookConfiguration({
          name: "nonexistent-val-webhook-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid webhook spec", () =>
      runEffect(
        Effect.gen(function* () {
          const configName = resourceName("valwh-patch-upe");
          // Create a webhook config first
          yield* createAdmissionregistrationV1ValidatingWebhookConfiguration({
            metadata: { name: configName },
            webhooks: [
              {
                name: "test.validating.distilled.cloud",
                admissionReviewVersions: ["v1"],
                sideEffects: "None",
                clientConfig: {
                  url: "https://localhost:9443/validate",
                },
              },
            ],
          } as any);

          // Patch with invalid sideEffects
          const error =
            yield* patchAdmissionregistrationV1ValidatingWebhookConfiguration({
              name: configName,
              webhooks: [
                {
                  name: "test.validating.distilled.cloud",
                  admissionReviewVersions: [],
                  sideEffects: "InvalidSideEffects",
                  clientConfig: {
                    url: "https://localhost:9443/validate",
                  },
                },
              ],
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1ValidatingWebhookConfiguration({
              name: resourceName("valwh-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy", () => {
    it("happy path - patches an existing v1alpha1 MutatingAdmissionPolicy", async () => {
      const policyName = resourceName("a1mutadmpol-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to patch
          yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
              name: policyName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent policy", () =>
      runEffect(
        patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
          name: "nonexistent-a1-policy-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid spec", () =>
      runEffect(
        Effect.gen(function* () {
          const policyName = resourceName("a1mutadmpol-patch-upe");
          // Create a policy first
          yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Patch with invalid patchType
          const error =
            yield* patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
              name: policyName,
              spec: {
                mutations: [
                  {
                    patchType: "InvalidPatchType",
                    jsonPatch: {
                      expression: "invalid",
                    },
                  },
                ],
              },
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy({
              name: resourceName("a1mutadmpol-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding", () => {
    it("happy path - patches an existing v1alpha1 MutatingAdmissionPolicyBinding", async () => {
      const bindingName = resourceName("a1mutadmpolbind-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a binding to patch
          yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
            {
              metadata: { name: bindingName },
              spec: {
                policyName: "nonexistent-policy",
                matchResources: {
                  resourceRules: [
                    {
                      apiGroups: [""],
                      apiVersions: ["v1"],
                      operations: ["CREATE"],
                      resources: ["pods"],
                    },
                  ],
                },
              },
            } as any,
          );

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
              {
                name: bindingName,
                metadata: {
                  labels: { patched: "true" },
                },
              } as any,
            );
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
              name: bindingName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent binding", () =>
      runEffect(
        patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
          name: "nonexistent-a1-binding-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid spec", () =>
      runEffect(
        Effect.gen(function* () {
          const bindingName = resourceName("a1mutadmpolbind-patch-upe");
          // Create a binding first
          yield* createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
            {
              metadata: { name: bindingName },
              spec: {
                policyName: "nonexistent-policy",
                matchResources: {
                  resourceRules: [
                    {
                      apiGroups: [""],
                      apiVersions: ["v1"],
                      operations: ["CREATE"],
                      resources: ["pods"],
                    },
                  ],
                },
              },
            } as any,
          );

          // Patch with invalid paramRef
          const error =
            yield* patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding(
              {
                name: bindingName,
                spec: {
                  paramRef: {
                    name: "",
                    parameterNotReadyAction: "InvalidAction",
                  },
                },
              } as any,
            ).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding({
              name: resourceName("a1mutadmpolbind-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });

  describe("patchAdmissionregistrationV1beta1MutatingAdmissionPolicy", () => {
    it("happy path - patches an existing v1beta1 MutatingAdmissionPolicy", async () => {
      const policyName = resourceName("b1mutadmpol-patch");
      await runEffect(
        Effect.gen(function* () {
          // Create a policy to patch
          yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Patch it with a label
          const result =
            yield* patchAdmissionregistrationV1beta1MutatingAdmissionPolicy({
              name: policyName,
              metadata: {
                labels: { patched: "true" },
              },
            } as any);
          expect(result).toBeDefined();
          expect(result.metadata?.labels?.patched).toBe("true");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
              name: policyName,
            } as any).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound when patching non-existent policy", () =>
      runEffect(
        patchAdmissionregistrationV1beta1MutatingAdmissionPolicy({
          name: "nonexistent-b1-policy-does-not-exist",
          metadata: {
            labels: { patched: "true" },
          },
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("error - UnprocessableEntity when patching with invalid spec", () =>
      runEffect(
        Effect.gen(function* () {
          const policyName = resourceName("b1mutadmpol-patch-upe");
          // Create a policy first
          yield* createAdmissionregistrationV1beta1MutatingAdmissionPolicy({
            metadata: { name: policyName },
            spec: {
              matchConstraints: {
                resourceRules: [
                  {
                    apiGroups: [""],
                    apiVersions: ["v1"],
                    operations: ["CREATE"],
                    resources: ["pods"],
                  },
                ],
              },
              mutations: [
                {
                  patchType: "JSONPatch",
                  jsonPatch: {
                    expression:
                      '[JSONPatch{op: "add", path: "/metadata/labels/test", value: "true"}]',
                  },
                },
              ],
            },
          } as any);

          // Patch with invalid patchType
          const error =
            yield* patchAdmissionregistrationV1beta1MutatingAdmissionPolicy({
              name: policyName,
              spec: {
                mutations: [
                  {
                    patchType: "InvalidPatchType",
                    jsonPatch: {
                      expression: "invalid",
                    },
                  },
                ],
              },
            } as any).pipe(Effect.flip);
          expect(error).toBeInstanceOf(UnprocessableEntity);
          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            deleteAdmissionregistrationV1beta1MutatingAdmissionPolicy({
              name: resourceName("b1mutadmpol-patch-upe"),
            } as any).pipe(Effect.ignore),
          ),
        ),
      ), 30_000);
  });
});

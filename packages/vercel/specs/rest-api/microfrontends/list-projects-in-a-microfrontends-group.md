---
title: list-projects-in-a-microfrontends-group
product: vercel
url: /docs/rest-api/microfrontends/list-projects-in-a-microfrontends-group
canonical_url: "https://vercel.com/docs/rest-api/microfrontends/list-projects-in-a-microfrontends-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-projects-in-a-microfrontends-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List projects in a microfrontends group

```http
GET /v1/microfrontends/groups/{groupId}/projects
```

Get the microfrontends for a given group ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `groupId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "projects"
  ],
  "properties": {
    "projects": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "accountId",
          "alias",
          "defaultResourceConfig",
          "deploymentExpiration",
          "directoryListing",
          "id",
          "name",
          "nodeVersion",
          "resourceConfig"
        ],
        "properties": {
          "accountId": {
            "type": "string"
          },
          "creator": {},
          "alias": {
            "type": "array"
          },
          "analytics": {
            "type": "object",
            "required": [
              "disabledAt",
              "enabledAt",
              "id"
            ]
          },
          "appliedCve55182Migration": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "speedInsights": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "autoExposeSystemEnvs": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "autoAssignCustomDomains": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "autoAssignCustomDomainsUpdatedBy": {
            "type": "string"
          },
          "buildCommand": {
            "type": "string",
            "nullable": true
          },
          "commandForIgnoringBuildStep": {
            "type": "string",
            "nullable": true
          },
          "connectConfigurations": {
            "type": "array",
            "nullable": true
          },
          "connectConfigurationId": {
            "type": "string",
            "nullable": true
          },
          "connectBuildsEnabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "passiveConnectConfigurationId": {
            "type": "string",
            "nullable": true
          },
          "createdAt": {
            "type": "number"
          },
          "customerSupportCodeVisibility": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "crons": {
            "type": "object",
            "required": [
              "definitions",
              "deploymentId",
              "disabledAt",
              "enabledAt",
              "updatedAt"
            ]
          },
          "dataCache": {
            "type": "object",
            "required": [
              "userDisabled"
            ]
          },
          "deploymentExpiration": {
            "type": "object",
            "description": "Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects."
          },
          "expiration": {},
          "devCommand": {
            "type": "string",
            "nullable": true
          },
          "directoryListing": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "installCommand": {
            "type": "string",
            "nullable": true
          },
          "env": {
            "type": "array"
          },
          "customEnvironments": {
            "type": "array"
          },
          "framework": {
            "type": "string",
            "enum": [
              "actix-web",
              "angular",
              "ash",
              "astro",
              "axum",
              "blitzjs",
              "brunch",
              "bun",
              "container",
              "create-react-app",
              "django",
              "docusaurus",
              "docusaurus-2",
              "dojo",
              "eleventy",
              "elysia",
              "ember",
              "eve",
              "express",
              "fastapi",
              "fasthtml",
              "fastify",
              "flask",
              "gatsby",
              "go",
              "gridsome",
              "h3",
              "hexo",
              "hono",
              "hugo",
              "hydrogen",
              "ionic-angular",
              "ionic-react",
              "jekyll",
              "koa",
              "mastra",
              "middleman",
              "nestjs",
              "nextjs",
              "nitro",
              "node",
              "nuxtjs",
              "parcel",
              "polymer",
              "preact",
              "python",
              "react-router",
              "redwoodjs",
              "remix",
              "ruby",
              "rust",
              "saber",
              "sanity",
              "sanity-v2",
              "sapper",
              "scully",
              "services",
              "solidstart",
              "solidstart-1",
              "stencil",
              "storybook",
              "svelte",
              "sveltekit",
              "sveltekit-1",
              "tanstack-start",
              "tanstack-start-lovable",
              "umijs",
              "vite",
              "vitepress",
              "vue",
              "vuepress",
              "xmcp",
              "zola",
              null
            ],
            "nullable": true
          },
          "services": {
            "type": "array"
          },
          "gitForkProtection": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "gitLFS": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "id": {
            "type": "string"
          },
          "ipBuckets": {
            "type": "array"
          },
          "jobs": {
            "type": "object"
          },
          "latestDeployments": {
            "type": "array"
          },
          "link": {},
          "blobs": {
            "type": "object"
          },
          "microfrontends": {},
          "name": {
            "type": "string"
          },
          "nodeVersion": {
            "type": "string",
            "enum": [
              "10.x",
              "12.x",
              "14.x",
              "16.x",
              "18.x",
              "20.x",
              "22.x",
              "24.x",
              "8.10.x"
            ]
          },
          "optionsAllowlist": {
            "type": "object",
            "nullable": true,
            "required": [
              "paths"
            ]
          },
          "outputDirectory": {
            "type": "string",
            "nullable": true
          },
          "passwordProtection": {
            "type": "object",
            "nullable": true
          },
          "passport": {
            "type": "object",
            "nullable": true,
            "required": [
              "connectorId",
              "deploymentType"
            ]
          },
          "protectionConfig": {
            "type": "object"
          },
          "sandbox": {
            "type": "object"
          },
          "productionDeploymentsFastLane": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "resourceConfig": {
            "type": "object",
            "required": [
              "functionDefaultRegions"
            ]
          },
          "rollbackDescription": {
            "type": "object",
            "description": "Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.",
            "required": [
              "createdAt",
              "description",
              "userId",
              "username"
            ]
          },
          "rollingRelease": {
            "type": "object",
            "description": "Project-level rolling release configuration that defines how deployments should be gradually rolled out",
            "nullable": true,
            "required": [
              "target"
            ]
          },
          "defaultResourceConfig": {
            "type": "object",
            "required": [
              "functionDefaultRegions"
            ]
          },
          "rootDirectory": {
            "type": "string",
            "nullable": true
          },
          "serverlessFunctionZeroConfigFailover": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "skewProtectionBoundaryAt": {
            "type": "number"
          },
          "skewProtectionMaxAge": {
            "type": "number"
          },
          "skewProtectionAllowedDomains": {
            "type": "array"
          },
          "skipGitConnectDuringLink": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "staticIps": {
            "type": "object",
            "required": [
              "builds",
              "enabled",
              "regions"
            ]
          },
          "sourceFilesOutsideRootDirectory": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "enableAffectedProjectsDeployments": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "enableExternalRewriteCaching": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "ssoProtection": {
            "type": "object",
            "nullable": true,
            "required": [
              "deploymentType"
            ]
          },
          "targets": {
            "type": "object"
          },
          "transferCompletedAt": {
            "type": "number"
          },
          "transferStartedAt": {
            "type": "number"
          },
          "transferToAccountId": {
            "type": "string"
          },
          "transferredFromAccountId": {
            "type": "string"
          },
          "updatedAt": {
            "type": "number"
          },
          "live": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "enablePreviewFeedback": {
            "type": "boolean",
            "enum": [
              false,
              true,
              null
            ],
            "nullable": true
          },
          "enableProductionFeedback": {
            "type": "boolean",
            "enum": [
              false,
              true,
              null
            ],
            "nullable": true
          },
          "permissions": {
            "type": "object"
          },
          "lastRollbackTarget": {
            "type": "object",
            "nullable": true
          },
          "lastAliasRequest": {
            "type": "object",
            "nullable": true,
            "required": [
              "fromDeploymentId",
              "jobStatus",
              "requestedAt",
              "toDeploymentId",
              "type"
            ]
          },
          "protectionBypass": {
            "type": "object"
          },
          "hasActiveBranches": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "trustedIps": {
            "nullable": true
          },
          "trustedSources": {
            "type": "object",
            "nullable": true
          },
          "gitComments": {
            "type": "object",
            "required": [
              "onCommit",
              "onPullRequest"
            ]
          },
          "gitProviderOptions": {
            "type": "object",
            "required": [
              "createDeployments"
            ]
          },
          "paused": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "concurrencyBucketName": {
            "type": "string"
          },
          "webAnalytics": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "security": {
            "type": "object"
          },
          "oidcTokenConfig": {
            "type": "object"
          },
          "deploymentPolicy": {
            "type": "object",
            "description": "Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from {@link TeamDeploymentPolicy} so the two storage locations don't share a type by accident.",
            "nullable": true
          },
          "tier": {
            "type": "string"
          },
          "usageStatus": {
            "type": "object",
            "required": [
              "kind"
            ]
          },
          "features": {
            "type": "object"
          },
          "v0": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "v0Created": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "abuse": {
            "type": "object",
            "required": [
              "history",
              "updatedAt"
            ]
          },
          "internalRoutes": {
            "type": "array"
          },
          "hasDeployments": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "dismissedToasts": {
            "type": "array"
          },
          "protectedSourcemaps": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "tracing": {
            "type": "object"
          },
          "avatar": {
            "type": "string",
            "nullable": true
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [microfrontends endpoints](/docs/rest-api#microfrontends)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)

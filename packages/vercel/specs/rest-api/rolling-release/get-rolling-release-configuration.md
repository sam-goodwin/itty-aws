---
title: get-rolling-release-configuration
product: vercel
url: /docs/rest-api/rolling-release/get-rolling-release-configuration
canonical_url: "https://vercel.com/docs/rest-api/rolling-release/get-rolling-release-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-rolling-release-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get rolling release configuration

```http
GET /v1/projects/{idOrName}/rolling-release/config
```

Get the Rolling Releases configuration for a project. The project-level config is simply a template that will be used for any future rolling release, and not the configuration for any active rolling release.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | Project ID or project name (URL-encoded) |


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
    "rollingRelease"
  ],
  "properties": {
    "rollingRelease": {
      "type": "object",
      "description": "Project-level rolling release configuration that defines how deployments should be gradually rolled out",
      "nullable": true,
      "required": [
        "target"
      ],
      "properties": {
        "target": {
          "type": "string",
          "description": "The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments."
        },
        "stages": {
          "type": "array",
          "description": "An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.",
          "nullable": true,
          "items": {
            "type": "object",
            "description": "An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.",
            "required": [
              "targetPercentage"
            ]
          }
        },
        "canaryResponseHeader": {
          "type": "boolean",
          "description": "Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.",
          "enum": [
            false,
            true
          ]
        },
        "gate": {
          "type": "object",
          "description": "Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.",
          "required": [
            "action",
            "checks",
            "dryRun",
            "enabled"
          ],
          "properties": {
            "enabled": {
              "type": "boolean",
              "description": "Whether automated gating is enabled for this project's rollouts.",
              "enum": [
                false,
                true
              ]
            },
            "checks": {
              "type": "array",
              "description": "The checks to evaluate. An empty array means nothing is evaluated."
            },
            "failureThreshold": {
              "type": "number",
              "description": "How many failing evaluations within {@link windowSize} trip the gate. Defaults to `3` when omitted."
            },
            "windowSize": {
              "type": "number",
              "description": "How many of the most recent evaluations {@link failureThreshold} is counted against. Defaults to `5` when omitted."
            },
            "action": {
              "type": "string",
              "description": "What to do when the gate trips: pause the rollout, or roll it back.",
              "enum": [
                "pause",
                "rollback"
              ]
            },
            "dryRun": {
              "type": "boolean",
              "description": "When true, a tripped gate is only reported — {@link action} is not taken.",
              "enum": [
                false,
                true
              ]
            }
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

### 404: No description

### 410: No description

---

## Related

- [rolling-release endpoints](/docs/rest-api#rolling-release)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)

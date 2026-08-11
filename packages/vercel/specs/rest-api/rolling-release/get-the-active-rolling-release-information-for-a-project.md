---
title: get-the-active-rolling-release-information-for-a-project
product: vercel
url: /docs/rest-api/rolling-release/get-the-active-rolling-release-information-for-a-project
canonical_url: "https://vercel.com/docs/rest-api/rolling-release/get-the-active-rolling-release-information-for-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-the-active-rolling-release-information-for-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get the active rolling release information for a project

```http
GET /v1/projects/{idOrName}/rolling-release
```

Return the Rolling Release for a project, regardless of whether the rollout is active, aborted, or completed. If the feature is enabled but no deployment has occurred yet, null will be returned.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | Project ID or project name (URL-encoded) |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `state` | string. enum: ACTIVE, COMPLETE, ABORTED | No | Filter by rolling release state |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The response format for rolling release endpoints that return rolling release information",
  "required": [
    "rollingRelease"
  ],
  "properties": {
    "rollingRelease": {
      "type": "object",
      "description": "Rolling release information including configuration and document details, or null if no rolling release exists",
      "nullable": true,
      "required": [
        "activeStage",
        "advancementType",
        "canaryDeployment",
        "currentDeployment",
        "nextStage",
        "queuedDeploymentId",
        "stages",
        "startedAt",
        "state",
        "substate",
        "updatedAt"
      ],
      "properties": {
        "state": {
          "type": "string",
          "description": "The current state of the rolling release",
          "enum": [
            "ABORTED",
            "ACTIVE",
            "COMPLETE"
          ]
        },
        "substate": {
          "type": "string",
          "description": "When set to `PAUSED`, the rollout is frozen at the current percentage until continued.",
          "enum": [
            "PAUSED",
            null
          ],
          "nullable": true
        },
        "currentDeployment": {
          "type": "object",
          "description": "The current deployment receiving production traffic",
          "nullable": true,
          "required": [
            "createdAt",
            "id",
            "name",
            "readyState",
            "url"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the project associated with the deployment at the time that the deployment was created"
            },
            "createdAt": {
              "type": "number",
              "description": "A number containing the date when the deployment was created in milliseconds"
            },
            "readyState": {
              "type": "string",
              "description": "The state of the deployment depending on the process of deploying, or if it is ready or in an error state",
              "enum": [
                "BLOCKED",
                "BUILDING",
                "CANCELED",
                "ERROR",
                "INITIALIZING",
                "QUEUED",
                "READY"
              ]
            },
            "id": {
              "type": "string",
              "description": "A string holding the unique ID of the deployment"
            },
            "target": {
              "type": "string",
              "description": "If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the \"preview\" deployment.",
              "enum": [
                "production",
                "staging",
                null
              ],
              "nullable": true
            },
            "readyStateAt": {
              "type": "number"
            },
            "source": {
              "type": "string",
              "description": "Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.",
              "enum": [
                "api-trigger-git-deploy",
                "cli",
                "clone/repo",
                "drop",
                "git",
                "git-deploy-hook",
                "import",
                "import/repo",
                "redeploy",
                "v0-web"
              ]
            },
            "url": {
              "type": "string",
              "description": "A string with the unique URL of the deployment"
            }
          }
        },
        "canaryDeployment": {
          "type": "object",
          "description": "The canary deployment being rolled out",
          "nullable": true,
          "required": [
            "createdAt",
            "id",
            "name",
            "readyState",
            "url"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the project associated with the deployment at the time that the deployment was created"
            },
            "createdAt": {
              "type": "number",
              "description": "A number containing the date when the deployment was created in milliseconds"
            },
            "readyState": {
              "type": "string",
              "description": "The state of the deployment depending on the process of deploying, or if it is ready or in an error state",
              "enum": [
                "BLOCKED",
                "BUILDING",
                "CANCELED",
                "ERROR",
                "INITIALIZING",
                "QUEUED",
                "READY"
              ]
            },
            "id": {
              "type": "string",
              "description": "A string holding the unique ID of the deployment"
            },
            "target": {
              "type": "string",
              "description": "If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the \"preview\" deployment.",
              "enum": [
                "production",
                "staging",
                null
              ],
              "nullable": true
            },
            "readyStateAt": {
              "type": "number"
            },
            "source": {
              "type": "string",
              "description": "Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.",
              "enum": [
                "api-trigger-git-deploy",
                "cli",
                "clone/repo",
                "drop",
                "git",
                "git-deploy-hook",
                "import",
                "import/repo",
                "redeploy",
                "v0-web"
              ]
            },
            "url": {
              "type": "string",
              "description": "A string with the unique URL of the deployment"
            }
          }
        },
        "queuedDeploymentId": {
          "type": "string",
          "description": "The ID of a deployment queued for the next rolling release",
          "nullable": true
        },
        "advancementType": {
          "type": "string",
          "description": "The advancement type of the rolling release",
          "enum": [
            "automatic",
            "manual-approval"
          ]
        },
        "stages": {
          "type": "array",
          "description": "All stages configured for this rolling release",
          "items": {
            "type": "object",
            "description": "All stages configured for this rolling release",
            "required": [
              "duration",
              "index",
              "isFinalStage",
              "requireApproval",
              "targetPercentage"
            ]
          }
        },
        "activeStage": {
          "type": "object",
          "description": "The currently active stage, null if the rollout is aborted",
          "nullable": true,
          "required": [
            "duration",
            "index",
            "isFinalStage",
            "requireApproval",
            "targetPercentage"
          ],
          "properties": {
            "index": {
              "type": "number",
              "description": "The zero-based index of the stage"
            },
            "isFinalStage": {
              "type": "boolean",
              "description": "Whether or not this stage is the final stage (targetPercentage === 100)",
              "enum": [
                false,
                true
              ]
            },
            "targetPercentage": {
              "type": "number",
              "description": "The percentage of traffic to serve to the canary deployment (0-100)"
            },
            "requireApproval": {
              "type": "boolean",
              "description": "Whether or not this stage requires manual approval to proceed",
              "enum": [
                false,
                true
              ]
            },
            "duration": {
              "type": "number",
              "description": "Duration in seconds for automatic advancement, null for manual stages or the final stage",
              "nullable": true
            },
            "linearShift": {
              "type": "boolean",
              "description": "Whether to linearly shift traffic over the duration of this stage",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "nextStage": {
          "type": "object",
          "description": "The next stage to be activated, null if not in ACTIVE state",
          "nullable": true,
          "required": [
            "duration",
            "index",
            "isFinalStage",
            "requireApproval",
            "targetPercentage"
          ],
          "properties": {
            "index": {
              "type": "number",
              "description": "The zero-based index of the stage"
            },
            "isFinalStage": {
              "type": "boolean",
              "description": "Whether or not this stage is the final stage (targetPercentage === 100)",
              "enum": [
                false,
                true
              ]
            },
            "targetPercentage": {
              "type": "number",
              "description": "The percentage of traffic to serve to the canary deployment (0-100)"
            },
            "requireApproval": {
              "type": "boolean",
              "description": "Whether or not this stage requires manual approval to proceed",
              "enum": [
                false,
                true
              ]
            },
            "duration": {
              "type": "number",
              "description": "Duration in seconds for automatic advancement, null for manual stages or the final stage",
              "nullable": true
            },
            "linearShift": {
              "type": "boolean",
              "description": "Whether to linearly shift traffic over the duration of this stage",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "startedAt": {
          "type": "number",
          "description": "Unix timestamp in milliseconds when the rolling release started"
        },
        "updatedAt": {
          "type": "number",
          "description": "Unix timestamp in milliseconds when the rolling release was last updated"
        },
        "currentCanaryPercentage": {
          "type": "number",
          "description": "When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active."
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

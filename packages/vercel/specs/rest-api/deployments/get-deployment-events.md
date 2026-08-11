---
title: get-deployment-events
product: vercel
url: /docs/rest-api/deployments/get-deployment-events
canonical_url: "https://vercel.com/docs/rest-api/deployments/get-deployment-events"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-deployment-events on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get deployment events

```http
GET /v3/deployments/{idOrUrl}/events
```

Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrUrl` | string | Yes | The unique identifier or hostname of the deployment. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `direction` | string. enum: backward, forward; default: "forward" | No | Order of the returned events based on the timestamp. |
| `follow` | number. enum: 0, 1 | No | When enabled, this endpoint will return live events as they happen. |
| `limit` | number | No | Maximum number of events to return. Provide `-1` to return all available logs. |
| `name` | string | No | Deployment build ID. |
| `since` | number | No | Timestamp for when build logs should be pulled from. |
| `until` | number | No | Timestamp for when the build logs should be pulled up until. |
| `statusCode` | object | No | HTTP status code range to filter events by. |
| `delimiter` | number. enum: 0, 1 | No |  |
| `builds` | number. enum: 0, 1 | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "array",
  "nullable": true,
  "items": {
    "nullable": true,
    "oneOf": [
      {
        "type": "object",
        "required": [
          "created",
          "payload",
          "type"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "command",
              "delimiter",
              "deployment-state",
              "edge-function-invocation",
              "exit",
              "fatal",
              "metric",
              "middleware",
              "middleware-invocation",
              "report",
              "stderr",
              "stdout"
            ]
          },
          "created": {
            "type": "number"
          },
          "payload": {
            "type": "object",
            "required": [
              "date",
              "deploymentId",
              "id",
              "serial"
            ]
          }
        }
      },
      {
        "type": "object",
        "required": [
          "created",
          "date",
          "deploymentId",
          "id",
          "info",
          "serial",
          "type"
        ],
        "properties": {
          "created": {
            "type": "number"
          },
          "date": {
            "type": "number"
          },
          "deploymentId": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "info": {
            "type": "object",
            "required": [
              "name",
              "type"
            ]
          },
          "serial": {
            "type": "string"
          },
          "text": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "command",
              "delimiter",
              "deployment-state",
              "edge-function-invocation",
              "exit",
              "fatal",
              "metric",
              "middleware",
              "middleware-invocation",
              "report",
              "stderr",
              "stdout"
            ]
          },
          "level": {
            "type": "string",
            "enum": [
              "error",
              "warning"
            ]
          }
        }
      },
      {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "created",
              "payload",
              "type"
            ]
          },
          {
            "type": "object",
            "required": [
              "created",
              "date",
              "deploymentId",
              "id",
              "info",
              "serial",
              "type"
            ]
          },
          {
            "type": "object",
            "required": [
              "alias",
              "aliasError",
              "aliasWarning",
              "date",
              "deploymentId",
              "type"
            ]
          }
        ]
      }
    ]
  }
}
```

Content-Type: `application/stream+json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "created",
        "payload",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "command",
            "delimiter",
            "deployment-state",
            "edge-function-invocation",
            "exit",
            "fatal",
            "metric",
            "middleware",
            "middleware-invocation",
            "report",
            "stderr",
            "stdout"
          ]
        },
        "created": {
          "type": "number"
        },
        "payload": {
          "type": "object",
          "required": [
            "date",
            "deploymentId",
            "id",
            "serial"
          ],
          "properties": {
            "deploymentId": {
              "type": "string"
            },
            "info": {
              "type": "object",
              "required": [
                "name",
                "type"
              ]
            },
            "text": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "date": {
              "type": "number"
            },
            "serial": {
              "type": "string"
            },
            "created": {
              "type": "number"
            },
            "statusCode": {
              "type": "number"
            },
            "requestId": {
              "type": "string"
            },
            "proxy": {
              "type": "object",
              "required": [
                "host",
                "method",
                "timestamp"
              ]
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "created",
        "date",
        "deploymentId",
        "id",
        "info",
        "serial",
        "type"
      ],
      "properties": {
        "created": {
          "type": "number"
        },
        "date": {
          "type": "number"
        },
        "deploymentId": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "info": {
          "type": "object",
          "required": [
            "name",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "entrypoint": {
              "type": "string"
            },
            "path": {
              "type": "string"
            },
            "step": {
              "type": "string"
            },
            "readyState": {
              "type": "string"
            }
          }
        },
        "serial": {
          "type": "string"
        },
        "text": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "command",
            "delimiter",
            "deployment-state",
            "edge-function-invocation",
            "exit",
            "fatal",
            "metric",
            "middleware",
            "middleware-invocation",
            "report",
            "stderr",
            "stdout"
          ]
        },
        "level": {
          "type": "string",
          "enum": [
            "error",
            "warning"
          ]
        }
      }
    },
    {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "created",
            "payload",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "command",
                "delimiter",
                "deployment-state",
                "edge-function-invocation",
                "exit",
                "fatal",
                "metric",
                "middleware",
                "middleware-invocation",
                "report",
                "stderr",
                "stdout"
              ]
            },
            "created": {
              "type": "number"
            },
            "payload": {
              "type": "object",
              "required": [
                "date",
                "deploymentId",
                "id",
                "serial"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "created",
            "date",
            "deploymentId",
            "id",
            "info",
            "serial",
            "type"
          ],
          "properties": {
            "created": {
              "type": "number"
            },
            "date": {
              "type": "number"
            },
            "deploymentId": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "info": {
              "type": "object",
              "required": [
                "name",
                "type"
              ]
            },
            "serial": {
              "type": "string"
            },
            "text": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "command",
                "delimiter",
                "deployment-state",
                "edge-function-invocation",
                "exit",
                "fatal",
                "metric",
                "middleware",
                "middleware-invocation",
                "report",
                "stderr",
                "stdout"
              ]
            },
            "level": {
              "type": "string",
              "enum": [
                "error",
                "warning"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "alias",
            "aliasError",
            "aliasWarning",
            "date",
            "deploymentId",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "alias-assigned"
              ]
            },
            "deploymentId": {
              "type": "string"
            },
            "date": {
              "type": "number"
            },
            "alias": {
              "type": "array"
            },
            "aliasError": {
              "type": "object",
              "nullable": true,
              "required": [
                "code",
                "message"
              ]
            },
            "aliasWarning": {
              "type": "object",
              "nullable": true,
              "required": [
                "code",
                "message"
              ]
            }
          }
        }
      ]
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)

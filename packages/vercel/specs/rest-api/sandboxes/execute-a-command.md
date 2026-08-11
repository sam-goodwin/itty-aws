---
title: execute-a-command
product: vercel
url: /docs/rest-api/sandboxes/execute-a-command
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/execute-a-command"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about execute-a-command on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Execute a command

```http
POST /v2/sandboxes/sessions/{sessionId}/cmd
```

Executes a shell command inside a running session. The command runs asynchronously and returns immediately with a command ID that can be used to track its progress and retrieve its output. Optionally, use the `wait` parameter to stream the command status until completion.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sessionId` | string | Yes | The unique identifier of the session in which to execute the command. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `cmdId` | string | Yes | The unique identifier of the command to stream logs for. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "command"
  ],
  "properties": {
    "command": {
      "type": "string",
      "description": "The executable or shell command to run. This is the program name without arguments."
    },
    "args": {
      "type": "array",
      "description": "Arguments to pass to the command. Each argument should be a separate array element.",
      "items": {
        "type": "string"
      }
    },
    "cwd": {
      "type": "string",
      "description": "The working directory in which to execute the command. Defaults to the sandbox home directory if not specified."
    },
    "env": {
      "type": "object",
      "description": "Additional environment variables to set for this command. These are merged with the sandbox environment.",
      "default": {},
      "additionalProperties": {
        "type": "string"
      }
    },
    "sudo": {
      "type": "boolean",
      "description": "Execute the command with root (superuser) privileges.",
      "default": false
    },
    "wait": {
      "type": "boolean",
      "description": "If true, returns an ND-JSON stream that emits the command status when started and again when finished. Useful for synchronously waiting for command completion.",
      "default": false
    },
    "logs": {
      "type": "boolean",
      "description": "If true, stream the logs of the command execution in real-time via ND-JSON. This is only applicable if `wait` is also true.",
      "default": false
    },
    "timeout": {
      "type": "integer",
      "description": "Maximum duration in milliseconds the command may run before it is killed with SIGKILL. Enforced at exec time, independently of `wait`.",
      "minimum": 100
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "command"
  ],
  "properties": {
    "command": {
      "type": "object",
      "description": "This object represents a command run in a Vercel Sandbox session (v2 API).",
      "required": [
        "args",
        "cwd",
        "exitCode",
        "id",
        "name",
        "sessionId",
        "startedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The ID of the command."
        },
        "name": {
          "type": "string",
          "description": "The name of the command."
        },
        "args": {
          "type": "array",
          "description": "The arguments of the command.",
          "items": {
            "type": "string"
          }
        },
        "cwd": {
          "type": "string",
          "description": "The current working directory of the command."
        },
        "sessionId": {
          "type": "string",
          "description": "The ID of the session associated with the command."
        },
        "exitCode": {
          "type": "number",
          "description": "If the command did finish, the exit code.",
          "nullable": true
        },
        "startedAt": {
          "type": "number",
          "description": "When the command was started, in milliseconds since the epoch."
        },
        "durationMs": {
          "type": "number",
          "description": "Duration of the command execution in milliseconds."
        }
      }
    }
  }
}
```

Content-Type: `application/x-ndjson`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "data",
        "stream"
      ],
      "properties": {
        "stream": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "properties": {
            "code": {
              "type": "string",
              "enum": [
                "sandbox_stream_closed"
              ]
            },
            "message": {
              "type": "string",
              "enum": [
                "Sandbox stream was closed and is not accepting commands."
              ]
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "command",
        "data",
        "stream"
      ],
      "properties": {
        "command": {
          "type": "object",
          "description": "This object represents a command run in a Vercel Sandbox session (v2 API).",
          "required": [
            "args",
            "cwd",
            "exitCode",
            "id",
            "name",
            "sessionId",
            "startedAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "The ID of the command."
            },
            "name": {
              "type": "string",
              "description": "The name of the command."
            },
            "args": {
              "type": "array",
              "description": "The arguments of the command."
            },
            "cwd": {
              "type": "string",
              "description": "The current working directory of the command."
            },
            "sessionId": {
              "type": "string",
              "description": "The ID of the session associated with the command."
            },
            "exitCode": {
              "type": "number",
              "description": "If the command did finish, the exit code.",
              "nullable": true
            },
            "startedAt": {
              "type": "number",
              "description": "When the command was started, in milliseconds since the epoch."
            },
            "durationMs": {
              "type": "number",
              "description": "Duration of the command execution in milliseconds."
            }
          }
        },
        "data": {
          "type": "string"
        },
        "stream": {
          "type": "string"
        }
      }
    },
    {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "data",
            "stream"
          ],
          "properties": {
            "stream": {
              "type": "string"
            },
            "data": {
              "type": "object",
              "required": [
                "code",
                "message"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "data",
            "stream"
          ],
          "properties": {
            "data": {
              "type": "string"
            },
            "stream": {
              "type": "string"
            }
          }
        }
      ]
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 422: No description

### 429: No description

### 500: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)

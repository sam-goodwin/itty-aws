---
title: kill-a-command
product: vercel
url: /docs/rest-api/sandboxes/kill-a-command
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/kill-a-command"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about kill-a-command on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Kill a command

```http
POST /v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/kill
```

Sends a signal to terminate a running command in a session. The signal can be used to gracefully stop (SIGTERM) or forcefully kill (SIGKILL) the process. The command must still be running for this operation to succeed.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `cmdId` | string | Yes | The unique identifier of the command to terminate. |
| `sessionId` | string | Yes | The unique identifier of the session containing the command. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "signal"
  ],
  "properties": {
    "signal": {
      "type": "number",
      "description": "The POSIX signal number to send to the process. Common values: 15 (SIGTERM) for graceful termination, 9 (SIGKILL) for forced termination."
    }
  }
}
```

## Responses

### 200: The command was terminated successfully.

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

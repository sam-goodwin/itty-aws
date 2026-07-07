# Sessions

## Fetch all sessions of an App

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions`

Returns details of all sessions of an App.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

### Query Parameters

- `associated_id: optional string`

  ID of the meeting that sessions should be associated with

- `end_time: optional string`

  The end time range for which you want to retrieve the meetings. The time must be specified in ISO format.

- `page_no: optional number`

  The page number from which you want your page search results to be displayed.

- `participants: optional string`

- `per_page: optional number`

  Number of results per page

- `search: optional string`

  Search string that matches sessions based on meeting title, meeting ID, and session ID

- `sort_by: optional "minutesConsumed" or "createdAt"`

  - `"minutesConsumed"`

  - `"createdAt"`

- `sort_order: optional "ASC" or "DESC"`

  - `"ASC"`

  - `"DESC"`

- `start_time: optional string`

  The start time range for which you want to retrieve the meetings. The time must be specified in ISO format.

- `status: optional "LIVE" or "ENDED"`

  - `"LIVE"`

  - `"ENDED"`

### Returns

- `data: optional object { sessions }`

  - `sessions: optional array of object { id, associated_id, created_at, 12 more }`

    - `id: string`

      ID of the session

    - `associated_id: string`

      ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the form `abcdef-ghijkl`

    - `created_at: string`

      timestamp when session created

    - `live_participants: number`

      number of participants currently in the session

    - `max_concurrent_participants: number`

      number of maximum participants that were in the session

    - `meeting_display_name: string`

      Title of the meeting this session belongs to

    - `minutes_consumed: number`

      number of minutes consumed since the session started

    - `organization_id: string`

      App id that hosted this session

    - `started_at: string`

      timestamp when session started

    - `status: "LIVE" or "ENDED"`

      current status of session

      - `"LIVE"`

      - `"ENDED"`

    - `type: "meeting" or "livestream" or "participant"`

      type of session

      - `"meeting"`

      - `"livestream"`

      - `"participant"`

    - `updated_at: string`

      timestamp when session was last updated

    - `breakout_rooms: optional array of unknown`

    - `ended_at: optional string`

      timestamp when session ended

    - `meta: optional unknown`

      Any meta data about session.

- `paging: optional object { end_offset, start_offset, total_count }`

  - `end_offset: optional number`

  - `start_offset: optional number`

  - `total_count: optional number`

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "sessions": [
      {
        "id": "id",
        "associated_id": "associated_id",
        "created_at": "created_at",
        "live_participants": 0,
        "max_concurrent_participants": 0,
        "meeting_display_name": "meeting_display_name",
        "minutes_consumed": 0,
        "organization_id": "organization_id",
        "started_at": "started_at",
        "status": "LIVE",
        "type": "meeting",
        "updated_at": "updated_at",
        "breakout_rooms": [
          {}
        ],
        "ended_at": "ended_at",
        "meta": {}
      }
    ]
  },
  "paging": {
    "end_offset": 0,
    "start_offset": 0,
    "total_count": 0
  },
  "success": true
}
```

## Fetch details of a session

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}`

Returns data of the given session ID including recording details.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

### Query Parameters

- `include_breakout_rooms: optional boolean`

  List all breakout rooms

### Returns

- `data: optional object { id, associated_id, created_at, 12 more }`

  - `id: string`

    ID of the session

  - `associated_id: string`

    ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the form `abcdef-ghijkl`

  - `created_at: string`

    timestamp when session created

  - `live_participants: number`

    number of participants currently in the session

  - `max_concurrent_participants: number`

    number of maximum participants that were in the session

  - `meeting_display_name: string`

    Title of the meeting this session belongs to

  - `minutes_consumed: number`

    number of minutes consumed since the session started

  - `organization_id: string`

    App id that hosted this session

  - `started_at: string`

    timestamp when session started

  - `status: "LIVE" or "ENDED"`

    current status of session

    - `"LIVE"`

    - `"ENDED"`

  - `type: "meeting" or "livestream" or "participant"`

    type of session

    - `"meeting"`

    - `"livestream"`

    - `"participant"`

  - `updated_at: string`

    timestamp when session was last updated

  - `breakout_rooms: optional array of unknown`

  - `ended_at: optional string`

    timestamp when session ended

  - `meta: optional unknown`

    Any meta data about session.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "id": "id",
    "associated_id": "associated_id",
    "created_at": "created_at",
    "live_participants": 0,
    "max_concurrent_participants": 0,
    "meeting_display_name": "meeting_display_name",
    "minutes_consumed": 0,
    "organization_id": "organization_id",
    "started_at": "started_at",
    "status": "LIVE",
    "type": "meeting",
    "updated_at": "updated_at",
    "breakout_rooms": [
      {}
    ],
    "ended_at": "ended_at",
    "meta": {}
  },
  "success": true
}
```

## Fetch participants list of a session

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants`

Returns a list of participants for the given session ID.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

### Query Parameters

- `include_peer_events: optional boolean`

  if true, response includes all the peer events of participants.

- `page_no: optional number`

  The page number from which you want your page search results to be displayed.

- `per_page: optional number`

  Number of results per page

- `search: optional string`

  The search query string. You can search using participant ID, custom participant ID, or display name.

- `sort_by: optional "joinedAt" or "duration"`

  - `"joinedAt"`

  - `"duration"`

- `sort_order: optional "ASC" or "DESC"`

  - `"ASC"`

  - `"DESC"`

- `view: optional "raw" or "consolidated"`

  In breakout room sessions, the view parameter can be set to `raw` for session specific duration for participants or `consolidated` to accumulate breakout room durations.

  - `"raw"`

  - `"consolidated"`

### Returns

- `data: optional object { participants }`

  - `participants: optional array of object { id, created_at, custom_participant_id, 7 more }`

    - `id: optional string`

      Participant ID. This maps to the corresponding peerId.

    - `created_at: optional string`

      timestamp when this participant was created.

    - `custom_participant_id: optional string`

      ID passed by client to create this participant.

    - `display_name: optional string`

      Display name of participant when joining the session.

    - `duration: optional number`

      number of minutes for which the participant was in the session.

    - `joined_at: optional string`

      timestamp at which participant joined the session.

    - `left_at: optional string`

      timestamp at which participant left the session.

    - `preset_name: optional string`

      Name of the preset associated with the participant.

    - `updated_at: optional string`

      timestamp when this participant's data was last updated.

    - `user_id: optional string`

      User id for this participant.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/participants \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "paging": {
      "end_offset": 2,
      "start_offset": 1,
      "total_count": 123
    },
    "participants": [
      {
        "created_at": "2023-02-01T10:51:08.039Z",
        "custom_participant_id": "83qi0i",
        "display_name": "Mark",
        "duration": 5.8097,
        "id": "005f4e0c-4d08-4d4e-a391-a76be75cd296",
        "joined_at": "2023-02-01T10:51:08.030Z",
        "left_at": "2023-02-01T10:56:56.612Z",
        "preset_name": "webinar_participant",
        "updated_at": "2023-02-01T10:56:56.618Z",
        "user_id": "0a08343d-a9dc-45f0-9feb-6a64afcc4f81"
      },
      {
        "created_at": "2023-02-01T10:50:36.853Z",
        "custom_participant_id": "3uggr",
        "display_name": "Henry",
        "duration": 6.9263,
        "id": "51fdf95f-d893-471a-922b-7db7adb14453",
        "joined_at": "2023-02-01T10:50:36.846Z\"",
        "left_at": "2023-02-01T10:57:32.424Z",
        "preset_name": "webinar_participant",
        "updated_at": "2023-02-01T10:57:32.431Z",
        "user_id": "85e7f0fd-7c16-45e9-9d68-f17ef007c4eb"
      }
    ]
  },
  "success": true
}
```

## Fetch details of a participant

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}`

Returns details of the given participant ID along with call statistics for the given session ID.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

- `participant_id: string`

### Query Parameters

- `filters: optional "device_info" or "ip_information" or "precall_network_information" or 2 more`

  Comma separated list of filters to apply. Note that there must be no spaces between the filters.

  - `"device_info"`

  - `"ip_information"`

  - `"precall_network_information"`

  - `"events"`

  - `"quality_stats"`

- `include_peer_events: optional boolean`

  if true, response includes all the peer events of participant.

### Returns

- `data: optional object { participant }`

  - `participant: optional object { id, created_at, custom_participant_id, 7 more }`

    - `id: optional string`

      Participant ID. This maps to the corresponding peerId.

    - `created_at: optional string`

      timestamp when this participant was created.

    - `custom_participant_id: optional string`

      ID passed by client to create this participant.

    - `display_name: optional string`

      Display name of participant when joining the session.

    - `duration: optional number`

      number of minutes for which the participant was in the session.

    - `joined_at: optional string`

      timestamp at which participant joined the session.

    - `left_at: optional string`

      timestamp at which participant left the session.

    - `preset_name: optional string`

      Name of the preset associated with the participant.

    - `updated_at: optional string`

      timestamp when this participant's data was last updated.

    - `user_id: optional string`

      User id for this participant.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/participants/$PARTICIPANT_ID \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "participant": {
      "id": "id",
      "created_at": "created_at",
      "custom_participant_id": "custom_participant_id",
      "display_name": "display_name",
      "duration": 0,
      "joined_at": "joined_at",
      "left_at": "left_at",
      "preset_name": "preset_name",
      "updated_at": "updated_at",
      "user_id": "user_id"
    }
  },
  "success": true
}
```

## Fetch all chat messages of a session

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/chat`

Returns a URL to download all chat messages of the session ID in CSV format.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

### Returns

- `data: optional object { chat_download_url, chat_download_url_expiry }`

  - `chat_download_url: string`

    URL where the chat logs can be downloaded

  - `chat_download_url_expiry: string`

    Time when the download URL will expire

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/chat \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "chat_download_url": "chat_download_url",
    "chat_download_url_expiry": "chat_download_url_expiry"
  },
  "success": true
}
```

## Fetch the complete transcript for a session

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/transcript`

Returns a URL to download the transcript for the session ID in CSV format.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

### Query Parameters

- `format: optional "SRT" or "VTT" or "JSON" or "CSV"`

  Transcript file format to fetch.

  - `"SRT"`

  - `"VTT"`

  - `"JSON"`

  - `"CSV"`

### Returns

- `data: optional object { sessionId, transcript_download_url, transcript_download_url_expiry }`

  - `sessionId: string`

  - `transcript_download_url: string`

    URL where the transcript can be downloaded

  - `transcript_download_url_expiry: string`

    Time when the download URL will expire

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/transcript \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "sessionId": "sessionId",
    "transcript_download_url": "transcript_download_url",
    "transcript_download_url_expiry": "transcript_download_url_expiry"
  },
  "success": true
}
```

## Fetch summary of transcripts for a session

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary`

Returns a Summary URL to download the Summary of Transcripts for the session ID as plain text.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

### Returns

- `data: optional object { sessionId, summaryDownloadUrl, summaryDownloadUrlExpiry }`

  - `sessionId: string`

  - `summaryDownloadUrl: string`

    URL where the summary of transcripts can be downloaded

  - `summaryDownloadUrlExpiry: string`

    Time of Expiry before when you need to download the csv file.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/summary \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "sessionId": "sessionId",
    "summaryDownloadUrl": "summaryDownloadUrl",
    "summaryDownloadUrlExpiry": "summaryDownloadUrlExpiry"
  },
  "success": true
}
```

## Generate summary of Transcripts for the session

**post** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary`

Trigger Summary generation of Transcripts for the session ID.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

### Returns

- `data: optional object { session_id, status }`

  - `session_id: optional string`

  - `status: optional string`

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/summary \
    -X POST \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "session_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "status": "status"
  },
  "success": true
}
```

## Fetch details of peer

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/peer-report/{peer_id}`

Returns participant details for the given peer ID along with call statistics.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `peer_id: string`

### Query Parameters

- `filters: optional "device_info" or "ip_information" or "precall_network_information" or 2 more`

  Filter to apply to the peer report.

  - `"device_info"`

  - `"ip_information"`

  - `"precall_network_information"`

  - `"events"`

  - `"quality_stats"`

- `include_peer_events: optional boolean`

  if true, response includes all the peer events of participant.

### Returns

- `data: optional object { participant }`

  - `participant: optional object { id, created_at, custom_participant_id, 10 more }`

    - `id: optional string`

      ID of the participant.

    - `created_at: optional string`

      timestamp when this participant was created.

    - `custom_participant_id: optional string`

      ID passed by client to create this participant.

    - `display_name: optional string`

      Display name of participant when joining the session.

    - `duration: optional number`

      number of minutes for which the participant was in the session.

    - `joined_at: optional string`

      timestamp at which participant joined the session.

    - `left_at: optional string`

      timestamp at which participant left the session.

    - `peer_events: optional array of map[unknown]`

    - `peer_report: optional object { metadata, quality }`

      Peer call statistics report.

      - `metadata: optional map[unknown]`

      - `quality: optional map[unknown]`

    - `role: optional string`

      Name of the preset associated with the participant.

    - `session_id: optional string`

    - `updated_at: optional string`

      timestamp when this participant's data was last updated.

    - `user_id: optional string`

      User id for this participant.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/peer-report/$PEER_ID \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "participant": {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "created_at",
      "custom_participant_id": "custom_participant_id",
      "display_name": "display_name",
      "duration": 0,
      "joined_at": "joined_at",
      "left_at": "left_at",
      "peer_events": [
        {
          "foo": "bar"
        }
      ],
      "peer_report": {
        "metadata": {
          "foo": "bar"
        },
        "quality": {
          "foo": "bar"
        }
      },
      "role": "role",
      "session_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "updated_at": "updated_at",
      "user_id": "user_id"
    }
  },
  "success": true
}
```

## Domain Types

### Session Get Sessions Response

- `SessionGetSessionsResponse object { data, paging, success }`

  - `data: optional object { sessions }`

    - `sessions: optional array of object { id, associated_id, created_at, 12 more }`

      - `id: string`

        ID of the session

      - `associated_id: string`

        ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the form `abcdef-ghijkl`

      - `created_at: string`

        timestamp when session created

      - `live_participants: number`

        number of participants currently in the session

      - `max_concurrent_participants: number`

        number of maximum participants that were in the session

      - `meeting_display_name: string`

        Title of the meeting this session belongs to

      - `minutes_consumed: number`

        number of minutes consumed since the session started

      - `organization_id: string`

        App id that hosted this session

      - `started_at: string`

        timestamp when session started

      - `status: "LIVE" or "ENDED"`

        current status of session

        - `"LIVE"`

        - `"ENDED"`

      - `type: "meeting" or "livestream" or "participant"`

        type of session

        - `"meeting"`

        - `"livestream"`

        - `"participant"`

      - `updated_at: string`

        timestamp when session was last updated

      - `breakout_rooms: optional array of unknown`

      - `ended_at: optional string`

        timestamp when session ended

      - `meta: optional unknown`

        Any meta data about session.

  - `paging: optional object { end_offset, start_offset, total_count }`

    - `end_offset: optional number`

    - `start_offset: optional number`

    - `total_count: optional number`

  - `success: optional boolean`

### Session Get Session Details Response

- `SessionGetSessionDetailsResponse object { data, success }`

  - `data: optional object { id, associated_id, created_at, 12 more }`

    - `id: string`

      ID of the session

    - `associated_id: string`

      ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the form `abcdef-ghijkl`

    - `created_at: string`

      timestamp when session created

    - `live_participants: number`

      number of participants currently in the session

    - `max_concurrent_participants: number`

      number of maximum participants that were in the session

    - `meeting_display_name: string`

      Title of the meeting this session belongs to

    - `minutes_consumed: number`

      number of minutes consumed since the session started

    - `organization_id: string`

      App id that hosted this session

    - `started_at: string`

      timestamp when session started

    - `status: "LIVE" or "ENDED"`

      current status of session

      - `"LIVE"`

      - `"ENDED"`

    - `type: "meeting" or "livestream" or "participant"`

      type of session

      - `"meeting"`

      - `"livestream"`

      - `"participant"`

    - `updated_at: string`

      timestamp when session was last updated

    - `breakout_rooms: optional array of unknown`

    - `ended_at: optional string`

      timestamp when session ended

    - `meta: optional unknown`

      Any meta data about session.

  - `success: optional boolean`

### Session Get Session Participants Response

- `SessionGetSessionParticipantsResponse object { data, success }`

  - `data: optional object { participants }`

    - `participants: optional array of object { id, created_at, custom_participant_id, 7 more }`

      - `id: optional string`

        Participant ID. This maps to the corresponding peerId.

      - `created_at: optional string`

        timestamp when this participant was created.

      - `custom_participant_id: optional string`

        ID passed by client to create this participant.

      - `display_name: optional string`

        Display name of participant when joining the session.

      - `duration: optional number`

        number of minutes for which the participant was in the session.

      - `joined_at: optional string`

        timestamp at which participant joined the session.

      - `left_at: optional string`

        timestamp at which participant left the session.

      - `preset_name: optional string`

        Name of the preset associated with the participant.

      - `updated_at: optional string`

        timestamp when this participant's data was last updated.

      - `user_id: optional string`

        User id for this participant.

  - `success: optional boolean`

### Session Get Session Participant Details Response

- `SessionGetSessionParticipantDetailsResponse object { data, success }`

  - `data: optional object { participant }`

    - `participant: optional object { id, created_at, custom_participant_id, 7 more }`

      - `id: optional string`

        Participant ID. This maps to the corresponding peerId.

      - `created_at: optional string`

        timestamp when this participant was created.

      - `custom_participant_id: optional string`

        ID passed by client to create this participant.

      - `display_name: optional string`

        Display name of participant when joining the session.

      - `duration: optional number`

        number of minutes for which the participant was in the session.

      - `joined_at: optional string`

        timestamp at which participant joined the session.

      - `left_at: optional string`

        timestamp at which participant left the session.

      - `preset_name: optional string`

        Name of the preset associated with the participant.

      - `updated_at: optional string`

        timestamp when this participant's data was last updated.

      - `user_id: optional string`

        User id for this participant.

  - `success: optional boolean`

### Session Get Session Chat Response

- `SessionGetSessionChatResponse object { data, success }`

  - `data: optional object { chat_download_url, chat_download_url_expiry }`

    - `chat_download_url: string`

      URL where the chat logs can be downloaded

    - `chat_download_url_expiry: string`

      Time when the download URL will expire

  - `success: optional boolean`

### Session Get Session Transcripts Response

- `SessionGetSessionTranscriptsResponse object { data, success }`

  - `data: optional object { sessionId, transcript_download_url, transcript_download_url_expiry }`

    - `sessionId: string`

    - `transcript_download_url: string`

      URL where the transcript can be downloaded

    - `transcript_download_url_expiry: string`

      Time when the download URL will expire

  - `success: optional boolean`

### Session Get Session Summary Response

- `SessionGetSessionSummaryResponse object { data, success }`

  - `data: optional object { sessionId, summaryDownloadUrl, summaryDownloadUrlExpiry }`

    - `sessionId: string`

    - `summaryDownloadUrl: string`

      URL where the summary of transcripts can be downloaded

    - `summaryDownloadUrlExpiry: string`

      Time of Expiry before when you need to download the csv file.

  - `success: optional boolean`

### Session Generate Summary Of Transcripts Response

- `SessionGenerateSummaryOfTranscriptsResponse object { data, success }`

  - `data: optional object { session_id, status }`

    - `session_id: optional string`

    - `status: optional string`

  - `success: optional boolean`

### Session Get Participant Data From Peer ID Response

- `SessionGetParticipantDataFromPeerIDResponse object { data, success }`

  - `data: optional object { participant }`

    - `participant: optional object { id, created_at, custom_participant_id, 10 more }`

      - `id: optional string`

        ID of the participant.

      - `created_at: optional string`

        timestamp when this participant was created.

      - `custom_participant_id: optional string`

        ID passed by client to create this participant.

      - `display_name: optional string`

        Display name of participant when joining the session.

      - `duration: optional number`

        number of minutes for which the participant was in the session.

      - `joined_at: optional string`

        timestamp at which participant joined the session.

      - `left_at: optional string`

        timestamp at which participant left the session.

      - `peer_events: optional array of map[unknown]`

      - `peer_report: optional object { metadata, quality }`

        Peer call statistics report.

        - `metadata: optional map[unknown]`

        - `quality: optional map[unknown]`

      - `role: optional string`

        Name of the preset associated with the participant.

      - `session_id: optional string`

      - `updated_at: optional string`

        timestamp when this participant's data was last updated.

      - `user_id: optional string`

        User id for this participant.

  - `success: optional boolean`

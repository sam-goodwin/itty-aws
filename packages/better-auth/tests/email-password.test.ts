import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Effect } from "effect";
import { Unauthorized } from "../src/errors.ts";
import { changePassword } from "../src/operations/changePassword.ts";
import { getSession } from "../src/operations/getSession.ts";
import { listSessions } from "../src/operations/listSessions.ts";
import { ok } from "../src/operations/ok.ts";
import { signInEmail } from "../src/operations/signInEmail.ts";
import { signOut } from "../src/operations/signOut.ts";
import { signUpEmail } from "../src/operations/signUpEmail.ts";
import { updateUser } from "../src/operations/updateUser.ts";
import {
  type AuthServer,
  runEffect,
  startAuthServer,
  testRunId,
} from "./setup.ts";

describe("better-auth email/password", () => {
  let server: AuthServer;
  let baseUrl: string;

  const email = `distilled-ba-${testRunId}@example.com`;
  const password = "correct-horse-battery-staple";
  const newPassword = "even-better-horse-battery";

  // Session token captured from sign-up, used to authenticate later calls.
  let token: string;

  beforeAll(async () => {
    server = await startAuthServer();
    baseUrl = server.baseUrl;
  });

  afterAll(async () => {
    await server?.close();
  });

  describe("ok", () => {
    it("reports the handler is reachable", async () => {
      const result = await runEffect(baseUrl, ok({}));
      expect(result.ok).toBe(true);
    });
  });

  describe("signUpEmail", () => {
    it("creates a user and returns a session token", async () => {
      const result = await runEffect(
        baseUrl,
        signUpEmail({ name: "Ada Lovelace", email, password }),
      );
      expect(result.user.email).toBe(email);
      expect(result.user.name).toBe("Ada Lovelace");
      expect(typeof result.token).toBe("string");
      token = result.token as string;
    });
  });

  describe("getSession", () => {
    it("returns the session for an authenticated request", async () => {
      const result = await runEffect(baseUrl, getSession({}), token);
      expect(result).not.toBeNull();
      expect(result?.user.email).toBe(email);
      expect(result?.session.token).toBeDefined();
    });

    it("returns null for an unauthenticated request", async () => {
      const result = await runEffect(baseUrl, getSession({}));
      expect(result).toBeNull();
    });
  });

  describe("updateUser", () => {
    it("updates the profile and is reflected in the session", async () => {
      const updated = await runEffect(
        baseUrl,
        updateUser({ name: "Augusta Ada King" }),
        token,
      );
      expect(updated.status).toBe(true);

      const session = await runEffect(baseUrl, getSession({}), token);
      expect(session?.user.name).toBe("Augusta Ada King");
    });
  });

  describe("listSessions", () => {
    it("lists the current user's active sessions", async () => {
      const sessions = await runEffect(baseUrl, listSessions({}), token);
      expect(Array.isArray(sessions)).toBe(true);
      expect(sessions.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("changePassword", () => {
    it("changes the password and the new one signs in", async () => {
      await runEffect(
        baseUrl,
        changePassword({ currentPassword: password, newPassword }),
        token,
      );

      const signedIn = await runEffect(
        baseUrl,
        signInEmail({ email, password: newPassword }),
      );
      expect(signedIn.user.email).toBe(email);
      expect(typeof signedIn.token).toBe("string");
    });
  });

  describe("signInEmail (errors)", () => {
    it("fails with Unauthorized on a wrong password", async () => {
      const error = await runEffect(
        baseUrl,
        signInEmail({ email, password: "totally-wrong" }).pipe(Effect.flip),
      );
      expect(error).toBeInstanceOf(Unauthorized);
    });
  });

  describe("signOut", () => {
    it("signs out the current session", async () => {
      const result = await runEffect(baseUrl, signOut({}), token);
      expect(result.success).toBe(true);
    });
  });
});

import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

//#region lib/sdks.test.js
const PACKAGES = join(import.meta.dirname, "..", "..");
const sdks = readdirSync(PACKAGES).filter((name) => name !== "core" && existsSync(join(PACKAGES, name, "package.json"))).sort();
const NO_OP_ERROR = {
	aws: "hand-written protocols; ParseError is part of CommonErrors in src/errors.ts",
	railway: "GraphQL Query SDK; errors are typed per root by core/graphql"
};
const read = (pkg, file) => {
	const p = join(PACKAGES, pkg, file);
	return existsSync(p) ? readFileSync(p, "utf8") : void 0;
};
const handWritten = (pkg) => {
	const dir = join(PACKAGES, pkg, "src");
	return readdirSync(dir).filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts")).map((f) => readFileSync(join(dir, f), "utf8"));
};
const typeAliases = (pkg) => {
	const aliases = /* @__PURE__ */ new Map();
	for (const source of handWritten(pkg)) for (const match of source.matchAll(/^export type (\w+)\s*=([\s\S]*?);[ \t]*$/gm)) aliases.set(match[1], match[2]);
	return aliases;
};
const reachable = (aliases, root) => {
	const seen = /* @__PURE__ */ new Set();
	const stack = [root];
	while (stack.length > 0) {
		const name = stack.pop();
		if (seen.has(name)) continue;
		seen.add(name);
		for (const ref of aliases.get(name)?.match(/\b[A-Z]\w*\b/g) ?? []) stack.push(ref);
	}
	return seen;
};
describe("every SDK", () => {
	test("the exemption list names real packages", () => {
		for (const pkg of Object.keys(NO_OP_ERROR)) globalExpect(sdks).toContain(pkg);
	});
	describe.each(sdks.filter((pkg) => !(pkg in NO_OP_ERROR)))("%s", (pkg) => {
		test("declares its ParseError in the operation error union and constructs it in the protocol", () => {
			const aliases = typeAliases(pkg);
			const opError = [...aliases.keys()].find((name) => name.endsWith("OpError"));
			globalExpect(opError, `packages/${pkg}/src declares no \`export type <Sdk>OpError\``).toBeDefined();
			const parseError = [...reachable(aliases, opError)].find((name) => name.endsWith("ParseError"));
			globalExpect(parseError, `${opError} has no ParseError member`).toBeDefined();
			globalExpect(handWritten(pkg).some((source) => source.includes(`new ${parseError}(`)), `nothing outside src/services constructs ${parseError}`).toBe(true);
			globalExpect(read(pkg, "src/errors.ts")).toMatch(new RegExp(`export class ${parseError}\\b`));
		});
	});
	test("aws keeps ParseError in CommonErrors", () => {
		const errors = read("aws", "src/errors.ts");
		globalExpect(errors).toMatch(/export class ParseError\b/);
		globalExpect(/export type CommonErrors =([^;]*);/.exec(errors)?.[1]).toMatch(/\bParseError\b/);
	});
});

//#endregion
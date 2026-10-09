import { s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

//#region lib/latin1-source.test.js
const PACKAGES = join(import.meta.dirname, "..", "..");
const shippedSources = (dir, out = []) => {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) {
			if (name !== "codegen" && name !== "fixtures") shippedSources(path, out);
		} else if (name.endsWith(".ts") && !name.endsWith(".test.ts")) out.push(path);
	}
	return out;
};
test("shipped TypeScript sources contain only Latin-1 characters", () => {
	const offenders = [];
	for (const pkg of readdirSync(PACKAGES)) {
		const src = join(PACKAGES, pkg, "src");
		try {
			statSync(src);
		} catch {
			continue;
		}
		for (const file of shippedSources(src)) readFileSync(file, "utf8").split("\n").forEach((line, i) => {
			const match = /[^\x00-\xff]/.exec(line);
			if (match) offenders.push(`${file.slice(PACKAGES.length + 1)}:${i + 1} U+${match[0].codePointAt(0).toString(16).toUpperCase()}`);
		});
	}
	globalExpect(offenders).toEqual([]);
});

//#endregion
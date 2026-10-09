import { GqlTransport, connectionField, listField, objectField, root, rootConnection, scalarField } from "./graphql.js";
import { Query } from "./query.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

//#region lib/graphql.test.js
const User = {
	name: "User",
	fields: {}
};
const Project = {
	name: "Project",
	fields: {}
};
Object.assign(User.fields, {
	email: scalarField("email"),
	name: scalarField("name"),
	projects: listField("projects", Project, { first: "Int" })
});
Object.assign(Project.fields, {
	name: scalarField("name"),
	stars: scalarField("stars")
});
const Mock = Layer.succeed(GqlTransport, { execute: (request) => Effect.sync(() => {
	globalExpect(request.document).toContain("email");
	globalExpect(request.document).toContain("stars");
	globalExpect(request.document).toContain("name");
	return { data: { me: {
		email: "ada@railway.app",
		projects: [{
			name: "engine",
			stars: 12
		}, {
			name: "bombe",
			stars: 3
		}]
	} } };
}) });
describe("Query.fn", () => {
	test("builds one document from a returned plan and maps/filters after fetch", async () => {
		const program = Query.fn(() => {
			const me = root("query", "me", User);
			return {
				email: me.email,
				projects: me.projects({ first: 5 }).pipe(Query.filter((project) => project.stars.pipe(Query.map((stars) => stars > 5))), Query.map((project) => ({
					name: project.name,
					stars: project.stars
				})))
			};
		})();
		const result = await Effect.runPromise(program.pipe(Effect.provide(Mock)));
		globalExpect(result).toEqual({
			email: "ada@railway.app",
			projects: [{
				name: "engine",
				stars: 12
			}]
		});
	});
	test("Relay connections map as a list of nodes, one POST", async () => {
		const Workspace = {
			name: "Workspace",
			fields: {}
		};
		Object.assign(Workspace.fields, { name: scalarField("name") });
		const layer = Layer.succeed(GqlTransport, { execute: (request) => Effect.sync(() => {
			globalExpect(request.document).toContain("edges");
			globalExpect(request.document).toContain("node");
			globalExpect(request.document).toContain("name");
			globalExpect(request.document).not.toContain("pageInfo");
			return { data: { projects: { edges: [{ node: { name: "engine" } }, { node: { name: "bombe" } }] } } };
		}) });
		const program = Query.fn(() => {
			return rootConnection("query", "projects", Workspace, { first: 20 }, { first: "Int" }).pipe(Query.map((project) => project.name));
		})();
		const names = await Effect.runPromise(program.pipe(Effect.provide(layer)));
		globalExpect(names).toEqual(["engine", "bombe"]);
	});
	test("nested connection fields unwrap edges.node", async () => {
		const Service = {
			name: "Service",
			fields: {}
		};
		Object.assign(Service.fields, { name: scalarField("name") });
		const Project = {
			name: "Project",
			fields: {}
		};
		Object.assign(Project.fields, {
			name: scalarField("name"),
			services: connectionField("services", Service, { first: "Int" })
		});
		const layer = Layer.succeed(GqlTransport, { execute: (request) => Effect.sync(() => {
			globalExpect(request.document).toMatch(/services[\s\S]*edges[\s\S]*node/);
			return { data: { project: {
				name: "engine",
				services: { edges: [{ node: { name: "web" } }, { node: { name: "db" } }] }
			} } };
		}) });
		const program = Query.fn(() => {
			const project = root("query", "project", Project, { id: "p1" }, { id: "String!" });
			return {
				name: project.name,
				services: project.services({ first: 20 }).pipe(Query.map((service) => service.name))
			};
		})();
		const result = await Effect.runPromise(program.pipe(Effect.provide(layer)));
		globalExpect(result).toEqual({
			name: "engine",
			services: ["web", "db"]
		});
	});
	test("Query.map on an object selects its fields and keeps null", async () => {
		const Deployment = {
			name: "Deployment",
			fields: {}
		};
		Object.assign(Deployment.fields, {
			id: scalarField("id"),
			status: scalarField("status")
		});
		const Service = {
			name: "Service",
			fields: {}
		};
		Object.assign(Service.fields, {
			name: scalarField("name"),
			latestDeployment: objectField("latestDeployment", Deployment)
		});
		const documents = [];
		const respond = (latestDeployment) => Layer.succeed(GqlTransport, { execute: (request) => Effect.sync(() => {
			documents.push(request.document);
			return { data: { service: {
				name: "web",
				latestDeployment
			} } };
		}) });
		const program = Query.fn(() => {
			const service = root("query", "service", Service);
			return {
				name: service.name,
				deployment: service.latestDeployment.pipe(Query.map((deployment) => ({
					id: deployment.id,
					status: deployment.status
				})))
			};
		})();
		globalExpect(await Effect.runPromise(program.pipe(Effect.provide(respond({
			id: "d1",
			status: "SUCCESS"
		}))))).toEqual({
			name: "web",
			deployment: {
				id: "d1",
				status: "SUCCESS"
			}
		});
		globalExpect(documents[0]).toMatch(/latestDeployment \{\s+id\s+status/);
		globalExpect(await Effect.runPromise(program.pipe(Effect.provide(respond(null))))).toEqual({
			name: "web",
			deployment: null
		});
	});
});

//#endregion
//#region lib/json-patch.js
function parseJsonPointer(pointer) {
	if (pointer === "") return [];
	if (!pointer.startsWith("/")) throw new Error(`Invalid JSON Pointer: ${pointer}`);
	return pointer.slice(1).split("/").map((segment) => segment.replace(/~1/g, "/").replace(/~0/g, "~"));
}
var StaleTargetError = class extends Error {
	name = "StaleTargetError";
};
function getValueAtPath(obj, pointer) {
	const segments = parseJsonPointer(pointer);
	let current = obj;
	for (const segment of segments) {
		if (current === null || current === void 0 || typeof current !== "object") throw new StaleTargetError(`JSON pointer ${pointer} missing (at '${segment}'): not an object`);
		if (Array.isArray(current)) {
			const index = segment === "-" ? current.length : parseInt(segment, 10);
			if (index < 0 || index >= current.length) throw new StaleTargetError(`JSON pointer ${pointer} missing index '${segment}'`);
			current = current[index];
		} else {
			const record = current;
			if (!Object.prototype.hasOwnProperty.call(record, segment)) throw new StaleTargetError(`JSON pointer ${pointer} missing key '${segment}'`);
			current = record[segment];
		}
	}
	return current;
}
function setValueAtPath(obj, pointer, value, mode = "add", before) {
	const segments = parseJsonPointer(pointer);
	if (segments.length === 0) throw new Error("Cannot set value at root path");
	let current = obj;
	for (let i = 0; i < segments.length - 1; i++) {
		const segment = segments[i];
		if (current === null || typeof current !== "object") throw new StaleTargetError(`Cannot traverse path ${pointer}: not an object`);
		if (Array.isArray(current)) current = current[parseInt(segment, 10)];
		else current = current[segment];
	}
	const lastSegment = segments[segments.length - 1];
	if (current === null || typeof current !== "object") throw new StaleTargetError(`Cannot set value at path ${pointer}: parent is not an object`);
	if (Array.isArray(current)) {
		if (lastSegment === "-") current.push(value);
		else if (mode === "replace") current[parseInt(lastSegment, 10)] = value;
		else {
			const index = parseInt(lastSegment, 10);
			if (Number.isNaN(index) || index < 0 || index > current.length) throw new StaleTargetError(`JSON pointer ${pointer} index '${lastSegment}' is out of bounds`);
			current.splice(index, 0, value);
		}
	} else {
		const record = current;
		if (before === void 0 || lastSegment in record || !(before in record)) {
			record[lastSegment] = value;
			return;
		}
		const entries = Object.entries(record);
		for (const [key] of entries) delete record[key];
		for (const [key, v] of entries) {
			if (key === before) record[lastSegment] = value;
			record[key] = v;
		}
	}
}
function removeValueAtPath(obj, pointer) {
	const segments = parseJsonPointer(pointer);
	if (segments.length === 0) throw new Error("Cannot remove root");
	let current = obj;
	for (let i = 0; i < segments.length - 1; i++) {
		const segment = segments[i];
		if (current === null || typeof current !== "object") throw new StaleTargetError(`Cannot traverse path ${pointer}: not an object`);
		if (Array.isArray(current)) current = current[parseInt(segment, 10)];
		else current = current[segment];
	}
	const lastSegment = segments[segments.length - 1];
	if (current === null || typeof current !== "object") throw new StaleTargetError(`Cannot remove at path ${pointer}: parent is not an object`);
	if (Array.isArray(current)) {
		const index = parseInt(lastSegment, 10);
		if (Number.isNaN(index) || index < 0 || index >= current.length) throw new StaleTargetError(`JSON pointer ${pointer} missing index '${lastSegment}'`);
		current.splice(index, 1);
	} else {
		const record = current;
		if (!Object.prototype.hasOwnProperty.call(record, lastSegment)) throw new StaleTargetError(`JSON pointer ${pointer} missing key '${lastSegment}'`);
		delete record[lastSegment];
	}
}
function applyOperation(obj, operation) {
	switch (operation.op) {
		case "add":
			setValueAtPath(obj, operation.path, operation.value, "add", operation.before);
			break;
		case "remove":
			removeValueAtPath(obj, operation.path);
			break;
		case "replace":
			if (getValueAtPath(obj, operation.path) === void 0) throw new StaleTargetError(`JSON pointer ${operation.path} does not exist`);
			setValueAtPath(obj, operation.path, operation.value, "replace");
			break;
		case "move": {
			if (!operation.from) throw new Error("move operation requires 'from'");
			const moveValue = getValueAtPath(obj, operation.from);
			if (moveValue === void 0) throw new StaleTargetError(`Cannot move from path ${operation.from}: not an object`);
			removeValueAtPath(obj, operation.from);
			setValueAtPath(obj, operation.path, moveValue, "add", operation.before);
			break;
		}
		case "copy": {
			if (!operation.from) throw new Error("copy operation requires 'from'");
			const copyValue = getValueAtPath(obj, operation.from);
			setValueAtPath(obj, operation.path, JSON.parse(JSON.stringify(copyValue)));
			break;
		}
		case "test": {
			const testValue = getValueAtPath(obj, operation.path);
			if (JSON.stringify(testValue) !== JSON.stringify(operation.value)) throw new Error(`Test operation failed at ${operation.path}: expected ${JSON.stringify(operation.value)}, got ${JSON.stringify(testValue)}`);
			break;
		}
		default: throw new Error(`Unknown operation: ${operation.op}`);
	}
}
function applyPatch(obj, patch) {
	for (const operation of patch) applyOperation(obj, operation);
}
function isStaleTargetError(error) {
	if (error instanceof StaleTargetError) return true;
	const message = typeof error === "string" ? error : error instanceof Error ? error.message : "";
	return message.includes("not an object") || message.includes("parent is not an object") || message.includes("missing key") || message.includes("missing index") || message.includes("does not exist");
}

//#endregion
export { StaleTargetError, applyOperation, applyPatch, getValueAtPath, isStaleTargetError, parseJsonPointer, removeValueAtPath, setValueAtPath };
import { filterQuery, flatMapQuery, itemsQuery, mapQuery, ofQuery, pagesQuery, queryFn } from "./graphql.js";

//#region lib/query.js
const Query = {
	fn: queryFn,
	filter: filterQuery,
	map: mapQuery,
	flatMap: flatMapQuery,
	of: ofQuery,
	pages: pagesQuery,
	items: itemsQuery
};

//#endregion
export { Query };
declare const annotationMetaSymbol: unique symbol;
type Annotatable = {
    annotate(annotations: any): Annotatable;
};
export interface Annotation {
    <A extends Annotatable>(schema: A): A;
    readonly [annotationMetaSymbol]: Array<{
        symbol: symbol;
        value: unknown;
    }>;
    readonly [key: symbol]: unknown;
}
export declare const responseCodeSymbol: unique symbol;
export declare const ResponseCode: () => Annotation;
export declare const headerSymbol: unique symbol;
export declare const Header: (name?: string) => Annotation;
export declare const bodySymbol: unique symbol;
export declare const Body: (name?: string) => Annotation;
export declare const querySymbol: unique symbol;
export declare const Query: (name?: string) => Annotation;
export {};
//# sourceMappingURL=trait.d.ts.map
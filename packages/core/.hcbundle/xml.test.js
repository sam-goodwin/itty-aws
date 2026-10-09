import { o as it, r as describe } from "./_chunks/dist-BEWZN_3D.js";
import { XmlParseError, escapeXml, parseXml, parseXmlSync } from "./xml.js";
import * as Effect from "effect/Effect";
import assert from "node:assert/strict";

//#region lib/fixtures/xml/upstream-validator.json
var upstream_validator_default = [
	{
		"name": "should validate simple xml string",
		"xml": "<rootNode></rootNode>",
		"valid": true
	},
	{
		"name": "should validate simple xml string",
		"xml": "<rootNode></rootNode     >",
		"valid": true
	},
	{
		"name": "should not validate invalid starting tag",
		"xml": "< rootNode></rootNode>",
		"valid": false
	},
	{
		"name": "should not validate incomplete xml string",
		"xml": "<rootNode>",
		"valid": false
	},
	{
		"name": "should not validate invalid starting tag for following characters",
		"xml": "<rootNode#@aa></rootNode#@aa>",
		"valid": false
	},
	{
		"name": "should return false for non xml text",
		"xml": "rootNode",
		"valid": false
	},
	{
		"name": "should validate self closing tags",
		"xml": "<rootNode><validtag1  /><validtag2/><validtag3  with='attrib'/><validtag4 />text<validtag5/>text</rootNode>",
		"valid": true
	},
	{
		"name": "should not consider these as self closing tags",
		"xml": "<rootNode><validtag1/><invalid tag/><validtag3  with='attrib'/></rootNode>",
		"valid": false
	},
	{
		"name": "should not consider these as self closing tags",
		"xml": "<rootNode><notSelfClosing/ ></rootNode>",
		"valid": false
	},
	{
		"name": "should not validate xml string when closing tag is different",
		"xml": "<rootNode></rootnode>",
		"valid": false
	},
	{
		"name": "should not validate xml string when closing tag is invalid",
		"xml": "<rootNode>< /rootnode>",
		"valid": false
	},
	{
		"name": "should not validate xml string when closing tag is invalid",
		"xml": "<rootNode></ rootnode>",
		"valid": false
	},
	{
		"name": "should not validate xml string when closing tag is invalid",
		"xml": "<rootNode></rootnode 123>",
		"valid": false
	},
	{
		"name": "should validate simple xml string with namespace",
		"xml": "<root:Node></root:Node>",
		"valid": true
	},
	{
		"name": "should not validate xml string with namespace when closing tag is diffrent",
		"xml": "<root:Node></root:node>",
		"valid": false
	},
	{
		"name": "should validate simple xml string with value",
		"xml": "<root:Node>some value</root:Node>",
		"valid": true
	},
	{
		"name": "should not validate simple xml string with value but not matching closing tag",
		"xml": "<root:Node>some value</root>",
		"valid": false
	},
	{
		"name": "should not validate simple xml string with value but no closing tag",
		"xml": "<root:Node>some value",
		"valid": false
	},
	{
		"name": "should validate xml with nested tags",
		"xml": "<rootNode><tag></tag><tag>1</tag><tag>val</tag></rootNode>",
		"valid": true
	},
	{
		"name": "should not validate xml with wrongly nested tags",
		"xml": "<rootNode><tag><tag1></tag>1</tag1><tag>val</tag></rootNode>",
		"valid": false
	},
	{
		"name": "should not validate xml with unexpected closing tag",
		"xml": "</rootNode>",
		"valid": false
	},
	{
		"name": "should validate xml with comment",
		"xml": "<rootNode><!-- <tag> - - --><tag>1</tag><tag>val</tag></rootNode>",
		"valid": true
	},
	{
		"name": "should validate xml with comment",
		"xml": "<rootNode><!-- <tag> - - \n--><tag>1</tag><tag>val</tag></rootNode>",
		"valid": true
	},
	{
		"name": "should not validate xml with comment in a open tag",
		"xml": "<rootNode<!-- <tag> -- -->><tag>1</tag><tag>val</tag></rootNode>",
		"valid": false
	},
	{
		"name": "should not validate xml with comment in a open tag",
		"xml": "<rootNode <!-- <tag> -- --> ><tag>1</tag><tag>val</tag></rootNode>",
		"valid": false
	},
	{
		"name": "should correctly identify self closing tags",
		"xml": "<rootNode><in/valid></in/valid></rootNode>",
		"valid": false
	},
	{
		"name": "should correctly identify self closing tags",
		"xml": "<rootNode><in#valid/></rootNode>",
		"valid": false
	},
	{
		"name": "should not validate xml with non closing comment",
		"xml": "<rootNode ><!-- <tag> -- <tag>1</tag><tag>val</tag></rootNode>",
		"valid": false
	},
	{
		"name": "should not validate xml with unclosed tag",
		"xml": "<rootNode  abc='123' bc='567'",
		"valid": false
	},
	{
		"name": "should validate xml with CDATA",
		"xml": "<name><![CDATA[Jack]]></name>",
		"valid": true
	},
	{
		"name": "should validate xml with repeated CDATA",
		"xml": "<name><![CDATA[Jack]]><![CDATA[Jack]]></name>",
		"valid": true
	},
	{
		"name": "should validate xml when CDATA consist regx or blank data",
		"xml": "<name><![CDATA[]]><![CDATA[^[ ].*$]]></name>",
		"valid": true
	},
	{
		"name": "should return true for valid tag",
		"xml": "<ns:start_tag-2.0></ns:start_tag-2.0>",
		"valid": true
	},
	{
		"name": "should return false for invalid tag",
		"xml": "<2start_tag  abc='123' bc='567'></2start_tag>",
		"valid": false
	},
	{
		"name": "should return false for invalid tag",
		"xml": "<2start_tag />",
		"valid": false
	},
	{
		"name": "should validate xml data",
		"xml": "<?xml version=\"1.0\"?>\n<any_name attr=\"https://example.com/somepath\">\n    <person id=\"101\">\n        <phone>+122233344550</phone>\n        <name>Jack</name>\n        <phone>+122233344551</phone>\n        <age>33</age>\n        <emptyNode></emptyNode>\n        <booleanNode>false</booleanNode>\n        <booleanNode>true</booleanNode>\n        <selfclosing />\n        <selfclosing with=\"value\" />\n        <married firstTime=\"No\" attr=\"val 2\">Yes</married>\n        <birthday>Wed, 28 Mar 1979 12:13:14 +0300</birthday>\n        <address>\n            <city>New York</city>\n            <street>Park Ave</street>\n            <buildingNo>1</buildingNo>\n            <flatNo>1</flatNo>\n        </address>\n        <address>\n            <city>Boston</city>\n            <street>Centre St</street>\n            <buildingNo>33</buildingNo>\n            <flatNo>24</flatNo>\n        </address>\n    </person>\n    <person id=\"102\">\n        <phone>+122233344553</phone>\n        <name>Boris</name>\n        <phone>+122233344554</phone>\n        <age>34</age>\n        <married firstTime=\"Yes\">Yes</married>\n        <birthday>Mon, 31 Aug 1970 02:03:04 +0300</birthday>\n        <address>\n            <city>Moscow</city>\n            <street>Kahovka</street>\n            <buildingNo>1</buildingNo>\n            <flatNo>2</flatNo>\n        </address>\n        <address>\n            <city>Tula</city>\n            <street>Lenina</street>\n            <buildingNo>3</buildingNo>\n            <flatNo>78</flatNo>\n        </address>\n    </person>\n</any_name>",
		"valid": true
	},
	{
		"name": "should validate complex xml data",
		"xml": "<?xml version=\"1.0\"?>\n<any_name attr=\"https://example.com/somepath\">\n    <person id=\"101\">\n        <phone>+122233344550</phone>\n        <name>Jack</name>\n        <phone>+122233344551</phone>\n    <age>33</age>\n        <emptyNode></emptyNode>\n        <booleanNode>false</booleanNode>\n        <booleanNode>true</booleanNode>\n <selfclosing />\n        <selfclosing with=\"value\" />\n        <married firstTime=\"No\" attr=\"val 2\">Yes</married>\n      <birthday>Wed, 28 Mar 1979 12:13:14 +0300</birthday>\n        <address>\n            <city>New York</city>\n            <street>Park Ave</street>\n            <buildingNo>1</buildingNo>\n            <flatNo>1</flatNo>\n        </address>\n        <address>\n            <city>Boston</city>\n            <street>Centre St</street>\n            <buildingNo>33</buildingNo>\n            <flatNo>24</flatNo>\n        </address>\n    </person>\n    <person id=\"102\">\n        <phone>+122233344553</phone>\n        <name>Boris</name>\n        <phone>+122233344554</phone>\n        <age>34</age>\n        <married ns:firstTime=\"Yes\"><![CDATA[<some>Jack</some>]]><![CDATA[Jack]]></married>\n        <birthday>Mon, 31 Aug 1970 02:03:04 +0300</birthday>\n        <ns:address>\n            <city><![CDATA[<some>Jack</some>]]></city>\n            <street>Kahovka</street>\n            <buildingNo>1</buildingNo>\n            <flatNo>2</flatNo>\n        </ns:address>\n        <address>\n            <city>Tula</city>\n            <street>Lenina</street>\n            <buildingNo>3</buildingNo>\n            <flatNo>78</flatNo>\n        </address>\n    </person>\n</any_name>",
		"valid": true
	},
	{
		"name": "should validate xml data with CRLF",
		"xml": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <!DOCTYPE daily_western_horo_fr>\n        <daily_western_horo_fr>\n            <date valeur=\"2017-09-25\"><signe valeur=\"balance\">\n                        <nombre_chance>25\n                        </nombre_chance>\n                    </signe></date>\n        </daily_western_horo_fr>\n",
		"valid": true,
		"parserValid": false,
		"difference": "DTDs are outside the supported XML subset."
	},
	{
		"name": "should return false for invalid xml",
		"xml": "<?xml version=\"1.0\"?>\n<any_name attr=\"https://example.com/somepath\">\n    <person id=\"101\">\n        <phone>+122233344550</phone>\n        <name>Jack</name>\n        <phone>+122233344551</phone>\n    <age>33</age>\n        <emptyNode></emptyNode>\n        <booleanNode>false</booleanNode>\n        <booleanNode>true</booleanNode>\n <selfclosing >\n        <selfclosing with=\"value\" />\n        <married firstTime=\"No\" attr=\"val 2\">Yes</married>\n      <birthday>Wed, 28 Mar 1979 12:13:14 +0300</birthday>\n        <address>\n            <city>New York</city>\n            <street>Park Ave</street>\n            <buildingNo>1</buildingNo>\n            <flatNo>1</flatNo>\n        </address>\n        <address>\n            <city>Boston</city>\n            <street>Centre St</street>\n            <buildingNo>33</buildingNo>\n            <flatNo>24</flatNo>\n        </address>\n    </person>\n    <person id=\"102\">\n        <phone>+122233344553</phone>\n        <name>Boris</name>\n        <phone>+122233344554</phone>\n        <age>34</age>\n        <married ns:firstTime=\"Yes\"><![CDATA[<some>Jack</some>]]><![CDATA[Jack]]></married>\n        <birthday>Mon, 31 Aug 1970 02:03:04 +0300</birthday>\n        <ns:address>\n            <city><![CDATA[<some>Jack</some>]]></city>\n            <street>Kahovka</street>\n            <buildingNo>1</buildingNo>\n            <flatNo>2</flatNo>\n        </ns:address>\n        <address>\n            <city>Tula</city>\n            <street>Lenina</street>\n            <buildingNo>3</buildingNo>\n            <flatNo>78</flatNo>\n        </address>\n    </person>\n</any_name>",
		"valid": false
	},
	{
		"name": "should return true for valid svg",
		"xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Generator: Adobe Illustrator 13.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 14948)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"64px\" height=\"64px\" viewBox=\"5.5 -3.5 64 64\" enable-background=\"new 5.5 -3.5 64 64\" xml:space=\"preserve\">\n<g>\n	<circle fill=\"#FFFFFF\" cx=\"37.637\" cy=\"28.806\" r=\"28.276\"/>\n	<g>\n		<path d=\"M37.443-3.5c8.988,0,16.57,3.085,22.742,9.257C66.393,11.967,69.5,19.548,69.5,28.5c0,8.991-3.049,16.476-9.145,22.456    C53.879,57.319,46.242,60.5,37.443,60.5c-8.649,0-16.153-3.144-22.514-9.43C8.644,44.784,5.5,37.262,5.5,28.5    c0-8.761,3.144-16.342,9.429-22.742C21.101-0.415,28.604-3.5,37.443-3.5z M37.557,2.272c-7.276,0-13.428,2.553-18.457,7.657    c-5.22,5.334-7.829,11.525-7.829,18.572c0,7.086,2.59,13.22,7.77,18.398c5.181,5.182,11.352,7.771,18.514,7.771    c7.123,0,13.334-2.607,18.629-7.828c5.029-4.838,7.543-10.952,7.543-18.343c0-7.276-2.553-13.465-7.656-18.571    C50.967,4.824,44.795,2.272,37.557,2.272z M46.129,20.557v13.085h-3.656v15.542h-9.944V33.643h-3.656V20.557    c0-0.572,0.2-1.057,0.599-1.457c0.401-0.399,0.887-0.6,1.457-0.6h13.144c0.533,0,1.01,0.2,1.428,0.6    C45.918,19.5,46.129,19.986,46.129,20.557z M33.042,12.329c0-3.008,1.485-4.514,4.458-4.514s4.457,1.504,4.457,4.514    c0,2.971-1.486,4.457-4.457,4.457S33.042,15.3,33.042,12.329z\"/>\n	</g>\n</g>\n</svg>\n",
		"valid": true,
		"parserValid": false,
		"difference": "DTDs are outside the supported XML subset."
	},
	{
		"name": "should validate XML with DOCTYPE",
		"xml": "<?xml version=\"1.0\" standalone=\"yes\" ?><!--open the DOCTYPE declaration -  the open square bracket indicates an internal DTD--><!DOCTYPE foo [<!--define the internal DTD--><!ELEMENT foo (#PCDATA)><!--close the DOCTYPE declaration-->]><foo>Hello World.</foo>",
		"valid": true,
		"parserValid": false,
		"difference": "DTDs are outside the supported XML subset."
	},
	{
		"name": "should fail for XML with ! which is not a comment, DOCTYPE or CDATA",
		"xml": "<test><!bla></!bla></test>",
		"valid": false
	},
	{
		"name": "should not validate XML when prolog doesn't start from 1st char",
		"xml": "  <?xml version=\"1.0\" standalone=\"yes\" ?><foo>Hello World.</foo>",
		"valid": false
	},
	{
		"name": "should not validate XML with prolog only",
		"xml": "<?xml version=\"1.0\" standalone=\"yes\" ?><!--some comment -  end in this line-->",
		"valid": false
	},
	{
		"name": "should not validate XML with prolog &  DOCTYPE but not any other tag",
		"xml": "<?xml version=\"1.0\" standalone=\"yes\" ?><!--open the DOCTYPE declaration - the open square bracket indicates an internal DTD--><!DOCTYPE foo [<!--define the internal DTD--><!ELEMENT foo (#PCDATA)><!--close the DOCTYPE declaration-->]>",
		"valid": false
	},
	{
		"name": "should validate XML PIs",
		"xml": "<?xml version=\"1.0\"?><?mso-contentType?><h1></h1><?mso-contentType something=\"val\"?>",
		"valid": true
	},
	{
		"name": "should validate XML PIs",
		"xml": "<h1><?mso?> abc</h1>",
		"valid": true
	},
	{
		"name": "should validate XML PIs",
		"xml": "<?xml version=\"1.0\"?>\n        <content><?tibcochar ?> something</content>",
		"valid": true
	},
	{
		"name": "should not validate XML PIs with invalid values",
		"xml": "<?xml version=\"1.0\"?><?mso-contentType valid=\"value\" invalid=\"?>\" ?><h1></h1><?mso-contentType something=\"val\"?>",
		"valid": false
	},
	{
		"name": "should validate xml with a \"length\" attribute",
		"xml": "<name length=\"1\"></name>",
		"valid": true
	},
	{
		"name": "should not validate xml with repeated attributes",
		"xml": "<name length=\"bar\" length=\"baz\"></name>",
		"valid": false
	},
	{
		"name": "should validate xml with a tag attribute splitted on more lines",
		"xml": "\n<name\nattribute1=\"attribute1\"\nattribute2=\"attribute2\"\n/>\n    ",
		"valid": true
	},
	{
		"name": "should validate xml not properly closed",
		"xml": "\n<name\nattribute1=\"attribute1\"\nattribute2=\"attribute2\"\n></name\n    ",
		"valid": false
	},
	{
		"name": "should detect error line when having multiple attributes",
		"xml": "<urlset t\n        xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n        xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\" xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\"\n        xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n    </urlset>",
		"valid": false
	},
	{
		"name": "should detect error line when having multiple attributes 2",
		"xml": "<urlset\n        xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n        xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\" xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\"\n        xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"\n        t>\n    </urlset>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &amp; hyde</rootNode>",
		"valid": true
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &#123; hyde</rootNode>",
		"valid": true
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &#x1945abcdef; hyde</rootNode>",
		"valid": true,
		"parserValid": false,
		"difference": "Character references must be valid XML code points (at most U+10FFFF)."
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &#x1ah; hyde</rootNode>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &#1a; hyde</rootNode>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &#123 hyde</rootNode>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &#1abcd hyde</rootNode>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll & hyde</rootNode>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &aa</rootNode>",
		"valid": false
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &abcdefghij1234567890;</rootNode>",
		"valid": true,
		"parserValid": false,
		"difference": "Undeclared entities are rejected."
	},
	{
		"name": "should validate value with ampersand",
		"xml": "<rootNode>jekyll &abcdefghij1234567890a;</rootNode>",
		"valid": false
	},
	{
		"name": "when root nodes are repeated",
		"xml": "<xml></xml><xml></xml>",
		"valid": false
	},
	{
		"name": "when root nodes are different",
		"xml": "<xml></xml><xml2></xml2>",
		"valid": false
	},
	{
		"name": "when root nodes have more nested tags",
		"xml": "<test>\n        <nested>\n        </nested>\n        </test>\n        <xml2>\n        </xml2>",
		"valid": false
	},
	{
		"name": "- child tag",
		"xml": "<parent>\n                    <childA/>\n                    <childB>  <!-- error: should be self-closing -->\n                    <childC/>\n                  </parent>",
		"valid": false
	},
	{
		"name": "- root tag",
		"xml": "             <!-- line 1 -->\n                               <!-- line 2 -->\n                    <parent>   <!-- line 3  error: not closed -->\n                      <childA/>\n                    <childB/>",
		"valid": false
	},
	{
		"name": "- incorrect close tag",
		"xml": "<parent>\n                    <child>\n                       <self/>\n                    </incorrect>\n                    <empty/>\n                  <parent>",
		"valid": false
	},
	{
		"name": "- nested incorrect close tag",
		"xml": "<parent>\n                    <child>\n                       <self/>\n                       <self>\n                    </incorrect>\n                    <empty/>\n                  </parent>",
		"valid": false
	},
	{
		"name": "- Extra text",
		"xml": "<parent>\n                  </parent>extra",
		"valid": false
	},
	{
		"name": "- Extra text",
		"xml": "<parent><child attri= bute=\"true\" /></parent>",
		"valid": false
	},
	{
		"name": "- Unpaired tags",
		"xml": "<parent><extra></parent>",
		"valid": false
	},
	{
		"name": "- allowBooleanAttributes:false",
		"xml": "<parent extra></parent>",
		"valid": false
	}
];

//#endregion
//#region lib/xml.test.js
function parse(xml) {
	return JSON.parse(JSON.stringify(parseXmlSync(xml)));
}
describe("upstream fast-xml-parser validation corpus", () => {
	for (const [index, fixture] of upstream_validator_default.entries()) it(`${index}: ${fixture.name}`, () => {
		if (fixture.parserValid ?? fixture.valid) assert.doesNotThrow(() => parseXmlSync(fixture.xml));
		else assert.throws(() => parseXmlSync(fixture.xml), XmlParseError);
	});
});
describe("XML object format", () => {
	it("keeps primitives as strings and groups repeated children", () => {
		assert.deepEqual(parse("<R><x>001</x><x>false</x><x>1e3</x><empty/><empty></empty></R>"), { R: {
			x: [
				"001",
				"false",
				"1e3"
			],
			empty: ["", ""]
		} });
	});
	it("preserves namespace names, attributes, and text with attributes", () => {
		assert.deepEqual(parse("<ns:R xmlns:ns=\"urn:r\"><ns:x ns:id=\"01\">value</ns:x><empty a=\"\"/></ns:R>"), { "ns:R": {
			"@_xmlns:ns": "urn:r",
			"ns:x": {
				"@_ns:id": "01",
				"#text": "value"
			},
			empty: { "@_a": "" }
		} });
	});
	it("preserves string whitespace, including attribute and CDATA values", () => {
		assert.deepEqual(parse("<R><Key> key </Key><blank> 	 </blank><x a=\" b \"> text </x><c><![CDATA[ c ]]></c></R>"), { R: {
			Key: " key ",
			blank: " 	 ",
			x: {
				"@_a": " b ",
				"#text": " text "
			},
			c: " c "
		} });
	});
	it("discards layout-only container text but preserves mixed content", () => {
		assert.deepEqual(parse("<R>\n  <x/>\n  <y/>\n</R>"), { R: {
			x: "",
			y: ""
		} });
		assert.deepEqual(parse("<R>Hello <b>world</b> !</R>"), { R: {
			b: "world",
			"#text": "Hello  !"
		} });
		assert.deepEqual(parse("<R><![CDATA[ ]]><b/></R>"), { R: {
			b: "",
			"#text": " "
		} });
	});
	it("decodes predefined and numeric entities exactly once", () => {
		assert.deepEqual(parse("<R a=\"&quot;&apos;&#9;\">&amp;&lt;&gt;&#65;&#x1F600;&amp;lt;</R>"), { R: {
			"@_a": "\"'	",
			"#text": "&<>A😀&lt;"
		} });
	});
	it("normalizes literal line endings and attribute whitespace, not character references", () => {
		assert.deepEqual(parse("<R a=\"x\r\ny	z\r&#13;&#10;&#9;\">a\r\nb\rc&#13;</R>"), { R: {
			"@_a": "x y z \r\n	",
			"#text": "a\nb\nc\r"
		} });
	});
	it("joins CDATA and text without decoding CDATA entities", () => {
		assert.deepEqual(parse("<R>a<![CDATA[<b>&amp;]]><![CDATA[c]]>d&amp;</R>"), { R: "a<b>&amp;cd&" });
		assert.deepEqual(parse("<R><![CDATA[]]></R>"), { R: "" });
	});
	it("ignores declarations, comments and processing instructions", () => {
		assert.deepEqual(parse("﻿<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><!--before--><?before a?><R>a<!--ignored--><?in x?>b</R><?after?><!--after-->"), { R: "ab" });
	});
	it("supports XML Unicode names", () => {
		assert.deepEqual(parse("<根 é=\"oui\"><𐀀>😀</𐀀><á/></根>"), { 根: {
			"@_é": "oui",
			𐀀: "😀",
			á: ""
		} });
	});
	it("accepts empty HTTP bodies", () => {
		for (const xml of [
			"",
			" \r\n	",
			"﻿"
		]) assert.deepEqual(parse(xml), {});
	});
	it("stores prototype-related names as own data properties", () => {
		const result = parseXmlSync("<__proto__><constructor>one</constructor><constructor>two</constructor><__proto__>safe</__proto__><toString/></__proto__>");
		const root = result.__proto__;
		assert.equal(Object.getPrototypeOf(result), null);
		assert.equal(Object.getPrototypeOf(root), null);
		assert.deepEqual(JSON.parse(JSON.stringify(root)), JSON.parse("{\"constructor\":[\"one\",\"two\"],\"__proto__\":\"safe\",\"toString\":\"\"}"));
		assert.equal(Object.hasOwn(Object.prototype, "safe"), false);
	});
	it("round trips escaped strings", () => {
		for (const text of [
			" <tag a=\"x\">&'😀 ",
			"",
			"false",
			"001",
			"&#13;",
			"	\n"
		]) assert.deepEqual(parse(`<R>${escapeXml(text)}</R>`), { R: text });
	});
	it("handles large lists without recursion", () => {
		const result = parse(`<R>${"<item a=\"1\">value</item>".repeat(1e4)}</R>`);
		assert.equal(result.R.item.length, 1e4);
		assert.deepEqual(result.R.item[9999], {
			"@_a": "1",
			"#text": "value"
		});
	});
});
describe("malformed and unsupported XML", () => {
	for (const xml of [
		"<R a=\"1\"a=\"2\"/>",
		"<R a=\"<\"/>",
		"<R a=\"&bad;\"/>",
		"<R a=1/>",
		"<R a=\"1\" a=\"2\"/>",
		"<R/ >",
		"< R/>",
		"<R></ R>",
		"<R></R x>",
		"<R>]]></R>",
		"<R>&</R>",
		"<R>&amp</R>",
		"<R>&nope;</R>",
		"<R>&#0;</R>",
		"<R>&#xD800;</R>",
		"<R>&#x110000;</R>",
		"<R>&#xFFFE;</R>",
		"<R>&#-1;</R>",
		"<R>&#X41;</R>",
		"<R>&#x;</R>",
		"<R>&#;</R>",
		"<R>\0</R>",
		"<R>\v</R>",
		"<R>\ud800</R>",
		"<R>\udc00</R>",
		"<R>￾</R>",
		"<R>￿</R>",
		"<R><!--a--b--></R>",
		"<R><!--a---></R>",
		"<R><!--",
		"<R><![CDATA[",
		"<![CDATA[x]]><R/>",
		"<R/><![CDATA[x]]>",
		"<R><?pi",
		"<R><?1bad?></R>",
		"<R><?pi!?></R>",
		"<?XML version=\"1.0\"?><R/>",
		"<?xml?><R/>",
		"<?xml version=\"1.1\"?><R/>",
		"<?xml encoding=\"UTF-8\"?><R/>",
		"<?xml version=\"1.0\" junk=\"x\"?><R/>",
		"<R><?xml version=\"1.0\"?></R>",
		"<!--x--><?xml version=\"1.0\"?><R/>",
		"<?xml version=\"1.0\"?>",
		"<!--only-->",
		"<!DOCTYPE R><R/>",
		"<!DOCTYPE R SYSTEM \"file:///etc/passwd\"><R/>",
		"<!DOCTYPE R [<!ENTITY a \"&a;\">]><R>&a;</R>",
		"<R/><R/>",
		"before<R/>",
		"<R/>after",
		"<R><x></R>",
		"<R>",
		"<",
		"<R a=\"",
		"<R a",
		"<R a=",
		"<R ",
		"</R>",
		"<1bad/>",
		"<R\xA0a=\"x\"/>"
	]) it(`rejects ${JSON.stringify(xml)}`, () => {
		assert.throws(() => parseXmlSync(xml), (error) => {
			assert.ok(error instanceof XmlParseError);
			assert.ok(error.offset >= 0 && error.offset <= xml.length);
			return true;
		});
	});
	it("reports original input offsets and CRLF-aware line numbers", () => {
		const xml = "<R>\r\n&bad;</R>";
		assert.throws(() => parseXmlSync(xml), (error) => {
			assert.ok(error instanceof XmlParseError);
			assert.equal(error.offset, 5);
			assert.equal(error.line, 2);
			assert.equal(error.column, 1);
			return true;
		});
	});
	it("enforces depth and input length limits", () => {
		assert.doesNotThrow(() => parseXmlSync("<a><b/></a>", { maxDepth: 2 }));
		assert.throws(() => parseXmlSync("<a><b/></a>", { maxDepth: 1 }), XmlParseError);
		assert.doesNotThrow(() => parseXmlSync("<a/>", { maxLength: 4 }));
		assert.throws(() => parseXmlSync("<a/>", { maxLength: 3 }), XmlParseError);
		assert.throws(() => parseXmlSync("<a/>", { maxDepth: NaN }), XmlParseError);
		assert.throws(() => parseXmlSync("<a/>", { maxLength: -1 }), XmlParseError);
		const nested = "<a>".repeat(2e3) + "</a>".repeat(2e3);
		assert.throws(() => parseXmlSync(nested), XmlParseError);
		assert.doesNotThrow(() => parseXmlSync(nested, { maxDepth: 2e3 }));
	});
	it("exposes parser failures through Effect's typed channel", () => {
		const result = Effect.runSync(Effect.flip(parseXml("<R>")));
		assert.ok(result instanceof XmlParseError);
		assert.match(result.message, /Unclosed element/);
	});
	it("can execute the same lazy Effect repeatedly", () => {
		const effect = parseXml("<R>ok</R>");
		assert.equal(Effect.runSync(effect).R, "ok");
		assert.equal(Effect.runSync(effect).R, "ok");
	});
});

//#endregion
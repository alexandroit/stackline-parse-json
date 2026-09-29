# @stackline/parse-json

> Parse JSON with more helpful errors.

[![npm version](https://img.shields.io/npm/v/@stackline/parse-json.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/parse-json)
[![license](https://img.shields.io/npm/l/@stackline/parse-json.svg?style=flat-square)](https://github.com/alexandroit/stackline-parse-json)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-parse-json)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/parse-json/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/parse-json/)** | **[npm](https://www.npmjs.com/package/@stackline/parse-json)** | **[Issues](https://github.com/alexandroit/stackline-parse-json/issues)** | **[Repository](https://github.com/alexandroit/stackline-parse-json)**

**Current package version:** `1.0.2`

---

## Why this package?

`@stackline/parse-json` is the Stackline-maintained distribution of `parse-json@6.0.2`. It is an independent continuation of [parse-json](https://github.com/sindresorhus/parse-json); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/parse-json@1.0.2` |
| API target | `parse-json@6.0.2` |
| Supported Node.js | `^12.20.0 \|\| ^14.13.1 \|\| >=16.0.0` |
| License | `MIT` |
| Module type | `module` |
| Runtime dependencies | `@babel/code-frame, error-ex, json-parse-even-better-errors, lines-and-columns` |

## Installation

```bash
npm install @stackline/parse-json
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install parse-json@npm:@stackline/parse-json
```

## Usage and API reference

> Parse JSON with more helpful errors

## Install

```sh
npm install @stackline/parse-json
```

## Usage

```js
import parseJson from '@stackline/parse-json';

const json = '{\n\t"foo": true,\n}';


JSON.parse(json);
/*
undefined:3
}
^
SyntaxError: Unexpected token }
*/


parseJson(json);
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}'

  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/


parseJson(json, 'foo.json');
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}' in foo.json

  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/


// You can also add the filename at a later point
try {
	parseJson(json);
} catch (error) {
	if (error instanceof parseJson.JSONError) {
		error.fileName = 'foo.json';
	}

	throw error;
}
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}' in foo.json

  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/
```

## API

### parseJson(string, reviver?, filename?)

Throws a `JSONError` when there is a parsing error.

#### string

Type: `string`

#### reviver

Type: `Function`

Prescribes how the value originally produced by parsing is transformed, before being returned. See [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter
) for more.

#### filename

Type: `string`

The filename displayed in the error message.

### parseJson.JSONError

Exposed for `instanceof` checking.

#### fileName

Type: `string`

The filename displayed in the error message.

#### codeFrame

Type: `string`

The printable section of the JSON which produces the error.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-parse-json?utm_source=npm-parse-json&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

## Credits and original authors

- Original project: [parse-json](https://github.com/sindresorhus/parse-json).
- Sindre Sorhus.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-parse-json).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.

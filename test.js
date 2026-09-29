import test from 'ava';
import parseJson, {JSONError} from './index.js';

const jsonSyntaxMessage = /(?:Unexpected token "}"|Expected double-quoted property name)/;
const jsonErrorRegex = /(?:Unexpected token "}"|Expected double-quoted property name).*in foo\.json/;

test('main', t => {
	t.truthy(parseJson('{"foo": true}'));

	t.throws(() => {
		parseJson('{\n\t"foo": true,\n}');
	}, {
		name: 'JSONError',
		message: jsonSyntaxMessage,
	});

	t.throws(() => {
		try {
			parseJson('{\n\t"foo": true,\n}');
		} catch (error) {
			error.fileName = 'foo.json';
			throw error;
		}
	}, {
		message: jsonErrorRegex,
	});

	t.throws(() => {
		parseJson('{\n\t"foo": true,\n}', 'foo.json');
	}, {
		message: jsonErrorRegex,
	});

	t.throws(() => {
		try {
			parseJson('{\n\t"foo": true,\n}', 'bar.json');
		} catch (error) {
			error.fileName = 'foo.json';
			throw error;
		}
	}, {
		message: jsonErrorRegex,
	});
});

test('throws exported error error', t => {
	t.throws(() => {
		parseJson('asdf');
	}, {
		instanceOf: JSONError,
	});
});

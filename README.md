# angular-decamel-filter

An AngularJS filter (with no external dependencies) for converting
camelCaseStrings to "Camel Case Strings". Useful for quickly converting
programmer-friendly keys to user-facing labels; I use it for creating
on-the-fly table headers.

## Usage

Use `decamel` like you would any other string filter:

```js
// scopeVariable is "fooBarBaz"
<h1>{{scopeVariable | decamel}}</h1>
```

...to produce human-friendly output:

```html
<h1>Foo Bar Baz</h1>
```

Want finer-grained control over your dedromedization? You can specify a custom delimiter, or disable initial capitalization:

```js
<h1>{{scopeVariable | decamel:'_':true}}</h1>
```

...produces:

```html
<h1>foo_Bar_Baz</h1>
```

## Installation

With [Bower](http://bower.io/):

```
bower install angular-decamel-filter
```

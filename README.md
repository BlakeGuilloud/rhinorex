# rhinorex

[![Build Status](https://travis-ci.org/BlakeGuilloud/rhinorex.svg?branch=master)](https://travis-ci.org/BlakeGuilloud/rhinorex) [![NPM version](https://img.shields.io/npm/v/rhinorex.svg)](https://www.npmjs.com/package/rhinorex)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](#badge)

A regular expression library.

## Installation
```
$ yarn add rhinorex
```

## Usage
```javascript
import rhinorex from 'rhinorex';

rhinorex({ value: 'blake@rhinogram.com', pattern: 'email' });
// => true

rhinorex({ value: 'blake@rhinogram', pattern: 'email' });
// => false
```
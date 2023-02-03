import avaTest, { ExecutionContext, TestFn } from 'ava';
import { TestContext } from '../../mock/interface';
import { characterSet } from '../base';
import { findCharacterSet } from './characterSet';

const test = avaTest as TestFn<TestContext>;

const getLabel = (name: string) => name.substring(0, name.indexOf('.'));

test('should retrieve letter character set for nick.op', (t: ExecutionContext<TestContext>) => {
  const ONS = 'nick.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.LETTER);
});

test('should retrieve digit character set for 9898.op', (t: ExecutionContext<TestContext>) => {
  const ONS = '9898.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.DIGIT);
});

test('should retrieve alphanumeric character set for 0xmatoken.op', (t: ExecutionContext<TestContext>) => {
  const ONS = '0xmatoken.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve emoji character set for 👨🏻‍🚀👨🏻‍🚀👨🏻‍🚀.op', (t: ExecutionContext<TestContext>) => {
  const ONS = '👨🏻‍🚀👨🏻‍🚀👨🏻‍🚀.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.EMOJI);
});

test('should retrieve alphanumeric character set for Japanese', (t: ExecutionContext<TestContext>) => {
  const ONS = '太陽.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Turkish', (t: ExecutionContext<TestContext>) => {
  const ONS = 'güneş.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Russian', (t: ExecutionContext<TestContext>) => {
  const ONS = 'солнце.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Hebrew', (t: ExecutionContext<TestContext>) => {
  const ONS = 'שמש.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Arabic', (t: ExecutionContext<TestContext>) => {
  const ONS = 'الشمس.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Korean', (t: ExecutionContext<TestContext>) => {
  const ONS = '태양.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Chinese', (t: ExecutionContext<TestContext>) => {
  const ONS = '太陽.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for emoji + letters', (t: ExecutionContext<TestContext>) => {
  const ONS = '🥛shake.op';
  const result = findCharacterSet(getLabel(ONS));
  t.is(result, characterSet.MIXED);
});

test('should retrieve emoji character set for given emojis', (t: ExecutionContext<TestContext>) => {
  const emojis = "🧑🏻‍❤️‍💋‍🧑🏼🧑🏻‍❤️‍💋‍🧑🏽🧑🏻‍❤️‍💋‍🧑🏾🧑🏻‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏻🧑🏼‍❤️‍💋‍🧑🏽🧑🏼‍❤️‍💋‍🧑🏾🧑🏼‍❤️‍💋‍🧑🏿🧑🏽‍❤️‍💋‍🧑🏻🧑🏽‍❤️‍💋‍🧑🏼🧑🏽‍❤️‍💋‍🧑🏾🧑🏽‍❤️‍💋‍🧑🏿🧑🏾‍❤️‍💋‍🧑🏻🧑🏾‍❤️‍💋‍🧑🏼🧑🏾‍❤️‍💋‍🧑🏽🧑🏾‍❤️‍💋‍🧑🏿🧑🏿‍❤️‍💋‍🧑🏻🧑🏿‍❤️‍💋‍🧑🏼🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏾👩🏻‍❤️‍💋‍👨🏻👩🏻‍❤️‍💋‍👨🏼👩🏻‍❤️‍💋‍👨🏽👩🏻‍❤️‍💋‍👨🏾👩🏻‍❤️‍💋‍👨🏿👩🏼‍❤️‍💋‍👨🏻👩🏼‍❤️‍💋‍👨🏼👩🏼‍❤️‍💋‍👨🏽👩🏼‍❤️‍💋‍👨🏾👩🏼‍❤️‍💋‍👨🏿👩🏽‍❤️‍💋‍👨🏻👩🏽‍❤️‍💋‍👨🏼👩🏽‍❤️‍💋‍👨🏽👩🏽‍❤️‍💋‍👨🏾👩🏽‍❤️‍💋‍👨🏿👩🏾‍❤️‍💋‍👨🏻👩🏾‍❤️‍💋‍👨🏼👩🏾‍❤️‍💋‍👨🏽👩🏾‍❤️‍💋‍👨🏾👩🏾‍❤️‍💋‍👨🏿👩🏿‍❤️‍💋‍👨🏻👩🏿‍❤️‍💋‍👨🏼👩🏿‍❤️‍💋‍👨🏽👩🏿‍❤️‍💋‍👨🏾👩🏿‍❤️‍💋‍👨🏿👨🏻‍❤️‍💋‍👨🏻👨🏻‍❤️‍💋‍👨🏼👨🏻‍❤️‍💋‍👨🏽👨🏻‍❤️‍💋‍👨🏾👨🏻‍❤️‍💋‍👨🏿👨🏼‍❤️‍💋‍👨🏻👨🏼‍❤️‍💋‍👨🏼👨🏼‍❤️‍💋‍👨🏽👨🏼‍❤️‍💋‍👨🏾👨🏼‍❤️‍💋‍👨🏿👨🏽‍❤️‍💋‍👨🏻👨🏽‍❤️‍💋‍👨🏼👨🏽‍❤️‍💋‍👨🏽👨🏽‍❤️‍💋‍👨🏾👨🏽‍❤️‍💋‍👨🏿👨🏾‍❤️‍💋‍👨🏻👨🏾‍❤️‍💋‍👨🏼👨🏾‍❤️‍💋‍👨🏽👨🏾‍❤️‍💋‍👨🏾👨🏾‍❤️‍💋‍👨🏿👨🏿‍❤️‍💋‍👨🏻👨🏿‍❤️‍💋‍👨🏼👨🏿‍❤️‍💋‍👨🏽👨🏿‍❤️‍💋‍👨🏾👨🏿‍❤️‍💋‍👨🏿👩🏻‍❤️‍💋‍👩🏻👩🏻‍❤️‍💋‍👩🏼👩🏻‍❤️‍💋‍👩🏽👩🏻‍❤️‍💋‍👩🏾👩🏻‍❤️‍💋‍👩🏿👩🏼‍❤️‍💋‍👩🏻👩🏼‍❤️‍💋‍👩🏼👩🏼‍❤️‍💋‍👩🏽👩🏼‍❤️‍💋‍👩🏾👩🏼‍❤️‍💋‍👩🏿👩🏽‍❤️‍💋‍👩🏻👩🏽‍❤️‍💋‍👩🏼👩🏽‍❤️‍💋‍👩🏽👩🏽‍❤️‍💋‍👩🏾👩🏽‍❤️‍💋‍👩🏿👩🏾‍❤️‍💋‍👩🏻👩🏾‍❤️‍💋‍👩🏼👩🏾‍❤️‍💋‍👩🏽👩🏾‍❤️‍💋‍👩🏾👩🏾‍❤️‍💋‍👩🏿👩🏿‍❤️‍💋‍👩🏻👩🏿‍❤️‍💋‍👩🏼👩🏿‍❤️‍💋‍👩🏽👩🏿‍❤️‍💋‍👩🏾👩🏿‍❤️‍💋‍👩🏿🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁷󠁬󠁳󠁿🧑🏻‍🤝‍🧑🏻🧑🏻‍🤝‍🧑🏼🧑🏻‍🤝‍🧑🏽🧑🏻‍🤝‍🧑🏾🧑🏻‍🤝‍🧑🏿🧑🏼‍🤝‍🧑🏻🧑🏼‍🤝‍🧑🏼🧑🏼‍🤝‍🧑🏽🧑🏼‍🤝‍🧑🏾🧑🏼‍🤝‍🧑🏿🧑🏽‍🤝‍🧑🏻🧑🏽‍🤝‍🧑🏼🧑🏽‍🤝‍🧑🏽🧑🏽‍🤝‍🧑🏾🧑🏽‍🤝‍🧑🏿🧑🏾‍🤝‍🧑🏻🧑🏾‍🤝‍🧑🏼🧑🏾‍🤝‍🧑🏽🧑🏾‍🤝‍🧑🏾🧑🏾‍🤝‍🧑🏿🧑🏿‍🤝‍🧑🏻🧑🏿‍🤝‍🧑🏼🧑🏿‍🤝‍🧑🏽🧑🏿‍🤝‍🧑🏾🧑🏿‍🤝‍🧑🏿👩🏻‍🤝‍👩🏼👩🏻‍🤝‍👩🏽👩🏻‍🤝‍👩🏾👩🏻‍🤝‍👩🏿👩🏼‍🤝‍👩🏻👩🏼‍🤝‍👩🏽👩🏼‍🤝‍👩🏾👩🏼‍🤝‍👩🏿👩🏽‍🤝‍👩🏻👩🏽‍🤝‍👩🏼👩🏽‍🤝‍👩🏾👩🏽‍🤝‍👩🏿👩🏾‍🤝‍👩🏻👩🏾‍🤝‍👩🏼👩🏾‍🤝‍👩🏽👩🏾‍🤝‍👩🏿👩🏿‍🤝‍👩🏻👩🏿‍🤝‍👩🏼👩🏿‍🤝‍👩🏽👩🏿‍🤝‍👩🏾👩🏻‍🤝‍👨🏼👩🏻‍🤝‍👨🏽👩🏻‍🤝‍👨🏾👩🏻‍🤝‍👨🏿👩🏼‍🤝‍👨🏻👩🏼‍🤝‍👨🏽👩🏼‍🤝‍👨🏾👩🏼‍🤝‍👨🏿👩🏽‍🤝‍👨🏻👩🏽‍🤝‍👨🏼👩🏽‍🤝‍👨🏾👩🏽‍🤝‍👨🏿👩🏾‍🤝‍👨🏻👩🏾‍🤝‍👨🏼👩🏾‍🤝‍👨🏽👩🏾‍🤝‍👨🏿👩🏿‍🤝‍👨🏻👩🏿‍🤝‍👨🏼👩🏿‍🤝‍👨🏽👩🏿‍🤝‍👨🏾👨🏻‍🤝‍👨🏼👨🏻‍🤝‍👨🏽👨🏻‍🤝‍👨🏾👨🏻‍🤝‍👨🏿👨🏼‍🤝‍👨🏻👨🏼‍🤝‍👨🏽👨🏼‍🤝‍👨🏾👨🏼‍🤝‍👨🏿👨🏽‍🤝‍👨🏻👨🏽‍🤝‍👨🏼👨🏽‍🤝‍👨🏾👨🏽‍🤝‍👨🏿👨🏾‍🤝‍👨🏻👨🏾‍🤝‍👨🏼👨🏾‍🤝‍👨🏽👨🏾‍🤝‍👨🏿👨🏿‍🤝‍👨🏻👨🏿‍🤝‍👨🏼👨🏿‍🤝‍👨🏽👨🏿‍🤝‍👨🏾🧑🏻‍❤️‍🧑🏼🧑🏻‍❤️‍🧑🏽🧑🏻‍❤️‍🧑🏾🧑🏻‍❤️‍🧑🏿🧑🏼‍❤️‍🧑🏻🧑🏼‍❤️‍🧑🏽🧑🏼‍❤️‍🧑🏾🧑🏼‍❤️‍🧑🏿🧑🏽‍❤️‍🧑🏻🧑🏽‍❤️‍🧑🏼🧑🏽‍❤️‍🧑🏾🧑🏽‍❤️‍🧑🏿🧑🏾‍❤️‍🧑🏻🧑🏾‍❤️‍🧑🏼🧑🏾‍❤️‍🧑🏽🧑🏾‍❤️‍🧑🏿🧑🏿‍❤️‍🧑🏻🧑🏿‍❤️‍🧑🏼🧑🏿‍❤️‍🧑🏽🧑🏿‍❤️‍🧑🏾👩🏻‍❤️‍👨🏻👩🏻‍❤️‍👨🏼👩🏻‍❤️‍👨🏽👩🏻‍❤️‍👨🏾👩🏻‍❤️‍👨🏿👩🏼‍❤️‍👨🏻👩🏼‍❤️‍👨🏼👩🏼‍❤️‍👨🏽👩🏼‍❤️‍👨🏾👩🏼‍❤️‍👨🏿👩🏽‍❤️‍👨🏻👩🏽‍❤️‍👨🏼👩🏽‍❤️‍👨🏽👩🏽‍❤️‍👨🏾👩🏽‍❤️‍👨🏿👩🏾‍❤️‍👨🏻👩🏾‍❤️‍👨🏼👩🏾‍❤️‍👨🏽👩🏾‍❤️‍👨🏾👩🏾‍❤️‍👨🏿👩🏿‍❤️‍👨🏻👩🏿‍❤️‍👨🏼👩🏿‍❤️‍👨🏽👩🏿‍❤️‍👨🏾👩🏿‍❤️‍👨🏿👨🏻‍❤️‍👨🏻👨🏻‍❤️‍👨🏼👨🏻‍❤️‍👨🏽👨🏻‍❤️‍👨🏾👨🏻‍❤️‍👨🏿👨🏼‍❤️‍👨🏻👨🏼‍❤️‍👨🏼👨🏼‍❤️‍👨🏽👨🏼‍❤️‍👨🏾👨🏼‍❤️‍👨🏿👨🏽‍❤️‍👨🏻👨🏽‍❤️‍👨🏼👨🏽‍❤️‍👨🏽👨🏽‍❤️‍👨🏾👨🏽‍❤️‍👨🏿👨🏾‍❤️‍👨🏻👨🏾‍❤️‍👨🏼👨🏾‍❤️‍👨🏽👨🏾‍❤️‍👨🏾👨🏾‍❤️‍👨🏿👨🏿‍❤️‍👨🏻👨🏿‍❤️‍👨🏼👨🏿‍❤️‍👨🏽👨🏿‍❤️‍👨🏾👨🏿‍❤️‍👨🏿👩🏻‍❤️‍👩🏻👩🏻‍❤️‍👩🏼👩🏻‍❤️‍👩🏽👩🏻‍❤️‍👩🏾👩🏻‍❤️‍👩🏿👩🏼‍❤️‍👩🏻👩🏼‍❤️‍👩🏼👩🏼‍❤️‍👩🏽👩🏼‍❤️‍👩🏾👩🏼‍❤️‍👩🏿👩🏽‍❤️‍👩🏻👩🏽‍❤️‍👩🏼👩🏽‍❤️‍👩🏽👩🏽‍❤️‍👩🏾👩🏽‍❤️‍👩🏿👩🏾‍❤️‍👩🏻👩🏾‍❤️‍👩🏼👩🏾‍❤️‍👩🏽👩🏾‍❤️‍👩🏾👩🏾‍❤️‍👩🏿👩🏿‍❤️‍👩🏻👩🏿‍❤️‍👩🏼👩🏿‍❤️‍👩🏽👩🏿‍❤️‍👩🏾👩🏿‍❤️‍👩🏿👩‍❤️‍💋‍👨👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧🧑‍🤝‍🧑👩‍❤️‍👨👨‍❤️‍👨👩‍❤️‍👩👨‍👩‍👦👨‍👩‍👧👨‍👨‍👦👨‍👨‍👧👩‍👩‍👦👩‍👩‍👧👨‍👦‍👦👨‍👧‍👦👨‍👧‍👧👩‍👦‍👦👩‍👧‍👦👩‍👧‍👧👁️‍🗨️🧔🏻‍♂️🧔🏼‍♂️🧔🏽‍♂️🧔🏾‍♂️🧔🏿‍♂️🧔🏻‍♀️🧔🏼‍♀️🧔🏽‍♀️🧔🏾‍♀️🧔🏿‍♀️👨🏻‍🦰👨🏼‍🦰👨🏽‍🦰👨🏾‍🦰👨🏿‍🦰👨🏻‍🦱👨🏼‍🦱👨🏽‍🦱👨🏾‍🦱👨🏿‍🦱👨🏻‍🦳👨🏼‍🦳👨🏽‍🦳👨🏾‍🦳👨🏿‍🦳👨🏻‍🦲👨🏼‍🦲👨🏽‍🦲👨🏾‍🦲👨🏿‍🦲👩🏻‍🦰👩🏼‍🦰👩🏽‍🦰👩🏾‍🦰👩🏿‍🦰🧑🏻‍🦰🧑🏼‍🦰🧑🏽‍🦰🧑🏾‍🦰🧑🏿‍🦰👩🏻‍🦱👩🏼‍🦱👩🏽‍🦱👩🏾‍🦱👩🏿‍🦱🧑🏻‍🦱🧑🏼‍🦱🧑🏽‍🦱🧑🏾‍🦱🧑🏿‍🦱👩🏻‍🦳👩🏼‍🦳👩🏽‍🦳👩🏾‍🦳👩🏿‍🦳🧑🏻‍🦳🧑🏼‍🦳🧑🏽‍🦳🧑🏾‍🦳🧑🏿‍🦳👩🏻‍🦲👩🏼‍🦲👩🏽‍🦲👩🏾‍🦲👩🏿‍🦲🧑🏻‍🦲🧑🏼‍🦲🧑🏽‍🦲🧑🏾‍🦲🧑🏿‍🦲👱🏻‍♀️👱🏼‍♀️👱🏽‍♀️👱🏾‍♀️👱🏿‍♀️👱🏻‍♂️👱🏼‍♂️👱🏽‍♂️👱🏾‍♂️👱🏿‍♂️🙍🏻‍♂️🙍🏼‍♂️🙍🏽‍♂️🙍🏾‍♂️🙍🏿‍♂️🙍🏻‍♀️🙍🏼‍♀️🙍🏽‍♀️🙍🏾‍♀️🙍🏿‍♀️🙎🏻‍♂️🙎🏼‍♂️🙎🏽‍♂️🙎🏾‍♂️🙎🏿‍♂️🙎🏻‍♀️🙎🏼‍♀️🙎🏽‍♀️🙎🏾‍♀️🙎🏿‍♀️🙅🏻‍♂️🙅🏼‍♂️🙅🏽‍♂️🙅🏾‍♂️🙅🏿‍♂️🙅🏻‍♀️🙅🏼‍♀️🙅🏽‍♀️🙅🏾‍♀️🙅🏿‍♀️🙆🏻‍♂️🙆🏼‍♂️🙆🏽‍♂️🙆🏾‍♂️🙆🏿‍♂️🙆🏻‍♀️🙆🏼‍♀️🙆🏽‍♀️🙆🏾‍♀️🙆🏿‍♀️💁🏻‍♂️💁🏼‍♂️💁🏽‍♂️💁🏾‍♂️💁🏿‍♂️💁🏻‍♀️💁🏼‍♀️💁🏽‍♀️💁🏾‍♀️💁🏿‍♀️🙋🏻‍♂️🙋🏼‍♂️🙋🏽‍♂️🙋🏾‍♂️🙋🏿‍♂️🙋🏻‍♀️🙋🏼‍♀️🙋🏽‍♀️🙋🏾‍♀️🙋🏿‍♀️🧏🏻‍♂️🧏🏼‍♂️🧏🏽‍♂️🧏🏾‍♂️🧏🏿‍♂️🧏🏻‍♀️🧏🏼‍♀️🧏🏽‍♀️🧏🏾‍♀️🧏🏿‍♀️🙇🏻‍♂️🙇🏼‍♂️🙇🏽‍♂️🙇🏾‍♂️🙇🏿‍♂️🙇🏻‍♀️🙇🏼‍♀️🙇🏽‍♀️🙇🏾‍♀️🙇🏿‍♀️🤦🏻‍♂️🤦🏼‍♂️🤦🏽‍♂️🤦🏾‍♂️🤦🏿‍♂️🤦🏻‍♀️🤦🏼‍♀️🤦🏽‍♀️🤦🏾‍♀️🤦🏿‍♀️🤷🏻‍♂️🤷🏼‍♂️🤷🏽‍♂️🤷🏾‍♂️🤷🏿‍♂️🤷🏻‍♀️🤷🏼‍♀️🤷🏽‍♀️🤷🏾‍♀️🤷🏿‍♀️🧑🏻‍⚕️🧑🏼‍⚕️🧑🏽‍⚕️🧑🏾‍⚕️🧑🏿‍⚕️👨🏻‍⚕️👨🏼‍⚕️👨🏽‍⚕️👨🏾‍⚕️👨🏿‍⚕️👩🏻‍⚕️👩🏼‍⚕️👩🏽‍⚕️👩🏾‍⚕️👩🏿‍⚕️🧑🏻‍🎓🧑🏼‍🎓🧑🏽‍🎓🧑🏾‍🎓🧑🏿‍🎓👨🏻‍🎓👨🏼‍🎓👨🏽‍🎓👨🏾‍🎓👨🏿‍🎓👩🏻‍🎓👩🏼‍🎓👩🏽‍🎓👩🏾‍🎓👩🏿‍🎓🧑🏻‍🏫🧑🏼‍🏫🧑🏽‍🏫🧑🏾‍🏫🧑🏿‍🏫👨🏻‍🏫👨🏼‍🏫👨🏽‍🏫👨🏾‍🏫👨🏿‍🏫👩🏻‍🏫👩🏼‍🏫👩🏽‍🏫👩🏾‍🏫👩🏿‍🏫🧑🏻‍⚖️🧑🏼‍⚖️🧑🏽‍⚖️🧑🏾‍⚖️🧑🏿‍⚖️👨🏻‍⚖️👨🏼‍⚖️👨🏽‍⚖️👨🏾‍⚖️👨🏿‍⚖️👩🏻‍⚖️👩🏼‍⚖️👩🏽‍⚖️👩🏾‍⚖️👩🏿‍⚖️🧑🏻‍🌾🧑🏼‍🌾🧑🏽‍🌾🧑🏾‍🌾🧑🏿‍🌾👨🏻‍🌾👨🏼‍🌾👨🏽‍🌾👨🏾‍🌾👨🏿‍🌾👩🏻‍🌾👩🏼‍🌾👩🏽‍🌾👩🏾‍🌾👩🏿‍🌾🧑🏻‍🍳🧑🏼‍🍳🧑🏽‍🍳🧑🏾‍🍳🧑🏿‍🍳👨🏻‍🍳👨🏼‍🍳👨🏽‍🍳👨🏾‍🍳👨🏿‍🍳👩🏻‍🍳👩🏼‍🍳👩🏽‍🍳👩🏾‍🍳👩🏿‍🍳🧑🏻‍🔧🧑🏼‍🔧🧑🏽‍🔧🧑🏾‍🔧🧑🏿‍🔧👨🏻‍🔧👨🏼‍🔧👨🏽‍🔧👨🏾‍🔧👨🏿‍🔧👩🏻‍🔧👩🏼‍🔧👩🏽‍🔧👩🏾‍🔧👩🏿‍🔧🧑🏻‍🏭🧑🏼‍🏭🧑🏽‍🏭🧑🏾‍🏭🧑🏿‍🏭👨🏻‍🏭👨🏼‍🏭👨🏽‍🏭👨🏾‍🏭👨🏿‍🏭👩🏻‍🏭👩🏼‍🏭👩🏽‍🏭👩🏾‍🏭👩🏿‍🏭🧑🏻‍💼🧑🏼‍💼🧑🏽‍💼🧑🏾‍💼🧑🏿‍💼👨🏻‍💼👨🏼‍💼👨🏽‍💼👨🏾‍💼👨🏿‍💼👩🏻‍💼👩🏼‍💼👩🏽‍💼👩🏾‍💼👩🏿‍💼🧑🏻‍🔬🧑🏼‍🔬🧑🏽‍🔬🧑🏾‍🔬🧑🏿‍🔬👨🏻‍🔬👨🏼‍🔬👨🏽‍🔬👨🏾‍🔬👨🏿‍🔬👩🏻‍🔬👩🏼‍🔬👩🏽‍🔬👩🏾‍🔬👩🏿‍🔬🧑🏻‍💻🧑🏼‍💻🧑🏽‍💻🧑🏾‍💻🧑🏿‍💻👨🏻‍💻👨🏼‍💻👨🏽‍💻👨🏾‍💻👨🏿‍💻👩🏻‍💻👩🏼‍💻👩🏽‍💻👩🏾‍💻👩🏿‍💻🧑🏻‍🎤🧑🏼‍🎤🧑🏽‍🎤🧑🏾‍🎤🧑🏿‍🎤👨🏻‍🎤👨🏼‍🎤👨🏽‍🎤👨🏾‍🎤👨🏿‍🎤👩🏻‍🎤👩🏼‍🎤👩🏽‍🎤👩🏾‍🎤👩🏿‍🎤🧑🏻‍🎨🧑🏼‍🎨🧑🏽‍🎨🧑🏾‍🎨🧑🏿‍🎨👨🏻‍🎨👨🏼‍🎨👨🏽‍🎨👨🏾‍🎨👨🏿‍🎨👩🏻‍🎨👩🏼‍🎨👩🏽‍🎨👩🏾‍🎨👩🏿‍🎨🧑🏻‍✈️🧑🏼‍✈️🧑🏽‍✈️🧑🏾‍✈️🧑🏿‍✈️👨🏻‍✈️👨🏼‍✈️👨🏽‍✈️👨🏾‍✈️👨🏿‍✈️👩🏻‍✈️👩🏼‍✈️👩🏽‍✈️👩🏾‍✈️👩🏿‍✈️🧑🏻‍🚀🧑🏼‍🚀🧑🏽‍🚀🧑🏾‍🚀🧑🏿‍🚀👨🏻‍🚀👨🏼‍🚀👨🏽‍🚀👨🏾‍🚀👨🏿‍🚀👩🏻‍🚀👩🏼‍🚀👩🏽‍🚀👩🏾‍🚀👩🏿‍🚀🧑🏻‍🚒🧑🏼‍🚒🧑🏽‍🚒🧑🏾‍🚒🧑🏿‍🚒👨🏻‍🚒👨🏼‍🚒👨🏽‍🚒👨🏾‍🚒👨🏿‍🚒👩🏻‍🚒👩🏼‍🚒👩🏽‍🚒👩🏾‍🚒👩🏿‍🚒👮🏻‍♂️👮🏼‍♂️👮🏽‍♂️👮🏾‍♂️👮🏿‍♂️👮🏻‍♀️👮🏼‍♀️👮🏽‍♀️👮🏾‍♀️👮🏿‍♀️🕵🏻‍♂️🕵🏼‍♂️🕵🏽‍♂️🕵🏾‍♂️🕵🏿‍♂️🕵🏻‍♀️🕵🏼‍♀️🕵🏽‍♀️🕵🏾‍♀️🕵🏿‍♀️💂🏻‍♂️💂🏼‍♂️💂🏽‍♂️💂🏾‍♂️💂🏿‍♂️💂🏻‍♀️💂🏼‍♀️💂🏽‍♀️💂🏾‍♀️💂🏿‍♀️👷🏻‍♂️👷🏼‍♂️👷🏽‍♂️👷🏾‍♂️👷🏿‍♂️👷🏻‍♀️👷🏼‍♀️👷🏽‍♀️👷🏾‍♀️👷🏿‍♀️👳🏻‍♂️👳🏼‍♂️👳🏽‍♂️👳🏾‍♂️👳🏿‍♂️👳🏻‍♀️👳🏼‍♀️👳🏽‍♀️👳🏾‍♀️👳🏿‍♀️🤵🏻‍♂️🤵🏼‍♂️🤵🏽‍♂️🤵🏾‍♂️🤵🏿‍♂️🤵🏻‍♀️🤵🏼‍♀️🤵🏽‍♀️🤵🏾‍♀️🤵🏿‍♀️👰🏻‍♂️👰🏼‍♂️👰🏽‍♂️👰🏾‍♂️👰🏿‍♂️👰🏻‍♀️👰🏼‍♀️👰🏽‍♀️👰🏾‍♀️👰🏿‍♀️👩🏻‍🍼👩🏼‍🍼👩🏽‍🍼👩🏾‍🍼👩🏿‍🍼👨🏻‍🍼👨🏼‍🍼👨🏽‍🍼👨🏾‍🍼👨🏿‍🍼🧑🏻‍🍼🧑🏼‍🍼🧑🏽‍🍼🧑🏾‍🍼🧑🏿‍🍼🧑🏻‍🎄🧑🏼‍🎄🧑🏽‍🎄🧑🏾‍🎄🧑🏿‍🎄🦸🏻‍♂️🦸🏼‍♂️🦸🏽‍♂️🦸🏾‍♂️🦸🏿‍♂️🦸🏻‍♀️🦸🏼‍♀️🦸🏽‍♀️🦸🏾‍♀️🦸🏿‍♀️🦹🏻‍♂️🦹🏼‍♂️🦹🏽‍♂️🦹🏾‍♂️🦹🏿‍♂️🦹🏻‍♀️🦹🏼‍♀️🦹🏽‍♀️🦹🏾‍♀️🦹🏿‍♀️🧙🏻‍♂️🧙🏼‍♂️🧙🏽‍♂️🧙🏾‍♂️🧙🏿‍♂️🧙🏻‍♀️🧙🏼‍♀️🧙🏽‍♀️🧙🏾‍♀️🧙🏿‍♀️🧚🏻‍♂️🧚🏼‍♂️🧚🏽‍♂️🧚🏾‍♂️🧚🏿‍♂️🧚🏻‍♀️🧚🏼‍♀️🧚🏽‍♀️🧚🏾‍♀️🧚🏿‍♀️🧛🏻‍♂️🧛🏼‍♂️🧛🏽‍♂️🧛🏾‍♂️🧛🏿‍♂️🧛🏻‍♀️🧛🏼‍♀️🧛🏽‍♀️🧛🏾‍♀️🧛🏿‍♀️🧜🏻‍♂️🧜🏼‍♂️🧜🏽‍♂️🧜🏾‍♂️🧜🏿‍♂️🧜🏻‍♀️🧜🏼‍♀️🧜🏽‍♀️🧜🏾‍♀️🧜🏿‍♀️🧝🏻‍♂️🧝🏼‍♂️🧝🏽‍♂️🧝🏾‍♂️🧝🏿‍♂️🧝🏻‍♀️🧝🏼‍♀️🧝🏽‍♀️🧝🏾‍♀️🧝🏿‍♀️💆🏻‍♂️💆🏼‍♂️💆🏽‍♂️💆🏾‍♂️💆🏿‍♂️💆🏻‍♀️💆🏼‍♀️💆🏽‍♀️💆🏾‍♀️💆🏿‍♀️💇🏻‍♂️💇🏼‍♂️💇🏽‍♂️💇🏾‍♂️💇🏿‍♂️💇🏻‍♀️💇🏼‍♀️💇🏽‍♀️💇🏾‍♀️💇🏿‍♀️🚶🏻‍♂️🚶🏼‍♂️🚶🏽‍♂️🚶🏾‍♂️🚶🏿‍♂️🚶🏻‍♀️🚶🏼‍♀️🚶🏽‍♀️🚶🏾‍♀️🚶🏿‍♀️🧍🏻‍♂️🧍🏼‍♂️🧍🏽‍♂️🧍🏾‍♂️🧍🏿‍♂️🧍🏻‍♀️🧍🏼‍♀️🧍🏽‍♀️🧍🏾‍♀️🧍🏿‍♀️🧎🏻‍♂️🧎🏼‍♂️🧎🏽‍♂️🧎🏾‍♂️🧎🏿‍♂️🧎🏻‍♀️🧎🏼‍♀️🧎🏽‍♀️🧎🏾‍♀️🧎🏿‍♀️🧑🏻‍🦯🧑🏼‍🦯🧑🏽‍🦯🧑🏾‍🦯🧑🏿‍🦯👨🏻‍🦯👨🏼‍🦯👨🏽‍🦯👨🏾‍🦯👨🏿‍🦯👩🏻‍🦯👩🏼‍🦯👩🏽‍🦯👩🏾‍🦯👩🏿‍🦯🧑🏻‍🦼🧑🏼‍🦼🧑🏽‍🦼🧑🏾‍🦼🧑🏿‍🦼👨🏻‍🦼👨🏼‍🦼👨🏽‍🦼👨🏾‍🦼👨🏿‍🦼👩🏻‍🦼👩🏼‍🦼👩🏽‍🦼👩🏾‍🦼👩🏿‍🦼🧑🏻‍🦽🧑🏼‍🦽🧑🏽‍🦽🧑🏾‍🦽🧑🏿‍🦽👨🏻‍🦽👨🏼‍🦽👨🏽‍🦽👨🏾‍🦽👨🏿‍🦽👩🏻‍🦽👩🏼‍🦽👩🏽‍🦽👩🏾‍🦽👩🏿‍🦽🏃🏻‍♂️🏃🏼‍♂️🏃🏽‍♂️🏃🏾‍♂️🏃🏿‍♂️🏃🏻‍♀️🏃🏼‍♀️🏃🏽‍♀️🏃🏾‍♀️🏃🏿‍♀️🧖🏻‍♂️🧖🏼‍♂️🧖🏽‍♂️🧖🏾‍♂️🧖🏿‍♂️🧖🏻‍♀️🧖🏼‍♀️🧖🏽‍♀️🧖🏾‍♀️🧖🏿‍♀️🧗🏻‍♂️🧗🏼‍♂️🧗🏽‍♂️🧗🏾‍♂️🧗🏿‍♂️🧗🏻‍♀️🧗🏼‍♀️🧗🏽‍♀️🧗🏾‍♀️🧗🏿‍♀️🏌🏻‍♂️🏌🏼‍♂️🏌🏽‍♂️🏌🏾‍♂️🏌🏿‍♂️🏌🏻‍♀️🏌🏼‍♀️🏌🏽‍♀️🏌🏾‍♀️🏌🏿‍♀️🏄🏻‍♂️🏄🏼‍♂️🏄🏽‍♂️🏄🏾‍♂️🏄🏿‍♂️🏄🏻‍♀️🏄🏼‍♀️🏄🏽‍♀️🏄🏾‍♀️🏄🏿‍♀️🚣🏻‍♂️🚣🏼‍♂️🚣🏽‍♂️🚣🏾‍♂️🚣🏿‍♂️🚣🏻‍♀️🚣🏼‍♀️🚣🏽‍♀️🚣🏾‍♀️🚣🏿‍♀️🏊🏻‍♂️🏊🏼‍♂️🏊🏽‍♂️🏊🏾‍♂️🏊🏿‍♂️🏊🏻‍♀️🏊🏼‍♀️🏊🏽‍♀️🏊🏾‍♀️🏊🏿‍♀️🏋🏻‍♂️🏋🏼‍♂️🏋🏽‍♂️🏋🏾‍♂️🏋🏿‍♂️🏋🏻‍♀️🏋🏼‍♀️🏋🏽‍♀️🏋🏾‍♀️🏋🏿‍♀️🚴🏻‍♂️🚴🏼‍♂️🚴🏽‍♂️🚴🏾‍♂️🚴🏿‍♂️🚴🏻‍♀️🚴🏼‍♀️🚴🏽‍♀️🚴🏾‍♀️🚴🏿‍♀️🚵🏻‍♂️🚵🏼‍♂️🚵🏽‍♂️🚵🏾‍♂️🚵🏿‍♂️🚵🏻‍♀️🚵🏼‍♀️🚵🏽‍♀️🚵🏾‍♀️🚵🏿‍♀️🤸🏻‍♂️🤸🏼‍♂️🤸🏽‍♂️🤸🏾‍♂️🤸🏿‍♂️🤸🏻‍♀️🤸🏼‍♀️🤸🏽‍♀️🤸🏾‍♀️🤸🏿‍♀️🤽🏻‍♂️🤽🏼‍♂️🤽🏽‍♂️🤽🏾‍♂️🤽🏿‍♂️🤽🏻‍♀️🤽🏼‍♀️🤽🏽‍♀️🤽🏾‍♀️🤽🏿‍♀️🤾🏻‍♂️🤾🏼‍♂️🤾🏽‍♂️🤾🏾‍♂️🤾🏿‍♂️🤾🏻‍♀️🤾🏼‍♀️🤾🏽‍♀️🤾🏾‍♀️🤾🏿‍♀️🤹🏻‍♂️🤹🏼‍♂️🤹🏽‍♂️🤹🏾‍♂️🤹🏿‍♂️🤹🏻‍♀️🤹🏼‍♀️🤹🏽‍♀️🤹🏾‍♀️🤹🏿‍♀️🧘🏻‍♂️🧘🏼‍♂️🧘🏽‍♂️🧘🏾‍♂️🧘🏿‍♂️🧘🏻‍♀️🧘🏼‍♀️🧘🏽‍♀️🧘🏾‍♀️🧘🏿‍♀️😶‍🌫️🕵️‍♂️🕵️‍♀️🏌️‍♂️🏌️‍♀️🏋️‍♂️🏋️‍♀️🏳️‍🌈🏳️‍⚧️⛹🏻‍♂️⛹🏼‍♂️⛹🏽‍♂️⛹🏾‍♂️⛹🏿‍♂️⛹🏻‍♀️⛹🏼‍♀️⛹🏽‍♀️⛹🏾‍♀️⛹🏿‍♀️😮‍💨😵‍💫❤️‍🔥❤️‍🩹🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🙍‍♂️🙍‍♀️🙎‍♂️🙎‍♀️🙅‍♂️🙅‍♀️🙆‍♂️🙆‍♀️💁‍♂️💁‍♀️🙋‍♂️🙋‍♀️🧏‍♂️🧏‍♀️🙇‍♂️🙇‍♀️🤦‍♂️🤦‍♀️🤷‍♂️🤷‍♀️🧑‍⚕️👨‍⚕️👩‍⚕️🧑‍🎓👨‍🎓👩‍🎓🧑‍🏫👨‍🏫👩‍🏫🧑‍⚖️👨‍⚖️👩‍⚖️🧑‍🌾👨‍🌾👩‍🌾🧑‍🍳👨‍🍳👩‍🍳🧑‍🔧👨‍🔧👩‍🔧🧑‍🏭👨‍🏭👩‍🏭🧑‍💼👨‍💼👩‍💼🧑‍🔬👨‍🔬👩‍🔬🧑‍💻👨‍💻👩‍💻🧑‍🎤👨‍🎤👩‍🎤🧑‍🎨👨‍🎨👩‍🎨🧑‍✈️👨‍✈️👩‍✈️🧑‍🚀👨‍🚀👩‍🚀🧑‍🚒👨‍🚒👩‍🚒👮‍♂️👮‍♀️💂‍♂️💂‍♀️👷‍♂️👷‍♀️👳‍♂️👳‍♀️🤵‍♂️🤵‍♀️👰‍♂️👰‍♀️👩‍🍼👨‍🍼🧑‍🍼🧑‍🎄🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️🧙‍♂️🧙‍♀️🧚‍♂️🧚‍♀️🧛‍♂️🧛‍♀️🧜‍♂️🧜‍♀️🧝‍♂️🧝‍♀️🧞‍♂️🧞‍♀️🧟‍♂️🧟‍♀️💆‍♂️💆‍♀️💇‍♂️💇‍♀️🚶‍♂️🚶‍♀️🧍‍♂️🧍‍♀️🧎‍♂️🧎‍♀️🧑‍🦯👨‍🦯👩‍🦯🧑‍🦼👨‍🦼👩‍🦼🧑‍🦽👨‍🦽👩‍🦽🏃‍♂️🏃‍♀️👯‍♂️👯‍♀️🧖‍♂️🧖‍♀️🧗‍♂️🧗‍♀️🏄‍♂️🏄‍♀️🚣‍♂️🚣‍♀️🏊‍♂️🏊‍♀️⛹️‍♂️⛹️‍♀️🚴‍♂️🚴‍♀️🚵‍♂️🚵‍♀️🤸‍♂️🤸‍♀️🤼‍♂️🤼‍♀️🤽‍♂️🤽‍♀️🤾‍♂️🤾‍♀️🤹‍♂️🤹‍♀️🧘‍♂️🧘‍♀️👨‍👦👨‍👧👩‍👦👩‍👧🐕‍🦺🐻‍❄️🏴‍☠️🐈‍⬛🇦🇨🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇶🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇱🇧🇲🇧🇳🇧🇴🇧🇶🇧🇷🇧🇸🇧🇹🇧🇻🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇵🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇬🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇦🇪🇨🇪🇪🇪🇬🇪🇭🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇰🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇫🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇵🇬🇶🇬🇷🇬🇸🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇲🇭🇳🇭🇷🇭🇹🇭🇺🇮🇨🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇴🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇫🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇶🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇨🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇲🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇪🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇧🇸🇨🇸🇩🇸🇪🇸🇬🇸🇭🇸🇮🇸🇯🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇦🇹🇨🇹🇩🇹🇫🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇺🇦🇺🇬🇺🇲🇺🇳🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇫🇼🇸🇽🇰🇾🇪🇾🇹🇿🇦🇿🇲🇿🇼👋🏻👋🏼👋🏽👋🏾👋🏿🤚🏻🤚🏼🤚🏽🤚🏾🤚🏿🖐🏻🖐🏼🖐🏽🖐🏾🖐🏿🖖🏻🖖🏼🖖🏽🖖🏾🖖🏿👌🏻👌🏼👌🏽👌🏾👌🏿🤌🏻🤌🏼🤌🏽🤌🏾🤌🏿🤏🏻🤏🏼🤏🏽🤏🏾🤏🏿🤞🏻🤞🏼🤞🏽🤞🏾🤞🏿🤟🏻🤟🏼🤟🏽🤟🏾🤟🏿🤘🏻🤘🏼🤘🏽🤘🏾🤘🏿🤙🏻🤙🏼🤙🏽🤙🏾🤙🏿👈🏻👈🏼👈🏽👈🏾👈🏿👉🏻👉🏼👉🏽👉🏾👉🏿👆🏻👆🏼👆🏽👆🏾👆🏿🖕🏻🖕🏼🖕🏽🖕🏾🖕🏿👇🏻👇🏼👇🏽👇🏾👇🏿👍🏻👍🏼👍🏽👍🏾👍🏿👎🏻👎🏼👎🏽👎🏾👎🏿👊🏻👊🏼👊🏽👊🏾👊🏿🤛🏻🤛🏼🤛🏽🤛🏾🤛🏿🤜🏻🤜🏼🤜🏽🤜🏾🤜🏿👏🏻👏🏼👏🏽👏🏾👏🏿🙌🏻🙌🏼🙌🏽🙌🏾🙌🏿👐🏻👐🏼👐🏽👐🏾👐🏿🤲🏻🤲🏼🤲🏽🤲🏾🤲🏿🙏🏻🙏🏼🙏🏽🙏🏾🙏🏿💅🏻💅🏼💅🏽💅🏾💅🏿🤳🏻🤳🏼🤳🏽🤳🏾🤳🏿💪🏻💪🏼💪🏽💪🏾💪🏿🦵🏻🦵🏼🦵🏽🦵🏾🦵🏿🦶🏻🦶🏼🦶🏽🦶🏾🦶🏿👂🏻👂🏼👂🏽👂🏾👂🏿🦻🏻🦻🏼🦻🏽🦻🏾🦻🏿👃🏻👃🏼👃🏽👃🏾👃🏿👶🏻👶🏼👶🏽👶🏾👶🏿🧒🏻🧒🏼🧒🏽🧒🏾🧒🏿👦🏻👦🏼👦🏽👦🏾👦🏿👧🏻👧🏼👧🏽👧🏾👧🏿🧑🏻🧑🏼🧑🏽🧑🏾🧑🏿👱🏻👱🏼👱🏽👱🏾👱🏿👨🏻👨🏼👨🏽👨🏾👨🏿🧔🏻🧔🏼🧔🏽🧔🏾🧔🏿👩🏻👩🏼👩🏽👩🏾👩🏿🧓🏻🧓🏼🧓🏽🧓🏾🧓🏿👴🏻👴🏼👴🏽👴🏾👴🏿👵🏻👵🏼👵🏽👵🏾👵🏿🙍🏻🙍🏼🙍🏽🙍🏾🙍🏿🙎🏻🙎🏼🙎🏽🙎🏾🙎🏿🙅🏻🙅🏼🙅🏽🙅🏾🙅🏿🙆🏻🙆🏼🙆🏽🙆🏾🙆🏿💁🏻💁🏼💁🏽💁🏾💁🏿🙋🏻🙋🏼🙋🏽🙋🏾🙋🏿🧏🏻🧏🏼🧏🏽🧏🏾🧏🏿🙇🏻🙇🏼🙇🏽🙇🏾🙇🏿🤦🏻🤦🏼🤦🏽🤦🏾🤦🏿🤷🏻🤷🏼🤷🏽🤷🏾🤷🏿👮🏻👮🏼👮🏽👮🏾👮🏿🕵🏻🕵🏼🕵🏽🕵🏾🕵🏿💂🏻💂🏼💂🏽💂🏾💂🏿🥷🏻🥷🏼🥷🏽🥷🏾🥷🏿👷🏻👷🏼👷🏽👷🏾👷🏿🤴🏻🤴🏼🤴🏽🤴🏾🤴🏿👸🏻👸🏼👸🏽👸🏾👸🏿👳🏻👳🏼👳🏽👳🏾👳🏿👲🏻👲🏼👲🏽👲🏾👲🏿🧕🏻🧕🏼🧕🏽🧕🏾🧕🏿🤵🏻🤵🏼🤵🏽🤵🏾🤵🏿👰🏻👰🏼👰🏽👰🏾👰🏿🤰🏻🤰🏼🤰🏽🤰🏾🤰🏿🤱🏻🤱🏼🤱🏽🤱🏾🤱🏿👼🏻👼🏼👼🏽👼🏾👼🏿🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿🤶🏻🤶🏼🤶🏽🤶🏾🤶🏿🦸🏻🦸🏼🦸🏽🦸🏾🦸🏿🦹🏻🦹🏼🦹🏽🦹🏾🦹🏿🧙🏻🧙🏼🧙🏽🧙🏾🧙🏿🧚🏻🧚🏼🧚🏽🧚🏾🧚🏿🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿🧜🏻🧜🏼🧜🏽🧜🏾🧜🏿🧝🏻🧝🏼🧝🏽🧝🏾🧝🏿💆🏻💆🏼💆🏽💆🏾💆🏿💇🏻💇🏼💇🏽💇🏾💇🏿🚶🏻🚶🏼🚶🏽🚶🏾🚶🏿🧍🏻🧍🏼🧍🏽🧍🏾🧍🏿🧎🏻🧎🏼🧎🏽🧎🏾🧎🏿🏃🏻🏃🏼🏃🏽🏃🏾🏃🏿💃🏻💃🏼💃🏽💃🏾💃🏿🕺🏻🕺🏼🕺🏽🕺🏾🕺🏿🕴🏻🕴🏼🕴🏽🕴🏾🕴🏿🧖🏻🧖🏼🧖🏽🧖🏾🧖🏿🧗🏻🧗🏼🧗🏽🧗🏾🧗🏿🏇🏻🏇🏼🏇🏽🏇🏾🏇🏿🏂🏻🏂🏼🏂🏽🏂🏾🏂🏿🏌🏻🏌🏼🏌🏽🏌🏾🏌🏿🏄🏻🏄🏼🏄🏽🏄🏾🏄🏿🚣🏻🚣🏼🚣🏽🚣🏾🚣🏿🏊🏻🏊🏼🏊🏽🏊🏾🏊🏿🏋🏻🏋🏼🏋🏽🏋🏾🏋🏿🚴🏻🚴🏼🚴🏽🚴🏾🚴🏿🚵🏻🚵🏼🚵🏽🚵🏾🚵🏿🤸🏻🤸🏼🤸🏽🤸🏾🤸🏿🤽🏻🤽🏼🤽🏽🤽🏾🤽🏿🤾🏻🤾🏼🤾🏽🤾🏾🤾🏿🤹🏻🤹🏼🤹🏽🤹🏾🤹🏿🧘🏻🧘🏼🧘🏽🧘🏾🧘🏿🛀🏻🛀🏼🛀🏽🛀🏾🛀🏿🛌🏻🛌🏼🛌🏽🛌🏾🛌🏿👭🏻👭🏼👭🏽👭🏾👭🏿👫🏻👫🏼👫🏽👫🏾👫🏿👬🏻👬🏼👬🏽👬🏾👬🏿💏🏻💏🏼💏🏽💏🏾💏🏿💑🏻💑🏼💑🏽💑🏾💑🏿#️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣✋🏻✋🏼✋🏽✋🏾✋🏿✌🏻✌🏼✌🏽✌🏾✌🏿☝🏻☝🏼☝🏽☝🏾☝🏿✊🏻✊🏼✊🏽✊🏾✊🏿✍🏻✍🏼✍🏽✍🏾✍🏿⛹🏻⛹🏼⛹🏽⛹🏾⛹🏿😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗😚😙🥲😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😏😒🙄😬🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵🤯🤠🥳🥸😎🤓🧐😕😟🙁😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💌💘💝💖💗💓💞💕💟💔🧡💛💚💙💜🤎🖤🤍💯💢💥💫💦💨🕳💣💬🗨🗯💭💤👋🤚🖐🖖👌🤌🤏🤞🤟🤘🤙👈👉👆🖕👇👍👎👊🤛🤜👏🙌👐🤲🤝🙏💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁👅👄👶🧒👦👧🧑👱👨🧔👩🧓👴👵🙍🙎🙅🙆💁🙋🧏🙇🤦🤷👮🕵💂🥷👷🤴👸👳👲🧕🤵👰🤰🤱👼🎅🤶🦸🦹🧙🧚🧛🧜🧝🧞🧟💆💇🚶🧍🧎🏃💃🕺🕴👯🧖🧗🤺🏇🏂🏌🏄🚣🏊🏋🚴🚵🤸🤼🤽🤾🤹🧘🛀🛌👭👫👬💏💑👪🗣👤👥🫂👣🦰🦱🦳🦲🐵🐒🦍🦧🐶🐕🦮🐩🐺🦊🦝🐱🐈🦁🐯🐅🐆🐴🐎🦄🦓🦌🦬🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿🦫🦔🦇🐻🐨🐼🦥🦦🦨🦘🦡🐾🦃🐔🐓🐣🐤🐥🐦🐧🕊🦅🦆🦢🦉🦤🪶🦩🦚🦜🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦭🐟🐠🐡🦈🐙🐚🐌🦋🐛🐜🐝🪲🐞🦗🪳🕷🕸🦂🦟🪰🪱🦠💐🌸💮🏵🌹🥀🌺🌻🌼🌷🌱🪴🌲🌳🌴🌵🌾🌿🍀🍁🍂🍃🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥🥑🍆🥔🥕🌽🌶🫑🥒🥬🥦🧄🧅🍄🥜🌰🍞🥐🥖🫓🥨🥯🥞🧇🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🫔🥙🧆🥚🍳🥘🍲🫕🥣🥗🍿🧈🧂🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🥮🍡🥟🥠🥡🦀🦞🦐🦑🦪🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🍬🍭🍮🍯🍼🥛🫖🍵🍶🍾🍷🍸🍹🍺🍻🥂🥃🥤🧋🧃🧉🧊🥢🍽🍴🥄🔪🏺🌍🌎🌏🌐🗺🗾🧭🏔🌋🗻🏕🏖🏜🏝🏞🏟🏛🏗🧱🪨🪵🛖🏘🏚🏠🏡🏢🏣🏤🏥🏦🏨🏩🏪🏫🏬🏭🏯🏰💒🗼🗽🕌🛕🕍🕋🌁🌃🏙🌄🌅🌆🌇🌉🎠🎡🎢💈🎪🚂🚃🚄🚅🚆🚇🚈🚉🚊🚝🚞🚋🚌🚍🚎🚐🚑🚒🚓🚔🚕🚖🚗🚘🚙🛻🚚🚛🚜🏎🏍🛵🦽🦼🛺🚲🛴🛹🛼🚏🛣🛤🛢🚨🚥🚦🛑🚧🛶🚤🛳🛥🚢🛩🛫🛬🪂💺🚁🚟🚠🚡🛰🚀🛸🛎🧳🕰🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕗🕣🕘🕤🕙🕥🕚🕦🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜🌡🌝🌞🪐🌟🌠🌌🌤🌥🌦🌧🌨🌩🌪🌫🌬🌀🌈🌂🔥💧🌊🎃🎄🎆🎇🧨🎈🎉🎊🎋🎍🎎🎏🎐🎑🧧🎀🎁🎗🎟🎫🎖🏆🏅🥇🥈🥉🥎🏀🏐🏈🏉🎾🥏🎳🏏🏑🏒🥍🏓🏸🥊🥋🥅🎣🤿🎽🎿🛷🥌🎯🪀🪁🎱🔮🪄🧿🎮🕹🎰🎲🧩🧸🪅🪆🃏🀄🎴🎭🖼🎨🧵🪡🧶🪢👓🕶🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚👛👜👝🛍🎒🩴👞👟🥾🥿👠👡🩰👢👑👒🎩🎓🧢🪖📿💄💍💎🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙🎚🎛🎤🎧📻🎷🪗🎸🎹🎺🎻🪕🥁🪘📱📲📞📟📠🔋🔌💻🖥🖨🖱🖲💽💾💿📀🧮🎥🎞📽🎬📺📷📸📹📼🔍🔎🕯💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞📑🔖🏷💰🪙💴💵💶💷💸💳🧾💹📧📨📩📤📥📦📫📪📬📭📮🗳🖋🖊🖌🖍📝💼📁📂🗂📅📆🗒🗓📇📈📉📊📋📌📍📎🖇📏📐🗃🗄🗑🔒🔓🔏🔐🔑🗝🔨🪓🛠🗡🔫🪃🏹🛡🪚🔧🪛🔩🗜🦯🔗🪝🧰🧲🪜🧪🧫🧬🔬🔭📡💉🩸💊🩹🩺🚪🛗🪞🪟🛏🛋🪑🚽🪠🚿🛁🪤🪒🧴🧷🧹🧺🧻🪣🧼🪥🧽🧯🛒🚬🪦🗿🪧🏧🚮🚰🚹🚺🚻🚼🚾🛂🛃🛄🛅🚸🚫🚳🚭🚯🚱🚷📵🔞🔃🔄🔙🔚🔛🔜🔝🛐🕉🕎🔯🔀🔁🔂🔼🔽🎦🔅🔆📶📳📴💱💲🔱📛🔰🔟🔠🔡🔢🔣🔤🅰🆎🅱🆑🆒🆓🆔🆕🆖🅾🆗🅿🆘🆙🆚🈁🈂🈷🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳🈺🈵🔴🟠🟡🟢🔵🟣🟤🟥🟧🟨🟩🟦🟪🟫🔶🔷🔸🔹🔺🔻💠🔘🔳🔲🏁🚩🎌🏴🏳🏻🏼🏽🏾🏿☺☹☠❣❤✋✌☝✊✍⛷⛹☘☕⛰⛪⛩⛲⛺♨⛽⚓⛵⛴✈⌛⏳⌚⏰⏱⏲☀⭐☁⛅⛈☂☔⛱⚡❄☃⛄☄✨⚽⚾⛳⛸♠♥♦♣♟⛑☎⌨✉✏✒✂⛏⚒⚔⚙⚖⛓⚗⚰⚱♿⚠⛔☢☣⬆↗➡↘⬇↙⬅↖↕↔↩↪⤴⤵⚛✡☸☯✝☦☪☮♈♉♊♋♌♍♎♏♐♑♒♓⛎▶⏩⏭⏯◀⏪⏮⏫⏬⏸⏹⏺⏏♀♂⚧✖➕➖➗♾‼⁉❓❔❕❗〰⚕♻⚜⭕✅☑✔❌❎➰➿〽✳✴❇©®™ℹⓂ㊗㊙⚫⚪⬛⬜◼◻◾◽▪▫.op";
  const result = findCharacterSet(getLabel(emojis));
  t.is(result, characterSet.EMOJI);
})
## Classes

<dl>
<dt><a href="#MyClass">MyClass</a></dt>
<dd><p>MyClass class</p>
</dd>
<dt><a href="#MyClassHelperOne">MyClassHelperOne</a></dt>
<dd><p>MyClassHelperOne class
Helper class for MyClass</p>
</dd>
<dt><a href="#MyClassHelperTwo">MyClassHelperTwo</a></dt>
<dd><p>MyClassHelperTwo class
Helper class for MyClass</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Foobar">Foobar</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="MyClass"></a>

## MyClass
MyClass class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| myString | <code>String</code> | a String |
| myArray | <code>Array.&lt;String&gt;</code> | an Array of String |
| myFoobar | <code>[Foobar](#Foobar)</code> | a Foobar object |
| myClassHelperOne | <code>[MyClassHelperOne](#MyClassHelperOne)</code> | an instance of MyClassHelperOne |
| myClassHelperTwo | <code>[MyClassHelperTwo](#MyClassHelperTwo)</code> | an instance of MyClassHelperTwo |


* [MyClass](#MyClass)
    * [new MyClass(one, two)](#new_MyClass_new)
    * [.myMethodOneOriginal(one, two)](#MyClass+myMethodOneOriginal) ⇒ <code>Number</code>
    * [.myMethodOne(one, two)](#MyClass+myMethodOne) ⇒ <code>Number</code>
    * [.myMethodTwoOriginal(one, two)](#MyClass+myMethodTwoOriginal) ⇒ <code>String</code>
    * [.myMethodTwo(one, two)](#MyClass+myMethodTwo) ⇒ <code>String</code>

<a name="new_MyClass_new"></a>

### new MyClass(one, two)
Create a new MyClass instance


| Param | Type | Description |
| --- | --- | --- |
| one | <code>String</code> | a String |
| two | <code>String</code> | another String |

<a name="MyClass+myMethodOneOriginal"></a>

### myClass.myMethodOneOriginal(one, two) ⇒ <code>Number</code>
Return sum of two param (standard)

**Kind**: instance method of <code>[MyClass](#MyClass)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Number</code> | a Number |
| two | <code>Number</code> | another Number |

**Example**  
```js
// return 3const myClass = new MyClass('foo', 'bar');return myClass.myMethodOneOriginal(1, 2);
```
<a name="MyClass+myMethodOne"></a>

### myClass.myMethodOne(one, two) ⇒ <code>Number</code>
Return sum of two param

**Kind**: instance method of <code>[MyClass](#MyClass)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Number</code> | a Number |
| two | <code>Number</code> | another Number |

**Example**  
```js
// return 3const myClass = new MyClass('foo', 'bar');return myClass.myMethodOneOriginal(1, 2);
```
<a name="MyClass+myMethodTwoOriginal"></a>

### myClass.myMethodTwoOriginal(one, two) ⇒ <code>String</code>
Return class property myString (standard)

**Kind**: instance method of <code>[MyClass](#MyClass)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Number</code> | a Number |
| two | <code>Number</code> | another Number |

**Example**  
```js
// return 'foo'const myClass = new MyClass('foo', 'bar');return myClass.myMethodTwoOriginal(1, 2);
```
<a name="MyClass+myMethodTwo"></a>

### myClass.myMethodTwo(one, two) ⇒ <code>String</code>
Return class property myString

**Kind**: instance method of <code>[MyClass](#MyClass)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Number</code> | a Number |
| two | <code>Number</code> | another Number |

**Example**  
```js
// return 'foo'const myClass = new MyClass('foo', 'bar');return myClass.myMethodTwo(1, 2);
```
<a name="MyClassHelperOne"></a>

## MyClassHelperOne
MyClassHelperOne classHelper class for MyClass

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| myClass | <code>[MyClass](#MyClass)</code> | an instance of MyClass |


* [MyClassHelperOne](#MyClassHelperOne)
    * [new MyClassHelperOne()](#new_MyClassHelperOne_new)
    * [.myMethod(one, two)](#MyClassHelperOne+myMethod) ⇒ <code>Number</code>

<a name="new_MyClassHelperOne_new"></a>

### new MyClassHelperOne()
Create a new MyClassHelperOne instance{MyClass} myClass - an instance of MyClass

<a name="MyClassHelperOne+myMethod"></a>

### myClassHelperOne.myMethod(one, two) ⇒ <code>Number</code>
Return sum of two param

**Kind**: instance method of <code>[MyClassHelperOne](#MyClassHelperOne)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Number</code> | a Number |
| two | <code>Number</code> | another Number |

**Example**  
```js
// return 3const myClass = new MyClass('foo', 'bar');return myClass.myMethodOneOriginal(1, 2);
```
<a name="MyClassHelperTwo"></a>

## MyClassHelperTwo
MyClassHelperTwo classHelper class for MyClass

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| myClass | <code>[MyClass](#MyClass)</code> | an instance of MyClass |


* [MyClassHelperTwo](#MyClassHelperTwo)
    * [new MyClassHelperTwo()](#new_MyClassHelperTwo_new)
    * [.myMethod(one, two)](#MyClassHelperTwo+myMethod) ⇒ <code>String</code>

<a name="new_MyClassHelperTwo_new"></a>

### new MyClassHelperTwo()
Create a new MyClassHelperTwo instance{MyClass} myClass - an instance of MyClass

<a name="MyClassHelperTwo+myMethod"></a>

### myClassHelperTwo.myMethod(one, two) ⇒ <code>String</code>
Return class property myString

**Kind**: instance method of <code>[MyClassHelperTwo](#MyClassHelperTwo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Number</code> | a Number |
| two | <code>Number</code> | another Number |

**Example**  
```js
// return 'foo'const myClass = new MyClass('foo', 'bar');return myClass.myMethodTwo(1, 2);
```
<a name="Foobar"></a>

## Foobar : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| one | <code>String</code> | a String |
| two | <code>String</code> | another String |


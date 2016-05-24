## Classes

<dl>
<dt><a href="#MyClass">MyClass</a></dt>
<dd><p>MyClass class</p>
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


* [MyClass](#MyClass)
    * [new MyClass(one, two)](#new_MyClass_new)
    * [.myMethodTwo(one, two)](#MyClass+myMethodTwo) ⇒ <code>String</code>
    * [.myMethodOneOriginal(one, two)](#MyClass+myMethodOneOriginal) ⇒ <code>Number</code>
    * [.myMethodOne(one, two)](#MyClass+myMethodOne) ⇒ <code>Number</code>
    * [.myMethodTwoOriginal(one, two)](#MyClass+myMethodTwoOriginal) ⇒ <code>String</code>

<a name="new_MyClass_new"></a>

### new MyClass(one, two)
Create a new MyClass instance


| Param | Type | Description |
| --- | --- | --- |
| one | <code>String</code> | a String |
| two | <code>String</code> | another String |

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
// return 3const myClass = new MyClass('foo', 'bar');return myClass.myMethodOne(1, 2);
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
<a name="Foobar"></a>

## Foobar : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| one | <code>String</code> | a String |
| two | <code>String</code> | another String |


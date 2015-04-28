#Index

**Modules**

* [micro-observer](#module_micro-observer)
  * [micro-observer~on](#module_micro-observer..on)
  * [micro-observer~off](#module_micro-observer..off)
  * [micro-observer~send](#module_micro-observer..send)

**Typedefs**

* [type: handler](#handler)
* [type: able](#able)
 
<a name="module_micro-observer"></a>
#micro-observer
Observer Pattern javascript implementation [Observer](http://en.wikipedia.org/wiki/Observer_pattern)

**Example**  
```js
var observer = $.microObserver.get("test-cafej");

var dog = {
  wou: function(text) {
    observer.send("wou", text);
  }
}

observer.on("wou", function(text) {
  $("#man").text(text);
});
```

**Members**

* [micro-observer](#module_micro-observer)
  * [micro-observer~on](#module_micro-observer..on)
  * [micro-observer~off](#module_micro-observer..off)
  * [micro-observer~send](#module_micro-observer..send)

<a name="module_micro-observer..on"></a>
##micro-observer~on
Register event by notify

**Params**

- notify `string` - name of the notification  
- handler <code>[handler](#handler)</code> - handler of the notification  
- able <code>[able](#able)</code> - able to receive notification  

**Scope**: inner member of [micro-observer](#module_micro-observer)  
**Example**  
```js
MicroObserver.on("Say text", handler, able)
```

<a name="module_micro-observer..off"></a>
##micro-observer~off
Unregister event by notify

**Params**

- notify `string` - Name of the notification  
- handler <code>[handler](#handler)</code> - Handler of the notification  

**Scope**: inner member of [micro-observer](#module_micro-observer)  
**Example**  
```js
MicroObserver.off("Say text", handler)
```

<a name="module_micro-observer..send"></a>
##micro-observer~send
Send will send event by notify

**Params**

- notify `string` - Name of the notification  
- ...arguments `any` - is passed to registered {MicroObserver~handler}  

**Scope**: inner member of [micro-observer](#module_micro-observer)  
**Example**  
```js
MicroObserver.send("Say text", "tell me", "something", "to someone")
```

<a name="handler"></a>
#type: handler
Handler of the notification

**Params**

- ... `any`  

<a name="able"></a>
#type: able
Able to receive notification

**Returns**: `undefined` | `true` - handler is invoked when notification coming <br/>`false` - handler is not invoked when notification coming  

"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_getThread = () => {
    {
        return jl_Thread_currentThread0();
    }
},
$rt_setThread = t => {
    {
        return jl_Thread_setCurrentThread(t);
    }
},
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_booleancls = $rt_createPrimitiveCls("boolean", "Z"),
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B"),
$rt_shortcls = $rt_createPrimitiveCls("short", "S"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_floatcls = $rt_createPrimitiveCls("float", "F"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionFloatArray = new Float32Array($rt_numberConversionBuffer),
$rt_numberConversionIntArray = new Int32Array($rt_numberConversionBuffer),
$rt_floatToRawIntBits = n => {
    $rt_numberConversionFloatArray[0] = n;
    return $rt_numberConversionIntArray[0];
},
$rt_intBitsToFloat = n => {
    $rt_numberConversionIntArray[0] = n;
    return $rt_numberConversionFloatArray[0];
},
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_ne = (a, b) => a !== b,
Long_gt = (a, b) => a > b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_sub = (a, b) => BigInt.asIntN(64, a - b),
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_and = (a, b) => BigInt.asIntN(64, a & b);
let Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_xor = (a, b) => BigInt.asIntN(64, a ^ b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createLongArrayFromData = data => {
    let buffer = new BigInt64Array(data.length);
    buffer.set(data);
    return new $rt_longArrayCls(buffer);
},
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createShortArray = sz => new $rt_shortArrayCls(new Int16Array(sz)),
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_createBooleanArray = sz => new $rt_booleanArrayCls(new Int8Array(sz)),
$rt_createFloatArray = sz => new $rt_floatArrayCls(new Float32Array(sz)),
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_fullArrayToString = array => $rt_charArrayToString(array, 0, array.length),
$rt_fastStringToCharArray = string => {
    let array = new Uint16Array(string.length);
    for (let i = 0;i < array.length;++i) {
        array[i] = string.charCodeAt(i);
    }
    return new $rt_charArrayCls(array);
},
$rt_str = str => str === null ? null : jl_String__init_3(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => (() => {})(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from.$meta.assignableCache;
    if (typeof map === 'undefined') {
        map = new Map();
        from.$meta.assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to.$meta.item !== null) {
        let result = from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        map.set(to, result);
        return result;
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => $rt_objcls(),
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_createOutputFunction = outputFunction => {
    let buffer = "";
    return msg => {
        let index = 0;
        while (true) {
            let next = msg.indexOf('\n', index);
            if (next < 0) {
                break;
            }
            outputFunction(buffer + msg.substring(index, next));
            buffer = "";
            index = next + 1;
        }
        buffer += msg.substring(index);
    };
},
$rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.info(msg)) : () => {
},
$rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.error(msg)) : () => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
};
function TeaVMThread(runner) {
    this.status = 3;
    this.stack = [];
    this.suspendCallback = null;
    this.runner = runner;
    this.attribute = null;
    this.completeCallback = null;
}
TeaVMThread.prototype.push = function() {
    for (let i = 0;i < arguments.length;++i) {
        this.stack.push(arguments[i]);
    }
    return this;
};
TeaVMThread.prototype.s = TeaVMThread.prototype.push;
TeaVMThread.prototype.pop = function() {
    return this.stack.pop();
};
TeaVMThread.prototype.l = TeaVMThread.prototype.pop;
TeaVMThread.prototype.isResuming = function() {
    return this.status === 2;
};
TeaVMThread.prototype.isSuspending = function() {
    return this.status === 1;
};
TeaVMThread.prototype.suspend = function(callback) {
    this.suspendCallback = callback;
    this.status = 1;
};
TeaVMThread.prototype.start = function(callback) {
    if (this.status !== 3) {
        throw new Error("Thread already started");
    }
    if ($rt_currentNativeThread !== null) {
        throw new Error("Another thread is running");
    }
    this.status = 0;
    this.completeCallback = callback ? callback : result => {
        if (result instanceof Error) {
            throw result;
        }
    };
    this.run();
};
TeaVMThread.prototype.resume = function() {
    if ($rt_currentNativeThread !== null) {
        throw new Error("Another thread is running");
    }
    this.status = 2;
    this.run();
};
TeaVMThread.prototype.run = function() {
    $rt_currentNativeThread = this;
    let result;
    try {
        result = this.runner();
    } catch (e){
        result = e;
    } finally {
        $rt_currentNativeThread = null;
    }
    if (this.suspendCallback !== null) {
        let self = this;
        let callback = this.suspendCallback;
        this.suspendCallback = null;
        callback(() => self.resume());
    } else if (this.status === 0) {
        this.completeCallback(result);
    }
};
let $rt_suspending = () => {
    let thread = $rt_nativeThread();
    return thread != null && thread.isSuspending();
},
$rt_resuming = () => {
    let thread = $rt_nativeThread();
    return thread != null && thread.isResuming();
},
$rt_requireNativeThread = () => {
    let nativeThread = $rt_nativeThread();
    if (nativeThread === null) {
        throw new Error("Suspension point reached from non-threading context " + "(perhaps, from native JS method). See https://teavm.org/docs/runtime/coroutines.html " + "('Interaction with JavaScript' section)");
    }
    return nativeThread;
},
$rt_startThread = (runner, callback) => (new TeaVMThread(runner)).start(callback),
$rt_currentNativeThread = null,
$rt_nativeThread = () => $rt_currentNativeThread,
$rt_invalidPointer = () => {
    throw new Error("Invalid recorded state");
};
function jl_Object() {
    this.$monitor = null;
    this.$id$ = 0;
}
let jl_Object_monitorEnterSync = $o => {
    let var$2;
    if (jl_Thread_currentThread === null)
        return;
    if ($o.$monitor === null)
        jl_Object_createMonitor($o);
    $o = $o.$monitor;
    var$2 = $o.$owner;
    if (var$2 === null)
        $o.$owner = jl_Thread_currentThread;
    else if (var$2 !== jl_Thread_currentThread) {
        var$2 = new jl_IllegalStateException;
        jl_RuntimeException__init_(var$2, $rt_s(0));
        $rt_throw(var$2);
    }
    $o.$count = $o.$count + 1 | 0;
},
jl_Object_monitorExitSync = $o => {
    let var$2, var$3;
    if (jl_Thread_currentThread === null)
        return;
    if (!jl_Object_isEmptyMonitor($o)) {
        var$2 = $o.$monitor;
        if (var$2.$owner === jl_Thread_currentThread) {
            var$3 = var$2.$count - 1 | 0;
            var$2.$count = var$3;
            if (!var$3)
                var$2.$owner = null;
            jl_Object_isEmptyMonitor($o);
            return;
        }
    }
    $o = new jl_IllegalMonitorStateException;
    jl_Exception__init_($o);
    $rt_throw($o);
},
jl_Object_monitorEnter = $o => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$o = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 1;
        if ($o.$monitor === null)
            jl_Object_createMonitor($o);
        var$3 = $o.$monitor;
        if (var$3.$owner === null)
            var$3.$owner = jl_Thread_currentThread;
        if (var$3.$owner === jl_Thread_currentThread) {
            var$3.$count = var$3.$count + var$2 | 0;
            return;
        }
        $ptr = 1;
    case 1:
        jl_Object_monitorEnterWait$_asyncCall_$($o, var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($o, var$2, var$3, $ptr);
},
jl_Object_createMonitor = $o => {
    let var$2;
    var$2 = new jl_Object$Monitor;
    var$2.$owner = jl_Thread_currentThread;
    $o.$monitor = var$2;
},
jl_Object_monitorEnterWait = ($o, $count, $callback) => {
    let $thread_0, $monitor, var$6;
    $thread_0 = jl_Thread_currentThread;
    $monitor = $o.$monitor;
    if ($monitor === null) {
        jl_Object_createMonitor($o);
        jl_Thread_setCurrentThread($thread_0);
        $o = $o.$monitor;
        $o.$count = $o.$count + $count | 0;
        $o = null;
        otpp_AsyncCallbackWrapper_complete($callback, $o);
        return;
    }
    if ($monitor.$owner === null) {
        $monitor.$owner = $thread_0;
        jl_Thread_setCurrentThread($thread_0);
        $o = $o.$monitor;
        $o.$count = $o.$count + $count | 0;
        $o = null;
        otpp_AsyncCallbackWrapper_complete($callback, $o);
        return;
    }
    if ($monitor.$enteringThreads === null)
        $monitor.$enteringThreads = otp_Platform_createQueueJs$js_body$_30();
    $monitor = $monitor.$enteringThreads;
    var$6 = new jl_Object$monitorEnterWait$lambda$_6_0;
    var$6.$_08 = $thread_0;
    var$6.$_14 = $o;
    var$6.$_23 = $count;
    var$6.$_31 = $callback;
    $callback = var$6;
    $monitor.push($callback);
},
jl_Object_monitorExit = $o => {
    let var$2, var$3;
    if (!jl_Object_isEmptyMonitor($o)) {
        var$2 = $o.$monitor;
        if (var$2.$owner === jl_Thread_currentThread) {
            var$3 = var$2.$count - 1 | 0;
            var$2.$count = var$3;
            if (var$3 <= 0) {
                var$2.$owner = null;
                var$2 = var$2.$enteringThreads;
                if (var$2 !== null && !otp_PlatformQueue_isEmpty$static(var$2)) {
                    var$2 = new jl_Object$monitorExit$lambda$_8_0;
                    var$2.$_09 = $o;
                    otp_Platform_schedule(var$2, 0);
                } else
                    jl_Object_isEmptyMonitor($o);
            }
            return;
        }
    }
    $o = new jl_IllegalMonitorStateException;
    jl_Exception__init_($o);
    $rt_throw($o);
},
jl_Object_isEmptyMonitor = $this => {
    let $monitor, var$2;
    $monitor = $this.$monitor;
    if ($monitor === null)
        return 1;
    a: {
        if ($monitor.$owner === null) {
            var$2 = $monitor.$enteringThreads;
            if (!(var$2 !== null && !otp_PlatformQueue_isEmpty$static(var$2))) {
                $monitor = $monitor.$notifyListeners;
                if ($monitor === null)
                    break a;
                if (otp_PlatformQueue_isEmpty$static($monitor))
                    break a;
            }
        }
        return 0;
    }
    $this.$monitor = null;
    return 1;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_hashCode = $this => {
    return jl_Object_identity($this);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    var$1 = jl_StringBuilder_append(var$3, var$1);
    jl_AbstractStringBuilder_append(var$1, 64);
    jl_StringBuilder_append(var$1, var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_Object_clone = $this => {
    let $result, var$2, var$3;
    if (!$rt_isInstance($this, jl_Cloneable) && $this.constructor.$meta.item === null) {
        $result = new jl_CloneNotSupportedException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $result = otp_Platform_clone($this);
    var$2 = $result;
    var$3 = $rt_nextId();
    var$2.$id$ = var$3;
    return $result;
},
jl_Object_monitorEnterWait$_asyncCall_$ = (var$1, var$2) => {
    let thread = $rt_requireNativeThread();
    let javaThread = $rt_getThread();
    if (thread.isResuming()) {
        thread.status = 0;
        let result = thread.attribute;
        if (result instanceof Error) {
            throw result;
        }
        return result;
    }
    let callback = function() {
    };
    callback.$complete = val => {
        thread.attribute = val;
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback.$error = e => {
        thread.attribute = $rt_exception(e);
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback = otpp_AsyncCallbackWrapper_create(callback);
    thread.suspend(() => {
        try {
            jl_Object_monitorEnterWait(var$1, var$2, callback);
            ;
        } catch ($e){
            callback.$error($e);
        }
    });
    return null;
},
cbgu_Pool$Poolable = $rt_classWithoutFields(0),
cbggg_GlyphLayout = $rt_classWithoutFields(),
cbggg_GlyphLayout_glyphRunPool = null,
cbggg_GlyphLayout_colorStack = null,
cbggg_GlyphLayout_$callClinit = () => {
    cbggg_GlyphLayout_$callClinit = $rt_eraseClinit(cbggg_GlyphLayout);
    cbggg_GlyphLayout__clinit_();
},
cbggg_GlyphLayout__clinit_ = () => {
    let var$1, var$2, $$je;
    cbgu_Pools_$callClinit();
    var$1 = cbgu_ObjectMap_get(cbgu_Pools_typePools, $rt_cls(cbggg_GlyphLayout$GlyphRun));
    if (var$1 === null) {
        var$1 = new cbgu_ReflectionPool;
        var$1.$freeObjects = cbgu_Array__init_1(0, 4);
        var$1.$max1 = 100;
        a: {
            try {
                var$2 = cbgur_ClassReflection_getConstructor($rt_cls(cbggg_GlyphLayout$GlyphRun), null);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Exception) {
                } else {
                    throw $$e;
                }
            }
            try {
                var$2 = cbgur_ClassReflection_getDeclaredConstructor($rt_cls(cbggg_GlyphLayout$GlyphRun), null);
                cbgur_Constructor_setAccessible(var$2, 1);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof cbgur_ReflectionException) {
                } else {
                    throw $$e;
                }
            }
            var$2 = null;
        }
        var$1.$constructor = var$2;
        if (var$2 === null) {
            var$1 = new jl_RuntimeException;
            var$2 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$2);
            jl_AbstractStringBuilder_append0(var$2, $rt_s(1));
            jl_AbstractStringBuilder_append0(var$2, jl_Class_getName($rt_cls(cbggg_GlyphLayout$GlyphRun)));
            jl_RuntimeException__init_(var$1, jl_AbstractStringBuilder_toString(var$2));
            $rt_throw(var$1);
        }
        cbgu_ObjectMap_put(cbgu_Pools_typePools, $rt_cls(cbggg_GlyphLayout$GlyphRun), var$1);
    }
    cbggg_GlyphLayout_glyphRunPool = var$1;
    cbggg_GlyphLayout_colorStack = cbgu_IntArray__init_(1, 4);
},
cbggg_TextureRegion = $rt_classWithoutFields(),
cbggg_Sprite = $rt_classWithoutFields(cbggg_TextureRegion),
cbgu_Disposable = $rt_classWithoutFields(0),
cbggg_BitmapFont = $rt_classWithoutFields(),
cbggg_NinePatch = $rt_classWithoutFields(),
cbggg_NinePatch_tmpDrawColor = null,
cbggg_NinePatch__clinit_ = () => {
    cbggg_NinePatch_tmpDrawColor = new cbgg_Color;
};
function cbgg_Color() {
    let a = this; jl_Object.call(a);
    a.$r = 0.0;
    a.$g = 0.0;
    a.$b = 0.0;
    a.$a = 0.0;
}
let cbgg_Color_WHITE = null,
cbgg_Color_LIGHT_GRAY = null,
cbgg_Color_GRAY = null,
cbgg_Color_DARK_GRAY = null,
cbgg_Color_BLACK = null,
cbgg_Color_WHITE_FLOAT_BITS = 0.0,
cbgg_Color_CLEAR = null,
cbgg_Color_CLEAR_WHITE = null,
cbgg_Color_BLUE = null,
cbgg_Color_NAVY = null,
cbgg_Color_ROYAL = null,
cbgg_Color_SLATE = null,
cbgg_Color_SKY = null,
cbgg_Color_CYAN = null,
cbgg_Color_TEAL = null,
cbgg_Color_GREEN = null,
cbgg_Color_CHARTREUSE = null,
cbgg_Color_LIME = null,
cbgg_Color_FOREST = null,
cbgg_Color_OLIVE = null,
cbgg_Color_YELLOW = null,
cbgg_Color_GOLD = null,
cbgg_Color_GOLDENROD = null,
cbgg_Color_ORANGE = null,
cbgg_Color_BROWN = null,
cbgg_Color_TAN = null,
cbgg_Color_FIREBRICK = null,
cbgg_Color_RED = null,
cbgg_Color_SCARLET = null,
cbgg_Color_CORAL = null,
cbgg_Color_SALMON = null,
cbgg_Color_PINK = null,
cbgg_Color_MAGENTA = null,
cbgg_Color_PURPLE = null,
cbgg_Color_VIOLET = null,
cbgg_Color_MAROON = null,
cbgg_Color__init_2 = ($this, $rgba8888) => {
    $this.$r = (($rgba8888 & (-16777216)) >>> 24 | 0) / 255.0;
    $this.$g = (($rgba8888 & 16711680) >>> 16 | 0) / 255.0;
    $this.$b = (($rgba8888 & 65280) >>> 8 | 0) / 255.0;
    $this.$a = ($rgba8888 & 255) / 255.0;
},
cbgg_Color__init_ = var_0 => {
    let var_1 = new cbgg_Color();
    cbgg_Color__init_2(var_1, var_0);
    return var_1;
},
cbgg_Color__init_1 = ($this, $r, $g, $b, $a) => {
    $this.$r = $r;
    $this.$g = $g;
    $this.$b = $b;
    $this.$a = $a;
    if ($r < 0.0)
        $this.$r = 0.0;
    else if ($r > 1.0)
        $this.$r = 1.0;
    if ($g < 0.0)
        $this.$g = 0.0;
    else if ($g > 1.0)
        $this.$g = 1.0;
    if ($b < 0.0)
        $this.$b = 0.0;
    else if ($b > 1.0)
        $this.$b = 1.0;
    if ($a < 0.0)
        $this.$a = 0.0;
    else if ($a > 1.0)
        $this.$a = 1.0;
},
cbgg_Color__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new cbgg_Color();
    cbgg_Color__init_1(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
cbgg_Color__clinit_ = () => {
    let var$1;
    cbgg_Color_WHITE = cbgg_Color__init_0(1.0, 1.0, 1.0, 1.0);
    cbgg_Color_LIGHT_GRAY = cbgg_Color__init_((-1077952513));
    cbgg_Color_GRAY = cbgg_Color__init_(2139062271);
    cbgg_Color_DARK_GRAY = cbgg_Color__init_(1061109759);
    cbgg_Color_BLACK = cbgg_Color__init_0(0.0, 0.0, 0.0, 1.0);
    var$1 = cbgg_Color_WHITE;
    cbgg_Color_WHITE_FLOAT_BITS = $rt_intBitsToFloat(((255.0 * var$1.$a | 0) << 24 | (255.0 * var$1.$b | 0) << 16 | (255.0 * var$1.$g | 0) << 8 | 255.0 * var$1.$r | 0) & (-16777217));
    cbgg_Color_CLEAR = cbgg_Color__init_0(0.0, 0.0, 0.0, 0.0);
    cbgg_Color_CLEAR_WHITE = cbgg_Color__init_0(1.0, 1.0, 1.0, 0.0);
    cbgg_Color_BLUE = cbgg_Color__init_0(0.0, 0.0, 1.0, 1.0);
    cbgg_Color_NAVY = cbgg_Color__init_0(0.0, 0.0, 0.5, 1.0);
    cbgg_Color_ROYAL = cbgg_Color__init_(1097458175);
    cbgg_Color_SLATE = cbgg_Color__init_(1887473919);
    cbgg_Color_SKY = cbgg_Color__init_((-2016482305));
    cbgg_Color_CYAN = cbgg_Color__init_0(0.0, 1.0, 1.0, 1.0);
    cbgg_Color_TEAL = cbgg_Color__init_0(0.0, 0.5, 0.5, 1.0);
    cbgg_Color_GREEN = cbgg_Color__init_(16711935);
    cbgg_Color_CHARTREUSE = cbgg_Color__init_(2147418367);
    cbgg_Color_LIME = cbgg_Color__init_(852308735);
    cbgg_Color_FOREST = cbgg_Color__init_(579543807);
    cbgg_Color_OLIVE = cbgg_Color__init_(1804477439);
    cbgg_Color_YELLOW = cbgg_Color__init_((-65281));
    cbgg_Color_GOLD = cbgg_Color__init_((-2686721));
    cbgg_Color_GOLDENROD = cbgg_Color__init_((-626712321));
    cbgg_Color_ORANGE = cbgg_Color__init_((-5963521));
    cbgg_Color_BROWN = cbgg_Color__init_((-1958407169));
    cbgg_Color_TAN = cbgg_Color__init_((-759919361));
    cbgg_Color_FIREBRICK = cbgg_Color__init_((-1306385665));
    cbgg_Color_RED = cbgg_Color__init_((-16776961));
    cbgg_Color_SCARLET = cbgg_Color__init_((-13361921));
    cbgg_Color_CORAL = cbgg_Color__init_((-8433409));
    cbgg_Color_SALMON = cbgg_Color__init_((-92245249));
    cbgg_Color_PINK = cbgg_Color__init_((-9849601));
    cbgg_Color_MAGENTA = cbgg_Color__init_0(1.0, 0.0, 1.0, 1.0);
    cbgg_Color_PURPLE = cbgg_Color__init_((-1608453889));
    cbgg_Color_VIOLET = cbgg_Color__init_((-293409025));
    cbgg_Color_MAROON = cbgg_Color__init_((-1339006721));
};
function cbgg_GLTexture() {
    let a = this; jl_Object.call(a);
    a.$glTarget = 0;
    a.$glHandle = 0;
    a.$minFilter = null;
    a.$magFilter = null;
    a.$uWrap = null;
    a.$vWrap = null;
    a.$anisotropicFilterLevel = 0.0;
}
let cbgg_GLTexture_maxAnisotropicFilterLevel = 0.0,
cbgg_GLTexture_bind = $this => {
    cbg_Gdx_gl.$glBindTexture($this.$glTarget, $this.$glHandle);
},
cbgg_GLTexture_unsafeSetAnisotropicFilter = ($this, $level, $force) => {
    let $max, var$4, var$5;
    $max = cbgg_GLTexture_maxAnisotropicFilterLevel;
    if ($max <= 0.0) {
        if (!cgxgbt_TeaGraphics_supportsExtension(cbg_Gdx_graphics, $rt_s(2))) {
            $max = 1.0;
            cbgg_GLTexture_maxAnisotropicFilterLevel = $max;
        } else {
            var$4 = cbgu_BufferUtils_newFloatBuffer(16);
            var$5 = var$4;
            jn_Buffer_position(var$5, 0);
            jn_Buffer_limit(var$5, var$4.$capacityImpl());
            cbg_Gdx_gl20.$glGetFloatv(34047, var$4);
            $max = jn_FloatBufferImpl_get(var$4, 0);
            cbgg_GLTexture_maxAnisotropicFilterLevel = $max;
        }
    }
    if ($max === 1.0)
        return 1.0;
    $level = jl_Math_minImpl($level, $max);
    if (!$force && (jl_Math_abs($level - $this.$anisotropicFilterLevel) > 0.10000000149011612 ? 0 : 1))
        return $this.$anisotropicFilterLevel;
    cbg_Gdx_gl20.$glTexParameterf(3553, 34046, $level);
    $this.$anisotropicFilterLevel = $level;
    return $level;
},
cbgg_GLTexture_uploadImageData = ($target, $data, $miplevel) => {
    let var$4, $tmp_0, $pixmap, $disposePixmap, var$8, var$9;
    if ($data === null)
        return;
    var$4 = $data;
    if (!var$4.$isPrepared)
        cbggg_FileTextureData_prepare(var$4);
    if (cbgg_TextureData$TextureDataType_Pixmap === cbgg_TextureData$TextureDataType_Custom) {
        $data = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_($data, $rt_s(3));
        $rt_throw($data);
    }
    if (!var$4.$isPrepared) {
        $tmp_0 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_($tmp_0, $rt_s(4));
        $rt_throw($tmp_0);
    }
    var$4.$isPrepared = 0;
    $pixmap = var$4.$pixmap;
    var$4.$pixmap = null;
    $disposePixmap = 1;
    if (var$4.$format === cbgg_Pixmap_getFormat($pixmap))
        $tmp_0 = $pixmap;
    else {
        $tmp_0 = cbgg_Pixmap__init_(cbgg_Pixmap_getWidth($pixmap), cbgg_Pixmap_getHeight($pixmap), var$4.$format);
        cbgg_Pixmap_setBlending($tmp_0, cbgg_Pixmap$Blending_None);
        cbgg_Pixmap_drawPixmap($tmp_0, $pixmap, 0, 0, 0, 0, cbgg_Pixmap_getWidth($pixmap), cbgg_Pixmap_getHeight($pixmap));
        cbgg_Pixmap_dispose($pixmap);
        $disposePixmap = 1;
    }
    cbg_Gdx_gl.$glPixelStorei(3317, 1);
    if (!var$4.$useMipMaps)
        cbg_Gdx_gl.$glTexImage2D($target, $miplevel, cbgg_Pixmap_getGLInternalFormat($tmp_0), cbgg_Pixmap_getWidth($tmp_0), cbgg_Pixmap_getHeight($tmp_0), 0, cbgg_Pixmap_getGLFormat($tmp_0), cbgg_Pixmap_getGLType($tmp_0), cbgg_Pixmap_getPixels($tmp_0));
    else {
        var$8 = cbgg_Pixmap_getWidth($tmp_0);
        var$9 = cbgg_Pixmap_getHeight($tmp_0);
        if (!cbggg_MipMapGenerator_useHWMipMap)
            cbggg_MipMapGenerator_generateMipMapCPU($target, $tmp_0, var$8, var$9);
        else {
            $data = cbg_Application$ApplicationType_WebGL;
            if ($data !== cbg_Application$ApplicationType_Android && $data !== $data && $data !== cbg_Application$ApplicationType_iOS) {
                if (!cgxgbt_TeaGraphics_supportsExtension(cbg_Gdx_graphics, $rt_s(5)) && !cgxgbt_TeaGraphics_supportsExtension(cbg_Gdx_graphics, $rt_s(6)) && !jl_String_equals(jl_Class_getName(jl_Object_getClass(cbg_Gdx_gl20)), $rt_s(7)) && cbg_Gdx_gl30 === null)
                    cbggg_MipMapGenerator_generateMipMapCPU($target, $tmp_0, var$8, var$9);
                else {
                    cbg_Gdx_gl.$glTexImage2D($target, 0, cbgg_Pixmap_getGLInternalFormat($tmp_0), cbgg_Pixmap_getWidth($tmp_0), cbgg_Pixmap_getHeight($tmp_0), 0, cbgg_Pixmap_getGLFormat($tmp_0), cbgg_Pixmap_getGLType($tmp_0), cbgg_Pixmap_getPixels($tmp_0));
                    cbg_Gdx_gl20.$glGenerateMipmap($target);
                }
            } else {
                cbg_Gdx_gl.$glTexImage2D($target, 0, cbgg_Pixmap_getGLInternalFormat($tmp_0), cbgg_Pixmap_getWidth($tmp_0), cbgg_Pixmap_getHeight($tmp_0), 0, cbgg_Pixmap_getGLFormat($tmp_0), cbgg_Pixmap_getGLType($tmp_0), cbgg_Pixmap_getPixels($tmp_0));
                cbg_Gdx_gl20.$glGenerateMipmap($target);
            }
        }
    }
    if ($disposePixmap)
        cbgg_Pixmap_dispose($tmp_0);
},
cbgg_GLTexture__clinit_ = () => {
    cbgg_GLTexture_maxAnisotropicFilterLevel = 0.0;
};
function cbgg_Texture() {
    cbgg_GLTexture.call(this);
    this.$data5 = null;
}
let cbgg_Texture_managedTextures = null,
cbgg_Texture_$callClinit = () => {
    cbgg_Texture_$callClinit = $rt_eraseClinit(cbgg_Texture);
    cbgg_Texture__clinit_();
},
cbgg_Texture_getWidth = $this => {
    return $this.$data5.$width0;
},
cbgg_Texture_getHeight = $this => {
    return $this.$data5.$height0;
},
cbgg_Texture_toString = $this => {
    let var$1;
    var$1 = $this.$data5;
    if (!(var$1 instanceof cbggg_FileTextureData))
        return jl_Object_toString($this);
    return jl_Object_toString(var$1);
},
cbgg_Texture_addManagedTexture = ($app, $texture) => {
    let $managedTextureArray;
    cbgg_Texture_$callClinit();
    $managedTextureArray = ju_HashMap_get(cbgg_Texture_managedTextures, $app);
    if ($managedTextureArray === null)
        $managedTextureArray = cbgu_Array__init_();
    cbgu_Array_add($managedTextureArray, $texture);
    ju_HashMap_put(cbgg_Texture_managedTextures, $app, $managedTextureArray);
},
cbgg_Texture__clinit_ = () => {
    cbgg_Texture_managedTextures = ju_HashMap__init_();
},
jl_Iterable = $rt_classWithoutFields(0);
function cbgu_Array() {
    let a = this; jl_Object.call(a);
    a.$items = null;
    a.$size0 = 0;
    a.$ordered = 0;
    a.$iterable = null;
}
let cbgu_Array__init_0 = $this => {
    cbgu_Array__init_2($this, 1, 16);
},
cbgu_Array__init_ = () => {
    let var_0 = new cbgu_Array();
    cbgu_Array__init_0(var_0);
    return var_0;
},
cbgu_Array__init_2 = ($this, $ordered, $capacity) => {
    $this.$ordered = $ordered;
    $this.$items = $rt_createArray(jl_Object, $capacity);
},
cbgu_Array__init_1 = (var_0, var_1) => {
    let var_2 = new cbgu_Array();
    cbgu_Array__init_2(var_2, var_0, var_1);
    return var_2;
},
cbgu_Array_add = ($this, $value) => {
    let $items, var$3, var$4, var$5;
    $items = $this.$items;
    var$3 = $items.data;
    var$4 = $this.$size0;
    if (var$4 == var$3.length)
        $items = cbgu_Array_resize($this, jl_Math_max(8, var$4 * 1.75 | 0));
    $items = $items.data;
    var$5 = $this.$size0;
    $this.$size0 = var$5 + 1 | 0;
    $items[var$5] = $value;
},
cbgu_Array_addAll = ($this, $array, $start, $count) => {
    let $items, var$5, $sizeNeeded;
    $items = $this.$items;
    var$5 = $items.data;
    $sizeNeeded = $this.$size0 + $count | 0;
    if ($sizeNeeded > var$5.length)
        $items = cbgu_Array_resize($this, jl_Math_max(jl_Math_max(8, $sizeNeeded), $this.$size0 * 1.75 | 0));
    jl_System_fastArraycopy($array, $start, $items, $this.$size0, $count);
    $this.$size0 = $sizeNeeded;
},
cbgu_Array_get = ($this, $index) => {
    let var$2, var$3;
    if ($index < $this.$size0)
        return $this.$items.data[$index];
    var$2 = new jl_IndexOutOfBoundsException;
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_AbstractStringBuilder_append0(var$3, $rt_s(8));
    var$3 = jl_StringBuilder_append0(var$3, $index);
    jl_AbstractStringBuilder_append0(var$3, $rt_s(9));
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$3, $this.$size0)));
    $rt_throw(var$2);
},
cbgu_Array_removeValue = ($this, $value, $identity) => {
    let $items, $i, $n;
    a: {
        $items = $this.$items;
        if (!(!$identity && $value !== null)) {
            $i = 0;
            $n = $this.$size0;
            while ($i < $n) {
                if ($items.data[$i] === $value) {
                    cbgu_Array_removeIndex($this, $i);
                    return 1;
                }
                $i = $i + 1 | 0;
            }
        } else {
            $i = 0;
            $n = $this.$size0;
            while (true) {
                if ($i >= $n)
                    break a;
                if ($value.$equals($items.data[$i])) {
                    cbgu_Array_removeIndex($this, $i);
                    return 1;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return 0;
},
cbgu_Array_removeIndex = ($this, $index) => {
    let var$2, var$3, $value, $items, var$6, var$7;
    var$2 = $this.$size0;
    if ($index >= var$2) {
        var$3 = new jl_IndexOutOfBoundsException;
        $value = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($value);
        jl_AbstractStringBuilder_append0($value, $rt_s(8));
        $value = jl_StringBuilder_append0($value, $index);
        jl_AbstractStringBuilder_append0($value, $rt_s(9));
        jl_RuntimeException__init_(var$3, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0($value, $this.$size0)));
        $rt_throw(var$3);
    }
    $items = $this.$items;
    var$6 = $items.data;
    $value = var$6[$index];
    var$7 = var$2 - 1 | 0;
    $this.$size0 = var$7;
    if (!$this.$ordered)
        var$6[$index] = var$6[var$7];
    else
        jl_System_fastArraycopy($items, $index + 1 | 0, $items, $index, var$7 - $index | 0);
    var$6[$this.$size0] = null;
    return $value;
},
cbgu_Array_clear = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6;
    var$1 = $this.$items;
    var$2 = 0;
    var$3 = $this.$size0;
    var$4 = null;
    if (var$2 > var$3) {
        var$4 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    while (var$2 < var$3) {
        var$5 = var$1.data;
        var$6 = var$2 + 1 | 0;
        var$5[var$2] = var$4;
        var$2 = var$6;
    }
    $this.$size0 = 0;
},
cbgu_Array_resize = ($this, $newSize) => {
    let $items, $newItems, var$4;
    $items = $this.$items;
    $newItems = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($items)), $newSize);
    var$4 = $newItems.data;
    jl_System_fastArraycopy($items, 0, $newItems, 0, jl_Math_min($this.$size0, var$4.length));
    $this.$items = $newItems;
    return $newItems;
},
cbgu_Array_iterator = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = cbgu_Collections_allocateIterators;
    if (var$1)
        return cbgu_Array$ArrayIterator__init_($this, 1);
    if ($this.$iterable === null) {
        var$2 = new cbgu_Array$ArrayIterable;
        var$2.$array2 = $this;
        var$2.$allowRemove = 1;
        $this.$iterable = var$2;
    }
    var$2 = $this.$iterable;
    if (var$1)
        var$3 = cbgu_Array$ArrayIterator__init_(var$2.$array2, var$2.$allowRemove);
    else {
        if (var$2.$iterator1 === null) {
            var$2.$iterator1 = cbgu_Array$ArrayIterator__init_(var$2.$array2, var$2.$allowRemove);
            var$2.$iterator2 = cbgu_Array$ArrayIterator__init_(var$2.$array2, var$2.$allowRemove);
        }
        var$4 = var$2.$iterator1;
        if (var$4.$valid) {
            var$3 = var$2.$iterator2;
            var$3.$index0 = 0;
            var$3.$valid = 1;
            var$4.$valid = 0;
        } else {
            var$4.$index0 = 0;
            var$4.$valid = 1;
            var$2.$iterator2.$valid = 0;
            var$3 = var$4;
        }
    }
    return var$3;
},
cbgu_Json = $rt_classWithoutFields();
function cbgu_ObjectMap() {
    let a = this; jl_Object.call(a);
    a.$size5 = 0;
    a.$keyTable = null;
    a.$valueTable = null;
    a.$loadFactor1 = 0.0;
    a.$threshold = 0;
    a.$shift1 = 0;
    a.$mask2 = 0;
}
let cbgu_ObjectMap_dummy = null,
cbgu_ObjectMap__init_0 = $this => {
    let var$1, var$2;
    $this.$loadFactor1 = 0.800000011920929;
    var$1 = cbgu_ObjectSet_tableSize(51, 0.800000011920929);
    $this.$threshold = var$1 * 0.800000011920929 | 0;
    var$2 = var$1 - 1 | 0;
    $this.$mask2 = var$2;
    $this.$shift1 = jl_Long_numberOfLeadingZeros(Long_fromInt(var$2));
    $this.$keyTable = $rt_createArray(jl_Object, var$1);
    $this.$valueTable = $rt_createArray(jl_Object, var$1);
},
cbgu_ObjectMap__init_ = () => {
    let var_0 = new cbgu_ObjectMap();
    cbgu_ObjectMap__init_0(var_0);
    return var_0;
},
cbgu_ObjectMap_place = ($this, $item) => {
    return Long_lo(Long_shru(Long_mul(Long_fromInt($item.$hashCode()), Long_create(2135587861, 2654435769)), $this.$shift1));
},
cbgu_ObjectMap_locateKey = ($this, $key) => {
    let $other, $keyTable, $i;
    if ($key === null) {
        $other = new jl_IllegalArgumentException;
        jl_RuntimeException__init_($other, $rt_s(10));
        $rt_throw($other);
    }
    $keyTable = $this.$keyTable;
    $i = cbgu_ObjectMap_place($this, $key);
    while (true) {
        $other = $keyTable.data[$i];
        if ($other === null)
            return  -($i + 1 | 0) | 0;
        if ($other.$equals($key))
            break;
        $i = ($i + 1 | 0) & $this.$mask2;
    }
    return $i;
},
cbgu_ObjectMap_put = ($this, $key, $value) => {
    let $i, var$4, $oldValue;
    $i = cbgu_ObjectMap_locateKey($this, $key);
    if ($i >= 0) {
        var$4 = $this.$valueTable.data;
        $oldValue = var$4[$i];
        var$4[$i] = $value;
        return $oldValue;
    }
    $i =  -($i + 1 | 0) | 0;
    var$4 = $this.$keyTable.data;
    var$4[$i] = $key;
    $this.$valueTable.data[$i] = $value;
    $i = $this.$size5 + 1 | 0;
    $this.$size5 = $i;
    if ($i >= $this.$threshold)
        cbgu_ObjectMap_resize($this, var$4.length << 1);
    return null;
},
cbgu_ObjectMap_get = ($this, $key) => {
    let $i;
    $i = cbgu_ObjectMap_locateKey($this, $key);
    return $i < 0 ? null : $this.$valueTable.data[$i];
},
cbgu_ObjectMap_containsKey = ($this, $key) => {
    return cbgu_ObjectMap_locateKey($this, $key) < 0 ? 0 : 1;
},
cbgu_ObjectMap_resize = ($this, $newSize) => {
    let $oldCapacity, var$3, $oldKeyTable, $oldValueTable, $i, $key, var$8, var$9, var$10;
    a: {
        $oldCapacity = $this.$keyTable.data.length;
        $this.$threshold = $newSize * $this.$loadFactor1 | 0;
        var$3 = $newSize - 1 | 0;
        $this.$mask2 = var$3;
        $this.$shift1 = jl_Long_numberOfLeadingZeros(Long_fromInt(var$3));
        $oldKeyTable = $this.$keyTable;
        $oldValueTable = $this.$valueTable;
        $this.$keyTable = $rt_createArray(jl_Object, $newSize);
        $this.$valueTable = $rt_createArray(jl_Object, $newSize);
        if ($this.$size5 > 0) {
            $i = 0;
            while (true) {
                if ($i >= $oldCapacity)
                    break a;
                $key = $oldKeyTable.data[$i];
                if ($key !== null) {
                    var$8 = $oldValueTable.data[$i];
                    var$9 = $this.$keyTable;
                    $newSize = cbgu_ObjectMap_place($this, $key);
                    while (true) {
                        var$10 = var$9.data;
                        if (var$10[$newSize] === null)
                            break;
                        $newSize = ($newSize + 1 | 0) & $this.$mask2;
                    }
                    var$10[$newSize] = $key;
                    $this.$valueTable.data[$newSize] = var$8;
                }
                $i = $i + 1 | 0;
            }
        }
    }
},
cbgu_ObjectMap__clinit_ = () => {
    cbgu_ObjectMap_dummy = new jl_Object;
};
function cbgu_OrderedMap() {
    cbgu_ObjectMap.call(this);
    this.$keys = null;
}
let cbgu_OrderedMap_put = ($this, $key, $value) => {
    let $i, var$4, $oldValue;
    $i = cbgu_ObjectMap_locateKey($this, $key);
    if ($i >= 0) {
        var$4 = $this.$valueTable.data;
        $oldValue = var$4[$i];
        var$4[$i] = $value;
        return $oldValue;
    }
    $i =  -($i + 1 | 0) | 0;
    $this.$keyTable.data[$i] = $key;
    $this.$valueTable.data[$i] = $value;
    cbgu_Array_add($this.$keys, $key);
    $i = $this.$size5 + 1 | 0;
    $this.$size5 = $i;
    if ($i >= $this.$threshold)
        cbgu_ObjectMap_resize($this, $this.$keyTable.data.length << 1);
    return null;
},
cbgu_Queue = $rt_classWithoutFields(),
cbgu_Predicate = $rt_classWithoutFields(0);
function cbgg_VertexAttribute() {
    let a = this; jl_Object.call(a);
    a.$usage4 = 0;
    a.$numComponents = 0;
    a.$normalized = 0;
    a.$type3 = 0;
    a.$offset = 0;
    a.$alias = null;
    a.$unit = 0;
    a.$usageIndex = 0;
}
let cbgg_VertexAttribute__init_0 = ($this, $usage, $numComponents, $alias) => {
    let var$4, var$5;
    var$4 = $rt_compare($usage, 4);
    var$5 = var$4 ? 5126 : 5121;
    var$4 = var$4 ? 0 : 1;
    $this.$usage4 = $usage;
    $this.$numComponents = $numComponents;
    $this.$type3 = var$5;
    $this.$normalized = var$4;
    $this.$alias = $alias;
    $this.$unit = 0;
    $this.$usageIndex = jl_Integer_numberOfTrailingZeros($usage);
},
cbgg_VertexAttribute__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cbgg_VertexAttribute();
    cbgg_VertexAttribute__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cbg_Net = $rt_classWithoutFields(0),
cbgm_MapObject = $rt_classWithoutFields(),
cbgggp_ResourceData$Configurable = $rt_classWithoutFields(0),
cbgggp_ParticleEffect = $rt_classWithoutFields(),
cbgu_Json$Serializable = $rt_classWithoutFields(0),
cbgggp_ParticleController = $rt_classWithoutFields(),
cbgggp_ResourceData = $rt_classWithoutFields(),
cbgggp_ParallelArray = $rt_classWithoutFields(),
cbgm_Interpolation = $rt_classWithoutFields(),
cbgm_Interpolation_linear = null,
cbgm_Interpolation_smooth = null,
cbgm_Interpolation_smooth2 = null,
cbgm_Interpolation_smoother = null,
cbgm_Interpolation_fade = null,
cbgm_Interpolation_pow2 = null,
cbgm_Interpolation_pow2In = null,
cbgm_Interpolation_slowFast = null,
cbgm_Interpolation_pow2Out = null,
cbgm_Interpolation_fastSlow = null,
cbgm_Interpolation_pow2InInverse = null,
cbgm_Interpolation_pow2OutInverse = null,
cbgm_Interpolation_pow3 = null,
cbgm_Interpolation_pow3In = null,
cbgm_Interpolation_pow3Out = null,
cbgm_Interpolation_pow3InInverse = null,
cbgm_Interpolation_pow3OutInverse = null,
cbgm_Interpolation_pow4 = null,
cbgm_Interpolation_pow4In = null,
cbgm_Interpolation_pow4Out = null,
cbgm_Interpolation_pow5 = null,
cbgm_Interpolation_pow5In = null,
cbgm_Interpolation_pow5Out = null,
cbgm_Interpolation_sine = null,
cbgm_Interpolation_sineIn = null,
cbgm_Interpolation_sineOut = null,
cbgm_Interpolation_exp10 = null,
cbgm_Interpolation_exp10In = null,
cbgm_Interpolation_exp10Out = null,
cbgm_Interpolation_exp5 = null,
cbgm_Interpolation_exp5In = null,
cbgm_Interpolation_exp5Out = null,
cbgm_Interpolation_circle = null,
cbgm_Interpolation_circleIn = null,
cbgm_Interpolation_circleOut = null,
cbgm_Interpolation_elastic = null,
cbgm_Interpolation_elasticIn = null,
cbgm_Interpolation_elasticOut = null,
cbgm_Interpolation_swing = null;
let cbgm_Interpolation_swingIn = null,
cbgm_Interpolation_swingOut = null,
cbgm_Interpolation_bounce = null,
cbgm_Interpolation_bounceIn = null,
cbgm_Interpolation_bounceOut = null,
cbgm_Interpolation_$callClinit = () => {
    cbgm_Interpolation_$callClinit = $rt_eraseClinit(cbgm_Interpolation);
    cbgm_Interpolation__clinit_();
},
cbgm_Interpolation__init_ = $this => {
    cbgm_Interpolation_$callClinit();
},
cbgm_Interpolation__clinit_ = () => {
    let var$1;
    var$1 = new cbgm_Interpolation$1;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_linear = var$1;
    var$1 = new cbgm_Interpolation$2;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_smooth = var$1;
    var$1 = new cbgm_Interpolation$3;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_smooth2 = var$1;
    var$1 = new cbgm_Interpolation$4;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_smoother = var$1;
    cbgm_Interpolation_fade = var$1;
    cbgm_Interpolation_pow2 = cbgm_Interpolation$Pow__init_0(2);
    var$1 = new cbgm_Interpolation$PowIn;
    cbgm_Interpolation$Pow__init_(var$1, 2);
    cbgm_Interpolation_pow2In = var$1;
    cbgm_Interpolation_slowFast = var$1;
    var$1 = new cbgm_Interpolation$PowOut;
    cbgm_Interpolation$Pow__init_(var$1, 2);
    cbgm_Interpolation_pow2Out = var$1;
    cbgm_Interpolation_fastSlow = var$1;
    var$1 = new cbgm_Interpolation$5;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_pow2InInverse = var$1;
    var$1 = new cbgm_Interpolation$6;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_pow2OutInverse = var$1;
    cbgm_Interpolation_pow3 = cbgm_Interpolation$Pow__init_0(3);
    var$1 = new cbgm_Interpolation$PowIn;
    cbgm_Interpolation$Pow__init_(var$1, 3);
    cbgm_Interpolation_pow3In = var$1;
    var$1 = new cbgm_Interpolation$PowOut;
    cbgm_Interpolation$Pow__init_(var$1, 3);
    cbgm_Interpolation_pow3Out = var$1;
    var$1 = new cbgm_Interpolation$7;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_pow3InInverse = var$1;
    var$1 = new cbgm_Interpolation$8;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_pow3OutInverse = var$1;
    cbgm_Interpolation_pow4 = cbgm_Interpolation$Pow__init_0(4);
    var$1 = new cbgm_Interpolation$PowIn;
    cbgm_Interpolation$Pow__init_(var$1, 4);
    cbgm_Interpolation_pow4In = var$1;
    var$1 = new cbgm_Interpolation$PowOut;
    cbgm_Interpolation$Pow__init_(var$1, 4);
    cbgm_Interpolation_pow4Out = var$1;
    cbgm_Interpolation_pow5 = cbgm_Interpolation$Pow__init_0(5);
    var$1 = new cbgm_Interpolation$PowIn;
    cbgm_Interpolation$Pow__init_(var$1, 5);
    cbgm_Interpolation_pow5In = var$1;
    var$1 = new cbgm_Interpolation$PowOut;
    cbgm_Interpolation$Pow__init_(var$1, 5);
    cbgm_Interpolation_pow5Out = var$1;
    var$1 = new cbgm_Interpolation$9;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_sine = var$1;
    var$1 = new cbgm_Interpolation$10;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_sineIn = var$1;
    var$1 = new cbgm_Interpolation$11;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_sineOut = var$1;
    cbgm_Interpolation_exp10 = cbgm_Interpolation$Exp__init_0(2.0, 10.0);
    var$1 = new cbgm_Interpolation$ExpIn;
    cbgm_Interpolation$Exp__init_(var$1, 2.0, 10.0);
    cbgm_Interpolation_exp10In = var$1;
    var$1 = new cbgm_Interpolation$ExpOut;
    cbgm_Interpolation$Exp__init_(var$1, 2.0, 10.0);
    cbgm_Interpolation_exp10Out = var$1;
    cbgm_Interpolation_exp5 = cbgm_Interpolation$Exp__init_0(2.0, 5.0);
    var$1 = new cbgm_Interpolation$ExpIn;
    cbgm_Interpolation$Exp__init_(var$1, 2.0, 5.0);
    cbgm_Interpolation_exp5In = var$1;
    var$1 = new cbgm_Interpolation$ExpOut;
    cbgm_Interpolation$Exp__init_(var$1, 2.0, 5.0);
    cbgm_Interpolation_exp5Out = var$1;
    var$1 = new cbgm_Interpolation$12;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_circle = var$1;
    var$1 = new cbgm_Interpolation$13;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_circleIn = var$1;
    var$1 = new cbgm_Interpolation$14;
    cbgm_Interpolation__init_(var$1);
    cbgm_Interpolation_circleOut = var$1;
    cbgm_Interpolation_elastic = cbgm_Interpolation$Elastic__init_0(2.0, 10.0, 7, 1.0);
    var$1 = new cbgm_Interpolation$ElasticIn;
    cbgm_Interpolation$Elastic__init_(var$1, 2.0, 10.0, 6, 1.0);
    cbgm_Interpolation_elasticIn = var$1;
    var$1 = new cbgm_Interpolation$ElasticOut;
    cbgm_Interpolation$Elastic__init_(var$1, 2.0, 10.0, 7, 1.0);
    cbgm_Interpolation_elasticOut = var$1;
    var$1 = new cbgm_Interpolation$Swing;
    cbgm_Interpolation__init_(var$1);
    var$1.$scale0 = 3.0;
    cbgm_Interpolation_swing = var$1;
    var$1 = new cbgm_Interpolation$SwingIn;
    cbgm_Interpolation__init_(var$1);
    var$1.$scale3 = 2.0;
    cbgm_Interpolation_swingIn = var$1;
    var$1 = new cbgm_Interpolation$SwingOut;
    cbgm_Interpolation__init_(var$1);
    var$1.$scale1 = 2.0;
    cbgm_Interpolation_swingOut = var$1;
    var$1 = new cbgm_Interpolation$Bounce;
    cbgm_Interpolation$BounceOut__init_(var$1, 4);
    cbgm_Interpolation_bounce = var$1;
    var$1 = new cbgm_Interpolation$BounceIn;
    cbgm_Interpolation$BounceOut__init_(var$1, 4);
    cbgm_Interpolation_bounceIn = var$1;
    cbgm_Interpolation_bounceOut = cbgm_Interpolation$BounceOut__init_0(4);
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$simpleName = null;
    a.$platformClass = null;
    a.$declaredConstructors = null;
}
let jl_Class_reflectionInitialized = 0,
jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null) {
        $result = new jl_Class;
        $result.$platformClass = $cls;
        $cls.classObject = $result;
    }
    return $result;
},
jl_Class_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = (!($this.$platformClass.$meta.flags & 2) ? 0 : 1) ? $rt_s(11) : !jl_Class_isPrimitive($this) ? $rt_s(12) : $rt_s(13);
    var$2 = jl_Class_getName($this);
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName($this.$platformClass);
    return $this.$name;
},
jl_Class_getSimpleName = $this => {
    let $simpleName, var$2, $lastDollar, $lastDot;
    $simpleName = $this.$simpleName;
    if ($simpleName === null) {
        if (jl_Class_isArray($this)) {
            $simpleName = jl_Class_getSimpleName(jl_Class_getComponentType($this));
            var$2 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$2);
            jl_StringBuilder_append(jl_StringBuilder_append(var$2, $simpleName), $rt_s(14));
            $simpleName = jl_AbstractStringBuilder_toString(var$2);
        } else {
            $simpleName = $this.$platformClass.$meta.enclosingClass;
            if (($simpleName === null ? null : jl_Class_getClass($simpleName)) !== null) {
                $simpleName = $rt_str($this.$platformClass.$meta.simpleName);
                if ($simpleName === null)
                    $simpleName = $rt_s(13);
            } else {
                $simpleName = otp_Platform_getName($this.$platformClass);
                $lastDollar = jl_String_lastIndexOf1($simpleName, 36);
                if ($lastDollar == (-1)) {
                    $lastDot = jl_String_lastIndexOf1($simpleName, 46);
                    if ($lastDot != (-1))
                        $simpleName = jl_String_substring0($simpleName, $lastDot + 1 | 0);
                } else {
                    $simpleName = jl_String_substring0($simpleName, $lastDollar + 1 | 0);
                    if (jl_String_charAt($simpleName, 0) >= 48 && jl_String_charAt($simpleName, 0) <= 57)
                        $simpleName = $rt_s(13);
                }
            }
        }
        $this.$simpleName = $simpleName;
    }
    return $simpleName;
},
jl_Class_isPrimitive = $this => {
    return $this.$platformClass.$meta.primitive ? 1 : 0;
},
jl_Class_isArray = $this => {
    return otp_Platform_getArrayItem($this.$platformClass) === null ? 0 : 1;
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass(otp_Platform_getArrayItem($this.$platformClass));
},
jl_Class_createMetadata = () => {
    cbggg_GlyphLayout$GlyphRun.$meta.methods = [
        {
            name : "<init>",
            modifiers : 0,
            accessLevel : 3,
            parameterTypes : [],
            returnType : $rt_voidcls,
            callable : null
        }, {
            name : "appendRun",
            modifiers : 0,
            accessLevel : 0,
            parameterTypes : [cbggg_GlyphLayout$GlyphRun],
            returnType : $rt_voidcls,
            callable : null
        }, {
            name : "reset",
            modifiers : 0,
            accessLevel : 3,
            parameterTypes : [],
            returnType : $rt_voidcls,
            callable : null
        }, {
            name : "toString",
            modifiers : 0,
            accessLevel : 3,
            parameterTypes : [],
            returnType : jl_String,
            callable : null
        }];
},
jl_Class_getDeclaredConstructors = $this => {
    let $jsMethods, $count, $i, var$4, $jsMethod, $jsParameterTypes, $parameterTypes, var$8, $j, var$10, var$11, var$12;
    if (!jl_Class_isPrimitive($this) && !jl_Class_isArray($this)) {
        if ($this.$declaredConstructors === null) {
            if (!jl_Class_reflectionInitialized) {
                jl_Class_reflectionInitialized = 1;
                jl_Class_createMetadata();
            }
            $jsMethods = $this.$platformClass.$meta.methods;
            $this.$declaredConstructors = $rt_createArray(jlr_Constructor, $jsMethods.length);
            $count = 0;
            $i = 0;
            while ($i < $jsMethods.length) {
                var$4 = $jsMethods[$i];
                $jsMethod = var$4 === null ? null : !(var$4 instanceof $rt_objcls()) ? var$4 : otji_JSWrapper_unwrap(var$4);
                if (jl_String_equals($rt_str($jsMethod.name), $rt_s(15))) {
                    $jsParameterTypes = $jsMethod.parameterTypes;
                    $parameterTypes = $rt_createArray(jl_Class, $jsParameterTypes.length);
                    var$8 = $parameterTypes.data;
                    $j = 0;
                    var$10 = var$8.length;
                    while ($j < var$10) {
                        var$8[$j] = jl_Class_getClass($jsParameterTypes[$j]);
                        $j = $j + 1 | 0;
                    }
                    var$8 = $this.$declaredConstructors;
                    var$10 = $count + 1 | 0;
                    var$11 = new jlr_Constructor;
                    var$4 = $rt_str($jsMethod.name);
                    var$12 = $jsMethod.modifiers;
                    $j = $jsMethod.accessLevel;
                    $jsParameterTypes = otji_JS_functionAsObject($jsMethod.callable, "call");
                    if ($jsParameterTypes === null)
                        $jsMethod = null;
                    else {
                        $jsMethod = new otcir_MethodCaller$forJs$lambda$_1_0;
                        $jsMethod.$_019 = $jsParameterTypes;
                    }
                    var$8 = var$8.data;
                    var$11.$declaringClass = $this;
                    var$11.$name2 = var$4;
                    var$11.$modifiers = var$12;
                    var$11.$accessLevel = $j;
                    var$11.$parameterTypes = $parameterTypes;
                    var$11.$caller = $jsMethod;
                    var$8[$count] = var$11;
                    $count = var$10;
                }
                $i = $i + 1 | 0;
            }
            $this.$declaredConstructors = ju_Arrays_copyOf0($this.$declaredConstructors, $count);
        }
        return $this.$declaredConstructors.$clone0();
    }
    return $rt_createArray(jlr_Constructor, 0);
},
jl_Class_getDeclaredConstructor = ($this, $parameterTypes) => {
    let var$2, var$3, var$4, $constructor;
    var$2 = (jl_Class_getDeclaredConstructors($this)).data;
    var$3 = var$2.length;
    var$4 = 0;
    while (true) {
        if (var$4 >= var$3) {
            $constructor = new jl_NoSuchMethodException;
            jl_Exception__init_($constructor);
            $rt_throw($constructor);
        }
        $constructor = var$2[var$4];
        if (ju_Arrays_equals(jlr_Constructor_getParameterTypes($constructor), $parameterTypes))
            break;
        var$4 = var$4 + 1 | 0;
    }
    return $constructor;
},
jl_Class_getConstructor = ($this, $parameterTypes) => {
    let var$2, var$3, var$4, $constructor;
    var$2 = (jl_Class_getDeclaredConstructors($this)).data;
    var$3 = var$2.length;
    var$4 = 0;
    while (true) {
        if (var$4 >= var$3) {
            $constructor = new jl_NoSuchMethodException;
            jl_Exception__init_($constructor);
            $rt_throw($constructor);
        }
        $constructor = var$2[var$4];
        if (jlr_Modifier_isPublic(jlr_Constructor_getModifiers($constructor)) && ju_Arrays_equals(jlr_Constructor_getParameterTypes($constructor), $parameterTypes))
            break;
        var$4 = var$4 + 1 | 0;
    }
    return $constructor;
},
otji_JS = $rt_classWithoutFields(),
otji_JS_wrap = $array => {
    let var$2, $result, $i, var$5;
    if ($array === null)
        return null;
    $array = $array.data;
    var$2 = $array.length;
    $result = new Int8Array(var$2);
    $i = 0;
    while ($i < var$2) {
        var$5 = $array[$i];
        $result[$i] = var$5;
        $i = $i + 1 | 0;
    }
    return $result;
},
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
otji_JS_functionAsObject = (var$1, var$2) => {
    if (typeof var$1 !== 'function') return var$1;
    let result = {  };
    result[var$2] = var$1;
    return result;
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
},
otp_Platform_isAssignable = (var$1, var$2) => {
    let $supertypes, $i;
    if (var$1 === var$2)
        return 1;
    $supertypes = var$1.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], var$2))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
otp_Platform_launchThread = $runnable => {
    let var$2, var$3, var$4;
    $runnable = $runnable.$_09;
    if (!jl_Object_isEmptyMonitor($runnable)) {
        var$2 = $runnable.$monitor;
        if (var$2.$owner === null) {
            $runnable = var$2.$enteringThreads;
            if ($runnable !== null && !otp_PlatformQueue_isEmpty$static($runnable)) {
                $runnable = var$2.$enteringThreads.shift();
                if ($runnable !== null && !($runnable instanceof $rt_objcls()))
                    $runnable = otji_JSWrapper_wrap($runnable);
                var$3 = $runnable;
                var$2.$enteringThreads = null;
                $runnable = var$3;
                var$2 = $runnable.$_08;
                var$3 = $runnable.$_14;
                var$4 = $runnable.$_23;
                $runnable = $runnable.$_31;
                jl_Thread_setCurrentThread(var$2);
                var$3 = var$3.$monitor;
                var$3.$owner = var$2;
                var$3.$count = var$3.$count + var$4 | 0;
                var$2 = null;
                otpp_AsyncCallbackWrapper_complete($runnable, var$2);
            }
        }
    }
},
otp_Platform_schedule = (var$1, var$2) => {
    setTimeout(() => {
        otp_Platform_launchThread(var$1);
    }, var$2);
},
otp_Platform_getArrayItem = var$1 => {
    return var$1.$meta.item;
},
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
},
otp_Platform_createQueueJs$js_body$_30 = () => {
    return [];
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
    a.$stackTrace = null;
}
let jl_Throwable__init_ = ($this, $message, $cause) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
    $this.$cause = $cause;
},
jl_Throwable__init_0 = (var_0, var_1) => {
    let var_2 = new jl_Throwable();
    jl_Throwable__init_(var_2, var_0, var_1);
    return var_2;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getLocalizedMessage = $this => {
    return $this.$getMessage();
},
jl_Throwable_getCause = $this => {
    let var$1;
    var$1 = $this.$cause;
    if (var$1 === $this)
        var$1 = null;
    return var$1;
},
jl_Throwable_printStackTrace0 = $this => {
    jl_Throwable_printStackTrace($this, jl_System_err());
},
jl_Throwable_printStackTrace = ($this, $stream) => {
    let var$2, var$3, $message, var$5, var$6, var$7, $element, var$9;
    var$2 = jl_Class_getName(jl_Object_getClass($this));
    var$3 = $stream;
    otcic_JSStderrPrintStream_print(var$3, var$2);
    $message = $this.$getMessage();
    if ($message !== null) {
        var$2 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$2);
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(16)), $message);
        otcic_JSStderrPrintStream_print(var$3, jl_AbstractStringBuilder_toString(var$2));
    }
    a: {
        var$2 = $stream;
        otcic_JSStderrPrintStream_print(var$2, $rt_s(17));
        var$5 = $this.$stackTrace;
        if (var$5 !== null) {
            var$5 = var$5.data;
            var$6 = var$5.length;
            var$7 = 0;
            while (true) {
                if (var$7 >= var$6)
                    break a;
                $element = var$5[var$7];
                otcic_JSStderrPrintStream_print(var$3, $rt_s(18));
                var$9 = $rt_s(19);
                if ($element !== null)
                    var$9 = $element.$toString();
                otcic_JsConsolePrintStream_println(var$2, var$9);
                var$7 = var$7 + 1 | 0;
            }
        }
    }
    var$2 = $this.$cause;
    if (var$2 !== null && var$2 !== $this) {
        otcic_JSStderrPrintStream_print(var$3, $rt_s(20));
        jl_Throwable_printStackTrace($this.$cause, $stream);
    }
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
},
jl_Exception__init_0 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_0 = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_0);
    return var_0;
},
jl_RuntimeException__init_ = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_1, var_0);
    return var_1;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
ji_Serializable = $rt_classWithoutFields(0),
jl_Comparable = $rt_classWithoutFields(0),
jl_CharSequence = $rt_classWithoutFields(0);
function jl_String() {
    jl_Object.call(this);
    this.$hashCode0 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String__init_5 = $this => {
    $this.$nativeString = "";
},
jl_String__init_2 = () => {
    let var_0 = new jl_String();
    jl_String__init_5(var_0);
    return var_0;
},
jl_String__init_1 = ($this, $characters) => {
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, $characters.data.length);
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_6 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_3 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_6(var_1, var_0);
    return var_1;
},
jl_String__init_4 = (var$0, var$1, $offset, $count) => {
    ju_Objects_checkFromIndexSize($offset, $count, var$1.data.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_4(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_startsWith0 = ($this, $prefix, $toffset) => {
    let $i, var$4, var$5;
    if (($toffset + $prefix.$nativeString.length | 0) > $this.$nativeString.length)
        return 0;
    $i = 0;
    while ($i < $prefix.$nativeString.length) {
        var$4 = jl_String_charAt($prefix, $i);
        var$5 = $toffset + 1 | 0;
        if (var$4 != jl_String_charAt($this, $toffset))
            return 0;
        $i = $i + 1 | 0;
        $toffset = var$5;
    }
    return 1;
},
jl_String_startsWith = ($this, $prefix) => {
    if ($this === $prefix)
        return 1;
    return jl_String_startsWith0($this, $prefix, 0);
},
jl_String_endsWith = ($this, $suffix) => {
    let $j, $i, var$4, var$5;
    if ($this === $suffix)
        return 1;
    if ($suffix.$nativeString.length > $this.$nativeString.length)
        return 0;
    $j = 0;
    $i = $this.$nativeString.length - $suffix.$nativeString.length | 0;
    while ($i < $this.$nativeString.length) {
        var$4 = jl_String_charAt($this, $i);
        var$5 = $j + 1 | 0;
        if (var$4 != jl_String_charAt($suffix, $j))
            return 0;
        $i = $i + 1 | 0;
        $j = var$5;
    }
    return 1;
},
jl_String_indexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i >= $this.$nativeString.length)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i >= ($this.$nativeString.length - 1 | 0))
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_min($fromIndex, $this.$nativeString.length - 1 | 0);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i < 0)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + (-1) | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i < 1)
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $lo) {
            $fromIndex = $i - 1 | 0;
            if ($this.$nativeString.charCodeAt($fromIndex) == $hi)
                break;
        }
        $i = $i + (-1) | 0;
    }
    return $fromIndex;
},
jl_String_lastIndexOf1 = ($this, $ch) => {
    return jl_String_lastIndexOf($this, $ch, $this.$nativeString.length - 1 | 0);
},
jl_String_indexOf0 = ($this, $str, $fromIndex) => {
    let $i, $toIndex, $j;
    $i = jl_Math_max(0, $fromIndex);
    $toIndex = $this.$nativeString.length - $str.$nativeString.length | 0;
    a: while (true) {
        if ($i > $toIndex)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$nativeString.length)
                break a;
            if (jl_String_charAt($this, $i + $j | 0) != jl_String_charAt($str, $j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf0 = ($this, $str, $fromIndex) => {
    let $i, $j;
    $i = jl_Math_min($fromIndex, $this.$nativeString.length - $str.$nativeString.length | 0);
    a: while (true) {
        if ($i < 0)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$nativeString.length)
                break a;
            if (jl_String_charAt($this, $i + $j | 0) != jl_String_charAt($str, $j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + (-1) | 0;
    }
    return $i;
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4, var$5;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_3($this.$nativeString.substring($beginIndex, $endIndex));
    var$5 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$5);
    $rt_throw(var$5);
},
jl_String_substring0 = ($this, $beginIndex) => {
    return jl_String_substring($this, $beginIndex, $this.$nativeString.length);
},
jl_String_replace = ($this, $target, $replacement) => {
    let $sb, $i, $sz, var$6, var$7, $i_0, $j;
    if ($target === $replacement)
        return $this;
    $target = $target;
    if (jl_String_isEmpty($target)) {
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($sb);
        $i = 0;
        while ($i < $this.$nativeString.length) {
            jl_StringBuilder_append($sb, $replacement);
            jl_AbstractStringBuilder_append($sb, jl_String_charAt($this, $i));
            $i = $i + 1 | 0;
        }
        jl_StringBuilder_append($sb, $replacement);
        return jl_AbstractStringBuilder_toString($sb);
    }
    if ($target.$nativeString.length == 1) {
        $sb = $replacement;
        if ($sb.$nativeString.length == 1) {
            $i = jl_String_charAt($target, 0);
            $sz = jl_String_charAt($sb, 0);
            if ($i != $sz) {
                var$6 = $rt_createCharArray($this.$nativeString.length);
                var$7 = var$6.data;
                $i_0 = 0;
                while ($i_0 < $this.$nativeString.length) {
                    var$7[$i_0] = jl_String_charAt($this, $i_0) != $i ? jl_String_charAt($this, $i_0) : $sz;
                    $i_0 = $i_0 + 1 | 0;
                }
                $this = jl_String__init_2();
                $this.$nativeString = $rt_fullArrayToString(var$6.data);
            }
            return $this;
        }
    }
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    $sz = $this.$nativeString.length - $target.$nativeString.length | 0;
    $i_0 = 0;
    while ($i_0 <= $sz) {
        $j = 0;
        a: {
            while (true) {
                if ($j >= $target.$nativeString.length) {
                    jl_StringBuilder_append($sb, $replacement);
                    $i_0 = $i_0 + ($target.$nativeString.length - 1 | 0) | 0;
                    break a;
                }
                if (jl_String_charAt($this, $i_0 + $j | 0) != jl_String_charAt($target, $j))
                    break;
                $j = $j + 1 | 0;
            }
            jl_AbstractStringBuilder_append($sb, jl_String_charAt($this, $i_0));
        }
        $i_0 = $i_0 + 1 | 0;
    }
    jl_StringBuilder_append($sb, jl_String_substring0($this, $i_0));
    return jl_AbstractStringBuilder_toString($sb);
},
jl_String_trim = $this => {
    let $lower, $upper;
    $lower = 0;
    $upper = $this.$nativeString.length - 1 | 0;
    a: {
        while ($lower <= $upper) {
            if (jl_String_charAt($this, $lower) > 32)
                break a;
            $lower = $lower + 1 | 0;
        }
    }
    while ($lower <= $upper && jl_String_charAt($this, $upper) <= 32) {
        $upper = $upper + (-1) | 0;
    }
    return jl_String_substring($this, $lower, $upper + 1 | 0);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, var$2, $i, var$4;
    $array = $rt_createCharArray($this.$nativeString.length);
    var$2 = $array.data;
    $i = 0;
    var$4 = var$2.length;
    while ($i < var$4) {
        var$2[$i] = jl_String_charAt($this, $i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf = $obj => {
    return $obj === null ? $rt_s(19) : $obj.$toString();
},
jl_String_valueOf0 = $i => {
    let var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$2, $i));
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode0) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode0 = (31 * $this.$hashCode0 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode0;
},
jl_String_split = ($this, $regex) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    $regex = jur_Pattern_compile($regex);
    var$2 = $this;
    var$3 = ju_ArrayList__init_();
    $regex = jur_Pattern_matcher($regex, var$2);
    var$4 = 0;
    var$5 = 0;
    var$2 = var$2;
    if (!var$2.$nativeString.length) {
        var$6 = $rt_createArray(jl_String, 1);
        var$6.data[0] = $rt_s(13);
    } else {
        while (jur_Matcher_find($regex)) {
            var$4 = var$4 + 1 | 0;
            ju_ArrayList_add(var$3, jl_String_substring(var$2, var$5, jur_Matcher_start($regex)));
            var$5 = jur_Matcher_end($regex);
        }
        ju_ArrayList_add(var$3, jl_String_substring(var$2, var$5, var$2.$nativeString.length));
        var$7 = var$4 + 1 | 0;
        while (true) {
            var$7 = var$7 + (-1) | 0;
            if (var$7 < 0)
                break;
            if ((ju_ArrayList_get(var$3, var$7)).$nativeString.length)
                break;
            ju_ArrayList_remove(var$3, var$7);
        }
        if (var$7 < 0)
            var$7 = 0;
        var$6 = $rt_createArray(jl_String, var$7);
        var$8 = var$6.data;
        $regex = var$3;
        var$5 = $regex.$size1;
        var$7 = var$8.length;
        if (var$7 < var$5)
            var$6 = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass(var$6)), var$5);
        else
            while (var$5 < var$7) {
                var$8[var$5] = null;
                var$5 = var$5 + 1 | 0;
            }
        var$7 = 0;
        var$3 = ju_AbstractList_iterator($regex);
        while (ju_AbstractList$1_hasNext(var$3)) {
            var$8 = var$6.data;
            var$4 = var$7 + 1 | 0;
            var$8[var$7] = ju_AbstractList$1_next(var$3);
            var$7 = var$4;
        }
        var$6 = var$6;
    }
    return var$6;
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_2();
    jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_115_0;
},
jl_Number = $rt_classWithoutFields();
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer__init_0 = ($this, $value) => {
    $this.$value0 = $value;
},
jl_Integer__init_ = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_0(var_1, var_0);
    return var_1;
},
jl_Integer_toHexString = $i => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    if (!$i)
        var$2 = $rt_s(21);
    else {
        var$3 = (((32 - jl_Integer_numberOfLeadingZeros($i) | 0) + 4 | 0) - 1 | 0) / 4 | 0;
        var$4 = $rt_createCharArray(var$3);
        var$5 = var$4.data;
        var$6 = (var$3 - 1 | 0) * 4 | 0;
        var$3 = 0;
        while (var$6 >= 0) {
            var$7 = var$3 + 1 | 0;
            var$5[var$3] = jl_Character_forDigit(($i >>> var$6 | 0) & 15, 16);
            var$6 = var$6 - 4 | 0;
            var$3 = var$7;
        }
        var$2 = jl_String__init_(var$4);
    }
    return var$2;
},
jl_Integer_toString = $i => {
    return (jl_AbstractStringBuilder_append2(jl_AbstractStringBuilder__init_1(20), $i, 10)).$toString();
},
jl_Integer_parseInt = ($s, $radix) => {
    if ($s !== null)
        return jl_Integer_parseIntImpl($s, 0, $s.$nativeString.length, $radix);
    $s = new jl_NumberFormatException;
    jl_RuntimeException__init_($s, $rt_s(22));
    $rt_throw($s);
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12;
    if ($beginIndex == $endIndex) {
        $s = new jl_NumberFormatException;
        jl_RuntimeException__init_($s, $rt_s(23));
        $rt_throw($s);
    }
    if ($radix >= 2 && $radix <= 36) {
        a: {
            $negative = 0;
            $s = $s;
            switch (jl_String_charAt($s, $beginIndex)) {
                case 43:
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                case 45:
                    $negative = 1;
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                default:
            }
            var$6 = $beginIndex;
        }
        $value = 0;
        $maxValue = 1 + (2147483647 / $radix | 0) | 0;
        if (var$6 == $endIndex) {
            $s = new jl_NumberFormatException;
            jl_Exception__init_($s);
            $rt_throw($s);
        }
        while (var$6 < $endIndex) {
            var$9 = var$6 + 1 | 0;
            $digit = jl_String_charAt($s, var$6);
            $digit = $digit >= 48 && $digit <= 57 ? $digit - 48 | 0 : $digit >= 97 && $digit <= 122 ? ($digit - 97 | 0) + 10 | 0 : $digit >= 65 && $digit <= 90 ? ($digit - 65 | 0) + 10 | 0 : (-1);
            if ($digit < 0) {
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(var$12, $rt_s(24)), $s);
                jl_RuntimeException__init_(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            if ($digit >= $radix) {
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$12, $rt_s(25)), $radix), $rt_s(16)), $s);
                jl_RuntimeException__init_(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            if ($value > $maxValue) {
                $s = new jl_NumberFormatException;
                jl_RuntimeException__init_($s, $rt_s(26));
                $rt_throw($s);
            }
            $value = $rt_imul($radix, $value) + $digit | 0;
            if ($value < 0) {
                if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                    return (-2147483648);
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(var$12, $rt_s(27)), $s);
                jl_RuntimeException__init_(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            var$6 = var$9;
        }
        if ($negative)
            $value =  -$value | 0;
        return $value;
    }
    $s = new jl_NumberFormatException;
    var$11 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$11);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$11, $rt_s(28)), $radix);
    jl_RuntimeException__init_($s, jl_AbstractStringBuilder_toString(var$11));
    $rt_throw($s);
},
jl_Integer_parseInt0 = $s => {
    return jl_Integer_parseInt($s, 10);
},
jl_Integer_valueOf = $i => {
    let var$2, var$3;
    if ($i >= (-128) && $i <= 127) {
        a: {
            if (jl_Integer_integerCache === null) {
                jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
                var$2 = 0;
                while (true) {
                    var$3 = jl_Integer_integerCache.data;
                    if (var$2 >= var$3.length)
                        break a;
                    var$3[var$2] = jl_Integer__init_(var$2 - 128 | 0);
                    var$2 = var$2 + 1 | 0;
                }
            }
        }
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_($i);
},
jl_Integer_intValue = $this => {
    return $this.$value0;
},
jl_Integer_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Integer && $other.$value0 == $this.$value0 ? 1 : 0;
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3;
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 >>> 8 | 0;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i >>> 4 | 0;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 >>> 2 | 0;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3;
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 << 8;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i << 4;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 << 2;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length1 = 0;
}
let jl_AbstractStringBuilder__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this, 16);
},
jl_AbstractStringBuilder__init_2 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_0 = ($this, $capacity) => {
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_1 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append0 = ($this, $string) => {
    return $this.$insert($this.$length1, $string);
},
jl_AbstractStringBuilder_insert = ($this, $index, $string) => {
    let $i, $i_0, var$5, var$6;
    if ($index >= 0 && $index <= $this.$length1) {
        if ($string === null)
            $string = $rt_s(19);
        else if (jl_String_isEmpty($string))
            return $this;
        $this.$ensureCapacity($this.$length1 + $string.$nativeString.length | 0);
        $i = $this.$length1 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$nativeString.length | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length1 = $this.$length1 + $string.$nativeString.length | 0;
        $i_0 = 0;
        while ($i_0 < $string.$nativeString.length) {
            var$5 = $this.$buffer.data;
            var$6 = $index + 1 | 0;
            var$5[$index] = jl_String_charAt($string, $i_0);
            $i_0 = $i_0 + 1 | 0;
            $index = var$6;
        }
        return $this;
    }
    $string = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_($string);
    $rt_throw($string);
},
jl_AbstractStringBuilder_append2 = ($this, $value, $radix) => {
    return jl_AbstractStringBuilder_insert2($this, $this.$length1, $value, $radix);
},
jl_AbstractStringBuilder_insert2 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                $positive = $target;
            else {
                var$5 = $this.$buffer.data;
                $positive = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                $target = $positive + 1 | 0;
                var$5[$positive] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                $positive = $target;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_insert3 = ($this, $target, $value) => {
    let $mantissa, var$4, $number, $exp, $negative, $intPart, $sz, $digits, $zeros, $leadingZeros, $leadingZero, $pos, $intDigit, $i;
    $mantissa = $rt_compare($value, 0.0);
    if (!$mantissa) {
        if (1.0 / $value === Infinity) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
            var$4 = $this.$buffer.data;
            $mantissa = $target + 1 | 0;
            var$4[$target] = 48;
            $target = $mantissa + 1 | 0;
            var$4[$mantissa] = 46;
            var$4[$target] = 48;
            return $this;
        }
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        $mantissa = $target + 1 | 0;
        var$4[$target] = 45;
        $target = $mantissa + 1 | 0;
        var$4[$mantissa] = 48;
        $mantissa = $target + 1 | 0;
        var$4[$target] = 46;
        var$4[$mantissa] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        $mantissa = $target + 1 | 0;
        var$4[$target] = 78;
        $target = $mantissa + 1 | 0;
        var$4[$mantissa] = 97;
        var$4[$target] = 78;
        return $this;
    }
    if (!isFinite($value) ? 1 : 0) {
        if ($mantissa > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            $mantissa = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            $mantissa = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        $target = $mantissa + 1 | 0;
        var$4[$mantissa] = 73;
        $mantissa = $target + 1 | 0;
        var$4[$target] = 110;
        $target = $mantissa + 1 | 0;
        var$4[$mantissa] = 102;
        $mantissa = $target + 1 | 0;
        var$4[$target] = 105;
        $target = $mantissa + 1 | 0;
        var$4[$mantissa] = 110;
        $mantissa = $target + 1 | 0;
        var$4[$target] = 105;
        $target = $mantissa + 1 | 0;
        var$4[$mantissa] = 116;
        var$4[$target] = 121;
        return $this;
    }
    $number = jl_AbstractStringBuilder$Constants_floatAnalysisResult;
    otcit_FloatAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa;
    $exp = $number.$exponent;
    $negative = $number.$sign0;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 9;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    $leadingZeros = 0;
    $leadingZero = 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $intPart = 0;
            $leadingZeros = ( -$exp | 0) - 1 | 0;
            $leadingZero = 1;
            $sz = $sz + 1 | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + ($sz + ($digits + $leadingZeros | 0) | 0) | 0);
    if (!$negative)
        $negative = $target;
    else {
        var$4 = $this.$buffer.data;
        $negative = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = 100000000;
    if ($leadingZero) {
        var$4 = $this.$buffer.data;
        $target = $negative + 1 | 0;
        var$4[$negative] = 48;
        $negative = $target + 1 | 0;
        var$4[$target] = 46;
        while (true) {
            $target = $leadingZeros + (-1) | 0;
            if ($leadingZeros <= 0)
                break;
            $intDigit = $negative + 1 | 0;
            var$4[$negative] = 48;
            $leadingZeros = $target;
            $negative = $intDigit;
        }
    }
    $i = 0;
    while ($i < $digits) {
        if ($pos <= 0)
            $intDigit = 0;
        else {
            $intDigit = $mantissa / $pos | 0;
            $mantissa = $mantissa % $pos | 0;
        }
        var$4 = $this.$buffer.data;
        $target = $negative + 1 | 0;
        var$4[$negative] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            $negative = $target;
        else {
            $negative = $target + 1 | 0;
            var$4[$target] = 46;
        }
        $pos = $pos / 10 | 0;
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        $target = $negative + 1 | 0;
        var$4[$negative] = 69;
        if ($exp >= 0)
            $mantissa = $target;
        else {
            $exp =  -$exp | 0;
            $mantissa = $target + 1 | 0;
            var$4[$target] = 45;
        }
        if ($exp < 10)
            $intDigit = $mantissa;
        else {
            $intDigit = $mantissa + 1 | 0;
            var$4[$mantissa] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        var$4[$intDigit] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
},
jl_AbstractStringBuilder_trailingDecimalZeros = $n => {
    let $result, $zeros, var$4;
    if (!($n % 1000000000 | 0))
        return 9;
    $result = 0;
    $zeros = 1;
    if (!($n % 100000000 | 0)) {
        $result = 8;
        $zeros = 100000000;
    }
    var$4 = $zeros * 10000 | 0;
    if ($n % var$4 | 0)
        var$4 = $zeros;
    else
        $result = $result | 4;
    $zeros = var$4 * 100 | 0;
    if ($n % $zeros | 0)
        $zeros = var$4;
    else
        $result = $result | 2;
    if (!($n % ($zeros * 10 | 0) | 0))
        $result = $result | 1;
    return $result;
},
jl_AbstractStringBuilder_append = ($this, $c) => {
    return $this.$insert1($this.$length1, $c);
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let var$2, $newLength;
    var$2 = $this.$buffer.data.length;
    if (var$2 >= $capacity)
        return;
    $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max(var$2 * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf1($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_0($this.$buffer, 0, $this.$length1);
},
jl_AbstractStringBuilder_append3 = ($this, $chars, $offset, $len) => {
    return $this.$insert2($this.$length1, $chars, $offset, $len);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $chars, $offset, $len) => {
    let var$5, var$6, var$7, var$8;
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + $len | 0);
    var$5 = $len + $offset | 0;
    while ($offset < var$5) {
        var$6 = $chars.data;
        var$7 = $this.$buffer.data;
        $len = $index + 1 | 0;
        var$8 = $offset + 1 | 0;
        var$7[$index] = var$6[$offset];
        $index = $len;
        $offset = var$8;
    }
    return $this;
},
jl_AbstractStringBuilder_append1 = ($this, $chars) => {
    return $this.$append4($chars, 0, $chars.data.length);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6;
    var$3 = $this.$length1;
    $sz = var$3 - $start | 0;
    $this.$ensureCapacity((var$3 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        var$6 = $this.$buffer.data;
        var$6[$end + $i | 0] = var$6[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length1 = $this.$length1 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    let var$2, var$3;
    var$2 = $this.$length1;
    var$3 = $this;
    $obj = $obj === null ? $rt_s(19) : $obj.$toString();
    jl_AbstractStringBuilder_insert(var$3, var$2, $obj);
    return $this;
},
jl_StringBuilder_append3 = ($this, $string) => {
    jl_AbstractStringBuilder_append0($this, $string);
    return $this;
},
jl_StringBuilder_append0 = ($this, $value) => {
    jl_AbstractStringBuilder_append2($this, $value, 10);
    return $this;
},
jl_StringBuilder_append5 = ($this, $value) => {
    let var$2;
    var$2 = $this.$length1;
    jl_AbstractStringBuilder_insert3($this, var$2, $value);
    return $this;
},
jl_StringBuilder_append2 = ($this, $c) => {
    jl_AbstractStringBuilder_append($this, $c);
    return $this;
},
jl_StringBuilder_append1 = ($this, $b) => {
    let var$2, var$3, var$4;
    var$2 = $this.$length1;
    var$3 = $this;
    var$4 = !$b ? $rt_s(29) : $rt_s(30);
    jl_AbstractStringBuilder_insert(var$3, var$2, var$4);
    return $this;
},
jl_StringBuilder_delete = ($this, $start, $end) => {
    let var$3, var$4, var$5, var$6, var$7, var$8;
    if ($start >= 0) {
        var$3 = $rt_compare($start, $end);
        if (var$3 <= 0) {
            var$4 = $this.$length1;
            if ($start <= var$4) {
                if (var$3) {
                    if ($end > var$4)
                        $end = var$4;
                    var$5 = var$4 - $end | 0;
                    $this.$length1 = var$4 - ($end - $start | 0) | 0;
                    var$4 = 0;
                    while (var$4 < var$5) {
                        var$6 = $this.$buffer.data;
                        var$3 = $start + 1 | 0;
                        var$7 = $end + 1 | 0;
                        var$6[$start] = var$6[$end];
                        var$4 = var$4 + 1 | 0;
                        $start = var$3;
                        $end = var$7;
                    }
                }
                return $this;
            }
        }
    }
    var$8 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$8);
    $rt_throw(var$8);
},
jl_StringBuilder_deleteCharAt = ($this, $index) => {
    let var$2, var$3, var$4, var$5;
    if ($index >= 0) {
        var$2 = $this.$length1;
        if ($index < var$2) {
            var$2 = var$2 - 1 | 0;
            $this.$length1 = var$2;
            while ($index < var$2) {
                var$3 = $this.$buffer.data;
                var$4 = $index + 1 | 0;
                var$3[$index] = var$3[var$4];
                $index = var$4;
            }
            return $this;
        }
    }
    var$5 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$5);
    $rt_throw(var$5);
},
jl_StringBuilder_subSequence = ($this, var$1, var$2) => {
    let var$3;
    var$3 = $this;
    if (var$1 <= var$2 && var$1 >= 0 && var$2 <= var$3.$length1)
        return jl_String__init_0(var$3.$buffer, var$1, var$2 - var$1 | 0);
    var$3 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$3);
    $rt_throw(var$3);
},
jl_StringBuilder_insert = ($this, var$1, var$2, var$3, var$4) => {
    jl_AbstractStringBuilder_insert0($this, var$1, var$2, var$3, var$4);
    return $this;
},
jl_StringBuilder_append4 = ($this, var$1, var$2, var$3) => {
    jl_AbstractStringBuilder_append3($this, var$1, var$2, var$3);
    return $this;
},
jl_StringBuilder_length = $this => {
    return $this.$length1;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert1($this, var$1, var$2);
    return $this;
},
jl_StringBuilder_insert1 = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert($this, var$1, var$2);
    return $this;
},
otcir_FieldInfo = $rt_classWithoutFields(),
otcir_MethodInfo = $rt_classWithoutFields(),
otcir_ClassList = $rt_classWithoutFields(),
dcgt_TeaVMLauncher = $rt_classWithoutFields(),
dcgt_TeaVMLauncher_$callClinit = () => {
    dcgt_TeaVMLauncher_$callClinit = $rt_eraseClinit(dcgt_TeaVMLauncher);
    dcgt_TeaVMLauncher__clinit_();
},
dcgt_TeaVMLauncher_main = $args => {
    let $config, var$3, var$4;
    dcgt_TeaVMLauncher_$callClinit();
    $config = new cgxgbt_TeaApplicationConfiguration;
    $config.$useGL30 = 0;
    $config.$preloadAssets = 1;
    $config.$storagePrefix = $rt_s(31);
    $config.$localStoragePrefix = $rt_s(32);
    $config.$shouldEncodePreference = 0;
    $config.$showDownloadLogs = 0;
    $config.$width = (-1);
    $config.$height = (-1);
    $config.$padHorizontal = 0;
    $config.$padVertical = 0;
    $config.$stencil = 0;
    $config.$antialiasing = 0;
    $config.$alpha = 0;
    $config.$premultipliedAlpha = 0;
    $config.$preserveDrawingBuffer = 0;
    $config.$useDebugGL = 0;
    $config.$usePhysicalPixels = 0;
    $config.$powerPreference = $rt_s(33);
    $config.$baseUrlProvider = new cgxgbtu_TeaDefaultBaseUrlProvider;
    $config.$canvasID = $rt_s(34);
    $config.$width = (-1);
    $config.$height = (-1);
    var$3 = new cgxgbt_TeaApplication;
    var$4 = new dcg_Main;
    var$3.$lifecycleListeners = cbgu_Array__init_1(1, 4);
    var$3.$initState = cgxgbt_TeaApplication$AppState_INIT;
    var$3.$lastWidth = (-1);
    var$3.$lastHeight = 1;
    var$3.$logLevel = 2;
    var$3.$prefs = cbgu_ObjectMap__init_();
    var$3.$runnables = cbgu_Array__init_();
    var$3.$runnablesHelper = cbgu_Array__init_();
    var$3.$window = cgxgbtdi_TeaWindow_get();
    var$3.$config = $config;
    var$3.$queueAppListener = var$4;
    cgxgbt_TeaApplication_init(var$3);
},
dcgt_TeaVMLauncher__clinit_ = () => {
    cbgu_ObjectMap__clinit_();
    jl_String__clinit_();
    jl_Float__clinit_();
    jl_AbstractStringBuilder$Constants__clinit_();
    jl_Integer__clinit_();
    otcit_FloatAnalyzer__clinit_();
    jl_Long__clinit_();
    cbgm_MathUtils__clinit_();
    jl_Character__clinit_();
    jlr_Modifier__clinit_();
    cbgg_Color__clinit_();
    cbggg_NinePatch__clinit_();
    cbgg_GLTexture__clinit_();
    cgxgbt_TeaApplication__clinit_();
    cgxgbt_TeaApplication$AppState__clinit_();
    cbg_Application$ApplicationType__clinit_();
    ju_Hashtable__clinit_();
    cbggg_GLVersion$Type__clinit_();
    jur_AbstractSet__clinit_();
    jur_AbstractCharClass$PredefinedCharacterClasses__clinit_();
    jur_AbstractCharClass__clinit_();
    jl_Thread__clinit_();
    cgxgbta_AssetType__clinit_();
    cbgg_Mesh$VertexDataType__clinit_();
    cbgm_Quaternion__clinit_();
    cbgu_BufferUtils__clinit_();
    cgxgbt_TeaTool__clinit_();
    jn_ByteOrder__clinit_();
    cbgg_Pixmap$Blending__clinit_();
    cbgg_Pixmap$Filter__clinit_();
    cbgg_Texture$TextureFilter__clinit_();
    cbgg_Texture$TextureWrap__clinit_();
    cbgg_Pixmap$Format__clinit_();
    cbg_Files$FileType__clinit_();
    cbgg_TextureData$TextureDataType__clinit_();
    cbggg_MipMapGenerator__clinit_();
    cbgu_StreamUtils__clinit_();
    jnc_CodingErrorAction__clinit_();
    jnc_CoderResult__clinit_();
},
otci_IntegerUtil = $rt_classWithoutFields();
function cgxgbt_TeaApplicationConfiguration() {
    let a = this; jl_Object.call(a);
    a.$useGL30 = 0;
    a.$windowListener = null;
    a.$preloadAssets = 0;
    a.$storagePrefix = null;
    a.$localStoragePrefix = null;
    a.$shouldEncodePreference = 0;
    a.$showDownloadLogs = 0;
    a.$canvasID = null;
    a.$width = 0;
    a.$height = 0;
    a.$padHorizontal = 0;
    a.$padVertical = 0;
    a.$stencil = 0;
    a.$antialiasing = 0;
    a.$alpha = 0;
    a.$premultipliedAlpha = 0;
    a.$preserveDrawingBuffer = 0;
    a.$useDebugGL = 0;
    a.$usePhysicalPixels = 0;
    a.$powerPreference = null;
    a.$preloadListener = null;
    a.$baseUrlProvider = null;
}
let cgxgbt_TeaApplicationConfiguration_isAutoSizeApplication = $this => {
    return !$this.$width && !$this.$height ? 1 : 0;
},
cbg_Application = $rt_classWithoutFields(0),
jl_Runnable = $rt_classWithoutFields(0);
function cgxgbt_TeaApplication() {
    let a = this; jl_Object.call(a);
    a.$delayInitCount = 0;
    a.$graphics = null;
    a.$input = null;
    a.$files = null;
    a.$net = null;
    a.$audio = null;
    a.$config = null;
    a.$queueAppListener = null;
    a.$appListener = null;
    a.$lifecycleListeners = null;
    a.$window = null;
    a.$initState = null;
    a.$lastWidth = 0;
    a.$lastHeight = 0;
    a.$logger = null;
    a.$logLevel = 0;
    a.$assetLoader = null;
    a.$prefs = null;
    a.$clipboard = null;
    a.$runnables = null;
    a.$runnablesHelper = null;
}
let cgxgbt_TeaApplication_WEB_SCRIPT_PATH = null,
cgxgbt_TeaApplication_WEB_ASSET_PATH = null,
cgxgbt_TeaApplication_agentInfo = null,
cgxgbt_TeaApplication_init = $this => {
    let $assetDownload, $hostPageBaseURL, var$3, var$4, $map, $instance, var$7, var$8;
    cgxgbt_TeaApplication_agentInfo = cgxgbta_TeaWebAgent_createAgent$js_body$_1();
    jl_System_setProperty($rt_s(35), $rt_s(13));
    jl_System_setProperty($rt_s(36), $rt_str(cgxgbt_TeaApplication_agentInfo.userAgent));
    if (cgxgbt_TeaApplication_agentInfo.windows ? 1 : 0)
        jl_System_setProperty($rt_s(37), $rt_s(38));
    else if (cgxgbt_TeaApplication_agentInfo.macOS ? 1 : 0)
        jl_System_setProperty($rt_s(37), $rt_s(39));
    else if (!(cgxgbt_TeaApplication_agentInfo.linux ? 1 : 0))
        jl_System_setProperty($rt_s(37), $rt_s(40));
    else
        jl_System_setProperty($rt_s(37), $rt_s(41));
    $this.$graphics = cgxgbt_TeaGraphics__init_0($this.$config);
    $assetDownload = new cgxgbta_AssetDownloadImpl;
    $assetDownload.$showLogs = $this.$config.$showDownloadLogs;
    cgxgbta_AssetInstance_downloaderInstance = $assetDownload;
    $hostPageBaseURL = $rt_str((cgxgbtdi_TeaWindow_get()).$window0.location.href);
    var$3 = $hostPageBaseURL.$nativeString.length - $rt_s(42).$nativeString.length | 0;
    var$4 = 0;
    $map = $rt_s(42);
    $instance = $rt_s(42);
    a: {
        while (var$4 <= var$3) {
            var$7 = 0;
            while (true) {
                if (var$7 >= $map.$nativeString.length) {
                    var$3 = 1;
                    break a;
                }
                if (jl_String_charAt($hostPageBaseURL, var$4 + var$7 | 0) != jl_String_charAt($instance, var$7))
                    break;
                var$7 = var$7 + 1 | 0;
            }
            var$4 = var$4 + 1 | 0;
        }
        var$3 = 0;
    }
    if (var$3)
        $hostPageBaseURL = jl_String_replace(jl_String_replace(jl_String_replace($hostPageBaseURL, $rt_s(43), $rt_s(13)), $rt_s(44), $rt_s(13)), $rt_s(45), $rt_s(13));
    var$4 = jl_String_indexOf($hostPageBaseURL, 63, 0);
    if (var$4 >= 0)
        $hostPageBaseURL = jl_String_substring($hostPageBaseURL, 0, var$4);
    $instance = new cgxgbta_AssetLoadImpl;
    $map = $this.$graphics.$canvas0;
    $instance.$assetTotal = (-1);
    $instance.$assetDownloader = $assetDownload;
    $instance.$baseUrl = $hostPageBaseURL;
    $assetDownload = new ju_HashSet;
    $assetDownload.$backingMap = ju_HashMap__init_();
    $instance.$assetInQueue = $assetDownload;
    var$8 = $this.$config;
    if (var$8.$windowListener !== null) {
        $hostPageBaseURL = $map.ownerDocument;
        $map = new cgxgbta_AssetLoadImpl$1;
        $map.$this$049 = $instance;
        $hostPageBaseURL.addEventListener("dragenter", otji_JS_function(otji_JSWrapper_unwrap($map), "handleEvent"), !!0);
        $map = new cgxgbta_AssetLoadImpl$2;
        $map.$this$038 = $instance;
        $hostPageBaseURL.addEventListener("dragover", otji_JS_function(otji_JSWrapper_unwrap($map), "handleEvent"), !!0);
        $map = new cgxgbta_AssetLoadImpl$3;
        $map.$this$010 = $instance;
        $map.$val$config0 = var$8;
        $hostPageBaseURL.addEventListener("drop", otji_JS_function(otji_JSWrapper_unwrap($map), "handleEvent"));
    }
    $this.$assetLoader = $instance;
    cgxgbta_AssetInstance_instance = $instance;
    if (cgxjc_JMultiplatform_platformMap === null)
        cgxjc_JMultiplatform_platformMap = cgxjc_JMultiplatform__init_();
    $map = cgxjc_JMultiplatform_platformMap.$map0;
    cgxjc_JPlatformMap_put($map, cgxgbt_TeaApplication_WEB_SCRIPT_PATH, cgxgbta_AssetLoadImpl_getScriptUrl($this.$assetLoader));
    cgxjc_JPlatformMap_put($map, cgxgbt_TeaApplication_WEB_ASSET_PATH, cgxgbta_AssetLoadImpl_getAssetUrl($this.$assetLoader));
    $this.$input = cgxgbt_TeaInput__init_($this, $this.$graphics.$canvas0);
    $this.$files = cgxgbt_TeaFiles__init_0($this.$config, $this);
    $this.$net = cgxgbt_TeaNet__init_();
    $this.$logger = new cgxgbt_TeaApplicationLogger;
    $this.$clipboard = cgxgbt_TeaClipboard__init_0();
    cgxgbt_TeaApplication_initGdx($this);
    cgxgbt_TeaApplication_initSound($this);
    $assetDownload = $this.$config.$preloadListener;
    if ($assetDownload !== null)
        $assetDownload.$onPreload($this.$assetLoader);
    cbg_Gdx_app = $this;
    $assetDownload = $this.$graphics;
    cbg_Gdx_graphics = $assetDownload;
    cbg_Gdx_gl = cgxgbt_TeaGraphics_getGL20($assetDownload);
    cbg_Gdx_gl20 = cgxgbt_TeaGraphics_getGL20($this.$graphics);
    cbg_Gdx_gl30 = cgxgbt_TeaGraphics_getGL30($this.$graphics);
    cbg_Gdx_input = $this.$input;
    cbg_Gdx_files = $this.$files;
    cbg_Gdx_net = $this.$net;
    $assetDownload = cgxgbt_DefaultTeaAudio__init_0();
    $this.$audio = $assetDownload;
    cbg_Gdx_audio = $assetDownload;
    cgxgbtdi_TeaWindow_addEventListener($this.$window, $rt_s(46), otji_JSWrapper_unwrap(cgxgbt_TeaApplication$1__init_0($this)));
    $assetDownload = cgxgbtdi_TeaWindow_getDocument($this.$window);
    $map = cgxgbt_TeaApplication$2__init_0($this);
    $assetDownload.addEventListener("visibilitychange", otji_JS_function(otji_JSWrapper_unwrap($map), "handleEvent"));
    if (cgxgbt_TeaApplicationConfiguration_isAutoSizeApplication($this.$config))
        cgxgbtdi_TeaWindow_addEventListener($this.$window, $rt_s(47), otji_JSWrapper_unwrap(cgxgbt_TeaApplication$3__init_0($this)));
    cgxgbtdi_TeaWindow_requestAnimationFrame($this.$window, $this);
},
cgxgbt_TeaApplication_run = $this => {
    let $state, $queue, $element, $total, $percentage, $progressBar, $t, $$je;
    $state = $this.$initState;
    a: {
        try {
            b: {
                c: {
                    d: {
                        cgxgbt_TeaApplication$6_$callClinit();
                        switch (cgxgbt_TeaApplication$6_$SwitchMap$com$github$xpenatan$gdx$backends$teavm$TeaApplication$AppState.data[jl_Enum_ordinal($state)]) {
                            case 1:
                                if ($this.$delayInitCount)
                                    break b;
                                $this.$initState = cgxgbt_TeaApplication$AppState_PRELOAD_ASSETS;
                                break b;
                            case 2:
                                break;
                            case 3:
                                break c;
                            case 4:
                                break d;
                            default:
                                break b;
                        }
                        cgxgbta_AssetLoadImpl_preload($this.$assetLoader, $this.$config, $rt_s(48));
                        $this.$initState = cgxgbt_TeaApplication$AppState_DOWNLOAD_ASSETS;
                        break b;
                    }
                    if ($this.$queueAppListener !== null) {
                        $state = $this.$appListener;
                        if ($state !== null) {
                            cbg_ApplicationAdapter_pause($state);
                            dcg_Main_dispose($this.$appListener);
                        }
                        cgxgbt_TeaInput_setInputProcessor($this.$input, null);
                        cgxgbt_TeaInput_reset($this.$input);
                        cbgu_Array_clear($this.$runnables);
                        $this.$appListener = $this.$queueAppListener;
                        $this.$queueAppListener = null;
                        $this.$initState = cgxgbt_TeaApplication$AppState_APP_CREATE;
                        $this.$graphics.$frameId = Long_ZERO;
                    }
                    $state = $this.$appListener;
                    if ($state === null)
                        break b;
                    cgxgbt_TeaApplication_step($this, $state);
                    break b;
                }
                $queue = cgxgbta_AssetLoadImpl_getQueue($this.$assetLoader);
                if (!$queue) {
                    $this.$initState = cgxgbt_TeaApplication$AppState_APP_LOOP;
                    $element = window.document.getElementById("progress");
                    if ($element !== null)
                        $element.style.setProperty("display", "none");
                } else {
                    $total = $this.$assetLoader.$assetTotal;
                    if ($total > 0) {
                        $percentage = 25 + ((75 * ($total - $queue | 0) | 0) / $total | 0) | 0;
                        $progressBar = window.document.getElementById("progress-bar");
                        if ($progressBar !== null) {
                            $t = $progressBar.style;
                            $element = jl_StringBuilder__init_();
                            jl_StringBuilder_append2(jl_StringBuilder_append0($element, $percentage), 37);
                            $t.setProperty("width", $rt_ustr(jl_StringBuilder_toString($element)));
                        }
                    }
                }
            }
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_Throwable) {
                $t = $$je;
                break a;
            } else {
                throw $$e;
            }
        }
        cgxgbtdi_TeaWindow_requestAnimationFrame($this.$window, $this);
        return;
    }
    jl_Throwable_printStackTrace0($t);
    $rt_throw($t);
},
cgxgbt_TeaApplication_step = ($this, $appListener) => {
    let var$2, var$3, var$4, $resizeBypass, $width, $height, var$8, var$9, var$10, var$11, var$12, $i, var$14;
    var$2 = $this.$graphics;
    var$3 = jl_System_currentTimeMillis();
    var$4 = Long_toNumber(Long_sub(var$3, var$2.$lastTimeStamp)) / 1000.0;
    var$2.$deltaTime = var$4;
    var$2.$lastTimeStamp = var$3;
    var$4 = var$2.$time + var$4;
    var$2.$time = var$4;
    $resizeBypass = var$2.$frames + 1 | 0;
    var$2.$frames = $resizeBypass;
    if (var$4 > 1.0) {
        var$2.$fps = $resizeBypass;
        var$2.$time = 0.0;
        var$2.$frames = 0;
    }
    $width = cgxgbt_TeaGraphics_getWidth(cbg_Gdx_graphics);
    $height = cgxgbt_TeaGraphics_getHeight(cbg_Gdx_graphics);
    $resizeBypass = 0;
    if ($this.$initState === cgxgbt_TeaApplication$AppState_APP_CREATE) {
        $this.$initState = cgxgbt_TeaApplication$AppState_APP_LOOP;
        var$2 = $appListener;
        var$8 = new cbggg_SpriteBatch;
        cbggg_SpriteBatch_$callClinit();
        cbggg_SpriteBatch__init_(var$8, 1000, null);
        var$2.$batch = var$8;
        var$9 = new cbgg_Texture;
        cbgg_Texture_$callClinit();
        var$10 = cgxgbt_TeaFiles_internal(cbg_Gdx_files, $rt_s(49));
        var$11 = null;
        if (var$10 === null)
            var$12 = null;
        else {
            var$12 = new cbggg_FileTextureData;
            var$8 = cbgg_Pixmap__init_0(var$10);
            var$12.$width0 = 0;
            var$12.$height0 = 0;
            var$12.$isPrepared = 0;
            var$12.$file0 = var$10;
            var$12.$pixmap = var$8;
            var$12.$format = var$11;
            var$12.$useMipMaps = 0;
            var$8 = cbggg_FileTextureData_ensurePot(var$12, var$8);
            var$12.$pixmap = var$8;
            var$12.$width0 = cbgg_Pixmap_getWidth(var$8);
            var$12.$height0 = cbgg_Pixmap_getHeight(var$12.$pixmap);
            var$12.$format = cbgg_Pixmap_getFormat(var$12.$pixmap);
        }
        $i = cgxgbt_TeaGL20_glGenTexture(cbg_Gdx_gl);
        var$8 = cbgg_Texture$TextureFilter_Nearest;
        var$9.$minFilter = var$8;
        var$9.$magFilter = var$8;
        var$8 = cbgg_Texture$TextureWrap_ClampToEdge;
        var$9.$uWrap = var$8;
        var$9.$vWrap = var$8;
        var$9.$anisotropicFilterLevel = 1.0;
        var$9.$glTarget = 3553;
        var$9.$glHandle = $i;
        var$9.$data5 = var$12;
        var$8 = var$12;
        if (!var$8.$isPrepared)
            cbggg_FileTextureData_prepare(var$8);
        var$10 = var$9;
        cbgg_GLTexture_bind(var$10);
        cbgg_GLTexture_uploadImageData(3553, var$12, 0);
        var$8 = var$9.$minFilter;
        var$12 = var$9.$magFilter;
        if (var$8 !== null) {
            cbg_Gdx_gl.$glTexParameteri(var$10.$glTarget, 10241, cbgg_Texture$TextureFilter_getGLEnum(var$8));
            var$10.$minFilter = var$8;
        }
        if (var$12 !== null) {
            cbg_Gdx_gl.$glTexParameteri(var$10.$glTarget, 10240, cbgg_Texture$TextureFilter_getGLEnum(var$12));
            var$10.$magFilter = var$12;
        }
        var$8 = var$9.$uWrap;
        var$12 = var$9.$vWrap;
        if (var$8 !== null) {
            cbg_Gdx_gl.$glTexParameteri(var$10.$glTarget, 10242, cbgg_Texture$TextureWrap_getGLEnum(var$8));
            var$10.$uWrap = var$8;
        }
        if (var$12 !== null) {
            cbg_Gdx_gl.$glTexParameteri(var$10.$glTarget, 10243, cbgg_Texture$TextureWrap_getGLEnum(var$12));
            var$10.$vWrap = var$12;
        }
        cbgg_GLTexture_unsafeSetAnisotropicFilter(var$10, var$9.$anisotropicFilterLevel, 1);
        cbg_Gdx_gl.$glBindTexture(var$9.$glTarget, 0);
        cbgg_Texture_addManagedTexture(cbg_Gdx_app, var$9);
        var$2.$image = var$9;
        $resizeBypass = 1;
    }
    if (!($width == $this.$lastWidth && $height == $this.$lastHeight && !$resizeBypass)) {
        $this.$lastWidth = $width;
        $this.$lastHeight = $height;
        cbg_Gdx_gl.$glViewport(0, 0, $width, $height);
    }
    var$2 = $this.$runnablesHelper;
    var$8 = $this.$runnables;
    cbgu_Array_addAll(var$2, var$8.$items, 0, var$8.$size0);
    cbgu_Array_clear($this.$runnables);
    $i = 0;
    while (true) {
        var$2 = $this.$runnablesHelper;
        if ($i >= var$2.$size0)
            break;
        (cbgu_Array_get(var$2, $i)).$run();
        $i = $i + 1 | 0;
    }
    cbgu_Array_clear(var$2);
    var$2 = $this.$graphics;
    var$14 = Long_add(var$2.$frameId, Long_fromInt(1));
    var$2.$frameId = var$14;
    if (Long_gt(var$14, Long_fromInt(60)))
        dcg_Main_render($appListener);
    cgxgbt_TeaInput_reset($this.$input);
},
cgxgbt_TeaApplication_initGdx = $this => {
    let var$1, var$2;
    var$1 = $this.$assetLoader;
    var$2 = new cgxgbt_TeaApplication$4;
    var$2.$this$045 = $this;
    cgxgbta_AssetLoadImpl_loadScript(var$1, $rt_s(50), var$2);
},
cgxgbt_TeaApplication_initSound = $this => {
    let var$1, var$2;
    var$1 = $this.$assetLoader;
    var$2 = new cgxgbt_TeaApplication$5;
    var$2.$this$028 = $this;
    cgxgbta_AssetLoadImpl_loadScript(var$1, $rt_s(51), var$2);
},
cgxgbt_TeaApplication__clinit_ = () => {
    cgxgbt_TeaApplication_WEB_SCRIPT_PATH = $rt_s(52);
    cgxgbt_TeaApplication_WEB_ASSET_PATH = $rt_s(53);
},
cbg_ApplicationListener = $rt_classWithoutFields(0),
cbg_ApplicationAdapter = $rt_classWithoutFields(),
cbg_ApplicationAdapter_pause = $this => {
    return;
};
function dcg_Main() {
    let a = this; cbg_ApplicationAdapter.call(a);
    a.$batch = null;
    a.$image = null;
}
let dcg_Main_render = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    cbg_Gdx_gl.$glClearColor(0.15000000596046448, 0.15000000596046448, 0.20000000298023224, 1.0);
    cbg_Gdx_gl.$glClear(16384);
    var$1 = $this.$batch;
    if (var$1.$drawing) {
        var$2 = new jl_IllegalStateException;
        jl_RuntimeException__init_(var$2, $rt_s(54));
        $rt_throw(var$2);
    }
    var$1.$renderCalls = 0;
    cbg_Gdx_gl.$glDepthMask(0);
    var$2 = var$1.$customShader;
    if (var$2 !== null)
        var$2.$bind();
    else {
        var$2 = var$1.$shader;
        var$3 = cbg_Gdx_gl20;
        cbggg_ShaderProgram_checkManaged(var$2);
        var$3.$glUseProgram(var$2.$program);
    }
    cbgm_Matrix4_mul(cbgm_Matrix4_set(var$1.$combinedMatrix, var$1.$projectionMatrix.$val), var$1.$transformMatrix);
    var$2 = var$1.$customShader;
    if (var$2 !== null) {
        var$2.$setUniformMatrix($rt_s(55), var$1.$combinedMatrix);
        var$1.$customShader.$setUniformi($rt_s(56), 0);
    } else {
        var$2 = var$1.$shader;
        var$4 = var$1.$combinedMatrix;
        var$5 = cbggg_ShaderProgram_fetchUniformLocation(var$2, $rt_s(55));
        var$3 = cbg_Gdx_gl20;
        cbggg_ShaderProgram_checkManaged(var$2);
        var$6 = var$4.$val;
        cgxgbt_TeaGL20_glUniformMatrix4fv(var$3, var$5, 1, 0, var$6, 0);
        var$2 = var$1.$shader;
        var$4 = cbg_Gdx_gl20;
        cbggg_ShaderProgram_checkManaged(var$2);
        var$4.$glUniform1i(cbggg_ShaderProgram_fetchUniformLocation(var$2, $rt_s(56)), 0);
    }
    var$1.$drawing = 1;
    var$1 = $this.$batch;
    var$2 = $this.$image;
    var$7 = cbgg_Texture_getWidth(var$2);
    var$8 = cbgg_Texture_getHeight(var$2);
    if (!var$1.$drawing) {
        var$1 = new jl_IllegalStateException;
        jl_RuntimeException__init_(var$1, $rt_s(57));
        $rt_throw(var$1);
    }
    var$6 = var$1.$vertices0;
    if (var$2 !== var$1.$lastTexture) {
        cbggg_SpriteBatch_flush(var$1);
        var$1.$lastTexture = var$2;
        var$1.$invTexWidth = 1.0 / cbgg_Texture_getWidth(var$2);
        var$1.$invTexHeight = 1.0 / cbgg_Texture_getHeight(var$2);
    } else {
        var$9 = var$6.data;
        if (var$1.$idx == var$9.length)
            cbggg_SpriteBatch_flush(var$1);
    }
    var$6 = var$6.data;
    var$10 = 140.0 + var$7;
    var$11 = 210.0 + var$8;
    var$8 = var$1.$colorPacked;
    var$5 = var$1.$idx;
    var$6[var$5] = 140.0;
    var$6[var$5 + 1 | 0] = 210.0;
    var$6[var$5 + 2 | 0] = var$8;
    var$6[var$5 + 3 | 0] = 0.0;
    var$6[var$5 + 4 | 0] = 1.0;
    var$6[var$5 + 5 | 0] = 140.0;
    var$6[var$5 + 6 | 0] = var$11;
    var$6[var$5 + 7 | 0] = var$8;
    var$6[var$5 + 8 | 0] = 0.0;
    var$6[var$5 + 9 | 0] = 0.0;
    var$6[var$5 + 10 | 0] = var$10;
    var$6[var$5 + 11 | 0] = var$11;
    var$6[var$5 + 12 | 0] = var$8;
    var$6[var$5 + 13 | 0] = 1.0;
    var$6[var$5 + 14 | 0] = 0.0;
    var$6[var$5 + 15 | 0] = var$10;
    var$6[var$5 + 16 | 0] = 210.0;
    var$6[var$5 + 17 | 0] = var$8;
    var$6[var$5 + 18 | 0] = 1.0;
    var$6[var$5 + 19 | 0] = 1.0;
    var$1.$idx = var$5 + 20 | 0;
    var$1 = $this.$batch;
    if (!var$1.$drawing) {
        var$2 = new jl_IllegalStateException;
        jl_RuntimeException__init_(var$2, $rt_s(58));
        $rt_throw(var$2);
    }
    if (var$1.$idx > 0)
        cbggg_SpriteBatch_flush(var$1);
    var$1.$lastTexture = null;
    var$1.$drawing = 0;
    var$2 = cbg_Gdx_gl;
    var$2.$glDepthMask(1);
    if (var$1.$blendingDisabled ? 0 : 1)
        var$2.$glDisable(3042);
},
dcg_Main_dispose = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = $this.$batch;
    var$2 = var$1.$mesh;
    cbgg_Mesh_$callClinit();
    var$3 = cbgg_Mesh_meshes;
    var$4 = cbg_Gdx_app;
    if (ju_HashMap_get(var$3, var$4) !== null) {
        var$3 = cbgg_Mesh_meshes;
        var$4 = cbg_Gdx_app;
        cbgu_Array_removeValue(ju_HashMap_get(var$3, var$4), var$2, 1);
    }
    var$2.$vertices.$dispose();
    var$3 = var$2.$instances;
    if (var$3 !== null)
        var$3.$dispose();
    var$2.$indices.$dispose();
    if (var$1.$ownsShader) {
        var$1 = var$1.$shader;
        if (var$1 !== null) {
            var$2 = cbg_Gdx_gl20;
            var$2.$glUseProgram(0);
            var$2.$glDeleteShader(var$1.$vertexShaderHandle);
            var$2.$glDeleteShader(var$1.$fragmentShaderHandle);
            var$2.$glDeleteProgram(var$1.$program);
            cbggg_ShaderProgram_$callClinit();
            if (cbgu_ObjectMap_get(cbggg_ShaderProgram_shaders, cbg_Gdx_app) !== null)
                cbgu_Array_removeValue(cbgu_ObjectMap_get(cbggg_ShaderProgram_shaders, cbg_Gdx_app), var$1, 1);
        }
    }
    var$1 = $this.$image;
    if (var$1.$glHandle) {
        var$2 = var$1;
        var$5 = var$2.$glHandle;
        if (var$5) {
            cgxgbt_TeaGL20_glDeleteTexture(cbg_Gdx_gl, var$5);
            var$2.$glHandle = 0;
        }
        cbgg_Texture_$callClinit();
        var$3 = cbgg_Texture_managedTextures;
        var$2 = cbg_Gdx_app;
        if (ju_HashMap_get(var$3, var$2) !== null) {
            var$2 = cbgg_Texture_managedTextures;
            var$3 = cbg_Gdx_app;
            cbgu_Array_removeValue(ju_HashMap_get(var$2, var$3), var$1, 1);
        }
    }
},
cbggg_GlyphLayout$GlyphRun = $rt_classWithoutFields(),
cbgu_Pools = $rt_classWithoutFields(),
cbgu_Pools_typePools = null,
cbgu_Pools_$callClinit = () => {
    cbgu_Pools_$callClinit = $rt_eraseClinit(cbgu_Pools);
    cbgu_Pools__clinit_();
},
cbgu_Pools__clinit_ = () => {
    cbgu_Pools_typePools = cbgu_ObjectMap__init_();
};
function cbgu_IntArray() {
    let a = this; jl_Object.call(a);
    a.$items0 = null;
    a.$size2 = 0;
    a.$ordered0 = 0;
}
let cbgu_IntArray__init_0 = ($this, $ordered, $capacity) => {
    $this.$ordered0 = $ordered;
    $this.$items0 = $rt_createIntArray($capacity);
},
cbgu_IntArray__init_ = (var_0, var_1) => {
    let var_2 = new cbgu_IntArray();
    cbgu_IntArray__init_0(var_2, var_0, var_1);
    return var_2;
},
cbgu_IntArray_add = ($this, $value) => {
    let $items, var$3, var$4, var$5, var$6;
    $items = $this.$items0;
    var$3 = $items.data;
    var$4 = $this.$size2;
    if (var$4 == var$3.length) {
        $items = $rt_createIntArray(jl_Math_max(8, var$4 * 1.75 | 0));
        var$5 = $items.data;
        jl_System_fastArraycopy($this.$items0, 0, $items, 0, jl_Math_min($this.$size2, var$5.length));
        $this.$items0 = $items;
    }
    $items = $items.data;
    var$6 = $this.$size2;
    $this.$size2 = var$6 + 1 | 0;
    $items[var$6] = $value;
},
cbgu_IntArray_get = ($this, $index) => {
    let var$2, var$3;
    if ($index < $this.$size2)
        return $this.$items0.data[$index];
    var$2 = new jl_IndexOutOfBoundsException;
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_AbstractStringBuilder_append0(var$3, $rt_s(8));
    var$3 = jl_StringBuilder_append0(var$3, $index);
    jl_AbstractStringBuilder_append0(var$3, $rt_s(9));
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$3, $this.$size2)));
    $rt_throw(var$2);
},
ju_Map = $rt_classWithoutFields(0),
ju_AbstractMap = $rt_classWithoutFields(),
jl_Cloneable = $rt_classWithoutFields(0);
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount0 = 0;
    a.$loadFactor4 = 0.0;
    a.$threshold3 = 0;
}
let ju_HashMap__init_2 = $this => {
    ju_HashMap__init_0($this, 16);
},
ju_HashMap__init_ = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_2(var_0);
    return var_0;
},
ju_HashMap__init_0 = ($this, $capacity) => {
    let var$2;
    if ($capacity < 0) {
        var$2 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $capacity = ju_HashMap_calculateCapacity($capacity);
    $this.$elementCount = 0;
    $this.$elementData = $rt_createArray(ju_HashMap$HashEntry, $capacity);
    $this.$loadFactor4 = 0.75;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap__init_1 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_0(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    $x = var$2 | var$2 >> 1;
    $x = $x | $x >> 2;
    $x = $x | $x >> 4;
    $x = $x | $x >> 8;
    return ($x | $x >> 16) + 1 | 0;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold3 = $this.$elementData.data.length * $this.$loadFactor4 | 0;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode();
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $hash & ($this.$elementData.data.length - 1 | 0), $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key))) {
        $m = $m.$next2;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next2;
    }
    return $m;
},
ju_HashMap_put = ($this, $key, $value) => {
    let var$3, var$4, var$5;
    if ($key === null) {
        var$3 = ju_HashMap_findNullKeyEntry($this);
        if (var$3 === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            var$3 = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold3)
                ju_HashMap_rehash($this);
        }
    } else {
        var$4 = $key.$hashCode();
        var$5 = var$4 & ($this.$elementData.data.length - 1 | 0);
        var$3 = ju_HashMap_findNonNullKeyEntry($this, $key, var$5, var$4);
        if (var$3 === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            var$3 = ju_HashMap_createHashedEntry($this, $key, var$5, var$4);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold3)
                ju_HashMap_rehash($this);
        }
    }
    $key = var$3.$value;
    var$3.$value = $value;
    return $key;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry, var$5;
    $entry = new ju_HashMap$HashEntry;
    ju_MapEntry__init_($entry, $key, null);
    $entry.$origKeyHash = $hash;
    var$5 = $this.$elementData.data;
    $entry.$next2 = var$5[$index];
    var$5[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    var$1 = $this.$elementData.data.length;
    var$1 = ju_HashMap_calculateCapacity(!var$1 ? 1 : var$1 << 1);
    var$2 = $rt_createArray(ju_HashMap$HashEntry, var$1);
    var$3 = var$2.data;
    var$4 = 0;
    var$5 = var$1 - 1 | 0;
    while (true) {
        var$6 = $this.$elementData.data;
        if (var$4 >= var$6.length)
            break;
        var$7 = var$6[var$4];
        var$6[var$4] = null;
        while (var$7 !== null) {
            var$1 = var$7.$origKeyHash & var$5;
            var$8 = var$7.$next2;
            var$7.$next2 = var$3[var$1];
            var$3[var$1] = var$7;
            var$7 = var$8;
        }
        var$4 = var$4 + 1 | 0;
    }
    $this.$elementData = var$2;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals($key2) ? 0 : 1;
},
cbgm_Interpolation$1 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$2 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$3 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$4 = $rt_classWithoutFields(cbgm_Interpolation);
function cbgm_Interpolation$Pow() {
    cbgm_Interpolation.call(this);
    this.$power1 = 0;
}
let cbgm_Interpolation$Pow__init_ = ($this, $power) => {
    cbgm_Interpolation__init_($this);
    $this.$power1 = $power;
},
cbgm_Interpolation$Pow__init_0 = var_0 => {
    let var_1 = new cbgm_Interpolation$Pow();
    cbgm_Interpolation$Pow__init_(var_1, var_0);
    return var_1;
},
cbgm_Interpolation$PowIn = $rt_classWithoutFields(cbgm_Interpolation$Pow),
cbgm_Interpolation$PowOut = $rt_classWithoutFields(cbgm_Interpolation$Pow),
cbgm_Interpolation$5 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$6 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$7 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$8 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$9 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$10 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$11 = $rt_classWithoutFields(cbgm_Interpolation);
function cbgm_Interpolation$Exp() {
    let a = this; cbgm_Interpolation.call(a);
    a.$value1 = 0.0;
    a.$power0 = 0.0;
    a.$min1 = 0.0;
    a.$scale2 = 0.0;
}
let cbgm_Interpolation$Exp__init_ = ($this, $value, $power) => {
    cbgm_Interpolation__init_($this);
    $this.$value1 = $value;
    $this.$power0 = $power;
    $power = jl_Math_powImpl($value,  -$power);
    $this.$min1 = $power;
    $this.$scale2 = 1.0 / (1.0 - $power);
},
cbgm_Interpolation$Exp__init_0 = (var_0, var_1) => {
    let var_2 = new cbgm_Interpolation$Exp();
    cbgm_Interpolation$Exp__init_(var_2, var_0, var_1);
    return var_2;
},
cbgm_Interpolation$ExpIn = $rt_classWithoutFields(cbgm_Interpolation$Exp),
cbgm_Interpolation$ExpOut = $rt_classWithoutFields(cbgm_Interpolation$Exp),
cbgm_Interpolation$12 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$13 = $rt_classWithoutFields(cbgm_Interpolation),
cbgm_Interpolation$14 = $rt_classWithoutFields(cbgm_Interpolation);
function cbgm_Interpolation$Elastic() {
    let a = this; cbgm_Interpolation.call(a);
    a.$value2 = 0.0;
    a.$power = 0.0;
    a.$scale = 0.0;
    a.$bounces = 0.0;
}
let cbgm_Interpolation$Elastic__init_ = ($this, $value, $power, $bounces, $scale) => {
    cbgm_Interpolation__init_($this);
    $this.$value2 = $value;
    $this.$power = $power;
    $this.$scale = $scale;
    $this.$bounces = $bounces * 3.1415927410125732 * ($bounces % 2 | 0 ? (-1) : 1);
},
cbgm_Interpolation$Elastic__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new cbgm_Interpolation$Elastic();
    cbgm_Interpolation$Elastic__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
cbgm_Interpolation$ElasticIn = $rt_classWithoutFields(cbgm_Interpolation$Elastic),
cbgm_Interpolation$ElasticOut = $rt_classWithoutFields(cbgm_Interpolation$Elastic);
function cbgm_Interpolation$Swing() {
    cbgm_Interpolation.call(this);
    this.$scale0 = 0.0;
}
function cbgm_Interpolation$SwingIn() {
    cbgm_Interpolation.call(this);
    this.$scale3 = 0.0;
}
function cbgm_Interpolation$SwingOut() {
    cbgm_Interpolation.call(this);
    this.$scale1 = 0.0;
}
function cbgm_Interpolation$BounceOut() {
    let a = this; cbgm_Interpolation.call(a);
    a.$widths = null;
    a.$heights = null;
}
let cbgm_Interpolation$BounceOut__init_ = ($this, $bounces) => {
    let var$2, var$3, var$4, var$5, var$6;
    cbgm_Interpolation__init_($this);
    if ($bounces >= 2 && $bounces <= 5) {
        a: {
            var$2 = $rt_createFloatArray($bounces);
            $this.$widths = var$2;
            var$3 = $rt_createFloatArray($bounces);
            var$4 = var$3.data;
            $this.$heights = var$3;
            var$4[0] = 1.0;
            switch ($bounces) {
                case 2:
                    break;
                case 3:
                    var$3 = var$2.data;
                    var$3[0] = 0.4000000059604645;
                    var$3[1] = 0.4000000059604645;
                    var$3[2] = 0.20000000298023224;
                    var$4[1] = 0.33000001311302185;
                    var$4[2] = 0.10000000149011612;
                    break a;
                case 4:
                    var$3 = var$2.data;
                    var$3[0] = 0.3400000035762787;
                    var$3[1] = 0.3400000035762787;
                    var$3[2] = 0.20000000298023224;
                    var$3[3] = 0.15000000596046448;
                    var$4[1] = 0.25999999046325684;
                    var$4[2] = 0.10999999940395355;
                    var$4[3] = 0.029999999329447746;
                    break a;
                case 5:
                    var$3 = var$2.data;
                    var$3[0] = 0.30000001192092896;
                    var$3[1] = 0.30000001192092896;
                    var$3[2] = 0.20000000298023224;
                    var$3[3] = 0.10000000149011612;
                    var$3[4] = 0.10000000149011612;
                    var$4[1] = 0.44999998807907104;
                    var$4[2] = 0.30000001192092896;
                    var$4[3] = 0.15000000596046448;
                    var$4[4] = 0.05999999865889549;
                    break a;
                default:
                    break a;
            }
            var$3 = var$2.data;
            var$3[0] = 0.6000000238418579;
            var$3[1] = 0.4000000059604645;
            var$4[1] = 0.33000001311302185;
        }
        var$2 = var$2.data;
        var$2[0] = var$2[0] * 2.0;
        return;
    }
    var$5 = new jl_IllegalArgumentException;
    var$6 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$6);
    jl_AbstractStringBuilder_append0(var$6, $rt_s(59));
    jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$6, $bounces)));
    $rt_throw(var$5);
},
cbgm_Interpolation$BounceOut__init_0 = var_0 => {
    let var_1 = new cbgm_Interpolation$BounceOut();
    cbgm_Interpolation$BounceOut__init_(var_1, var_0);
    return var_1;
},
cbgm_Interpolation$Bounce = $rt_classWithoutFields(cbgm_Interpolation$BounceOut),
cbgm_Interpolation$BounceIn = $rt_classWithoutFields(cbgm_Interpolation$BounceOut),
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_digitMapping = null,
jl_Character_upperCaseMapping = null,
jl_Character_lowerCaseMapping = null,
jl_Character_classMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$0 = null,
jl_Character_$$metadata$$1 = null,
jl_Character_$$metadata$$3 = null,
jl_Character_$$metadata$$4 = null,
jl_Character_toString = $c => {
    let var$2, var$3;
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_1(var$2, var$3);
    return var$2;
},
jl_Character_isSupplementaryCodePoint = $codePoint => {
    return $codePoint >= 65536 && $codePoint <= 1114111 ? 1 : 0;
},
jl_Character_isHighSurrogate = $ch => {
    return ($ch & 64512) != 55296 ? 0 : 1;
},
jl_Character_isLowSurrogate = $ch => {
    return ($ch & 64512) != 56320 ? 0 : 1;
},
jl_Character_isSurrogate = $ch => {
    return !jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch) ? 0 : 1;
},
jl_Character_isSurrogatePair = ($high, $low) => {
    return jl_Character_isHighSurrogate($high) && jl_Character_isLowSurrogate($low) ? 1 : 0;
},
jl_Character_toCodePoint = ($high, $low) => {
    return (($high & 1023) << 10 | $low & 1023) + 65536 | 0;
},
jl_Character_highSurrogate = $codePoint => {
    return (55296 | ($codePoint - 65536 | 0) >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_toLowerCase = $ch => {
    return jl_Character_toLowerCase0($ch) & 65535;
},
jl_Character_toLowerCase0 = $ch => {
    if (jl_Character_lowerCaseMapping === null) {
        if (jl_Character_$$metadata$$0 === null)
            jl_Character_$$metadata$$0 = jl_Character_acquireLowerCaseMapping$$create();
        jl_Character_lowerCaseMapping = otciu_UnicodeHelper_createCharMapping(otciu_UnicodeHelper_decodeCaseMapping((jl_Character_$$metadata$$0.value !== null ? $rt_str(jl_Character_$$metadata$$0.value) : null)));
    }
    return jl_Character_mapChar(jl_Character_lowerCaseMapping, $ch);
},
jl_Character_toUpperCase = $ch => {
    return jl_Character_toUpperCase0($ch) & 65535;
},
jl_Character_toUpperCase0 = $codePoint => {
    if (jl_Character_upperCaseMapping === null) {
        if (jl_Character_$$metadata$$1 === null)
            jl_Character_$$metadata$$1 = jl_Character_acquireUpperCaseMapping$$create();
        jl_Character_upperCaseMapping = otciu_UnicodeHelper_createCharMapping(otciu_UnicodeHelper_decodeCaseMapping((jl_Character_$$metadata$$1.value !== null ? $rt_str(jl_Character_$$metadata$$1.value) : null)));
    }
    return jl_Character_mapChar(jl_Character_upperCaseMapping, $codePoint);
},
jl_Character_mapChar = ($table, $codePoint) => {
    let $binSearchTable, var$4, var$5, var$6, $index, var$8;
    $binSearchTable = $table.$fastTable.data;
    if ($codePoint < $binSearchTable.length)
        return $codePoint + $binSearchTable[$codePoint] | 0;
    $binSearchTable = $table.$binarySearchTable.data;
    var$4 = 0;
    var$5 = $binSearchTable.length;
    var$6 = (var$5 / 2 | 0) - 1 | 0;
    a: {
        while (true) {
            $index = (var$4 + var$6 | 0) / 2 | 0;
            var$8 = $rt_compare($binSearchTable[$index * 2 | 0], $codePoint);
            if (!var$8)
                break;
            if (var$8 <= 0) {
                var$4 = $index + 1 | 0;
                if (var$4 > var$6)
                    break a;
            } else {
                $index = $index - 1 | 0;
                if ($index < var$4)
                    break a;
                var$6 = $index;
            }
        }
    }
    if ($index >= 0) {
        $index = $index * 2 | 0;
        if ($index < var$5)
            return $codePoint + $binSearchTable[$index + 1 | 0] | 0;
    }
    return 0;
},
jl_Character_digit = ($ch, $radix) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12;
    if ($radix >= 2 && $radix <= 36) {
        if (jl_Character_digitMapping === null) {
            if (jl_Character_$$metadata$$3 === null)
                jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
            var$3 = (jl_Character_$$metadata$$3.value !== null ? $rt_str(jl_Character_$$metadata$$3.value) : null);
            var$4 = otci_CharFlow__init_(jl_String_toCharArray(var$3));
            var$5 = otci_Base46_decodeUnsigned(var$4);
            var$6 = $rt_createIntArray(var$5 * 2 | 0);
            var$7 = var$6.data;
            var$8 = 0;
            var$9 = 0;
            var$10 = 0;
            var$11 = 0;
            while (var$11 < var$5) {
                var$9 = var$9 + otci_Base46_decode(var$4) | 0;
                var$10 = var$10 + otci_Base46_decode(var$4) | 0;
                var$12 = var$8 + 1 | 0;
                var$7[var$8] = var$9;
                var$8 = var$12 + 1 | 0;
                var$7[var$12] = var$10;
                var$11 = var$11 + 1 | 0;
            }
            jl_Character_digitMapping = var$6;
        }
        var$6 = jl_Character_digitMapping.data;
        var$8 = 0;
        var$9 = (var$6.length / 2 | 0) - 1 | 0;
        a: {
            while (var$9 >= var$8) {
                var$10 = (var$8 + var$9 | 0) / 2 | 0;
                var$11 = var$10 * 2 | 0;
                var$5 = $rt_compare($ch, var$6[var$11]);
                if (var$5 > 0)
                    var$8 = var$10 + 1 | 0;
                else {
                    if (var$5 >= 0) {
                        $ch = var$6[var$11 + 1 | 0];
                        break a;
                    }
                    var$9 = var$10 - 1 | 0;
                }
            }
            $ch = (-1);
        }
        if ($ch >= $radix)
            $ch = (-1);
    } else
        $ch = (-1);
    return $ch;
},
jl_Character_forDigit = ($digit, $radix) => {
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character_toChars = $codePoint => {
    let var$2, var$3, var$4;
    if (!($codePoint >= 0 && $codePoint <= 1114111 ? 1 : 0)) {
        var$2 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    if ($codePoint < 65536) {
        var$3 = $rt_createCharArray(1);
        var$3.data[0] = $codePoint & 65535;
        return var$3;
    }
    var$3 = $rt_createCharArray(2);
    var$4 = var$3.data;
    var$4[0] = jl_Character_highSurrogate($codePoint);
    var$4[1] = jl_Character_lowSurrogate($codePoint);
    return var$3;
},
jl_Character_getType = $codePoint => {
    let $u, $range, $classes, var$5, var$6, var$7, var$8, var$9, $i, var$11, var$12, var$13, var$14, $l;
    $u = $codePoint > 0 && $codePoint <= 65535 ? 1 : 0;
    if ($u && jl_Character_isSurrogate($codePoint & 65535))
        return 19;
    if (jl_Character_classMapping === null) {
        if (jl_Character_$$metadata$$4 === null)
            jl_Character_$$metadata$$4 = jl_Character_obtainClasses$$create();
        $range = (jl_Character_$$metadata$$4.value !== null ? $rt_str(jl_Character_$$metadata$$4.value) : null);
        $classes = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
        var$5 = $classes.data;
        var$6 = $rt_createByteArray(16384);
        var$7 = var$6.data;
        var$8 = 0;
        var$9 = 0;
        $i = 0;
        var$11 = 0;
        while (var$11 < $range.$nativeString.length) {
            var$12 = otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11));
            if (var$12 == 64) {
                var$11 = var$11 + 1 | 0;
                var$12 = otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11));
                var$13 = 0;
                var$14 = 1;
                $u = 0;
                while ($u < 3) {
                    var$11 = var$11 + 1 | 0;
                    var$13 = var$13 | $rt_imul(var$14, otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11)));
                    var$14 = var$14 * 64 | 0;
                    $u = $u + 1 | 0;
                }
            } else if (var$12 < 32)
                var$13 = 1;
            else {
                var$12 = (var$12 - 32 | 0) << 24 >> 24;
                var$11 = var$11 + 1 | 0;
                var$13 = otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11));
            }
            if (!var$12 && var$13 >= 128) {
                if (var$8 > 0) {
                    $u = var$9 + 1 | 0;
                    var$5[var$9] = otciu_UnicodeHelper$Range__init_($i, $i + var$8 | 0, ju_Arrays_copyOf(var$6, var$8));
                    var$9 = $u;
                }
                $i = $i + (var$8 + var$13 | 0) | 0;
                var$8 = 0;
            } else {
                $u = var$8 + var$13 | 0;
                if ($u < var$7.length)
                    $l = var$9;
                else {
                    $l = var$9 + 1 | 0;
                    var$5[var$9] = otciu_UnicodeHelper$Range__init_($i, $i + var$8 | 0, ju_Arrays_copyOf(var$6, var$8));
                    $i = $i + $u | 0;
                    var$8 = 0;
                }
                while (true) {
                    $u = var$13 + (-1) | 0;
                    if (var$13 <= 0)
                        break;
                    var$13 = var$8 + 1 | 0;
                    var$7[var$8] = var$12;
                    var$8 = var$13;
                    var$13 = $u;
                }
                var$9 = $l;
            }
            var$11 = var$11 + 1 | 0;
        }
        jl_Character_classMapping = ju_Arrays_copyOf0($classes, var$9);
    }
    $classes = jl_Character_classMapping.data;
    $l = 0;
    $u = $classes.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = $classes[$i];
        if ($codePoint >= $range.$end2)
            $l = $i + 1 | 0;
        else {
            $u = $range.$start2;
            if ($codePoint >= $u)
                return $range.$data10.data[$codePoint - $u | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
},
jl_Character_isLetterOrDigit = $codePoint => {
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 9:
                break;
            case 6:
            case 7:
            case 8:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return 0;
},
jl_Character_isIdentifierIgnorable = $codePoint => {
    a: {
        if (!($codePoint >= 0 && $codePoint <= 8) && !($codePoint >= 14 && $codePoint <= 27)) {
            if ($codePoint < 127)
                break a;
            if ($codePoint > 159)
                break a;
        }
        return 1;
    }
    return jl_Character_getType($codePoint) != 16 ? 0 : 1;
},
jl_Character_isSpaceChar = $codePoint => {
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isWhitespace = $codePoint => {
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_acquireLowerCaseMapping$$create = () => {
    return {"value" : "TW  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
    + "%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 a$#%# -mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
    + "#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%"
    + "# #%# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# #$$r#%# \'%# +%# #%# #%# #P6rM \'%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# .\'F#S HB#F#b o@5F#b Jo=N#f "};
},
jl_Character_acquireUpperCaseMapping$$create = () => {
    return {"value" : "NY  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/#N6r# %_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3#!$r#:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'"
    + "# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d# #\'- (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'#"
    + " #\'# #\'# -\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
    + "\'# #\'# #\'# #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'# %\'\' #\'% )\'# #\'# #\'# U\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#t {nm%:# V%H#^ >B#H#b o@5H#b No=P#f "};
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "kE*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%_fG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%B\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%oYG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%ow?G%%%%%%%%%%%%%%%%%%s4%G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%"
    + "%%%%:OG%%%%%%%%%%%%%%%%%%V*OG%%%%%%%%%%%%%%%%%%VZ%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%k5G%%%%%%%%%%%%%%%%%%.lG%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
},
jl_Character_obtainClasses$$create = () => {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
    + "!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A&G*FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
    + " F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
    + "L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F) Y#J+Y(^+G*^*Y$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
    + "FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*!#A&BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0"
    + "G.H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^jA7^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?6767676"
    + "7Y&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^GA*=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#B##A#!# # #!#!#!#!A6E$!#&"
    + "E##F(\'F$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F"
    + "\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#A$FUA-b&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+A\'J+F%%&B7A$G&5%C7A)Z#b 1$ L@ FK G#5A#F#A1F$AXG%F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'"
    + "F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&A,F+ &A#& FG &I$G\' )A#) I% I#\')\'&\'&Y# Y#A)G#A>FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+A\'J5A=F<A#\')\'I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%"
    + "Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W# FB9A/J+A\'F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+\'b 6! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0A+b&<` A&b&(* b ZK!F?G-I$G$J+b \'< b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q\' E$FIE#Y$J+b \'$ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AJF#A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =_ b=Q$ J+A\'b=U\'"
    + " AnGOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b 7$ F?G#&J+A%9b A( F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% "
    + "F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^-A%^#A`b=5& A-^/A#^.A$^+A&^YA(^0A#^,A\'^*A(b=4#  b==! J+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};
},
cgxgbtu_TeaBaseUrlProvider = $rt_classWithoutFields(0),
cgxgbtu_TeaDefaultBaseUrlProvider = $rt_classWithoutFields();
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$ordinal0 = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    $this.$name0 = $name;
    $this.$ordinal0 = $ordinal;
},
jl_Enum_ordinal = $this => {
    return $this.$ordinal0;
},
jl_Enum_toString = $this => {
    return $this.$name0;
},
cgxgbt_TeaApplication$AppState = $rt_classWithoutFields(jl_Enum),
cgxgbt_TeaApplication$AppState_INIT = null,
cgxgbt_TeaApplication$AppState_PRELOAD_ASSETS = null,
cgxgbt_TeaApplication$AppState_DOWNLOAD_ASSETS = null,
cgxgbt_TeaApplication$AppState_APP_CREATE = null,
cgxgbt_TeaApplication$AppState_APP_LOOP = null,
cgxgbt_TeaApplication$AppState_$VALUES = null,
cgxgbt_TeaApplication$AppState__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cgxgbt_TeaApplication$AppState;
    jl_Enum__init_(var$1, $rt_s(60), 0);
    cgxgbt_TeaApplication$AppState_INIT = var$1;
    var$1 = new cgxgbt_TeaApplication$AppState;
    jl_Enum__init_(var$1, $rt_s(61), 1);
    cgxgbt_TeaApplication$AppState_PRELOAD_ASSETS = var$1;
    var$1 = new cgxgbt_TeaApplication$AppState;
    jl_Enum__init_(var$1, $rt_s(62), 2);
    cgxgbt_TeaApplication$AppState_DOWNLOAD_ASSETS = var$1;
    var$1 = new cgxgbt_TeaApplication$AppState;
    jl_Enum__init_(var$1, $rt_s(63), 3);
    cgxgbt_TeaApplication$AppState_APP_CREATE = var$1;
    var$1 = new cgxgbt_TeaApplication$AppState;
    jl_Enum__init_(var$1, $rt_s(64), 4);
    cgxgbt_TeaApplication$AppState_APP_LOOP = var$1;
    var$2 = $rt_createArray(cgxgbt_TeaApplication$AppState, 5);
    var$3 = var$2.data;
    var$3[0] = cgxgbt_TeaApplication$AppState_INIT;
    var$3[1] = cgxgbt_TeaApplication$AppState_PRELOAD_ASSETS;
    var$3[2] = cgxgbt_TeaApplication$AppState_DOWNLOAD_ASSETS;
    var$3[3] = cgxgbt_TeaApplication$AppState_APP_CREATE;
    var$3[4] = var$1;
    cgxgbt_TeaApplication$AppState_$VALUES = var$2;
},
cgxgbtd_WindowWrapper = $rt_classWithoutFields(0),
otj_JSObject = $rt_classWithoutFields(0),
otjb_AnimationFrameCallback = $rt_classWithoutFields(0);
function cgxgbtdi_TeaWindow() {
    let a = this; jl_Object.call(a);
    a.$window0 = null;
    a.$runnable = null;
}
let cgxgbtdi_TeaWindow_TEA_WINDOW = null,
cgxgbtdi_TeaWindow_$callClinit = () => {
    cgxgbtdi_TeaWindow_$callClinit = $rt_eraseClinit(cgxgbtdi_TeaWindow);
    cgxgbtdi_TeaWindow__clinit_();
},
cgxgbtdi_TeaWindow_get = () => {
    cgxgbtdi_TeaWindow_$callClinit();
    return cgxgbtdi_TeaWindow_TEA_WINDOW;
},
cgxgbtdi_TeaWindow__init_0 = $this => {
    cgxgbtdi_TeaWindow_$callClinit();
    $this.$window0 = window;
},
cgxgbtdi_TeaWindow__init_ = () => {
    let var_0 = new cgxgbtdi_TeaWindow();
    cgxgbtdi_TeaWindow__init_0(var_0);
    return var_0;
},
cgxgbtdi_TeaWindow_getDocument = $this => {
    return $this.$window0.document;
},
cgxgbtdi_TeaWindow_requestAnimationFrame = ($this, $runnable) => {
    $this.$runnable = $runnable;
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap($this), "onAnimationFrame"));
},
cgxgbtdi_TeaWindow_getClientWidth = $this => {
    return $this.$window0.innerWidth;
},
cgxgbtdi_TeaWindow_getClientHeight = $this => {
    return $this.$window0.innerHeight;
},
cgxgbtdi_TeaWindow_addEventListener = ($this, $type, $listener) => {
    $this.$window0.addEventListener($rt_ustr($type), otji_JS_function($listener, "handleEvent"));
},
cgxgbtdi_TeaWindow__clinit_ = () => {
    cgxgbtdi_TeaWindow_TEA_WINDOW = cgxgbtdi_TeaWindow__init_();
},
cgxgbtdi_TeaWindow_onAnimationFrame$exported$0 = (var$1, var$2) => {
    let var$3;
    cgxgbtdi_TeaWindow_$callClinit();
    var$2;
    var$1 = var$1;
    var$3 = var$1.$runnable;
    var$1.$runnable = null;
    cgxgbt_TeaApplication_run(var$3);
},
jl_Math = $rt_classWithoutFields(),
jl_Math_ceil = var$1 => {
    return Math.ceil(var$1);
},
jl_Math_powImpl = (var$1, var$2) => {
    return Math.pow(var$1, var$2);
},
jl_Math_round = var$1 => {
    return var$1 + jl_Math_sign(var$1) * 0.5 | 0;
},
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_minImpl = (var$1, var$2) => {
    return Math.min(var$1, var$2);
},
jl_Math_absImpl = var$1 => {
    return Math.abs(var$1);
},
jl_Math_abs = var$1 => {
    return jl_Math_absImpl(var$1);
},
jl_Math_sign = var$1 => {
    return Math.sign(var$1);
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
ju_Objects = $rt_classWithoutFields(),
ju_Objects_checkFromIndexSize = (var$1, $size, $length) => {
    let var$4;
    if (var$1 >= 0 && $size >= 0 && $size <= ($length - var$1 | 0))
        return var$1;
    var$4 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$4);
    $rt_throw(var$4);
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $jsNumber => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $numberWrappers, $numberFinalizationRegistry;
    if ($jsNumber === null)
        return null;
    $type = $rt_str(typeof $jsNumber);
    $isObject = !jl_String_equals($type, $rt_s(65)) && !jl_String_equals($type, $rt_s(66)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            $wrappers.set($jsNumber, new WeakRef($wrapper));
            return $wrapper;
        }
        if (jl_String_equals($type, $rt_s(67))) {
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4($stringFinalizationRegistry, $wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if (jl_String_equals($type, $rt_s(68))) {
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4($numberFinalizationRegistry, $wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if (jl_String_equals($type, $rt_s(69))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapper);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($jsNumber);
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
otji_JSWrapper_javaToJs = $o => {
    if ($o === null)
        return null;
    return $o instanceof $rt_objcls() && $o instanceof otji_JSWrapper ? otji_JSWrapper_unwrap($o) : $o;
},
otji_JSWrapper_jsToJava = $o => {
    if ($o === null)
        return null;
    return $o instanceof $rt_objcls() ? $o : otji_JSWrapper_wrap($o);
},
otji_JSWrapper_register$js_body$_4 = (var$1, var$2, var$3) => {
    return var$1.register(var$2, var$3);
},
cgxgbta_TeaWebAgent = $rt_classWithoutFields(),
cgxgbta_TeaWebAgent_createAgent$js_body$_1 = () => {
    var userAgent = navigator.userAgent.toLowerCase();
    return { firefox : userAgent.indexOf('firefox') !=  -1, chrome : userAgent.indexOf('chrome') !=  -1, safari : userAgent.indexOf('safari') !=  -1, opera : userAgent.indexOf('opera') !=  -1, IE : userAgent.indexOf('msie') !=  -1, macOS : userAgent.indexOf('mac') !=  -1, linux : userAgent.indexOf('linux') !=  -1, windows : userAgent.indexOf('win') !=  -1, userAgent : userAgent };
},
jl_System = $rt_classWithoutFields(),
jl_System_outCache = null,
jl_System_errCache = null,
jl_System_properties = null,
jl_System_out = () => {
    let var$1;
    if (jl_System_outCache === null) {
        var$1 = new otcic_JSStdoutPrintStream;
        otcic_JsConsolePrintStream__init_(var$1);
        jl_System_outCache = var$1;
    }
    return jl_System_outCache;
},
jl_System_err = () => {
    let var$1;
    if (jl_System_errCache === null) {
        var$1 = new otcic_JSStderrPrintStream;
        otcic_JsConsolePrintStream__init_(var$1);
        jl_System_errCache = var$1;
    }
    return jl_System_errCache;
},
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let $srcType, $targetType, $srcArray, $i, var$10, var$11, var$12, $elem, var$14;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
            a: {
                b: {
                    if ($src !== $dest) {
                        $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                        $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                        if ($srcType !== null && $targetType !== null) {
                            if ($srcType === $targetType)
                                break b;
                            if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                $srcArray = $src;
                                $i = 0;
                                var$10 = $srcPos;
                                while ($i < $length) {
                                    var$11 = $srcArray.data;
                                    var$12 = var$10 + 1 | 0;
                                    $elem = var$11[var$10];
                                    var$14 = $targetType.$platformClass;
                                    if (!($elem !== null && !(typeof $elem.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable($elem.constructor, var$14) ? 1 : 0)) {
                                        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                        $src = new jl_ArrayStoreException;
                                        jl_Exception__init_($src);
                                        $rt_throw($src);
                                    }
                                    $i = $i + 1 | 0;
                                    var$10 = var$12;
                                }
                                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                return;
                            }
                            if (!jl_Class_isPrimitive($srcType))
                                break a;
                            if (jl_Class_isPrimitive($targetType))
                                break b;
                            else
                                break a;
                        }
                        $src = new jl_ArrayStoreException;
                        jl_Exception__init_($src);
                        $rt_throw($src);
                    }
                }
                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                return;
            }
            $src = new jl_ArrayStoreException;
            jl_Exception__init_($src);
            $rt_throw($src);
        }
        $src = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($src);
        $rt_throw($src);
    }
    $dest = new jl_NullPointerException;
    jl_RuntimeException__init_($dest, $rt_s(70));
    $rt_throw($dest);
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
        return;
    }
    $src = new jl_IndexOutOfBoundsException;
    jl_Exception__init_($src);
    $rt_throw($src);
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
},
jl_System_currentTimeMillis = () => {
    return Long_fromNumber((new Date()).getTime());
},
jl_System_setProperty = (var$1, var$2) => {
    let var$3, var$4, var$5;
    if (jl_System_properties === null) {
        var$3 = new ju_Properties;
        ju_Hashtable__init_(var$3);
        var$4 = var$3;
        ju_Hashtable_put(var$4, $rt_s(71), $rt_s(72));
        ju_Hashtable_put(var$4, $rt_s(37), $rt_s(73));
        ju_Hashtable_put(var$4, $rt_s(74), $rt_s(75));
        ju_Hashtable_put(var$4, $rt_s(76), $rt_s(77));
        ju_Hashtable_put(var$4, $rt_s(78), $rt_s(17));
        ju_Hashtable_put(var$4, $rt_s(79), $rt_s(80));
        ju_Hashtable_put(var$4, $rt_s(81), $rt_s(72));
        ju_Hashtable_put(var$4, $rt_s(82), $rt_s(75));
        var$5 = new ju_Properties;
        ju_Hashtable__init_(var$5);
        var$5.$defaults = var$3;
        jl_System_properties = var$5;
    }
    return ju_Hashtable_put(jl_System_properties, var$1, var$2);
},
cbg_Graphics = $rt_classWithoutFields(0);
function cgxgbt_TeaGraphics() {
    let a = this; jl_Object.call(a);
    a.$context = null;
    a.$canvas0 = null;
    a.$config0 = null;
    a.$gl20 = null;
    a.$gl30 = null;
    a.$glVersion = null;
    a.$fps = 0.0;
    a.$lastTimeStamp = Long_ZERO;
    a.$frameId = Long_ZERO;
    a.$deltaTime = 0.0;
    a.$time = 0.0;
    a.$frames = 0;
}
let cgxgbt_TeaGraphics__init_ = ($this, $config) => {
    let $attr, $canvas1, $window, $document, $versionString, $vendorString, $rendererString, $width, $currentWindow, var$11, var$12;
    $this.$fps = 0.0;
    $this.$lastTimeStamp = jl_System_currentTimeMillis();
    $this.$frameId = Long_fromInt(-1);
    $this.$deltaTime = 0.0;
    $this.$time = 0.0;
    $this.$config0 = $config;
    $this.$canvas0 = (cgxgbtdi_TeaWindow_getDocument(cgxgbtdi_TeaWindow__init_())).getElementById($rt_ustr($config.$canvasID));
    $attr = cgxgbtg_WebGLContextAttributesWrapper_create$js_body$_14();
    $attr.alpha = !!$config.$alpha;
    $attr.antialias = !!$config.$antialiasing;
    $attr.stencil = !!$config.$stencil;
    $attr.premultipliedAlpha = !!$config.$premultipliedAlpha;
    $attr.preserveDrawingBuffer = !!$config.$preserveDrawingBuffer;
    $attr.powerPreference = $rt_ustr($config.$powerPreference);
    $canvas1 = $this.$canvas0;
    if ($config.$useGL30)
        $this.$context = $canvas1.getContext("webgl2", $attr);
    a: {
        if ($config.$useGL30) {
            $window = $this.$context;
            if ($window !== null) {
                if (!$config.$useDebugGL)
                    $document = cgxgbt_TeaGL30__init_0($window);
                else {
                    $document = new cgxgbt_TeaGL30Debug;
                    cgxgbt_TeaGL30__init_($document, $window);
                }
                $this.$gl30 = $document;
                $this.$gl20 = $document;
                break a;
            }
        }
        $document = $canvas1.getContext("webgl", $attr);
        $this.$context = $document;
        if (!$config.$useDebugGL)
            $window = cgxgbt_TeaGL20__init_0($document);
        else {
            $window = new cgxgbt_TeaGL20Debug;
            cgxgbt_TeaGL20__init_($window, $document);
        }
        $this.$gl20 = $window;
    }
    $versionString = $this.$gl20.$glGetString(7938);
    $vendorString = $this.$gl20.$glGetString(7936);
    $rendererString = $this.$gl20.$glGetString(7937);
    $canvas1 = new cbggg_GLVersion;
    $window = cbg_Application$ApplicationType_WebGL;
    $canvas1.$TAG = $rt_s(83);
    if ($window === cbg_Application$ApplicationType_Android)
        $canvas1.$type1 = cbggg_GLVersion$Type_GLES;
    else if ($window === cbg_Application$ApplicationType_iOS)
        $canvas1.$type1 = cbggg_GLVersion$Type_GLES;
    else if ($window === cbg_Application$ApplicationType_Desktop)
        $canvas1.$type1 = cbggg_GLVersion$Type_OpenGL;
    else if ($window === cbg_Application$ApplicationType_Applet)
        $canvas1.$type1 = cbggg_GLVersion$Type_OpenGL;
    else if ($window !== $window)
        $canvas1.$type1 = cbggg_GLVersion$Type_NONE;
    else
        $canvas1.$type1 = cbggg_GLVersion$Type_WebGL;
    $window = $canvas1.$type1;
    if ($window === cbggg_GLVersion$Type_GLES)
        cbggg_GLVersion_extractVersion($canvas1, $rt_s(84), $versionString);
    else if ($window === cbggg_GLVersion$Type_WebGL)
        cbggg_GLVersion_extractVersion($canvas1, $rt_s(85), $versionString);
    else if ($window === cbggg_GLVersion$Type_OpenGL)
        cbggg_GLVersion_extractVersion($canvas1, $rt_s(86), $versionString);
    else {
        $canvas1.$majorVersion = (-1);
        $canvas1.$minorVersion = (-1);
        $canvas1.$releaseVersion = (-1);
        $vendorString = $rt_s(13);
        $rendererString = $rt_s(13);
    }
    $canvas1.$versionString = $versionString;
    $canvas1.$vendorString = $vendorString;
    $canvas1.$rendererString = $rendererString;
    $this.$glVersion = $canvas1;
    $width = $config.$width;
    if (!($width < 0 && $config.$height < 0)) {
        if ($width && $config.$height ? 1 : 0)
            cgxgbt_TeaGraphics_setCanvasSize($this, $width, $config.$height, 0);
        else {
            $currentWindow = cgxgbtdi_TeaWindow_get();
            cgxgbt_TeaGraphics_setCanvasSize($this, cgxgbtdi_TeaWindow_getClientWidth($currentWindow) - $config.$padHorizontal | 0, cgxgbtdi_TeaWindow_getClientHeight($currentWindow) - $config.$padVertical | 0, $config.$usePhysicalPixels);
        }
    }
    $config = $this.$context;
    var$11 = cgxgbt_TeaGraphics_getWidth($this);
    var$12 = cgxgbt_TeaGraphics_getHeight($this);
    $config.viewport(0, 0, var$11, var$12);
    $config = $this.$canvas0;
    $window = new cgxgbt_TeaGraphics$1;
    $window.$this$021 = $this;
    cgxgbt_TeaGraphics_addFullscreenChangeListener$js_body$_61($config, otji_JS_function(otji_JSWrapper_unwrap($window), "fullscreenChanged"));
},
cgxgbt_TeaGraphics__init_0 = var_0 => {
    let var_1 = new cgxgbt_TeaGraphics();
    cgxgbt_TeaGraphics__init_(var_1, var_0);
    return var_1;
},
cgxgbt_TeaGraphics_getGL20 = $this => {
    return $this.$gl20;
},
cgxgbt_TeaGraphics_getGL30 = $this => {
    return $this.$gl30;
},
cgxgbt_TeaGraphics_getWidth = $this => {
    return $this.$canvas0.width;
},
cgxgbt_TeaGraphics_getHeight = $this => {
    return $this.$canvas0.height;
},
cgxgbt_TeaGraphics_setCanvasSize = ($this, $width, $height, $usePhysicalPixels) => {
    let $density, $w, $h, $style, var$8;
    $density = 1.0;
    if ($usePhysicalPixels)
        $density = devicePixelRatio || 1;
    $w = $width * $density | 0;
    $h = $height * $density | 0;
    $this.$canvas0.width = $w;
    $this.$canvas0.height = $h;
    if ($usePhysicalPixels) {
        $style = $this.$canvas0.style;
        cgxgbtd_StyleWrapper$Unit_$callClinit();
        var$8 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$8);
        jl_StringBuilder_append(jl_StringBuilder_append0(var$8, $width), $rt_s(87));
        $style.setProperty("width", $rt_ustr(jl_AbstractStringBuilder_toString(var$8)));
        var$8 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$8);
        jl_StringBuilder_append(jl_StringBuilder_append0(var$8, $height), $rt_s(87));
        $style.setProperty("height", $rt_ustr(jl_AbstractStringBuilder_toString(var$8)));
    }
},
cgxgbt_TeaGraphics_supportsExtension = ($this, $extensionName) => {
    return $this.$context.getExtension($rt_ustr($extensionName)) === null ? 0 : 1;
},
cgxgbt_TeaGraphics_addFullscreenChangeListener$js_body$_61 = (var$1, var$2) => {
    if (var$1.requestFullscreen) {
        document.addEventListener("fullscreenchange", var$2, false);
    }
    if (var$1.webkitRequestFullScreen) {
        document.addEventListener("webkitfullscreenchange", var$2, false);
    }
    if (var$1.mozRequestFullScreen) {
        document.addEventListener("mozfullscreenchange", var$2, false);
    }
    if (var$1.msRequestFullscreen) {
        document.addEventListener("msfullscreenchange", var$2, false);
    }
},
cgxgbta_AssetDownloader = $rt_classWithoutFields(0);
function cgxgbta_AssetDownloadImpl() {
    let a = this; jl_Object.call(a);
    a.$queue = 0;
    a.$showLogs = 0;
}
let cgxgbta_AssetDownloadImpl_subtractQueue = $this => {
    $this.$queue = $this.$queue - 1 | 0;
},
cgxgbta_AssetDownloadImpl_addQueue = $this => {
    $this.$queue = $this.$queue + 1 | 0;
},
cgxgbta_AssetDownloadImpl_load = ($this, $async, $url, $type, $listener) => {
    let $internalListener, var$6;
    $internalListener = new cgxgbta_AssetDownloadImpl$1;
    $internalListener.$this$06 = $this;
    $internalListener.$val$listener = $listener;
    if ($this.$showLogs) {
        $listener = jl_System_out();
        var$6 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$6);
        jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(88)), $url);
        var$6 = jl_AbstractStringBuilder_toString(var$6);
        otcic_JsConsolePrintStream_println($listener, var$6);
    }
    a: {
        cgxgbta_AssetDownloadImpl$3_$callClinit();
        switch (cgxgbta_AssetDownloadImpl$3_$SwitchMap$com$github$xpenatan$gdx$backends$teavm$assetloader$AssetType.data[$type.$ordinal0]) {
            case 1:
                break;
            case 2:
                $type = null;
                cgxgbta_AssetDownloadImpl$1_onSuccess($internalListener, $url, $type);
                break a;
            default:
                $url = new cbgu_GdxRuntimeException;
                $type = jl_String_valueOf($type);
                $listener = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_($listener);
                jl_StringBuilder_append(jl_StringBuilder_append($listener, $rt_s(89)), $type);
                jl_RuntimeException__init_($url, jl_AbstractStringBuilder_toString($listener));
                $rt_throw($url);
        }
        cgxgbta_AssetDownloadImpl_loadBinary($this, $async, $url, $internalListener, 0);
    }
},
cgxgbta_AssetDownloadImpl_loadBinary = ($this, $async, $url, $listener, $count) => {
    let var$5;
    if ($count == 3) {
        if ($listener !== null)
            cgxgbta_AssetDownloadImpl$1_onFailure($listener, $url);
        return;
    }
    cgxgbta_AssetDownloadImpl_addQueue($this);
    if (!$async)
        cgxgbta_AssetDownloadImpl_loadBinaryInternally($this, 0, $url, $listener, $count);
    else {
        var$5 = new cgxgbta_AssetDownloadImpl$loadBinary$lambda$_6_0;
        var$5.$_02 = $this;
        var$5.$_10 = $url;
        var$5.$_20 = $listener;
        var$5.$_30 = $count;
        setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$5), "onTimer"), 0);
    }
},
cgxgbta_AssetDownloadImpl_loadBinaryInternally = ($this, $async, $url, $listener, $count) => {
    let $request, var$6;
    $request = new XMLHttpRequest();
    var$6 = new cgxgbta_AssetDownloadImpl$loadBinaryInternally$lambda$_7_0;
    var$6.$_012 = $this;
    var$6.$_15 = $request;
    var$6.$_24 = $listener;
    var$6.$_32 = $url;
    var$6.$_40 = $count;
    var$6.$_5 = $async;
    $request.onreadystatechange = otji_JS_function(otji_JSWrapper_unwrap(var$6), "handleEvent");
    var$6 = new cgxgbta_AssetDownloadImpl$setOnProgress$lambda$_8_0;
    var$6.$_014 = $listener;
    $listener = otji_JSWrapper_unwrap(var$6);
    $request.addEventListener("progress", otji_JS_function($listener, "handleEvent"));
    $request.open("GET", $rt_ustr($url), !!$async);
    if ($async)
        $request.responseType = "arraybuffer";
    $request.send();
},
cgxgbta_AssetInstance = $rt_classWithoutFields(),
cgxgbta_AssetInstance_downloaderInstance = null,
cgxgbta_AssetInstance_instance = null,
cgxgbta_AssetLoader = $rt_classWithoutFields(0);
function cgxgbta_AssetLoadImpl() {
    let a = this; jl_Object.call(a);
    a.$assetTotal = 0;
    a.$baseUrl = null;
    a.$assetInQueue = null;
    a.$assetDownloader = null;
}
let cgxgbta_AssetLoadImpl_getAssetUrl = $this => {
    let var$1, var$2;
    var$1 = $this.$baseUrl;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$1), $rt_s(90));
    return jl_AbstractStringBuilder_toString(var$2);
},
cgxgbta_AssetLoadImpl_getScriptUrl = $this => {
    let var$1, var$2;
    var$1 = $this.$baseUrl;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$1), $rt_s(91));
    return jl_AbstractStringBuilder_toString(var$2);
},
cgxgbta_AssetLoadImpl_preload = ($this, $config, $assetFileUrl) => {
    let $listener, var$4, var$5;
    $listener = new cgxgbta_AssetLoadImpl$5;
    $listener.$this$02 = $this;
    $listener.$val$config = $config;
    $listener.$val$assetFileUrl = $assetFileUrl;
    $config = $this.$assetDownloader;
    var$4 = cgxgbta_AssetLoadImpl_getAssetUrl($this);
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$4), $assetFileUrl);
    $assetFileUrl = jl_AbstractStringBuilder_toString(var$5);
    var$5 = cgxgbta_AssetType_Binary;
    cgxgbta_AssetDownloadImpl_load($config, 1, $assetFileUrl, var$5, $listener);
},
cgxgbta_AssetLoadImpl_loadScript = ($this, $path, $listener) => {
    let var$3, var$4, var$5, var$6, var$7;
    var$3 = $this.$assetDownloader;
    var$4 = cgxgbta_AssetLoadImpl_getScriptUrl($this);
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$4), $path);
    var$6 = jl_AbstractStringBuilder_toString(var$5);
    $path = var$3;
    if ($path.$showLogs) {
        var$3 = jl_System_out();
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(92)), var$6);
        var$4 = jl_AbstractStringBuilder_toString(var$4);
        otcic_JsConsolePrintStream_println(var$3, var$4);
    }
    cgxgbta_AssetDownloadImpl_addQueue($path);
    var$5 = window.document;
    var$7 = var$5.createElement("script");
    var$3 = new cgxgbta_AssetDownloadImpl$2;
    var$3.$this$05 = $path;
    var$3.$val$url = var$6;
    var$3.$val$listener1 = $listener;
    var$7.addEventListener("load", otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent"));
    var$4 = new cgxgbta_AssetDownloadImpl$loadScript$lambda$_5_0;
    var$4.$_05 = $path;
    var$4.$_12 = var$6;
    var$4.$_22 = $listener;
    var$7.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
    $path = $rt_ustr(var$6);
    var$7.src = $path;
    var$5.body.appendChild(var$7);
},
cgxgbta_AssetLoadImpl_getQueue = $this => {
    return $this.$assetDownloader.$queue;
};
function cgxjc_JMultiplatform() {
    jl_Object.call(this);
    this.$map0 = null;
}
let cgxjc_JMultiplatform_platformMap = null,
cgxjc_JMultiplatform__init_0 = $this => {
    let var$1;
    var$1 = new cgxjc_JPlatformMap;
    var$1.$map = ju_HashMap__init_();
    $this.$map0 = var$1;
},
cgxjc_JMultiplatform__init_ = () => {
    let var_0 = new cgxjc_JMultiplatform();
    cgxjc_JMultiplatform__init_0(var_0);
    return var_0;
};
function cgxjc_JPlatformMap() {
    jl_Object.call(this);
    this.$map = null;
}
let cgxjc_JPlatformMap_put = ($this, $key, $value) => {
    ju_HashMap_put($this.$map, $key, $value);
},
cbg_Input = $rt_classWithoutFields(0);
function cbg_AbstractInput() {
    let a = this; jl_Object.call(a);
    a.$pressedKeys = null;
    a.$justPressedKeys = null;
    a.$keysToCatch = null;
}
let cbg_AbstractInput_isCatchKey = ($this, $keycode) => {
    let var$2;
    var$2 = $this.$keysToCatch;
    return !$keycode ? var$2.$hasZeroValue0 : cbgu_IntSet_locateKey(var$2, $keycode) < 0 ? 0 : 1;
},
cgxgbtd_EventListenerWrapper = $rt_classWithoutFields(0);
function cgxgbt_TeaInput() {
    let a = this; cbg_AbstractInput.call(a);
    a.$canvas = null;
    a.$justTouched = 0;
    a.$touchMap = null;
    a.$touched = null;
    a.$touchX = null;
    a.$touchY = null;
    a.$deltaX = null;
    a.$deltaY = null;
    a.$pressedButtons = null;
    a.$pressedKeyCount = 0;
    a.$keyJustPressed = 0;
    a.$justPressedButtons = null;
    a.$processor = null;
    a.$currentEventTimeStamp = Long_ZERO;
    a.$hasFocus = 0;
    a.$application = null;
}
let cgxgbt_TeaInput_getMouseWheelVelocity = $event => {
    let $agent, $delta, $detail, $wheelDelta;
    $agent = cgxgbt_TeaApplication_agentInfo;
    $delta = 0.0;
    $detail = $event.detail;
    $wheelDelta = $event.wheelDelta;
    if ($agent.firefox ? 1 : 0)
        $delta = ($agent.macOS ? 1 : 0) ? 1.0 * $detail : 1.0 * $detail / 3.0;
    else if ($agent.opera ? 1 : 0)
        $delta = !($agent.linux ? 1 : 0) ? (-1.0) * $wheelDelta / 40.0 : (-1.0) * $wheelDelta / 80.0;
    else if (!(!($agent.chrome ? 1 : 0) && !($agent.safari ? 1 : 0) && !($agent.IE ? 1 : 0))) {
        $delta = (-1.0) * $wheelDelta;
        $detail = $delta / 120.0;
        if (jl_Math_abs($detail) >= 1.0)
            $delta = $detail;
        else if (!($agent.windows ? 1 : 0))
            $delta = !($agent.macOS ? 1 : 0) ? $detail : $delta / 3.0;
    }
    return $delta;
},
cgxgbt_TeaInput__init_0 = ($this, $application, $canvas) => {
    let var$3, var$4, var$5;
    $this.$keysToCatch = cbgu_IntSet__init_();
    $this.$pressedKeys = $rt_createBooleanArray(256);
    $this.$justPressedKeys = $rt_createBooleanArray(256);
    $this.$justTouched = 0;
    var$3 = new cbgu_IntMap;
    var$3.$loadFactor0 = 0.800000011920929;
    var$4 = cbgu_ObjectSet_tableSize(20, 0.800000011920929);
    var$3.$threshold0 = var$4 * 0.800000011920929 | 0;
    var$5 = var$4 - 1 | 0;
    var$3.$mask1 = var$5;
    var$3.$shift0 = jl_Long_numberOfLeadingZeros(Long_fromInt(var$5));
    var$3.$keyTable0 = $rt_createIntArray(var$4);
    var$3.$valueTable0 = $rt_createArray(jl_Object, var$4);
    $this.$touchMap = var$3;
    $this.$touched = $rt_createBooleanArray(20);
    $this.$touchX = $rt_createIntArray(20);
    $this.$touchY = $rt_createIntArray(20);
    $this.$deltaX = $rt_createIntArray(20);
    $this.$deltaY = $rt_createIntArray(20);
    $this.$pressedButtons = cbgu_IntSet__init_();
    $this.$pressedKeyCount = 0;
    $this.$keyJustPressed = 0;
    $this.$justPressedButtons = $rt_createBooleanArray(5);
    $this.$hasFocus = 1;
    $this.$application = $application;
    $this.$canvas = $canvas;
    cgxgbt_TeaInput_hookEvents($this);
},
cgxgbt_TeaInput__init_ = (var_0, var_1) => {
    let var_2 = new cgxgbt_TeaInput();
    cgxgbt_TeaInput__init_0(var_2, var_0, var_1);
    return var_2;
},
cgxgbt_TeaInput_hookEvents = $this => {
    let $document;
    $document = $this.$canvas.ownerDocument;
    $document.addEventListener("mousedown", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $document.addEventListener("mouseup", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $document.addEventListener("mousemove", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $document.addEventListener("wheel", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $document.addEventListener("keydown", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $document.addEventListener("keyup", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $document.addEventListener("keypress", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!0);
    $this.$canvas.addEventListener("touchstart", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!1);
    $this.$canvas.addEventListener("touchmove", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!1);
    $this.$canvas.addEventListener("touchcancel", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!1);
    $this.$canvas.addEventListener("touchend", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"), !!1);
},
cgxgbt_TeaInput_handleMouseEvents = ($this, $touchEvent) => {
    let $type, $target, $canvas2, var$5, $button, $relativeX, $relativeY, $touch, $mouseX, $mouseY, $wheelDelta, $touches, $i, $j, $real, $equals, $touch_0, $touchId, $j_0, var$21;
    a: {
        $type = $rt_str($touchEvent.type);
        if (jl_String_equals($type, $rt_s(93))) {
            window.focus();
            $target = $touchEvent.target;
            $canvas2 = $this.$canvas;
            if ($target !== $canvas2 ? 0 : 1) {
                var$5 = $this.$touched.data;
                if (!var$5[0]) {
                    $this.$hasFocus = 1;
                    $this.$justTouched = 1;
                    var$5[0] = 1;
                    $button = cgxgbtu_KeyCodes_getButton($touchEvent.button);
                    cbgu_IntSet_add($this.$pressedButtons, $button);
                    $this.$justPressedButtons.data[$button] = 1;
                    $this.$deltaX.data[0] = 0;
                    $this.$deltaY.data[0] = 0;
                    if (!cgxgbt_TeaInput_isCursorCatched($this)) {
                        $relativeX = cgxgbt_TeaInput_getRelativeX0($this, $touchEvent, $this.$canvas);
                        $relativeY = cgxgbt_TeaInput_getRelativeY0($this, $touchEvent, $this.$canvas);
                        $this.$touchX.data[0] = $relativeX;
                        $this.$touchY.data[0] = $relativeY;
                    } else {
                        var$5 = $this.$touchX.data;
                        var$5[0] = var$5[0] + $touchEvent.movementX | 0;
                        var$5 = $this.$touchY.data;
                        var$5[0] = var$5[0] + $touchEvent.movementY | 0;
                    }
                    $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
                    $touch = $this.$processor;
                    if ($touch !== null)
                        $touch.$touchDown($this.$touchX.data[0], $this.$touchY.data[0], 0, cgxgbtu_KeyCodes_getButton($touchEvent.button));
                    $touchEvent.preventDefault();
                    $touchEvent.stopPropagation();
                    break a;
                }
            }
            $mouseX = cgxgbt_TeaInput_getRelativeX0($this, $touchEvent, $canvas2);
            $mouseY = cgxgbt_TeaInput_getRelativeY0($this, $touchEvent, $this.$canvas);
            if (!($mouseX >= 0.0 && $mouseX <= cgxgbt_TeaGraphics_getWidth(cbg_Gdx_graphics) && $mouseY >= 0.0 && $mouseY <= cgxgbt_TeaGraphics_getHeight(cbg_Gdx_graphics)))
                $this.$hasFocus = 0;
            return;
        }
        if (jl_String_equals($type, $rt_s(94))) {
            if (!$this.$touched.data[0])
                return;
            cbgu_IntSet_remove($this.$pressedButtons, cgxgbtu_KeyCodes_getButton($touchEvent.button));
            var$5 = $this.$touched;
            var$5.data[0] = $this.$pressedButtons.$size3 <= 0 ? 0 : 1;
            if (!cgxgbt_TeaInput_isCursorCatched($this)) {
                cgxgbt_TeaInput_setDelta($this, 0, cgxgbt_TeaInput_getRelativeX0($this, $touchEvent, $this.$canvas) - $this.$touchX.data[0] | 0, cgxgbt_TeaInput_getRelativeY0($this, $touchEvent, $this.$canvas) - $this.$touchY.data[0] | 0);
                $this.$touchX.data[0] = cgxgbt_TeaInput_getRelativeX0($this, $touchEvent, $this.$canvas);
                $this.$touchY.data[0] = cgxgbt_TeaInput_getRelativeY0($this, $touchEvent, $this.$canvas);
            } else {
                cgxgbt_TeaInput_setDelta($this, 0, $touchEvent.movementX | 0, $touchEvent.movementY | 0);
                var$5 = $this.$touchX.data;
                var$5[0] = var$5[0] + $touchEvent.movementX | 0;
                var$5 = $this.$touchY.data;
                var$5[0] = var$5[0] + $touchEvent.movementY | 0;
            }
            $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
            $this.$touched.data[0] = 0;
            $touch = $this.$processor;
            if ($touch !== null)
                $touch.$touchUp($this.$touchX.data[0], $this.$touchY.data[0], 0, cgxgbtu_KeyCodes_getButton($touchEvent.button));
        } else if (!jl_String_equals($type, $rt_s(95))) {
            if (jl_String_equals($type, $rt_s(96))) {
                if ($this.$processor !== null) {
                    $wheelDelta = cgxgbt_TeaInput_getMouseWheelVelocity($touchEvent);
                    $this.$processor.$scrolled(0.0, $wheelDelta | 0);
                }
                $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
            } else if (jl_String_equals($type, $rt_s(97))) {
                $this.$justTouched = 1;
                $touches = $touchEvent.changedTouches;
                $i = 0;
                $j = $touches.length;
                while ($i < $j) {
                    $touch = $touches.item($i);
                    $real = $touch.identifier;
                    $canvas2 = $this.$touchMap;
                    $equals = cgxgbt_TeaInput_getAvailablePointer($this);
                    cbgu_IntMap_put($canvas2, $real, jl_Integer_valueOf($equals));
                    $this.$touched.data[$equals] = 1;
                    $this.$touchX.data[$equals] = cgxgbt_TeaInput_getRelativeX($this, $touch, $this.$canvas);
                    $this.$touchY.data[$equals] = cgxgbt_TeaInput_getRelativeY($this, $touch, $this.$canvas);
                    $this.$deltaX.data[$equals] = 0;
                    $this.$deltaY.data[$equals] = 0;
                    $touch = $this.$processor;
                    if ($touch !== null)
                        $touch.$touchDown($this.$touchX.data[$equals], $this.$touchY.data[$equals], $equals, 0);
                    $i = $i + 1 | 0;
                }
                $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
                $touchEvent.preventDefault();
            }
        } else {
            if (!cgxgbt_TeaInput_isCursorCatched($this)) {
                $relativeX = cgxgbt_TeaInput_getRelativeX0($this, $touchEvent, $this.$canvas);
                $relativeY = cgxgbt_TeaInput_getRelativeY0($this, $touchEvent, $this.$canvas);
                cgxgbt_TeaInput_setDelta($this, 0, $relativeX - $this.$touchX.data[0] | 0, $relativeY - $this.$touchY.data[0] | 0);
                $this.$touchX.data[0] = $relativeX;
                $this.$touchY.data[0] = $relativeY;
            } else {
                cgxgbt_TeaInput_setDelta($this, 0, $touchEvent.movementX | 0, $touchEvent.movementY | 0);
                var$5 = $this.$touchX.data;
                var$5[0] = var$5[0] + $touchEvent.movementX | 0;
                var$5 = $this.$touchY.data;
                var$5[0] = var$5[0] + $touchEvent.movementY | 0;
            }
            $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
            $touch = $this.$processor;
            if ($touch !== null) {
                if (!$this.$touched.data[0])
                    $touch.$mouseMoved($this.$touchX.data[0], $this.$touchY.data[0]);
                else
                    $touch.$touchDragged($this.$touchX.data[0], $this.$touchY.data[0], 0);
            }
        }
    }
    if (jl_String_equals($type, $rt_s(98))) {
        $touches = $touchEvent.changedTouches;
        $i = 0;
        $j = $touches.length;
        while ($i < $j) {
            $touch_0 = $touches.item($i);
            $real = $touch_0.identifier;
            $touchId = jl_Integer_intValue(cbgu_IntMap_get($this.$touchMap, $real));
            cgxgbt_TeaInput_setDelta($this, $touchId, cgxgbt_TeaInput_getRelativeX($this, $touch_0, $this.$canvas) - $this.$touchX.data[$touchId] | 0, cgxgbt_TeaInput_getRelativeY($this, $touch_0, $this.$canvas) - $this.$touchY.data[$touchId] | 0);
            $this.$touchX.data[$touchId] = cgxgbt_TeaInput_getRelativeX($this, $touch_0, $this.$canvas);
            $this.$touchY.data[$touchId] = cgxgbt_TeaInput_getRelativeY($this, $touch_0, $this.$canvas);
            $touch = $this.$processor;
            if ($touch !== null)
                $touch.$touchDragged($this.$touchX.data[$touchId], $this.$touchY.data[$touchId], $touchId);
            $i = $i + 1 | 0;
        }
        $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
        $touchEvent.preventDefault();
    }
    if (jl_String_equals($type, $rt_s(99))) {
        $touches = $touchEvent.changedTouches;
        $i = 0;
        $j_0 = $touches.length;
        while ($i < $j_0) {
            $touch_0 = $touches.item($i);
            $real = $touch_0.identifier;
            $touchId = jl_Integer_intValue(cbgu_IntMap_get($this.$touchMap, $real));
            cbgu_IntMap_remove($this.$touchMap, $real);
            $this.$touched.data[$touchId] = 0;
            $relativeX = cgxgbt_TeaInput_getRelativeX($this, $touch_0, $this.$canvas);
            $relativeY = cgxgbt_TeaInput_getRelativeY($this, $touch_0, $this.$canvas);
            cgxgbt_TeaInput_setDelta($this, $touchId, $relativeX - $this.$touchX.data[$touchId] | 0, $relativeY - $this.$touchY.data[$touchId] | 0);
            var$5 = $this.$touchX.data;
            var$5[$touchId] = $relativeX;
            var$21 = $this.$touchY.data;
            var$21[$touchId] = $relativeY;
            $touch = $this.$processor;
            if ($touch !== null)
                $touch.$touchUp(var$5[$touchId], var$21[$touchId], $touchId, 0);
            $i = $i + 1 | 0;
        }
        $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
        $touchEvent.preventDefault();
    }
    if (jl_String_equals($type, $rt_s(100))) {
        $touches = $touchEvent.changedTouches;
        $i = 0;
        $j_0 = $touches.length;
        while ($i < $j_0) {
            $touch_0 = $touches.item($i);
            $real = $touch_0.identifier;
            $touchId = jl_Integer_intValue(cbgu_IntMap_get($this.$touchMap, $real));
            cbgu_IntMap_remove($this.$touchMap, $real);
            $this.$touched.data[$touchId] = 0;
            $relativeX = cgxgbt_TeaInput_getRelativeX($this, $touch_0, $this.$canvas);
            $relativeY = cgxgbt_TeaInput_getRelativeY($this, $touch_0, $this.$canvas);
            cgxgbt_TeaInput_setDelta($this, $touchId, $relativeX - $this.$touchX.data[$touchId] | 0, $relativeY - $this.$touchY.data[$touchId] | 0);
            var$5 = $this.$touchX.data;
            var$5[$touchId] = $relativeX;
            var$21 = $this.$touchY.data;
            var$21[$touchId] = $relativeY;
            $touch = $this.$processor;
            if ($touch !== null)
                $touch.$touchUp(var$5[$touchId], var$21[$touchId], $touchId, 0);
            $i = $i + 1 | 0;
        }
        $this.$currentEventTimeStamp = cbgu_TimeUtils_nanoTime();
        $touchEvent.preventDefault();
    }
},
cgxgbt_TeaInput_handleKeyboardEvents = ($this, $keyboardEvent) => {
    let $type, $c, var$4, $code, var$6, $keyChar;
    $type = $rt_str($keyboardEvent.type);
    if (!(jl_String_equals($type, $rt_s(101)) && $this.$hasFocus)) {
        if (jl_String_equals($type, $rt_s(102)) && $this.$hasFocus) {
            $c = $keyboardEvent.charCode & 65535;
            var$4 = $this.$processor;
            if (var$4 !== null)
                var$4.$keyTyped($c);
            if ($c == 9) {
                $keyboardEvent.preventDefault();
                $keyboardEvent.stopPropagation();
            }
        } else if (jl_String_equals($type, $rt_s(103)) && $this.$hasFocus) {
            $code = cgxgbtu_KeyCodes_keyForCode($keyboardEvent.keyCode);
            if (cbg_AbstractInput_isCatchKey($this, $code))
                $keyboardEvent.preventDefault();
            var$6 = $this.$pressedKeys.data;
            if (var$6[$code]) {
                $this.$pressedKeyCount = $this.$pressedKeyCount - 1 | 0;
                var$6[$code] = 0;
            }
            var$4 = $this.$processor;
            if (var$4 !== null)
                var$4.$keyUp($code);
            if ($code == 61) {
                $keyboardEvent.preventDefault();
                $keyboardEvent.stopPropagation();
            }
        }
    } else {
        a: {
            $code = cgxgbtu_KeyCodes_keyForCode($keyboardEvent.keyCode);
            $keyChar = 0;
            switch ($code) {
                case 67:
                    $keyChar = 8;
                    break a;
                case 112:
                    $keyChar = 127;
                    break a;
                default:
            }
        }
        if (cbg_AbstractInput_isCatchKey($this, $code))
            $keyboardEvent.preventDefault();
        if (!($code != 67 && $code != 112)) {
            $keyboardEvent.preventDefault();
            var$4 = $this.$processor;
            if (var$4 !== null) {
                var$4.$keyDown($code);
                $this.$processor.$keyTyped($keyChar);
            }
        } else {
            var$6 = $this.$pressedKeys.data;
            if (!var$6[$code]) {
                $this.$pressedKeyCount = $this.$pressedKeyCount + 1 | 0;
                var$6[$code] = 1;
                $this.$keyJustPressed = 1;
                $this.$justPressedKeys.data[$code] = 1;
                var$4 = $this.$processor;
                if (var$4 !== null)
                    var$4.$keyDown($code);
            }
        }
        if ($code == 61) {
            $keyboardEvent.preventDefault();
            $keyboardEvent.stopPropagation();
        }
    }
},
cgxgbt_TeaInput_getAvailablePointer = $this => {
    let $i, var$2, var$3, var$4, var$5, var$6;
    $i = 0;
    while (true) {
        if ($i >= 20)
            return (-1);
        a: {
            b: {
                var$2 = $this.$touchMap;
                var$3 = jl_Integer_valueOf($i);
                var$4 = var$2.$valueTable0;
                if (var$3 !== null) {
                    if (var$2.$hasZeroValue) {
                        var$2 = var$2.$zeroValue;
                        if (jl_Integer_equals(var$3, var$2)) {
                            var$5 = 1;
                            break a;
                        }
                    }
                    var$4 = var$4.data;
                    var$5 = var$4.length - 1 | 0;
                    while (true) {
                        if (var$5 < 0)
                            break b;
                        var$2 = var$4[var$5];
                        if (jl_Integer_equals(var$3, var$2))
                            break;
                        var$5 = var$5 + (-1) | 0;
                    }
                    var$5 = 1;
                    break a;
                }
                if (var$2.$hasZeroValue && var$2.$zeroValue === null) {
                    var$5 = 1;
                    break a;
                }
                var$6 = var$4.data;
                var$4 = var$2.$keyTable0;
                var$5 = var$6.length - 1 | 0;
                while (true) {
                    if (var$5 < 0)
                        break b;
                    if (var$4.data[var$5] && var$6[var$5] === null)
                        break;
                    var$5 = var$5 + (-1) | 0;
                }
                var$5 = 1;
                break a;
            }
            var$5 = 0;
        }
        if (!var$5)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
cgxgbt_TeaInput_reset = $this => {
    let $i, var$2, $i_0;
    a: {
        if ($this.$justTouched) {
            $this.$justTouched = 0;
            $i = 0;
            while (true) {
                var$2 = $this.$justPressedButtons.data;
                if ($i >= var$2.length)
                    break a;
                var$2[$i] = 0;
                $i = $i + 1 | 0;
            }
        }
    }
    b: {
        if ($this.$keyJustPressed) {
            $this.$keyJustPressed = 0;
            $i = 0;
            while (true) {
                var$2 = $this.$justPressedKeys.data;
                if ($i >= var$2.length)
                    break b;
                var$2[$i] = 0;
                $i = $i + 1 | 0;
            }
        }
    }
    $i_0 = 0;
    while ($i_0 < $this.$touchX.data.length) {
        $this.$deltaX.data[$i_0] = 0;
        $this.$deltaY.data[$i_0] = 0;
        $i_0 = $i_0 + 1 | 0;
    }
},
cgxgbt_TeaInput_setDelta = ($this, $touchId, $x, $y) => {
    $this.$deltaX.data[$touchId] = $x;
    $this.$deltaY.data[$touchId] = $y;
},
cgxgbt_TeaInput_getCompatMode = ($this, $element) => {
    if (jl_String_equals($rt_str($element.compatMode), $rt_s(104)))
        $element = $element.documentElement;
    return $element;
},
cgxgbt_TeaInput_getScrollTop = ($this, $target) => {
    return $target.scrollTop | 0;
},
cgxgbt_TeaInput_getScrollTop0 = ($this, $target) => {
    return cgxgbt_TeaInput_getScrollTop($this, cgxgbt_TeaInput_getCompatMode($this, $target));
},
cgxgbt_TeaInput_getScrollLeft = ($this, $target) => {
    return $target.scrollLeft | 0;
},
cgxgbt_TeaInput_getScrollLeft0 = ($this, $target) => {
    return cgxgbt_TeaInput_getScrollLeft($this, cgxgbt_TeaInput_getCompatMode($this, $target));
},
cgxgbt_TeaInput_getRelativeX0 = ($this, $e, $target) => {
    return jl_Math_round($target.width * 1.0 / cgxgbt_TeaInput_getClientWidth($this, $target) * ((($e.clientX - cgxgbt_TeaInput_getAbsoluteLeft($this, $target) | 0) + cgxgbt_TeaInput_getScrollLeft($this, $target) | 0) + cgxgbt_TeaInput_getScrollLeft0($this, $target.ownerDocument) | 0));
},
cgxgbt_TeaInput_getRelativeY0 = ($this, $e, $target) => {
    return jl_Math_round($target.height * 1.0 / cgxgbt_TeaInput_getClientHeight($this, $target) * ((($e.clientY - cgxgbt_TeaInput_getAbsoluteTop($this, $target) | 0) + cgxgbt_TeaInput_getScrollTop($this, $target) | 0) + cgxgbt_TeaInput_getScrollTop0($this, $target.ownerDocument) | 0));
},
cgxgbt_TeaInput_getRelativeX = ($this, $touch, $target) => {
    return jl_Math_round($target.width * 1.0 / cgxgbt_TeaInput_getClientWidth($this, $target) * ((($touch.clientX - cgxgbt_TeaInput_getAbsoluteLeft($this, $target) | 0) + cgxgbt_TeaInput_getScrollLeft($this, $target) | 0) + cgxgbt_TeaInput_getScrollLeft0($this, $target.ownerDocument) | 0));
},
cgxgbt_TeaInput_getRelativeY = ($this, $touch, $target) => {
    return jl_Math_round($target.height * 1.0 / cgxgbt_TeaInput_getClientHeight($this, $target) * ((($touch.clientY - cgxgbt_TeaInput_getAbsoluteTop($this, $target) | 0) + cgxgbt_TeaInput_getScrollTop($this, $target) | 0) + cgxgbt_TeaInput_getScrollTop0($this, $target.ownerDocument) | 0));
},
cgxgbt_TeaInput_getClientWidth = ($this, $target) => {
    return $target.clientWidth;
},
cgxgbt_TeaInput_getClientHeight = ($this, $target) => {
    return $target.clientHeight;
},
cgxgbt_TeaInput_getAbsoluteTop = ($this, $target) => {
    let var$2, var$3;
    var$2 = 0.0;
    var$3 = $target;
    while (var$3.offsetParent !== null) {
        var$2 = var$2 - var$3.scrollTop;
        var$3 = var$3.parentNode;
    }
    while ($target !== null) {
        var$2 = var$2 + $target.offsetTop;
        $target = var$3.offsetParent;
    }
    return var$2 | 0;
},
cgxgbt_TeaInput_getAbsoluteLeft = ($this, $target) => {
    let var$2, var$3;
    var$2 = 0.0;
    var$3 = $target;
    while (var$3.offsetParent !== null) {
        var$2 = var$2 - var$3.scrollLeft;
        var$3 = var$3.parentNode;
    }
    while ($target !== null) {
        var$2 = var$2 + $target.offsetLeft;
        $target = var$3.offsetParent;
    }
    return var$2 | 0;
},
cgxgbt_TeaInput_setInputProcessor = ($this, $processor) => {
    $this.$processor = $processor;
},
cgxgbt_TeaInput_isCursorCatched = $this => {
    return cgxgbt_TeaInput_isCursorCatchedJSNI$js_body$_75($this.$canvas) ? 1 : 0;
},
cgxgbt_TeaInput_isCursorCatchedJSNI$js_body$_75 = var$1 => {
    if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
        return true;
    }
    return false;
},
cgxgbt_TeaInput_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1;
    if (var$1.$application.$appListener !== null) {
        cgxgbt_TeaInput_handleMouseEvents(var$1, var$2);
        cgxgbt_TeaInput_handleKeyboardEvents(var$1, var$2);
    }
},
cbg_Files = $rt_classWithoutFields(0);
function cgxgbt_TeaFiles() {
    let a = this; jl_Object.call(a);
    a.$internalStorage = null;
    a.$classpathStorage = null;
    a.$localStorage = null;
    a.$localStoragePrefix0 = null;
}
let cgxgbt_TeaFiles__init_ = ($this, $config, $teaApplication) => {
    let var$3, var$4, var$5, var$6, var$7;
    var$3 = new cgxgbtft_InternalStorage;
    cgxgbtf_MemoryFileStorage__init_(var$3);
    $this.$internalStorage = var$3;
    var$3 = new cgxgbtft_ClasspathStorage;
    cgxgbtf_MemoryFileStorage__init_(var$3);
    $this.$classpathStorage = var$3;
    var$4 = new cgxgbtft_LocalDBStorage;
    cgxgbtf_MemoryFileStorage__init_(var$4);
    var$4.$dataBase = null;
    if ($teaApplication !== null) {
        var$5 = $teaApplication.$config;
        $teaApplication.$delayInitCount = $teaApplication.$delayInitCount + 1 | 0;
        var$6 = indexedDB || mozIndexedDB || webkitIndexedDB || msIndexedDB;
        if (typeof var$6 === 'undefined' ? 1 : 0) {
            $teaApplication = new jl_IllegalStateException;
            jl_RuntimeException__init_($teaApplication, $rt_s(105));
            $rt_throw($teaApplication);
        }
        var$7 = var$5.$localStoragePrefix;
        var$5 = var$6.open($rt_ustr(var$7), 1);
        var$3 = new cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_0;
        var$3.$_03 = var$5;
        var$5.onupgradeneeded = otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent");
        var$3 = new cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_1;
        var$3.$_015 = var$4;
        var$3.$_17 = var$5;
        var$3.$_25 = $teaApplication;
        var$5.onsuccess = otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent");
        var$3 = new cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_2;
        var$3.$_013 = var$7;
        var$3.$_16 = $teaApplication;
        var$5.onerror = otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent");
    }
    $this.$localStorage = var$4;
    $this.$localStoragePrefix0 = $config.$localStoragePrefix;
},
cgxgbt_TeaFiles__init_0 = (var_0, var_1) => {
    let var_2 = new cgxgbt_TeaFiles();
    cgxgbt_TeaFiles__init_(var_2, var_0, var_1);
    return var_2;
},
cgxgbt_TeaFiles_getFileDB = ($this, $type) => {
    if ($type === cbg_Files$FileType_Internal)
        return $this.$internalStorage;
    if ($type === cbg_Files$FileType_Classpath)
        return $this.$classpathStorage;
    if ($type !== cbg_Files$FileType_Local)
        return null;
    return $this.$localStorage;
},
cgxgbt_TeaFiles_internal = ($this, $path) => {
    return cgxgbt_TeaFileHandle__init_($this, $path, cbg_Files$FileType_Internal);
};
function cgxgbt_TeaNet() {
    jl_Object.call(this);
    this.$httpResponseListeners = null;
}
let cgxgbt_TeaNet__init_0 = $this => {
    $this.$httpResponseListeners = ju_HashMap__init_1(16);
},
cgxgbt_TeaNet__init_ = () => {
    let var_0 = new cgxgbt_TeaNet();
    cgxgbt_TeaNet__init_0(var_0);
    return var_0;
},
cbg_ApplicationLogger = $rt_classWithoutFields(0),
cgxgbt_TeaApplicationLogger = $rt_classWithoutFields(),
cbgu_Clipboard = $rt_classWithoutFields(0);
function cgxgbt_TeaClipboard() {
    let a = this; jl_Object.call(a);
    a.$requestedWritePermissions = 0;
    a.$hasWritePermissions = 0;
    a.$writeHandler = null;
    a.$content = null;
}
let cgxgbt_TeaClipboard__init_ = $this => {
    let var$1, var$2;
    $this.$requestedWritePermissions = 0;
    $this.$hasWritePermissions = 1;
    var$1 = new cgxgbt_TeaClipboard$ClipboardWriteHandler;
    var$1.$this$00 = $this;
    $this.$writeHandler = var$1;
    $this.$content = $rt_s(13);
    var$1 = cgxgbtdi_TeaWindow_getDocument(cgxgbtdi_TeaWindow_get());
    var$2 = new cgxgbt_TeaClipboard$_init_$lambda$_0_0;
    var$2.$_06 = $this;
    var$1.addEventListener("copy", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = cgxgbtdi_TeaWindow_getDocument(cgxgbtdi_TeaWindow_get());
    var$2 = new cgxgbt_TeaClipboard$_init_$lambda$_0_1;
    var$2.$_018 = $this;
    var$1.addEventListener("cut", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = cgxgbtdi_TeaWindow_getDocument(cgxgbtdi_TeaWindow_get());
    var$2 = new cgxgbt_TeaClipboard$_init_$lambda$_0_2;
    var$2.$_011 = $this;
    var$1.addEventListener("paste", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
},
cgxgbt_TeaClipboard__init_0 = () => {
    let var_0 = new cgxgbt_TeaClipboard();
    cgxgbt_TeaClipboard__init_(var_0);
    return var_0;
},
cgxgbt_TeaClipboard_setContentNATIVE$js_body$_4 = var$1 => {
    if ("clipboard" in navigator) {
        navigator.clipboard.writeText(var$1);
    }
},
cbg_Gdx = $rt_classWithoutFields(),
cbg_Gdx_app = null,
cbg_Gdx_graphics = null,
cbg_Gdx_audio = null,
cbg_Gdx_input = null,
cbg_Gdx_files = null,
cbg_Gdx_net = null,
cbg_Gdx_gl = null,
cbg_Gdx_gl20 = null,
cbg_Gdx_gl30 = null,
cbg_Audio = $rt_classWithoutFields(0),
cgxgbt_TeaAudio = $rt_classWithoutFields(0);
function cgxgbt_DefaultTeaAudio() {
    jl_Object.call(this);
    this.$webAudioAPIManager = null;
}
let cgxgbt_DefaultTeaAudio__init_ = $this => {
    $this.$webAudioAPIManager = null;
    $this.$webAudioAPIManager = new cgxgbtwh_HowlerAudioManager;
},
cgxgbt_DefaultTeaAudio__init_0 = () => {
    let var_0 = new cgxgbt_DefaultTeaAudio();
    cgxgbt_DefaultTeaAudio__init_(var_0);
    return var_0;
},
otjde_EventListener = $rt_classWithoutFields(0);
function cgxgbt_TeaApplication$1() {
    jl_Object.call(this);
    this.$this$07 = null;
}
let cgxgbt_TeaApplication$1__init_ = ($this, $this$0) => {
    $this.$this$07 = $this$0;
},
cgxgbt_TeaApplication$1__init_0 = var_0 => {
    let var_1 = new cgxgbt_TeaApplication$1();
    cgxgbt_TeaApplication$1__init_(var_1, var_0);
    return var_1;
},
cgxgbt_TeaApplication$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1;
    var$2 = var$1.$this$07.$appListener;
    if (var$2 !== null) {
        dcg_Main_dispose(var$2);
        var$1.$this$07.$appListener = null;
    }
};
function cgxgbt_TeaApplication$2() {
    jl_Object.call(this);
    this.$this$01 = null;
}
let cgxgbt_TeaApplication$2__init_ = ($this, $this$0) => {
    $this.$this$01 = $this$0;
},
cgxgbt_TeaApplication$2__init_0 = var_0 => {
    let var_1 = new cgxgbt_TeaApplication$2();
    cgxgbt_TeaApplication$2__init_(var_1, var_0);
    return var_1;
},
cgxgbt_TeaApplication$2_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, $$je;
    var$1 = var$1;
    var$3 = var$1.$this$01;
    if (var$3.$initState === cgxgbt_TeaApplication$AppState_APP_LOOP) {
        var$3 = $rt_str((cgxgbtdi_TeaWindow_getDocument(var$3.$window)).visibilityState);
        if (jl_String_equals(var$3, $rt_s(106))) {
            var$1 = var$1.$this$01.$lifecycleListeners;
            jl_Object_monitorEnterSync(var$1);
            a: {
                b: {
                    try {
                        var$2 = cbgu_Array_iterator(var$1);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$2 = $$je;
                        break b;

                    }
                    var$3 = var$2;
                    while (true) {
                        try {
                            if (!cbgu_Array$ArrayIterator_hasNext(var$3))
                                break;
                            (cbgu_Array$ArrayIterator_next(var$3)).$pause();
                            continue;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$2 = $$je;
                            break b;

                        }
                    }
                    try {
                        jl_Object_monitorExitSync(var$1);
                        break a;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$2 = $$je;

                    }
                }
                jl_Object_monitorExitSync(var$1);
                $rt_throw(var$2);
            }
        } else if (jl_String_equals(var$3, $rt_s(107))) {
            var$1 = var$1.$this$01.$lifecycleListeners;
            jl_Object_monitorEnterSync(var$1);
            c: {
                d: {
                    try {
                        var$2 = cbgu_Array_iterator(var$1);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$2 = $$je;
                        break d;

                    }
                    var$3 = var$2;
                    while (true) {
                        try {
                            if (!cbgu_Array$ArrayIterator_hasNext(var$3))
                                break;
                            (cbgu_Array$ArrayIterator_next(var$3)).$resume();
                            continue;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$2 = $$je;
                            break d;

                        }
                    }
                    try {
                        jl_Object_monitorExitSync(var$1);
                        break c;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$2 = $$je;

                    }
                }
                jl_Object_monitorExitSync(var$1);
                $rt_throw(var$2);
            }
        }
    }
};
function cgxgbt_TeaApplication$3() {
    jl_Object.call(this);
    this.$this$0 = null;
}
let cgxgbt_TeaApplication$3__init_ = ($this, $this$0) => {
    $this.$this$0 = $this$0;
},
cgxgbt_TeaApplication$3__init_0 = var_0 => {
    let var_1 = new cgxgbt_TeaApplication$3();
    cgxgbt_TeaApplication$3__init_(var_1, var_0);
    return var_1;
},
cgxgbt_TeaApplication$3_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4;
    var$1 = var$1;
    var$3 = cgxgbtdi_TeaWindow_getClientWidth(var$1.$this$0.$window);
    var$2 = var$1.$this$0;
    var$3 = var$3 - var$2.$config.$padHorizontal | 0;
    var$4 = cgxgbtdi_TeaWindow_getClientHeight(var$2.$window);
    var$1 = var$1.$this$0;
    var$2 = var$1.$config;
    var$4 = var$4 - var$2.$padVertical | 0;
    if (var$3 > 0 && var$4 > 0) {
        var$1 = var$1.$graphics;
        if (var$1 !== null)
            cgxgbt_TeaGraphics_setCanvasSize(var$1, var$3, var$4, var$2.$usePhysicalPixels);
    }
};
function cbgu_Pool() {
    let a = this; jl_Object.call(a);
    a.$max1 = 0;
    a.$freeObjects = null;
}
function cbgu_ReflectionPool() {
    cbgu_Pool.call(this);
    this.$constructor = null;
}
let jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
cbgu_ObjectSet = $rt_classWithoutFields(),
cbgu_ObjectSet_tableSize = ($capacity, $loadFactor) => {
    let var$3, var$4, $tableSize;
    if ($capacity < 0) {
        var$3 = new jl_IllegalArgumentException;
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_AbstractStringBuilder_append0(var$4, $rt_s(108));
        jl_RuntimeException__init_(var$3, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$4, $capacity)));
        $rt_throw(var$3);
    }
    $tableSize = cbgm_MathUtils_nextPowerOfTwo(jl_Math_max(2, jl_Math_ceil($capacity / $loadFactor) | 0));
    if ($tableSize <= 1073741824)
        return $tableSize;
    var$3 = new jl_IllegalArgumentException;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append0(var$4, $rt_s(109));
    jl_RuntimeException__init_(var$3, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$4, $capacity)));
    $rt_throw(var$3);
},
jl_Long = $rt_classWithoutFields(jl_Number),
jl_Long_TYPE = null,
jl_Long_numberOfLeadingZeros = $i => {
    let $n, var$3;
    if (Long_eq($i, Long_ZERO))
        return 64;
    $n = 0;
    var$3 = Long_shru($i, 32);
    if (Long_ne(var$3, Long_ZERO))
        $n = 32;
    else
        var$3 = $i;
    $i = Long_shru(var$3, 16);
    if (Long_eq($i, Long_ZERO))
        $i = var$3;
    else
        $n = $n | 16;
    var$3 = Long_shru($i, 8);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = $i;
    else
        $n = $n | 8;
    $i = Long_shru(var$3, 4);
    if (Long_eq($i, Long_ZERO))
        $i = var$3;
    else
        $n = $n | 4;
    var$3 = Long_shru($i, 2);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = $i;
    else
        $n = $n | 2;
    if (Long_ne(Long_shru(var$3, 1), Long_ZERO))
        $n = $n | 1;
    return (64 - $n | 0) - 1 | 0;
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
},
cgxgbtg_WebGLContextAttributesWrapper = $rt_classWithoutFields(),
cgxgbtg_WebGLContextAttributesWrapper_create$js_body$_14 = () => {
    return {  };
},
cbgg_GL20 = $rt_classWithoutFields(0);
function cgxgbt_TeaGL20() {
    let a = this; jl_Object.call(a);
    a.$gl = null;
    a.$programs = null;
    a.$shaders = null;
    a.$buffers = null;
    a.$frameBuffers = null;
    a.$renderBuffers = null;
    a.$textures = null;
    a.$uniforms = null;
    a.$currProgram = 0;
}
let cgxgbt_TeaGL20__init_ = ($this, $gl) => {
    $this.$programs = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$shaders = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$buffers = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$frameBuffers = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$renderBuffers = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$textures = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$uniforms = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$currProgram = 0;
    $this.$gl = $gl;
    $gl.pixelStorei(37441, 0);
},
cgxgbt_TeaGL20__init_0 = var_0 => {
    let var_1 = new cgxgbt_TeaGL20();
    cgxgbt_TeaGL20__init_(var_1, var_0);
    return var_1;
},
cgxgbt_TeaGL20_getUniformLocation = ($this, $location) => {
    return cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$uniforms, $this.$currProgram), $location);
},
cgxgbt_TeaGL20_glAttachShader = ($this, $program, $shader) => {
    let var$3, var$4;
    var$3 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    var$4 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$shaders, $shader);
    $this.$gl.attachShader(var$3, var$4);
},
cgxgbt_TeaGL20_glBindBuffer = ($this, $target, $buffer) => {
    let var$3, var$4;
    var$3 = $this.$gl;
    var$4 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$buffers, $buffer);
    var$3.bindBuffer($target, var$4);
},
cgxgbt_TeaGL20_glBindTexture = ($this, $target, $texture) => {
    let var$3, var$4;
    var$3 = $this.$gl;
    var$4 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$textures, $texture);
    var$3.bindTexture($target, var$4);
},
cgxgbt_TeaGL20_glBlendFuncSeparate = ($this, $srcRGB, $dstRGB, $srcAlpha, $dstAlpha) => {
    $this.$gl.blendFuncSeparate($srcRGB, $dstRGB, $srcAlpha, $dstAlpha);
},
cgxgbt_TeaGL20_glBufferData = ($this, $target, $size, $data, $usage) => {
    let $typedArray;
    if ($data === null)
        $this.$gl.bufferData($target, $size, $usage);
    else {
        $typedArray = cgxgbtdt_TypedArrays_getTypedArray($data);
        $this.$gl.bufferData($target, $typedArray, $usage);
    }
},
cgxgbt_TeaGL20_glBufferSubData = ($this, $target, $offset, $size, $data) => {
    let $typedArray;
    $typedArray = cgxgbtdt_TypedArrays_getTypedArray($data);
    $this.$gl.bufferSubData($target, $offset, $typedArray);
},
cgxgbt_TeaGL20_glClear = ($this, $mask) => {
    $this.$gl.clear($mask);
},
cgxgbt_TeaGL20_glClearColor = ($this, $red, $green, $blue, $alpha) => {
    $this.$gl.clearColor($red, $green, $blue, $alpha);
},
cgxgbt_TeaGL20_glCompileShader = ($this, $shader) => {
    let var$2;
    var$2 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$shaders, $shader);
    $this.$gl.compileShader(var$2);
},
cgxgbt_TeaGL20_glCreateProgram = $this => {
    let $program;
    $program = $this.$gl.createProgram();
    return cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4($this.$programs, $program);
},
cgxgbt_TeaGL20_glCreateShader = ($this, $type) => {
    let $shader;
    $shader = $this.$gl.createShader($type);
    return cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4($this.$shaders, $shader);
},
cgxgbt_TeaGL20_glDeleteBuffer = ($this, $id) => {
    let var$2;
    var$2 = cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5($this.$buffers, $id);
    $this.$gl.deleteBuffer(var$2);
},
cgxgbt_TeaGL20_glDeleteProgram = ($this, $program) => {
    let var$2;
    var$2 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5($this.$programs, $program);
    cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5($this.$uniforms, $program);
    $this.$gl.deleteProgram(var$2);
},
cgxgbt_TeaGL20_glDeleteShader = ($this, $shader) => {
    let var$2;
    var$2 = cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5($this.$shaders, $shader);
    $this.$gl.deleteShader(var$2);
},
cgxgbt_TeaGL20_glDeleteTexture = ($this, $id) => {
    let var$2;
    var$2 = cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5($this.$textures, $id);
    $this.$gl.deleteTexture(var$2);
},
cgxgbt_TeaGL20_glDepthMask = ($this, $flag) => {
    $this.$gl.depthMask(!!$flag);
},
cgxgbt_TeaGL20_glDisable = ($this, $cap) => {
    $this.$gl.disable($cap);
},
cgxgbt_TeaGL20_glDisableVertexAttribArray = ($this, $index) => {
    $this.$gl.disableVertexAttribArray($index);
},
cgxgbt_TeaGL20_glDrawArrays = ($this, $mode, $first, $count) => {
    $this.$gl.drawArrays($mode, $first, $count);
},
cgxgbt_TeaGL20_glDrawElements = ($this, $mode, $count, $type, $indices) => {
    let var$5, var$6;
    var$5 = $this.$gl;
    var$6 = $indices.$position0;
    var$5.drawElements($mode, $count, $type, var$6);
},
cgxgbt_TeaGL20_glDrawElements0 = ($this, $mode, $count, $type, $indices) => {
    $this.$gl.drawElements($mode, $count, $type, $indices);
},
cgxgbt_TeaGL20_glEnable = ($this, $cap) => {
    $this.$gl.enable($cap);
},
cgxgbt_TeaGL20_glEnableVertexAttribArray = ($this, $index) => {
    $this.$gl.enableVertexAttribArray($index);
},
cgxgbt_TeaGL20_glGenBuffer = $this => {
    let $buffer;
    $buffer = $this.$gl.createBuffer();
    return cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4($this.$buffers, $buffer);
},
cgxgbt_TeaGL20_glGenerateMipmap = ($this, $target) => {
    $this.$gl.generateMipmap($target);
},
cgxgbt_TeaGL20_glGenTexture = $this => {
    let $texture;
    $texture = $this.$gl.createTexture();
    return cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4($this.$textures, $texture);
},
cgxgbt_TeaGL20_glGetActiveAttrib = ($this, $program, $index, $size, $type) => {
    let $activeUniform, var$6;
    $activeUniform = $this.$gl;
    var$6 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    $activeUniform = $activeUniform.getActiveAttrib(var$6, $index);
    $index = $activeUniform.size;
    jn_IntBufferImpl_put($size, 0, $index);
    $index = $activeUniform.type;
    jn_IntBufferImpl_put($type, 0, $index);
    return $rt_str($activeUniform.name);
},
cgxgbt_TeaGL20_glGetActiveUniform = ($this, $program, $index, $size, $type) => {
    let $activeUniform, var$6;
    $activeUniform = $this.$gl;
    var$6 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    $activeUniform = $activeUniform.getActiveUniform(var$6, $index);
    $index = $activeUniform.size;
    jn_IntBufferImpl_put($size, 0, $index);
    $index = $activeUniform.type;
    jn_IntBufferImpl_put($type, 0, $index);
    return $rt_str($activeUniform.name);
},
cgxgbt_TeaGL20_glGetAttribLocation = ($this, $program, $name) => {
    let var$3;
    var$3 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    return $this.$gl.getAttribLocation(var$3, $rt_ustr($name));
},
cgxgbt_TeaGL20_glGetFloatv = ($this, $pname, $params) => {
    let var$3;
    if ($pname != 2931 && $pname != 2849 && $pname != 32824 && $pname != 10752 && $pname != 32938) {
        $params = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_($params, $rt_s(110));
        $rt_throw($params);
    }
    var$3 = $this.$gl.getParameter($pname);
    jn_FloatBufferImpl_put($params, 0, var$3);
},
cgxgbt_TeaGL20_glGetProgramInfoLog = ($this, $program) => {
    return $rt_str($this.$gl.getProgramInfoLog(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program)));
},
cgxgbt_TeaGL20_glGetProgramiv = ($this, $program, $pname, $params) => {
    if ($pname != 35712 && $pname != 35714 && $pname != 35715) {
        $program = $this.$gl.getProgramParameter(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program), $pname);
        jn_IntBufferImpl_put($params, 0, $program);
    } else {
        $pname = !($this.$gl.getProgramParameter(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program), $pname) ? 1 : 0) ? 0 : 1;
        jn_IntBufferImpl_put($params, 0, $pname);
    }
},
cgxgbt_TeaGL20_glGetShaderInfoLog = ($this, $shader) => {
    return $rt_str($this.$gl.getShaderInfoLog(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$shaders, $shader)));
},
cgxgbt_TeaGL20_glGetShaderiv = ($this, $shader, $pname, $params) => {
    let $result;
    if ($pname != 35713 && $pname != 35712) {
        $result = $this.$gl.getShaderParameter(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$shaders, $shader), $pname);
        jn_IntBufferImpl_put($params, 0, $result);
    } else {
        $pname = !($this.$gl.getShaderParameter(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$shaders, $shader), $pname) ? 1 : 0) ? 0 : 1;
        jn_IntBufferImpl_put($params, 0, $pname);
    }
},
cgxgbt_TeaGL20_glGetString = ($this, $name) => {
    return $rt_str($this.$gl.getParameter($name));
},
cgxgbt_TeaGL20_glGetUniformLocation = ($this, $program, $name) => {
    let $location;
    $location = $this.$gl.getUniformLocation(cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program), $rt_ustr($name));
    if ($location === null)
        return (-1);
    $name = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$uniforms, $program);
    if ($name === null) {
        $name = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
        $this.$uniforms[$program] = $name;
    }
    return cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4($name, $location);
},
cgxgbt_TeaGL20_glLinkProgram = ($this, $program) => {
    let var$2, var$3;
    var$2 = $this.$gl;
    var$3 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    var$2.linkProgram(var$3);
},
cgxgbt_TeaGL20_glPixelStorei = ($this, $pname, $param) => {
    $this.$gl.pixelStorei($pname, $param);
},
cgxgbt_TeaGL20_glShaderSource = ($this, $shader, $source) => {
    let var$3, var$4;
    var$3 = $this.$gl;
    var$4 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$shaders, $shader);
    var$3.shaderSource(var$4, $rt_ustr($source));
},
cgxgbt_TeaGL20_glTexImage2D = ($this, $target, $level, $internalformat, $width, $height, $border, $format, $type, $pixels) => {
    let $arrayBuffer;
    if ($pixels === null) {
        $this.$gl.texImage2D($target, $level, $internalformat, $width, $height, $border, $format, $type, null);
        return;
    }
    $arrayBuffer = $type == 5121 ? cgxgbtdt_TypedArrays_getUint8Array($pixels) : $type != 5123 && $type != 33635 && $type != 32819 ? ($type != 5126 ? cgxgbtdt_TypedArrays_getTypedArray($pixels) : cgxgbtdt_TypedArrays_getFloat32Array($pixels)) : cgxgbtdt_TypedArrays_getUint16Array($pixels);
    $this.$gl.texImage2D($target, $level, $internalformat, $width, $height, $border, $format, $type, $arrayBuffer);
},
cgxgbt_TeaGL20_glTexParameterf = ($this, $target, $pname, $param) => {
    $this.$gl.texParameterf($target, $pname, $param);
},
cgxgbt_TeaGL20_glTexParameteri = ($this, $target, $pname, $param) => {
    let var$4, var$5;
    var$4 = $this.$gl;
    var$5 = $param;
    var$4.texParameterf($target, $pname, var$5);
},
cgxgbt_TeaGL20_glUniform1i = ($this, $location, $x) => {
    let $loc;
    $loc = cgxgbt_TeaGL20_getUniformLocation($this, $location);
    $this.$gl.uniform1i($loc, $x);
},
cgxgbt_TeaGL20_glUniformMatrix4fv = ($this, $location, $count, $transpose, $value, $offset) => {
    let $loc;
    $loc = cgxgbt_TeaGL20_getUniformLocation($this, $location);
    $this.$gl.uniformMatrix4fv($loc, !!$transpose, $value.data);
},
cgxgbt_TeaGL20_glUseProgram = ($this, $program) => {
    let var$2, var$3;
    $this.$currProgram = $program;
    var$2 = $this.$gl;
    var$3 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$programs, $program);
    var$2.useProgram(var$3);
},
cgxgbt_TeaGL20_glVertexAttribPointer = ($this, $indx, $size, $type, $normalized, $stride, $ptr_0) => {
    $this.$gl.vertexAttribPointer($indx, $size, $type, !!$normalized, $stride, $ptr_0);
},
cgxgbt_TeaGL20_glViewport = ($this, $x, $y, $width, $height) => {
    $this.$gl.viewport($x, $y, $width, $height);
};
let cbgg_GL30 = $rt_classWithoutFields(0);
function cgxgbt_TeaGL30() {
    let a = this; cgxgbt_TeaGL20.call(a);
    a.$gl0 = null;
    a.$queries = null;
    a.$samplers = null;
    a.$feedbacks = null;
    a.$vertexArrays = null;
}
let cgxgbt_TeaGL30__init_ = ($this, $gl) => {
    cgxgbt_TeaGL20__init_($this, $gl);
    $this.$queries = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$samplers = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$feedbacks = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$vertexArrays = cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1();
    $this.$gl0 = $gl;
},
cgxgbt_TeaGL30__init_0 = var_0 => {
    let var_1 = new cgxgbt_TeaGL30();
    cgxgbt_TeaGL30__init_(var_1, var_0);
    return var_1;
},
cgxgbt_TeaGL30_glBindVertexArray = ($this, $array) => {
    let var$2, var$3;
    var$2 = $this.$gl0;
    var$3 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$vertexArrays, $array);
    var$2.bindVertexArray(var$3);
},
cgxgbt_TeaGL30_glDeleteVertexArrays = ($this, $n, $ids) => {
    let $startPosition, $i, var$5, $id, var$7;
    $startPosition = $ids.$position0;
    $i = 0;
    var$5 = $ids;
    while ($i < $n) {
        $id = jn_IntBufferImpl_get0(var$5);
        var$7 = cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2($this.$vertexArrays, $id);
        cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5($this.$vertexArrays, $id);
        $this.$gl0.deleteVertexArray(var$7);
        $i = $i + 1 | 0;
    }
    jn_Buffer_position($ids, $startPosition);
},
cgxgbt_TeaGL30_glDrawArraysInstanced = ($this, $mode, $first, $count, $instanceCount) => {
    $this.$gl0.drawArraysInstanced($mode, $first, $count, $instanceCount);
},
cgxgbt_TeaGL30_glDrawElementsInstanced = ($this, $mode, $count, $type, $indicesOffset, $instanceCount) => {
    $this.$gl0.drawElementsInstanced($mode, $count, $type, $indicesOffset, $instanceCount);
},
cgxgbt_TeaGL30_glGenVertexArrays = ($this, $n, $ids) => {
    let $i, var$4, $vArray;
    $i = 0;
    var$4 = $ids;
    while ($i < $n) {
        $vArray = $this.$gl0.createVertexArray();
        jn_IntBufferImpl_put(var$4, $i, cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4($this.$vertexArrays, $vArray));
        $i = $i + 1 | 0;
    }
},
cgxgbt_TeaGL30_glGetFloatv = ($this, $pname, $params) => {
    let var$3;
    if ($pname != 34045)
        cgxgbt_TeaGL20_glGetFloatv($this, $pname, $params);
    else {
        var$3 = $this.$gl0.getParameter($pname);
        jn_FloatBufferImpl_put($params, 0, var$3);
    }
},
cgxgbt_TeaGL30Debug = $rt_classWithoutFields(cgxgbt_TeaGL30),
cgxgbt_TeaGL30Debug_checkError = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = $this.$gl0.getError();
    if (!var$1)
        return;
    var$2 = new cbgu_GdxRuntimeException;
    var$3 = jl_Integer_toHexString(var$1);
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(111)), var$1), $rt_s(112)), var$3);
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$2);
},
cgxgbt_TeaGL30Debug_glBindVertexArray = ($this, $array) => {
    cgxgbt_TeaGL30_glBindVertexArray($this, $array);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDeleteVertexArrays = ($this, $n, $ids) => {
    cgxgbt_TeaGL30_glDeleteVertexArrays($this, $n, $ids);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDrawArraysInstanced = ($this, $mode, $first, $count, $instanceCount) => {
    cgxgbt_TeaGL30_glDrawArraysInstanced($this, $mode, $first, $count, $instanceCount);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDrawElementsInstanced = ($this, $mode, $count, $type, $indicesOffset, $instanceCount) => {
    cgxgbt_TeaGL30_glDrawElementsInstanced($this, $mode, $count, $type, $indicesOffset, $instanceCount);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGenVertexArrays = ($this, $n, $ids) => {
    cgxgbt_TeaGL30_glGenVertexArrays($this, $n, $ids);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glBindTexture = ($this, $target, $texture) => {
    cgxgbt_TeaGL20_glBindTexture($this, $target, $texture);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glClear = ($this, $mask) => {
    cgxgbt_TeaGL20_glClear($this, $mask);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glClearColor = ($this, $red, $green, $blue, $alpha) => {
    cgxgbt_TeaGL20_glClearColor($this, $red, $green, $blue, $alpha);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDepthMask = ($this, $flag) => {
    cgxgbt_TeaGL20_glDepthMask($this, $flag);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDisable = ($this, $cap) => {
    cgxgbt_TeaGL20_glDisable($this, $cap);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDrawArrays = ($this, $mode, $first, $count) => {
    cgxgbt_TeaGL20_glDrawArrays($this, $mode, $first, $count);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDrawElements0 = ($this, $mode, $count, $type, $indices) => {
    cgxgbt_TeaGL20_glDrawElements($this, $mode, $count, $type, $indices);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glEnable = ($this, $cap) => {
    cgxgbt_TeaGL20_glEnable($this, $cap);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGetString = ($this, $name) => {
    return cgxgbt_TeaGL20_glGetString($this, $name);
},
cgxgbt_TeaGL30Debug_glPixelStorei = ($this, $pname, $param) => {
    cgxgbt_TeaGL20_glPixelStorei($this, $pname, $param);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glTexImage2D = ($this, $target, $level, $internalformat, $width, $height, $border, $format, $type, $pixels) => {
    cgxgbt_TeaGL20_glTexImage2D($this, $target, $level, $internalformat, $width, $height, $border, $format, $type, $pixels);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glTexParameterf = ($this, $target, $pname, $param) => {
    cgxgbt_TeaGL20_glTexParameterf($this, $target, $pname, $param);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glViewport = ($this, $x, $y, $width, $height) => {
    cgxgbt_TeaGL20_glViewport($this, $x, $y, $width, $height);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glAttachShader = ($this, $program, $shader) => {
    cgxgbt_TeaGL20_glAttachShader($this, $program, $shader);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glBindBuffer = ($this, $target, $buffer) => {
    cgxgbt_TeaGL20_glBindBuffer($this, $target, $buffer);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glBlendFuncSeparate = ($this, $srcRGB, $dstRGB, $srcAlpha, $dstAlpha) => {
    cgxgbt_TeaGL20_glBlendFuncSeparate($this, $srcRGB, $dstRGB, $srcAlpha, $dstAlpha);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glBufferData = ($this, $target, $size, $data, $usage) => {
    cgxgbt_TeaGL20_glBufferData($this, $target, $size, $data, $usage);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glBufferSubData = ($this, $target, $offset, $size, $data) => {
    cgxgbt_TeaGL20_glBufferSubData($this, $target, $offset, $size, $data);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glCompileShader = ($this, $shader) => {
    cgxgbt_TeaGL20_glCompileShader($this, $shader);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glCreateProgram = $this => {
    let $program;
    $program = cgxgbt_TeaGL20_glCreateProgram($this);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $program;
},
cgxgbt_TeaGL30Debug_glCreateShader = ($this, $type) => {
    let $shader;
    $shader = cgxgbt_TeaGL20_glCreateShader($this, $type);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $shader;
},
cgxgbt_TeaGL30Debug_glDeleteProgram = ($this, $program) => {
    cgxgbt_TeaGL20_glDeleteProgram($this, $program);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDeleteShader = ($this, $shader) => {
    cgxgbt_TeaGL20_glDeleteShader($this, $shader);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDisableVertexAttribArray = ($this, $index) => {
    cgxgbt_TeaGL20_glDisableVertexAttribArray($this, $index);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glDrawElements = ($this, $mode, $count, $type, $indices) => {
    cgxgbt_TeaGL20_glDrawElements0($this, $mode, $count, $type, $indices);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glEnableVertexAttribArray = ($this, $index) => {
    cgxgbt_TeaGL20_glEnableVertexAttribArray($this, $index);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGenerateMipmap = ($this, $target) => {
    cgxgbt_TeaGL20_glGenerateMipmap($this, $target);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGetActiveAttrib = ($this, $program, $index, $size, $type) => {
    let $attrib;
    $attrib = cgxgbt_TeaGL20_glGetActiveAttrib($this, $program, $index, $size, $type);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $attrib;
},
cgxgbt_TeaGL30Debug_glGetActiveUniform = ($this, $program, $index, $size, $type) => {
    let $uniform;
    $uniform = cgxgbt_TeaGL20_glGetActiveUniform($this, $program, $index, $size, $type);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $uniform;
},
cgxgbt_TeaGL30Debug_glGetAttribLocation = ($this, $program, $name) => {
    let $loc;
    $loc = cgxgbt_TeaGL20_glGetAttribLocation($this, $program, $name);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $loc;
},
cgxgbt_TeaGL30Debug_glGetFloatv = ($this, $pname, $params) => {
    cgxgbt_TeaGL30_glGetFloatv($this, $pname, $params);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGetProgramiv = ($this, $program, $pname, $params) => {
    cgxgbt_TeaGL20_glGetProgramiv($this, $program, $pname, $params);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGetProgramInfoLog = ($this, $program) => {
    let $info;
    $info = cgxgbt_TeaGL20_glGetProgramInfoLog($this, $program);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $info;
},
cgxgbt_TeaGL30Debug_glGetShaderiv = ($this, $shader, $pname, $params) => {
    cgxgbt_TeaGL20_glGetShaderiv($this, $shader, $pname, $params);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glGetShaderInfoLog = ($this, $shader) => {
    let $info;
    $info = cgxgbt_TeaGL20_glGetShaderInfoLog($this, $shader);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $info;
};
let cgxgbt_TeaGL30Debug_glGetUniformLocation = ($this, $program, $name) => {
    let $loc;
    $loc = cgxgbt_TeaGL20_glGetUniformLocation($this, $program, $name);
    cgxgbt_TeaGL30Debug_checkError($this);
    return $loc;
},
cgxgbt_TeaGL30Debug_glLinkProgram = ($this, $program) => {
    cgxgbt_TeaGL20_glLinkProgram($this, $program);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glShaderSource = ($this, $shader, $source) => {
    cgxgbt_TeaGL20_glShaderSource($this, $shader, $source);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glTexParameteri = ($this, $target, $pname, $param) => {
    cgxgbt_TeaGL20_glTexParameteri($this, $target, $pname, $param);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glUniform1i = ($this, $location, $x) => {
    cgxgbt_TeaGL20_glUniform1i($this, $location, $x);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glUseProgram = ($this, $program) => {
    cgxgbt_TeaGL20_glUseProgram($this, $program);
    cgxgbt_TeaGL30Debug_checkError($this);
},
cgxgbt_TeaGL30Debug_glVertexAttribPointer = ($this, $indx, $size, $type, $normalized, $stride, $ptr_0) => {
    cgxgbt_TeaGL20_glVertexAttribPointer($this, $indx, $size, $type, $normalized, $stride, $ptr_0);
    cgxgbt_TeaGL30Debug_checkError($this);
};
function cbggg_GLVersion() {
    let a = this; jl_Object.call(a);
    a.$majorVersion = 0;
    a.$minorVersion = 0;
    a.$releaseVersion = 0;
    a.$versionString = null;
    a.$vendorString = null;
    a.$rendererString = null;
    a.$type1 = null;
    a.$TAG = $rt_s(83);
}
let cbggg_GLVersion_extractVersion = ($this, $patternString, $versionString) => {
    let $matcher, $pattern, $result, $resultSplit, $found;
    $matcher = jur_Pattern_matcher(jur_Pattern_compile($patternString), $versionString);
    if (!jur_Matcher_find($matcher)) {
        $pattern = cbg_Gdx_app;
        $patternString = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($patternString);
        jl_AbstractStringBuilder_append0($patternString, $rt_s(113));
        jl_AbstractStringBuilder_append0($patternString, $versionString);
        $result = jl_AbstractStringBuilder_toString($patternString);
        if ($pattern.$logLevel >= 2) {
            $patternString = jl_System_out();
            $versionString = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($versionString);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append($versionString, $rt_s(83)), $rt_s(16)), $result);
            $versionString = jl_AbstractStringBuilder_toString($versionString);
            otcic_JsConsolePrintStream_println($patternString, $versionString);
        }
        $this.$majorVersion = 2;
        $this.$minorVersion = 0;
        $this.$releaseVersion = 0;
    } else {
        $resultSplit = (jl_String_split(jur_Matcher_group($matcher, 1), $rt_s(114))).data;
        $this.$majorVersion = cbggg_GLVersion_parseInt($this, $resultSplit[0], 2);
        $found = $resultSplit.length;
        $this.$minorVersion = $found < 2 ? 0 : cbggg_GLVersion_parseInt($this, $resultSplit[1], 0);
        $this.$releaseVersion = $found < 3 ? 0 : cbggg_GLVersion_parseInt($this, $resultSplit[2], 0);
    }
},
cbggg_GLVersion_parseInt = ($this, $v, $defaultValue) => {
    let var$3, var$4, var$5, var$6, var$7, $$je;
    a: {
        try {
            var$3 = jl_Integer_parseInt0($v);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_NumberFormatException) {
                break a;
            } else {
                throw $$e;
            }
        }
        return var$3;
    }
    var$4 = cbg_Gdx_app;
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    jl_AbstractStringBuilder_append0(var$5, $rt_s(115));
    jl_AbstractStringBuilder_append0(var$5, $v);
    jl_AbstractStringBuilder_append0(var$5, $rt_s(116));
    var$6 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$5, $defaultValue));
    if (var$4.$logLevel >= 1) {
        $v = jl_System_err();
        var$5 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$5);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(117)), $rt_s(16)), var$6);
        var$7 = jl_AbstractStringBuilder_toString(var$5);
        otcic_JsConsolePrintStream_println($v, var$7);
    }
    return $defaultValue;
},
cbg_Application$ApplicationType = $rt_classWithoutFields(jl_Enum),
cbg_Application$ApplicationType_Android = null,
cbg_Application$ApplicationType_Desktop = null,
cbg_Application$ApplicationType_HeadlessDesktop = null,
cbg_Application$ApplicationType_Applet = null,
cbg_Application$ApplicationType_WebGL = null,
cbg_Application$ApplicationType_iOS = null,
cbg_Application$ApplicationType_$VALUES = null,
cbg_Application$ApplicationType__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbg_Application$ApplicationType;
    jl_Enum__init_(var$1, $rt_s(118), 0);
    cbg_Application$ApplicationType_Android = var$1;
    var$1 = new cbg_Application$ApplicationType;
    jl_Enum__init_(var$1, $rt_s(119), 1);
    cbg_Application$ApplicationType_Desktop = var$1;
    var$1 = new cbg_Application$ApplicationType;
    jl_Enum__init_(var$1, $rt_s(120), 2);
    cbg_Application$ApplicationType_HeadlessDesktop = var$1;
    var$1 = new cbg_Application$ApplicationType;
    jl_Enum__init_(var$1, $rt_s(121), 3);
    cbg_Application$ApplicationType_Applet = var$1;
    var$1 = new cbg_Application$ApplicationType;
    jl_Enum__init_(var$1, $rt_s(122), 4);
    cbg_Application$ApplicationType_WebGL = var$1;
    var$1 = new cbg_Application$ApplicationType;
    jl_Enum__init_(var$1, $rt_s(123), 5);
    cbg_Application$ApplicationType_iOS = var$1;
    var$2 = $rt_createArray(cbg_Application$ApplicationType, 6);
    var$3 = var$2.data;
    var$3[0] = cbg_Application$ApplicationType_Android;
    var$3[1] = cbg_Application$ApplicationType_Desktop;
    var$3[2] = cbg_Application$ApplicationType_HeadlessDesktop;
    var$3[3] = cbg_Application$ApplicationType_Applet;
    var$3[4] = cbg_Application$ApplicationType_WebGL;
    var$3[5] = var$1;
    cbg_Application$ApplicationType_$VALUES = var$2;
},
cgxgbt_TeaGraphics$FullscreenChanged = $rt_classWithoutFields(0);
function cgxgbt_TeaGraphics$1() {
    jl_Object.call(this);
    this.$this$021 = null;
}
let cgxgbt_TeaGraphics$1_fullscreenChanged$exported$0 = var$1 => {
    var$1;
},
cgxgbt_TeaGL20Debug = $rt_classWithoutFields(cgxgbt_TeaGL20),
cgxgbt_TeaGL20Debug_checkError = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = $this.$gl.getError();
    if (!var$1)
        return;
    var$2 = new cbgu_GdxRuntimeException;
    var$3 = jl_Integer_toHexString(var$1);
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(111)), var$1), $rt_s(112)), var$3);
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$2);
},
cgxgbt_TeaGL20Debug_glBindTexture = ($this, $target, $texture) => {
    cgxgbt_TeaGL20_glBindTexture($this, $target, $texture);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glClear = ($this, $mask) => {
    cgxgbt_TeaGL20_glClear($this, $mask);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glClearColor = ($this, $red, $green, $blue, $alpha) => {
    cgxgbt_TeaGL20_glClearColor($this, $red, $green, $blue, $alpha);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDepthMask = ($this, $flag) => {
    cgxgbt_TeaGL20_glDepthMask($this, $flag);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDisable = ($this, $cap) => {
    cgxgbt_TeaGL20_glDisable($this, $cap);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDrawArrays = ($this, $mode, $first, $count) => {
    cgxgbt_TeaGL20_glDrawArrays($this, $mode, $first, $count);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDrawElements0 = ($this, $mode, $count, $type, $indices) => {
    cgxgbt_TeaGL20_glDrawElements($this, $mode, $count, $type, $indices);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glEnable = ($this, $cap) => {
    cgxgbt_TeaGL20_glEnable($this, $cap);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glGetString = ($this, $name) => {
    return cgxgbt_TeaGL20_glGetString($this, $name);
},
cgxgbt_TeaGL20Debug_glPixelStorei = ($this, $pname, $param) => {
    cgxgbt_TeaGL20_glPixelStorei($this, $pname, $param);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glTexImage2D = ($this, $target, $level, $internalformat, $width, $height, $border, $format, $type, $pixels) => {
    cgxgbt_TeaGL20_glTexImage2D($this, $target, $level, $internalformat, $width, $height, $border, $format, $type, $pixels);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glTexParameterf = ($this, $target, $pname, $param) => {
    cgxgbt_TeaGL20_glTexParameterf($this, $target, $pname, $param);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glViewport = ($this, $x, $y, $width, $height) => {
    cgxgbt_TeaGL20_glViewport($this, $x, $y, $width, $height);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glAttachShader = ($this, $program, $shader) => {
    cgxgbt_TeaGL20_glAttachShader($this, $program, $shader);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glBindBuffer = ($this, $target, $buffer) => {
    cgxgbt_TeaGL20_glBindBuffer($this, $target, $buffer);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glBlendFuncSeparate = ($this, $srcRGB, $dstRGB, $srcAlpha, $dstAlpha) => {
    cgxgbt_TeaGL20_glBlendFuncSeparate($this, $srcRGB, $dstRGB, $srcAlpha, $dstAlpha);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glBufferData = ($this, $target, $size, $data, $usage) => {
    cgxgbt_TeaGL20_glBufferData($this, $target, $size, $data, $usage);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glBufferSubData = ($this, $target, $offset, $size, $data) => {
    cgxgbt_TeaGL20_glBufferSubData($this, $target, $offset, $size, $data);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glCompileShader = ($this, $shader) => {
    cgxgbt_TeaGL20_glCompileShader($this, $shader);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glCreateProgram = $this => {
    let $program;
    $program = cgxgbt_TeaGL20_glCreateProgram($this);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $program;
},
cgxgbt_TeaGL20Debug_glCreateShader = ($this, $type) => {
    let $shader;
    $shader = cgxgbt_TeaGL20_glCreateShader($this, $type);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $shader;
},
cgxgbt_TeaGL20Debug_glDeleteProgram = ($this, $program) => {
    cgxgbt_TeaGL20_glDeleteProgram($this, $program);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDeleteShader = ($this, $shader) => {
    cgxgbt_TeaGL20_glDeleteShader($this, $shader);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDisableVertexAttribArray = ($this, $index) => {
    cgxgbt_TeaGL20_glDisableVertexAttribArray($this, $index);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glDrawElements = ($this, $mode, $count, $type, $indices) => {
    cgxgbt_TeaGL20_glDrawElements0($this, $mode, $count, $type, $indices);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glEnableVertexAttribArray = ($this, $index) => {
    cgxgbt_TeaGL20_glEnableVertexAttribArray($this, $index);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glGenerateMipmap = ($this, $target) => {
    cgxgbt_TeaGL20_glGenerateMipmap($this, $target);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glGetActiveAttrib = ($this, $program, $index, $size, $type) => {
    let $attrib;
    $attrib = cgxgbt_TeaGL20_glGetActiveAttrib($this, $program, $index, $size, $type);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $attrib;
},
cgxgbt_TeaGL20Debug_glGetActiveUniform = ($this, $program, $index, $size, $type) => {
    let $uniform;
    $uniform = cgxgbt_TeaGL20_glGetActiveUniform($this, $program, $index, $size, $type);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $uniform;
},
cgxgbt_TeaGL20Debug_glGetAttribLocation = ($this, $program, $name) => {
    let $loc;
    $loc = cgxgbt_TeaGL20_glGetAttribLocation($this, $program, $name);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $loc;
},
cgxgbt_TeaGL20Debug_glGetFloatv = ($this, $pname, $params) => {
    cgxgbt_TeaGL20_glGetFloatv($this, $pname, $params);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glGetProgramiv = ($this, $program, $pname, $params) => {
    cgxgbt_TeaGL20_glGetProgramiv($this, $program, $pname, $params);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glGetProgramInfoLog = ($this, $program) => {
    let $info;
    $info = cgxgbt_TeaGL20_glGetProgramInfoLog($this, $program);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $info;
},
cgxgbt_TeaGL20Debug_glGetShaderiv = ($this, $shader, $pname, $params) => {
    cgxgbt_TeaGL20_glGetShaderiv($this, $shader, $pname, $params);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glGetShaderInfoLog = ($this, $shader) => {
    let $info;
    $info = cgxgbt_TeaGL20_glGetShaderInfoLog($this, $shader);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $info;
},
cgxgbt_TeaGL20Debug_glGetUniformLocation = ($this, $program, $name) => {
    let $loc;
    $loc = cgxgbt_TeaGL20_glGetUniformLocation($this, $program, $name);
    cgxgbt_TeaGL20Debug_checkError($this);
    return $loc;
},
cgxgbt_TeaGL20Debug_glLinkProgram = ($this, $program) => {
    cgxgbt_TeaGL20_glLinkProgram($this, $program);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glShaderSource = ($this, $shader, $source) => {
    cgxgbt_TeaGL20_glShaderSource($this, $shader, $source);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glTexParameteri = ($this, $target, $pname, $param) => {
    cgxgbt_TeaGL20_glTexParameteri($this, $target, $pname, $param);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glUniform1i = ($this, $location, $x) => {
    cgxgbt_TeaGL20_glUniform1i($this, $location, $x);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glUseProgram = ($this, $program) => {
    cgxgbt_TeaGL20_glUseProgram($this, $program);
    cgxgbt_TeaGL20Debug_checkError($this);
},
cgxgbt_TeaGL20Debug_glVertexAttribPointer = ($this, $indx, $size, $type, $normalized, $stride, $ptr_0) => {
    cgxgbt_TeaGL20_glVertexAttribPointer($this, $indx, $size, $type, $normalized, $stride, $ptr_0);
    cgxgbt_TeaGL20Debug_checkError($this);
},
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection);
function ju_HashSet() {
    ju_AbstractSet.call(this);
    this.$backingMap = null;
}
function cbgu_IntMap() {
    let a = this; jl_Object.call(a);
    a.$size4 = 0;
    a.$keyTable0 = null;
    a.$valueTable0 = null;
    a.$zeroValue = null;
    a.$hasZeroValue = 0;
    a.$loadFactor0 = 0.0;
    a.$threshold0 = 0;
    a.$shift0 = 0;
    a.$mask1 = 0;
}
let cbgu_IntMap_place = ($this, $item) => {
    return Long_lo(Long_shru(Long_mul(Long_fromInt($item), Long_create(2135587861, 2654435769)), $this.$shift0));
},
cbgu_IntMap_locateKey = ($this, $key) => {
    let $keyTable, $i, $other;
    $keyTable = $this.$keyTable0;
    $i = cbgu_IntMap_place($this, $key);
    while (true) {
        $other = $keyTable.data[$i];
        if (!$other)
            return  -($i + 1 | 0) | 0;
        if ($other == $key)
            break;
        $i = ($i + 1 | 0) & $this.$mask1;
    }
    return $i;
},
cbgu_IntMap_put = ($this, $key, $value) => {
    let $oldValue, $i, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    if (!$key) {
        $oldValue = $this.$zeroValue;
        $this.$zeroValue = $value;
        if (!$this.$hasZeroValue) {
            $this.$hasZeroValue = 1;
            $this.$size4 = $this.$size4 + 1 | 0;
        }
        return $oldValue;
    }
    $i = cbgu_IntMap_locateKey($this, $key);
    if ($i >= 0) {
        var$5 = $this.$valueTable0.data;
        $oldValue = var$5[$i];
        var$5[$i] = $value;
        return $oldValue;
    }
    $i =  -($i + 1 | 0) | 0;
    var$5 = $this.$keyTable0.data;
    var$5[$i] = $key;
    $this.$valueTable0.data[$i] = $value;
    $key = $this.$size4 + 1 | 0;
    $this.$size4 = $key;
    if ($key >= $this.$threshold0)
        a: {
            $key = var$5.length;
            $i = $key << 1;
            $this.$threshold0 = $i * $this.$loadFactor0 | 0;
            var$6 = $i - 1 | 0;
            $this.$mask1 = var$6;
            $this.$shift0 = jl_Long_numberOfLeadingZeros(Long_fromInt(var$6));
            var$5 = $this.$keyTable0;
            var$7 = $this.$valueTable0;
            $this.$keyTable0 = $rt_createIntArray($i);
            $this.$valueTable0 = $rt_createArray(jl_Object, $i);
            if ($this.$size4 > 0) {
                var$6 = 0;
                while (true) {
                    if (var$6 >= $key)
                        break a;
                    var$8 = var$5.data[var$6];
                    if (var$8) {
                        $value = var$7.data[var$6];
                        var$9 = $this.$keyTable0;
                        var$10 = cbgu_IntMap_place($this, var$8);
                        while (true) {
                            var$11 = var$9.data;
                            if (!var$11[var$10])
                                break;
                            var$10 = (var$10 + 1 | 0) & $this.$mask1;
                        }
                        var$11[var$10] = var$8;
                        $this.$valueTable0.data[var$10] = $value;
                    }
                    var$6 = var$6 + 1 | 0;
                }
            }
        }
    return null;
},
cbgu_IntMap_get = ($this, $key) => {
    let $i;
    if (!$key)
        return !$this.$hasZeroValue ? null : $this.$zeroValue;
    $i = cbgu_IntMap_locateKey($this, $key);
    return $i < 0 ? null : $this.$valueTable0.data[$i];
},
cbgu_IntMap_remove = ($this, $key) => {
    let $oldValue, $i, $keyTable, $valueTable, $oldValue_0, $mask, $next, var$9, $placement;
    if (!$key) {
        if (!$this.$hasZeroValue)
            return null;
        $this.$hasZeroValue = 0;
        $oldValue = $this.$zeroValue;
        $this.$zeroValue = null;
        $this.$size4 = $this.$size4 - 1 | 0;
        return $oldValue;
    }
    $i = cbgu_IntMap_locateKey($this, $key);
    if ($i < 0)
        return null;
    $keyTable = $this.$keyTable0;
    $valueTable = $this.$valueTable0.data;
    $oldValue_0 = $valueTable[$i];
    $mask = $this.$mask1;
    $next = ($i + 1 | 0) & $mask;
    while (true) {
        var$9 = $keyTable.data;
        $key = var$9[$next];
        if (!$key)
            break;
        $placement = cbgu_IntMap_place($this, $key);
        if ((($next - $placement | 0) & $mask) > (($i - $placement | 0) & $mask)) {
            var$9[$i] = $key;
            $valueTable[$i] = $valueTable[$next];
            $i = $next;
        }
        $next = ($next + 1 | 0) & $mask;
    }
    var$9[$i] = 0;
    $valueTable[$i] = null;
    $this.$size4 = $this.$size4 - 1 | 0;
    return $oldValue_0;
};
function cbgu_IntSet() {
    let a = this; jl_Object.call(a);
    a.$size3 = 0;
    a.$keyTable1 = null;
    a.$hasZeroValue0 = 0;
    a.$loadFactor3 = 0.0;
    a.$threshold1 = 0;
    a.$shift = 0;
    a.$mask0 = 0;
}
let cbgu_IntSet__init_0 = $this => {
    let var$1, var$2;
    $this.$loadFactor3 = 0.800000011920929;
    var$1 = cbgu_ObjectSet_tableSize(51, 0.800000011920929);
    $this.$threshold1 = var$1 * 0.800000011920929 | 0;
    var$2 = var$1 - 1 | 0;
    $this.$mask0 = var$2;
    $this.$shift = jl_Long_numberOfLeadingZeros(Long_fromInt(var$2));
    $this.$keyTable1 = $rt_createIntArray(var$1);
},
cbgu_IntSet__init_ = () => {
    let var_0 = new cbgu_IntSet();
    cbgu_IntSet__init_0(var_0);
    return var_0;
},
cbgu_IntSet_place = ($this, $item) => {
    return Long_lo(Long_shru(Long_mul(Long_fromInt($item), Long_create(2135587861, 2654435769)), $this.$shift));
},
cbgu_IntSet_locateKey = ($this, $key) => {
    let $keyTable, $i, $other;
    $keyTable = $this.$keyTable1;
    $i = cbgu_IntSet_place($this, $key);
    while (true) {
        $other = $keyTable.data[$i];
        if (!$other)
            return  -($i + 1 | 0) | 0;
        if ($other == $key)
            break;
        $i = ($i + 1 | 0) & $this.$mask0;
    }
    return $i;
},
cbgu_IntSet_add = ($this, $key) => {
    let $i, var$3, var$4, var$5, var$6, var$7;
    if (!$key) {
        if ($this.$hasZeroValue0)
            return 0;
        $this.$hasZeroValue0 = 1;
        $this.$size3 = $this.$size3 + 1 | 0;
        return 1;
    }
    $i = cbgu_IntSet_locateKey($this, $key);
    if ($i >= 0)
        return 0;
    $i =  -($i + 1 | 0) | 0;
    var$3 = $this.$keyTable1.data;
    var$3[$i] = $key;
    $key = $this.$size3 + 1 | 0;
    $this.$size3 = $key;
    if ($key >= $this.$threshold1)
        a: {
            $key = var$3.length;
            $i = $key << 1;
            $this.$threshold1 = $i * $this.$loadFactor3 | 0;
            var$4 = $i - 1 | 0;
            $this.$mask0 = var$4;
            $this.$shift = jl_Long_numberOfLeadingZeros(Long_fromInt(var$4));
            var$3 = $this.$keyTable1;
            $this.$keyTable1 = $rt_createIntArray($i);
            if ($this.$size3 > 0) {
                $i = 0;
                while (true) {
                    if ($i >= $key)
                        break a;
                    var$4 = var$3.data[$i];
                    if (var$4) {
                        var$5 = $this.$keyTable1;
                        var$6 = cbgu_IntSet_place($this, var$4);
                        while (true) {
                            var$7 = var$5.data;
                            if (!var$7[var$6])
                                break;
                            var$6 = (var$6 + 1 | 0) & $this.$mask0;
                        }
                        var$7[var$6] = var$4;
                    }
                    $i = $i + 1 | 0;
                }
            }
        }
    return 1;
},
cbgu_IntSet_remove = ($this, $key) => {
    let $i, $keyTable, $mask, $next, var$6, var$7, $placement;
    if (!$key) {
        if (!$this.$hasZeroValue0)
            return 0;
        $this.$hasZeroValue0 = 0;
        $this.$size3 = $this.$size3 - 1 | 0;
        return 1;
    }
    $i = cbgu_IntSet_locateKey($this, $key);
    if ($i < 0)
        return 0;
    $keyTable = $this.$keyTable1;
    $mask = $this.$mask0;
    $next = ($i + 1 | 0) & $mask;
    while (true) {
        var$6 = $keyTable.data;
        var$7 = var$6[$next];
        if (!var$7)
            break;
        $placement = cbgu_IntSet_place($this, var$7);
        if ((($next - $placement | 0) & $mask) > (($i - $placement | 0) & $mask)) {
            var$6[$i] = var$7;
            $i = $next;
        }
        $next = ($next + 1 | 0) & $mask;
    }
    var$6[$i] = 0;
    $this.$size3 = $this.$size3 - 1 | 0;
    return 1;
},
cgxgbtf_FileDB = $rt_classWithoutFields();
function cgxgbtf_MemoryFileStorage() {
    let a = this; cgxgbtf_FileDB.call(a);
    a.$fileMap = null;
    a.$tmpPaths = null;
    a.$debug = 0;
}
let cgxgbtf_MemoryFileStorage__init_ = $this => {
    let var$1;
    $this.$tmpPaths = cbgu_Array__init_();
    $this.$debug = 0;
    var$1 = new cbgu_OrderedMap;
    cbgu_ObjectMap__init_0(var$1);
    var$1.$keys = cbgu_Array__init_();
    $this.$fileMap = var$1;
},
cgxgbtf_MemoryFileStorage__init_0 = () => {
    let var_0 = new cgxgbtf_MemoryFileStorage();
    cgxgbtf_MemoryFileStorage__init_(var_0);
    return var_0;
},
cgxgbtf_MemoryFileStorage_read = ($this, $file) => {
    let $path, $data, $byteArray, $e, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, $$je;
    $path = cgxgbtf_MemoryFileStorage_fixPath($this, $file.$file);
    $data = cgxgbtf_MemoryFileStorage_getInternal($this, $path);
    if ($data === null)
        return null;
    $byteArray = $data.$bytes;
    a: {
        try {
            $file = ji_ByteArrayInputStream__init_0($byteArray);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_RuntimeException) {
                $e = $$je;
                break a;
            } else {
                throw $$e;
            }
        }
        return $file;
    }
    var$6 = $this.$fileMap;
    cbgu_Array_removeValue(var$6.$keys, $path, 0);
    var$7 = cbgu_ObjectMap_locateKey(var$6, $path);
    if (var$7 < 0)
        $file = null;
    else {
        $byteArray = var$6.$keyTable;
        var$8 = var$6.$valueTable.data;
        $file = var$8[var$7];
        var$9 = var$6.$mask2;
        var$10 = (var$7 + 1 | 0) & var$9;
        while (true) {
            var$11 = $byteArray.data;
            $data = var$11[var$10];
            if ($data === null)
                break;
            var$12 = cbgu_ObjectMap_place(var$6, $data);
            if (((var$10 - var$12 | 0) & var$9) > ((var$7 - var$12 | 0) & var$9)) {
                var$11[var$7] = $data;
                var$8[var$7] = var$8[var$10];
                var$7 = var$10;
            }
            var$10 = (var$10 + 1 | 0) & var$9;
        }
        var$11[var$7] = null;
        var$8[var$7] = null;
        var$6.$size5 = var$6.$size5 - 1 | 0;
    }
    var$13 = $file;
    if ($this.$debug) {
        $data = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($data);
        jl_AbstractStringBuilder_append($data, 34);
        jl_AbstractStringBuilder_append(jl_StringBuilder_append($data, $path), 34);
        var$14 = jl_AbstractStringBuilder_toString($data);
        var$6 = var$13 !== null && cgxgbtf_FileData_isDirectory(var$13) ? $rt_s(124) : $rt_s(125);
        var$15 = jl_System_out();
        $data = jl_Class_getSimpleName(jl_Object_getClass($this));
        var$7 = var$13 === null ? 0 : 1;
        $file = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($file);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append($file, $data), var$6), var$7), $rt_s(126)), var$14);
        $data = jl_AbstractStringBuilder_toString($file);
        otcic_JsConsolePrintStream_println(var$15, $data);
    }
    if (var$13 !== null)
        $this.$removeFile($path);
    $file = new cbgu_GdxRuntimeException;
    $data = jl_Class_getSimpleName(jl_Object_getClass($this));
    var$6 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$6);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$6, $data), $rt_s(127)), $path);
    jl_Throwable__init_($file, jl_AbstractStringBuilder_toString(var$6), $e);
    $rt_throw($file);
},
cgxgbtf_MemoryFileStorage_writeInternal = ($this, $file, $data, $append, $expectedLength) => {
    let $path, $oldData, var$7, var$8, $newSize, $oldBytes, $i, $j, $cur, $parentPath;
    $path = cgxgbtf_MemoryFileStorage_fixPath($this, $file.$file);
    $oldData = cbgu_ObjectMap_get($this.$fileMap, $path);
    if ($append && $oldData !== null) {
        var$7 = $data.data;
        var$8 = $oldData.$bytes.data;
        $append = var$7.length;
        $expectedLength = var$8.length;
        $newSize = $append + $expectedLength | 0;
        $data = $rt_createByteArray($newSize);
        $oldBytes = $data.data;
        $i = 0;
        while ($i < $expectedLength) {
            $oldBytes[$i] = var$8[$i];
            $i = $i + 1 | 0;
        }
        $j = 0;
        while ($expectedLength < $newSize) {
            $oldBytes[$expectedLength] = var$7[$j];
            $expectedLength = $expectedLength + 1 | 0;
            $j = $j + 1 | 0;
        }
    }
    cgxgbtf_MemoryFileStorage_putFileInternal($this, $path, $data, 1);
    $cur = cgxgbt_TeaFileHandle_parent($file);
    while (!cgxgbtf_MemoryFileStorage_isRootFolder($this, $cur)) {
        $oldData = $cur;
        $parentPath = cgxgbtf_MemoryFileStorage_fixPath($this, $oldData.$file);
        if (!cbgu_ObjectMap_containsKey($this.$fileMap, $parentPath))
            cgxgbtf_MemoryFileStorage_putFolderInternal($this, $parentPath);
        $cur = cgxgbt_TeaFileHandle_parent($oldData);
    }
},
cgxgbtf_MemoryFileStorage_mkdirs = ($this, $file) => {
    let $cur, $path, $parentPath;
    cgxgbtf_MemoryFileStorage_putFolderInternal($this, cgxgbtf_MemoryFileStorage_fixPath($this, $file.$file));
    $cur = cgxgbt_TeaFileHandle_parent($file);
    while (!cgxgbtf_MemoryFileStorage_isRootFolder($this, $cur)) {
        $path = $cur;
        $parentPath = cgxgbtf_MemoryFileStorage_fixPath($this, $path.$file);
        if (!cbgu_ObjectMap_containsKey($this.$fileMap, $parentPath))
            cgxgbtf_MemoryFileStorage_putFolderInternal($this, $parentPath);
        $cur = cgxgbt_TeaFileHandle_parent($path);
    }
},
cgxgbtf_MemoryFileStorage_exists = ($this, $file) => {
    let $path, var$3, var$4, var$5, var$6;
    $path = cgxgbtf_MemoryFileStorage_fixPath($this, $file.$file);
    if (cgxgbtf_MemoryFileStorage_isRootFolder($this, $file))
        return 1;
    $file = cbgu_ObjectMap_get($this.$fileMap, $path);
    var$3 = $file === null ? 0 : 1;
    if ($this.$debug) {
        $file = $file !== null && cgxgbtf_FileData_isDirectory($file) ? $rt_s(128) : $rt_s(129);
        var$4 = jl_System_out();
        var$5 = jl_Class_getSimpleName(jl_Object_getClass($this));
        var$6 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$6);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$5), $file), var$3), $rt_s(126)), $path);
        $file = jl_AbstractStringBuilder_toString(var$6);
        otcic_JsConsolePrintStream_println(var$4, $file);
    }
    return var$3;
},
cgxgbtf_MemoryFileStorage_length = ($this, $file) => {
    let $data;
    $data = cgxgbtf_MemoryFileStorage_getInternal($this, cgxgbtf_MemoryFileStorage_fixPath($this, $file.$file));
    if ($data !== null && !cgxgbtf_FileData_isDirectory($data))
        return Long_fromInt($data.$bytes.data.length);
    return Long_ZERO;
},
cgxgbtf_MemoryFileStorage_isRootFolder = ($this, $cur) => {
    let $path;
    $path = cgxgbtf_MemoryFileStorage_fixPath($this, $cur.$file);
    if (!jl_String_isEmpty($path) && !jl_String_equals($path, $rt_s(130)) && !jl_String_equals($path, $rt_s(75)) && !jl_String_equals($path, $rt_s(131)))
        return 0;
    return 1;
},
cgxgbtf_MemoryFileStorage_putFile = ($this, $key, $data) => {
    return;
},
cgxgbtf_MemoryFileStorage_removeFile = ($this, $key) => {
    return;
},
cgxgbtf_MemoryFileStorage_getInternal = ($this, $path) => {
    let $fileData, $type, var$4, var$5, var$6, var$7, var$8, var$9;
    $fileData = cbgu_ObjectMap_get($this.$fileMap, $path);
    if ($this.$debug) {
        $type = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($type);
        jl_AbstractStringBuilder_append($type, 34);
        jl_AbstractStringBuilder_append(jl_StringBuilder_append($type, $path), 34);
        var$4 = jl_AbstractStringBuilder_toString($type);
        $type = $fileData !== null && cgxgbtf_FileData_isDirectory($fileData) ? $rt_s(132) : $rt_s(133);
        $path = jl_System_out();
        var$5 = jl_Class_getSimpleName(jl_Object_getClass($this));
        var$6 = $fileData === null ? 0 : 1;
        if ($fileData === null)
            var$7 = 0;
        else {
            var$8 = $fileData.$bytes;
            var$7 = var$8 === null ? 0 : var$8.data.length;
        }
        var$9 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$9);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$9, var$5), $type), var$6), $rt_s(134)), var$7), $rt_s(126)), var$4);
        $type = jl_AbstractStringBuilder_toString(var$9);
        otcic_JsConsolePrintStream_println($path, $type);
    }
    return $fileData;
},
cgxgbtf_MemoryFileStorage_putFileInternal = ($this, $path, $bytes, $callMethod) => {
    let var$4, $fileData, var$6, var$7, var$8, var$9;
    if ($this.$debug) {
        var$4 = $bytes.data;
        $fileData = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($fileData);
        jl_AbstractStringBuilder_append($fileData, 34);
        jl_AbstractStringBuilder_append(jl_StringBuilder_append($fileData, $path), 34);
        var$6 = jl_AbstractStringBuilder_toString($fileData);
        $fileData = jl_System_out();
        var$7 = jl_Class_getSimpleName(jl_Object_getClass($this));
        var$8 = var$4.length;
        var$9 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$9);
        jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$9, var$7), $rt_s(135)), var$6), $rt_s(136)), var$8);
        var$7 = jl_AbstractStringBuilder_toString(var$9);
        otcic_JsConsolePrintStream_println($fileData, var$7);
    }
    if (!jl_String_isEmpty($path) && !jl_String_equals($path, $rt_s(130)) && !jl_String_equals($path, $rt_s(75)) && !jl_String_equals($path, $rt_s(131))) {
        $fileData = cgxgbtf_FileData__init_0($path, $bytes);
        cbgu_OrderedMap_put($this.$fileMap, $path, $fileData);
        if ($callMethod)
            $this.$putFile($path, $fileData);
        return;
    }
    $fileData = new cbgu_GdxRuntimeException;
    jl_RuntimeException__init_($fileData, $rt_s(137));
    $rt_throw($fileData);
},
cgxgbtf_MemoryFileStorage_putFolderInternal = ($this, $path) => {
    cgxgbtf_MemoryFileStorage_putFolderInternal0($this, $path, 1);
},
cgxgbtf_MemoryFileStorage_putFolderInternal0 = ($this, $path, $callMethod) => {
    let var$3, var$4, var$5, $fileData;
    if ($this.$debug) {
        var$3 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$3);
        jl_AbstractStringBuilder_append(var$3, 34);
        jl_AbstractStringBuilder_append(jl_StringBuilder_append(var$3, $path), 34);
        var$4 = jl_AbstractStringBuilder_toString(var$3);
        var$3 = jl_System_out();
        var$5 = jl_Class_getSimpleName(jl_Object_getClass($this));
        $fileData = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($fileData);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append($fileData, var$5), $rt_s(138)), var$4);
        var$5 = jl_AbstractStringBuilder_toString($fileData);
        otcic_JsConsolePrintStream_println(var$3, var$5);
    }
    if (!jl_String_isEmpty($path) && !jl_String_equals($path, $rt_s(130)) && !jl_String_equals($path, $rt_s(75)) && !jl_String_equals($path, $rt_s(131))) {
        $fileData = cgxgbtf_FileData__init_1($path);
        cbgu_OrderedMap_put($this.$fileMap, $path, cgxgbtf_FileData__init_1($path));
        if ($callMethod)
            $this.$putFile($path, $fileData);
        return;
    }
    var$3 = new cbgu_GdxRuntimeException;
    jl_RuntimeException__init_(var$3, $rt_s(137));
    $rt_throw(var$3);
},
cgxgbtf_MemoryFileStorage_fixPath = ($this, $path) => {
    let var$2, var$3, var$4, var$5;
    var$2 = jl_String_trim($path);
    if (jl_String_startsWith(var$2, $rt_s(131)))
        var$2 = jl_String_replace(var$2, $rt_s(131), $rt_s(13));
    if (jl_String_startsWith(var$2, $rt_s(130))) {
        var$2 = jur_Pattern_matcher(jur_Pattern_compile($rt_s(130)), var$2);
        var$2.$leftBound0 = 0;
        var$3 = var$2.$string0.$nativeString.length;
        var$2.$rightBound0 = var$3;
        jur_MatchResultImpl_reset(var$2.$matchResult, var$2.$string0, var$2.$leftBound0, var$3);
        var$2.$appendPos = 0;
        var$2.$replacement0 = null;
        var$2.$matchResult.$previousMatch = (-1);
        if (!jur_Matcher_find(var$2))
            var$2 = var$2.$string0;
        else {
            var$4 = new jl_StringBuffer;
            jl_AbstractStringBuilder__init_(var$4);
            var$2.$processedRepl = jur_Matcher_processReplacement(var$2, $rt_s(13));
            $path = var$2.$string0;
            var$5 = var$2.$appendPos;
            var$3 = jur_Matcher_start(var$2);
            jl_StringBuffer_append(var$4, jl_String_substring($path, var$5, var$3));
            jl_AbstractStringBuilder_append0(var$4, var$2.$processedRepl);
            var$5 = jur_Matcher_end(var$2);
            var$2.$appendPos = var$5;
            $path = var$2.$string0;
            var$2 = jl_AbstractStringBuilder_toString(jl_StringBuffer_append(var$4, jl_String_substring($path, var$5, $path.$nativeString.length)));
        }
    }
    if (!jl_String_startsWith(var$2, $rt_s(75))) {
        $path = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($path);
        jl_AbstractStringBuilder_append($path, 47);
        jl_StringBuilder_append($path, var$2);
        var$2 = jl_AbstractStringBuilder_toString($path);
    }
    if (!jl_String_endsWith(var$2, $rt_s(75))) {
        $path = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($path);
        jl_AbstractStringBuilder_append(jl_StringBuilder_append($path, var$2), 47);
        var$2 = jl_AbstractStringBuilder_toString($path);
    }
    return var$2;
},
cgxgbtft_InternalStorage = $rt_classWithoutFields(cgxgbtf_MemoryFileStorage),
cgxgbtft_ClasspathStorage = $rt_classWithoutFields(cgxgbtf_MemoryFileStorage);
function cgxgbtft_LocalDBStorage() {
    cgxgbtf_MemoryFileStorage.call(this);
    this.$dataBase = null;
}
let cgxgbtft_LocalDBStorage_putFile = ($this, $key, $fileData) => {
    let $type, $transaction, $objectStore, $dbFileData, $request;
    if ($this.$debug) {
        $type = $fileData !== null && cgxgbtf_FileData_isDirectory($fileData) ? $rt_s(139) : $rt_s(140);
        $transaction = jl_System_out();
        $objectStore = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($objectStore);
        jl_StringBuilder_append(jl_StringBuilder_append($objectStore, $type), $key);
        $objectStore = jl_AbstractStringBuilder_toString($objectStore);
        otcic_JsConsolePrintStream_println($transaction, $objectStore);
    }
    $objectStore = $this.$dataBase.transaction("FILE_DATA", "readwrite").objectStore("FILE_DATA");
    $dbFileData = cgxgbtfi_IndexedDBFileData_create$js_body$_5($fileData.$type5, new Date());
    if (!cgxgbtf_FileData_isDirectory($fileData))
        $dbFileData.contents = otji_JS_wrap($fileData.$bytes);
    $type = $rt_ustr($key);
    $request = $objectStore.put($dbFileData, $type);
    $fileData = new cgxgbtft_LocalDBStorage$putFile$lambda$_2_0;
    $fileData.$_01 = $key;
    $key = otji_JS_function(otji_JSWrapper_unwrap($fileData), "handleEvent");
    $request.onerror = $key;
},
cgxgbtft_LocalDBStorage_removeFile = ($this, $key) => {
    let $objectStore, $transaction, $request;
    if ($this.$debug) {
        $objectStore = jl_System_out();
        $transaction = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($transaction);
        jl_StringBuilder_append(jl_StringBuilder_append($transaction, $rt_s(141)), $key);
        $transaction = jl_AbstractStringBuilder_toString($transaction);
        otcic_JsConsolePrintStream_println($objectStore, $transaction);
    }
    $objectStore = $this.$dataBase.transaction("FILE_DATA", "readwrite").objectStore("FILE_DATA");
    $transaction = $rt_ustr($key);
    $request = $objectStore.delete($transaction);
    $objectStore = new cgxgbtft_LocalDBStorage$removeFile$lambda$_3_0;
    $objectStore.$_010 = $key;
    $key = otji_JS_function(otji_JSWrapper_unwrap($objectStore), "handleEvent");
    $request.onerror = $key;
},
cgxgbt_TeaPermissions$TeaPermissionResult = $rt_classWithoutFields(0);
function cgxgbt_TeaClipboard$ClipboardWriteHandler() {
    jl_Object.call(this);
    this.$this$00 = null;
}
let cgxgbt_TeaClipboard$ClipboardWriteHandler_granted$exported$0 = var$1 => {
    var$1 = var$1.$this$00;
    var$1.$hasWritePermissions = 1;
    cgxgbt_TeaClipboard_setContentNATIVE$js_body$_4($rt_ustr(var$1.$content));
},
cgxgbt_TeaClipboard$ClipboardWriteHandler_prompt$exported$1 = var$1 => {
    var$1 = var$1.$this$00;
    var$1.$hasWritePermissions = 1;
    cgxgbt_TeaClipboard_setContentNATIVE$js_body$_4($rt_ustr(var$1.$content));
},
cgxgbt_TeaClipboard$ClipboardWriteHandler_denied$exported$2 = var$1 => {
    var$1.$this$00.$hasWritePermissions = 0;
};
function cgxgbt_TeaClipboard$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_06 = null;
}
let cgxgbt_TeaClipboard$_init_$lambda$_0_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1.$_06;
    var$3 = var$2.clipboardData;
    if (var$3 !== null)
        var$3.setData("text/plain", $rt_ustr(var$1.$content));
    var$2.preventDefault();
};
function cgxgbt_TeaClipboard$_init_$lambda$_0_1() {
    jl_Object.call(this);
    this.$_018 = null;
}
let cgxgbt_TeaClipboard$_init_$lambda$_0_1_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1.$_018;
    var$3 = var$2.clipboardData;
    if (var$3 !== null)
        var$3.setData("text/plain", $rt_ustr(var$1.$content));
    var$2.preventDefault();
};
function cgxgbt_TeaClipboard$_init_$lambda$_0_2() {
    jl_Object.call(this);
    this.$_011 = null;
}
let cgxgbt_TeaClipboard$_init_$lambda$_0_2_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1.$_011;
    var$3 = var$2.clipboardData;
    if (var$3 !== null)
        var$1.$content = $rt_str(var$3.getData("text/plain"));
    var$2.preventDefault();
},
cgxgbta_AssetLoaderListener = $rt_classWithoutFields(0),
cgxgbta_AssetLoaderListener_onProgress = ($this, $total, $loaded) => {
    return;
},
cgxgbta_AssetLoaderListener_onFailure = ($this, $url) => {
    return;
},
cgxgbta_AssetLoaderListener_onSuccess = ($this, $url, $result) => {
    return;
};
function cgxgbt_TeaApplication$4() {
    jl_Object.call(this);
    this.$this$045 = null;
}
function cgxgbt_TeaApplication$5() {
    jl_Object.call(this);
    this.$this$028 = null;
}
let cbg_LifecycleListener = $rt_classWithoutFields(0),
cgxgbtwh_HowlerAudioManager = $rt_classWithoutFields(),
cbgm_MathUtils = $rt_classWithoutFields(),
cbgm_MathUtils_random = null,
cbgm_MathUtils_nextPowerOfTwo = $value => {
    let var$2;
    if (!$value)
        return 1;
    var$2 = $value + (-1) | 0;
    $value = var$2 | var$2 >> 1;
    $value = $value | $value >> 2;
    $value = $value | $value >> 4;
    $value = $value | $value >> 8;
    return ($value | $value >> 16) + 1 | 0;
},
cbgm_MathUtils__clinit_ = () => {
    let var$1, var$2, var$3, var$4;
    var$1 = new cbgm_RandomXS128;
    var$2 = new ju_Random;
    var$3 = Long_or(Long_shl(Long_fromInt(ju_Random_nextInt(var$2)), 32), Long_fromInt(ju_Random_nextInt(var$2)));
    if (Long_eq(var$3, Long_ZERO))
        var$3 = Long_create(0, 2147483648);
    var$4 = cbgm_RandomXS128_murmurHash3(var$3);
    var$3 = cbgm_RandomXS128_murmurHash3(var$4);
    var$1.$seed0 = var$4;
    var$1.$seed1 = var$3;
    cbgm_MathUtils_random = var$1;
},
ju_Dictionary = $rt_classWithoutFields();
function ju_Hashtable() {
    let a = this; ju_Dictionary.call(a);
    a.$elementCount0 = 0;
    a.$elementData0 = null;
    a.$loadFactor2 = 0.0;
    a.$threshold4 = 0;
    a.$firstSlot = 0;
    a.$lastSlot = 0;
    a.$modCount2 = 0;
}
let ju_Hashtable_EMPTY_ENUMERATION = null,
ju_Hashtable_EMPTY_ITERATOR = null,
ju_Hashtable__init_ = $this => {
    let var$1, var$2;
    $this.$lastSlot = (-1);
    $this.$elementCount0 = 0;
    var$1 = $rt_createArray(ju_Hashtable$Entry, 11);
    var$2 = var$1.data;
    $this.$elementData0 = var$1;
    $this.$firstSlot = var$2.length;
    $this.$loadFactor2 = 0.75;
    ju_Hashtable_computeMaxSize($this);
},
ju_Hashtable__init_0 = () => {
    let var_0 = new ju_Hashtable();
    ju_Hashtable__init_(var_0);
    return var_0;
},
ju_Hashtable_computeMaxSize = $this => {
    $this.$threshold4 = $this.$elementData0.data.length * $this.$loadFactor2 | 0;
},
ju_Hashtable_put = ($this, $key, $value) => {
    let $result, var$4, var$5, $index, $entry, $hash, var$9, var$10, var$11, var$12, var$13;
    jl_Object_monitorEnterSync($this);
    try {
        if ($key !== null && $value !== null) {
            $result = $key;
            var$4 = jl_String_hashCode($result) & 2147483647;
            var$5 = $this.$elementData0.data;
            $index = var$4 % var$5.length | 0;
            $entry = var$5[$index];
            while ($entry !== null && !($entry.$hashcode == jl_String_hashCode($result) && $entry.$key.$equals($key) ? 1 : 0)) {
                $entry = $entry.$next3;
            }
            if ($entry !== null) {
                $result = $entry.$value;
                $entry.$value = $value;
                return $result;
            }
            $this.$modCount2 = $this.$modCount2 + 1 | 0;
            $hash = $this.$elementCount0 + 1 | 0;
            $this.$elementCount0 = $hash;
            if ($hash > $this.$threshold4) {
                $hash = ($this.$elementData0.data.length << 1) + 1 | 0;
                if (!$hash)
                    $hash = 1;
                $index = (-1);
                var$9 = $rt_createArray(ju_Hashtable$Entry, $hash);
                var$5 = var$9.data;
                var$10 = $this.$lastSlot + 1 | 0;
                var$11 = $hash;
                while (true) {
                    var$10 = var$10 + (-1) | 0;
                    if (var$10 < $this.$firstSlot)
                        break;
                    var$12 = $this.$elementData0.data[var$10];
                    while (var$12 !== null) {
                        var$13 = (var$12.$key.$hashCode() & 2147483647) % $hash | 0;
                        if (var$13 < var$11)
                            var$11 = var$13;
                        if (var$13 > $index)
                            $index = var$13;
                        $entry = var$12.$next3;
                        var$12.$next3 = var$5[var$13];
                        var$5[var$13] = var$12;
                        var$12 = $entry;
                    }
                }
                $this.$firstSlot = var$11;
                $this.$lastSlot = $index;
                $this.$elementData0 = var$9;
                ju_Hashtable_computeMaxSize($this);
                $index = var$4 % $this.$elementData0.data.length | 0;
            }
            if ($index < $this.$firstSlot)
                $this.$firstSlot = $index;
            if ($index > $this.$lastSlot)
                $this.$lastSlot = $index;
            $entry = new ju_Hashtable$Entry;
            ju_MapEntry__init_($entry, $key, $value);
            $entry.$hashcode = jl_String_hashCode($result);
            var$5 = $this.$elementData0.data;
            $entry.$next3 = var$5[$index];
            var$5[$index] = $entry;
            return null;
        }
        $key = new jl_NullPointerException;
        jl_Exception__init_($key);
        $rt_throw($key);
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
ju_Hashtable__clinit_ = () => {
    ju_Hashtable_EMPTY_ENUMERATION = new ju_Hashtable$1;
    ju_Hashtable_EMPTY_ITERATOR = new ju_Hashtable$2;
};
function ju_Properties() {
    ju_Hashtable.call(this);
    this.$defaults = null;
}
let cgxgbt_TeaGL20$CustomIntMap = $rt_classWithoutFields(),
cgxgbt_TeaGL20$CustomIntMap_create$js_body$_1 = () => {
    return [undefined];
},
cgxgbt_TeaGL20$CustomIntMap_get$js_body$_2 = (var$1, var$2) => {
    if (var$1[var$2] === undefined) return null;
    return var$1[var$2];
},
cgxgbt_TeaGL20$CustomIntMap_add$js_body$_4 = (var$1, var$2) => {
    var$1.push(var$2);
    return var$1.length - 1;
},
cgxgbt_TeaGL20$CustomIntMap_remove$js_body$_5 = (var$1, var$2) => {
    var value = var$1[var$2];
    delete var$1[var$2];
    return value;
},
cbggg_GLVersion$Type = $rt_classWithoutFields(jl_Enum),
cbggg_GLVersion$Type_OpenGL = null,
cbggg_GLVersion$Type_GLES = null,
cbggg_GLVersion$Type_WebGL = null,
cbggg_GLVersion$Type_NONE = null,
cbggg_GLVersion$Type_$VALUES = null,
cbggg_GLVersion$Type__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbggg_GLVersion$Type;
    jl_Enum__init_(var$1, $rt_s(142), 0);
    cbggg_GLVersion$Type_OpenGL = var$1;
    var$1 = new cbggg_GLVersion$Type;
    jl_Enum__init_(var$1, $rt_s(143), 1);
    cbggg_GLVersion$Type_GLES = var$1;
    var$1 = new cbggg_GLVersion$Type;
    jl_Enum__init_(var$1, $rt_s(122), 2);
    cbggg_GLVersion$Type_WebGL = var$1;
    var$1 = new cbggg_GLVersion$Type;
    jl_Enum__init_(var$1, $rt_s(144), 3);
    cbggg_GLVersion$Type_NONE = var$1;
    var$2 = $rt_createArray(cbggg_GLVersion$Type, 4);
    var$3 = var$2.data;
    var$3[0] = cbggg_GLVersion$Type_OpenGL;
    var$3[1] = cbggg_GLVersion$Type_GLES;
    var$3[2] = cbggg_GLVersion$Type_WebGL;
    var$3[3] = var$1;
    cbggg_GLVersion$Type_$VALUES = var$2;
};
function cgxgbta_AssetLoadImpl$1() {
    jl_Object.call(this);
    this.$this$049 = null;
}
let cgxgbta_AssetLoadImpl$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1;
    var$2.preventDefault();
};
function cgxgbta_AssetLoadImpl$2() {
    jl_Object.call(this);
    this.$this$038 = null;
}
let cgxgbta_AssetLoadImpl$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1;
    var$2.preventDefault();
};
function cgxgbta_AssetLoadImpl$3() {
    let a = this; jl_Object.call(a);
    a.$val$config0 = null;
    a.$this$010 = null;
}
let cgxgbta_AssetLoadImpl$3_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$1 = var$1;
    var$2.preventDefault();
    var$3 = var$2.dataTransfer.files;
    var$2 = var$1.$this$010;
    var$1 = var$1.$val$config0;
    var$4 = var$3.length;
    if (var$4 > 0) {
        cbgu_Array__init_0(new cbgu_Array);
        var$5 = new Array();
        var$6 = 0;
        while (var$6 < var$4) {
            var$7 = var$3[var$6];
            var$8 = $rt_str(var$7.name);
            if (var$1.$windowListener.$acceptFileDropped(var$8)) {
                var$9 = new cgxgbta_AssetLoadImpl$getFile$lambda$_2_0;
                var$9.$_04 = var$2;
                var$9.$_11 = var$7;
                var$9.$_21 = var$8;
                var$5.push(new Promise(otji_JS_function(otji_JSWrapper_unwrap(var$9), "onExecute")));
            }
            var$6 = var$6 + 1 | 0;
        }
        var$3 = Promise.all(var$5);
        var$2 = new cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_0;
        var$2.$_016 = var$1;
        var$1 = new cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_1;
        var$2 = var$3.then(otji_JS_function(otji_JSWrapper_unwrap(var$2), "apply"), otji_JS_function(otji_JSWrapper_unwrap(var$1), "apply"));
        var$1 = new cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_2;
        var$2.finally(otji_JS_function(otji_JSWrapper_unwrap(var$1), "get"));
    }
},
cbgur_ClassReflection = $rt_classWithoutFields(),
cbgur_ClassReflection_getConstructor = ($c, $parameterTypes) => {
    let $e, $constructor, var$5, var$6, var$7, var$8, var$9, var$10, $$je;
    if ($parameterTypes !== null && $parameterTypes.data.length) {
        a: {
            try {
                $e = cbgur_Constructor__init_(jl_Class_getConstructor($c, $parameterTypes));
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_SecurityException) {
                    $e = $$je;
                    break a;
                } else if ($$je instanceof jl_NoSuchMethodException) {
                    $e = $$je;
                    $constructor = new cbgur_ReflectionException;
                    $c = jl_Class_getName($c);
                    jl_Throwable__init_($constructor, $c, $e);
                    $rt_throw($constructor);
                } else {
                    throw $$e;
                }
            }
            return $e;
        }
        $constructor = new cbgur_ReflectionException;
        $c = jl_Class_getName($c);
        jl_Throwable__init_($constructor, $c, $e);
        $rt_throw($constructor);
    }
    $parameterTypes = (jl_Class_getDeclaredConstructors($c)).data;
    var$5 = $parameterTypes.length;
    var$6 = $rt_createArray(jlr_Constructor, var$5);
    var$7 = var$6.data;
    var$8 = 0;
    var$9 = 0;
    while (var$9 < var$5) {
        $c = $parameterTypes[var$9];
        if (jlr_Modifier_isPublic(jlr_Constructor_getModifiers($c))) {
            var$10 = var$8 + 1 | 0;
            var$7[var$8] = $c;
            var$8 = var$10;
        }
        var$9 = var$9 + 1 | 0;
    }
    if (var$8 < var$7.length)
        var$6 = ju_Arrays_copyOf0(var$6, var$8);
    $parameterTypes = var$6.data;
    return $parameterTypes.length <= 0 ? null : cbgur_Constructor__init_($parameterTypes[0]);
},
cbgur_ClassReflection_getDeclaredConstructor = ($c, $parameterTypes) => {
    let $e, $declaredConstructor, $$je;
    a: {
        try {
            $e = cbgur_Constructor__init_(jl_Class_getDeclaredConstructor($c, $parameterTypes));
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_SecurityException) {
                $e = $$je;
                break a;
            } else if ($$je instanceof jl_NoSuchMethodException) {
                $e = $$je;
                $declaredConstructor = new cbgur_ReflectionException;
                $c = jl_Class_getName($c);
                jl_Throwable__init_($declaredConstructor, $c, $e);
                $rt_throw($declaredConstructor);
            } else {
                throw $$e;
            }
        }
        return $e;
    }
    $declaredConstructor = new cbgur_ReflectionException;
    $c = jl_Class_getName($c);
    jl_Throwable__init_($declaredConstructor, $c, $e);
    $rt_throw($declaredConstructor);
};
function cbgur_Constructor() {
    jl_Object.call(this);
    this.$constructor0 = null;
}
let cbgur_Constructor__init_0 = ($this, $constructor) => {
    $this.$constructor0 = $constructor;
},
cbgur_Constructor__init_ = var_0 => {
    let var_1 = new cbgur_Constructor();
    cbgur_Constructor__init_0(var_1, var_0);
    return var_1;
},
cbgur_Constructor_setAccessible = ($this, $accessible) => {
    return;
},
cbgur_ReflectionException = $rt_classWithoutFields(jl_Exception);
function jur_Pattern() {
    let a = this; jl_Object.call(a);
    a.$lexemes = null;
    a.$flags = 0;
    a.$backRefs = null;
    a.$needsBackRefReplacement = 0;
    a.$globalGroupIndex = 0;
    a.$compCount = 0;
    a.$consCount = 0;
    a.$start1 = null;
}
let jur_Pattern_matcher = ($this, $input) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$2 = new jur_Matcher;
    var$2.$leftBound0 = (-1);
    var$2.$rightBound0 = (-1);
    var$2.$pat = $this;
    var$2.$start4 = $this.$start1;
    var$2.$string0 = $input;
    var$2.$leftBound0 = 0;
    var$3 = $input.$nativeString.length;
    var$2.$rightBound0 = var$3;
    var$4 = new jur_MatchResultImpl;
    var$5 = var$2.$leftBound0;
    var$6 = $this.$globalGroupIndex;
    var$7 = $this.$compCount + 1 | 0;
    var$8 = $this.$consCount + 1 | 0;
    var$4.$previousMatch = (-1);
    var$6 = var$6 + 1 | 0;
    var$4.$groupCount = var$6;
    var$4.$groupBounds = $rt_createIntArray(var$6 * 2 | 0);
    var$9 = $rt_createIntArray(var$8);
    var$4.$consumers = var$9;
    ju_Arrays_fill(var$9, (-1));
    if (var$7 > 0)
        var$4.$compQuantCounters = $rt_createIntArray(var$7);
    ju_Arrays_fill(var$4.$groupBounds, (-1));
    jur_MatchResultImpl_reset(var$4, $input, var$5, var$3);
    var$2.$matchResult = var$4;
    var$4.$anchoringBounds = 1;
    return var$2;
},
jur_Pattern_pattern = $this => {
    return $this.$lexemes.$orig;
},
jur_Pattern_processExpression = ($this, $ch, $newFlags, $last) => {
    let $children, $saveFlags, $saveChangedFlags, $fSet, $child, var$9;
    $children = ju_ArrayList__init_();
    $saveFlags = $this.$flags;
    $saveChangedFlags = 0;
    if ($newFlags != $saveFlags)
        $this.$flags = $newFlags;
    a: {
        switch ($ch) {
            case -1073741784:
                $fSet = new jur_NonCapFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            case -536870872:
            case -268435416:
                break;
            case -134217688:
            case -67108824:
                $fSet = new jur_BehindFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            case -33554392:
                $fSet = new jur_AtomicFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            default:
                $newFlags = $this.$globalGroupIndex + 1 | 0;
                $this.$globalGroupIndex = $newFlags;
                if ($last !== null)
                    $fSet = jur_FSet__init_0($newFlags);
                else {
                    $fSet = new jur_FinalSet;
                    jur_FSet__init_($fSet, 0);
                    $saveChangedFlags = 1;
                }
                $newFlags = $this.$globalGroupIndex;
                if ($newFlags <= (-1))
                    break a;
                if ($newFlags >= 10)
                    break a;
                $this.$backRefs.data[$newFlags] = $fSet;
                break a;
        }
        $fSet = new jur_AheadFSet;
        jur_FSet__init_($fSet, (-1));
    }
    while (true) {
        if (jur_Lexer_isLetter($this.$lexemes) && $this.$lexemes.$lookAhead == (-536870788)) {
            $last = jur_CharClass__init_0(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
            while (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
                $child = $this.$lexemes;
                var$9 = $child.$lookAhead;
                if (var$9 && var$9 != (-536870788) && var$9 != (-536870871))
                    break;
                jur_CharClass_add0($last, jur_Lexer_next($child));
                $child = $this.$lexemes;
                if ($child.$ch != (-536870788))
                    continue;
                jur_Lexer_next($child);
            }
            $child = jur_Pattern_processRangeSet($this, $last);
            $child.$setNext($fSet);
        } else if ($this.$lexemes.$ch == (-536870788)) {
            $child = jur_EmptySet__init_($fSet);
            jur_Lexer_next($this.$lexemes);
        } else {
            $child = jur_Pattern_processSubExpression($this, $fSet);
            $last = $this.$lexemes;
            if ($last.$ch == (-536870788))
                jur_Lexer_next($last);
        }
        if ($child !== null)
            ju_ArrayList_add($children, $child);
        if (jur_Lexer_isEmpty($this.$lexemes))
            break;
        if ($this.$lexemes.$ch == (-536870871))
            break;
    }
    if ($this.$lexemes.$lookBack == (-536870788))
        ju_ArrayList_add($children, jur_EmptySet__init_($fSet));
    if ($this.$flags != $saveFlags && !$saveChangedFlags) {
        $this.$flags = $saveFlags;
        $last = $this.$lexemes;
        $last.$flags0 = $saveFlags;
        $last.$lookAhead = $last.$ch;
        $last.$lookAheadST = $last.$curST;
        var$9 = $last.$curToc;
        $last.$index = var$9 + 1 | 0;
        $last.$lookAheadToc = var$9;
        jur_Lexer_movePointer($last);
    }
    switch ($ch) {
        case -1073741784:
            break;
        case -536870872:
            $last = new jur_PositiveLookAhead;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -268435416:
            $last = new jur_NegativeLookAhead;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -134217688:
            $last = new jur_PositiveLookBehind;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -67108824:
            $last = new jur_NegativeLookBehind;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -33554392:
            $last = new jur_AtomicJointSet;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        default:
            switch ($children.$size1) {
                case 0:
                    break;
                case 1:
                    return jur_SingleSet__init_0(ju_ArrayList_get($children, 0), $fSet);
                default:
                    return jur_JointSet__init_0($children, $fSet);
            }
            return jur_EmptySet__init_($fSet);
    }
    $last = new jur_NonCapJointSet;
    jur_JointSet__init_($last, $children, $fSet);
    return $last;
},
jur_Pattern_processDecomposedChar = $this => {
    let $codePoints, $curSymb, $curSymbIndex, $codePointsHangul, var$5, var$6, $readCodePoints;
    $codePoints = $rt_createIntArray(4);
    $curSymb = (-1);
    $curSymbIndex = (-1);
    if (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
        $codePointsHangul = $codePoints.data;
        $curSymb = jur_Lexer_next($this.$lexemes);
        $codePointsHangul[0] = $curSymb;
        $curSymbIndex = $curSymb - 4352 | 0;
    }
    if ($curSymbIndex >= 0 && $curSymbIndex < 19) {
        $codePointsHangul = $rt_createCharArray(3);
        $codePoints = $codePointsHangul.data;
        $codePoints[0] = $curSymb & 65535;
        var$5 = $this.$lexemes;
        var$6 = var$5.$ch;
        $readCodePoints = var$6 - 4449 | 0;
        if ($readCodePoints >= 0 && $readCodePoints < 21) {
            $codePoints[1] = var$6 & 65535;
            jur_Lexer_next(var$5);
            var$5 = $this.$lexemes;
            var$6 = var$5.$ch;
            $curSymb = var$6 - 4519 | 0;
            if ($curSymb >= 0 && $curSymb < 28) {
                $codePoints[2] = var$6 & 65535;
                jur_Lexer_next(var$5);
                return jur_HangulDecomposedCharSet__init_($codePointsHangul, 3);
            }
            return jur_HangulDecomposedCharSet__init_($codePointsHangul, 2);
        }
        if (!jur_Pattern_hasFlag($this, 2))
            return jur_CharSet__init_($codePoints[0]);
        if (jur_Pattern_hasFlag($this, 64))
            return jur_UCICharSet__init_($codePoints[0]);
        return jur_CICharSet__init_($codePoints[0]);
    }
    $codePointsHangul = $codePoints.data;
    $curSymb = 1;
    while ($curSymb < 4 && !jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
        $readCodePoints = $curSymb + 1 | 0;
        $codePointsHangul[$curSymb] = jur_Lexer_next($this.$lexemes);
        $curSymb = $readCodePoints;
    }
    if ($curSymb == 1) {
        $readCodePoints = $codePointsHangul[0];
        if (!(jur_Lexer_singleDecompTable.$get4($readCodePoints) == jur_Lexer_singleDecompTableSize ? 0 : 1))
            return jur_Pattern_processCharSet($this, $codePointsHangul[0]);
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_DecomposedCharSet__init_0($codePoints, $curSymb);
    if (jur_Pattern_hasFlag($this, 64)) {
        var$5 = new jur_UCIDecomposedCharSet;
        jur_DecomposedCharSet__init_(var$5, $codePoints, $curSymb);
        return var$5;
    }
    var$5 = new jur_CIDecomposedCharSet;
    jur_DecomposedCharSet__init_(var$5, $codePoints, $curSymb);
    return var$5;
},
jur_Pattern_processSubExpression = ($this, $last) => {
    let $cur, $term, var$4, var$5, var$6, $next, var$8;
    if (jur_Lexer_isLetter($this.$lexemes) && !jur_Lexer_isNextSpecial($this.$lexemes) && jur_Lexer_isLetter0($this.$lexemes.$lookAhead)) {
        if (jur_Pattern_hasFlag($this, 128)) {
            $cur = jur_Pattern_processDecomposedChar($this);
            if (!jur_Lexer_isEmpty($this.$lexemes)) {
                $term = $this.$lexemes;
                var$4 = $term.$ch;
                if (!(var$4 == (-536870871) && !($last instanceof jur_FinalSet)) && var$4 != (-536870788) && !jur_Lexer_isLetter($term))
                    $cur = jur_Pattern_processQuantifier($this, $last, $cur);
            }
        } else if (!jur_Lexer_isHighSurrogate0($this.$lexemes) && !jur_Lexer_isLowSurrogate0($this.$lexemes)) {
            $term = new jl_StringBuffer;
            jl_AbstractStringBuilder__init_($term);
            while (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes) && !jur_Lexer_isHighSurrogate0($this.$lexemes) && !jur_Lexer_isLowSurrogate0($this.$lexemes)) {
                if (!(!jur_Lexer_isNextSpecial($this.$lexemes) && !$this.$lexemes.$lookAhead) && !(!jur_Lexer_isNextSpecial($this.$lexemes) && jur_Lexer_isLetter0($this.$lexemes.$lookAhead))) {
                    var$5 = $this.$lexemes.$lookAhead;
                    if (var$5 != (-536870871) && (var$5 & (-2147418113)) != (-2147483608) && var$5 != (-536870788) && var$5 != (-536870876))
                        break;
                }
                var$4 = jur_Lexer_next($this.$lexemes);
                if (!jl_Character_isSupplementaryCodePoint(var$4))
                    jl_AbstractStringBuilder_append($term, var$4 & 65535);
                else
                    jl_AbstractStringBuilder_append1($term, jl_Character_toChars(var$4));
            }
            if (!jur_Pattern_hasFlag($this, 2)) {
                $cur = new jur_SequenceSet;
                jur_LeafSet__init_($cur);
                $cur.$string = jl_AbstractStringBuilder_toString($term);
                var$4 = $term.$length1;
                $cur.$charCount0 = var$4;
                $cur.$leftToRight = jur_SequenceSet$IntHash__init_(var$4);
                $cur.$rightToLeft = jur_SequenceSet$IntHash__init_($cur.$charCount0);
                var$6 = 0;
                while (var$6 < ($cur.$charCount0 - 1 | 0)) {
                    jur_SequenceSet$IntHash_put($cur.$leftToRight, jl_String_charAt($cur.$string, var$6), ($cur.$charCount0 - var$6 | 0) - 1 | 0);
                    jur_SequenceSet$IntHash_put($cur.$rightToLeft, jl_String_charAt($cur.$string, ($cur.$charCount0 - var$6 | 0) - 1 | 0), ($cur.$charCount0 - var$6 | 0) - 1 | 0);
                    var$6 = var$6 + 1 | 0;
                }
            } else
                $cur = jur_Pattern_hasFlag($this, 64) ? jur_UCISequenceSet__init_0($term) : jur_CISequenceSet__init_0($term);
        } else
            $cur = jur_Pattern_processQuantifier($this, $last, jur_Pattern_processTerminal($this, $last));
    } else {
        $term = $this.$lexemes;
        if ($term.$ch != (-536870871))
            $cur = jur_Pattern_processQuantifier($this, $last, jur_Pattern_processTerminal($this, $last));
        else {
            if ($last instanceof jur_FinalSet)
                $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $term.$orig, $term.$curToc));
            $cur = jur_EmptySet__init_($last);
        }
    }
    a: {
        if (!jur_Lexer_isEmpty($this.$lexemes)) {
            var$4 = $this.$lexemes.$ch;
            if (!(var$4 == (-536870871) && !($last instanceof jur_FinalSet)) && var$4 != (-536870788)) {
                $next = jur_Pattern_processSubExpression($this, $last);
                if ($cur instanceof jur_LeafQuantifierSet && !($cur instanceof jur_CompositeQuantifierSet) && !($cur instanceof jur_GroupQuantifierSet) && !($cur instanceof jur_AltQuantifierSet)) {
                    var$8 = $cur;
                    $term = var$8;
                    if (!$next.$first($term.$innerSet)) {
                        $cur = new jur_UnifiedQuantifierSet;
                        $term = $term.$innerSet;
                        var$8 = var$8;
                        jur_LeafQuantifierSet__init_($cur, $term, var$8.$next1, var$8.$type4);
                        $cur.$innerSet.$setNext($cur);
                    }
                }
                if (($next.$getType0() & 65535) != 43)
                    $cur.$setNext($next);
                else
                    $cur.$setNext($next.$innerSet);
                break a;
            }
        }
        if ($cur === null)
            return null;
        $cur.$setNext($last);
    }
    if (($cur.$getType0() & 65535) != 43)
        return $cur;
    return $cur.$innerSet;
},
jur_Pattern_processQuantifier = ($this, $last, $term) => {
    let $q, $quant, $q_0, var$6, $leaf;
    $q = $this.$lexemes;
    $quant = $q.$ch;
    if ($term !== null && !($term instanceof jur_LeafSet)) {
        switch ($quant) {
            case -2147483606:
                jur_Lexer_next($q);
                $q = new jur_PossessiveGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, $quant);
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483605:
                jur_Lexer_next($q);
                $q = new jur_PosPlusGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-2147483606));
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483585:
                jur_Lexer_next($q);
                $q = new jur_PosAltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483525:
                $q_0 = new jur_PosCompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                var$6 = $this.$compCount + 1 | 0;
                $this.$compCount = var$6;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), var$6);
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q_0;
            case -1073741782:
            case -1073741781:
                jur_Lexer_next($q);
                $q = new jur_ReluctantGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, $quant);
                $term.$setNext($q);
                return $q;
            case -1073741761:
                jur_Lexer_next($q);
                $q = new jur_RelAltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -1073741701:
                $q_0 = new jur_RelCompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                $quant = $this.$compCount + 1 | 0;
                $this.$compCount = $quant;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), $quant);
                $term.$setNext($q_0);
                return $q_0;
            case -536870870:
            case -536870869:
                jur_Lexer_next($q);
                if ($term.$getType0() != (-2147483602)) {
                    $q = new jur_GroupQuantifierSet;
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                } else if (jur_Pattern_hasFlag($this, 32)) {
                    $q = new jur_DotAllQuantifierSet;
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                } else {
                    $q = new jur_DotQuantifierSet;
                    $q_0 = jur_AbstractLineTerminator_getInstance($this.$flags);
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                    $q.$lt = $q_0;
                }
                $term.$setNext($q);
                return $q;
            case -536870849:
                jur_Lexer_next($q);
                $q = new jur_AltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -536870789:
                $q_0 = new jur_CompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                $quant = $this.$compCount + 1 | 0;
                $this.$compCount = $quant;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), $quant);
                $term.$setNext($q_0);
                return $q_0;
            default:
        }
        return $term;
    }
    $leaf = null;
    if ($term !== null)
        $leaf = $term;
    switch ($quant) {
        case -2147483606:
        case -2147483605:
            jur_Lexer_next($q);
            $q = new jur_PossessiveQuantifierSet;
            jur_LeafQuantifierSet__init_($q, $leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -2147483585:
            jur_Lexer_next($q);
            $term = new jur_PossessiveAltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-2147483585));
            return $term;
        case -2147483525:
            $term = new jur_PossessiveCompositeQuantifierSet;
            jur_CompositeQuantifierSet__init_($term, jur_Lexer_nextSpecial($q), $leaf, $last, (-2147483525));
            return $term;
        case -1073741782:
        case -1073741781:
            jur_Lexer_next($q);
            $q = new jur_ReluctantQuantifierSet;
            jur_LeafQuantifierSet__init_($q, $leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -1073741761:
            jur_Lexer_next($q);
            $term = new jur_ReluctantAltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-1073741761));
            return $term;
        case -1073741701:
            $term = new jur_ReluctantCompositeQuantifierSet;
            jur_CompositeQuantifierSet__init_($term, jur_Lexer_nextSpecial($q), $leaf, $last, (-1073741701));
            return $term;
        case -536870870:
        case -536870869:
            jur_Lexer_next($q);
            $q = jur_LeafQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -536870849:
            jur_Lexer_next($q);
            $term = new jur_AltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-536870849));
            return $term;
        case -536870789:
            return jur_CompositeQuantifierSet__init_0(jur_Lexer_nextSpecial($q), $leaf, $last, (-536870789));
        default:
    }
    return $term;
},
jur_Pattern_processTerminal = ($this, $last) => {
    let $term, var$3, var$4, $ch, $newFlags, $number, $negative, $cc;
    $term = null;
    var$3 = $last instanceof jur_FinalSet;
    while (true) {
        a: {
            var$4 = $this.$lexemes;
            $ch = var$4.$ch;
            if (($ch & (-2147418113)) == (-2147483608)) {
                jur_Lexer_next(var$4);
                $newFlags = ($ch & 16711680) >> 16;
                $ch = $ch & (-16711681);
                if ($ch == (-16777176))
                    $this.$flags = $newFlags;
                else {
                    if ($ch != (-1073741784))
                        $newFlags = $this.$flags;
                    $term = jur_Pattern_processExpression($this, $ch, $newFlags, $last);
                    var$4 = $this.$lexemes;
                    if (var$4.$ch != (-536870871))
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), var$4.$orig, var$4.$curToc));
                    jur_Lexer_next(var$4);
                }
            } else {
                b: {
                    c: {
                        switch ($ch) {
                            case -2147483599:
                            case -2147483598:
                            case -2147483597:
                            case -2147483596:
                            case -2147483595:
                            case -2147483594:
                            case -2147483593:
                            case -2147483592:
                            case -2147483591:
                                break c;
                            case -2147483583:
                                break;
                            case -2147483582:
                                jur_Lexer_next(var$4);
                                $term = jur_WordBoundary__init_(0);
                                break a;
                            case -2147483577:
                                jur_Lexer_next(var$4);
                                $term = new jur_PreviousMatch;
                                jur_AbstractSet__init_($term);
                                break a;
                            case -2147483558:
                                jur_Lexer_next(var$4);
                                $term = new jur_EOLSet;
                                $number = $this.$consCount + 1 | 0;
                                $this.$consCount = $number;
                                jur_EOLSet__init_($term, $number);
                                break a;
                            case -2147483550:
                                jur_Lexer_next(var$4);
                                $term = jur_WordBoundary__init_(1);
                                break a;
                            case -2147483526:
                                jur_Lexer_next(var$4);
                                $term = new jur_EOISet;
                                jur_AbstractSet__init_($term);
                                break a;
                            case -536870876:
                                jur_Lexer_next(var$4);
                                $this.$consCount = $this.$consCount + 1 | 0;
                                if (jur_Pattern_hasFlag($this, 8)) {
                                    if (jur_Pattern_hasFlag($this, 1)) {
                                        $term = jur_UMultiLineEOLSet__init_0($this.$consCount);
                                        break a;
                                    }
                                    $term = jur_MultiLineEOLSet__init_($this.$consCount);
                                    break a;
                                }
                                if (jur_Pattern_hasFlag($this, 1)) {
                                    $term = jur_UEOLSet__init_0($this.$consCount);
                                    break a;
                                }
                                $term = jur_EOLSet__init_0($this.$consCount);
                                break a;
                            case -536870866:
                                jur_Lexer_next(var$4);
                                if (jur_Pattern_hasFlag($this, 32)) {
                                    $term = jur_DotAllSet__init_0();
                                    break a;
                                }
                                $term = jur_DotSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                break a;
                            case -536870821:
                                jur_Lexer_next(var$4);
                                $negative = 0;
                                $term = $this.$lexemes;
                                if ($term.$ch == (-536870818)) {
                                    $negative = 1;
                                    jur_Lexer_next($term);
                                }
                                $term = jur_Pattern_processRangeSet($this, jur_Pattern_processRangeExpression($this, $negative));
                                $term.$setNext($last);
                                var$4 = $this.$lexemes;
                                if (var$4.$ch != (-536870819))
                                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), var$4.$orig, var$4.$curToc));
                                jur_Lexer_setMode(var$4, 1);
                                jur_Lexer_next($this.$lexemes);
                                break a;
                            case -536870818:
                                jur_Lexer_next(var$4);
                                $this.$consCount = $this.$consCount + 1 | 0;
                                if (!jur_Pattern_hasFlag($this, 8)) {
                                    $term = new jur_SOLSet;
                                    jur_AbstractSet__init_($term);
                                    break a;
                                }
                                $term = new jur_MultiLineSOLSet;
                                var$4 = jur_AbstractLineTerminator_getInstance($this.$flags);
                                jur_AbstractSet__init_($term);
                                $term.$lt1 = var$4;
                                break a;
                            case 0:
                                $cc = var$4.$curST;
                                if ($cc !== null)
                                    $term = jur_Pattern_processRangeSet($this, $cc);
                                else {
                                    if (jur_Lexer_isEmpty(var$4)) {
                                        $term = jur_EmptySet__init_($last);
                                        break a;
                                    }
                                    $term = jur_CharSet__init_($ch & 65535);
                                }
                                jur_Lexer_next($this.$lexemes);
                                break a;
                            default:
                                break b;
                        }
                        jur_Lexer_next(var$4);
                        $term = new jur_SOLSet;
                        jur_AbstractSet__init_($term);
                        break a;
                    }
                    $number = ($ch & 2147483647) - 48 | 0;
                    if ($this.$globalGroupIndex < $number)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Lexer_toString(var$4), jur_Lexer_getIndex($this.$lexemes)));
                    jur_Lexer_next(var$4);
                    $this.$consCount = $this.$consCount + 1 | 0;
                    $term = !jur_Pattern_hasFlag($this, 2) ? jur_BackReferenceSet__init_($number, $this.$consCount) : jur_Pattern_hasFlag($this, 64) ? jur_UCIBackReferenceSet__init_0($number, $this.$consCount) : jur_CIBackReferenceSet__init_0($number, $this.$consCount);
                    $this.$backRefs.data[$number].$isBackReferenced = 1;
                    $this.$needsBackRefReplacement = 1;
                    break a;
                }
                if ($ch >= 0 && !jur_Lexer_isSpecial(var$4)) {
                    $term = jur_Pattern_processCharSet($this, $ch);
                    jur_Lexer_next($this.$lexemes);
                } else if ($ch == (-536870788))
                    $term = jur_EmptySet__init_($last);
                else {
                    if ($ch != (-536870871)) {
                        $last = new jur_PatternSyntaxException;
                        $term = !jur_Lexer_isSpecial($this.$lexemes) ? jl_Character_toString($ch & 65535) : $this.$lexemes.$curST.$toString();
                        var$4 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0($last, $term, var$4.$orig, var$4.$curToc);
                        $rt_throw($last);
                    }
                    if (var$3) {
                        $last = new jur_PatternSyntaxException;
                        var$4 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0($last, $rt_s(13), var$4.$orig, var$4.$curToc);
                        $rt_throw($last);
                    }
                    $term = jur_EmptySet__init_($last);
                }
            }
        }
        if ($ch != (-16777176))
            break;
    }
    return $term;
},
jur_Pattern_processRangeExpression = ($this, $alt) => {
    let $res, $buffer, $intersection, $notClosed, $firstInClass, $cs, $cur, $negative, $$je;
    $res = jur_CharClass__init_0(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    jur_AbstractCharClass_setNegative($res, $alt);
    $buffer = (-1);
    $intersection = 0;
    $notClosed = 0;
    $firstInClass = 1;
    a: {
        b: {
            c: while (true) {
                if (jur_Lexer_isEmpty($this.$lexemes))
                    break a;
                $cs = $this.$lexemes;
                $alt = $cs.$ch;
                $notClosed = $alt == (-536870819) && !$firstInClass ? 0 : 1;
                if (!$notClosed)
                    break a;
                d: {
                    switch ($alt) {
                        case -536870874:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = jur_Lexer_next($this.$lexemes);
                            $cs = $this.$lexemes;
                            if ($cs.$ch != (-536870874)) {
                                $buffer = 38;
                                break d;
                            }
                            if ($cs.$lookAhead == (-536870821)) {
                                jur_Lexer_next($cs);
                                $intersection = 1;
                                $buffer = (-1);
                                break d;
                            }
                            jur_Lexer_next($cs);
                            if ($firstInClass) {
                                $res = jur_Pattern_processRangeExpression($this, 0);
                                break d;
                            }
                            if ($this.$lexemes.$ch == (-536870819))
                                break d;
                            jur_CharClass_intersection($res, jur_Pattern_processRangeExpression($this, 0));
                            break d;
                        case -536870867:
                            if (!$firstInClass) {
                                $alt = $cs.$lookAhead;
                                if ($alt != (-536870819) && $alt != (-536870821) && $buffer >= 0) {
                                    jur_Lexer_next($cs);
                                    $cs = $this.$lexemes;
                                    $cur = $cs.$ch;
                                    if (jur_Lexer_isSpecial($cs))
                                        break c;
                                    if ($cur < 0) {
                                        $negative = $this.$lexemes.$lookAhead;
                                        if ($negative != (-536870819) && $negative != (-536870821) && $buffer >= 0)
                                            break c;
                                    }
                                    e: {
                                        try {
                                            if (jur_Lexer_isLetter0($cur))
                                                break e;
                                            $cur = $cur & 65535;
                                            break e;
                                        } catch ($$e) {
                                            $$je = $rt_wrapException($$e);
                                            if ($$je instanceof jl_Exception) {
                                                break b;
                                            } else {
                                                throw $$e;
                                            }
                                        }
                                    }
                                    try {
                                        jur_CharClass_add($res, $buffer, $cur);
                                    } catch ($$e) {
                                        $$je = $rt_wrapException($$e);
                                        if ($$je instanceof jl_Exception) {
                                            break b;
                                        } else {
                                            throw $$e;
                                        }
                                    }
                                    jur_Lexer_next($this.$lexemes);
                                    $buffer = (-1);
                                    break d;
                                }
                            }
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = 45;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870821:
                            if ($buffer >= 0) {
                                jur_CharClass_add0($res, $buffer);
                                $buffer = (-1);
                            }
                            jur_Lexer_next($this.$lexemes);
                            $negative = 0;
                            $cs = $this.$lexemes;
                            if ($cs.$ch == (-536870818)) {
                                jur_Lexer_next($cs);
                                $negative = 1;
                            }
                            if (!$intersection)
                                jur_CharClass_union($res, jur_Pattern_processRangeExpression($this, $negative));
                            else
                                jur_CharClass_intersection($res, jur_Pattern_processRangeExpression($this, $negative));
                            $intersection = 0;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870819:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = 93;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870818:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = 94;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case 0:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $cs = $this.$lexemes.$curST;
                            if ($cs === null)
                                $buffer = 0;
                            else {
                                jur_CharClass_add1($res, $cs);
                                $buffer = (-1);
                            }
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        default:
                    }
                    if ($buffer >= 0)
                        jur_CharClass_add0($res, $buffer);
                    $buffer = jur_Lexer_next($this.$lexemes);
                }
                $firstInClass = 0;
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Pattern_pattern($this), $this.$lexemes.$curToc));
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Pattern_pattern($this), $this.$lexemes.$curToc));
    }
    if (!$notClosed) {
        if ($buffer >= 0)
            jur_CharClass_add0($res, $buffer);
        return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Pattern_pattern($this), $this.$lexemes.$curToc - 1 | 0));
},
jur_Pattern_processCharSet = ($this, $ch) => {
    let $isSupplCodePoint, var$3, var$4;
    $isSupplCodePoint = jl_Character_isSupplementaryCodePoint($ch);
    if (jur_Pattern_hasFlag($this, 2)) {
        a: {
            if (!($ch >= 97 && $ch <= 122)) {
                if ($ch < 65)
                    break a;
                if ($ch > 90)
                    break a;
            }
            return jur_CICharSet__init_($ch & 65535);
        }
        if (jur_Pattern_hasFlag($this, 64) && $ch > 128) {
            if ($isSupplCodePoint) {
                var$3 = new jur_UCISupplCharSet;
                jur_LeafSet__init_(var$3);
                var$3.$charCount0 = 2;
                var$3.$ch3 = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
                return var$3;
            }
            if (jur_Lexer_isLowSurrogate($ch))
                return jur_LowSurrogateCharSet__init_($ch & 65535);
            if (!jur_Lexer_isHighSurrogate($ch))
                return jur_UCICharSet__init_($ch & 65535);
            return jur_HighSurrogateCharSet__init_($ch & 65535);
        }
    }
    if (!$isSupplCodePoint) {
        if (jur_Lexer_isLowSurrogate($ch))
            return jur_LowSurrogateCharSet__init_($ch & 65535);
        if (!jur_Lexer_isHighSurrogate($ch))
            return jur_CharSet__init_($ch & 65535);
        return jur_HighSurrogateCharSet__init_($ch & 65535);
    }
    var$3 = new jur_SupplCharSet;
    jur_LeafSet__init_(var$3);
    var$3.$charCount0 = 2;
    var$3.$ch1 = $ch;
    var$4 = (jl_Character_toChars($ch)).data;
    var$3.$high0 = var$4[0];
    var$3.$low0 = var$4[1];
    return var$3;
},
jur_Pattern_processRangeSet = ($this, $charClass) => {
    let $surrogates, $lowHighSurrRangeSet, var$4;
    if (!jur_AbstractCharClass_hasLowHighSurrogates($charClass)) {
        if (!$charClass.$mayContainSupplCodepoints) {
            if ($charClass.$hasUCI())
                return jur_UCIRangeSet__init_($charClass);
            return jur_RangeSet__init_($charClass);
        }
        if (!$charClass.$hasUCI())
            return jur_SupplRangeSet__init_0($charClass);
        $surrogates = new jur_UCISupplRangeSet;
        jur_SupplRangeSet__init_($surrogates, $charClass);
        return $surrogates;
    }
    $surrogates = jur_AbstractCharClass_getSurrogates($charClass);
    $lowHighSurrRangeSet = new jur_LowHighSurrogateRangeSet;
    jur_AbstractSet__init_($lowHighSurrRangeSet);
    $lowHighSurrRangeSet.$surrChars = $surrogates;
    $lowHighSurrRangeSet.$alt1 = $surrogates.$alt;
    if (!$charClass.$mayContainSupplCodepoints) {
        if ($charClass.$hasUCI())
            return jur_CompositeRangeSet__init_(jur_UCIRangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
        return jur_CompositeRangeSet__init_(jur_RangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
    }
    if (!$charClass.$hasUCI())
        return jur_CompositeRangeSet__init_(jur_SupplRangeSet__init_0(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
    $surrogates = new jur_CompositeRangeSet;
    var$4 = new jur_UCISupplRangeSet;
    jur_SupplRangeSet__init_(var$4, jur_AbstractCharClass_getWithoutSurrogates($charClass));
    jur_CompositeRangeSet__init_0($surrogates, var$4, $lowHighSurrRangeSet);
    return $surrogates;
},
jur_Pattern_compile = $pattern => {
    let var$2, var$3, var$4, var$5;
    if ($pattern === null) {
        $pattern = new jl_NullPointerException;
        jl_RuntimeException__init_($pattern, $rt_s(145));
        $rt_throw($pattern);
    }
    jur_AbstractSet_counter = 1;
    var$2 = new jur_Pattern;
    var$2.$backRefs = $rt_createArray(jur_FSet, 10);
    var$2.$globalGroupIndex = (-1);
    var$2.$compCount = (-1);
    var$2.$consCount = (-1);
    var$3 = new jur_Lexer;
    var$3.$mode = 1;
    var$3.$orig = $pattern;
    var$3.$pattern0 = $rt_createCharArray($pattern.$nativeString.length + 2 | 0);
    jl_System_fastArraycopy(jl_String_toCharArray($pattern), 0, var$3.$pattern0, 0, $pattern.$nativeString.length);
    var$4 = var$3.$pattern0.data;
    var$5 = var$4.length;
    var$4[var$5 - 1 | 0] = 0;
    var$4[var$5 - 2 | 0] = 0;
    var$3.$patternFullLength = var$5;
    var$3.$flags0 = 0;
    jur_Lexer_movePointer(var$3);
    jur_Lexer_movePointer(var$3);
    var$2.$lexemes = var$3;
    var$2.$flags = 0;
    var$2.$start1 = jur_Pattern_processExpression(var$2, (-1), 0, null);
    if (jur_Lexer_isEmpty(var$2.$lexemes)) {
        if (var$2.$needsBackRefReplacement)
            var$2.$start1.$processSecondPass();
        return var$2;
    }
    $pattern = new jur_PatternSyntaxException;
    var$2 = var$2.$lexemes;
    jur_PatternSyntaxException__init_0($pattern, $rt_s(13), var$2.$orig, var$2.$curToc);
    $rt_throw($pattern);
},
jur_Pattern_getSupplement = $ch => {
    if ($ch >= 97 && $ch <= 122)
        $ch = ($ch - 32 | 0) & 65535;
    else if ($ch >= 65 && $ch <= 90)
        $ch = ($ch + 32 | 0) & 65535;
    return $ch;
},
jur_Pattern_hasFlag = ($this, $flag) => {
    return ($this.$flags & $flag) != $flag ? 0 : 1;
},
jur_MatchResult = $rt_classWithoutFields(0);
function jur_Matcher() {
    let a = this; jl_Object.call(a);
    a.$pat = null;
    a.$start4 = null;
    a.$string0 = null;
    a.$matchResult = null;
    a.$leftBound0 = 0;
    a.$rightBound0 = 0;
    a.$appendPos = 0;
    a.$replacement0 = null;
    a.$processedRepl = null;
    a.$replacementParts = null;
}
let jur_Matcher_processReplacement = ($this, $replacement) => {
    let $res, $sb, $i, $repl, $index, $replacementPos, $nextBackSlashed, var$9, $gr, $group, $$je;
    $res = $this.$replacement0;
    if ($res !== null && jl_String_equals($res, $replacement)) {
        if ($this.$replacementParts === null)
            return $this.$processedRepl;
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($sb);
        $i = 0;
        while (true) {
            $replacement = $this.$replacementParts;
            if ($i >= $replacement.$size1)
                break;
            jl_StringBuilder_append($sb, ju_ArrayList_get($replacement, $i));
            $i = $i + 1 | 0;
        }
        return jl_AbstractStringBuilder_toString($sb);
    }
    $this.$replacement0 = $replacement;
    $repl = jl_String_toCharArray($replacement);
    $res = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($res);
    $this.$replacementParts = null;
    $index = 0;
    $replacementPos = 0;
    $nextBackSlashed = 0;
    a: {
        b: while (true) {
            var$9 = $repl.data;
            $i = var$9.length;
            if ($index >= $i) {
                $replacement = $this.$replacementParts;
                if ($replacement !== null) {
                    $gr = $res.$length1;
                    if ($replacementPos != $gr)
                        ju_ArrayList_add($replacement, jl_StringBuilder_subSequence($res, $replacementPos, $gr));
                }
                return jl_AbstractStringBuilder_toString($res);
            }
            if (var$9[$index] == 92 && !$nextBackSlashed) {
                $nextBackSlashed = 1;
                $index = $index + 1 | 0;
            }
            c: {
                if ($nextBackSlashed) {
                    if ($index >= $i)
                        break b;
                    jl_AbstractStringBuilder_append($res, var$9[$index]);
                    $nextBackSlashed = 0;
                } else if (var$9[$index] != 36)
                    jl_AbstractStringBuilder_append($res, var$9[$index]);
                else {
                    if ($this.$replacementParts === null)
                        $this.$replacementParts = ju_ArrayList__init_();
                    d: {
                        try {
                            $replacement = new jl_String;
                            $index = $index + 1 | 0;
                            jl_String__init_4($replacement, $repl, $index, 1);
                            $gr = jl_Integer_parseInt0($replacement);
                            if ($replacementPos == jl_StringBuilder_length($res))
                                break d;
                            ju_ArrayList_add($this.$replacementParts, jl_StringBuilder_subSequence($res, $replacementPos, jl_StringBuilder_length($res)));
                            $replacementPos = jl_StringBuilder_length($res);
                            break d;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_Exception) {
                                break a;
                            } else {
                                throw $$e;
                            }
                        }
                    }
                    try {
                        ju_ArrayList_add($this.$replacementParts, jur_Matcher$1__init_0($this, $gr));
                        $group = jur_Matcher_group($this, $gr);
                        $replacementPos = $replacementPos + jl_String_length($group) | 0;
                        jl_StringBuilder_append3($res, $group);
                        break c;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_Exception) {
                            break a;
                        } else {
                            throw $$e;
                        }
                    }
                }
            }
            $index = $index + 1 | 0;
        }
        $replacement = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($replacement);
        $rt_throw($replacement);
    }
    $replacement = new jl_IllegalArgumentException;
    jl_RuntimeException__init_($replacement, $rt_s(13));
    $rt_throw($replacement);
},
jur_Matcher_group = ($this, $group) => {
    let var$2, var$3, var$4;
    var$2 = $this.$matchResult;
    if (jur_MatchResultImpl_start(var$2, $group) < 0)
        var$2 = null;
    else {
        var$3 = var$2.$string3;
        var$4 = jur_MatchResultImpl_start(var$2, $group);
        $group = jur_MatchResultImpl_end0(var$2, $group);
        var$2 = jl_String_substring(var$3, var$4, $group);
    }
    return var$2;
},
jur_Matcher_find0 = ($this, $start) => {
    let $stringLength, var$3, var$4;
    $stringLength = $this.$string0.$nativeString.length;
    if ($start >= 0 && $start <= $stringLength) {
        jur_MatchResultImpl_reset($this.$matchResult, null, (-1), (-1));
        var$3 = $this.$matchResult;
        var$3.$mode0 = 1;
        var$3.$startIndex = $start;
        $stringLength = var$3.$previousMatch;
        if ($stringLength < 0)
            $stringLength = $start;
        var$3.$previousMatch = $stringLength;
        $start = $this.$start4.$find0($start, $this.$string0, var$3);
        if ($start == (-1))
            $this.$matchResult.$hitEnd = 1;
        if ($start >= 0) {
            var$3 = $this.$matchResult;
            if (var$3.$valid0) {
                var$4 = var$3.$groupBounds.data;
                if (var$4[0] == (-1)) {
                    $stringLength = var$3.$startIndex;
                    var$4[0] = $stringLength;
                    var$4[1] = $stringLength;
                }
                var$3.$previousMatch = jur_MatchResultImpl_end(var$3);
                return 1;
            }
        }
        $this.$matchResult.$startIndex = (-1);
        return 0;
    }
    var$3 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_(var$3, jl_String_valueOf0($start));
    $rt_throw(var$3);
},
jur_Matcher_find = $this => {
    let $length, var$2, var$3;
    $length = $this.$string0.$nativeString.length;
    var$2 = $this.$matchResult;
    if (!var$2.$transparentBounds)
        $length = $this.$rightBound0;
    if (var$2.$startIndex >= 0 && var$2.$mode0 == 1) {
        var$2.$startIndex = jur_MatchResultImpl_end(var$2);
        if (jur_MatchResultImpl_end($this.$matchResult) == jur_MatchResultImpl_start($this.$matchResult, 0)) {
            var$2 = $this.$matchResult;
            var$2.$startIndex = var$2.$startIndex + 1 | 0;
        }
        var$3 = $this.$matchResult.$startIndex;
        return var$3 <= $length && jur_Matcher_find0($this, var$3) ? 1 : 0;
    }
    return jur_Matcher_find0($this, $this.$leftBound0);
},
jur_Matcher_start = $this => {
    return jur_MatchResultImpl_start($this.$matchResult, 0);
},
jur_Matcher_end = $this => {
    return jur_MatchResultImpl_end0($this.$matchResult, 0);
},
otji_IDBFactory = $rt_classWithoutFields();
function cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_0() {
    jl_Object.call(this);
    this.$_03 = null;
}
let cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$2 = var$1.$_03.result;
    var$3 = otji_IDBObjectStoreParameters_create$js_body$_1();
    var$2.createObjectStore("FILE_DATA", var$3);
},
otji_EventHandler = $rt_classWithoutFields(0);
function cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_1() {
    let a = this; jl_Object.call(a);
    a.$_015 = null;
    a.$_17 = null;
    a.$_25 = null;
}
let cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_1_handleEvent$exported$0 = var$1 => {
    let var$2, var$3, var$4, var$5;
    var$1 = var$1;
    var$2 = var$1.$_015;
    var$3 = var$1.$_17;
    var$1 = var$1.$_25;
    var$3 = var$3.result;
    var$2.$dataBase = var$3;
    var$4 = var$3.transaction("FILE_DATA", "readonly");
    var$5 = var$4.objectStore("FILE_DATA").openCursor();
    var$3 = new cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_0;
    var$3.$_07 = var$2;
    var$3.$_13 = var$5;
    var$2 = otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent");
    var$5.onsuccess = var$2;
    var$2 = new cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_1;
    var$2.$_017 = var$1;
    var$3 = otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent");
    var$4.oncomplete = var$3;
    var$2 = new cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_2;
    var$2.$_0 = var$1;
    var$1 = otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent");
    var$5.onerror = var$1;
};
function cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_2() {
    let a = this; jl_Object.call(a);
    a.$_013 = null;
    a.$_16 = null;
}
let cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_2_handleEvent$exported$0 = var$1 => {
    let var$2, var$3, var$4;
    var$1 = var$1;
    var$2 = var$1.$_013;
    var$1 = var$1.$_16;
    var$3 = jl_System_err();
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(146)), var$2);
    var$4 = jl_AbstractStringBuilder_toString(var$4);
    otcic_JsConsolePrintStream_println(var$3, var$4);
    var$1.$delayInitCount = var$1.$delayInitCount - 1 | 0;
},
jl_SecurityException = $rt_classWithoutFields(jl_RuntimeException),
jl_ReflectiveOperationException = $rt_classWithoutFields(jl_Exception),
jl_NoSuchMethodException = $rt_classWithoutFields(jl_ReflectiveOperationException),
jur_RandomGenerator = $rt_classWithoutFields(0),
ju_Random = $rt_classWithoutFields(),
ju_Random_nextInt = $this => {
    return 4.294967296E9 * jl_Math_randomImpl() + (-2.147483648E9) | 0;
};
function cbgm_RandomXS128() {
    let a = this; ju_Random.call(a);
    a.$seed0 = Long_ZERO;
    a.$seed1 = Long_ZERO;
}
let cbgm_RandomXS128_murmurHash3 = $x => {
    $x = Long_mul(Long_xor($x, Long_shru($x, 33)), Long_create(3981806797, 4283543511));
    $x = Long_mul(Long_xor($x, Long_shru($x, 33)), Long_create(444984403, 3301882366));
    return Long_xor($x, Long_shru($x, 33));
},
ju_Enumeration = $rt_classWithoutFields(0),
ju_Hashtable$1 = $rt_classWithoutFields(),
ju_Iterator = $rt_classWithoutFields(0),
ju_Hashtable$2 = $rt_classWithoutFields();
function jur_MatchResultImpl() {
    let a = this; jl_Object.call(a);
    a.$groupBounds = null;
    a.$consumers = null;
    a.$compQuantCounters = null;
    a.$string3 = null;
    a.$groupCount = 0;
    a.$valid0 = 0;
    a.$leftBound = 0;
    a.$rightBound = 0;
    a.$startIndex = 0;
    a.$transparentBounds = 0;
    a.$anchoringBounds = 0;
    a.$hitEnd = 0;
    a.$requireEnd = 0;
    a.$previousMatch = 0;
    a.$mode0 = 0;
}
let jur_MatchResultImpl_setConsumed = ($this, $counter, $value) => {
    $this.$consumers.data[$counter] = $value;
},
jur_MatchResultImpl_getConsumed = ($this, $counter) => {
    return $this.$consumers.data[$counter];
},
jur_MatchResultImpl_end = $this => {
    return jur_MatchResultImpl_end0($this, 0);
},
jur_MatchResultImpl_end0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_setStart = ($this, $group, $offset) => {
    $this.$groupBounds.data[$group * 2 | 0] = $offset;
},
jur_MatchResultImpl_setEnd = ($this, $group, $offset) => {
    $this.$groupBounds.data[($group * 2 | 0) + 1 | 0] = $offset;
},
jur_MatchResultImpl_getStart = ($this, $group) => {
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnd = ($this, $group) => {
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_start = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnterCounter = ($this, $setCounter) => {
    return $this.$compQuantCounters.data[$setCounter];
},
jur_MatchResultImpl_setEnterCounter = ($this, $setCounter, $value) => {
    $this.$compQuantCounters.data[$setCounter] = $value;
},
jur_MatchResultImpl_checkGroup = ($this, $group) => {
    let var$2;
    if (!$this.$valid0) {
        var$2 = new jl_IllegalStateException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    if ($group >= 0 && $group < $this.$groupCount)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_(var$2, jl_String_valueOf0($group));
    $rt_throw(var$2);
},
jur_MatchResultImpl_reset = ($this, $newSequence, $leftBound, $rightBound) => {
    $this.$valid0 = 0;
    $this.$mode0 = 2;
    ju_Arrays_fill($this.$groupBounds, (-1));
    ju_Arrays_fill($this.$consumers, (-1));
    if ($newSequence !== null)
        $this.$string3 = $newSequence;
    if ($leftBound >= 0) {
        $this.$leftBound = $leftBound;
        $this.$rightBound = $rightBound;
    }
    $this.$startIndex = $this.$leftBound;
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
jlr_Modifier = $rt_classWithoutFields(),
jlr_Modifier_modifierNames = null,
jlr_Modifier_canonicalOrder = null,
jlr_Modifier_isPublic = $mod => {
    return !($mod & 1) ? 0 : 1;
},
jlr_Modifier__clinit_ = () => {
    jlr_Modifier_canonicalOrder = $rt_createIntArrayFromData([1, 4, 2, 1024, 8, 16, 128, 64, 32, 256, 2048, 512]);
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf1 = ($array, $length) => {
    let $result, var$4, $sz, $i;
    $array = $array.data;
    $result = $rt_createCharArray($length);
    var$4 = $result.data;
    $sz = jl_Math_min($length, $array.length);
    $i = 0;
    while ($i < $sz) {
        var$4[$i] = $array[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf = ($array, $length) => {
    let $result, var$4, $sz, $i;
    $array = $array.data;
    $result = $rt_createByteArray($length);
    var$4 = $result.data;
    $sz = jl_Math_min($length, $array.length);
    $i = 0;
    while ($i < $sz) {
        var$4[$i] = $array[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill0 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6, var$7;
    if ($fromIndex > $toIndex) {
        var$5 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$5);
        $rt_throw(var$5);
    }
    while ($fromIndex < $toIndex) {
        var$6 = $a.data;
        var$7 = $fromIndex + 1 | 0;
        var$6[$fromIndex] = $val;
        $fromIndex = var$7;
    }
},
ju_Arrays_fill = ($a, $val) => {
    ju_Arrays_fill0($a, 0, $a.data.length, $val);
},
ju_Arrays_equals = ($a, $a2) => {
    let var$3, var$4, var$5, var$6, var$7;
    if ($a === $a2)
        return 1;
    if ($a !== null && $a2 !== null) {
        $a = $a.data;
        $a2 = $a2.data;
        var$3 = $a.length;
        if (var$3 == $a2.length) {
            var$4 = 0;
            a: {
                while (true) {
                    if (var$4 >= var$3) {
                        var$4 = (-1);
                        break a;
                    }
                    var$5 = var$4 + 0 | 0;
                    var$6 = $a[var$5];
                    var$7 = $a2[var$5];
                    if (!(var$6 === var$7 ? 1 : var$6 !== null ? jl_Object_equals(var$6, var$7) : var$7 !== null ? 0 : 1))
                        break;
                    var$4 = var$4 + 1 | 0;
                }
            }
            return var$4 >= 0 ? 0 : 1;
        }
    }
    return 0;
},
jlr_AccessibleObject = $rt_classWithoutFields(),
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException);
function jur_AbstractSet() {
    let a = this; jl_Object.call(a);
    a.$next1 = null;
    a.$isSecondPassVisited = 0;
    a.$index2 = null;
    a.$type4 = 0;
}
let jur_AbstractSet_counter = 0,
jur_AbstractSet__init_ = $this => {
    let var$1;
    var$1 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$1 + 1 | 0;
    $this.$index2 = jl_Integer_toString(var$1);
},
jur_AbstractSet__init_0 = ($this, $n) => {
    let var$2;
    var$2 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$2 + 1 | 0;
    $this.$index2 = jl_Integer_toString(var$2);
    $this.$next1 = $n;
},
jur_AbstractSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $length;
    $length = $matchResult.$rightBound;
    while (true) {
        if ($stringIndex > $length)
            return (-1);
        if ($this.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_AbstractSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($this.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_AbstractSet_setType = ($this, $type) => {
    $this.$type4 = $type;
},
jur_AbstractSet_getType = $this => {
    return $this.$type4;
},
jur_AbstractSet_getQualifiedName = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$index2;
    var$2 = $this.$getName();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_AbstractStringBuilder_append(var$3, 60);
    var$1 = jl_StringBuilder_append(var$3, var$1);
    jl_AbstractStringBuilder_append(var$1, 58);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(var$1, var$2), 62);
    return jl_AbstractStringBuilder_toString(var$3);
},
jur_AbstractSet_toString = $this => {
    return jur_AbstractSet_getQualifiedName($this);
},
jur_AbstractSet_getNext = $this => {
    return $this.$next1;
},
jur_AbstractSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_AbstractSet_first = ($this, $set) => {
    return 1;
},
jur_AbstractSet_processBackRefReplacement = $this => {
    return null;
},
jur_AbstractSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$next1;
    if ($set !== null) {
        if (!$set.$isSecondPassVisited) {
            $set = $set.$processBackRefReplacement();
            if ($set !== null) {
                $this.$next1.$isSecondPassVisited = 1;
                $this.$next1 = $set;
            }
            $this.$next1.$processSecondPass();
        } else if ($set instanceof jur_SingleSet && $set.$fSet.$isBackReferenced)
            $this.$next1 = $set.$next1;
    }
},
jur_AbstractSet__clinit_ = () => {
    jur_AbstractSet_counter = 1;
},
jlr_Member = $rt_classWithoutFields(0);
function jlr_Constructor() {
    let a = this; jlr_AccessibleObject.call(a);
    a.$declaringClass = null;
    a.$name2 = null;
    a.$modifiers = 0;
    a.$accessLevel = 0;
    a.$parameterTypes = null;
    a.$caller = null;
}
let jlr_Constructor_getModifiers = $this => {
    let var$1, var$2, var$3;
    a: {
        var$1 = $this.$modifiers;
        var$2 = $this.$accessLevel;
        var$3 = 0;
        switch (var$2) {
            case 1:
                var$3 = 2;
                break a;
            case 2:
                var$3 = 4;
                break a;
            case 3:
                var$3 = 1;
                break a;
            default:
        }
    }
    var$2 = var$1 >>> 6 | 0;
    return var$3 | var$2 & 8 | var$1 << 2 & 16 | var$2 & 32 | (var$1 >>> 8 | 0) & 64 | (var$1 >>> 5 | 0) & 128 | var$1 & 256 | var$1 << 8 & 512 | var$1 << 10 & 1024 | var$1 << 1 & 2048;
},
jlr_Constructor_getParameterTypes = $this => {
    return $this.$parameterTypes.$clone0();
},
jlr_Constructor_toString = $this => {
    let $sb, $i, var$3, $parameterTypes, var$5, var$6, var$7, var$8, var$9;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    $i = jlr_Constructor_getModifiers($this);
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    if (jlr_Modifier_modifierNames === null)
        jlr_Modifier_modifierNames = $rt_wrapArray(jl_String, [$rt_s(147), $rt_s(148), $rt_s(149), $rt_s(150), $rt_s(151), $rt_s(152), $rt_s(153), $rt_s(154), $rt_s(155), $rt_s(156), $rt_s(157), $rt_s(158)]);
    $parameterTypes = jlr_Modifier_modifierNames;
    var$5 = 0;
    var$6 = jlr_Modifier_canonicalOrder.data;
    var$7 = var$6.length;
    var$8 = 0;
    while (var$8 < var$7) {
        var$9 = var$6[var$8];
        if ($i & var$9) {
            if (var$3.$length1 > 0)
                jl_AbstractStringBuilder_append(var$3, 32);
            jl_AbstractStringBuilder_append0(var$3, $parameterTypes.data[var$5]);
        }
        var$5 = var$5 + 1 | 0;
        var$8 = var$8 + 1 | 0;
    }
    jl_AbstractStringBuilder_append0($sb, jl_AbstractStringBuilder_toString(var$3));
    if ($sb.$length1 > 0)
        jl_AbstractStringBuilder_append($sb, 32);
    jl_AbstractStringBuilder_append0($sb, jl_Class_getName($this.$declaringClass));
    jl_AbstractStringBuilder_append($sb, 40);
    $parameterTypes = jlr_Constructor_getParameterTypes($this);
    $i = 0;
    while (true) {
        var$6 = $parameterTypes.data;
        if ($i >= var$6.length)
            break;
        if ($i > 0)
            jl_AbstractStringBuilder_append($sb, 44);
        jl_AbstractStringBuilder_append0($sb, jl_Class_getName(var$6[$i]));
        $i = $i + 1 | 0;
    }
    jl_AbstractStringBuilder_append($sb, 41);
    return jl_AbstractStringBuilder_toString($sb);
},
otcir_MethodCaller = $rt_classWithoutFields(0),
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_Hashtable$Entry() {
    let a = this; ju_MapEntry.call(a);
    a.$next3 = null;
    a.$hashcode = 0;
}
function jur_FSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$isBackReferenced = 0;
    a.$groupIndex0 = 0;
}
let jur_FSet_posFSet = null,
jur_FSet_$callClinit = () => {
    jur_FSet_$callClinit = $rt_eraseClinit(jur_FSet);
    jur_FSet__clinit_();
},
jur_FSet__init_ = ($this, $groupIndex) => {
    jur_FSet_$callClinit();
    jur_AbstractSet__init_($this);
    $this.$groupIndex0 = $groupIndex;
},
jur_FSet__init_0 = var_0 => {
    let var_1 = new jur_FSet();
    jur_FSet__init_(var_1, var_0);
    return var_1;
},
jur_FSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $end, $shift;
    $end = jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex0);
    jur_MatchResultImpl_setEnd($matchResult, $this.$groupIndex0, $stringIndex);
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        jur_MatchResultImpl_setEnd($matchResult, $this.$groupIndex0, $end);
    return $shift;
},
jur_FSet_getGroupIndex = $this => {
    return $this.$groupIndex0;
},
jur_FSet_getName = $this => {
    return $rt_s(159);
},
jur_FSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FSet__clinit_ = () => {
    let var$1;
    var$1 = new jur_FSet$PossessiveFSet;
    jur_AbstractSet__init_(var$1);
    jur_FSet_posFSet = var$1;
};
function jur_Lexer() {
    let a = this; jl_Object.call(a);
    a.$pattern0 = null;
    a.$flags0 = 0;
    a.$mode = 0;
    a.$savedMode = 0;
    a.$lookBack = 0;
    a.$ch = 0;
    a.$lookAhead = 0;
    a.$patternFullLength = 0;
    a.$curST = null;
    a.$lookAheadST = null;
    a.$index = 0;
    a.$prevNW = 0;
    a.$curToc = 0;
    a.$lookAheadToc = 0;
    a.$orig = null;
}
let jur_Lexer_decompTable = null,
jur_Lexer_singleDecompTable = null,
jur_Lexer_singleDecompTableSize = 0,
jur_Lexer_setMode = ($this, $mode) => {
    if ($mode > 0 && $mode < 3)
        $this.$mode = $mode;
    if ($mode == 1) {
        $this.$lookAhead = $this.$ch;
        $this.$lookAheadST = $this.$curST;
        $this.$index = $this.$lookAheadToc;
        $this.$lookAheadToc = $this.$curToc;
        jur_Lexer_movePointer($this);
    }
},
jur_Lexer_isSpecial = $this => {
    return $this.$curST === null ? 0 : 1;
},
jur_Lexer_isNextSpecial = $this => {
    return $this.$lookAheadST === null ? 0 : 1;
},
jur_Lexer_next = $this => {
    jur_Lexer_movePointer($this);
    return $this.$lookBack;
},
jur_Lexer_nextSpecial = $this => {
    let $res;
    $res = $this.$curST;
    jur_Lexer_movePointer($this);
    return $res;
},
jur_Lexer_movePointer = $this => {
    let $reread, $nonCap, var$3, $behind, $mod, $cs, $negative, $$je;
    $this.$lookBack = $this.$ch;
    $this.$ch = $this.$lookAhead;
    $this.$curST = $this.$lookAheadST;
    $this.$curToc = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$index;
    while (true) {
        $reread = 0;
        $nonCap = $this.$index >= $this.$pattern0.data.length ? 0 : jur_Lexer_nextCodePoint($this);
        $this.$lookAhead = $nonCap;
        $this.$lookAheadST = null;
        if ($this.$mode == 4) {
            if ($nonCap != 92)
                return;
            $nonCap = $this.$index;
            var$3 = $this.$pattern0.data;
            $nonCap = $nonCap >= var$3.length ? 0 : var$3[jur_Lexer_nextIndex($this)];
            $this.$lookAhead = $nonCap;
            switch ($nonCap) {
                case 69:
                    break;
                default:
                    $this.$lookAhead = 92;
                    $this.$index = $this.$prevNW;
                    return;
            }
            $this.$mode = $this.$savedMode;
            $this.$lookAhead = $this.$index > ($this.$pattern0.data.length - 2 | 0) ? 0 : jur_Lexer_nextCodePoint($this);
        }
        a: {
            $nonCap = $this.$lookAhead;
            if ($nonCap != 92) {
                $behind = $this.$mode;
                if ($behind == 1)
                    switch ($nonCap) {
                        case 36:
                            $this.$lookAhead = (-536870876);
                            break a;
                        case 40:
                            if ($this.$pattern0.data[$this.$index] != 63) {
                                $this.$lookAhead = (-2147483608);
                                break a;
                            }
                            jur_Lexer_nextIndex($this);
                            $nonCap = $this.$pattern0.data[$this.$index];
                            $behind = 0;
                            while (true) {
                                b: {
                                    if ($behind) {
                                        $behind = 0;
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 61:
                                                $this.$lookAhead = (-134217688);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            default:
                                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Lexer_toString($this), $this.$index));
                                        }
                                        $this.$lookAhead = (-67108824);
                                        jur_Lexer_nextIndex($this);
                                    } else {
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 60:
                                                jur_Lexer_nextIndex($this);
                                                $nonCap = $this.$pattern0.data[$this.$index];
                                                $behind = 1;
                                                break b;
                                            case 61:
                                                $this.$lookAhead = (-536870872);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            case 62:
                                                $this.$lookAhead = (-33554392);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            default:
                                                $mod = jur_Lexer_readFlags($this);
                                                $this.$lookAhead = $mod;
                                                if ($mod < 256) {
                                                    $this.$flags0 = $mod;
                                                    $mod = $mod << 16;
                                                    $this.$lookAhead = $mod;
                                                    $this.$lookAhead = (-1073741784) | $mod;
                                                    break b;
                                                }
                                                $mod = $mod & 255;
                                                $this.$lookAhead = $mod;
                                                $this.$flags0 = $mod;
                                                $mod = $mod << 16;
                                                $this.$lookAhead = $mod;
                                                $this.$lookAhead = (-16777176) | $mod;
                                                break b;
                                        }
                                        $this.$lookAhead = (-268435416);
                                        jur_Lexer_nextIndex($this);
                                    }
                                }
                                if (!$behind)
                                    break;
                            }
                            break a;
                        case 41:
                            $this.$lookAhead = (-536870871);
                            break a;
                        case 42:
                        case 43:
                        case 63:
                            $behind = $this.$index;
                            var$3 = $this.$pattern0.data;
                            switch ($behind >= var$3.length ? 42 : var$3[$behind]) {
                                case 43:
                                    $this.$lookAhead = $nonCap | (-2147483648);
                                    jur_Lexer_nextIndex($this);
                                    break a;
                                case 63:
                                    $this.$lookAhead = $nonCap | (-1073741824);
                                    jur_Lexer_nextIndex($this);
                                    break a;
                                default:
                            }
                            $this.$lookAhead = $nonCap | (-536870912);
                            break a;
                        case 46:
                            $this.$lookAhead = (-536870866);
                            break a;
                        case 91:
                            $this.$lookAhead = (-536870821);
                            jur_Lexer_setMode($this, 2);
                            break a;
                        case 93:
                            if ($behind != 2)
                                break a;
                            $this.$lookAhead = (-536870819);
                            break a;
                        case 94:
                            $this.$lookAhead = (-536870818);
                            break a;
                        case 123:
                            $this.$lookAheadST = jur_Lexer_processQuantifier($this, $nonCap);
                            break a;
                        case 124:
                            $this.$lookAhead = (-536870788);
                            break a;
                        default:
                    }
                else if ($behind == 2)
                    switch ($nonCap) {
                        case 38:
                            $this.$lookAhead = (-536870874);
                            break a;
                        case 45:
                            $this.$lookAhead = (-536870867);
                            break a;
                        case 91:
                            $this.$lookAhead = (-536870821);
                            break a;
                        case 93:
                            $this.$lookAhead = (-536870819);
                            break a;
                        case 94:
                            $this.$lookAhead = (-536870818);
                            break a;
                        default:
                    }
            } else {
                $nonCap = $this.$index >= ($this.$pattern0.data.length - 2 | 0) ? (-1) : jur_Lexer_nextCodePoint($this);
                c: {
                    $this.$lookAhead = $nonCap;
                    switch ($nonCap) {
                        case -1:
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Lexer_toString($this), $this.$index));
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                        case 41:
                        case 42:
                        case 43:
                        case 44:
                        case 45:
                        case 46:
                        case 47:
                        case 58:
                        case 59:
                        case 60:
                        case 61:
                        case 62:
                        case 63:
                        case 64:
                        case 91:
                        case 92:
                        case 93:
                        case 94:
                        case 95:
                        case 96:
                        case 118:
                            break;
                        case 48:
                            $this.$lookAhead = jur_Lexer_readOctals($this);
                            break a;
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            if ($this.$mode != 1)
                                break a;
                            $this.$lookAhead = (-2147483648) | $nonCap;
                            break a;
                        case 65:
                            $this.$lookAhead = (-2147483583);
                            break a;
                        case 66:
                            $this.$lookAhead = (-2147483582);
                            break a;
                        case 67:
                        case 69:
                        case 70:
                        case 72:
                        case 73:
                        case 74:
                        case 75:
                        case 76:
                        case 77:
                        case 78:
                        case 79:
                        case 82:
                        case 84:
                        case 85:
                        case 86:
                        case 88:
                        case 89:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                        case 107:
                        case 108:
                        case 109:
                        case 111:
                        case 113:
                        case 121:
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Lexer_toString($this), $this.$index));
                        case 68:
                        case 83:
                        case 87:
                        case 100:
                        case 115:
                        case 119:
                            $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass(jl_String__init_0($this.$pattern0, $this.$prevNW, 1), 0);
                            $this.$lookAhead = 0;
                            break a;
                        case 71:
                            $this.$lookAhead = (-2147483577);
                            break a;
                        case 80:
                        case 112:
                            break c;
                        case 81:
                            $this.$savedMode = $this.$mode;
                            $this.$mode = 4;
                            $reread = 1;
                            break a;
                        case 90:
                            $this.$lookAhead = (-2147483558);
                            break a;
                        case 97:
                            $this.$lookAhead = 7;
                            break a;
                        case 98:
                            $this.$lookAhead = (-2147483550);
                            break a;
                        case 99:
                            $nonCap = $this.$index;
                            var$3 = $this.$pattern0.data;
                            if ($nonCap >= (var$3.length - 2 | 0))
                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Lexer_toString($this), $this.$index));
                            $this.$lookAhead = var$3[jur_Lexer_nextIndex($this)] & 31;
                            break a;
                        case 101:
                            $this.$lookAhead = 27;
                            break a;
                        case 102:
                            $this.$lookAhead = 12;
                            break a;
                        case 110:
                            $this.$lookAhead = 10;
                            break a;
                        case 114:
                            $this.$lookAhead = 13;
                            break a;
                        case 116:
                            $this.$lookAhead = 9;
                            break a;
                        case 117:
                            $this.$lookAhead = jur_Lexer_readHex($this, 4);
                            break a;
                        case 120:
                            $this.$lookAhead = jur_Lexer_readHex($this, 2);
                            break a;
                        case 122:
                            $this.$lookAhead = (-2147483526);
                            break a;
                        default:
                    }
                    break a;
                }
                $cs = jur_Lexer_parseCharClassName($this);
                $negative = 0;
                if ($this.$lookAhead == 80)
                    $negative = 1;
                try {
                    $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass($cs, $negative);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof ju_MissingResourceException) {
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), jur_Lexer_toString($this), $this.$index));
                    } else {
                        throw $$e;
                    }
                }
                $this.$lookAhead = 0;
            }
        }
        if ($reread)
            continue;
        else
            break;
    }
},
jur_Lexer_parseCharClassName = $this => {
    let $sb, $ch, var$3, var$4, $res, var$6;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($sb, 10);
    $ch = $this.$index;
    var$3 = $this.$pattern0;
    var$4 = var$3.data;
    if ($ch < (var$4.length - 2 | 0)) {
        if (var$4[$ch] != 123) {
            $sb = jl_String__init_0(var$3, jur_Lexer_nextIndex($this), 1);
            $res = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($res);
            jl_StringBuilder_append(jl_StringBuilder_append($res, $rt_s(160)), $sb);
            return jl_AbstractStringBuilder_toString($res);
        }
        jur_Lexer_nextIndex($this);
        $ch = 0;
        a: {
            while (true) {
                var$6 = $this.$index;
                var$3 = $this.$pattern0.data;
                if (var$6 >= (var$3.length - 2 | 0))
                    break;
                $ch = var$3[jur_Lexer_nextIndex($this)];
                if ($ch == 125)
                    break a;
                jl_AbstractStringBuilder_append($sb, $ch);
            }
        }
        if ($ch != 125)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
    }
    if (!$sb.$length1)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
    $res = jl_AbstractStringBuilder_toString($sb);
    if ($res.$nativeString.length == 1) {
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($sb);
        jl_StringBuilder_append(jl_StringBuilder_append($sb, $rt_s(160)), $res);
        return jl_AbstractStringBuilder_toString($sb);
    }
    b: {
        c: {
            if ($res.$nativeString.length > 3) {
                if (jl_String_startsWith($res, $rt_s(160)))
                    break c;
                if (jl_String_startsWith($res, $rt_s(161)))
                    break c;
            }
            break b;
        }
        $res = jl_String_substring0($res, 2);
    }
    return $res;
},
jur_Lexer_processQuantifier = ($this, $ch) => {
    let $sb, $min, $max, $mod, var$6, $$je;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($sb, 4);
    $min = (-1);
    $max = 2147483647;
    a: {
        while (true) {
            $mod = $this.$index;
            var$6 = $this.$pattern0.data;
            if ($mod >= var$6.length)
                break a;
            $ch = var$6[jur_Lexer_nextIndex($this)];
            if ($ch == 125)
                break a;
            if ($ch == 44 && $min < 0)
                try {
                    $min = jl_Integer_parseInt(jl_StringBuilder_toString($sb), 10);
                    jl_StringBuilder_delete($sb, 0, jl_StringBuilder_length($sb));
                    continue;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_NumberFormatException) {
                        break;
                    } else {
                        throw $$e;
                    }
                }
            jl_AbstractStringBuilder_append($sb, $ch & 65535);
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
    }
    if ($ch != 125)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
    if ($sb.$length1 > 0)
        b: {
            try {
                $max = jl_Integer_parseInt(jl_StringBuilder_toString($sb), 10);
                if ($min >= 0)
                    break b;
                $min = $max;
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                } else {
                    throw $$e;
                }
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
        }
    else if ($min < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
    if (($min | $max | ($max - $min | 0)) < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
    $ch = $this.$index;
    var$6 = $this.$pattern0.data;
    $mod = $ch >= var$6.length ? 42 : var$6[$ch];
    c: {
        switch ($mod) {
            case 43:
                $this.$lookAhead = (-2147483525);
                jur_Lexer_nextIndex($this);
                break c;
            case 63:
                $this.$lookAhead = (-1073741701);
                jur_Lexer_nextIndex($this);
                break c;
            default:
        }
        $this.$lookAhead = (-536870789);
    }
    $sb = new jur_Quantifier;
    $sb.$min0 = $min;
    $sb.$max0 = $max;
    return $sb;
},
jur_Lexer_toString = $this => {
    return $this.$orig;
},
jur_Lexer_isEmpty = $this => {
    return !$this.$ch && !$this.$lookAhead && $this.$index == $this.$patternFullLength && !jur_Lexer_isSpecial($this) ? 1 : 0;
},
jur_Lexer_isLetter0 = $ch => {
    return $ch < 0 ? 0 : 1;
},
jur_Lexer_isLetter = $this => {
    return !jur_Lexer_isEmpty($this) && !jur_Lexer_isSpecial($this) && jur_Lexer_isLetter0($this.$ch) ? 1 : 0;
},
jur_Lexer_isHighSurrogate0 = $this => {
    let var$1;
    var$1 = $this.$ch;
    return var$1 <= 56319 && var$1 >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate0 = $this => {
    let var$1;
    var$1 = $this.$ch;
    return var$1 <= 57343 && var$1 >= 56320 ? 1 : 0;
},
jur_Lexer_isHighSurrogate = $ch => {
    return $ch <= 56319 && $ch >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate = $ch => {
    return $ch <= 57343 && $ch >= 56320 ? 1 : 0;
},
jur_Lexer_readHex = ($this, $max) => {
    let $st, $length, $i, var$5, $$je;
    $st = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($st, $max);
    $length = $this.$pattern0.data.length - 2 | 0;
    $i = 0;
    while (true) {
        var$5 = $rt_compare($i, $max);
        if (var$5 >= 0)
            break;
        if ($this.$index >= $length)
            break;
        jl_AbstractStringBuilder_append($st, $this.$pattern0.data[jur_Lexer_nextIndex($this)]);
        $i = $i + 1 | 0;
    }
    if (!var$5)
        a: {
            try {
                $max = jl_Integer_parseInt(jl_StringBuilder_toString($st), 16);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return $max;
        }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
},
jur_Lexer_readOctals = $this => {
    let $max, $i, var$3, $length, $res, var$6;
    $max = 3;
    $i = 1;
    var$3 = $this.$pattern0.data;
    $length = var$3.length - 2 | 0;
    $res = jl_Character_digit(var$3[$this.$index], 8);
    switch ($res) {
        case -1:
            break;
        default:
            if ($res > 3)
                $max = 2;
            jur_Lexer_nextIndex($this);
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    var$6 = $this.$index;
                    if (var$6 >= $length)
                        break a;
                    var$6 = jl_Character_digit($this.$pattern0.data[var$6], 8);
                    if (var$6 < 0)
                        break;
                    $res = ($res * 8 | 0) + var$6 | 0;
                    jur_Lexer_nextIndex($this);
                    $i = $i + 1 | 0;
                }
            }
            return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, $this.$index));
},
jur_Lexer_readFlags = $this => {
    let $pos, $res, var$3, var$4;
    $pos = 1;
    $res = $this.$flags0;
    a: while (true) {
        var$3 = $this.$index;
        var$4 = $this.$pattern0.data;
        if (var$3 >= var$4.length)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, var$3));
        b: {
            c: {
                switch (var$4[var$3]) {
                    case 41:
                        jur_Lexer_nextIndex($this);
                        return $res | 256;
                    case 45:
                        if (!$pos)
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(13), $this.$orig, var$3));
                        $pos = 0;
                        break b;
                    case 58:
                        break a;
                    case 100:
                        break c;
                    case 105:
                        $res = $pos ? $res | 2 : ($res ^ 2) & $res;
                        break b;
                    case 109:
                        $res = $pos ? $res | 8 : ($res ^ 8) & $res;
                        break b;
                    case 115:
                        $res = $pos ? $res | 32 : ($res ^ 32) & $res;
                        break b;
                    case 117:
                        $res = $pos ? $res | 64 : ($res ^ 64) & $res;
                        break b;
                    case 120:
                        $res = $pos ? $res | 4 : ($res ^ 4) & $res;
                        break b;
                    default:
                }
                break b;
            }
            $res = $pos ? $res | 1 : ($res ^ 1) & $res;
        }
        jur_Lexer_nextIndex($this);
    }
    jur_Lexer_nextIndex($this);
    return $res;
},
jur_Lexer_nextIndex = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = $this.$index;
    $this.$prevNW = var$1;
    if (!($this.$flags0 & 4))
        $this.$index = var$1 + 1 | 0;
    else {
        var$2 = $this.$pattern0.data.length - 2 | 0;
        $this.$index = var$1 + 1 | 0;
        a: while (true) {
            var$3 = $this.$index;
            if (var$3 < var$2 && jl_Character_isWhitespace($this.$pattern0.data[var$3])) {
                $this.$index = $this.$index + 1 | 0;
                continue;
            }
            var$3 = $this.$index;
            if (var$3 >= var$2)
                break;
            var$4 = $this.$pattern0.data;
            if (var$4[var$3] != 35)
                break;
            $this.$index = var$3 + 1 | 0;
            while (true) {
                var$5 = $this.$index;
                if (var$5 >= var$2)
                    continue a;
                var$1 = var$4[var$5];
                if (var$1 != 10 && var$1 != 13 && var$1 != 133 && (var$1 | 1) != 8233 ? 0 : 1)
                    continue a;
                $this.$index = var$5 + 1 | 0;
            }
        }
    }
    return $this.$prevNW;
},
jur_Lexer_getDecomposition = $ch => {
    return jur_Lexer_decompTable.$get5($ch);
},
jur_Lexer_nextCodePoint = $this => {
    let $high, $lowExpectedIndex, var$3, $low;
    $high = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
    if (jl_Character_isHighSurrogate($high)) {
        $lowExpectedIndex = $this.$prevNW + 1 | 0;
        var$3 = $this.$pattern0.data;
        if ($lowExpectedIndex < var$3.length) {
            $low = var$3[$lowExpectedIndex];
            if (jl_Character_isLowSurrogate($low)) {
                jur_Lexer_nextIndex($this);
                return jl_Character_toCodePoint($high, $low);
            }
        }
    }
    return $high;
},
jur_Lexer_getIndex = $this => {
    return $this.$curToc;
};
function jur_PatternSyntaxException() {
    let a = this; jl_IllegalArgumentException.call(a);
    a.$desc = null;
    a.$pattern1 = null;
    a.$index1 = 0;
}
let jur_PatternSyntaxException__init_0 = ($this, $description, $pattern, $index) => {
    jl_Exception__init_($this);
    $this.$index1 = (-1);
    $this.$desc = $description;
    $this.$pattern1 = $pattern;
    $this.$index1 = $index;
},
jur_PatternSyntaxException__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jur_PatternSyntaxException();
    jur_PatternSyntaxException__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PatternSyntaxException_getMessage = $this => {
    let $filler, var$2, $temp, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    $filler = $rt_s(13);
    var$2 = $this.$index1;
    if (var$2 >= 1) {
        $temp = $rt_createCharArray(var$2);
        var$4 = $temp.data;
        var$2 = 0;
        var$5 = var$4.length;
        if (var$2 > var$5) {
            $filler = new jl_IllegalArgumentException;
            jl_Exception__init_($filler);
            $rt_throw($filler);
        }
        while (var$2 < var$5) {
            var$6 = var$2 + 1 | 0;
            var$4[var$2] = 32;
            var$2 = var$6;
        }
        $filler = jl_String__init_($temp);
    }
    var$7 = $this.$desc;
    var$8 = $this.$pattern1;
    if (var$8 !== null && var$8.$nativeString.length) {
        var$9 = $this.$index1;
        var$8 = $this.$pattern1;
        var$10 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$10);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(var$10, var$9), $rt_s(112)), var$8), $rt_s(112)), $filler);
        $filler = jl_AbstractStringBuilder_toString(var$10);
    } else
        $filler = $rt_s(13);
    var$8 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$8);
    jl_StringBuilder_append(jl_StringBuilder_append(var$8, var$7), $filler);
    return jl_AbstractStringBuilder_toString(var$8);
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = var$1 => {
    if (var$1 === null || var$1.constructor.$meta.item === 'undefined') {
        $rt_throw(jl_IllegalArgumentException__init_());
    }
    return var$1.data.length;
},
jlr_Array_newInstance = (var$1, $length) => {
    if (var$1 === null) {
        var$1 = new jl_NullPointerException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    if (var$1 === $rt_cls($rt_voidcls)) {
        var$1 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    if ($length >= 0)
        return jlr_Array_newInstanceImpl(var$1.$platformClass, $length);
    var$1 = new jl_NegativeArraySizeException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
},
jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception);
function otcir_MethodCaller$forJs$lambda$_1_0() {
    jl_Object.call(this);
    this.$_019 = null;
}
let ju_SequencedCollection = $rt_classWithoutFields(0),
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList_iterator = $this => {
    let var$1;
    var$1 = new ju_AbstractList$1;
    var$1.$this$08 = $this;
    var$1.$modCount1 = $this.$modCount;
    var$1.$size7 = $this.$size1;
    var$1.$removeIndex0 = (-1);
    return var$1;
},
ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array1 = null;
    a.$size1 = 0;
}
let ju_ArrayList__init_0 = $this => {
    $this.$array1 = $rt_createArray(jl_Object, 10);
},
ju_ArrayList__init_ = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_0(var_0);
    return var_0;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let var$2, $newLength;
    var$2 = $this.$array1.data.length;
    if (var$2 < $minCapacity) {
        $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max(var$2 * 2 | 0, 5));
        $this.$array1 = ju_Arrays_copyOf0($this.$array1, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array1.data[$index];
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    ju_ArrayList_ensureCapacity($this, $this.$size1 + 1 | 0);
    var$2 = $this.$array1.data;
    var$3 = $this.$size1;
    $this.$size1 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_remove = ($this, $i) => {
    let var$2, $old, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    var$2 = $this.$array1.data;
    $old = var$2[$i];
    var$4 = $this.$size1 - 1 | 0;
    $this.$size1 = var$4;
    while ($i < var$4) {
        $i_0 = $i + 1 | 0;
        var$2[$i] = var$2[$i_0];
        $i = $i_0;
    }
    var$2[var$4] = null;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $old;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$size1)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jur_NonCapFSet = $rt_classWithoutFields(jur_FSet),
jur_NonCapFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$groupIndex0;
    jur_MatchResultImpl_setConsumed($matchResult, $gr, $stringIndex - jur_MatchResultImpl_getConsumed($matchResult, $gr) | 0);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_NonCapFSet_getName = $this => {
    return $rt_s(162);
},
jur_NonCapFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_AheadFSet = $rt_classWithoutFields(jur_FSet),
jur_AheadFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_AheadFSet_getName = $this => {
    return $rt_s(163);
},
jur_BehindFSet = $rt_classWithoutFields(jur_FSet),
jur_BehindFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if (jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex0) != $stringIndex)
        $stringIndex = (-1);
    return $stringIndex;
},
jur_BehindFSet_getName = $this => {
    return $rt_s(164);
};
function jur_AtomicFSet() {
    jur_FSet.call(this);
    this.$index4 = 0;
}
let jur_AtomicFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$groupIndex0;
    jur_MatchResultImpl_setConsumed($matchResult, $gr, $stringIndex - jur_MatchResultImpl_getConsumed($matchResult, $gr) | 0);
    $this.$index4 = $stringIndex;
    return $stringIndex;
},
jur_AtomicFSet_getName = $this => {
    return $rt_s(165);
},
jur_AtomicFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FinalSet = $rt_classWithoutFields(jur_FSet),
jur_FinalSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($matchResult.$mode0 != 1 && $stringIndex != $matchResult.$rightBound)
        return (-1);
    $matchResult.$valid0 = 1;
    jur_MatchResultImpl_setEnd($matchResult, 0, $stringIndex);
    return $stringIndex;
},
jur_FinalSet_getName = $this => {
    return $rt_s(166);
};
function jur_LeafSet() {
    jur_AbstractSet.call(this);
    this.$charCount0 = 0;
}
let jur_LeafSet__init_ = $this => {
    jur_AbstractSet__init_($this);
    $this.$charCount0 = 1;
},
jur_LeafSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    if (($stringIndex + $this.$charCount() | 0) > $matchResult.$rightBound) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $shift = $this.$accepts($stringIndex, $testString);
    if ($shift < 0)
        return (-1);
    return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
},
jur_LeafSet_charCount = $this => {
    return $this.$charCount0;
},
jur_LeafSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_EmptySet = $rt_classWithoutFields(jur_LeafSet),
jur_EmptySet__init_0 = ($this, $next) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$charCount0 = 1;
    $this.$type4 = 1;
    $this.$charCount0 = 0;
},
jur_EmptySet__init_ = var_0 => {
    let var_1 = new jur_EmptySet();
    jur_EmptySet__init_0(var_1, var_0);
    return var_1;
},
jur_EmptySet_accepts = ($this, $stringIndex, $testString) => {
    return 0;
},
jur_EmptySet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startStr, var$6, $high;
    $strLength = $matchResult.$rightBound;
    $startStr = $matchResult.$leftBound;
    var$6 = $testString;
    while (true) {
        $high = $rt_compare($stringIndex, $strLength);
        if ($high > 0)
            return (-1);
        if ($high < 0 && jl_Character_isLowSurrogate(jl_String_charAt(var$6, $stringIndex)) && $stringIndex > $startStr && jl_Character_isHighSurrogate(jl_String_charAt(var$6, $stringIndex - 1 | 0))) {
            $stringIndex = $stringIndex + 1 | 0;
            continue;
        }
        if ($this.$next1.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_EmptySet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $strLength, $startStr, var$7;
    $strLength = $matchResult.$rightBound;
    $startStr = $matchResult.$leftBound;
    var$7 = $testString;
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($startSearch < $strLength && jl_Character_isLowSurrogate(jl_String_charAt(var$7, $startSearch)) && $startSearch > $startStr && jl_Character_isHighSurrogate(jl_String_charAt(var$7, $startSearch - 1 | 0))) {
            $startSearch = $startSearch + (-1) | 0;
            continue;
        }
        if ($this.$next1.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_EmptySet_getName = $this => {
    return $rt_s(167);
},
jur_EmptySet_hasConsumed = ($this, $mr) => {
    return 0;
};
function jur_JointSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$children = null;
    a.$fSet = null;
    a.$groupIndex = 0;
}
let jur_JointSet__init_ = ($this, $children, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$children = $children;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$groupIndex0;
},
jur_JointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_JointSet();
    jur_JointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_JointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $shift;
    if ($this.$children === null)
        return (-1);
    $start = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $stringIndex);
    $size = $this.$children.$size1;
    $i = 0;
    while (true) {
        if ($i >= $size) {
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $start);
            return (-1);
        }
        $shift = (ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_JointSet_setNext = ($this, $next) => {
    $this.$fSet.$next1 = $next;
},
jur_JointSet_getName = $this => {
    return $rt_s(168);
},
jur_JointSet_first = ($this, $set) => {
    let $i, var$3;
    a: {
        $i = $this.$children;
        if ($i !== null) {
            var$3 = ju_AbstractList_iterator($i);
            while (true) {
                if (!ju_AbstractList$1_hasNext(var$3))
                    break a;
                if (!(ju_AbstractList$1_next(var$3)).$first($set))
                    continue;
                else
                    return 1;
            }
        }
    }
    return 0;
},
jur_JointSet_hasConsumed = ($this, $matchResult) => {
    return jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex) >= 0 && jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex) == jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex) ? 0 : 1;
},
jur_JointSet_processSecondPass = $this => {
    let $child, $childrenSize, $i, $set, var$5, var$6, var$7, var$8, var$9;
    $this.$isSecondPassVisited = 1;
    $child = $this.$fSet;
    if ($child !== null && !$child.$isSecondPassVisited)
        jur_AbstractSet_processSecondPass($child);
    a: {
        $child = $this.$children;
        if ($child !== null) {
            $childrenSize = $child.$size1;
            $i = 0;
            while (true) {
                if ($i >= $childrenSize)
                    break a;
                $child = ju_ArrayList_get($this.$children, $i);
                $set = $child.$processBackRefReplacement();
                if ($set === null)
                    $set = $child;
                else {
                    $child.$isSecondPassVisited = 1;
                    ju_ArrayList_remove($this.$children, $i);
                    var$5 = $this.$children;
                    if ($i < 0)
                        break;
                    var$6 = var$5.$size1;
                    if ($i > var$6)
                        break;
                    ju_ArrayList_ensureCapacity(var$5, var$6 + 1 | 0);
                    var$7 = var$5.$size1;
                    var$8 = var$7;
                    while (var$8 > $i) {
                        var$9 = var$5.$array1.data;
                        var$9[var$8] = var$9[var$8 - 1 | 0];
                        var$8 = var$8 + (-1) | 0;
                    }
                    var$5.$array1.data[$i] = $set;
                    var$5.$size1 = var$7 + 1 | 0;
                    var$5.$modCount = var$5.$modCount + 1 | 0;
                }
                if (!$set.$isSecondPassVisited)
                    $set.$processSecondPass();
                $i = $i + 1 | 0;
            }
            $child = new jl_IndexOutOfBoundsException;
            jl_Exception__init_($child);
            $rt_throw($child);
        }
    }
    if ($this.$next1 !== null)
        jur_AbstractSet_processSecondPass($this);
},
jur_NonCapJointSet = $rt_classWithoutFields(jur_JointSet),
jur_NonCapJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $shift;
    $start = jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
    $size = $this.$children.$size1;
    $i = 0;
    while (true) {
        if ($i >= $size) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $start);
            return (-1);
        }
        $shift = (ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_NonCapJointSet_getName = $this => {
    return $rt_s(169);
},
jur_NonCapJointSet_hasConsumed = ($this, $matchResult) => {
    return !jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex) ? 0 : 1;
},
jur_AtomicJointSet = $rt_classWithoutFields(jur_NonCapJointSet),
jur_AtomicJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i;
    $start = jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
    $size = $this.$children.$size1;
    $i = 0;
    while ($i < $size) {
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            return $this.$next1.$matches($this.$fSet.$index4, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $start);
    return (-1);
},
jur_AtomicJointSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_AtomicJointSet_getName = $this => {
    return $rt_s(169);
},
jur_PositiveLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i;
    $size = $this.$children.$size1;
    $i = 0;
    while ($i < $size) {
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_PositiveLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PositiveLookAhead_getName = $this => {
    return $rt_s(170);
},
jur_NegativeLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i;
    $size = $this.$children.$size1;
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookAhead_getName = $this => {
    return $rt_s(171);
},
jur_PositiveLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $leftBound, $shift, $i;
    $size = $this.$children.$size1;
    $leftBound = $matchResult.$transparentBounds ? 0 : $matchResult.$leftBound;
    a: {
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
            $i = 0;
            while (true) {
                if ($i >= $size)
                    break a;
                if ((ju_ArrayList_get($this.$children, $i)).$findBack($leftBound, $stringIndex, $testString, $matchResult) >= 0) {
                    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, (-1));
                    return $shift;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return (-1);
},
jur_PositiveLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PositiveLookBehind_getName = $this => {
    return $rt_s(172);
},
jur_NegativeLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i;
    $size = $this.$children.$size1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ((ju_ArrayList_get($this.$children, $i)).$findBack(0, $stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookBehind_getName = $this => {
    return $rt_s(173);
};
function jur_SingleSet() {
    jur_JointSet.call(this);
    this.$kid = null;
}
let jur_SingleSet__init_ = ($this, $child, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$kid = $child;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$groupIndex0;
},
jur_SingleSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_SingleSet();
    jur_SingleSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_SingleSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $shift;
    $start = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $stringIndex);
    $shift = $this.$kid.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $start);
    return (-1);
},
jur_SingleSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$find0($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_findBack = ($this, $stringIndex, $lastIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$findBack($stringIndex, $lastIndex, $testString, $matchResult);
    if ($res >= 0)
        jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_first = ($this, $set) => {
    return $this.$kid.$first($set);
},
jur_SingleSet_processBackRefReplacement = $this => {
    let $set;
    $set = new jur_BackReferencedSingleSet;
    jur_SingleSet__init_($set, $this.$kid, $this.$fSet);
    $this.$next1 = $set;
    return $set;
},
jur_SingleSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$fSet;
    if ($set !== null && !$set.$isSecondPassVisited)
        jur_AbstractSet_processSecondPass($set);
    $set = $this.$kid;
    if ($set !== null && !$set.$isSecondPassVisited) {
        $set = $set.$processBackRefReplacement();
        if ($set !== null) {
            $this.$kid.$isSecondPassVisited = 1;
            $this.$kid = $set;
        }
        $this.$kid.$processSecondPass();
    }
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jur_SpecialToken = $rt_classWithoutFields();
function jur_AbstractCharClass() {
    let a = this; jur_SpecialToken.call(a);
    a.$alt = 0;
    a.$altSurrogates = 0;
    a.$lowHighSurrogates = null;
    a.$charClassWithoutSurrogates = null;
    a.$charClassWithSurrogates = null;
    a.$mayContainSupplCodepoints = 0;
}
let jur_AbstractCharClass_charClasses = null,
jur_AbstractCharClass__init_ = $this => {
    let var$1;
    var$1 = new ju_BitSet;
    var$1.$data = $rt_createIntArray(64);
    $this.$lowHighSurrogates = var$1;
},
jur_AbstractCharClass_getBits = $this => {
    return null;
},
jur_AbstractCharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_AbstractCharClass_hasLowHighSurrogates = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    if (!$this.$altSurrogates)
        var$1 = ju_BitSet_nextSetBit($this.$lowHighSurrogates, 0) >= 2048 ? 0 : 1;
    else {
        a: {
            var$2 = $this.$lowHighSurrogates;
            var$1 = 0;
            var$3 = var$2.$length2;
            if (var$1 < var$3) {
                var$4 = var$2.$data.data;
                var$5 = (var$4[0] ^ (-1)) >>> 0 | 0;
                if (var$5)
                    var$1 = jl_Integer_numberOfTrailingZeros(var$5) + var$1 | 0;
                else {
                    var$1 = (var$3 + 31 | 0) / 32 | 0;
                    var$5 = 1;
                    while (var$5 < var$1) {
                        if (var$4[var$5] != (-1)) {
                            var$1 = (var$5 * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$4[var$5] ^ (-1)) | 0;
                            break a;
                        }
                        var$5 = var$5 + 1 | 0;
                    }
                    var$1 = var$3;
                }
            }
        }
        var$1 = var$1 >= 2048 ? 0 : 1;
    }
    return var$1;
},
jur_AbstractCharClass_mayContainSupplCodepoints = $this => {
    return $this.$mayContainSupplCodepoints;
},
jur_AbstractCharClass_getInstance = $this => {
    return $this;
},
jur_AbstractCharClass_getSurrogates = $this => {
    let $lHS, var$2;
    if ($this.$charClassWithSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        var$2 = new jur_AbstractCharClass$1;
        var$2.$this$043 = $this;
        var$2.$val$lHS = $lHS;
        jur_AbstractCharClass__init_(var$2);
        $this.$charClassWithSurrogates = var$2;
        jur_AbstractCharClass_setNegative(var$2, $this.$altSurrogates);
    }
    return $this.$charClassWithSurrogates;
},
jur_AbstractCharClass_getWithoutSurrogates = $this => {
    let $lHS, var$2;
    if ($this.$charClassWithoutSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        var$2 = new jur_AbstractCharClass$2;
        var$2.$this$040 = $this;
        var$2.$val$lHS0 = $lHS;
        var$2.$val$thisClass = $this;
        jur_AbstractCharClass__init_(var$2);
        $this.$charClassWithoutSurrogates = var$2;
        jur_AbstractCharClass_setNegative(var$2, $this.$alt);
        $this.$charClassWithoutSurrogates.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints;
    }
    return $this.$charClassWithoutSurrogates;
},
jur_AbstractCharClass_hasUCI = $this => {
    return 0;
},
jur_AbstractCharClass_setNegative = ($this, $value) => {
    let var$2;
    var$2 = $this.$alt;
    if (var$2 ^ $value) {
        $this.$alt = var$2 ? 0 : 1;
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
    }
    if (!$this.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    return $this;
},
jur_AbstractCharClass_isNegative = $this => {
    return $this.$alt;
},
jur_AbstractCharClass_intersects = ($cc1, $cc2) => {
    let var$3, var$4;
    if ($cc1.$getBits() !== null && $cc2.$getBits() !== null) {
        $cc1 = $cc1.$getBits();
        $cc2 = $cc2.$getBits();
        var$3 = jl_Math_min($cc1.$data.data.length, $cc2.$data.data.length);
        var$4 = 0;
        a: {
            while (var$4 < var$3) {
                if ($cc1.$data.data[var$4] & $cc2.$data.data[var$4]) {
                    var$3 = 1;
                    break a;
                }
                var$4 = var$4 + 1 | 0;
            }
            var$3 = 0;
        }
        return var$3;
    }
    return 1;
},
jur_AbstractCharClass_getPredefinedClass = ($name, $negative) => {
    let var$3, var$4, var$5;
    var$3 = 0;
    while (true) {
        var$4 = jur_AbstractCharClass$PredefinedCharacterClasses_contents.data;
        if (var$3 >= var$4.length) {
            var$5 = new ju_MissingResourceException;
            jl_RuntimeException__init_(var$5, $rt_s(13));
            var$5.$className = $rt_s(13);
            var$5.$key0 = $name;
            $rt_throw(var$5);
        }
        var$4 = var$4[var$3].data;
        if (jl_String_equals($name, var$4[0]))
            break;
        var$3 = var$3 + 1 | 0;
    }
    return jur_AbstractCharClass$LazyCharClass_getValue(var$4[1], $negative);
},
jur_AbstractCharClass__clinit_ = () => {
    jur_AbstractCharClass_charClasses = new jur_AbstractCharClass$PredefinedCharacterClasses;
};
function ju_MissingResourceException() {
    let a = this; jl_RuntimeException.call(a);
    a.$className = null;
    a.$key0 = null;
}
function jur_CharClass() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$ci = 0;
    a.$uci = 0;
    a.$hasUCI0 = 0;
    a.$invertedSurrogates = 0;
    a.$inverted = 0;
    a.$hideBits = 0;
    a.$bits = null;
    a.$nonBitSet = null;
}
let jur_CharClass__init_2 = $this => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_();
},
jur_CharClass__init_ = () => {
    let var_0 = new jur_CharClass();
    jur_CharClass__init_2(var_0);
    return var_0;
},
jur_CharClass__init_1 = ($this, $ci, $uci) => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_();
    $this.$ci = $ci;
    $this.$uci = $uci;
},
jur_CharClass__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass();
    jur_CharClass__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass_add0 = ($this, $ch) => {
    a: {
        if ($this.$ci) {
            b: {
                if (!($ch >= 97 && $ch <= 122)) {
                    if ($ch < 65)
                        break b;
                    if ($ch > 90)
                        break b;
                }
                if ($this.$inverted) {
                    ju_BitSet_clear($this.$bits, jur_Pattern_getSupplement($ch & 65535));
                    break a;
                }
                ju_BitSet_set0($this.$bits, jur_Pattern_getSupplement($ch & 65535));
                break a;
            }
            if ($this.$uci && $ch > 128) {
                $this.$hasUCI0 = 1;
                $ch = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
            }
        }
    }
    if (!(!jur_Lexer_isHighSurrogate($ch) && !jur_Lexer_isLowSurrogate($ch))) {
        if ($this.$invertedSurrogates)
            ju_BitSet_clear($this.$lowHighSurrogates, $ch - 55296 | 0);
        else
            ju_BitSet_set0($this.$lowHighSurrogates, $ch - 55296 | 0);
    }
    if ($this.$inverted)
        ju_BitSet_clear($this.$bits, $ch);
    else
        ju_BitSet_set0($this.$bits, $ch);
    if (!$this.$mayContainSupplCodepoints && jl_Character_isSupplementaryCodePoint($ch))
        $this.$mayContainSupplCodepoints = 1;
    return $this;
},
jur_CharClass_add1 = ($this, $cc) => {
    let $curAlt, $nb, var$4;
    if (!$this.$mayContainSupplCodepoints && $cc.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    if ($this.$invertedSurrogates) {
        if (!$cc.$altSurrogates)
            ju_BitSet_andNot($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        else
            ju_BitSet_and($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
    } else if (!$cc.$altSurrogates)
        ju_BitSet_or($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        ju_BitSet_and($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
        $this.$invertedSurrogates = 1;
    }
    if (!$this.$hideBits && $cc.$getBits() !== null) {
        if ($this.$inverted) {
            if (!$cc.$alt)
                ju_BitSet_andNot($this.$bits, $cc.$getBits());
            else
                ju_BitSet_and($this.$bits, $cc.$getBits());
        } else if (!$cc.$alt)
            ju_BitSet_or($this.$bits, $cc.$getBits());
        else {
            ju_BitSet_xor($this.$bits, $cc.$getBits());
            ju_BitSet_and($this.$bits, $cc.$getBits());
            $this.$alt = $this.$alt ? 0 : 1;
            $this.$inverted = 1;
        }
    } else {
        $curAlt = $this.$alt;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$4 = new jur_CharClass$5;
                var$4.$this$023 = $this;
                var$4.$val$curAlt10 = $curAlt;
                var$4.$val$nb4 = $nb;
                var$4.$val$cc2 = $cc;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            } else {
                var$4 = new jur_CharClass$4;
                var$4.$this$048 = $this;
                var$4.$val$curAlt2 = $curAlt;
                var$4.$val$nb2 = $nb;
                var$4.$val$cc0 = $cc;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            }
        } else {
            if ($curAlt && !$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                $nb = new jur_CharClass$1;
                $nb.$this$034 = $this;
                $nb.$val$cc1 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else if (!$curAlt) {
                $nb = new jur_CharClass$3;
                $nb.$this$03 = $this;
                $nb.$val$curAlt = $curAlt;
                $nb.$val$cc = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$2;
                $nb.$this$04 = $this;
                $nb.$val$curAlt0 = $curAlt;
                $nb.$val$cc3 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
    return $this;
},
jur_CharClass_add = ($this, $i, $end) => {
    let var$3, var$4, var$5, var$6, var$7;
    if ($i > $end) {
        var$3 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    a: {
        b: {
            if (!$this.$ci) {
                if ($end < 55296)
                    break b;
                if ($i > 57343)
                    break b;
            }
            $end = $end + 1 | 0;
            while (true) {
                if ($i >= $end)
                    break a;
                jur_CharClass_add0($this, $i);
                $i = $i + 1 | 0;
            }
        }
        if (!$this.$inverted)
            ju_BitSet_set($this.$bits, $i, $end + 1 | 0);
        else {
            var$3 = $this.$bits;
            $end = $end + 1 | 0;
            if ($i >= 0 && $i <= $end) {
                var$4 = var$3.$length2;
                if ($i < var$4) {
                    var$5 = jl_Math_min(var$4, $end);
                    if ($i != var$5) {
                        var$6 = $i / 32 | 0;
                        $end = var$5 / 32 | 0;
                        if (var$6 == $end) {
                            var$7 = var$3.$data.data;
                            var$7[var$6] = var$7[var$6] & (ju_BitSet_trailingOneBits(var$3, $i) | ju_BitSet_trailingZeroBits(var$3, var$5));
                        } else {
                            var$7 = var$3.$data.data;
                            var$7[var$6] = var$7[var$6] & ju_BitSet_trailingOneBits(var$3, $i);
                            var$4 = var$6 + 1 | 0;
                            while (var$4 < $end) {
                                var$3.$data.data[var$4] = 0;
                                var$4 = var$4 + 1 | 0;
                            }
                            if (var$5 & 31) {
                                var$7 = var$3.$data.data;
                                var$7[$end] = var$7[$end] & ju_BitSet_trailingZeroBits(var$3, var$5);
                            }
                        }
                        ju_BitSet_recalculateLength(var$3);
                    }
                }
            } else {
                var$3 = new jl_IndexOutOfBoundsException;
                jl_Exception__init_(var$3);
                $rt_throw(var$3);
            }
        }
    }
    return $this;
},
jur_CharClass_union = ($this, $clazz) => {
    let var$2, $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints && $clazz.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    var$2 = $clazz;
    if (var$2.$hasUCI0)
        $this.$hasUCI0 = 1;
    $curAlt = $this.$altSurrogates;
    if (!($curAlt ^ $clazz.$altSurrogates)) {
        if (!$curAlt)
            ju_BitSet_or($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        else
            ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    } else if ($curAlt)
        ju_BitSet_andNot($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        $this.$altSurrogates = 1;
    }
    if (!$this.$hideBits && jur_CharClass_getBits(var$2) !== null) {
        $curAlt = $this.$alt;
        if (!($curAlt ^ $clazz.$alt)) {
            if (!$curAlt)
                ju_BitSet_or($this.$bits, jur_CharClass_getBits(var$2));
            else
                ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
        } else if ($curAlt)
            ju_BitSet_andNot($this.$bits, jur_CharClass_getBits(var$2));
        else {
            ju_BitSet_xor($this.$bits, jur_CharClass_getBits(var$2));
            ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
            $this.$alt = 1;
        }
    } else {
        $curAlt = $this.$alt;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$2 = new jur_CharClass$11;
                var$2.$this$020 = $this;
                var$2.$val$curAlt7 = $curAlt;
                var$2.$val$nb3 = $nb;
                var$2.$val$clazz9 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            } else {
                var$2 = new jur_CharClass$10;
                var$2.$this$024 = $this;
                var$2.$val$curAlt9 = $curAlt;
                var$2.$val$nb0 = $nb;
                var$2.$val$clazz = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            }
        } else {
            if (!$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                if (!$curAlt) {
                    $nb = new jur_CharClass$7;
                    $nb.$this$051 = $this;
                    $nb.$val$clazz2 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                } else {
                    $nb = new jur_CharClass$6;
                    $nb.$this$025 = $this;
                    $nb.$val$clazz8 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                }
            } else if (!$curAlt) {
                $nb = new jur_CharClass$9;
                $nb.$this$014 = $this;
                $nb.$val$clazz4 = $clazz;
                $nb.$val$curAlt1 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$8;
                $nb.$this$011 = $this;
                $nb.$val$clazz5 = $clazz;
                $nb.$val$curAlt5 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_intersection = ($this, $clazz) => {
    let var$2, $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints && $clazz.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    var$2 = $clazz;
    if (var$2.$hasUCI0)
        $this.$hasUCI0 = 1;
    $curAlt = $this.$altSurrogates;
    if (!($curAlt ^ $clazz.$altSurrogates)) {
        if (!$curAlt)
            ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        else
            ju_BitSet_or($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    } else if (!$curAlt)
        ju_BitSet_andNot($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        $this.$altSurrogates = 0;
    }
    if (!$this.$hideBits && jur_CharClass_getBits(var$2) !== null) {
        $curAlt = $this.$alt;
        if (!($curAlt ^ $clazz.$alt)) {
            if (!$curAlt)
                ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
            else
                ju_BitSet_or($this.$bits, jur_CharClass_getBits(var$2));
        } else if (!$curAlt)
            ju_BitSet_andNot($this.$bits, jur_CharClass_getBits(var$2));
        else {
            ju_BitSet_xor($this.$bits, jur_CharClass_getBits(var$2));
            ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
            $this.$alt = 0;
        }
    } else {
        $curAlt = $this.$alt;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$2 = new jur_CharClass$17;
                var$2.$this$022 = $this;
                var$2.$val$curAlt8 = $curAlt;
                var$2.$val$nb1 = $nb;
                var$2.$val$clazz3 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            } else {
                var$2 = new jur_CharClass$16;
                var$2.$this$029 = $this;
                var$2.$val$curAlt6 = $curAlt;
                var$2.$val$nb = $nb;
                var$2.$val$clazz7 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            }
        } else {
            if (!$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                if (!$curAlt) {
                    $nb = new jur_CharClass$13;
                    $nb.$this$026 = $this;
                    $nb.$val$clazz0 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                } else {
                    $nb = new jur_CharClass$12;
                    $nb.$this$047 = $this;
                    $nb.$val$clazz1 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                }
            } else if (!$curAlt) {
                $nb = new jur_CharClass$15;
                $nb.$this$016 = $this;
                $nb.$val$clazz10 = $clazz;
                $nb.$val$curAlt4 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$14;
                $nb.$this$012 = $this;
                $nb.$val$clazz6 = $clazz;
                $nb.$val$curAlt3 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_contains = ($this, $ch) => {
    let var$2;
    var$2 = $this.$nonBitSet;
    if (var$2 !== null)
        return $this.$alt ^ var$2.$contains($ch);
    return $this.$alt ^ ju_BitSet_get($this.$bits, $ch);
},
jur_CharClass_getBits = $this => {
    if (!$this.$hideBits)
        return $this.$bits;
    return null;
},
jur_CharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_CharClass_getInstance = $this => {
    let $bs, $res;
    if ($this.$nonBitSet !== null)
        return $this;
    $bs = jur_CharClass_getBits($this);
    $res = new jur_CharClass$18;
    $res.$this$019 = $this;
    $res.$val$bs = $bs;
    jur_AbstractCharClass__init_($res);
    return jur_AbstractCharClass_setNegative($res, $this.$alt);
},
jur_CharClass_toString = $this => {
    let $temp, $i, var$3;
    $temp = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($temp);
    $i = ju_BitSet_nextSetBit($this.$bits, 0);
    while ($i >= 0) {
        jl_AbstractStringBuilder_append1($temp, jl_Character_toChars($i));
        jl_AbstractStringBuilder_append($temp, 124);
        $i = ju_BitSet_nextSetBit($this.$bits, $i + 1 | 0);
    }
    var$3 = $temp.$length1;
    if (var$3 > 0)
        jl_StringBuilder_deleteCharAt($temp, var$3 - 1 | 0);
    return jl_AbstractStringBuilder_toString($temp);
},
jur_CharClass_hasUCI = $this => {
    return $this.$hasUCI0;
};
function jur_QuantifierSet() {
    jur_AbstractSet.call(this);
    this.$innerSet = null;
}
let jur_QuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$innerSet = $innerSet;
    $this.$type4 = $type;
},
jur_QuantifierSet_getInnerSet = $this => {
    return $this.$innerSet;
},
jur_QuantifierSet_first = ($this, $set) => {
    return !$this.$innerSet.$first($set) && !$this.$next1.$first($set) ? 0 : 1;
},
jur_QuantifierSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_QuantifierSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$next1;
    if ($set !== null && !$set.$isSecondPassVisited) {
        $set = $set.$processBackRefReplacement();
        if ($set !== null) {
            $this.$next1.$isSecondPassVisited = 1;
            $this.$next1 = $set;
        }
        $this.$next1.$processSecondPass();
    }
    $set = $this.$innerSet;
    if ($set !== null) {
        if (!$set.$isSecondPassVisited) {
            $set = $set.$processBackRefReplacement();
            if ($set !== null) {
                $this.$innerSet.$isSecondPassVisited = 1;
                $this.$innerSet = $set;
            }
            $this.$innerSet.$processSecondPass();
        } else if ($set instanceof jur_SingleSet && $set.$fSet.$isBackReferenced)
            $this.$innerSet = $set.$next1;
    }
};
function jur_LeafQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$leaf = null;
}
let jur_LeafQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$leaf = $innerSet;
},
jur_LeafQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_LeafQuantifierSet();
    jur_LeafQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_LeafQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $i, var$5;
    $i = 0;
    a: {
        while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
            var$5 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$5 <= 0)
                break a;
            $stringIndex = $stringIndex + var$5 | 0;
            $i = $i + 1 | 0;
        }
    }
    while (true) {
        if ($i < 0)
            return (-1);
        var$5 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$5 >= 0)
            break;
        $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
        $i = $i + (-1) | 0;
    }
    return var$5;
},
jur_LeafQuantifierSet_getName = $this => {
    return $rt_s(174);
};
function jur_CompositeQuantifierSet() {
    jur_LeafQuantifierSet.call(this);
    this.$quantifier0 = null;
}
let jur_CompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier0 = $quant;
},
jur_CompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CompositeQuantifierSet();
    jur_CompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $min, $max, $i, $shift;
    var$4 = $this.$quantifier0;
    $min = var$4.$min0;
    $max = var$4.$max0;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while ($i < $max) {
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound)
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break a;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            while (true) {
                if ($i < $min)
                    return (-1);
                $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                if ($shift >= 0)
                    break;
                $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
                $i = $i + (-1) | 0;
            }
            return $shift;
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_CompositeQuantifierSet_getName = $this => {
    return jur_Quantifier_toString($this.$quantifier0);
},
jur_GroupQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_GroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_GroupQuantifierSet_getName = $this => {
    return $rt_s(175);
},
jur_AltQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_AltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    return $shift;
},
jur_AltQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$innerSet.$setNext($next);
},
jur_UnifiedQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_UnifiedQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound && $this.$leaf.$accepts($stringIndex, $testString) > 0) {
        $stringIndex = $stringIndex + $this.$leaf.$charCount() | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_UnifiedQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $startSearch, $newSearch, $newSearch_0;
    $startSearch = $this.$next1.$find0($stringIndex, $testString, $matchResult);
    if ($startSearch < 0)
        return (-1);
    $newSearch = $startSearch - $this.$leaf.$charCount() | 0;
    while ($newSearch >= $stringIndex && $this.$leaf.$accepts($newSearch, $testString) > 0) {
        $newSearch_0 = $newSearch - $this.$leaf.$charCount() | 0;
        $startSearch = $newSearch;
        $newSearch = $newSearch_0;
    }
    return $startSearch;
},
jur_AbstractCharClass$PredefinedCharacterClasses = $rt_classWithoutFields(),
jur_AbstractCharClass$PredefinedCharacterClasses_space = null,
jur_AbstractCharClass$PredefinedCharacterClasses_digit = null,
jur_AbstractCharClass$PredefinedCharacterClasses_contents = null,
jur_AbstractCharClass$PredefinedCharacterClasses__clinit_ = () => {
    let var$1, var$2, var$3, var$4;
    jur_AbstractCharClass$PredefinedCharacterClasses_space = jur_AbstractCharClass$LazySpace__init_0();
    jur_AbstractCharClass$PredefinedCharacterClasses_digit = jur_AbstractCharClass$LazyDigit__init_();
    var$1 = $rt_createArray($rt_arraycls(jl_Object), 194);
    var$2 = var$1.data;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(176);
    var$4[1] = jur_AbstractCharClass$LazyLower__init_0();
    var$2[0] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(177);
    var$4[1] = jur_AbstractCharClass$LazyUpper__init_();
    var$2[1] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(178);
    var$4[1] = jur_AbstractCharClass$LazyASCII__init_0();
    var$2[2] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(179);
    var$4[1] = jur_AbstractCharClass$LazyAlpha__init_0();
    var$2[3] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(180);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[4] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(181);
    var$4[1] = jur_AbstractCharClass$LazyAlnum__init_0();
    var$2[5] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(182);
    var$4[1] = jur_AbstractCharClass$LazyPunct__init_();
    var$2[6] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(183);
    var$4[1] = jur_AbstractCharClass$LazyGraph__init_();
    var$2[7] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(184);
    var$4[1] = jur_AbstractCharClass$LazyPrint__init_();
    var$2[8] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(185);
    var$4[1] = jur_AbstractCharClass$LazyBlank__init_();
    var$2[9] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(186);
    var$4[1] = jur_AbstractCharClass$LazyCntrl__init_();
    var$2[10] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(187);
    var$4[1] = jur_AbstractCharClass$LazyXDigit__init_();
    var$2[11] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(188);
    var$4[1] = jur_AbstractCharClass$LazyJavaLowerCase__init_0();
    var$2[12] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(189);
    var$4[1] = jur_AbstractCharClass$LazyJavaUpperCase__init_();
    var$2[13] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(190);
    var$4[1] = jur_AbstractCharClass$LazyJavaWhitespace__init_0();
    var$2[14] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(191);
    var$4[1] = jur_AbstractCharClass$LazyJavaMirrored__init_();
    var$2[15] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(192);
    var$4[1] = jur_AbstractCharClass$LazyJavaDefined__init_0();
    var$2[16] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(193);
    var$4[1] = jur_AbstractCharClass$LazyJavaDigit__init_0();
    var$2[17] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(194);
    var$4[1] = jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0();
    var$2[18] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(195);
    var$4[1] = jur_AbstractCharClass$LazyJavaISOControl__init_();
    var$2[19] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(196);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0();
    var$2[20] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(197);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0();
    var$2[21] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(198);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetter__init_0();
    var$2[22] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(199);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0();
    var$2[23] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(200);
    var$4[1] = jur_AbstractCharClass$LazyJavaSpaceChar__init_0();
    var$2[24] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(201);
    var$4[1] = jur_AbstractCharClass$LazyJavaTitleCase__init_0();
    var$2[25] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(202);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_();
    var$2[26] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(203);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0();
    var$2[27] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(204);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[28] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(205);
    var$4[1] = jur_AbstractCharClass$LazyWord__init_0();
    var$2[29] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(206);
    var$4[1] = jur_AbstractCharClass$LazyNonWord__init_();
    var$2[30] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(207);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[31] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(208);
    var$4[1] = jur_AbstractCharClass$LazyNonSpace__init_();
    var$2[32] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(209);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[33] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(210);
    var$4[1] = jur_AbstractCharClass$LazyNonDigit__init_();
    var$2[34] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(211);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 127);
    var$2[35] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(212);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(128, 255);
    var$2[36] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(213);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(256, 383);
    var$2[37] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(214);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(384, 591);
    var$2[38] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(215);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(592, 687);
    var$2[39] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(216);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(688, 767);
    var$2[40] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(217);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(768, 879);
    var$2[41] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(218);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(880, 1023);
    var$2[42] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(219);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1024, 1279);
    var$2[43] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(220);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1280, 1327);
    var$2[44] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(221);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1328, 1423);
    var$2[45] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(222);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1424, 1535);
    var$2[46] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(223);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1536, 1791);
    var$2[47] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(224);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1792, 1871);
    var$2[48] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(225);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1872, 1919);
    var$2[49] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(226);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1920, 1983);
    var$2[50] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(227);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2304, 2431);
    var$2[51] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(228);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2432, 2559);
    var$2[52] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(229);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2560, 2687);
    var$2[53] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(230);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2688, 2815);
    var$2[54] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(231);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2816, 2943);
    var$2[55] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(232);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2944, 3071);
    var$2[56] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(233);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3072, 3199);
    var$2[57] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(234);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3200, 3327);
    var$2[58] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(235);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3328, 3455);
    var$2[59] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(236);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3456, 3583);
    var$2[60] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(237);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3584, 3711);
    var$2[61] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(238);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3712, 3839);
    var$2[62] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(239);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3840, 4095);
    var$2[63] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(240);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4096, 4255);
    var$2[64] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(241);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4256, 4351);
    var$2[65] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(242);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4352, 4607);
    var$2[66] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(243);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4608, 4991);
    var$2[67] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(244);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4992, 5023);
    var$2[68] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(245);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5024, 5119);
    var$2[69] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(246);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5120, 5759);
    var$2[70] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(247);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5760, 5791);
    var$2[71] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(248);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5792, 5887);
    var$2[72] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(249);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5888, 5919);
    var$2[73] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(250);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5920, 5951);
    var$2[74] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(251);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5952, 5983);
    var$2[75] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(252);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5984, 6015);
    var$2[76] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(253);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6016, 6143);
    var$2[77] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(254);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6144, 6319);
    var$2[78] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(255);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6400, 6479);
    var$2[79] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(256);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6480, 6527);
    var$2[80] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(257);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6528, 6623);
    var$2[81] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(258);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6624, 6655);
    var$2[82] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(259);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6656, 6687);
    var$2[83] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(260);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7424, 7551);
    var$2[84] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(261);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7552, 7615);
    var$2[85] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(262);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7616, 7679);
    var$2[86] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(263);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7680, 7935);
    var$2[87] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(264);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7936, 8191);
    var$2[88] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(265);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8192, 8303);
    var$2[89] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(266);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8304, 8351);
    var$2[90] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(267);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8352, 8399);
    var$2[91] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(268);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8400, 8447);
    var$2[92] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(269);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8448, 8527);
    var$2[93] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(270);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8528, 8591);
    var$2[94] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(271);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8592, 8703);
    var$2[95] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(272);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8704, 8959);
    var$2[96] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(273);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8960, 9215);
    var$2[97] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(274);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9216, 9279);
    var$2[98] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(275);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9280, 9311);
    var$2[99] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(276);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9312, 9471);
    var$2[100] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(277);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9472, 9599);
    var$2[101] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(278);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9600, 9631);
    var$2[102] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(279);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9632, 9727);
    var$2[103] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(280);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9728, 9983);
    var$2[104] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(281);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9984, 10175);
    var$2[105] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(282);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10176, 10223);
    var$2[106] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(283);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10224, 10239);
    var$2[107] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(284);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10240, 10495);
    var$2[108] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(285);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10496, 10623);
    var$2[109] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(286);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10624, 10751);
    var$2[110] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(287);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10752, 11007);
    var$2[111] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(288);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11008, 11263);
    var$2[112] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(289);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11264, 11359);
    var$2[113] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(290);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11392, 11519);
    var$2[114] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(291);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11520, 11567);
    var$2[115] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(292);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11568, 11647);
    var$2[116] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(293);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11648, 11743);
    var$2[117] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(294);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11776, 11903);
    var$2[118] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(295);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11904, 12031);
    var$2[119] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(296);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12032, 12255);
    var$2[120] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(297);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12272, 12287);
    var$2[121] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(298);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12288, 12351);
    var$2[122] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(299);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12352, 12447);
    var$2[123] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(300);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12448, 12543);
    var$2[124] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(301);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12544, 12591);
    var$2[125] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(302);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12592, 12687);
    var$2[126] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(303);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12688, 12703);
    var$2[127] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(304);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12704, 12735);
    var$2[128] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(305);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12736, 12783);
    var$2[129] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(306);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12784, 12799);
    var$2[130] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(307);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12800, 13055);
    var$2[131] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(308);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13056, 13311);
    var$2[132] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(309);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13312, 19893);
    var$2[133] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(310);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19904, 19967);
    var$2[134] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(311);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19968, 40959);
    var$2[135] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(312);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(40960, 42127);
    var$2[136] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(313);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42128, 42191);
    var$2[137] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(314);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42752, 42783);
    var$2[138] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(315);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(43008, 43055);
    var$2[139] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(316);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(44032, 55203);
    var$2[140] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(317);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(55296, 56191);
    var$2[141] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(318);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56192, 56319);
    var$2[142] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(319);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56320, 57343);
    var$2[143] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(320);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(57344, 63743);
    var$2[144] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(321);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(63744, 64255);
    var$2[145] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(322);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64256, 64335);
    var$2[146] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(323);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64336, 65023);
    var$2[147] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(324);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65024, 65039);
    var$2[148] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(325);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65040, 65055);
    var$2[149] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(326);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65056, 65071);
    var$2[150] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(327);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65072, 65103);
    var$2[151] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(328);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65104, 65135);
    var$2[152] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(329);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65136, 65279);
    var$2[153] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(330);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65280, 65519);
    var$2[154] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(331);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 1114111);
    var$2[155] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(332);
    var$4[1] = jur_AbstractCharClass$LazySpecialsBlock__init_();
    var$2[156] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(333);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(0, 1);
    var$2[157] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(334);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(62, 1);
    var$2[158] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(335);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(1, 1);
    var$2[159] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(336);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(2, 1);
    var$2[160] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(337);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(3, 0);
    var$2[161] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(338);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(4, 0);
    var$2[162] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(339);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(5, 1);
    var$2[163] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(340);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(448, 1);
    var$2[164] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(341);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(6, 1);
    var$2[165] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(342);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(7, 0);
    var$2[166] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(343);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(8, 1);
    var$2[167] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(344);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(3584, 1);
    var$2[168] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(345);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(9, 1);
    var$2[169] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(346);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(10, 1);
    var$2[170] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(347);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(11, 1);
    var$2[171] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(348);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(28672, 0);
    var$2[172] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(349);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(12, 0);
    var$2[173] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(350);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(13, 0);
    var$2[174] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(351);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(14, 0);
    var$2[175] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(352);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_2(983040, 1, 1);
    var$2[176] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(353);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(15, 0);
    var$2[177] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(354);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(16, 1);
    var$2[178] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(355);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(18, 1);
    var$2[179] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(356);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_1(19, 0, 1);
    var$2[180] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(357);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(1643118592, 1);
    var$2[181] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(358);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(20, 0);
    var$2[182] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(359);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(21, 0);
    var$2[183] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(360);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(22, 0);
    var$2[184] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(361);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(23, 0);
    var$2[185] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(362);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(24, 1);
    var$2[186] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(363);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(2113929216, 1);
    var$2[187] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(364);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(25, 1);
    var$2[188] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(365);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(26, 0);
    var$2[189] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(366);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(27, 0);
    var$2[190] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(367);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(28, 1);
    var$2[191] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(368);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(29, 0);
    var$2[192] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(369);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(30, 0);
    var$2[193] = var$3;
    jur_AbstractCharClass$PredefinedCharacterClasses_contents = var$1;
};
function jur_AbstractCharClass$LazyCharClass() {
    let a = this; jl_Object.call(a);
    a.$posValue = null;
    a.$negValue = null;
}
let jur_AbstractCharClass$LazyCharClass_getValue = ($this, $negative) => {
    if (!$negative && $this.$posValue === null)
        $this.$posValue = $this.$computeValue();
    else if ($negative && $this.$negValue === null)
        $this.$negValue = jur_AbstractCharClass_setNegative($this.$computeValue(), 1);
    if ($negative)
        return $this.$negValue;
    return $this.$posValue;
};
function jur_Quantifier() {
    let a = this; jur_SpecialToken.call(a);
    a.$min0 = 0;
    a.$max0 = 0;
}
let jur_Quantifier_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = $this.$min0;
    var$2 = $this.$max0;
    var$3 = var$2 != 2147483647 ? jl_Integer_toString(var$2) : $rt_s(13);
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(var$4, 123);
    var$5 = jl_StringBuilder_append0(var$4, var$1);
    jl_AbstractStringBuilder_append(var$5, 44);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(var$5, var$3), 125);
    return jl_AbstractStringBuilder_toString(var$4);
},
jur_FSet$PossessiveFSet = $rt_classWithoutFields(jur_AbstractSet),
jur_FSet$PossessiveFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_FSet$PossessiveFSet_getName = $this => {
    return $rt_s(370);
},
jur_FSet$PossessiveFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function ju_BitSet() {
    let a = this; jl_Object.call(a);
    a.$data = null;
    a.$length2 = 0;
}
let ju_BitSet__init_0 = $this => {
    $this.$data = $rt_createIntArray(2);
},
ju_BitSet__init_ = () => {
    let var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
},
ju_BitSet_set0 = ($this, $bitIndex) => {
    let var$2, $index, var$4;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    if ($bitIndex >= $this.$length2) {
        ju_BitSet_ensureCapacity($this, $index + 1 | 0);
        $this.$length2 = $bitIndex + 1 | 0;
    }
    var$4 = $this.$data.data;
    var$4[$index] = var$4[$index] | 1 << ($bitIndex % 32 | 0);
},
ju_BitSet_set = ($this, $fromIndex, $toIndex) => {
    let $fromDataIndex, $toDataIndex, var$5, $i, var$7;
    if ($fromIndex >= 0) {
        $fromDataIndex = $rt_compare($fromIndex, $toIndex);
        if ($fromDataIndex <= 0) {
            if (!$fromDataIndex)
                return;
            $fromDataIndex = $fromIndex / 32 | 0;
            $toDataIndex = $toIndex / 32 | 0;
            if ($toIndex > $this.$length2) {
                ju_BitSet_ensureCapacity($this, $toDataIndex + 1 | 0);
                $this.$length2 = $toIndex;
            }
            if ($fromDataIndex == $toDataIndex) {
                var$5 = $this.$data.data;
                var$5[$fromDataIndex] = var$5[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex) & ju_BitSet_trailingOneBits($this, $toIndex);
            } else {
                var$5 = $this.$data.data;
                var$5[$fromDataIndex] = var$5[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex);
                $i = $fromDataIndex + 1 | 0;
                while ($i < $toDataIndex) {
                    $this.$data.data[$i] = (-1);
                    $i = $i + 1 | 0;
                }
                if ($toIndex & 31) {
                    var$5 = $this.$data.data;
                    var$5[$toDataIndex] = var$5[$toDataIndex] | ju_BitSet_trailingOneBits($this, $toIndex);
                }
            }
            return;
        }
    }
    var$7 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$7);
    $rt_throw(var$7);
},
ju_BitSet_trailingZeroBits = ($this, $num) => {
    return (-1) << ($num % 32 | 0);
},
ju_BitSet_trailingOneBits = ($this, $num) => {
    $num = $num % 32 | 0;
    return !$num ? 0 : (-1) >>> (32 - $num | 0) | 0;
},
ju_BitSet_clear = ($this, $bitIndex) => {
    let var$2, $index, var$4, var$5, var$6;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    var$4 = $this.$data.data;
    if ($index < var$4.length) {
        var$5 = var$4[$index];
        var$6 = ($bitIndex % 32 | 0) & 31;
        var$4[$index] = var$5 & ((-2) << var$6 | ((-2) >>> (32 - var$6 | 0) | 0));
        if ($bitIndex == ($this.$length2 - 1 | 0))
            ju_BitSet_recalculateLength($this);
    }
},
ju_BitSet_get = ($this, $bitIndex) => {
    let var$2, $index, var$4;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    var$4 = $this.$data.data;
    return $index < var$4.length && var$4[$index] & 1 << ($bitIndex % 32 | 0) ? 1 : 0;
},
ju_BitSet_nextSetBit = ($this, $fromIndex) => {
    let var$2, $top, $index, var$5, $i;
    if ($fromIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $top = $this.$length2;
    if ($fromIndex >= $top)
        return (-1);
    $index = $fromIndex / 32 | 0;
    var$5 = $this.$data.data;
    $i = var$5[$index] >>> ($fromIndex % 32 | 0) | 0;
    if ($i)
        return jl_Integer_numberOfTrailingZeros($i) + $fromIndex | 0;
    $top = ($top + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if (var$5[$i])
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$5[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
ju_BitSet_ensureCapacity = ($this, $capacity) => {
    let $newArrayLength, var$3, var$4, var$5;
    $newArrayLength = $this.$data.data.length;
    if ($newArrayLength >= $capacity)
        return;
    $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($newArrayLength * 2 | 0) + 1 | 0);
    var$3 = $this.$data.data;
    var$4 = $rt_createIntArray($newArrayLength);
    var$5 = var$4.data;
    $capacity = jl_Math_min($newArrayLength, var$3.length);
    $newArrayLength = 0;
    while ($newArrayLength < $capacity) {
        var$5[$newArrayLength] = var$3[$newArrayLength];
        $newArrayLength = $newArrayLength + 1 | 0;
    }
    $this.$data = var$4;
},
ju_BitSet_recalculateLength = $this => {
    let $top, $i, $sz;
    $top = ($this.$length2 + 31 | 0) / 32 | 0;
    $this.$length2 = $top * 32 | 0;
    $i = $top - 1 | 0;
    a: {
        while (true) {
            if ($i < 0)
                break a;
            $sz = jl_Integer_numberOfLeadingZeros($this.$data.data[$i]);
            if ($sz < 32)
                break;
            $i = $i + (-1) | 0;
            $this.$length2 = $this.$length2 - 32 | 0;
        }
        $this.$length2 = $this.$length2 - $sz | 0;
    }
},
ju_BitSet_and = ($this, $set) => {
    let $i, $i_0, var$4, var$5;
    $i = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i_0 = 0;
    while ($i_0 < $i) {
        var$4 = $this.$data.data;
        var$4[$i_0] = var$4[$i_0] & $set.$data.data[$i_0];
        $i_0 = $i_0 + 1 | 0;
    }
    while (true) {
        var$5 = $this.$data.data;
        if ($i >= var$5.length)
            break;
        var$5[$i] = 0;
        $i = $i + 1 | 0;
    }
    $this.$length2 = jl_Math_min($this.$length2, $set.$length2);
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_andNot = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] & ($set.$data.data[$i] ^ (-1));
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_or = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_max($this.$length2, $set.$length2);
    $this.$length2 = $sz;
    ju_BitSet_ensureCapacity($this, ($sz + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] | $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
},
ju_BitSet_xor = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_max($this.$length2, $set.$length2);
    $this.$length2 = $sz;
    ju_BitSet_ensureCapacity($this, ($sz + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] ^ $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_isEmpty = $this => {
    return $this.$length2 ? 0 : 1;
};
function jur_LowHighSurrogateRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$surrChars = null;
    a.$alt1 = 0;
}
let jur_LowHighSurrogateRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt1 ? $rt_s(371) : $rt_s(372);
    var$2 = $this.$surrChars.$toString();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(373)), var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
};
function jur_CompositeRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$withoutSurrogates = null;
    a.$withSurrogates = null;
}
let jur_CompositeRangeSet__init_0 = ($this, $withoutSurrogates, $withSurrogates) => {
    jur_AbstractSet__init_($this);
    $this.$withoutSurrogates = $withoutSurrogates;
    $this.$withSurrogates = $withSurrogates;
},
jur_CompositeRangeSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_CompositeRangeSet();
    jur_CompositeRangeSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CompositeRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift, var$5, var$6, var$7, var$8, var$9;
    $shift = $this.$withoutSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        a: {
            var$5 = $this.$withSurrogates;
            var$6 = $matchResult.$leftBound;
            $shift = $matchResult.$rightBound;
            var$7 = $stringIndex + 1 | 0;
            $shift = $rt_compare(var$7, $shift);
            if ($shift > 0) {
                $matchResult.$hitEnd = 1;
                $shift = (-1);
            } else {
                var$8 = $testString;
                var$9 = jl_String_charAt(var$8, $stringIndex);
                if (!var$5.$surrChars.$contains(var$9))
                    $shift = (-1);
                else {
                    if (jl_Character_isHighSurrogate(var$9)) {
                        if ($shift < 0 && jl_Character_isLowSurrogate(jl_String_charAt(var$8, var$7))) {
                            $shift = (-1);
                            break a;
                        }
                    } else if (jl_Character_isLowSurrogate(var$9) && $stringIndex > var$6 && jl_Character_isHighSurrogate(jl_String_charAt(var$8, $stringIndex - 1 | 0))) {
                        $shift = (-1);
                        break a;
                    }
                    $shift = var$5.$next1.$matches(var$7, $testString, $matchResult);
                }
            }
        }
    if ($shift >= 0)
        return $shift;
    return (-1);
},
jur_CompositeRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$withSurrogates.$next1 = $next;
    $this.$withoutSurrogates.$setNext($next);
},
jur_CompositeRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_String_valueOf($this.$withoutSurrogates);
    var$2 = jl_String_valueOf($this.$withSurrogates);
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(374)), var$1), $rt_s(375)), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jur_CompositeRangeSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CompositeRangeSet_first = ($this, $set) => {
    return 1;
};
function jur_SupplRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$chars = null;
    a.$alt0 = 0;
}
let jur_SupplRangeSet__init_ = ($this, $cc) => {
    jur_AbstractSet__init_($this);
    $this.$chars = $cc.$getInstance0();
    $this.$alt0 = $cc.$alt;
},
jur_SupplRangeSet__init_0 = var_0 => {
    let var_1 = new jur_SupplRangeSet();
    jur_SupplRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $low, var$6, $high, $offset;
    $strLength = $matchResult.$rightBound;
    if ($stringIndex < $strLength) {
        $low = $stringIndex + 1 | 0;
        var$6 = $testString;
        $high = jl_String_charAt(var$6, $stringIndex);
        if ($this.$contains($high)) {
            $offset = $this.$next1.$matches($low, $testString, $matchResult);
            if ($offset > 0)
                return $offset;
        }
        if ($low < $strLength) {
            $stringIndex = $low + 1 | 0;
            $low = jl_String_charAt(var$6, $low);
            if (jl_Character_isSurrogatePair($high, $low) && $this.$contains(jl_Character_toCodePoint($high, $low)))
                return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
    }
    return (-1);
},
jur_SupplRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt0 ? $rt_s(371) : $rt_s(372);
    var$2 = $this.$chars.$toString();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(373)), var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jur_SupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains($ch);
},
jur_SupplRangeSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return $this.$chars.$contains($set.$ch1);
    if ($set instanceof jur_CharSet)
        return $this.$chars.$contains($set.$ch0);
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars, $set.$chars);
    if (!($set instanceof jur_RangeSet))
        return 1;
    return jur_AbstractCharClass_intersects($this.$chars, $set.$chars0);
},
jur_SupplRangeSet_getChars = $this => {
    return $this.$chars;
},
jur_SupplRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_SupplRangeSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_UCISupplRangeSet = $rt_classWithoutFields(jur_SupplRangeSet),
jur_UCISupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains(jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch)));
},
jur_UCISupplRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt0 ? $rt_s(371) : $rt_s(372);
    var$2 = $this.$chars.$toString();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(376)), var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
};
function jur_UCIRangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars1 = null;
    a.$alt2 = 0;
}
let jur_UCIRangeSet__init_0 = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars1 = $cc.$getInstance0();
    $this.$alt2 = $cc.$alt;
},
jur_UCIRangeSet__init_ = var_0 => {
    let var_1 = new jur_UCIRangeSet();
    jur_UCIRangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCIRangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars1.$contains(jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex)))) ? (-1) : 1;
},
jur_UCIRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt2 ? $rt_s(371) : $rt_s(372);
    var$2 = $this.$chars1.$toString();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(376)), var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
};
function jur_RangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars0 = null;
    a.$alt3 = 0;
}
let jur_RangeSet__init_0 = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars0 = $cc.$getInstance0();
    $this.$alt3 = $cc.$alt;
},
jur_RangeSet__init_ = var_0 => {
    let var_1 = new jur_RangeSet();
    jur_RangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_RangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars0.$contains(jl_String_charAt($testString, $strIndex)) ? (-1) : 1;
},
jur_RangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt3 ? $rt_s(371) : $rt_s(372);
    var$2 = $this.$chars0.$toString();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(373)), var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jur_RangeSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return $this.$chars0.$contains($set.$ch0);
    if ($set instanceof jur_RangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars0);
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars);
};
function jur_HangulDecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$decomposedChar = null;
    a.$decomposedCharUTF160 = null;
    a.$decomposedCharLength = 0;
}
let jur_HangulDecomposedCharSet__init_0 = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_AbstractSet__init_($this);
    $this.$decomposedChar = $decomposedChar;
    $this.$decomposedCharLength = $decomposedCharLength;
},
jur_HangulDecomposedCharSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_HangulDecomposedCharSet();
    jur_HangulDecomposedCharSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_HangulDecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HangulDecomposedCharSet_getDecomposedChar = $this => {
    if ($this.$decomposedCharUTF160 === null)
        $this.$decomposedCharUTF160 = jl_String__init_($this.$decomposedChar);
    return $this.$decomposedCharUTF160;
},
jur_HangulDecomposedCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = jur_HangulDecomposedCharSet_getDecomposedChar($this);
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(377)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_HangulDecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, $decompSyllable, $vIndex, $tIndex, var$8, var$9, $curSymb, $i, var$12, $lIndex, $decompCurSymb, var$15, $syllIndex;
    $rightBound = $matchResult.$rightBound;
    $decompSyllable = $rt_createIntArray(3);
    $vIndex = (-1);
    $tIndex = (-1);
    if ($strIndex >= $rightBound)
        return (-1);
    var$8 = $strIndex + 1 | 0;
    var$9 = $testString;
    $curSymb = jl_String_charAt(var$9, $strIndex);
    $i = $curSymb - 44032 | 0;
    if ($i >= 0 && $i < 11172) {
        var$12 = 4352 + ($i / 588 | 0) | 0;
        $lIndex = 4449 + (($i % 588 | 0) / 28 | 0) | 0;
        $strIndex = $i % 28 | 0;
        $decompCurSymb = !$strIndex ? $rt_createIntArrayFromData([var$12, $lIndex]) : $rt_createIntArrayFromData([var$12, $lIndex, 4519 + $strIndex | 0]);
    } else
        $decompCurSymb = null;
    if ($decompCurSymb !== null) {
        var$15 = $decompCurSymb.data;
        $i = 0;
        $strIndex = var$15.length;
        $syllIndex = $this.$decomposedCharLength;
        if ($strIndex != $syllIndex)
            return (-1);
        while (true) {
            if ($i >= $syllIndex)
                return $this.$next1.$matches(var$8, $testString, $matchResult);
            if (var$15[$i] != $this.$decomposedChar.data[$i])
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    $decompSyllable = $decompSyllable.data;
    $decompSyllable[0] = $curSymb;
    $lIndex = $curSymb - 4352 | 0;
    if ($lIndex >= 0 && $lIndex < 19) {
        if (var$8 < $rightBound) {
            $curSymb = jl_String_charAt(var$9, var$8);
            $vIndex = $curSymb - 4449 | 0;
        }
        if ($vIndex >= 0 && $vIndex < 21) {
            $lIndex = var$8 + 1 | 0;
            $decompSyllable[1] = $curSymb;
            if ($lIndex < $rightBound) {
                $curSymb = jl_String_charAt(var$9, $lIndex);
                $tIndex = $curSymb - 4519 | 0;
            }
            if ($tIndex >= 0 && $tIndex < 28) {
                a: {
                    $strIndex = $lIndex + 1 | 0;
                    $decompSyllable[2] = $curSymb;
                    if ($this.$decomposedCharLength == 3) {
                        $lIndex = $decompSyllable[0];
                        var$15 = $this.$decomposedChar.data;
                        if ($lIndex == var$15[0] && $decompSyllable[1] == var$15[1] && $decompSyllable[2] == var$15[2]) {
                            $strIndex = $this.$next1.$matches($strIndex, $testString, $matchResult);
                            break a;
                        }
                    }
                    $strIndex = (-1);
                }
                return $strIndex;
            }
            b: {
                if ($this.$decomposedCharLength == 2) {
                    $syllIndex = $decompSyllable[0];
                    var$15 = $this.$decomposedChar.data;
                    if ($syllIndex == var$15[0] && $decompSyllable[1] == var$15[1]) {
                        $strIndex = $this.$next1.$matches($lIndex, $testString, $matchResult);
                        break b;
                    }
                }
                $strIndex = (-1);
            }
            return $strIndex;
        }
        return (-1);
    }
    return (-1);
},
jur_HangulDecomposedCharSet_first = ($this, $set) => {
    return $set instanceof jur_HangulDecomposedCharSet && !jl_String_equals(jur_HangulDecomposedCharSet_getDecomposedChar($set), jur_HangulDecomposedCharSet_getDecomposedChar($this)) ? 0 : 1;
},
jur_HangulDecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_CharSet() {
    jur_LeafSet.call(this);
    this.$ch0 = 0;
}
let jur_CharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch0 = $ch;
},
jur_CharSet__init_ = var_0 => {
    let var_1 = new jur_CharSet();
    jur_CharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CharSet_charCount = $this => {
    return 1;
},
jur_CharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch0 != jl_String_charAt($testString, $strIndex) ? (-1) : 1;
},
jur_CharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = jl_String_indexOf($testStr, $this.$ch0, $strIndex);
        if (var$6 < 0)
            return (-1);
        var$7 = $this.$next1;
        $strIndex = var$6 + 1 | 0;
        if (var$7.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_CharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = jl_String_lastIndexOf($testStr, $this.$ch0, $lastIndex);
            if (var$6 < 0)
                break a;
            if (var$6 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$6 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$6 + (-1) | 0;
        }
        return var$6;
    }
    return (-1);
},
jur_CharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$ch0;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_AbstractStringBuilder_append(var$2, var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_CharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return $set.$ch0 != $this.$ch0 ? 0 : 1;
    if (!($set instanceof jur_RangeSet)) {
        if ($set instanceof jur_SupplRangeSet)
            return $set.$contains($this.$ch0);
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return jur_RangeSet_accepts($set, 0, jl_Character_toString($this.$ch0)) <= 0 ? 0 : 1;
};
function jur_UCICharSet() {
    jur_LeafSet.call(this);
    this.$ch2 = 0;
}
let jur_UCICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch2 = jl_Character_toLowerCase(jl_Character_toUpperCase($ch));
},
jur_UCICharSet__init_ = var_0 => {
    let var_1 = new jur_UCICharSet();
    jur_UCICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch2 != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex))) ? (-1) : 1;
},
jur_UCICharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$ch2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(378)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jur_CICharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$ch4 = 0;
    a.$supplement = 0;
}
let jur_CICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch4 = $ch;
    $this.$supplement = jur_Pattern_getSupplement($ch);
},
jur_CICharSet__init_ = var_0 => {
    let var_1 = new jur_CICharSet();
    jur_CICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CICharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3;
    var$3 = $this.$ch4;
    $testString = $testString;
    return var$3 != jl_String_charAt($testString, $strIndex) && $this.$supplement != jl_String_charAt($testString, $strIndex) ? (-1) : 1;
},
jur_CICharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$ch4;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(379)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jur_DecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$readCharsForCodePoint = 0;
    a.$decomposedCharUTF16 = null;
    a.$decomposedChar0 = null;
    a.$decomposedCharLength0 = 0;
}
let jur_DecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_AbstractSet__init_($this);
    $this.$readCharsForCodePoint = 1;
    $this.$decomposedChar0 = $decomposedChar;
    $this.$decomposedCharLength0 = $decomposedCharLength;
},
jur_DecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_DecomposedCharSet();
    jur_DecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $decCodePoint, $rightBound, $curChar, var$7, $decCurCodePoint, var$9, var$10, $readCodePoints;
    $decCodePoint = $rt_createIntArray(4);
    $rightBound = $matchResult.$rightBound;
    if ($strIndex >= $rightBound)
        return (-1);
    $curChar = jur_DecomposedCharSet_codePointAt($this, $strIndex, $testString, $rightBound);
    var$7 = $strIndex + $this.$readCharsForCodePoint | 0;
    $decCurCodePoint = jur_Lexer_getDecomposition($curChar);
    if ($decCurCodePoint === null) {
        $decCurCodePoint = $decCodePoint.data;
        $strIndex = 1;
        $decCurCodePoint[0] = $curChar;
    } else {
        $strIndex = $decCurCodePoint.data.length;
        jl_System_fastArraycopy($decCurCodePoint, 0, $decCodePoint, 0, $strIndex);
        $strIndex = 0 + $strIndex | 0;
    }
    a: {
        if (var$7 < $rightBound) {
            var$9 = $decCodePoint.data;
            $curChar = jur_DecomposedCharSet_codePointAt($this, var$7, $testString, $rightBound);
            while ($strIndex < 4) {
                if (!(($curChar != 832 ? 0 : 1) | ($curChar != 833 ? 0 : 1) | ($curChar != 835 ? 0 : 1) | ($curChar != 836 ? 0 : 1))) {
                    var$10 = $strIndex + 1 | 0;
                    var$9[$strIndex] = $curChar;
                } else {
                    $decCurCodePoint = (jur_Lexer_getDecomposition($curChar)).data;
                    if ($decCurCodePoint.length != 2) {
                        var$10 = $strIndex + 1 | 0;
                        var$9[$strIndex] = $decCurCodePoint[0];
                    } else {
                        $readCodePoints = $strIndex + 1 | 0;
                        var$9[$strIndex] = $decCurCodePoint[0];
                        var$10 = $readCodePoints + 1 | 0;
                        var$9[$readCodePoints] = $decCurCodePoint[1];
                    }
                }
                var$7 = var$7 + $this.$readCharsForCodePoint | 0;
                if (var$7 >= $rightBound) {
                    $strIndex = var$10;
                    break a;
                }
                $curChar = jur_DecomposedCharSet_codePointAt($this, var$7, $testString, $rightBound);
                $strIndex = var$10;
            }
        }
    }
    if ($strIndex != $this.$decomposedCharLength0)
        return (-1);
    $decCurCodePoint = $decCodePoint.data;
    $curChar = 0;
    while (true) {
        if ($curChar >= $strIndex)
            return $this.$next1.$matches(var$7, $testString, $matchResult);
        if ($decCurCodePoint[$curChar] != $this.$decomposedChar0.data[$curChar])
            break;
        $curChar = $curChar + 1 | 0;
    }
    return (-1);
},
jur_DecomposedCharSet_getDecomposedChar = $this => {
    let $strBuff, $i;
    if ($this.$decomposedCharUTF16 === null) {
        $strBuff = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($strBuff);
        $i = 0;
        while ($i < $this.$decomposedCharLength0) {
            jl_AbstractStringBuilder_append1($strBuff, jl_Character_toChars($this.$decomposedChar0.data[$i]));
            $i = $i + 1 | 0;
        }
        $this.$decomposedCharUTF16 = jl_AbstractStringBuilder_toString($strBuff);
    }
    return $this.$decomposedCharUTF16;
},
jur_DecomposedCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = jur_DecomposedCharSet_getDecomposedChar($this);
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(380)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_DecomposedCharSet_codePointAt = ($this, $strIndex, $testString, $rightBound) => {
    let $curChar, $low, $curCodePointUTF16;
    $this.$readCharsForCodePoint = 1;
    if ($strIndex >= ($rightBound - 1 | 0))
        $curChar = jl_String_charAt($testString, $strIndex);
    else {
        $rightBound = $strIndex + 1 | 0;
        $testString = $testString;
        $curChar = jl_String_charAt($testString, $strIndex);
        $low = jl_String_charAt($testString, $rightBound);
        if (jl_Character_isSurrogatePair($curChar, $low)) {
            $curCodePointUTF16 = $rt_createCharArray(2).data;
            $curCodePointUTF16[0] = $curChar;
            $curCodePointUTF16[1] = $low;
            $rightBound = $curCodePointUTF16.length;
            if (0 < $rightBound && $rightBound <= $rightBound) {
                $curChar = 0 < ($rightBound - 1 | 0) && jl_Character_isHighSurrogate($curCodePointUTF16[0]) && jl_Character_isLowSurrogate($curCodePointUTF16[1]) ? jl_Character_toCodePoint($curCodePointUTF16[0], $curCodePointUTF16[1]) : $curCodePointUTF16[0];
                $this.$readCharsForCodePoint = 2;
            } else {
                $testString = new jl_IndexOutOfBoundsException;
                jl_Exception__init_($testString);
                $rt_throw($testString);
            }
        }
    }
    return $curChar;
},
jur_DecomposedCharSet_first = ($this, $set) => {
    return $set instanceof jur_DecomposedCharSet && !jl_String_equals(jur_DecomposedCharSet_getDecomposedChar($set), jur_DecomposedCharSet_getDecomposedChar($this)) ? 0 : 1;
},
jur_DecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_UCIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_CIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_PossessiveGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PossessiveGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $stringIndex_0;
    while (true) {
        $stringIndex_0 = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($stringIndex_0 <= 0)
            break;
        $stringIndex = $stringIndex_0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PosPlusGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PosPlusGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        return (-1);
    if ($nextIndex > $stringIndex) {
        while (true) {
            $stringIndex = $this.$innerSet.$matches($nextIndex, $testString, $matchResult);
            if ($stringIndex <= $nextIndex)
                break;
            $nextIndex = $stringIndex;
        }
        $stringIndex = $nextIndex;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_AltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$innerSet.$setNext($next);
},
jur_PosAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_PosAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex <= 0)
        $nextIndex = $stringIndex;
    return $this.$next1.$matches($nextIndex, $testString, $matchResult);
},
jur_PosAltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
};
function jur_CompositeGroupQuantifierSet() {
    let a = this; jur_GroupQuantifierSet.call(a);
    a.$quantifier = null;
    a.$setCounter = 0;
}
let jur_CompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier = $quant;
    $this.$setCounter = $setCounter;
},
jur_CompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_CompositeGroupQuantifierSet();
    jur_CompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_CompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, $nextIndex;
    $enterCounter = jur_MatchResultImpl_getEnterCounter($matchResult, $this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier.$max0)
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$setCounter;
    $enterCounter = $enterCounter + 1 | 0;
    jur_MatchResultImpl_setEnterCounter($matchResult, $nextIndex, $enterCounter);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
        return $nextIndex;
    }
    $nextIndex = $this.$setCounter;
    $enterCounter = $enterCounter + (-1) | 0;
    jur_MatchResultImpl_setEnterCounter($matchResult, $nextIndex, $enterCounter);
    if ($enterCounter >= $this.$quantifier.$min0)
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
    return (-1);
},
jur_CompositeGroupQuantifierSet_getName = $this => {
    return jur_Quantifier_toString($this.$quantifier);
},
jur_PosCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_PosCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $counter, $max, $nextIndex;
    $counter = 0;
    $max = $this.$quantifier.$max0;
    a: {
        while (true) {
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex <= $stringIndex)
                break a;
            if ($counter >= $max)
                break;
            $counter = $counter + 1 | 0;
            $stringIndex = $nextIndex;
        }
    }
    if ($nextIndex < 0 && $counter < $this.$quantifier.$min0)
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_ReluctantGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_ReluctantGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $res = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        return $res;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_RelAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_RelAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    return $nextIndex;
},
jur_RelCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_RelCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, var$5, $nextIndex;
    $enterCounter = jur_MatchResultImpl_getEnterCounter($matchResult, $this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    var$5 = $this.$quantifier;
    if ($enterCounter >= var$5.$max0) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    if ($enterCounter < var$5.$min0) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    } else {
        $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex >= 0) {
            jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
            return $nextIndex;
        }
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    }
    return $nextIndex;
},
jur_DotAllQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_DotAllQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$rightBound;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotAllQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$rightBound;
    if ($this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult) >= 0)
        return $stringIndex;
    return (-1);
},
jur_DotAllQuantifierSet_getName = $this => {
    return $rt_s(381);
};
function jur_DotQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$lt = null;
}
let jur_DotQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startSearch;
    $strLength = $matchResult.$rightBound;
    $startSearch = jur_DotQuantifierSet_findLineTerminator($this, $stringIndex, $strLength, $testString);
    if ($startSearch >= 0)
        $strLength = $startSearch;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $res, $nextSearch, $leftBound;
    $strLength = $matchResult.$rightBound;
    $res = $this.$next1.$find0($stringIndex, $testString, $matchResult);
    if ($res < 0)
        return (-1);
    $nextSearch = jur_DotQuantifierSet_findLineTerminator($this, $res, $strLength, $testString);
    if ($nextSearch >= 0)
        $strLength = $nextSearch;
    $strLength = jl_Math_max($res, $this.$next1.$findBack($res, $strLength, $testString, $matchResult));
    if ($strLength <= 0)
        $leftBound = $strLength ? (-1) : 0;
    else {
        $leftBound = $strLength - 1 | 0;
        $matchResult = $testString;
        a: {
            while (true) {
                if ($leftBound < $stringIndex) {
                    $leftBound = (-1);
                    break a;
                }
                if ($this.$lt.$isLineTerminator(jl_String_charAt($matchResult, $leftBound)))
                    break;
                $leftBound = $leftBound + (-1) | 0;
            }
        }
    }
    if ($leftBound >= $stringIndex)
        $stringIndex = $leftBound >= $strLength ? $leftBound : $leftBound + 1 | 0;
    return $stringIndex;
},
jur_DotQuantifierSet_findLineTerminator = ($this, $i, $to, $testString) => {
    let var$4;
    var$4 = $testString;
    while (true) {
        if ($i >= $to)
            return (-1);
        if ($this.$lt.$isLineTerminator(jl_String_charAt(var$4, $i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jur_DotQuantifierSet_getName = $this => {
    return $rt_s(382);
},
jur_AbstractLineTerminator = $rt_classWithoutFields(),
jur_AbstractLineTerminator_unixLT = null,
jur_AbstractLineTerminator_unicodeLT = null,
jur_AbstractLineTerminator_getInstance = $flag => {
    let var$2;
    if (!($flag & 1)) {
        var$2 = jur_AbstractLineTerminator_unicodeLT;
        if (var$2 !== null)
            return var$2;
        var$2 = new jur_AbstractLineTerminator$2;
        jur_AbstractLineTerminator_unicodeLT = var$2;
        return var$2;
    }
    var$2 = jur_AbstractLineTerminator_unixLT;
    if (var$2 !== null)
        return var$2;
    var$2 = new jur_AbstractLineTerminator$1;
    jur_AbstractLineTerminator_unixLT = var$2;
    return var$2;
},
jur_PossessiveQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_PossessiveQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    a: {
        while (true) {
            if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound)
                break a;
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$4 < 1)
                break;
            $stringIndex = $stringIndex + var$4 | 0;
        }
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PossessiveAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_PossessiveAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
        var$4 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$4 >= 1)
            $stringIndex = $stringIndex + var$4 | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PossessiveCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_PossessiveCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $min, $max, $i, $shift;
    var$4 = $this.$quantifier0;
    $min = var$4.$min0;
    $max = var$4.$max0;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound)
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_ReluctantQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_ReluctantQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (true) {
        var$4 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$4 >= 0)
            break;
        if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            $stringIndex = $stringIndex + var$4 | 0;
        }
        if (var$4 < 1)
            return (-1);
    }
    return var$4;
},
jur_ReluctantAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_ReluctantAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_ReluctantCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_ReluctantCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $min, $max, $i, var$8, var$9;
    var$4 = $this.$quantifier0;
    $min = var$4.$min0;
    $max = var$4.$max0;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    var$8 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                    if (var$8 >= 0)
                        break;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
                        var$8 = $this.$leaf.$accepts($stringIndex, $testString);
                        $stringIndex = $stringIndex + var$8 | 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$8 < 1)
                        break a;
                    if ($i > $max)
                        break a;
                }
                return var$8;
            }
            return (-1);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        var$9 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$9 < 1)
            break;
        $stringIndex = $stringIndex + var$9 | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_SOLSet = $rt_classWithoutFields(jur_AbstractSet),
jur_SOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if ($strIndex && !($matchResult.$anchoringBounds && $strIndex == $matchResult.$leftBound))
        return (-1);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_SOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_SOLSet_getName = $this => {
    return $rt_s(383);
};
function jur_WordBoundary() {
    jur_AbstractSet.call(this);
    this.$positive = 0;
}
let jur_WordBoundary__init_0 = ($this, $positive) => {
    jur_AbstractSet__init_($this);
    $this.$positive = $positive;
},
jur_WordBoundary__init_ = var_0 => {
    let var_1 = new jur_WordBoundary();
    jur_WordBoundary__init_0(var_1, var_0);
    return var_1;
},
jur_WordBoundary_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $ch1, $ch2, $left, $leftBound;
    $ch1 = $stringIndex >= $matchResult.$rightBound ? 32 : jl_String_charAt($testString, $stringIndex);
    if (!$stringIndex)
        $ch2 = 32;
    else {
        $left = $stringIndex - 1 | 0;
        $ch2 = jl_String_charAt($testString, $left);
    }
    $leftBound = $matchResult.$transparentBounds ? 0 : $matchResult.$leftBound;
    return ($ch1 != 32 && !jur_WordBoundary_isSpace($this, $ch1, $stringIndex, $leftBound, $testString) ? 0 : 1) ^ ($ch2 != 32 && !jur_WordBoundary_isSpace($this, $ch2, $stringIndex - 1 | 0, $leftBound, $testString) ? 0 : 1) ^ $this.$positive ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_WordBoundary_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_WordBoundary_getName = $this => {
    return $rt_s(384);
},
jur_WordBoundary_isSpace = ($this, $ch, $index, $leftBound, $testString) => {
    if (!jl_Character_isLetterOrDigit($ch) && $ch != 95) {
        a: {
            if (jl_Character_getType($ch) == 6) {
                $testString = $testString;
                while (true) {
                    $index = $index + (-1) | 0;
                    if ($index < $leftBound)
                        break a;
                    $ch = jl_String_charAt($testString, $index);
                    if (jl_Character_isLetterOrDigit($ch))
                        return 0;
                    if (jl_Character_getType($ch) != 6)
                        return 1;
                }
            }
        }
        return 1;
    }
    return 0;
},
jur_PreviousMatch = $rt_classWithoutFields(jur_AbstractSet),
jur_PreviousMatch_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex != $matchResult.$previousMatch)
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PreviousMatch_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PreviousMatch_getName = $this => {
    return $rt_s(385);
};
function jur_EOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter0 = 0;
}
let jur_EOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter0 = $counter;
},
jur_EOLSet__init_0 = var_0 => {
    let var_1 = new jur_EOLSet();
    jur_EOLSet__init_(var_1, var_0);
    return var_1;
},
jur_EOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, var$5, var$6, $ch;
    $rightBound = $matchResult.$anchoringBounds ? $matchResult.$rightBound : $testString.$nativeString.length;
    if ($strIndex >= $rightBound) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    var$5 = $rightBound - $strIndex | 0;
    if (var$5 == 2) {
        var$6 = $testString;
        if (jl_String_charAt(var$6, $strIndex) == 13 && jl_String_charAt(var$6, $strIndex + 1 | 0) == 10) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        }
    }
    a: {
        if (var$5 == 1) {
            $ch = jl_String_charAt($testString, $strIndex);
            if ($ch == 10)
                break a;
            if ($ch == 13)
                break a;
            if ($ch == 133)
                break a;
            if (($ch | 1) == 8233)
                break a;
        }
        return (-1);
    }
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_EOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter0) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, (-1));
    return $res;
},
jur_EOLSet_getName = $this => {
    return $rt_s(386);
},
jur_EOISet = $rt_classWithoutFields(jur_AbstractSet),
jur_EOISet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex < (!$matchResult.$transparentBounds ? $matchResult.$rightBound : $testString.$nativeString.length))
        return (-1);
    $matchResult.$hitEnd = 1;
    $matchResult.$requireEnd = 1;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_EOISet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_EOISet_getName = $this => {
    return $rt_s(387);
};
function jur_MultiLineSOLSet() {
    jur_AbstractSet.call(this);
    this.$lt1 = null;
}
let jur_MultiLineSOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let var$4, var$5, var$6;
    a: {
        if ($strIndex != $matchResult.$rightBound) {
            if (!$strIndex)
                break a;
            if ($matchResult.$anchoringBounds && $strIndex == $matchResult.$leftBound)
                break a;
            var$4 = $this.$lt1;
            var$5 = $strIndex - 1 | 0;
            var$6 = $testString;
            if (var$4.$isAfterLineTerminator(jl_String_charAt(var$6, var$5), jl_String_charAt(var$6, $strIndex)))
                break a;
        }
        return (-1);
    }
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_MultiLineSOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_MultiLineSOLSet_getName = $this => {
    return $rt_s(388);
},
jur_DotAllSet = $rt_classWithoutFields(jur_JointSet),
jur_DotAllSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_DotAllSet__init_0 = () => {
    let var_0 = new jur_DotAllSet();
    jur_DotAllSet__init_(var_0);
    return var_0;
},
jur_DotAllSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high;
    $strLength = $matchResult.$rightBound;
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$6 = $testString;
    $high = jl_String_charAt(var$6, $stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        $stringIndex = $stringIndex + 2 | 0;
        if ($stringIndex <= $strLength && jl_Character_isSurrogatePair($high, jl_String_charAt(var$6, var$5)))
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotAllSet_getName = $this => {
    return $rt_s(389);
},
jur_DotAllSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotAllSet_getType = $this => {
    return (-2147483602);
},
jur_DotAllSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_DotSet() {
    jur_JointSet.call(this);
    this.$lt0 = null;
}
let jur_DotSet__init_ = ($this, $lt) => {
    jur_AbstractSet__init_($this);
    $this.$lt0 = $lt;
},
jur_DotSet__init_0 = var_0 => {
    let var_1 = new jur_DotSet();
    jur_DotSet__init_(var_1, var_0);
    return var_1;
},
jur_DotSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high, $low;
    $strLength = $matchResult.$rightBound;
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$6 = $testString;
    $high = jl_String_charAt(var$6, $stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        $stringIndex = $stringIndex + 2 | 0;
        if ($stringIndex <= $strLength) {
            $low = jl_String_charAt(var$6, var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$lt0.$isLineTerminator(jl_Character_toCodePoint($high, $low)) ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
    }
    return $this.$lt0.$isLineTerminator($high) ? (-1) : $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotSet_getName = $this => {
    return $rt_s(130);
},
jur_DotSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotSet_getType = $this => {
    return (-2147483602);
},
jur_DotSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_UEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter2 = 0;
}
let jur_UEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter2 = $counter;
},
jur_UEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UEOLSet();
    jur_UEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = $matchResult.$anchoringBounds ? $matchResult.$rightBound : $testString.$nativeString.length;
    if ($strIndex >= $rightBound) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (($rightBound - $strIndex | 0) == 1 && jl_String_charAt($testString, $strIndex) == 10) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 1);
        return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_UEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter2) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, (-1));
    return $res;
},
jur_UEOLSet_getName = $this => {
    return $rt_s(386);
};
function jur_UMultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter3 = 0;
}
let jur_UMultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter3 = $counter;
},
jur_UMultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UMultiLineEOLSet();
    jur_UMultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UMultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if (($matchResult.$anchoringBounds ? $matchResult.$rightBound - $strIndex | 0 : $testString.$nativeString.length - $strIndex | 0) <= 0) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (jl_String_charAt($testString, $strIndex) != 10)
        return (-1);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, 1);
    return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
},
jur_UMultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter3) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, (-1));
    return $res;
},
jur_UMultiLineEOLSet_getName = $this => {
    return $rt_s(390);
};
function jur_MultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter = 0;
}
let jur_MultiLineEOLSet__init_0 = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter = $counter;
},
jur_MultiLineEOLSet__init_ = var_0 => {
    let var_1 = new jur_MultiLineEOLSet();
    jur_MultiLineEOLSet__init_0(var_1, var_0);
    return var_1;
},
jur_MultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif, $ch1, $ch2, var$7;
    $strDif = $matchResult.$anchoringBounds ? $matchResult.$rightBound - $strIndex | 0 : $testString.$nativeString.length - $strIndex | 0;
    if (!$strDif) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($strDif < 2) {
        $ch1 = jl_String_charAt($testString, $strIndex);
        $ch2 = 97;
    } else {
        var$7 = $testString;
        $ch1 = jl_String_charAt(var$7, $strIndex);
        $ch2 = jl_String_charAt(var$7, $strIndex + 1 | 0);
    }
    switch ($ch1) {
        case 10:
        case 133:
        case 8232:
        case 8233:
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        case 13:
            if ($ch2 != 10) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
                return $this.$next1.$matches($strIndex, $testString, $matchResult);
            }
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        default:
    }
    return (-1);
},
jur_MultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, (-1));
    return $res;
},
jur_MultiLineEOLSet_getName = $this => {
    return $rt_s(391);
};
function jur_CIBackReferenceSet() {
    let a = this; jur_JointSet.call(a);
    a.$referencedGroup = 0;
    a.$consCounter1 = 0;
}
let jur_CIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_AbstractSet__init_($this);
    $this.$referencedGroup = $groupIndex;
    $this.$consCounter1 = $consCounter;
},
jur_CIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIBackReferenceSet();
    jur_CIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7, var$8;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + $group.$nativeString.length | 0) <= $matchResult.$rightBound) {
        $i = 0;
        var$6 = $testString;
        while (true) {
            if ($i >= $group.$nativeString.length) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, $group.$nativeString.length);
                return $this.$next1.$matches($stringIndex + $group.$nativeString.length | 0, $testString, $matchResult);
            }
            var$7 = jl_String_charAt($group, $i);
            var$8 = $stringIndex + $i | 0;
            if (var$7 != jl_String_charAt(var$6, var$8) && jur_Pattern_getSupplement(jl_String_charAt($group, $i)) != jl_String_charAt(var$6, var$8))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_CIBackReferenceSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_CIBackReferenceSet_getString = ($this, $matchResult) => {
    let var$2, var$3;
    var$2 = $this.$referencedGroup;
    var$3 = jur_MatchResultImpl_getStart($matchResult, var$2);
    var$2 = jur_MatchResultImpl_getEnd($matchResult, var$2);
    return (var$2 | var$3 | (var$2 - var$3 | 0)) >= 0 && var$2 <= $matchResult.$string3.$nativeString.length ? jl_String_substring($matchResult.$string3, var$3, var$2) : null;
},
jur_CIBackReferenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$groupIndex;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(392)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_CIBackReferenceSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter1) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, (-1));
    return $res;
},
jur_BackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_BackReferenceSet__init_0 = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_BackReferenceSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_BackReferenceSet();
    jur_BackReferenceSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_BackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $shift;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + $group.$nativeString.length | 0) <= $matchResult.$rightBound) {
        $shift = !jl_String_startsWith0($testString, $group, $stringIndex) ? (-1) : $group.$nativeString.length;
        if ($shift < 0)
            return (-1);
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, $shift);
        return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_BackReferenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $group, $strLength, $testStr;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    $strLength = $matchResult.$leftBound;
    if ($group !== null && ($strIndex + $group.$nativeString.length | 0) <= $strLength) {
        $testStr = $testString;
        while (true) {
            if ($strIndex > $strLength)
                return (-1);
            $strIndex = jl_String_indexOf0($testStr, $group, $strIndex);
            if ($strIndex < 0)
                return (-1);
            if ($this.$next1.$matches($strIndex + $group.$nativeString.length | 0, $testString, $matchResult) >= 0)
                break;
            $strIndex = $strIndex + 1 | 0;
        }
        return $strIndex;
    }
    return (-1);
},
jur_BackReferenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $group, $testStr, var$7;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group === null)
        return (-1);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = jl_String_lastIndexOf0($testStr, $group, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$7 + $group.$nativeString.length | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_BackReferenceSet_first = ($this, $set) => {
    return 1;
},
jur_BackReferenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$groupIndex;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(393)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jur_UCIBackReferenceSet() {
    jur_CIBackReferenceSet.call(this);
    this.$groupIndex1 = 0;
}
let jur_UCIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_UCIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIBackReferenceSet();
    jur_UCIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_UCIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + $group.$nativeString.length | 0) <= $matchResult.$rightBound) {
        $i = 0;
        var$6 = $testString;
        while (true) {
            if ($i >= $group.$nativeString.length) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, $group.$nativeString.length);
                return $this.$next1.$matches($stringIndex + $group.$nativeString.length | 0, $testString, $matchResult);
            }
            if (jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($group, $i))) != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt(var$6, $stringIndex + $i | 0))))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_UCIBackReferenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$groupIndex1;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(394)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuffer_append = ($this, $s) => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    var$2 = 0;
    $s = $s;
    var$3 = $s.$nativeString.length;
    var$4 = $this;
    var$5 = var$4.$length1;
    var$4 = var$4;
    if (var$2 <= var$3 && var$3 <= $s.$nativeString.length) {
        jl_AbstractStringBuilder_insertSpace(var$4, var$5, (var$5 + var$3 | 0) - var$2 | 0);
        while (var$2 < var$3) {
            var$6 = var$4.$buffer.data;
            var$7 = var$5 + 1 | 0;
            var$6[var$5] = jl_String_charAt($s, var$2);
            var$2 = var$2 + 1 | 0;
            var$5 = var$7;
        }
        return $this;
    }
    $s = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_0($s);
    $rt_throw($s);
},
jl_StringBuffer_insert0 = ($this, var$1, var$2, var$3, var$4) => {
    jl_AbstractStringBuilder_insert0($this, var$1, var$2, var$3, var$4);
    return $this;
},
jl_StringBuffer_append0 = ($this, var$1, var$2, var$3) => {
    jl_AbstractStringBuilder_append3($this, var$1, var$2, var$3);
    return $this;
},
jl_StringBuffer_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuffer_insert1 = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert1($this, var$1, var$2);
    return $this;
},
jl_StringBuffer_insert = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert($this, var$1, var$2);
    return $this;
};
function jur_SequenceSet() {
    let a = this; jur_LeafSet.call(a);
    a.$string = null;
    a.$leftToRight = null;
    a.$rightToLeft = null;
}
let jur_SequenceSet_accepts = ($this, $strIndex, $testString) => {
    return !jur_SequenceSet_startsWith($this, $testString, $strIndex) ? (-1) : $this.$charCount0;
},
jur_SequenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, var$7;
    $strLength = $matchResult.$rightBound;
    var$5 = $testString;
    while (true) {
        if ($strIndex > $strLength)
            return (-1);
        var$6 = jl_String_charAt($this.$string, $this.$charCount0 - 1 | 0);
        a: {
            while (true) {
                var$7 = $this.$charCount0;
                if ($strIndex > ($strLength - var$7 | 0)) {
                    $strIndex = (-1);
                    break a;
                }
                var$7 = jl_String_charAt(var$5, ($strIndex + var$7 | 0) - 1 | 0);
                if (var$7 == var$6 && jur_SequenceSet_startsWith($this, $testString, $strIndex))
                    break;
                $strIndex = $strIndex + jur_SequenceSet$IntHash_get($this.$leftToRight, var$7) | 0;
            }
        }
        if ($strIndex < 0)
            return (-1);
        if ($this.$next1.$matches($strIndex + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $strIndex = $strIndex + 1 | 0;
    }
    return $strIndex;
},
jur_SequenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let var$5, var$6, var$7;
    var$5 = $testString;
    while (true) {
        if ($lastIndex < $strIndex)
            return (-1);
        var$6 = jl_String_charAt($this.$string, 0);
        var$7 = (var$5.$nativeString.length - $lastIndex | 0) - $this.$charCount0 | 0;
        if (var$7 <= 0)
            $lastIndex = $lastIndex + var$7 | 0;
        a: {
            while (true) {
                if ($lastIndex < $strIndex) {
                    $lastIndex = (-1);
                    break a;
                }
                var$7 = jl_String_charAt(var$5, $lastIndex);
                if (var$7 == var$6 && jur_SequenceSet_startsWith($this, $testString, $lastIndex))
                    break;
                $lastIndex = $lastIndex - jur_SequenceSet$IntHash_get($this.$rightToLeft, var$7) | 0;
            }
        }
        if ($lastIndex < 0)
            return (-1);
        if ($this.$next1.$matches($lastIndex + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $lastIndex = $lastIndex + (-1) | 0;
    }
    return $lastIndex;
},
jur_SequenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$string;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(395)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_SequenceSet_first = ($this, $set) => {
    let var$2;
    if ($set instanceof jur_CharSet)
        return $set.$ch0 != jl_String_charAt($this.$string, 0) ? 0 : 1;
    if ($set instanceof jur_RangeSet)
        return jur_RangeSet_accepts($set, 0, jl_String_substring($this.$string, 0, 1)) <= 0 ? 0 : 1;
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return $this.$string.$nativeString.length > 1 && $set.$ch1 == jl_Character_toCodePoint(jl_String_charAt($this.$string, 0), jl_String_charAt($this.$string, 1)) ? 1 : 0;
    }
    a: {
        b: {
            $set = $set;
            if (!$set.$contains(jl_String_charAt($this.$string, 0))) {
                if ($this.$string.$nativeString.length <= 1)
                    break b;
                if (!$set.$contains(jl_Character_toCodePoint(jl_String_charAt($this.$string, 0), jl_String_charAt($this.$string, 1))))
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jur_SequenceSet_startsWith = ($this, $str, $from) => {
    let $i;
    $i = 0;
    $str = $str;
    while ($i < $this.$charCount0) {
        if (jl_String_charAt($str, $i + $from | 0) != jl_String_charAt($this.$string, $i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
};
function jur_UCISequenceSet() {
    jur_LeafSet.call(this);
    this.$string2 = null;
}
let jur_UCISequenceSet__init_ = ($this, $substring) => {
    let $res, $i, var$4;
    jur_LeafSet__init_($this);
    $res = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($res);
    $i = 0;
    while (true) {
        var$4 = $rt_compare($i, $substring.$length1);
        if (var$4 >= 0) {
            $this.$string2 = jl_AbstractStringBuilder_toString($res);
            $this.$charCount0 = $res.$length1;
            return;
        }
        if ($i < 0)
            break;
        if (var$4 >= 0)
            break;
        jl_AbstractStringBuilder_append($res, jl_Character_toLowerCase(jl_Character_toUpperCase($substring.$buffer.data[$i])));
        $i = $i + 1 | 0;
    }
    $substring = new jl_IndexOutOfBoundsException;
    jl_Exception__init_($substring);
    $rt_throw($substring);
},
jur_UCISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_UCISequenceSet();
    jur_UCISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4;
    $i = 0;
    var$4 = $testString;
    while (true) {
        if ($i >= $this.$string2.$nativeString.length)
            return $this.$string2.$nativeString.length;
        if (jl_String_charAt($this.$string2, $i) != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt(var$4, $strIndex + $i | 0))))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_UCISequenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$string2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(396)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jur_CISequenceSet() {
    jur_LeafSet.call(this);
    this.$string1 = null;
}
let jur_CISequenceSet__init_ = ($this, $substring) => {
    jur_LeafSet__init_($this);
    $this.$string1 = jl_AbstractStringBuilder_toString($substring);
    $this.$charCount0 = $substring.$length1;
},
jur_CISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_CISequenceSet();
    jur_CISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_CISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4, var$5;
    $i = 0;
    $testString = $testString;
    while (true) {
        if ($i >= $this.$string1.$nativeString.length)
            return $this.$string1.$nativeString.length;
        var$4 = jl_String_charAt($this.$string1, $i);
        var$5 = $strIndex + $i | 0;
        if (var$4 != jl_String_charAt($testString, var$5) && jur_Pattern_getSupplement(jl_String_charAt($this.$string1, $i)) != jl_String_charAt($testString, var$5))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_CISequenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$string1;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(397)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jur_UCISupplCharSet() {
    jur_LeafSet.call(this);
    this.$ch3 = 0;
}
let jur_UCISupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let $low, $high;
    $low = $strIndex + 1 | 0;
    $testString = $testString;
    $high = jl_String_charAt($testString, $strIndex);
    $low = jl_String_charAt($testString, $low);
    return $this.$ch3 != jl_Character_toLowerCase0(jl_Character_toUpperCase0(jl_Character_toCodePoint($high, $low))) ? (-1) : 2;
},
jur_UCISupplCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = jl_String__init_(jl_Character_toChars($this.$ch3));
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(378)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jur_LowSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$low = 0;
}
let jur_LowSurrogateCharSet__init_0 = ($this, $low) => {
    jur_AbstractSet__init_($this);
    $this.$low = $low;
},
jur_LowSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_LowSurrogateCharSet();
    jur_LowSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_LowSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_LowSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, var$5, $low;
    var$4 = $stringIndex + 1 | 0;
    if (var$4 > $matchResult.$rightBound) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$5 = $testString;
    $low = jl_String_charAt(var$5, $stringIndex);
    if ($stringIndex > $matchResult.$leftBound && jl_Character_isHighSurrogate(jl_String_charAt(var$5, $stringIndex - 1 | 0)))
        return (-1);
    if ($this.$low != $low)
        return (-1);
    return $this.$next1.$matches(var$4, $testString, $matchResult);
},
jur_LowSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $startStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $startStr = $matchResult.$leftBound;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$7 = jl_String_indexOf($testStr, $this.$low, $strIndex);
        if (var$7 < 0)
            return (-1);
        if (var$7 > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, var$7 - 1 | 0))) {
            $strIndex = var$7 + 1 | 0;
            continue;
        }
        var$8 = $this.$next1;
        $strIndex = var$7 + 1 | 0;
        if (var$8.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$7;
},
jur_LowSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $startStr, $testStr;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $startStr = $matchResult.$leftBound;
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$low, $lastIndex);
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($lastIndex > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, $lastIndex - 1 | 0))) {
                $lastIndex = $lastIndex + (-2) | 0;
                continue;
            }
            if ($this.$next1.$matches($lastIndex + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_LowSurrogateCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$low;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_AbstractStringBuilder_append(var$2, var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_LowSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_HighSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_LowSurrogateCharSet))
        return 1;
    return $set.$low != $this.$low ? 0 : 1;
},
jur_LowSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_HighSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$high = 0;
}
let jur_HighSurrogateCharSet__init_0 = ($this, $high) => {
    jur_AbstractSet__init_($this);
    $this.$high = $high;
},
jur_HighSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_HighSurrogateCharSet();
    jur_HighSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_HighSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HighSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $low, var$7, $high;
    $strLength = $matchResult.$rightBound;
    var$5 = $stringIndex + 1 | 0;
    $low = $rt_compare(var$5, $strLength);
    if ($low > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$7 = $testString;
    $high = jl_String_charAt(var$7, $stringIndex);
    if ($low < 0 && jl_Character_isLowSurrogate(jl_String_charAt(var$7, var$5)))
        return (-1);
    if ($this.$high != $high)
        return (-1);
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_HighSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = jl_String_indexOf($testStr, $this.$high, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, $strIndex))) {
            $strIndex = var$6 + 2 | 0;
            continue;
        }
        if ($this.$next1.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_HighSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$high, $lastIndex);
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            var$7 = $lastIndex + 1 | 0;
            if (var$7 < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, var$7))) {
                $lastIndex = $lastIndex + (-1) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$7, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_HighSurrogateCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$high;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_AbstractStringBuilder_append(var$2, var$1);
    return jl_AbstractStringBuilder_toString(var$2);
},
jur_HighSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_LowSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_HighSurrogateCharSet))
        return 1;
    return $set.$high != $this.$high ? 0 : 1;
},
jur_HighSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_SupplCharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$high0 = 0;
    a.$low0 = 0;
    a.$ch1 = 0;
}
let jur_SupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let $low, $high;
    $low = $strIndex + 1 | 0;
    $testString = $testString;
    $high = jl_String_charAt($testString, $strIndex);
    $low = jl_String_charAt($testString, $low);
    return $this.$high0 == $high && $this.$low0 == $low ? 2 : (-1);
},
jur_SupplCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, $ch;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    while ($strIndex < $strLength) {
        $strIndex = jl_String_indexOf($testStr, $this.$high0, $strIndex);
        if ($strIndex < 0)
            return (-1);
        $strIndex = $strIndex + 1 | 0;
        if ($strIndex >= $strLength)
            continue;
        $ch = jl_String_charAt($testStr, $strIndex);
        if ($this.$low0 == $ch && $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult) >= 0)
            return $strIndex + (-1) | 0;
        $strIndex = $strIndex + 1 | 0;
    }
    return (-1);
},
jur_SupplCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$low0, $lastIndex) + (-1) | 0;
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($this.$high0 == jl_String_charAt($testStr, $lastIndex) && $this.$next1.$matches($lastIndex + 2 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_SupplCharSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$high0;
    var$2 = $this.$low0;
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_AbstractStringBuilder_append(var$3, var$1);
    jl_AbstractStringBuilder_append(var$3, var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jur_SupplCharSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return $set.$ch1 != $this.$ch1 ? 0 : 1;
    if ($set instanceof jur_SupplRangeSet)
        return $set.$contains($this.$ch1);
    if ($set instanceof jur_CharSet)
        return 0;
    if (!($set instanceof jur_RangeSet))
        return 1;
    return 0;
},
jur_AbstractLineTerminator$1 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$1_isLineTerminator = ($this, $ch) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$1_isAfterLineTerminator = ($this, $ch, $ch2) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$2 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$2_isLineTerminator = ($this, $ch) => {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
},
jur_AbstractLineTerminator$2_isAfterLineTerminator = ($this, $ch, $ch2) => {
    a: {
        b: {
            if ($ch != 10 && $ch != 133 && ($ch | 1) != 8233) {
                if ($ch != 13)
                    break b;
                if ($ch2 == 10)
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = 0;
    }
    return $ch;
};
function jur_SequenceSet$IntHash() {
    let a = this; jl_Object.call(a);
    a.$table = null;
    a.$values = null;
    a.$mask = 0;
    a.$size8 = 0;
}
let jur_SequenceSet$IntHash__init_0 = ($this, $size) => {
    let var$2, var$3;
    while (true) {
        var$2 = $this.$mask;
        if ($size < var$2)
            break;
        $this.$mask = var$2 << 1 | 1;
    }
    var$3 = var$2 << 1 | 1;
    $this.$mask = var$3;
    var$3 = var$3 + 1 | 0;
    $this.$table = $rt_createIntArray(var$3);
    $this.$values = $rt_createIntArray(var$3);
    $this.$size8 = $size;
},
jur_SequenceSet$IntHash__init_ = var_0 => {
    let var_1 = new jur_SequenceSet$IntHash();
    jur_SequenceSet$IntHash__init_0(var_1, var_0);
    return var_1;
},
jur_SequenceSet$IntHash_put = ($this, $key, $value) => {
    let $i, var$4, $hashCode, var$6;
    $i = 0;
    var$4 = $this.$mask;
    $hashCode = $key & var$4;
    while (true) {
        var$6 = $this.$table.data;
        if (!var$6[$hashCode])
            break;
        if (var$6[$hashCode] == $key)
            break;
        $i = ($i + 1 | 0) & var$4;
        $hashCode = ($hashCode + $i | 0) & var$4;
    }
    var$6[$hashCode] = $key;
    $this.$values.data[$hashCode] = $value;
},
jur_SequenceSet$IntHash_get = ($this, $key) => {
    let var$2, $hashCode, $i, $storedKey;
    var$2 = $this.$mask;
    $hashCode = $key & var$2;
    $i = 0;
    while (true) {
        $storedKey = $this.$table.data[$hashCode];
        if (!$storedKey)
            break;
        if ($storedKey == $key)
            return $this.$values.data[$hashCode];
        $i = ($i + 1 | 0) & var$2;
        $hashCode = ($hashCode + $i | 0) & var$2;
    }
    return $this.$size8;
},
jur_AbstractCharClass$LazySpace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpace__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazySpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpace();
    jur_AbstractCharClass$LazySpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpace_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add(jur_CharClass__init_(), 9, 13), 32);
},
jur_AbstractCharClass$LazyDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyDigit__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyDigit__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyDigit();
    jur_AbstractCharClass$LazyDigit__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyDigit_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 48, 57);
},
jur_AbstractCharClass$LazyLower = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyLower__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyLower__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyLower();
    jur_AbstractCharClass$LazyLower__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyLower_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 97, 122);
},
jur_AbstractCharClass$LazyUpper = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyUpper__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyUpper__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyUpper();
    jur_AbstractCharClass$LazyUpper__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyUpper_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 65, 90);
},
jur_AbstractCharClass$LazyASCII = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyASCII__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyASCII__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyASCII();
    jur_AbstractCharClass$LazyASCII__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyASCII_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 0, 127);
},
jur_AbstractCharClass$LazyAlpha = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyAlpha__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyAlpha__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlpha();
    jur_AbstractCharClass$LazyAlpha__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlpha_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 97, 122), 65, 90);
},
jur_AbstractCharClass$LazyAlnum = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlpha),
jur_AbstractCharClass$LazyAlnum__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyAlnum__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlnum();
    jur_AbstractCharClass$LazyAlnum__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlnum_computeValue = $this => {
    return jur_CharClass_add(jur_AbstractCharClass$LazyAlpha_computeValue($this), 48, 57);
},
jur_AbstractCharClass$LazyPunct = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyPunct__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyPunct__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyPunct();
    jur_AbstractCharClass$LazyPunct__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPunct_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 33, 64), 91, 96), 123, 126);
},
jur_AbstractCharClass$LazyGraph = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlnum),
jur_AbstractCharClass$LazyGraph__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyGraph__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyGraph();
    jur_AbstractCharClass$LazyGraph__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyGraph_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_AbstractCharClass$LazyAlnum_computeValue($this), 33, 64), 91, 96), 123, 126);
},
jur_AbstractCharClass$LazyPrint = $rt_classWithoutFields(jur_AbstractCharClass$LazyGraph),
jur_AbstractCharClass$LazyPrint__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyPrint__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyPrint();
    jur_AbstractCharClass$LazyPrint__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPrint_computeValue = $this => {
    return jur_CharClass_add0(jur_AbstractCharClass$LazyGraph_computeValue($this), 32);
},
jur_AbstractCharClass$LazyBlank = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyBlank__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyBlank__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyBlank();
    jur_AbstractCharClass$LazyBlank__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyBlank_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_(), 32), 9);
},
jur_AbstractCharClass$LazyCntrl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyCntrl__init_0 = $this => {
    return;
};
let jur_AbstractCharClass$LazyCntrl__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyCntrl();
    jur_AbstractCharClass$LazyCntrl__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyCntrl_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add(jur_CharClass__init_(), 0, 31), 127);
},
jur_AbstractCharClass$LazyXDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyXDigit__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyXDigit__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyXDigit();
    jur_AbstractCharClass$LazyXDigit__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyXDigit_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 48, 57), 97, 102), 65, 70);
},
jur_AbstractCharClass$LazyJavaLowerCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLowerCase__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaLowerCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLowerCase();
    jur_AbstractCharClass$LazyJavaLowerCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLowerCase_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLowerCase$1;
    $chCl.$this$032 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaUpperCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUpperCase__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaUpperCase__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUpperCase();
    jur_AbstractCharClass$LazyJavaUpperCase__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUpperCase_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUpperCase$1;
    $chCl.$this$035 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaWhitespace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaWhitespace__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaWhitespace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaWhitespace();
    jur_AbstractCharClass$LazyJavaWhitespace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaWhitespace_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaWhitespace$1;
    var$1.$this$030 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaMirrored = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaMirrored__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaMirrored__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaMirrored();
    jur_AbstractCharClass$LazyJavaMirrored__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaMirrored_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaMirrored$1;
    var$1.$this$027 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaDefined = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDefined__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaDefined__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDefined();
    jur_AbstractCharClass$LazyJavaDefined__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDefined_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaDefined$1;
    $chCl.$this$042 = $this;
    jur_AbstractCharClass__init_($chCl);
    ju_BitSet_set($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDigit__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDigit();
    jur_AbstractCharClass$LazyJavaDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDigit_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaDigit$1;
    $chCl.$this$036 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1;
    $chCl.$this$046 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaISOControl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaISOControl__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaISOControl__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaISOControl();
    jur_AbstractCharClass$LazyJavaISOControl__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaISOControl_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaISOControl$1;
    var$1.$this$033 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1;
    $chCl.$this$017 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1;
    $chCl.$this$037 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaLetter = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetter__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaLetter__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetter();
    jur_AbstractCharClass$LazyJavaLetter__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetter_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLetter$1;
    $chCl.$this$041 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
};
let jur_AbstractCharClass$LazyJavaLetterOrDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetterOrDigit();
    jur_AbstractCharClass$LazyJavaLetterOrDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLetterOrDigit$1;
    $chCl.$this$044 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaSpaceChar = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaSpaceChar__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaSpaceChar__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaSpaceChar();
    jur_AbstractCharClass$LazyJavaSpaceChar__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaSpaceChar_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaSpaceChar$1;
    var$1.$this$031 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaTitleCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaTitleCase__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaTitleCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaTitleCase();
    jur_AbstractCharClass$LazyJavaTitleCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaTitleCase_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaTitleCase$1;
    var$1.$this$039 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1;
    $chCl.$this$018 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1;
    $chCl.$this$052 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyWord__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyWord();
    jur_AbstractCharClass$LazyWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyWord_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 97, 122), 65, 90), 48, 57), 95);
},
jur_AbstractCharClass$LazyNonWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyWord),
jur_AbstractCharClass$LazyNonWord__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyNonWord__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonWord();
    jur_AbstractCharClass$LazyNonWord__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonWord_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazyWord_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyNonSpace = $rt_classWithoutFields(jur_AbstractCharClass$LazySpace),
jur_AbstractCharClass$LazyNonSpace__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyNonSpace__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonSpace();
    jur_AbstractCharClass$LazyNonSpace__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonSpace_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazySpace_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyNonDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyDigit),
jur_AbstractCharClass$LazyNonDigit__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyNonDigit__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonDigit();
    jur_AbstractCharClass$LazyNonDigit__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazyDigit_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
};
function jur_AbstractCharClass$LazyRange() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$start3 = 0;
    a.$end1 = 0;
}
let jur_AbstractCharClass$LazyRange__init_0 = ($this, $start, $end) => {
    $this.$start3 = $start;
    $this.$end1 = $end;
},
jur_AbstractCharClass$LazyRange__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyRange();
    jur_AbstractCharClass$LazyRange__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyRange_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), $this.$start3, $this.$end1);
},
jur_AbstractCharClass$LazySpecialsBlock = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpecialsBlock__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazySpecialsBlock__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazySpecialsBlock();
    jur_AbstractCharClass$LazySpecialsBlock__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpecialsBlock_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 65279, 65279), 65520, 65533);
};
function jur_AbstractCharClass$LazyCategory() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category1 = 0;
    a.$mayContainSupplCodepoints0 = 0;
    a.$containsAllSurrogates0 = 0;
}
let jur_AbstractCharClass$LazyCategory__init_0 = ($this, $cat, $mayContainSupplCodepoints) => {
    $this.$mayContainSupplCodepoints0 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategory__init_2 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    $this.$containsAllSurrogates0 = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints0 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_1 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_2(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategory_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategory__init_0($this.$category1);
    if ($this.$containsAllSurrogates0)
        ju_BitSet_set($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints0;
    return $chCl;
};
function jur_AbstractCharClass$LazyCategoryScope() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category0 = 0;
    a.$mayContainSupplCodepoints1 = 0;
    a.$containsAllSurrogates = 0;
}
let jur_AbstractCharClass$LazyCategoryScope__init_1 = ($this, $cat, $mayContainSupplCodepoints) => {
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategoryScope__init_0 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    $this.$containsAllSurrogates = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategoryScope_computeValue = $this => {
    let $chCl;
    $chCl = new jur_UnicodeCategoryScope;
    jur_UnicodeCategory__init_($chCl, $this.$category0);
    if ($this.$containsAllSurrogates)
        ju_BitSet_set($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints1;
    return $chCl;
},
jur_IntHash = $rt_classWithoutFields(),
otpp_ResourceAccessor = $rt_classWithoutFields(),
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeCaseMapping = $text => {
    let $flow, $sz, $data, var$5, $last, $i, var$8;
    $flow = otci_CharFlow__init_(jl_String_toCharArray($text));
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    var$5 = $data.data;
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        $last = $last + otci_Base46_decodeUnsigned($flow) | 0;
        var$8 = $i * 2 | 0;
        var$5[var$8] = $last;
        var$5[var$8 + 1 | 0] = otci_Base46_decode($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping = $data => {
    let $result, var$3, $last, $lastValue, $i, var$7, $key, $value, var$10, var$11;
    $result = $rt_createIntArray(65536);
    var$3 = $result.data;
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$7 = $data.data;
            if ($i >= var$7.length)
                break a;
            $key = var$7[$i];
            $value = var$7[$i + 1 | 0];
            var$10 = var$3.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill0($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    var$11 = new otciu_CharMapping;
    var$11.$binarySearchTable = $data;
    var$11.$fastTable = $result;
    return var$11;
},
otciu_UnicodeHelper_decodeByte = $c => {
    if ($c > 92)
        return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
    if ($c <= 34)
        return ($c - 32 | 0) << 24 >> 24;
    return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
};
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable = null;
    a.$fastTable = null;
}
function otciu_UnicodeHelper$Range() {
    let a = this; jl_Object.call(a);
    a.$start2 = 0;
    a.$end2 = 0;
    a.$data10 = null;
}
let otciu_UnicodeHelper$Range__init_0 = ($this, $start, $end, $data) => {
    $this.$start2 = $start;
    $this.$end2 = $end;
    $this.$data10 = $data;
},
otciu_UnicodeHelper$Range__init_ = (var_0, var_1, var_2) => {
    let var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_0(var_3, var_0, var_1, var_2);
    return var_3;
};
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_0 = ($this, $characters) => {
    $this.$characters = $characters;
},
otci_CharFlow__init_ = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_0(var_1, var_0);
    return var_1;
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, $hasMore, $digit;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        $hasMore = $seq.$pointer;
        $seq.$pointer = $hasMore + 1 | 0;
        $digit = var$4[$hasMore];
        $digit = $digit < 34 ? $digit - 32 | 0 : $digit >= 92 ? ($digit - 32 | 0) - 2 | 0 : ($digit - 32 | 0) - 1 | 0;
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otcir_Flags = $rt_classWithoutFields(),
cbgu_NumberUtils = $rt_classWithoutFields(),
cgxgbtd_StyleWrapper$Unit = $rt_classWithoutFields(jl_Enum),
cgxgbtd_StyleWrapper$Unit_PX = null,
cgxgbtd_StyleWrapper$Unit_PCT = null,
cgxgbtd_StyleWrapper$Unit_EM = null,
cgxgbtd_StyleWrapper$Unit_EX = null,
cgxgbtd_StyleWrapper$Unit_PT = null,
cgxgbtd_StyleWrapper$Unit_PC = null,
cgxgbtd_StyleWrapper$Unit_IN = null,
cgxgbtd_StyleWrapper$Unit_CM = null,
cgxgbtd_StyleWrapper$Unit_MM = null,
cgxgbtd_StyleWrapper$Unit_$VALUES = null,
cgxgbtd_StyleWrapper$Unit_$callClinit = () => {
    cgxgbtd_StyleWrapper$Unit_$callClinit = $rt_eraseClinit(cgxgbtd_StyleWrapper$Unit);
    cgxgbtd_StyleWrapper$Unit__clinit_();
},
cgxgbtd_StyleWrapper$Unit__init_ = ($this, var$1, var$2) => {
    cgxgbtd_StyleWrapper$Unit_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
cgxgbtd_StyleWrapper$Unit__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cgxgbtd_StyleWrapper$Unit$1;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(398), 0);
    cgxgbtd_StyleWrapper$Unit_PX = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$2;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(399), 1);
    cgxgbtd_StyleWrapper$Unit_PCT = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$3;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(400), 2);
    cgxgbtd_StyleWrapper$Unit_EM = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$4;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(401), 3);
    cgxgbtd_StyleWrapper$Unit_EX = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$5;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(402), 4);
    cgxgbtd_StyleWrapper$Unit_PT = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$6;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(403), 5);
    cgxgbtd_StyleWrapper$Unit_PC = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$7;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(404), 6);
    cgxgbtd_StyleWrapper$Unit_IN = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$8;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(405), 7);
    cgxgbtd_StyleWrapper$Unit_CM = var$1;
    var$1 = new cgxgbtd_StyleWrapper$Unit$9;
    cgxgbtd_StyleWrapper$Unit__init_(var$1, $rt_s(406), 8);
    cgxgbtd_StyleWrapper$Unit_MM = var$1;
    var$2 = $rt_createArray(cgxgbtd_StyleWrapper$Unit, 9);
    var$3 = var$2.data;
    var$3[0] = cgxgbtd_StyleWrapper$Unit_PX;
    var$3[1] = cgxgbtd_StyleWrapper$Unit_PCT;
    var$3[2] = cgxgbtd_StyleWrapper$Unit_EM;
    var$3[3] = cgxgbtd_StyleWrapper$Unit_EX;
    var$3[4] = cgxgbtd_StyleWrapper$Unit_PT;
    var$3[5] = cgxgbtd_StyleWrapper$Unit_PC;
    var$3[6] = cgxgbtd_StyleWrapper$Unit_IN;
    var$3[7] = cgxgbtd_StyleWrapper$Unit_CM;
    var$3[8] = var$1;
    cgxgbtd_StyleWrapper$Unit_$VALUES = var$2;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next2 = null;
}
let jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException);
function jur_AbstractCharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS = null;
    a.$this$043 = null;
}
let jur_AbstractCharClass$1_contains = ($this, $ch) => {
    let $index;
    $index = $ch - 55296 | 0;
    return $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ ju_BitSet_get($this.$val$lHS, $index) : 0;
};
function jur_AbstractCharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS0 = null;
    a.$val$thisClass = null;
    a.$this$040 = null;
}
let jur_AbstractCharClass$2_contains = ($this, $ch) => {
    let $index, $containslHS;
    $index = $ch - 55296 | 0;
    $containslHS = $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ ju_BitSet_get($this.$val$lHS0, $index) : 0;
    return $this.$val$thisClass.$contains($ch) && !$containslHS ? 1 : 0;
};
function jur_CharClass$18() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$bs = null;
    a.$this$019 = null;
}
let jur_CharClass$18_contains = ($this, $ch) => {
    return $this.$alt ^ ju_BitSet_get($this.$val$bs, $ch);
},
jur_CharClass$18_toString = $this => {
    let $temp, $i, var$3;
    $temp = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($temp);
    $i = ju_BitSet_nextSetBit($this.$val$bs, 0);
    while ($i >= 0) {
        jl_AbstractStringBuilder_append1($temp, jl_Character_toChars($i));
        jl_AbstractStringBuilder_append($temp, 124);
        $i = ju_BitSet_nextSetBit($this.$val$bs, $i + 1 | 0);
    }
    var$3 = $temp.$length1;
    if (var$3 > 0)
        jl_StringBuilder_deleteCharAt($temp, var$3 - 1 | 0);
    return jl_AbstractStringBuilder_toString($temp);
};
function jur_CharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$cc1 = null;
    a.$this$034 = null;
}
let jur_CharClass$1_contains = ($this, $ch) => {
    return $this.$val$cc1.$contains($ch);
};
function jur_CharClass$3() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt = 0;
    a.$val$cc = null;
    a.$this$03 = null;
}
let jur_CharClass$3_contains = ($this, $ch) => {
    return !($this.$val$curAlt ^ ju_BitSet_get($this.$this$03.$bits, $ch)) && !($this.$val$curAlt ^ $this.$this$03.$inverted ^ $this.$val$cc.$contains($ch)) ? 0 : 1;
};
function jur_CharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt0 = 0;
    a.$val$cc3 = null;
    a.$this$04 = null;
}
let jur_CharClass$2_contains = ($this, $ch) => {
    return !($this.$val$curAlt0 ^ ju_BitSet_get($this.$this$04.$bits, $ch)) && !($this.$val$curAlt0 ^ $this.$this$04.$inverted ^ $this.$val$cc3.$contains($ch)) ? 1 : 0;
};
function jur_CharClass$5() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt10 = 0;
    a.$val$nb4 = null;
    a.$val$cc2 = null;
    a.$this$023 = null;
}
let jur_CharClass$5_contains = ($this, $ch) => {
    return $this.$val$curAlt10 ^ (!$this.$val$nb4.$contains($ch) && !$this.$val$cc2.$contains($ch) ? 0 : 1);
};
function jur_CharClass$4() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt2 = 0;
    a.$val$nb2 = null;
    a.$val$cc0 = null;
    a.$this$048 = null;
}
let jur_CharClass$4_contains = ($this, $ch) => {
    return $this.$val$curAlt2 ^ (!$this.$val$nb2.$contains($ch) && !$this.$val$cc0.$contains($ch) ? 0 : 1) ? 0 : 1;
};
function jur_CharClass$7() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz2 = null;
    a.$this$051 = null;
}
let jur_CharClass$7_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz2, $ch);
};
function jur_CharClass$6() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz8 = null;
    a.$this$025 = null;
}
let jur_CharClass$6_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz8, $ch) ? 0 : 1;
};
function jur_CharClass$9() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz4 = null;
    a.$val$curAlt1 = 0;
    a.$this$014 = null;
}
let jur_CharClass$9_contains = ($this, $ch) => {
    return !jur_CharClass_contains($this.$val$clazz4, $ch) && !($this.$val$curAlt1 ^ ju_BitSet_get($this.$this$014.$bits, $ch)) ? 0 : 1;
};
function jur_CharClass$8() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz5 = null;
    a.$val$curAlt5 = 0;
    a.$this$011 = null;
}
let jur_CharClass$8_contains = ($this, $ch) => {
    return !jur_CharClass_contains($this.$val$clazz5, $ch) && !($this.$val$curAlt5 ^ ju_BitSet_get($this.$this$011.$bits, $ch)) ? 1 : 0;
};
function jur_CharClass$11() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt7 = 0;
    a.$val$nb3 = null;
    a.$val$clazz9 = null;
    a.$this$020 = null;
}
let jur_CharClass$11_contains = ($this, $ch) => {
    return !($this.$val$curAlt7 ^ $this.$val$nb3.$contains($ch)) && !jur_CharClass_contains($this.$val$clazz9, $ch) ? 0 : 1;
};
function jur_CharClass$10() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt9 = 0;
    a.$val$nb0 = null;
    a.$val$clazz = null;
    a.$this$024 = null;
}
let jur_CharClass$10_contains = ($this, $ch) => {
    return !($this.$val$curAlt9 ^ $this.$val$nb0.$contains($ch)) && !jur_CharClass_contains($this.$val$clazz, $ch) ? 1 : 0;
};
function jur_CharClass$13() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz0 = null;
    a.$this$026 = null;
}
let jur_CharClass$13_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz0, $ch);
};
function jur_CharClass$12() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz1 = null;
    a.$this$047 = null;
}
let jur_CharClass$12_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz1, $ch) ? 0 : 1;
};
function jur_CharClass$15() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz10 = null;
    a.$val$curAlt4 = 0;
    a.$this$016 = null;
}
let jur_CharClass$15_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz10, $ch) && $this.$val$curAlt4 ^ ju_BitSet_get($this.$this$016.$bits, $ch) ? 1 : 0;
};
function jur_CharClass$14() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz6 = null;
    a.$val$curAlt3 = 0;
    a.$this$012 = null;
}
let jur_CharClass$14_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz6, $ch) && $this.$val$curAlt3 ^ ju_BitSet_get($this.$this$012.$bits, $ch) ? 0 : 1;
};
function jur_CharClass$17() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt8 = 0;
    a.$val$nb1 = null;
    a.$val$clazz3 = null;
    a.$this$022 = null;
}
let jur_CharClass$17_contains = ($this, $ch) => {
    return $this.$val$curAlt8 ^ $this.$val$nb1.$contains($ch) && jur_CharClass_contains($this.$val$clazz3, $ch) ? 1 : 0;
};
function jur_CharClass$16() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt6 = 0;
    a.$val$nb = null;
    a.$val$clazz7 = null;
    a.$this$029 = null;
}
let jur_CharClass$16_contains = ($this, $ch) => {
    return $this.$val$curAlt6 ^ $this.$val$nb.$contains($ch) && jur_CharClass_contains($this.$val$clazz7, $ch) ? 0 : 1;
};
function jl_Thread() {
    let a = this; jl_Object.call(a);
    a.$id = Long_ZERO;
    a.$timeSliceStart = Long_ZERO;
    a.$finishedLock = null;
    a.$name1 = null;
    a.$alive = 0;
    a.$target = null;
}
let jl_Thread_mainThread = null,
jl_Thread_currentThread = null,
jl_Thread_nextId = 0,
jl_Thread_activeCount = 0,
jl_Thread_defaultUncaughtExceptionHandler = null,
jl_Thread_setCurrentThread = $thread_0 => {
    if (jl_Thread_currentThread !== $thread_0)
        jl_Thread_currentThread = $thread_0;
    jl_Thread_currentThread.$timeSliceStart = jl_System_currentTimeMillis();
},
jl_Thread_currentThread0 = () => {
    return jl_Thread_currentThread;
},
jl_Thread__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new jl_Thread;
    var$2 = null;
    var$1.$finishedLock = new jl_Object;
    var$1.$alive = 1;
    var$1.$name1 = $rt_s(407);
    var$1.$target = var$2;
    var$3 = jl_Thread_nextId;
    jl_Thread_nextId = var$3 + 1 | 0;
    var$1.$id = Long_fromInt(var$3);
    jl_Thread_mainThread = var$1;
    jl_Thread_currentThread = var$1;
    jl_Thread_nextId = 1;
    jl_Thread_activeCount = 1;
    jl_Thread_defaultUncaughtExceptionHandler = new jl_DefaultUncaughtExceptionHandler;
};
function jl_Object$Monitor() {
    let a = this; jl_Object.call(a);
    a.$enteringThreads = null;
    a.$notifyListeners = null;
    a.$owner = null;
    a.$count = 0;
}
let jl_IllegalMonitorStateException = $rt_classWithoutFields(jl_RuntimeException),
otjf_JSMapping = $rt_classWithoutFields(0);
function cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_0() {
    jl_Object.call(this);
    this.$_016 = null;
}
let cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_0_apply$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6;
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1 = var$1;
    var$2 = otji_JSWrapper_unwrap(var$2);
    var$1 = var$1.$_016;
    var$3 = var$2.length;
    var$4 = $rt_createArray(cgxgbtf_FileData, var$3);
    var$5 = var$4.data;
    var$6 = 0;
    while (var$6 < var$3) {
        var$5[var$6] = var$2[var$6];
        var$6 = var$6 + 1 | 0;
    }
    var$1.$windowListener.$filesDropped(var$4);
    return otji_JSWrapper_javaToJs($rt_s(408));
},
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_1 = $rt_classWithoutFields(),
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_1_apply$exported$0 = (var$1, var$2) => {
    otji_JSWrapper_jsToJava(var$2);
    var$1;
    return otji_JSWrapper_javaToJs($rt_s(409));
},
otjf_JSSupplier = $rt_classWithoutFields(0),
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_2 = $rt_classWithoutFields(),
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_2_get$exported$0 = var$1 => {
    var$1;
    return otji_JSWrapper_javaToJs(null);
},
jl_Float = $rt_classWithoutFields(jl_Number),
jl_Float_TYPE = null,
jl_Float__clinit_ = () => {
    jl_Float_TYPE = $rt_cls($rt_floatcls);
},
cgxgbtu_KeyCodes = $rt_classWithoutFields(),
cgxgbtu_KeyCodes_keyForCode = $keyCode => {
    a: {
        switch ($keyCode) {
            case 8:
                break;
            case 9:
                return 61;
            case 10:
            case 11:
            case 12:
            case 14:
            case 15:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 28:
            case 29:
            case 30:
            case 31:
            case 41:
            case 42:
            case 43:
            case 44:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 93:
            case 94:
            case 95:
            case 108:
            case 124:
            case 125:
            case 126:
            case 127:
            case 128:
            case 129:
            case 130:
            case 131:
            case 132:
            case 133:
            case 134:
            case 135:
            case 136:
            case 137:
            case 138:
            case 139:
            case 140:
            case 141:
            case 142:
            case 143:
            case 146:
            case 147:
            case 148:
            case 149:
            case 150:
            case 151:
            case 152:
            case 153:
            case 154:
            case 155:
            case 156:
            case 157:
            case 158:
            case 159:
            case 160:
            case 161:
            case 162:
            case 163:
            case 164:
            case 165:
            case 166:
            case 167:
            case 168:
            case 169:
            case 170:
            case 171:
            case 172:
            case 173:
            case 174:
            case 175:
            case 176:
            case 177:
            case 178:
            case 179:
            case 180:
            case 181:
            case 182:
            case 183:
            case 184:
            case 185:
            case 193:
            case 194:
            case 195:
            case 196:
            case 197:
            case 198:
            case 199:
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 207:
            case 208:
            case 209:
            case 210:
            case 211:
            case 212:
            case 213:
            case 214:
            case 215:
            case 216:
            case 217:
            case 218:
                break a;
            case 13:
                return 66;
            case 16:
                return 59;
            case 17:
                return 129;
            case 18:
                return 57;
            case 19:
                return 0;
            case 20:
                return 0;
            case 27:
                return 111;
            case 32:
                return 62;
            case 33:
                return 92;
            case 34:
                return 93;
            case 35:
                return 123;
            case 36:
                return 3;
            case 37:
                return 21;
            case 38:
                return 19;
            case 39:
                return 22;
            case 40:
                return 20;
            case 45:
                return 124;
            case 46:
                return 112;
            case 48:
                return 7;
            case 49:
                return 8;
            case 50:
                return 9;
            case 51:
                return 10;
            case 52:
                return 11;
            case 53:
                return 12;
            case 54:
                return 13;
            case 55:
                return 14;
            case 56:
                return 15;
            case 57:
                return 16;
            case 65:
                return 29;
            case 66:
                return 30;
            case 67:
                return 31;
            case 68:
                return 32;
            case 69:
                return 33;
            case 70:
                return 34;
            case 71:
                return 35;
            case 72:
                return 36;
            case 73:
                return 37;
            case 74:
                return 38;
            case 75:
                return 39;
            case 76:
                return 40;
            case 77:
                return 41;
            case 78:
                return 42;
            case 79:
                return 43;
            case 80:
                return 44;
            case 81:
                return 45;
            case 82:
                return 46;
            case 83:
                return 47;
            case 84:
                return 48;
            case 85:
                return 49;
            case 86:
                return 50;
            case 87:
                return 51;
            case 88:
                return 52;
            case 89:
                return 53;
            case 90:
                return 54;
            case 91:
                return 0;
            case 92:
                return 0;
            case 96:
                return 144;
            case 97:
                return 145;
            case 98:
                return 146;
            case 99:
                return 147;
            case 100:
                return 148;
            case 101:
                return 149;
            case 102:
                return 150;
            case 103:
                return 151;
            case 104:
                return 152;
            case 105:
                return 153;
            case 106:
                return 0;
            case 107:
                return 81;
            case 109:
                return 69;
            case 110:
                return 56;
            case 111:
                return 0;
            case 112:
                return 131;
            case 113:
                return 132;
            case 114:
                return 133;
            case 115:
                return 134;
            case 116:
                return 135;
            case 117:
                return 136;
            case 118:
                return 137;
            case 119:
                return 138;
            case 120:
                return 139;
            case 121:
                return 140;
            case 122:
                return 141;
            case 123:
                return 142;
            case 144:
                return 78;
            case 145:
                return 0;
            case 186:
                return 74;
            case 187:
                return 70;
            case 188:
                return 55;
            case 189:
                return 69;
            case 190:
                return 56;
            case 191:
                return 76;
            case 192:
                return 0;
            case 219:
                return 71;
            case 220:
                return 73;
            case 221:
                return 72;
            case 222:
                return 75;
            default:
                break a;
        }
        return 67;
    }
    return 0;
},
cgxgbtu_KeyCodes_getButton = $button => {
    if (!$button)
        return 0;
    if ($button == 2)
        return 1;
    if ($button != 1)
        return 0;
    return 2;
},
cbgu_TimeUtils = $rt_classWithoutFields(),
cbgu_TimeUtils_nanoTime = () => {
    return Long_fromNumber(performance.now() * 1000000.0);
},
otp_PlatformQueue = $rt_classWithoutFields(),
otp_PlatformQueue_isEmpty$static = $this => {
    return $this.length ? 0 : 1;
},
otp_PlatformRunnable = $rt_classWithoutFields(0);
function jl_Object$monitorExit$lambda$_8_0() {
    jl_Object.call(this);
    this.$_09 = null;
}
let cgxgbt_TeaWindowListener = $rt_classWithoutFields(0),
otjc_JSPromise$Executor = $rt_classWithoutFields(0);
function cgxgbta_AssetLoadImpl$getFile$lambda$_2_0() {
    let a = this; jl_Object.call(a);
    a.$_04 = null;
    a.$_11 = null;
    a.$_21 = null;
}
let cgxgbta_AssetLoadImpl$getFile$lambda$_2_0_onExecute$exported$0 = (var$1, var$2, var$3) => {
    let var$4, var$5;
    var$2 = otji_JS_functionAsObject(var$2, "accept");
    otji_JS_functionAsObject(var$3, "accept");
    var$1 = var$1;
    var$3 = var$1.$_04;
    var$4 = var$1.$_11;
    var$1 = var$1.$_21;
    var$5 = new FileReader();
    var$5.readAsArrayBuffer(var$4);
    var$4 = new cgxgbta_AssetLoadImpl$4;
    var$4.$this$050 = var$3;
    var$4.$val$name = var$1;
    var$4.$val$resolve = var$2;
    var$5.addEventListener("load", otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
},
otji_IDBObjectStoreParameters = $rt_classWithoutFields(),
otji_IDBObjectStoreParameters_create$js_body$_1 = () => {
    return {  };
};
function cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_0() {
    let a = this; jl_Object.call(a);
    a.$_07 = null;
    a.$_13 = null;
}
let cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_0_handleEvent$exported$0 = var$1 => {
    let var$2, var$3, var$4;
    var$1 = var$1;
    var$2 = var$1.$_07;
    var$3 = var$1.$_13.result;
    if (var$3 !== null) {
        var$1 = cgxgbtf_MemoryFileStorage_fixPath(var$2, $rt_str(var$3.key));
        var$4 = var$3.value;
        if (var$4.type == 1)
            cgxgbtf_MemoryFileStorage_putFolderInternal0(var$2, var$1, 0);
        else
            cgxgbtf_MemoryFileStorage_putFileInternal(var$2, var$1, cgxgbtdt_TypedArrays_toByteArray(var$4.contents), 0);
        var$3.continue();
    }
};
function cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_1() {
    jl_Object.call(this);
    this.$_017 = null;
}
let cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_1_handleEvent$exported$0 = var$1 => {
    var$1 = var$1.$_017;
    var$1.$delayInitCount = var$1.$delayInitCount - 1 | 0;
};
function cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_2() {
    jl_Object.call(this);
    this.$_0 = null;
}
let cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_2_handleEvent$exported$0 = var$1 => {
    var$1 = var$1.$_0;
    otcic_JsConsolePrintStream_println(jl_System_err(), $rt_s(410));
    var$1.$delayInitCount = var$1.$delayInitCount - 1 | 0;
},
jl_AutoCloseable = $rt_classWithoutFields(0),
ji_Closeable = $rt_classWithoutFields(0),
ji_Flushable = $rt_classWithoutFields(0),
ji_OutputStream = $rt_classWithoutFields();
function ji_FilterOutputStream() {
    ji_OutputStream.call(this);
    this.$out2 = null;
}
function ji_PrintStream() {
    let a = this; ji_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$sb = null;
    a.$buffer6 = null;
    a.$charset1 = null;
}
let otcic_JsConsolePrintStream = $rt_classWithoutFields(ji_PrintStream),
otcic_JsConsolePrintStream__init_ = $this => {
    let var$1, var$2;
    var$1 = null;
    var$2 = null;
    $this.$out2 = var$1;
    var$1 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$1);
    $this.$sb = var$1;
    $this.$buffer6 = $rt_createCharArray(32);
    $this.$autoFlush = 0;
    $this.$charset1 = var$2;
},
otcic_JsConsolePrintStream_println = ($this, $s) => {
    $this.$print($s);
    $this.$print($rt_s(17));
},
otcic_JSStderrPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStderrPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(19);
    $rt_putStderr($rt_ustr($s));
},
cgxgbtd_StyleWrapper$Unit$1 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$2 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$3 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$4 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$5 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$6 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$7 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$8 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
cgxgbtd_StyleWrapper$Unit$9 = $rt_classWithoutFields(cgxgbtd_StyleWrapper$Unit),
jl_Thread$UncaughtExceptionHandler = $rt_classWithoutFields(0),
jl_DefaultUncaughtExceptionHandler = $rt_classWithoutFields();
function jnc_Charset() {
    let a = this; jl_Object.call(a);
    a.$canonicalName = null;
    a.$aliases = null;
}
let jnc_Charset_checkCanonicalName = $name => {
    let $i, $c;
    if (jl_String_isEmpty($name))
        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
    if (!jnc_Charset_isValidCharsetStart(jl_String_charAt($name, 0)))
        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
    $i = 1;
    while ($i < $name.$nativeString.length) {
        a: {
            $c = jl_String_charAt($name, $i);
            switch ($c) {
                case 43:
                case 45:
                case 46:
                case 58:
                case 95:
                    break;
                default:
                    if (jnc_Charset_isValidCharsetStart($c))
                        break a;
                    else
                        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
            }
        }
        $i = $i + 1 | 0;
    }
},
jnc_Charset_isValidCharsetStart = $c => {
    a: {
        b: {
            if (!($c >= 48 && $c <= 57) && !($c >= 97 && $c <= 122)) {
                if ($c < 65)
                    break b;
                if ($c > 90)
                    break b;
            }
            $c = 1;
            break a;
        }
        $c = 0;
    }
    return $c;
},
oti_AsyncCallback = $rt_classWithoutFields(0);
function otpp_AsyncCallbackWrapper() {
    jl_Object.call(this);
    this.$realAsyncCallback = null;
}
let otpp_AsyncCallbackWrapper_create = $realAsyncCallback => {
    let var$2;
    var$2 = new otpp_AsyncCallbackWrapper;
    var$2.$realAsyncCallback = $realAsyncCallback;
    return var$2;
},
otpp_AsyncCallbackWrapper_complete = ($this, $result) => {
    $this.$realAsyncCallback.$complete($result);
},
otpp_AsyncCallbackWrapper_error = ($this, $e) => {
    $this.$realAsyncCallback.$error($e);
};
function jl_Object$monitorEnterWait$lambda$_6_0() {
    let a = this; jl_Object.call(a);
    a.$_08 = null;
    a.$_14 = null;
    a.$_23 = 0;
    a.$_31 = null;
}
let otjc_JSObjects = $rt_classWithoutFields(),
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    otji_JSWrapper$Helper_wrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_stringWrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0;
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1;
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
},
otjc_JSUndefined = $rt_classWithoutFields(),
otjc_JSWeakRef = $rt_classWithoutFields(),
otjc_JSFinalizationRegistryConsumer = $rt_classWithoutFields(0),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1;
    otji_JSWrapper$Helper_$callClinit();
    var$1 = otji_JSWrapper$Helper_stringWrappers;
    var$2 = otji_JSWrapper_unwrap(var$2);
    var$1.delete(var$2);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1;
    otji_JSWrapper$Helper_$callClinit();
    var$1 = otji_JSWrapper$Helper_numberWrappers;
    var$2 = otji_JSWrapper_unwrap(var$2);
    var$1.delete(var$2);
},
jur_BackReferencedSingleSet = $rt_classWithoutFields(jur_SingleSet),
jur_BackReferencedSingleSet_find = ($this, $startSearch, $testString, $matchResult) => {
    let $res, $lastIndex, $saveStart;
    $res = 0;
    $lastIndex = $matchResult.$rightBound;
    a: {
        while (true) {
            if ($startSearch > $lastIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $saveStart);
            $startSearch = $startSearch + 1 | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $res, $saveStart;
    $res = 0;
    a: {
        while (true) {
            if ($startSearch < $stringIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $saveStart);
            $startSearch = $startSearch + (-1) | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_processBackRefReplacement = $this => {
    return null;
},
cgxgbt_TeaApplication$6 = $rt_classWithoutFields(),
cgxgbt_TeaApplication$6_$SwitchMap$com$github$xpenatan$gdx$backends$teavm$TeaApplication$AppState = null,
cgxgbt_TeaApplication$6_$callClinit = () => {
    cgxgbt_TeaApplication$6_$callClinit = $rt_eraseClinit(cgxgbt_TeaApplication$6);
    cgxgbt_TeaApplication$6__clinit_();
},
cgxgbt_TeaApplication$6__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createIntArray((cgxgbt_TeaApplication$AppState_$VALUES.$clone0()).data.length);
    var$2 = var$1.data;
    cgxgbt_TeaApplication$6_$SwitchMap$com$github$xpenatan$gdx$backends$teavm$TeaApplication$AppState = var$1;
    var$2[cgxgbt_TeaApplication$AppState_INIT.$ordinal0] = 1;
    var$2[cgxgbt_TeaApplication$AppState_PRELOAD_ASSETS.$ordinal0] = 2;
    var$2[cgxgbt_TeaApplication$AppState_DOWNLOAD_ASSETS.$ordinal0] = 3;
    var$2[cgxgbt_TeaApplication$AppState_APP_LOOP.$ordinal0] = 4;
};
function jur_AbstractCharClass$LazyJavaLowerCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$032 = null;
}
let jur_AbstractCharClass$LazyJavaLowerCase$1_contains = ($this, $ch) => {
    return jl_Character_getType($ch) != 2 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaUpperCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$035 = null;
}
let jur_AbstractCharClass$LazyJavaUpperCase$1_contains = ($this, $ch) => {
    return jl_Character_getType($ch) != 1 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaWhitespace$1() {
    jur_AbstractCharClass.call(this);
    this.$this$030 = null;
}
let jur_AbstractCharClass$LazyJavaWhitespace$1_contains = ($this, $ch) => {
    return jl_Character_isWhitespace($ch);
};
function jur_AbstractCharClass$LazyJavaMirrored$1() {
    jur_AbstractCharClass.call(this);
    this.$this$027 = null;
}
let jur_AbstractCharClass$LazyJavaMirrored$1_contains = ($this, $ch) => {
    return 0;
};
function jur_AbstractCharClass$LazyJavaDefined$1() {
    jur_AbstractCharClass.call(this);
    this.$this$042 = null;
}
let jur_AbstractCharClass$LazyJavaDefined$1_contains = ($this, $ch) => {
    return !jl_Character_getType($ch) ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$036 = null;
}
let jur_AbstractCharClass$LazyJavaDigit$1_contains = ($this, $ch) => {
    return jl_Character_getType($ch) != 9 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1() {
    jur_AbstractCharClass.call(this);
    this.$this$046 = null;
}
let jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains = ($this, $ch) => {
    return jl_Character_isIdentifierIgnorable($ch);
};
function jur_AbstractCharClass$LazyJavaISOControl$1() {
    jur_AbstractCharClass.call(this);
    this.$this$033 = null;
}
let jur_AbstractCharClass$LazyJavaISOControl$1_contains = ($this, $ch) => {
    a: {
        b: {
            if (!($ch >= 0 && $ch <= 31)) {
                if ($ch < 127)
                    break b;
                if ($ch > 159)
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = 0;
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$017 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains = ($this, $ch) => {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 9:
                case 10:
                case 23:
                case 26:
                    break;
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$037 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains = ($this, $ch) => {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                case 23:
                case 26:
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaLetter$1() {
    jur_AbstractCharClass.call(this);
    this.$this$041 = null;
}
let jur_AbstractCharClass$LazyJavaLetter$1_contains = ($this, $ch) => {
    a: {
        switch (jl_Character_getType($ch)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                $ch = 0;
                break a;
        }
        $ch = 1;
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$044 = null;
}
let jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains = ($this, $ch) => {
    return jl_Character_isLetterOrDigit($ch);
};
function jur_AbstractCharClass$LazyJavaSpaceChar$1() {
    jur_AbstractCharClass.call(this);
    this.$this$031 = null;
}
let jur_AbstractCharClass$LazyJavaSpaceChar$1_contains = ($this, $ch) => {
    return jl_Character_isSpaceChar($ch);
};
function jur_AbstractCharClass$LazyJavaTitleCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$039 = null;
}
let jur_AbstractCharClass$LazyJavaTitleCase$1_contains = ($this, $ch) => {
    return jl_Character_getType($ch) != 3 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$018 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains = ($this, $ch) => {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 9:
                case 10:
                case 23:
                    break;
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$052 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains = ($this, $ch) => {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_UnicodeCategory() {
    jur_AbstractCharClass.call(this);
    this.$category = 0;
}
let jur_UnicodeCategory__init_ = ($this, $category) => {
    jur_AbstractCharClass__init_($this);
    $this.$category = $category;
},
jur_UnicodeCategory__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategory();
    jur_UnicodeCategory__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategory_contains = ($this, $ch) => {
    return $this.$alt ^ ($this.$category != jl_Character_getType($ch & 65535) ? 0 : 1);
},
jur_UnicodeCategoryScope = $rt_classWithoutFields(jur_UnicodeCategory),
jur_UnicodeCategoryScope_contains = ($this, $ch) => {
    return $this.$alt ^ (!($this.$category >> jl_Character_getType($ch & 65535) & 1) ? 0 : 1);
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index3 = 0;
    a.$modCount1 = 0;
    a.$size7 = 0;
    a.$removeIndex0 = 0;
    a.$this$08 = null;
}
let ju_AbstractList$1_hasNext = $this => {
    return $this.$index3 >= $this.$size7 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$modCount1;
    var$2 = $this.$this$08;
    if (var$1 < var$2.$modCount) {
        var$2 = new ju_ConcurrentModificationException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    var$3 = $this.$index3;
    $this.$removeIndex0 = var$3;
    $this.$index3 = var$3 + 1 | 0;
    return ju_ArrayList_get(var$2, var$3);
};
function cgxgbta_AssetDownloadImpl$2() {
    let a = this; jl_Object.call(a);
    a.$val$url = null;
    a.$val$listener1 = null;
    a.$this$05 = null;
}
let cgxgbta_AssetDownloadImpl$2_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4;
    var$1 = var$1;
    cgxgbta_AssetDownloadImpl_subtractQueue(var$1.$this$05);
    if (var$1.$this$05.$showLogs) {
        var$2 = jl_System_out();
        var$3 = var$1.$val$url;
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(411)), var$3);
        var$3 = jl_AbstractStringBuilder_toString(var$4);
        otcic_JsConsolePrintStream_println(var$2, var$3);
    }
};
function cgxgbta_AssetDownloadImpl$loadScript$lambda$_5_0() {
    let a = this; jl_Object.call(a);
    a.$_05 = null;
    a.$_12 = null;
    a.$_22 = null;
}
let cgxgbta_AssetDownloadImpl$loadScript$lambda$_5_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4;
    var$1 = var$1;
    var$2 = var$1.$_05;
    var$3 = var$1.$_12;
    var$1 = var$1.$_22;
    cgxgbta_AssetDownloadImpl_subtractQueue(var$2);
    if (var$2.$showLogs) {
        var$2 = jl_System_err();
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(412)), var$3);
        var$3 = jl_AbstractStringBuilder_toString(var$4);
        otcic_JsConsolePrintStream_println(var$2, var$3);
    }
},
cbgu_Collections = $rt_classWithoutFields(),
cbgu_Collections_allocateIterators = 0;
function cbgu_Array$ArrayIterator() {
    let a = this; jl_Object.call(a);
    a.$array4 = null;
    a.$allowRemove0 = 0;
    a.$index0 = 0;
    a.$valid = 0;
}
let cbgu_Array$ArrayIterator__init_0 = ($this, $array, $allowRemove) => {
    $this.$valid = 1;
    $this.$array4 = $array;
    $this.$allowRemove0 = $allowRemove;
},
cbgu_Array$ArrayIterator__init_ = (var_0, var_1) => {
    let var_2 = new cbgu_Array$ArrayIterator();
    cbgu_Array$ArrayIterator__init_0(var_2, var_0, var_1);
    return var_2;
},
cbgu_Array$ArrayIterator_hasNext = $this => {
    let var$1;
    if (!$this.$valid) {
        var$1 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_(var$1, $rt_s(413));
        $rt_throw(var$1);
    }
    return $this.$index0 >= $this.$array4.$size0 ? 0 : 1;
},
cbgu_Array$ArrayIterator_next = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$index0;
    var$2 = $this.$array4;
    if (var$1 >= var$2.$size0) {
        var$2 = new ju_NoSuchElementException;
        jl_RuntimeException__init_(var$2, jl_String_valueOf0(var$1));
        $rt_throw(var$2);
    }
    if (!$this.$valid) {
        var$2 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_(var$2, $rt_s(413));
        $rt_throw(var$2);
    }
    var$3 = var$2.$items.data;
    $this.$index0 = var$1 + 1 | 0;
    return var$3[var$1];
};
function cbgu_Array$ArrayIterable() {
    let a = this; jl_Object.call(a);
    a.$array2 = null;
    a.$allowRemove = 0;
    a.$iterator1 = null;
    a.$iterator2 = null;
}
let otcic_JSStdoutPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStdoutPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(19);
    $rt_putStdout($rt_ustr($s));
},
cgxgbtd_EventTargetWrapper = $rt_classWithoutFields(0),
cgxgbtd_FileReaderWrapper = $rt_classWithoutFields();
function cgxgbta_AssetLoadImpl$4() {
    let a = this; jl_Object.call(a);
    a.$val$name = null;
    a.$val$resolve = null;
    a.$this$050 = null;
}
let cgxgbta_AssetLoadImpl$4_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1;
    var$3 = cgxgbtdt_TypedArrays_toByteArray(new Int8Array(var$2.target.result));
    var$2 = cgxgbtf_FileData__init_0(var$1.$val$name, var$3);
    var$1.$val$resolve.accept(otji_JSWrapper_javaToJs(var$2));
},
cgxgbtdt_TypedArrays = $rt_classWithoutFields(),
cgxgbtdt_TypedArrays_toByteArray = $array => {
    return $rt_wrapArray($rt_bytecls, new Int8Array($array));
},
cgxgbtdt_TypedArrays_getTypedArray = $buffer => {
    let var$2, var$3;
    a: {
        if ($buffer instanceof jn_ByteBuffer)
            $buffer = jn_JSBufferHelper_toInt8Array(jn_JSBufferHelper_getArrayBufferView($buffer));
        else if ($buffer instanceof jn_ShortBuffer) {
            $buffer = jn_JSBufferHelper_getArrayBufferView($buffer);
            $buffer = new Int16Array($buffer.buffer, $buffer.byteOffset, $buffer.byteLength / 2 | 0);
        } else {
            if (!($buffer instanceof jn_IntBuffer)) {
                if ($buffer instanceof jn_FloatBuffer) {
                    $buffer = cgxgbtdt_TypedArrays_getFloat32Array($buffer);
                    break a;
                }
                var$2 = new cbgu_GdxRuntimeException;
                $buffer = jl_String_valueOf(jl_Object_getClass($buffer));
                var$3 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$3);
                jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(414)), $buffer);
                jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$3));
                $rt_throw(var$2);
            }
            $buffer = jn_JSBufferHelper_getArrayBufferView($buffer);
            $buffer = new Int32Array($buffer.buffer, $buffer.byteOffset, $buffer.byteLength / 4 | 0);
        }
    }
    return $buffer;
},
cgxgbtdt_TypedArrays_getUint8Array = $buff => {
    $buff = jn_JSBufferHelper_getArrayBufferView($buff);
    return new Uint8Array($buff.buffer, $buff.byteOffset, $buff.byteLength);
},
cgxgbtdt_TypedArrays_getUint16Array = $buff => {
    $buff = jn_JSBufferHelper_getArrayBufferView($buff);
    return new Uint16Array($buff.buffer, $buff.byteOffset, $buff.byteLength / 2 | 0);
},
cgxgbtdt_TypedArrays_getFloat32Array = $buff => {
    $buff = jn_JSBufferHelper_getArrayBufferView($buff);
    return new Float32Array($buff.buffer, $buff.byteOffset, $buff.byteLength / 4 | 0);
},
jur_IntArrHash = $rt_classWithoutFields();
function cgxgbtf_FileData() {
    let a = this; jl_Object.call(a);
    a.$path = null;
    a.$bytes = null;
    a.$type5 = 0;
}
let cgxgbtf_FileData__init_2 = ($this, $path) => {
    cgxgbtf_FileData__init_($this, $path, 1, null);
},
cgxgbtf_FileData__init_1 = var_0 => {
    let var_1 = new cgxgbtf_FileData();
    cgxgbtf_FileData__init_2(var_1, var_0);
    return var_1;
},
cgxgbtf_FileData__init_3 = ($this, $path, $bytes) => {
    cgxgbtf_FileData__init_($this, $path, 2, $bytes);
},
cgxgbtf_FileData__init_0 = (var_0, var_1) => {
    let var_2 = new cgxgbtf_FileData();
    cgxgbtf_FileData__init_3(var_2, var_0, var_1);
    return var_2;
},
cgxgbtf_FileData__init_ = ($this, $path, $type, $bytes) => {
    if ($bytes !== null && jl_String_endsWith($path, $rt_s(75)))
        $path = jl_String_substring($path, 0, $path.$nativeString.length - 1 | 0);
    $this.$path = $path;
    $this.$bytes = $bytes;
    $this.$type5 = $type;
},
cgxgbtf_FileData__init_4 = (var_0, var_1, var_2) => {
    let var_3 = new cgxgbtf_FileData();
    cgxgbtf_FileData__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxgbtf_FileData_isDirectory = $this => {
    return $this.$type5 != 1 ? 0 : 1;
},
otjt_ArrayBufferView = $rt_classWithoutFields(),
otjt_TypedArray = $rt_classWithoutFields(otjt_ArrayBufferView),
otjt_Int8Array = $rt_classWithoutFields(otjt_TypedArray),
cbgu_GdxRuntimeException = $rt_classWithoutFields(jl_RuntimeException),
cbgu_GdxRuntimeException__init_ = ($this, $message, $t) => {
    jl_Throwable__init_($this, $message, $t);
},
cbgu_GdxRuntimeException__init_0 = (var_0, var_1) => {
    let var_2 = new cbgu_GdxRuntimeException();
    cbgu_GdxRuntimeException__init_(var_2, var_0, var_1);
    return var_2;
},
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException);
function cgxgbta_AssetLoadImpl$5() {
    let a = this; jl_Object.call(a);
    a.$val$config = null;
    a.$val$assetFileUrl = null;
    a.$this$02 = null;
}
let cgxgbta_AssetLoadImpl$5_onSuccess = ($this, var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, $$je;
    var$3 = cgxgbtdt_TypedArrays_toByteArray(var$2.$data9);
    var$4 = var$3.data;
    var$1 = new jl_String;
    var$5 = var$4.length;
    jnci_UTF8Charset_$callClinit();
    var$2 = jnci_UTF8Charset_INSTANCE;
    var$6 = jn_ByteBuffer_wrap0(var$3, 0, var$5);
    a: {
        try {
            var$2 = jnc_CharsetDecoder_decode0(jnc_CharsetDecoder_onUnmappableCharacter(jnc_CharsetDecoder_onMalformedInput(jnci_UTF8Charset_newDecoder(var$2), jnc_CodingErrorAction_REPLACE), jnc_CodingErrorAction_REPLACE), var$6);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jnc_CharacterCodingException) {
                var$2 = $$je;
            } else {
                throw $$e;
            }
        }
        var$6 = new jl_AssertionError;
        jl_Throwable__init_(var$6, $rt_s(415), var$2);
        $rt_throw(var$6);
    }
    var$7 = var$2.$array5 === null ? 0 : 1;
    if (var$7 && !var$2.$position0 && var$2.$limit0 == var$2.$capacityImpl())
        var$3 = jn_CharBuffer_array(var$2);
    else {
        var$3 = $rt_createCharArray(jn_Buffer_remaining(var$2));
        jn_CharBuffer_get(var$2, var$3, 0, var$3.data.length);
    }
    var$1.$nativeString = $rt_fullArrayToString(var$3.data);
    var$3 = (jl_String_split(var$1, $rt_s(17))).data;
    var$1 = $this.$this$02;
    var$7 = var$3.length;
    var$1.$assetTotal = var$7;
    var$8 = 0;
    while (var$8 < var$7) {
        var$1 = var$3[var$8];
        var$4 = (jl_String_split(var$1, $rt_s(77))).data;
        var$5 = var$4.length;
        if (var$5 != 5) {
            var$2 = new cbgu_GdxRuntimeException;
            var$6 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$6);
            var$9 = jl_StringBuilder_append0(jl_StringBuilder_append(var$6, $rt_s(416)), var$5);
            jl_AbstractStringBuilder_append(var$9, 32);
            jl_StringBuilder_append(var$9, var$1);
            jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$6));
            $rt_throw(var$2);
        }
        var$10 = var$4[0];
        var$1 = var$4[1];
        var$2 = jl_String_trim(var$4[2]);
        var$5 = jl_String_equals(var$4[4], $rt_s(417));
        var$2 = jl_String_trim(var$2);
        if (!jl_String_isEmpty(var$2)) {
            var$6 = cbg_Files$FileType_Internal;
            if (jl_String_equals(var$10, $rt_s(418)))
                var$6 = cbg_Files$FileType_Classpath;
            else if (jl_String_equals(var$10, $rt_s(419)))
                var$6 = cbg_Files$FileType_Local;
            var$9 = cgxgbta_AssetType_Binary;
            if (jl_String_equals(var$1, $rt_s(209)))
                var$9 = cgxgbta_AssetType_Directory;
            if (!(!$this.$val$config.$preloadAssets && var$6 !== cbg_Files$FileType_Classpath)) {
                var$10 = $this.$this$02;
                var$1 = null;
                var$11 = jl_String_replace(jl_String_trim(var$2), $rt_s(420), $rt_s(75));
                if (jl_String_startsWith(var$11, $rt_s(75)))
                    var$11 = jl_String_substring0(var$11, 1);
                if (!jl_String_isEmpty(var$11) && !(ju_HashMap_entryByKey(var$10.$assetInQueue.$backingMap, var$11) === null ? 0 : 1)) {
                    var$2 = cbg_Gdx_files;
                    if (var$6 === cbg_Files$FileType_Internal)
                        var$6 = cgxgbt_TeaFiles_internal(var$2, var$11);
                    else {
                        var$12 = cbg_Files$FileType_Classpath;
                        if (var$6 === var$12)
                            var$6 = cgxgbt_TeaFileHandle__init_(var$2, var$11, var$12);
                        else {
                            var$12 = cbg_Files$FileType_Local;
                            if (var$6 !== var$12) {
                                var$1 = new cbgu_GdxRuntimeException;
                                var$2 = jl_String_valueOf(var$6);
                                var$6 = new jl_StringBuilder;
                                jl_AbstractStringBuilder__init_(var$6);
                                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(421)), var$2), $rt_s(422));
                                jl_RuntimeException__init_(var$1, jl_AbstractStringBuilder_toString(var$6));
                                $rt_throw(var$1);
                            }
                            var$6 = cgxgbt_TeaFileHandle__init_(var$2, var$11, var$12);
                        }
                    }
                    var$12 = var$6;
                    var$13 = cgxgbt_TeaFileHandle_exists(var$12);
                    if (!(!var$5 && var$13)) {
                        if (var$9 !== cgxgbta_AssetType_Directory) {
                            var$6 = var$10.$assetInQueue;
                            ju_HashMap_put(var$6.$backingMap, var$11, var$6);
                            var$9 = var$10.$assetDownloader;
                            var$6 = cgxgbta_AssetLoadImpl_getAssetUrl(var$10);
                            var$2 = new jl_StringBuilder;
                            jl_AbstractStringBuilder__init_(var$2);
                            jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$6), var$11);
                            var$2 = jl_AbstractStringBuilder_toString(var$2);
                            var$14 = cgxgbta_AssetType_Binary;
                            var$6 = new cgxgbta_AssetLoadImpl$6;
                            var$6.$this$09 = var$10;
                            var$6.$val$listener0 = var$1;
                            var$6.$val$path1 = var$11;
                            var$6.$val$fileHandle = var$12;
                            cgxgbta_AssetDownloadImpl_load(var$9, 1, var$2, var$14, var$6);
                        } else if (!var$13)
                            cgxgbtf_MemoryFileStorage_mkdirs(cgxgbt_TeaFiles_getFileDB(var$12.$teaFiles, var$12.$type0), var$12);
                    }
                }
            }
        }
        var$8 = var$8 + 1 | 0;
    }
};
function cgxgbta_AssetType() {
    jl_Enum.call(this);
    this.$code = null;
}
let cgxgbta_AssetType_Binary = null,
cgxgbta_AssetType_Directory = null,
cgxgbta_AssetType_$VALUES = null,
cgxgbta_AssetType__init_0 = ($this, var$1, var$2, $code) => {
    jl_Enum__init_($this, var$1, var$2);
    $this.$code = $code;
},
cgxgbta_AssetType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxgbta_AssetType();
    cgxgbta_AssetType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxgbta_AssetType__clinit_ = () => {
    let var$1, var$2, var$3;
    cgxgbta_AssetType_Binary = cgxgbta_AssetType__init_($rt_s(423), 0, $rt_s(424));
    var$1 = cgxgbta_AssetType__init_($rt_s(425), 1, $rt_s(209));
    cgxgbta_AssetType_Directory = var$1;
    var$2 = $rt_createArray(cgxgbta_AssetType, 2);
    var$3 = var$2.data;
    var$3[0] = cgxgbta_AssetType_Binary;
    var$3[1] = var$1;
    cgxgbta_AssetType_$VALUES = var$2;
},
cbggg_Batch = $rt_classWithoutFields(0);
function cbggg_SpriteBatch() {
    let a = this; jl_Object.call(a);
    a.$currentDataType = null;
    a.$mesh = null;
    a.$vertices0 = null;
    a.$idx = 0;
    a.$lastTexture = null;
    a.$invTexWidth = 0.0;
    a.$invTexHeight = 0.0;
    a.$drawing = 0;
    a.$transformMatrix = null;
    a.$projectionMatrix = null;
    a.$combinedMatrix = null;
    a.$blendingDisabled = 0;
    a.$blendSrcFunc = 0;
    a.$blendDstFunc = 0;
    a.$blendSrcFuncAlpha = 0;
    a.$blendDstFuncAlpha = 0;
    a.$shader = null;
    a.$customShader = null;
    a.$ownsShader = 0;
    a.$color0 = null;
    a.$colorPacked = 0.0;
    a.$renderCalls = 0;
    a.$totalRenderCalls = 0;
    a.$maxSpritesInBatch = 0;
}
let cbggg_SpriteBatch_defaultVertexDataType = null,
cbggg_SpriteBatch_overrideVertexType = null,
cbggg_SpriteBatch_$callClinit = () => {
    cbggg_SpriteBatch_$callClinit = $rt_eraseClinit(cbggg_SpriteBatch);
    cbggg_SpriteBatch__clinit_();
},
cbggg_SpriteBatch__init_ = ($this, $size, $defaultShader) => {
    let $vertexDataType, var$4, var$5, $i, var$7, $indices, $j, var$10, var$11, var$12, var$13, var$14;
    cbggg_SpriteBatch_$callClinit();
    $this.$idx = 0;
    $this.$lastTexture = null;
    $this.$invTexWidth = 0.0;
    $this.$invTexHeight = 0.0;
    $this.$drawing = 0;
    $this.$transformMatrix = cbgm_Matrix4__init_();
    $this.$projectionMatrix = cbgm_Matrix4__init_();
    $this.$combinedMatrix = cbgm_Matrix4__init_();
    $this.$blendingDisabled = 0;
    $this.$blendSrcFunc = 770;
    $this.$blendDstFunc = 771;
    $this.$blendSrcFuncAlpha = 770;
    $this.$blendDstFuncAlpha = 771;
    $this.$customShader = null;
    $this.$color0 = cbgg_Color__init_0(1.0, 1.0, 1.0, 1.0);
    $this.$colorPacked = cbgg_Color_WHITE_FLOAT_BITS;
    $this.$renderCalls = 0;
    $this.$totalRenderCalls = 0;
    $this.$maxSpritesInBatch = 0;
    if ($size > 8191) {
        $defaultShader = new jl_IllegalArgumentException;
        $vertexDataType = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($vertexDataType);
        jl_AbstractStringBuilder_append0($vertexDataType, $rt_s(426));
        jl_RuntimeException__init_($defaultShader, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0($vertexDataType, $size)));
        $rt_throw($defaultShader);
    }
    $vertexDataType = cbg_Gdx_gl30 === null ? cbggg_SpriteBatch_defaultVertexDataType : cbgg_Mesh$VertexDataType_VertexBufferObjectWithVAO;
    var$4 = cbggg_SpriteBatch_overrideVertexType;
    if (var$4 === null)
        var$4 = $vertexDataType;
    $this.$currentDataType = var$4;
    var$5 = new cbgg_Mesh;
    $i = $size * 4 | 0;
    var$7 = $size * 6 | 0;
    $indices = $rt_createArray(cbgg_VertexAttribute, 3).data;
    $indices[0] = cbgg_VertexAttribute__init_(1, 2, $rt_s(427));
    $indices[1] = cbgg_VertexAttribute__init_(4, 4, $rt_s(428));
    $indices[2] = cbgg_VertexAttribute__init_(16, 2, $rt_s(429));
    cbgg_Mesh_$callClinit();
    $vertexDataType = new cbgg_VertexAttributes;
    $vertexDataType.$mask4 = Long_fromInt(-1);
    $vertexDataType.$boneWeightUnits = (-1);
    $vertexDataType.$textureCoordinates = (-1);
    $j = $indices.length;
    if (!$j) {
        $defaultShader = new jl_IllegalArgumentException;
        jl_RuntimeException__init_($defaultShader, $rt_s(430));
        $rt_throw($defaultShader);
    }
    var$10 = $rt_createArray(cbgg_VertexAttribute, $j);
    var$11 = var$10.data;
    var$12 = 0;
    while (var$12 < $j) {
        var$11[var$12] = $indices[var$12];
        var$12 = var$12 + 1 | 0;
    }
    $vertexDataType.$attributes3 = var$10;
    $j = 0;
    var$13 = 0;
    while (var$13 < var$11.length) {
        a: {
            b: {
                var$14 = var$11[var$13];
                var$14.$offset = $j;
                switch (var$14.$type3) {
                    case 5120:
                    case 5121:
                        break;
                    case 5122:
                    case 5123:
                        var$12 = 2 * var$14.$numComponents | 0;
                        break a;
                    case 5124:
                    case 5125:
                    case 5127:
                    case 5128:
                    case 5129:
                    case 5130:
                    case 5131:
                        break b;
                    case 5126:
                    case 5132:
                        var$12 = 4 * var$14.$numComponents | 0;
                        break a;
                    default:
                        break b;
                }
                var$12 = var$14.$numComponents;
                break a;
            }
            var$12 = 0;
        }
        $j = $j + var$12 | 0;
        var$13 = var$13 + 1 | 0;
    }
    c: {
        d: {
            $vertexDataType.$vertexSize = $j;
            var$5.$autoBind = 1;
            var$5.$isInstanced = 0;
            var$5.$tmpV = cbgm_Vector3__init_();
            cbgg_Mesh$1_$callClinit();
            switch (cbgg_Mesh$1_$SwitchMap$com$badlogic$gdx$graphics$Mesh$VertexDataType.data[var$4.$ordinal0]) {
                case 1:
                    break;
                case 2:
                    var$5.$vertices = cbggg_VertexBufferObjectSubData__init_0(0, $i, $vertexDataType);
                    var$5.$indices = cbggg_IndexBufferObjectSubData__init_(0, var$7);
                    var$5.$isVertexArray = 0;
                    break c;
                case 3:
                    var$5.$vertices = cbggg_VertexBufferObjectWithVAO__init_0(0, $i, $vertexDataType);
                    var$5.$indices = cbggg_IndexBufferObjectSubData__init_(0, var$7);
                    var$5.$isVertexArray = 0;
                    break c;
                case 4:
                    break d;
                default:
                    break d;
            }
            var$5.$vertices = cbggg_VertexBufferObject__init_0(0, $i, $vertexDataType);
            var$5.$indices = cbggg_IndexBufferObject__init_1(0, var$7);
            var$5.$isVertexArray = 0;
            break c;
        }
        var$14 = new cbggg_VertexArray;
        cbggg_VertexBufferObject__init_(var$14, 0, $i, $vertexDataType);
        var$5.$vertices = var$14;
        $vertexDataType = new cbggg_IndexArray;
        cbggg_IndexBufferObject__init_($vertexDataType, var$7);
        var$5.$indices = $vertexDataType;
        var$5.$isVertexArray = 1;
    }
    cbgg_Mesh_addManagedMesh(cbg_Gdx_app, var$5);
    $this.$mesh = var$5;
    cbgm_Matrix4_setToOrtho2D($this.$projectionMatrix, 0.0, 0.0, cgxgbt_TeaGraphics_getWidth(cbg_Gdx_graphics), cgxgbt_TeaGraphics_getHeight(cbg_Gdx_graphics));
    $this.$vertices0 = $rt_createFloatArray($size * 20 | 0);
    $indices = $rt_createShortArray(var$7);
    var$11 = $indices.data;
    $j = 0;
    $i = 0;
    while ($i < var$7) {
        var$11[$i] = $j;
        var$11[$i + 1 | 0] = ($j + 1 | 0) << 16 >> 16;
        $size = $i + 2 | 0;
        var$13 = ($j + 2 | 0) << 16 >> 16;
        var$11[$size] = var$13;
        var$11[$i + 3 | 0] = var$13;
        var$11[$i + 4 | 0] = ($j + 3 | 0) << 16 >> 16;
        var$11[$i + 5 | 0] = $j;
        $i = $i + 6 | 0;
        $j = ($j + 4 | 0) << 16 >> 16;
    }
    $this.$mesh.$indices.$setIndices($indices, 0, var$11.length);
    if ($defaultShader !== null)
        $this.$shader = $defaultShader;
    else {
        $this.$shader = cbggg_SpriteBatch_createDefaultShader();
        $this.$ownsShader = 1;
    }
    if (var$4 !== cbgg_Mesh$VertexDataType_VertexArray) {
        (cbgg_Mesh_getIndexData($this.$mesh)).$bind();
        (cbgg_Mesh_getIndexData($this.$mesh)).$unbind();
    }
},
cbggg_SpriteBatch__init_0 = (var_0, var_1) => {
    let var_2 = new cbggg_SpriteBatch();
    cbggg_SpriteBatch__init_(var_2, var_0, var_1);
    return var_2;
},
cbggg_SpriteBatch_createDefaultShader = () => {
    let $vertexShader, $fragmentShader, $shader, var$4, var$5, var$6, var$7;
    cbggg_SpriteBatch_$callClinit();
    $vertexShader = $rt_s(431);
    $fragmentShader = $rt_s(432);
    $shader = new cbggg_ShaderProgram;
    cbggg_ShaderProgram_$callClinit();
    $shader.$log = $rt_s(13);
    $shader.$uniforms0 = cbgu_ObjectIntMap__init_();
    $shader.$uniformTypes = cbgu_ObjectIntMap__init_();
    $shader.$uniformSizes = cbgu_ObjectIntMap__init_();
    $shader.$attributes2 = cbgu_ObjectIntMap__init_();
    $shader.$attributeTypes = cbgu_ObjectIntMap__init_();
    $shader.$attributeSizes = cbgu_ObjectIntMap__init_();
    $shader.$refCount = 0;
    $shader.$params = cbgu_BufferUtils_newIntBuffer(1);
    $shader.$type2 = cbgu_BufferUtils_newIntBuffer(1);
    var$4 = cbggg_ShaderProgram_prependVertexCode;
    if (var$4 !== null && var$4.$nativeString.length > 0) {
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_AbstractStringBuilder_append0(var$4, cbggg_ShaderProgram_prependVertexCode);
        jl_AbstractStringBuilder_append0(var$4, $vertexShader);
        $vertexShader = jl_AbstractStringBuilder_toString(var$4);
    }
    var$4 = cbggg_ShaderProgram_prependFragmentCode;
    if (var$4 !== null && var$4.$nativeString.length > 0) {
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_AbstractStringBuilder_append0(var$4, cbggg_ShaderProgram_prependFragmentCode);
        jl_AbstractStringBuilder_append0(var$4, $fragmentShader);
        $fragmentShader = jl_AbstractStringBuilder_toString(var$4);
    }
    $shader.$vertexShaderSource = $vertexShader;
    $shader.$fragmentShaderSource = $fragmentShader;
    $shader.$matrix = cbgu_BufferUtils_newFloatBuffer(16);
    cbggg_ShaderProgram_compileShaders($shader, $vertexShader, $fragmentShader);
    if ($shader.$isCompiled) {
        jn_Buffer_clear($shader.$params);
        cbg_Gdx_gl20.$glGetProgramiv($shader.$program, 35721, $shader.$params);
        var$5 = jn_IntBufferImpl_get($shader.$params, 0);
        $shader.$attributeNames = $rt_createArray(jl_String, var$5);
        var$6 = 0;
        while (var$6 < var$5) {
            jn_Buffer_clear($shader.$params);
            jn_IntBufferImpl_put($shader.$params, 0, 1);
            jn_Buffer_clear($shader.$type2);
            $vertexShader = cbg_Gdx_gl20.$glGetActiveAttrib($shader.$program, var$6, $shader.$params, $shader.$type2);
            var$7 = cbg_Gdx_gl20.$glGetAttribLocation($shader.$program, $vertexShader);
            cbgu_ObjectIntMap_put($shader.$attributes2, $vertexShader, var$7);
            cbgu_ObjectIntMap_put($shader.$attributeTypes, $vertexShader, jn_IntBufferImpl_get($shader.$type2, 0));
            cbgu_ObjectIntMap_put($shader.$attributeSizes, $vertexShader, jn_IntBufferImpl_get($shader.$params, 0));
            $shader.$attributeNames.data[var$6] = $vertexShader;
            var$6 = var$6 + 1 | 0;
        }
        jn_Buffer_clear($shader.$params);
        cbg_Gdx_gl20.$glGetProgramiv($shader.$program, 35718, $shader.$params);
        var$5 = jn_IntBufferImpl_get($shader.$params, 0);
        $shader.$uniformNames = $rt_createArray(jl_String, var$5);
        var$6 = 0;
        while (var$6 < var$5) {
            jn_Buffer_clear($shader.$params);
            jn_IntBufferImpl_put($shader.$params, 0, 1);
            jn_Buffer_clear($shader.$type2);
            $vertexShader = cbg_Gdx_gl20.$glGetActiveUniform($shader.$program, var$6, $shader.$params, $shader.$type2);
            var$7 = cbg_Gdx_gl20.$glGetUniformLocation($shader.$program, $vertexShader);
            cbgu_ObjectIntMap_put($shader.$uniforms0, $vertexShader, var$7);
            cbgu_ObjectIntMap_put($shader.$uniformTypes, $vertexShader, jn_IntBufferImpl_get($shader.$type2, 0));
            cbgu_ObjectIntMap_put($shader.$uniformSizes, $vertexShader, jn_IntBufferImpl_get($shader.$params, 0));
            $shader.$uniformNames.data[var$6] = $vertexShader;
            var$6 = var$6 + 1 | 0;
        }
        $vertexShader = cbg_Gdx_app;
        $fragmentShader = cbgu_ObjectMap_get(cbggg_ShaderProgram_shaders, $vertexShader);
        if ($fragmentShader === null)
            $fragmentShader = cbgu_Array__init_();
        cbgu_Array_add($fragmentShader, $shader);
        cbgu_ObjectMap_put(cbggg_ShaderProgram_shaders, $vertexShader, $fragmentShader);
    }
    if ($shader.$isCompiled)
        return $shader;
    $vertexShader = new jl_IllegalArgumentException;
    $fragmentShader = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($fragmentShader);
    jl_AbstractStringBuilder_append0($fragmentShader, $rt_s(433));
    jl_AbstractStringBuilder_append0($fragmentShader, cbggg_ShaderProgram_getLog($shader));
    jl_RuntimeException__init_($vertexShader, jl_AbstractStringBuilder_toString($fragmentShader));
    $rt_throw($vertexShader);
},
cbggg_SpriteBatch_flush = $this => {
    let $count, $spritesInBatch, $mesh, var$4, var$5, $indicesBuffer, var$7, var$8, var$9, var$10;
    $count = $this.$idx;
    if (!$count)
        return;
    $this.$renderCalls = $this.$renderCalls + 1 | 0;
    $this.$totalRenderCalls = $this.$totalRenderCalls + 1 | 0;
    $spritesInBatch = $count / 20 | 0;
    if ($spritesInBatch > $this.$maxSpritesInBatch)
        $this.$maxSpritesInBatch = $spritesInBatch;
    $count = $spritesInBatch * 6 | 0;
    cbgg_GLTexture_bind($this.$lastTexture);
    $mesh = $this.$mesh;
    var$4 = $this.$vertices0;
    var$5 = $this.$idx;
    $mesh.$vertices.$setVertices(var$4, 0, var$5);
    if ($this.$currentDataType === cbgg_Mesh$VertexDataType_VertexArray) {
        $indicesBuffer = $mesh.$indices.$getBuffer(1);
        jn_Buffer_position($indicesBuffer, 0);
        jn_Buffer_limit($indicesBuffer, $count);
    }
    if ($this.$blendingDisabled)
        cbg_Gdx_gl.$glDisable(3042);
    else {
        cbg_Gdx_gl.$glEnable(3042);
        $spritesInBatch = $this.$blendSrcFunc;
        if ($spritesInBatch != (-1))
            cbg_Gdx_gl.$glBlendFuncSeparate($spritesInBatch, $this.$blendDstFunc, $this.$blendSrcFuncAlpha, $this.$blendDstFuncAlpha);
    }
    var$7 = $this.$customShader;
    if (var$7 === null)
        var$7 = $this.$shader;
    var$8 = $mesh.$autoBind;
    if ($count) {
        if (var$8) {
            $indicesBuffer = null;
            var$9 = null;
            $mesh.$vertices.$bind0(var$7, $indicesBuffer);
            $indicesBuffer = $mesh.$instances;
            if ($indicesBuffer !== null && $indicesBuffer.$getNumInstances() > 0)
                $mesh.$instances.$bind0(var$7, var$9);
            if ($mesh.$indices.$getNumIndices() > 0)
                $mesh.$indices.$bind();
        }
        if ($mesh.$isVertexArray) {
            if ($mesh.$indices.$getNumIndices() <= 0)
                cbg_Gdx_gl20.$glDrawArrays(4, 0, $count);
            else {
                $indicesBuffer = $mesh.$indices.$getBuffer(0);
                var$5 = $indicesBuffer.$position0;
                var$10 = $indicesBuffer;
                jn_Buffer_position(var$10, 0);
                cbg_Gdx_gl20.$glDrawElements(4, $count, 5123, $indicesBuffer);
                jn_Buffer_position(var$10, var$5);
            }
        } else {
            $spritesInBatch = 0;
            if ($mesh.$isInstanced)
                $spritesInBatch = $mesh.$instances.$getNumInstances();
            if ($mesh.$indices.$getNumIndices() <= 0) {
                if ($mesh.$isInstanced && $spritesInBatch > 0)
                    cbg_Gdx_gl30.$glDrawArraysInstanced(4, 0, $count, $spritesInBatch);
                else
                    cbg_Gdx_gl20.$glDrawArrays(4, 0, $count);
            } else {
                if (($count + 0 | 0) > $mesh.$indices.$getNumMaxIndices()) {
                    var$9 = new cbgu_GdxRuntimeException;
                    $indicesBuffer = new jl_StringBuilder;
                    jl_AbstractStringBuilder__init_($indicesBuffer);
                    jl_AbstractStringBuilder_append0($indicesBuffer, $rt_s(434));
                    $indicesBuffer = jl_StringBuilder_append0($indicesBuffer, $count);
                    jl_AbstractStringBuilder_append0($indicesBuffer, $rt_s(435));
                    var$10 = jl_StringBuilder_append0($indicesBuffer, 0);
                    jl_AbstractStringBuilder_append0(var$10, $rt_s(436));
                    $mesh = jl_StringBuilder_append0(var$10, $mesh.$indices.$getNumMaxIndices());
                    jl_AbstractStringBuilder_append0($mesh, $rt_s(437));
                    jl_RuntimeException__init_(var$9, jl_AbstractStringBuilder_toString($mesh));
                    $rt_throw(var$9);
                }
                if ($mesh.$isInstanced && $spritesInBatch > 0)
                    cbg_Gdx_gl30.$glDrawElementsInstanced(4, $count, 5123, 0, $spritesInBatch);
                else
                    cbg_Gdx_gl20.$glDrawElements0(4, $count, 5123, 0);
            }
        }
        if (var$8) {
            $indicesBuffer = null;
            var$9 = null;
            $mesh.$vertices.$unbind0(var$7, $indicesBuffer);
            $indicesBuffer = $mesh.$instances;
            if ($indicesBuffer !== null && $indicesBuffer.$getNumInstances() > 0)
                $mesh.$instances.$unbind0(var$7, var$9);
            if ($mesh.$indices.$getNumIndices() > 0)
                $mesh.$indices.$unbind();
        }
    }
    $this.$idx = 0;
},
cbggg_SpriteBatch__clinit_ = () => {
    cbggg_SpriteBatch_defaultVertexDataType = cbgg_Mesh$VertexDataType_VertexBufferObject;
    cbggg_SpriteBatch_overrideVertexType = null;
},
cbgu_ScreenUtils = $rt_classWithoutFields(),
cgxgbtfi_IndexedDBFileData = $rt_classWithoutFields(),
cgxgbtfi_IndexedDBFileData_create$js_body$_5 = (var$1, var$2) => {
    return { type : var$1, date : var$2 };
};
function cgxgbtft_LocalDBStorage$putFile$lambda$_2_0() {
    jl_Object.call(this);
    this.$_01 = null;
}
let cgxgbtft_LocalDBStorage$putFile$lambda$_2_0_handleEvent$exported$0 = var$1 => {
    let var$2, var$3;
    var$1 = var$1.$_01;
    var$2 = jl_System_err();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(438)), var$1);
    var$1 = jl_AbstractStringBuilder_toString(var$3);
    otcic_JsConsolePrintStream_println(var$2, var$1);
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException);
function cbgm_Matrix4() {
    jl_Object.call(this);
    this.$val = null;
}
let cbgm_Matrix4_tmp = null,
cbgm_Matrix4_quat = null,
cbgm_Matrix4_quat2 = null,
cbgm_Matrix4_l_vez = null,
cbgm_Matrix4_l_vex = null,
cbgm_Matrix4_l_vey = null,
cbgm_Matrix4_tmpVec = null,
cbgm_Matrix4_tmpMat = null,
cbgm_Matrix4_right = null,
cbgm_Matrix4_tmpForward = null,
cbgm_Matrix4_tmpUp = null,
cbgm_Matrix4_$callClinit = () => {
    cbgm_Matrix4_$callClinit = $rt_eraseClinit(cbgm_Matrix4);
    cbgm_Matrix4__clinit_();
},
cbgm_Matrix4__init_0 = $this => {
    let var$1, var$2;
    cbgm_Matrix4_$callClinit();
    var$1 = $rt_createFloatArray(16);
    var$2 = var$1.data;
    $this.$val = var$1;
    var$2[0] = 1.0;
    var$2[5] = 1.0;
    var$2[10] = 1.0;
    var$2[15] = 1.0;
},
cbgm_Matrix4__init_ = () => {
    let var_0 = new cbgm_Matrix4();
    cbgm_Matrix4__init_0(var_0);
    return var_0;
},
cbgm_Matrix4_set = ($this, $values) => {
    let var$2;
    var$2 = $values.data;
    $values = $this.$val.data;
    $values[0] = var$2[0];
    $values[1] = var$2[1];
    $values[2] = var$2[2];
    $values[3] = var$2[3];
    $values[4] = var$2[4];
    $values[5] = var$2[5];
    $values[6] = var$2[6];
    $values[7] = var$2[7];
    $values[8] = var$2[8];
    $values[9] = var$2[9];
    $values[10] = var$2[10];
    $values[11] = var$2[11];
    $values[12] = var$2[12];
    $values[13] = var$2[13];
    $values[14] = var$2[14];
    $values[15] = var$2[15];
    return $this;
},
cbgm_Matrix4_mul = ($this, $matrix) => {
    let var$2, var$3, var$4, var$5, var$6;
    cbgm_Matrix4_$callClinit();
    var$2 = cbgm_Matrix4_tmp;
    var$3 = var$2.data;
    var$4 = $this.$val.data;
    var$5 = var$4[0];
    var$6 = $matrix.$val.data;
    var$3[0] = var$5 * var$6[0] + var$4[4] * var$6[1] + var$4[8] * var$6[2] + var$4[12] * var$6[3];
    var$3[4] = var$4[0] * var$6[4] + var$4[4] * var$6[5] + var$4[8] * var$6[6] + var$4[12] * var$6[7];
    var$3[8] = var$4[0] * var$6[8] + var$4[4] * var$6[9] + var$4[8] * var$6[10] + var$4[12] * var$6[11];
    var$3[12] = var$4[0] * var$6[12] + var$4[4] * var$6[13] + var$4[8] * var$6[14] + var$4[12] * var$6[15];
    var$3[1] = var$4[1] * var$6[0] + var$4[5] * var$6[1] + var$4[9] * var$6[2] + var$4[13] * var$6[3];
    var$3[5] = var$4[1] * var$6[4] + var$4[5] * var$6[5] + var$4[9] * var$6[6] + var$4[13] * var$6[7];
    var$3[9] = var$4[1] * var$6[8] + var$4[5] * var$6[9] + var$4[9] * var$6[10] + var$4[13] * var$6[11];
    var$3[13] = var$4[1] * var$6[12] + var$4[5] * var$6[13] + var$4[9] * var$6[14] + var$4[13] * var$6[15];
    var$3[2] = var$4[2] * var$6[0] + var$4[6] * var$6[1] + var$4[10] * var$6[2] + var$4[14] * var$6[3];
    var$3[6] = var$4[2] * var$6[4] + var$4[6] * var$6[5] + var$4[10] * var$6[6] + var$4[14] * var$6[7];
    var$3[10] = var$4[2] * var$6[8] + var$4[6] * var$6[9] + var$4[10] * var$6[10] + var$4[14] * var$6[11];
    var$3[14] = var$4[2] * var$6[12] + var$4[6] * var$6[13] + var$4[10] * var$6[14] + var$4[14] * var$6[15];
    var$3[3] = var$4[3] * var$6[0] + var$4[7] * var$6[1] + var$4[11] * var$6[2] + var$4[15] * var$6[3];
    var$3[7] = var$4[3] * var$6[4] + var$4[7] * var$6[5] + var$4[11] * var$6[6] + var$4[15] * var$6[7];
    var$3[11] = var$4[3] * var$6[8] + var$4[7] * var$6[9] + var$4[11] * var$6[10] + var$4[15] * var$6[11];
    var$3[15] = var$4[3] * var$6[12] + var$4[7] * var$6[13] + var$4[11] * var$6[14] + var$4[15] * var$6[15];
    return cbgm_Matrix4_set($this, var$2);
},
cbgm_Matrix4_setToOrtho2D = ($this, $x, $y, $width, $height) => {
    let var$5, var$6, var$7, var$8, var$9;
    var$5 = $x + $width;
    $height = $y + $height;
    var$6 = $this.$val.data;
    var$6[0] = 1.0;
    var$6[4] = 0.0;
    var$6[8] = 0.0;
    var$6[12] = 0.0;
    var$6[1] = 0.0;
    var$6[5] = 1.0;
    var$6[9] = 0.0;
    var$6[13] = 0.0;
    var$6[2] = 0.0;
    var$6[6] = 0.0;
    var$6[10] = 1.0;
    var$6[14] = 0.0;
    var$6[3] = 0.0;
    var$6[7] = 0.0;
    var$6[11] = 0.0;
    var$6[15] = 1.0;
    var$7 = var$5 - $x;
    $width = 2.0 / var$7;
    var$8 = $height - $y;
    var$9 = 2.0 / var$8;
    var$5 =  -(var$5 + $x) / var$7;
    $y =  -($height + $y) / var$8;
    var$6[0] = $width;
    var$6[1] = 0.0;
    var$6[2] = 0.0;
    var$6[3] = 0.0;
    var$6[4] = 0.0;
    var$6[5] = var$9;
    var$6[6] = 0.0;
    var$6[7] = 0.0;
    var$6[8] = 0.0;
    var$6[9] = 0.0;
    var$6[10] = (-2.0);
    var$6[11] = 0.0;
    var$6[12] = var$5;
    var$6[13] = $y;
    var$6[14] = (-1.0);
    var$6[15] = 1.0;
    return $this;
},
cbgm_Matrix4__clinit_ = () => {
    cbgm_Matrix4_tmp = $rt_createFloatArray(16);
    cbgm_Matrix4_quat = cbgm_Quaternion__init_();
    cbgm_Matrix4_quat2 = cbgm_Quaternion__init_();
    cbgm_Matrix4_l_vez = cbgm_Vector3__init_();
    cbgm_Matrix4_l_vex = cbgm_Vector3__init_();
    cbgm_Matrix4_l_vey = cbgm_Vector3__init_();
    cbgm_Matrix4_tmpVec = cbgm_Vector3__init_();
    cbgm_Matrix4_tmpMat = cbgm_Matrix4__init_();
    cbgm_Matrix4_right = cbgm_Vector3__init_();
    cbgm_Matrix4_tmpForward = cbgm_Vector3__init_();
    cbgm_Matrix4_tmpUp = cbgm_Vector3__init_();
},
cbgg_Mesh$VertexDataType = $rt_classWithoutFields(jl_Enum),
cbgg_Mesh$VertexDataType_VertexArray = null,
cbgg_Mesh$VertexDataType_VertexBufferObject = null,
cbgg_Mesh$VertexDataType_VertexBufferObjectSubData = null,
cbgg_Mesh$VertexDataType_VertexBufferObjectWithVAO = null,
cbgg_Mesh$VertexDataType_$VALUES = null,
cbgg_Mesh$VertexDataType__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbgg_Mesh$VertexDataType;
    jl_Enum__init_(var$1, $rt_s(439), 0);
    cbgg_Mesh$VertexDataType_VertexArray = var$1;
    var$1 = new cbgg_Mesh$VertexDataType;
    jl_Enum__init_(var$1, $rt_s(440), 1);
    cbgg_Mesh$VertexDataType_VertexBufferObject = var$1;
    var$1 = new cbgg_Mesh$VertexDataType;
    jl_Enum__init_(var$1, $rt_s(441), 2);
    cbgg_Mesh$VertexDataType_VertexBufferObjectSubData = var$1;
    var$1 = new cbgg_Mesh$VertexDataType;
    jl_Enum__init_(var$1, $rt_s(442), 3);
    cbgg_Mesh$VertexDataType_VertexBufferObjectWithVAO = var$1;
    var$2 = $rt_createArray(cbgg_Mesh$VertexDataType, 4);
    var$3 = var$2.data;
    var$3[0] = cbgg_Mesh$VertexDataType_VertexArray;
    var$3[1] = cbgg_Mesh$VertexDataType_VertexBufferObject;
    var$3[2] = cbgg_Mesh$VertexDataType_VertexBufferObjectSubData;
    var$3[3] = var$1;
    cbgg_Mesh$VertexDataType_$VALUES = var$2;
};
function cbgg_Mesh() {
    let a = this; jl_Object.call(a);
    a.$vertices = null;
    a.$indices = null;
    a.$autoBind = 0;
    a.$isVertexArray = 0;
    a.$instances = null;
    a.$isInstanced = 0;
    a.$tmpV = null;
}
let cbgg_Mesh_meshes = null,
cbgg_Mesh_$callClinit = () => {
    cbgg_Mesh_$callClinit = $rt_eraseClinit(cbgg_Mesh);
    cbgg_Mesh__clinit_();
},
cbgg_Mesh_getIndexData = $this => {
    return $this.$indices;
},
cbgg_Mesh_addManagedMesh = ($app, $mesh) => {
    let $managedResources;
    cbgg_Mesh_$callClinit();
    $managedResources = ju_HashMap_get(cbgg_Mesh_meshes, $app);
    if ($managedResources === null)
        $managedResources = cbgu_Array__init_();
    cbgu_Array_add($managedResources, $mesh);
    ju_HashMap_put(cbgg_Mesh_meshes, $app, $managedResources);
},
cbgg_Mesh__clinit_ = () => {
    cbgg_Mesh_meshes = ju_HashMap__init_();
};
function cbgg_VertexAttributes() {
    let a = this; jl_Object.call(a);
    a.$attributes3 = null;
    a.$vertexSize = 0;
    a.$mask4 = Long_ZERO;
    a.$boneWeightUnits = 0;
    a.$textureCoordinates = 0;
}
let cbgg_VertexAttributes_size = $this => {
    return $this.$attributes3.data.length;
},
cbgg_VertexAttributes_get = ($this, $index) => {
    return $this.$attributes3.data[$index];
};
function cbggg_ShaderProgram() {
    let a = this; jl_Object.call(a);
    a.$log = null;
    a.$isCompiled = 0;
    a.$uniforms0 = null;
    a.$uniformTypes = null;
    a.$uniformSizes = null;
    a.$uniformNames = null;
    a.$attributes2 = null;
    a.$attributeTypes = null;
    a.$attributeSizes = null;
    a.$attributeNames = null;
    a.$program = 0;
    a.$vertexShaderHandle = 0;
    a.$fragmentShaderHandle = 0;
    a.$matrix = null;
    a.$vertexShaderSource = null;
    a.$fragmentShaderSource = null;
    a.$invalidated = 0;
    a.$refCount = 0;
    a.$params = null;
    a.$type2 = null;
}
let cbggg_ShaderProgram_pedantic = 0,
cbggg_ShaderProgram_prependVertexCode = null,
cbggg_ShaderProgram_prependFragmentCode = null,
cbggg_ShaderProgram_shaders = null,
cbggg_ShaderProgram_intbuf = null,
cbggg_ShaderProgram_$callClinit = () => {
    cbggg_ShaderProgram_$callClinit = $rt_eraseClinit(cbggg_ShaderProgram);
    cbggg_ShaderProgram__clinit_();
},
cbggg_ShaderProgram_compileShaders = ($this, $vertexShader, $fragmentShader) => {
    let var$3;
    $this.$vertexShaderHandle = cbggg_ShaderProgram_loadShader($this, 35633, $vertexShader);
    var$3 = cbggg_ShaderProgram_loadShader($this, 35632, $fragmentShader);
    $this.$fragmentShaderHandle = var$3;
    if ($this.$vertexShaderHandle != (-1) && var$3 != (-1)) {
        var$3 = cbg_Gdx_gl20.$glCreateProgram();
        if (!var$3)
            var$3 = (-1);
        $vertexShader = cbg_Gdx_gl20;
        if (var$3 == (-1))
            var$3 = (-1);
        else {
            $vertexShader.$glAttachShader(var$3, $this.$vertexShaderHandle);
            $vertexShader.$glAttachShader(var$3, $this.$fragmentShaderHandle);
            $vertexShader.$glLinkProgram(var$3);
            $fragmentShader = jn_ByteBuffer_allocateDirect(4);
            jn_ByteBuffer_order($fragmentShader, jn_ByteOrder_nativeOrder());
            $fragmentShader = jn_ByteBufferJsImpl_asIntBuffer($fragmentShader);
            $vertexShader.$glGetProgramiv(var$3, 35714, $fragmentShader);
            if (!jn_IntBufferImpl_get($fragmentShader, 0)) {
                $this.$log = cbg_Gdx_gl20.$glGetProgramInfoLog(var$3);
                var$3 = (-1);
            }
        }
        $this.$program = var$3;
        if (var$3 != (-1)) {
            $this.$isCompiled = 1;
            return;
        }
        $this.$isCompiled = 0;
        return;
    }
    $this.$isCompiled = 0;
},
cbggg_ShaderProgram_loadShader = ($this, $type, $source) => {
    let $gl, $intbuf, $shader, $infoLog;
    $gl = cbg_Gdx_gl20;
    $intbuf = cbgu_BufferUtils_newIntBuffer(1);
    $shader = $gl.$glCreateShader($type);
    if (!$shader)
        return (-1);
    $gl.$glShaderSource($shader, $source);
    $gl.$glCompileShader($shader);
    $gl.$glGetShaderiv($shader, 35713, $intbuf);
    if (jn_IntBufferImpl_get($intbuf, 0))
        return $shader;
    $infoLog = $gl.$glGetShaderInfoLog($shader);
    $gl = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($gl);
    jl_AbstractStringBuilder_append0($gl, $this.$log);
    jl_AbstractStringBuilder_append0($gl, $type != 35633 ? $rt_s(443) : $rt_s(444));
    $this.$log = jl_AbstractStringBuilder_toString($gl);
    $source = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($source);
    jl_AbstractStringBuilder_append0($source, $this.$log);
    jl_AbstractStringBuilder_append0($source, $infoLog);
    $this.$log = jl_AbstractStringBuilder_toString($source);
    return (-1);
},
cbggg_ShaderProgram_getLog = $this => {
    let var$1;
    if (!$this.$isCompiled)
        return $this.$log;
    var$1 = cbg_Gdx_gl20.$glGetProgramInfoLog($this.$program);
    $this.$log = var$1;
    return var$1;
},
cbggg_ShaderProgram_fetchUniformLocation = ($this, $name) => {
    let var$2, var$3, var$4, var$5;
    cbggg_ShaderProgram_$callClinit();
    var$2 = cbggg_ShaderProgram_pedantic;
    var$3 = cbgu_ObjectIntMap_get($this.$uniforms0, $name, (-2));
    if (var$3 == (-2)) {
        var$3 = cbg_Gdx_gl20.$glGetUniformLocation($this.$program, $name);
        if (var$3 == (-1) && var$2) {
            if (!$this.$isCompiled) {
                $name = new jl_IllegalStateException;
                var$4 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$4);
                jl_AbstractStringBuilder_append0(var$4, $rt_s(445));
                jl_AbstractStringBuilder_append0(var$4, cbggg_ShaderProgram_getLog($this));
                jl_RuntimeException__init_($name, jl_AbstractStringBuilder_toString(var$4));
                $rt_throw($name);
            }
            var$4 = new jl_IllegalArgumentException;
            var$5 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$5);
            jl_AbstractStringBuilder_append0(var$5, $rt_s(446));
            jl_AbstractStringBuilder_append0(var$5, $name);
            jl_AbstractStringBuilder_append0(var$5, $rt_s(447));
            jl_RuntimeException__init_(var$4, jl_AbstractStringBuilder_toString(var$5));
            $rt_throw(var$4);
        }
        cbgu_ObjectIntMap_put($this.$uniforms0, $name, var$3);
    }
    return var$3;
},
cbggg_ShaderProgram_setVertexAttribute = ($this, $location, $size, $type, $normalize, $stride, $offset) => {
    let $gl;
    $gl = cbg_Gdx_gl20;
    cbggg_ShaderProgram_checkManaged($this);
    $gl.$glVertexAttribPointer($location, $size, $type, $normalize, $stride, $offset);
},
cbggg_ShaderProgram_disableVertexAttribute0 = ($this, $name) => {
    let $gl, var$3, $location;
    $gl = cbg_Gdx_gl20;
    cbggg_ShaderProgram_checkManaged($this);
    var$3 = cbg_Gdx_gl20;
    $location = cbgu_ObjectIntMap_get($this.$attributes2, $name, (-2));
    if ($location == (-2)) {
        $location = var$3.$glGetAttribLocation($this.$program, $name);
        cbgu_ObjectIntMap_put($this.$attributes2, $name, $location);
    }
    if ($location == (-1))
        return;
    $gl.$glDisableVertexAttribArray($location);
},
cbggg_ShaderProgram_disableVertexAttribute = ($this, $location) => {
    let $gl;
    $gl = cbg_Gdx_gl20;
    cbggg_ShaderProgram_checkManaged($this);
    $gl.$glDisableVertexAttribArray($location);
},
cbggg_ShaderProgram_enableVertexAttribute = ($this, $location) => {
    let $gl;
    $gl = cbg_Gdx_gl20;
    cbggg_ShaderProgram_checkManaged($this);
    $gl.$glEnableVertexAttribArray($location);
},
cbggg_ShaderProgram_checkManaged = $this => {
    if ($this.$invalidated) {
        cbggg_ShaderProgram_compileShaders($this, $this.$vertexShaderSource, $this.$fragmentShaderSource);
        $this.$invalidated = 0;
    }
},
cbggg_ShaderProgram_getAttributeLocation = ($this, $name) => {
    return cbgu_ObjectIntMap_get($this.$attributes2, $name, (-1));
},
cbggg_ShaderProgram__clinit_ = () => {
    cbggg_ShaderProgram_pedantic = 1;
    cbggg_ShaderProgram_prependVertexCode = $rt_s(13);
    cbggg_ShaderProgram_prependFragmentCode = $rt_s(13);
    cbggg_ShaderProgram_shaders = cbgu_ObjectMap__init_();
    cbggg_ShaderProgram_intbuf = cbgu_BufferUtils_newIntBuffer(1);
},
cbgg_TextureData$Factory = $rt_classWithoutFields();
function cbg_Graphics$BufferFormat() {
    let a = this; jl_Object.call(a);
    a.$r0 = 0;
    a.$g0 = 0;
    a.$b0 = 0;
    a.$a0 = 0;
    a.$depth = 0;
    a.$stencil0 = 0;
    a.$samples = 0;
    a.$coverageSampling = 0;
}
function cbgm_Quaternion() {
    let a = this; jl_Object.call(a);
    a.$x0 = 0.0;
    a.$y0 = 0.0;
    a.$z0 = 0.0;
    a.$w = 0.0;
}
let cbgm_Quaternion_tmp1 = null,
cbgm_Quaternion_tmp2 = null,
cbgm_Quaternion__init_1 = ($this, $x, $y, $z, $w) => {
    cbgm_Quaternion_set($this, $x, $y, $z, $w);
},
cbgm_Quaternion__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new cbgm_Quaternion();
    cbgm_Quaternion__init_1(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
cbgm_Quaternion__init_2 = $this => {
    cbgm_Quaternion_set($this, 0.0, 0.0, 0.0, 1.0);
},
cbgm_Quaternion__init_ = () => {
    let var_0 = new cbgm_Quaternion();
    cbgm_Quaternion__init_2(var_0);
    return var_0;
},
cbgm_Quaternion_set = ($this, $x, $y, $z, $w) => {
    $this.$x0 = $x;
    $this.$y0 = $y;
    $this.$z0 = $z;
    $this.$w = $w;
    return $this;
},
cbgm_Quaternion__clinit_ = () => {
    cbgm_Quaternion_tmp1 = cbgm_Quaternion__init_0(0.0, 0.0, 0.0, 0.0);
    cbgm_Quaternion_tmp2 = cbgm_Quaternion__init_0(0.0, 0.0, 0.0, 0.0);
},
cbgm_Vector = $rt_classWithoutFields(0);
function cbgm_Vector3() {
    let a = this; jl_Object.call(a);
    a.$x = 0.0;
    a.$y = 0.0;
    a.$z = 0.0;
}
let cbgm_Vector3_X = null,
cbgm_Vector3_Y = null,
cbgm_Vector3_Z = null,
cbgm_Vector3_Zero = null,
cbgm_Vector3_tmpMat = null,
cbgm_Vector3_$callClinit = () => {
    cbgm_Vector3_$callClinit = $rt_eraseClinit(cbgm_Vector3);
    cbgm_Vector3__clinit_();
},
cbgm_Vector3__init_2 = $this => {
    cbgm_Vector3_$callClinit();
},
cbgm_Vector3__init_ = () => {
    let var_0 = new cbgm_Vector3();
    cbgm_Vector3__init_2(var_0);
    return var_0;
},
cbgm_Vector3__init_1 = ($this, $x, $y, $z) => {
    cbgm_Vector3_$callClinit();
    $this.$x = $x;
    $this.$y = $y;
    $this.$z = $z;
},
cbgm_Vector3__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new cbgm_Vector3();
    cbgm_Vector3__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
cbgm_Vector3__clinit_ = () => {
    cbgm_Vector3_X = cbgm_Vector3__init_0(1.0, 0.0, 0.0);
    cbgm_Vector3_Y = cbgm_Vector3__init_0(0.0, 1.0, 0.0);
    cbgm_Vector3_Z = cbgm_Vector3__init_0(0.0, 0.0, 1.0);
    cbgm_Vector3_Zero = cbgm_Vector3__init_0(0.0, 0.0, 0.0);
    cbgm_Vector3_tmpMat = cbgm_Matrix4__init_();
},
cbgg_Mesh$1 = $rt_classWithoutFields(),
cbgg_Mesh$1_$SwitchMap$com$badlogic$gdx$graphics$Mesh$VertexDataType = null,
cbgg_Mesh$1_$callClinit = () => {
    cbgg_Mesh$1_$callClinit = $rt_eraseClinit(cbgg_Mesh$1);
    cbgg_Mesh$1__clinit_();
},
cbgg_Mesh$1__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createIntArray((cbgg_Mesh$VertexDataType_$VALUES.$clone0()).data.length);
    var$2 = var$1.data;
    cbgg_Mesh$1_$SwitchMap$com$badlogic$gdx$graphics$Mesh$VertexDataType = var$1;
    var$2[cbgg_Mesh$VertexDataType_VertexBufferObject.$ordinal0] = 1;
    var$2[cbgg_Mesh$VertexDataType_VertexBufferObjectSubData.$ordinal0] = 2;
    var$2[cbgg_Mesh$VertexDataType_VertexBufferObjectWithVAO.$ordinal0] = 3;
    var$2[cbgg_Mesh$VertexDataType_VertexArray.$ordinal0] = 4;
},
cbggg_VertexData = $rt_classWithoutFields(0);
function cbggg_VertexBufferObject() {
    let a = this; jl_Object.call(a);
    a.$attributes0 = null;
    a.$byteBuffer2 = null;
    a.$buffer5 = null;
    a.$bufferHandle2 = 0;
    a.$isStatic0 = 0;
    a.$usage1 = 0;
    a.$isDirty3 = 0;
    a.$isBound0 = 0;
}
let cbggg_VertexBufferObject__init_ = ($this, $isStatic, $numVertices, $attributes) => {
    $this.$isDirty3 = 0;
    $this.$isBound0 = 0;
    $this.$isStatic0 = $isStatic;
    $this.$attributes0 = $attributes;
    $attributes = cbgu_BufferUtils_newUnsafeByteBuffer($rt_imul($attributes.$vertexSize, $numVertices));
    $this.$byteBuffer2 = $attributes;
    $attributes = jn_ByteBufferJsImpl_asFloatBuffer($attributes);
    $this.$buffer5 = $attributes;
    jn_Buffer_flip($attributes);
    $this.$bufferHandle2 = cgxgbt_TeaGL20_glGenBuffer(cbg_Gdx_gl20);
    $this.$usage1 = !$isStatic ? 35048 : 35044;
},
cbggg_VertexBufferObject__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new cbggg_VertexBufferObject();
    cbggg_VertexBufferObject__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
cbggg_VertexBufferObject_setVertices = ($this, $vertices, $offset, $count) => {
    let var$4, var$5;
    $this.$isDirty3 = 1;
    cbgu_BufferUtils_copy($vertices, $this.$buffer5, $count, $offset);
    jn_Buffer_position($this.$buffer5, 0);
    jn_Buffer_limit($this.$buffer5, $count);
    if ($this.$isBound0) {
        var$4 = cbg_Gdx_gl20;
        var$5 = $this.$buffer5;
        var$4.$glBufferData(34962, var$5.$limit0, var$5, $this.$usage1);
        $this.$isDirty3 = 0;
    }
},
cbggg_VertexBufferObject_bind = ($this, $shader, $locations) => {
    let $gl, $attribute, $numAttributes, $i, var$7, $location;
    $gl = cbg_Gdx_gl20;
    $gl.$glBindBuffer(34962, $this.$bufferHandle2);
    if ($this.$isDirty3) {
        $attribute = $this.$buffer5;
        $gl.$glBufferData(34962, $attribute.$limit0, $attribute, $this.$usage1);
        $this.$isDirty3 = 0;
    }
    a: {
        $numAttributes = cbgg_VertexAttributes_size($this.$attributes0);
        if ($locations !== null) {
            $i = 0;
            while (true) {
                if ($i >= $numAttributes)
                    break a;
                var$7 = $locations.data;
                $attribute = cbgg_VertexAttributes_get($this.$attributes0, $i);
                $location = var$7[$i];
                if ($location >= 0) {
                    cbggg_ShaderProgram_enableVertexAttribute($shader, $location);
                    cbggg_ShaderProgram_setVertexAttribute($shader, $location, $attribute.$numComponents, $attribute.$type3, $attribute.$normalized, $this.$attributes0.$vertexSize, $attribute.$offset);
                }
                $i = $i + 1 | 0;
            }
        }
        $i = 0;
        while ($i < $numAttributes) {
            $attribute = cbgg_VertexAttributes_get($this.$attributes0, $i);
            $location = cbggg_ShaderProgram_getAttributeLocation($shader, $attribute.$alias);
            if ($location >= 0) {
                cbggg_ShaderProgram_enableVertexAttribute($shader, $location);
                cbggg_ShaderProgram_setVertexAttribute($shader, $location, $attribute.$numComponents, $attribute.$type3, $attribute.$normalized, $this.$attributes0.$vertexSize, $attribute.$offset);
            }
            $i = $i + 1 | 0;
        }
    }
    $this.$isBound0 = 1;
},
cbggg_VertexBufferObject_unbind = ($this, $shader, $locations) => {
    let $gl, $numAttributes, $i, $location;
    a: {
        $gl = cbg_Gdx_gl20;
        $numAttributes = cbgg_VertexAttributes_size($this.$attributes0);
        if ($locations === null) {
            $i = 0;
            while ($i < $numAttributes) {
                cbggg_ShaderProgram_disableVertexAttribute0($shader, (cbgg_VertexAttributes_get($this.$attributes0, $i)).$alias);
                $i = $i + 1 | 0;
            }
        } else {
            $i = 0;
            while (true) {
                if ($i >= $numAttributes)
                    break a;
                $location = $locations.data[$i];
                if ($location >= 0)
                    cbggg_ShaderProgram_disableVertexAttribute($shader, $location);
                $i = $i + 1 | 0;
            }
        }
    }
    $gl.$glBindBuffer(34962, 0);
    $this.$isBound0 = 0;
},
cbggg_VertexBufferObject_dispose = $this => {
    let $gl, var$2;
    $gl = cbg_Gdx_gl20;
    $gl.$glBindBuffer(34962, 0);
    var$2 = $this.$bufferHandle2;
    cgxgbt_TeaGL20_glDeleteBuffer($gl, var$2);
    $this.$bufferHandle2 = 0;
    cbgu_BufferUtils_disposeUnsafeByteBuffer($this.$byteBuffer2);
},
cbggg_IndexData = $rt_classWithoutFields(0);
function cbggg_IndexBufferObject() {
    let a = this; jl_Object.call(a);
    a.$byteBuffer1 = null;
    a.$buffer0 = null;
    a.$bufferHandle = 0;
    a.$isDirect0 = 0;
    a.$isDirty = 0;
    a.$isBound = 0;
    a.$usage = 0;
}
let cbggg_IndexBufferObject__init_0 = ($this, $isStatic, $maxIndices) => {
    let var$3;
    $this.$isDirty = 1;
    $this.$isBound = 0;
    $this.$isDirect0 = 1;
    var$3 = cbgu_BufferUtils_newUnsafeByteBuffer($maxIndices * 2 | 0);
    $this.$byteBuffer1 = var$3;
    var$3 = jn_ByteBufferJsImpl_asShortBuffer(var$3);
    $this.$buffer0 = var$3;
    jn_Buffer_flip(var$3);
    $this.$bufferHandle = cgxgbt_TeaGL20_glGenBuffer(cbg_Gdx_gl20);
    $this.$usage = !$isStatic ? 35048 : 35044;
},
cbggg_IndexBufferObject__init_1 = (var_0, var_1) => {
    let var_2 = new cbggg_IndexBufferObject();
    cbggg_IndexBufferObject__init_0(var_2, var_0, var_1);
    return var_2;
},
cbggg_IndexBufferObject__init_ = ($this, $maxIndices) => {
    let var$2, var$3, var$4;
    $this.$isDirty = 1;
    $this.$isBound = 0;
    $this.$isDirect0 = 1;
    if (cgxgbt_TeaTool_isProd) {
        var$2 = jn_ByteBuffer_allocateDirect($maxIndices * 2 | 0);
        jn_ByteBuffer_order(var$2, jn_ByteOrder_nativeOrder());
        var$2 = jn_ByteBufferJsImpl_asShortBuffer(var$2);
    } else {
        var$3 = $rt_createShortArray($maxIndices);
        var$4 = var$3.data.length;
        var$2 = jn_ShortBufferOverTypedArray__init_(0, var$4, 0, var$3.data, var$3);
        var$2.$position0 = 0;
        var$2.$limit0 = 0 + var$4 | 0;
    }
    $this.$buffer0 = var$2;
    jn_Buffer_flip(var$2);
    $this.$bufferHandle = cgxgbt_TeaGL20_glGenBuffer(cbg_Gdx_gl20);
    $this.$usage = 35044;
},
cbggg_IndexBufferObject__init_2 = var_0 => {
    let var_1 = new cbggg_IndexBufferObject();
    cbggg_IndexBufferObject__init_(var_1, var_0);
    return var_1;
},
cbggg_IndexBufferObject_getNumIndices = $this => {
    return $this.$buffer0.$limit0;
},
cbggg_IndexBufferObject_getNumMaxIndices = $this => {
    return $this.$buffer0.$capacityImpl();
},
cbggg_IndexBufferObject_setIndices = ($this, $indices, $offset, $count) => {
    let var$4, var$5;
    $this.$isDirty = 1;
    jn_Buffer_clear($this.$buffer0);
    jn_ShortBuffer_put($this.$buffer0, $indices, $offset, $count);
    jn_Buffer_flip($this.$buffer0);
    if ($this.$isBound) {
        var$4 = cbg_Gdx_gl20;
        var$5 = $this.$buffer0;
        var$4.$glBufferData(34963, var$5.$limit0, var$5, $this.$usage);
        $this.$isDirty = 0;
    }
},
cbggg_IndexBufferObject_getBuffer = ($this, $forWriting) => {
    $this.$isDirty = $this.$isDirty | $forWriting;
    return $this.$buffer0;
},
cbggg_IndexBufferObject_bind = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$bufferHandle;
    if (!var$1) {
        var$2 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_(var$2, $rt_s(448));
        $rt_throw(var$2);
    }
    cbg_Gdx_gl20.$glBindBuffer(34963, var$1);
    if ($this.$isDirty) {
        var$2 = cbg_Gdx_gl20;
        var$3 = $this.$buffer0;
        var$2.$glBufferData(34963, var$3.$limit0, var$3, $this.$usage);
        $this.$isDirty = 0;
    }
    $this.$isBound = 1;
},
cbggg_IndexBufferObject_unbind = $this => {
    cbg_Gdx_gl20.$glBindBuffer(34963, 0);
    $this.$isBound = 0;
},
cbggg_IndexBufferObject_dispose = $this => {
    let $gl, var$2;
    $gl = cbg_Gdx_gl20;
    $gl.$glBindBuffer(34963, 0);
    var$2 = $this.$bufferHandle;
    cgxgbt_TeaGL20_glDeleteBuffer($gl, var$2);
    $this.$bufferHandle = 0;
    cbgu_BufferUtils_disposeUnsafeByteBuffer($this.$byteBuffer1);
    $this.$byteBuffer1 = null;
    $this.$buffer0 = null;
};
function cbggg_VertexBufferObjectSubData() {
    let a = this; jl_Object.call(a);
    a.$attributes = null;
    a.$buffer1 = null;
    a.$byteBuffer = null;
    a.$bufferHandle1 = 0;
    a.$isDirect = 0;
    a.$isStatic = 0;
    a.$usage0 = 0;
    a.$isDirty1 = 0;
    a.$isBound1 = 0;
}
let cbggg_VertexBufferObjectSubData__init_ = ($this, $isStatic, $numVertices, $attributes) => {
    $this.$isDirty1 = 0;
    $this.$isBound1 = 0;
    $this.$isStatic = $isStatic;
    $this.$attributes = $attributes;
    $attributes = cbgu_BufferUtils_newByteBuffer($rt_imul($attributes.$vertexSize, $numVertices));
    $this.$byteBuffer = $attributes;
    $this.$isDirect = 1;
    $this.$usage0 = !$isStatic ? 35048 : 35044;
    $this.$buffer1 = jn_ByteBufferJsImpl_asFloatBuffer($attributes);
    $numVertices = cgxgbt_TeaGL20_glGenBuffer(cbg_Gdx_gl20);
    cbg_Gdx_gl20.$glBindBuffer(34962, $numVertices);
    cbg_Gdx_gl20.$glBufferData(34962, $this.$byteBuffer.$capacityImpl(), null, $this.$usage0);
    cbg_Gdx_gl20.$glBindBuffer(34962, 0);
    $this.$bufferHandle1 = $numVertices;
    jn_Buffer_flip($this.$buffer1);
    jn_Buffer_flip($this.$byteBuffer);
},
cbggg_VertexBufferObjectSubData__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new cbggg_VertexBufferObjectSubData();
    cbggg_VertexBufferObjectSubData__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
cbggg_VertexBufferObjectSubData_setVertices = ($this, $vertices, $offset, $count) => {
    let var$4, var$5;
    $this.$isDirty1 = 1;
    if ($this.$isDirect) {
        cbgu_BufferUtils_copy($vertices, $this.$byteBuffer, $count, $offset);
        jn_Buffer_position($this.$buffer1, 0);
        jn_Buffer_limit($this.$buffer1, $count);
    } else {
        jn_Buffer_clear($this.$buffer1);
        jn_FloatBuffer_put($this.$buffer1, $vertices, $offset, $count);
        jn_Buffer_flip($this.$buffer1);
        jn_Buffer_position($this.$byteBuffer, 0);
        var$4 = $this.$byteBuffer;
        $offset = $this.$buffer1.$limit0 << 2;
        jn_Buffer_limit(var$4, $offset);
    }
    if ($this.$isBound1) {
        var$4 = cbg_Gdx_gl20;
        var$5 = $this.$byteBuffer;
        var$4.$glBufferSubData(34962, 0, var$5.$limit0, var$5);
        $this.$isDirty1 = 0;
    }
},
cbggg_VertexBufferObjectSubData_bind = ($this, $shader, $locations) => {
    let $gl, $attribute, $i, $numAttributes, var$7, $location;
    $gl = cbg_Gdx_gl20;
    $gl.$glBindBuffer(34962, $this.$bufferHandle1);
    if ($this.$isDirty1) {
        $attribute = $this.$byteBuffer;
        $i = $this.$buffer1.$limit0 * 4 | 0;
        jn_Buffer_limit($attribute, $i);
        $attribute = $this.$byteBuffer;
        $gl.$glBufferData(34962, $attribute.$limit0, $attribute, $this.$usage0);
        $this.$isDirty1 = 0;
    }
    a: {
        $numAttributes = cbgg_VertexAttributes_size($this.$attributes);
        if ($locations !== null) {
            $i = 0;
            while (true) {
                if ($i >= $numAttributes)
                    break a;
                var$7 = $locations.data;
                $attribute = cbgg_VertexAttributes_get($this.$attributes, $i);
                $location = var$7[$i];
                if ($location >= 0) {
                    cbggg_ShaderProgram_enableVertexAttribute($shader, $location);
                    cbggg_ShaderProgram_setVertexAttribute($shader, $location, $attribute.$numComponents, $attribute.$type3, $attribute.$normalized, $this.$attributes.$vertexSize, $attribute.$offset);
                }
                $i = $i + 1 | 0;
            }
        }
        $i = 0;
        while ($i < $numAttributes) {
            $attribute = cbgg_VertexAttributes_get($this.$attributes, $i);
            $location = cbggg_ShaderProgram_getAttributeLocation($shader, $attribute.$alias);
            if ($location >= 0) {
                cbggg_ShaderProgram_enableVertexAttribute($shader, $location);
                cbggg_ShaderProgram_setVertexAttribute($shader, $location, $attribute.$numComponents, $attribute.$type3, $attribute.$normalized, $this.$attributes.$vertexSize, $attribute.$offset);
            }
            $i = $i + 1 | 0;
        }
    }
    $this.$isBound1 = 1;
},
cbggg_VertexBufferObjectSubData_unbind = ($this, $shader, $locations) => {
    let $gl, $numAttributes, $i, $location;
    a: {
        $gl = cbg_Gdx_gl20;
        $numAttributes = cbgg_VertexAttributes_size($this.$attributes);
        if ($locations === null) {
            $i = 0;
            while ($i < $numAttributes) {
                cbggg_ShaderProgram_disableVertexAttribute0($shader, (cbgg_VertexAttributes_get($this.$attributes, $i)).$alias);
                $i = $i + 1 | 0;
            }
        } else {
            $i = 0;
            while (true) {
                if ($i >= $numAttributes)
                    break a;
                $location = $locations.data[$i];
                if ($location >= 0)
                    cbggg_ShaderProgram_disableVertexAttribute($shader, $location);
                $i = $i + 1 | 0;
            }
        }
    }
    $gl.$glBindBuffer(34962, 0);
    $this.$isBound1 = 0;
},
cbggg_VertexBufferObjectSubData_dispose = $this => {
    let $gl, var$2;
    $gl = cbg_Gdx_gl20;
    $gl.$glBindBuffer(34962, 0);
    var$2 = $this.$bufferHandle1;
    cgxgbt_TeaGL20_glDeleteBuffer($gl, var$2);
    $this.$bufferHandle1 = 0;
};
function cbggg_IndexBufferObjectSubData() {
    let a = this; jl_Object.call(a);
    a.$buffer2 = null;
    a.$byteBuffer0 = null;
    a.$bufferHandle3 = 0;
    a.$isDirect1 = 0;
    a.$isDirty0 = 0;
    a.$isBound2 = 0;
    a.$usage3 = 0;
}
let cbggg_IndexBufferObjectSubData__init_0 = ($this, $isStatic, $maxIndices) => {
    let var$3;
    $this.$isDirty0 = 1;
    $this.$isBound2 = 0;
    var$3 = cbgu_BufferUtils_newByteBuffer($maxIndices * 2 | 0);
    $this.$byteBuffer0 = var$3;
    $this.$isDirect1 = 1;
    $this.$usage3 = !$isStatic ? 35048 : 35044;
    var$3 = jn_ByteBufferJsImpl_asShortBuffer(var$3);
    $this.$buffer2 = var$3;
    jn_Buffer_flip(var$3);
    jn_Buffer_flip($this.$byteBuffer0);
    $maxIndices = cgxgbt_TeaGL20_glGenBuffer(cbg_Gdx_gl20);
    cbg_Gdx_gl20.$glBindBuffer(34963, $maxIndices);
    cbg_Gdx_gl20.$glBufferData(34963, $this.$byteBuffer0.$capacityImpl(), null, $this.$usage3);
    cbg_Gdx_gl20.$glBindBuffer(34963, 0);
    $this.$bufferHandle3 = $maxIndices;
},
cbggg_IndexBufferObjectSubData__init_ = (var_0, var_1) => {
    let var_2 = new cbggg_IndexBufferObjectSubData();
    cbggg_IndexBufferObjectSubData__init_0(var_2, var_0, var_1);
    return var_2;
},
cbggg_IndexBufferObjectSubData_getNumIndices = $this => {
    return $this.$buffer2.$limit0;
},
cbggg_IndexBufferObjectSubData_getNumMaxIndices = $this => {
    return $this.$buffer2.$capacityImpl();
},
cbggg_IndexBufferObjectSubData_setIndices = ($this, $indices, $offset, $count) => {
    let var$4, var$5;
    $this.$isDirty0 = 1;
    jn_Buffer_clear($this.$buffer2);
    jn_ShortBuffer_put($this.$buffer2, $indices, $offset, $count);
    jn_Buffer_flip($this.$buffer2);
    jn_Buffer_position($this.$byteBuffer0, 0);
    var$4 = $this.$byteBuffer0;
    $offset = $count << 1;
    jn_Buffer_limit(var$4, $offset);
    if ($this.$isBound2) {
        var$4 = cbg_Gdx_gl20;
        var$5 = $this.$byteBuffer0;
        var$4.$glBufferSubData(34963, 0, var$5.$limit0, var$5);
        $this.$isDirty0 = 0;
    }
},
cbggg_IndexBufferObjectSubData_getBuffer = ($this, $forWriting) => {
    $this.$isDirty0 = $this.$isDirty0 | $forWriting;
    return $this.$buffer2;
},
cbggg_IndexBufferObjectSubData_bind = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = $this.$bufferHandle3;
    if (!var$1) {
        var$2 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_(var$2, $rt_s(449));
        $rt_throw(var$2);
    }
    cbg_Gdx_gl20.$glBindBuffer(34963, var$1);
    if ($this.$isDirty0) {
        var$2 = $this.$byteBuffer0;
        var$3 = $this.$buffer2.$limit0 * 2 | 0;
        jn_Buffer_limit(var$2, var$3);
        var$2 = cbg_Gdx_gl20;
        var$4 = $this.$byteBuffer0;
        var$2.$glBufferSubData(34963, 0, var$4.$limit0, var$4);
        $this.$isDirty0 = 0;
    }
    $this.$isBound2 = 1;
},
cbggg_IndexBufferObjectSubData_unbind = $this => {
    cbg_Gdx_gl20.$glBindBuffer(34963, 0);
    $this.$isBound2 = 0;
},
cbggg_IndexBufferObjectSubData_dispose = $this => {
    let $gl, var$2;
    $gl = cbg_Gdx_gl20;
    $gl.$glBindBuffer(34963, 0);
    var$2 = $this.$bufferHandle3;
    cgxgbt_TeaGL20_glDeleteBuffer($gl, var$2);
    $this.$bufferHandle3 = 0;
};
function cbggg_VertexBufferObjectWithVAO() {
    let a = this; jl_Object.call(a);
    a.$attributes1 = null;
    a.$byteBuffer3 = null;
    a.$buffer3 = null;
    a.$bufferHandle0 = 0;
    a.$isStatic1 = 0;
    a.$usage2 = 0;
    a.$isDirty2 = 0;
    a.$isBound3 = 0;
    a.$vaoHandle = 0;
    a.$cachedLocations = null;
}
let cbggg_VertexBufferObjectWithVAO_tmpHandle = null,
cbggg_VertexBufferObjectWithVAO_$callClinit = () => {
    cbggg_VertexBufferObjectWithVAO_$callClinit = $rt_eraseClinit(cbggg_VertexBufferObjectWithVAO);
    cbggg_VertexBufferObjectWithVAO__clinit_();
},
cbggg_VertexBufferObjectWithVAO__init_ = ($this, $isStatic, $numVertices, $attributes) => {
    cbggg_VertexBufferObjectWithVAO_$callClinit();
    $this.$isDirty2 = 0;
    $this.$isBound3 = 0;
    $this.$vaoHandle = (-1);
    $this.$cachedLocations = cbgu_IntArray__init_(1, 16);
    $this.$isStatic1 = $isStatic;
    $this.$attributes1 = $attributes;
    $attributes = cbgu_BufferUtils_newUnsafeByteBuffer($rt_imul($attributes.$vertexSize, $numVertices));
    $this.$byteBuffer3 = $attributes;
    $attributes = jn_ByteBufferJsImpl_asFloatBuffer($attributes);
    $this.$buffer3 = $attributes;
    jn_Buffer_flip($attributes);
    $this.$bufferHandle0 = cgxgbt_TeaGL20_glGenBuffer(cbg_Gdx_gl20);
    $this.$usage2 = !$isStatic ? 35048 : 35044;
    jn_Buffer_clear(cbggg_VertexBufferObjectWithVAO_tmpHandle);
    cbg_Gdx_gl30.$glGenVertexArrays(1, cbggg_VertexBufferObjectWithVAO_tmpHandle);
    $this.$vaoHandle = jn_IntBufferImpl_get0(cbggg_VertexBufferObjectWithVAO_tmpHandle);
},
cbggg_VertexBufferObjectWithVAO__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new cbggg_VertexBufferObjectWithVAO();
    cbggg_VertexBufferObjectWithVAO__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
cbggg_VertexBufferObjectWithVAO_setVertices = ($this, $vertices, $offset, $count) => {
    let var$4, var$5;
    $this.$isDirty2 = 1;
    cbgu_BufferUtils_copy($vertices, $this.$buffer3, $count, $offset);
    jn_Buffer_position($this.$buffer3, 0);
    jn_Buffer_limit($this.$buffer3, $count);
    if ($this.$isBound3) {
        var$4 = cbg_Gdx_gl20;
        var$5 = $this.$buffer3;
        var$4.$glBufferData(34962, var$5.$limit0, var$5, $this.$usage2);
        $this.$isDirty2 = 0;
    }
},
cbggg_VertexBufferObjectWithVAO_bind = ($this, $shader, $locations) => {
    let $gl, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    $gl = cbg_Gdx_gl30;
    $gl.$glBindVertexArray($this.$vaoHandle);
    var$4 = !$this.$cachedLocations.$size2 ? 0 : 1;
    a: {
        var$5 = cbgg_VertexAttributes_size($this.$attributes1);
        if (var$4) {
            if ($locations === null) {
                var$6 = 0;
                while (var$4 && var$6 < var$5) {
                    var$4 = cbggg_ShaderProgram_getAttributeLocation($shader, (cbgg_VertexAttributes_get($this.$attributes1, var$6)).$alias) != cbgu_IntArray_get($this.$cachedLocations, var$6) ? 0 : 1;
                    var$6 = var$6 + 1 | 0;
                }
            } else {
                var$7 = $locations.data;
                var$4 = var$7.length != $this.$cachedLocations.$size2 ? 0 : 1;
                var$6 = 0;
                while (var$4) {
                    if (var$6 >= var$5)
                        break a;
                    var$4 = var$7[var$6] != cbgu_IntArray_get($this.$cachedLocations, var$6) ? 0 : 1;
                    var$6 = var$6 + 1 | 0;
                }
            }
        }
    }
    b: {
        if (!var$4) {
            cbg_Gdx_gl.$glBindBuffer(34962, $this.$bufferHandle0);
            if ($this.$cachedLocations.$size2) {
                var$6 = cbgg_VertexAttributes_size($this.$attributes1);
                var$8 = 0;
                while (var$8 < var$6) {
                    var$4 = cbgu_IntArray_get($this.$cachedLocations, var$8);
                    if (var$4 >= 0)
                        cbggg_ShaderProgram_disableVertexAttribute($shader, var$4);
                    var$8 = var$8 + 1 | 0;
                }
            }
            $this.$cachedLocations.$size2 = 0;
            var$9 = 0;
            while (true) {
                if (var$9 >= var$5)
                    break b;
                var$10 = cbgg_VertexAttributes_get($this.$attributes1, var$9);
                if ($locations !== null) {
                    var$7 = $locations.data;
                    cbgu_IntArray_add($this.$cachedLocations, var$7[var$9]);
                } else
                    cbgu_IntArray_add($this.$cachedLocations, cbggg_ShaderProgram_getAttributeLocation($shader, var$10.$alias));
                var$6 = cbgu_IntArray_get($this.$cachedLocations, var$9);
                if (var$6 >= 0) {
                    cbggg_ShaderProgram_enableVertexAttribute($shader, var$6);
                    cbggg_ShaderProgram_setVertexAttribute($shader, var$6, var$10.$numComponents, var$10.$type3, var$10.$normalized, $this.$attributes1.$vertexSize, var$10.$offset);
                }
                var$9 = var$9 + 1 | 0;
            }
        }
    }
    if ($this.$isDirty2) {
        $gl.$glBindBuffer(34962, $this.$bufferHandle0);
        $shader = $this.$buffer3;
        jn_Buffer_limit($shader, $shader.$limit0);
        $shader = $this.$buffer3;
        $gl.$glBufferData(34962, $shader.$limit0, $shader, $this.$usage2);
        $this.$isDirty2 = 0;
    }
    $this.$isBound3 = 1;
},
cbggg_VertexBufferObjectWithVAO_unbind = ($this, $shader, $locations) => {
    cbg_Gdx_gl30.$glBindVertexArray(0);
    $this.$isBound3 = 0;
},
cbggg_VertexBufferObjectWithVAO_dispose = $this => {
    let $gl, var$2;
    $gl = cbg_Gdx_gl30;
    $gl.$glBindBuffer(34962, 0);
    var$2 = $this.$bufferHandle0;
    cgxgbt_TeaGL20_glDeleteBuffer($gl, var$2);
    $this.$bufferHandle0 = 0;
    if ($this.$vaoHandle != (-1)) {
        cbggg_VertexBufferObjectWithVAO_$callClinit();
        jn_Buffer_clear(cbggg_VertexBufferObjectWithVAO_tmpHandle);
        $gl = cbggg_VertexBufferObjectWithVAO_tmpHandle;
        var$2 = $this.$vaoHandle;
        jn_IntBufferImpl_put0($gl, var$2);
        jn_Buffer_flip(cbggg_VertexBufferObjectWithVAO_tmpHandle);
        cbg_Gdx_gl30.$glDeleteVertexArrays(1, cbggg_VertexBufferObjectWithVAO_tmpHandle);
        $this.$vaoHandle = (-1);
    }
    cbgu_BufferUtils_disposeUnsafeByteBuffer($this.$byteBuffer3);
},
cbggg_VertexBufferObjectWithVAO__clinit_ = () => {
    cbggg_VertexBufferObjectWithVAO_tmpHandle = cbgu_BufferUtils_newIntBuffer(1);
},
cbggg_VertexArray = $rt_classWithoutFields(cbggg_VertexBufferObject),
cbggg_IndexArray = $rt_classWithoutFields(cbggg_IndexBufferObject);
function cbgu_ObjectIntMap() {
    let a = this; jl_Object.call(a);
    a.$size6 = 0;
    a.$keyTable2 = null;
    a.$valueTable1 = null;
    a.$loadFactor = 0.0;
    a.$threshold2 = 0;
    a.$shift2 = 0;
    a.$mask3 = 0;
}
let cbgu_ObjectIntMap__init_0 = $this => {
    let var$1, var$2;
    $this.$loadFactor = 0.800000011920929;
    var$1 = cbgu_ObjectSet_tableSize(51, 0.800000011920929);
    $this.$threshold2 = var$1 * 0.800000011920929 | 0;
    var$2 = var$1 - 1 | 0;
    $this.$mask3 = var$2;
    $this.$shift2 = jl_Long_numberOfLeadingZeros(Long_fromInt(var$2));
    $this.$keyTable2 = $rt_createArray(jl_Object, var$1);
    $this.$valueTable1 = $rt_createIntArray(var$1);
},
cbgu_ObjectIntMap__init_ = () => {
    let var_0 = new cbgu_ObjectIntMap();
    cbgu_ObjectIntMap__init_0(var_0);
    return var_0;
},
cbgu_ObjectIntMap_place = ($this, $item) => {
    return Long_lo(Long_shru(Long_mul(Long_fromInt(jl_String_hashCode($item)), Long_create(2135587861, 2654435769)), $this.$shift2));
},
cbgu_ObjectIntMap_locateKey = ($this, $key) => {
    let $other, $keyTable, $i;
    if ($key === null) {
        $other = new jl_IllegalArgumentException;
        jl_RuntimeException__init_($other, $rt_s(10));
        $rt_throw($other);
    }
    $keyTable = $this.$keyTable2;
    $i = cbgu_ObjectIntMap_place($this, $key);
    while (true) {
        $other = $keyTable.data[$i];
        if ($other === null)
            return  -($i + 1 | 0) | 0;
        if (jl_String_equals($other, $key))
            break;
        $i = ($i + 1 | 0) & $this.$mask3;
    }
    return $i;
},
cbgu_ObjectIntMap_put = ($this, $key, $value) => {
    let $i, var$4, var$5, var$6, var$7, var$8, var$9;
    $i = cbgu_ObjectIntMap_locateKey($this, $key);
    if ($i >= 0) {
        $this.$valueTable1.data[$i] = $value;
        return;
    }
    $i =  -($i + 1 | 0) | 0;
    var$4 = $this.$keyTable2.data;
    var$4[$i] = $key;
    $this.$valueTable1.data[$i] = $value;
    $value = $this.$size6 + 1 | 0;
    $this.$size6 = $value;
    if ($value >= $this.$threshold2)
        a: {
            $value = var$4.length;
            $i = $value << 1;
            $this.$threshold2 = $i * $this.$loadFactor | 0;
            var$5 = $i - 1 | 0;
            $this.$mask3 = var$5;
            $this.$shift2 = jl_Long_numberOfLeadingZeros(Long_fromInt(var$5));
            var$4 = $this.$keyTable2;
            var$6 = $this.$valueTable1;
            $this.$keyTable2 = $rt_createArray(jl_Object, $i);
            $this.$valueTable1 = $rt_createIntArray($i);
            if ($this.$size6 > 0) {
                $i = 0;
                while (true) {
                    if ($i >= $value)
                        break a;
                    $key = var$4.data[$i];
                    if ($key !== null) {
                        var$5 = var$6.data[$i];
                        var$7 = $this.$keyTable2;
                        var$8 = cbgu_ObjectIntMap_place($this, $key);
                        while (true) {
                            var$9 = var$7.data;
                            if (var$9[var$8] === null)
                                break;
                            var$8 = (var$8 + 1 | 0) & $this.$mask3;
                        }
                        var$9[var$8] = $key;
                        $this.$valueTable1.data[var$8] = var$5;
                    }
                    $i = $i + 1 | 0;
                }
            }
        }
},
cbgu_ObjectIntMap_get = ($this, $key, $defaultValue) => {
    let $i;
    $i = cbgu_ObjectIntMap_locateKey($this, $key);
    if ($i >= 0)
        $defaultValue = $this.$valueTable1.data[$i];
    return $defaultValue;
},
cbgu_BufferUtils = $rt_classWithoutFields(),
cbgu_BufferUtils_unsafeBuffers = null,
cbgu_BufferUtils_allocatedUnsafe = 0,
cbgu_BufferUtils_copy = ($src, $dst, $numFloats, $offset) => {
    let $floatBuffer, var$6;
    $floatBuffer = null;
    var$6 = $dst instanceof jn_ByteBuffer;
    if (var$6)
        $floatBuffer = jn_ByteBufferJsImpl_asFloatBuffer($dst);
    else if ($dst instanceof jn_FloatBuffer)
        $floatBuffer = $dst;
    if ($floatBuffer === null) {
        $floatBuffer = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_($floatBuffer, $rt_s(450));
        $rt_throw($floatBuffer);
    }
    jn_Buffer_clear($floatBuffer);
    $dst.$position(0);
    jn_FloatBuffer_put($floatBuffer, $src, $offset, $numFloats);
    $dst.$position(0);
    if (!var$6)
        $dst.$limit($numFloats);
    else
        $dst.$limit($numFloats << 2);
},
cbgu_BufferUtils_newFloatBuffer = $numFloats => {
    let $buffer, var$3, var$4;
    if (cgxgbt_TeaTool_isProd) {
        $buffer = jn_ByteBuffer_allocateDirect($numFloats * 4 | 0);
        jn_ByteBuffer_order($buffer, jn_ByteOrder_nativeOrder());
        return jn_ByteBufferJsImpl_asFloatBuffer($buffer);
    }
    var$3 = $rt_createFloatArray($numFloats);
    var$4 = var$3.data.length;
    $buffer = jn_FloatBufferOverTypedArray__init_(0, var$4, 0, var$3.data, var$3);
    $buffer.$position0 = 0;
    $buffer.$limit0 = 0 + var$4 | 0;
    return $buffer;
},
cbgu_BufferUtils_newByteBuffer = $numBytes => {
    let $buffer;
    if (!cgxgbt_TeaTool_isProd)
        return jn_ByteBuffer_wrap($rt_createByteArray($numBytes));
    $buffer = jn_ByteBuffer_allocateDirect($numBytes);
    jn_ByteBuffer_order($buffer, jn_ByteOrder_nativeOrder());
    return $buffer;
},
cbgu_BufferUtils_newIntBuffer = $numInts => {
    let $buffer, var$3, var$4;
    if (cgxgbt_TeaTool_isProd) {
        $buffer = jn_ByteBuffer_allocateDirect($numInts * 4 | 0);
        jn_ByteBuffer_order($buffer, jn_ByteOrder_nativeOrder());
        return jn_ByteBufferJsImpl_asIntBuffer($buffer);
    }
    var$3 = $rt_createIntArray($numInts);
    var$4 = var$3.data.length;
    $buffer = jn_IntBufferOverTypedArray__init_(0, var$4, 0, var$3.data, var$3);
    $buffer.$position0 = 0;
    $buffer.$limit0 = 0 + var$4 | 0;
    return $buffer;
},
cbgu_BufferUtils_disposeUnsafeByteBuffer = $buffer => {
    let $size;
    $size = $buffer.$capacityImpl();
    if (cbgu_Array_removeValue(cbgu_BufferUtils_unsafeBuffers, $buffer, 1)) {
        cbgu_BufferUtils_allocatedUnsafe = cbgu_BufferUtils_allocatedUnsafe - $size | 0;
        return;
    }
    $buffer = new jl_IllegalArgumentException;
    jl_RuntimeException__init_($buffer, $rt_s(451));
    $rt_throw($buffer);
},
cbgu_BufferUtils_newUnsafeByteBuffer = $numBytes => {
    let $buffer;
    $buffer = cbgu_BufferUtils_newByteBuffer($numBytes);
    jn_ByteBuffer_order($buffer, jn_ByteOrder_nativeOrder());
    cbgu_BufferUtils_allocatedUnsafe = cbgu_BufferUtils_allocatedUnsafe + $numBytes | 0;
    cbgu_Array_add(cbgu_BufferUtils_unsafeBuffers, $buffer);
    return $buffer;
},
cbgu_BufferUtils__clinit_ = () => {
    cbgu_BufferUtils_unsafeBuffers = cbgu_Array__init_();
    cbgu_BufferUtils_allocatedUnsafe = 0;
},
cbgg_TextureData = $rt_classWithoutFields(0);
function cbggg_FileTextureData() {
    let a = this; jl_Object.call(a);
    a.$file0 = null;
    a.$width0 = 0;
    a.$height0 = 0;
    a.$format = null;
    a.$pixmap = null;
    a.$useMipMaps = 0;
    a.$isPrepared = 0;
}
let cbggg_FileTextureData_copyToPOT = 0,
cbggg_FileTextureData_prepare = $this => {
    let var$1;
    if ($this.$isPrepared) {
        var$1 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_(var$1, $rt_s(452));
        $rt_throw(var$1);
    }
    if ($this.$pixmap === null) {
        var$1 = cbggg_FileTextureData_ensurePot($this, cbgg_Pixmap__init_0($this.$file0));
        $this.$pixmap = var$1;
        $this.$width0 = cbgg_Pixmap_getWidth(var$1);
        $this.$height0 = cbgg_Pixmap_getHeight($this.$pixmap);
        if ($this.$format === null)
            $this.$format = cbgg_Pixmap_getFormat($this.$pixmap);
    }
    $this.$isPrepared = 1;
},
cbggg_FileTextureData_ensurePot = ($this, $pixmap) => {
    let $pixmapWidth, $pixmapHeight, $potWidth, $potHeight, $tmp_0;
    a: {
        if (cbg_Gdx_gl20 === null && cbggg_FileTextureData_copyToPOT) {
            $pixmapWidth = cbgg_Pixmap_getWidth($pixmap);
            $pixmapHeight = cbgg_Pixmap_getHeight($pixmap);
            $potWidth = cbgm_MathUtils_nextPowerOfTwo($pixmapWidth);
            $potHeight = cbgm_MathUtils_nextPowerOfTwo($pixmapHeight);
            if ($pixmapWidth != $potWidth)
                break a;
            if ($pixmapHeight != $potHeight)
                break a;
        }
        return $pixmap;
    }
    $tmp_0 = cbgg_Pixmap__init_($potWidth, $potHeight, cbgg_Pixmap_getFormat($pixmap));
    cbgg_Pixmap_drawPixmap($tmp_0, $pixmap, 0, 0, 0, 0, $pixmapWidth, $pixmapHeight);
    cbgg_Pixmap_dispose($pixmap);
    return $tmp_0;
},
cbggg_PixmapNativeInterface = $rt_classWithoutFields(0);
function cbgg_Pixmap() {
    let a = this; jl_Object.call(a);
    a.$blending = null;
    a.$filter = null;
    a.$color = 0;
    a.$nativePixmap = null;
    a.$disposed = 0;
}
let cbgg_Pixmap__init_1 = ($this, $file) => {
    let var$2, $path, var$4, var$5, $bytes, var$7, var$8, $$je;
    $this.$blending = cbgg_Pixmap$Blending_SourceOver;
    $this.$filter = cbgg_Pixmap$Filter_BiLinear;
    $this.$color = 0;
    var$2 = $file;
    $path = var$2.$file;
    if (!cgxgbt_TeaFileHandle_exists(var$2)) {
        $file = new cbgu_GdxRuntimeException;
        var$2 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$2);
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(453)), $path);
        jl_RuntimeException__init_($file, jl_AbstractStringBuilder_toString(var$2));
        $rt_throw($file);
    }
    var$4 = cgxgbtf_MemoryFileStorage_exists(cgxgbt_TeaFiles_getFileDB(var$2.$teaFiles, var$2.$type0), var$2);
    $path = var$2.$type0;
    var$5 = cbg_Files$FileType_Classpath;
    if ($path !== var$5 && !($path === cbg_Files$FileType_Internal && !var$4) && !($path === cbg_Files$FileType_Local && !var$4))
        $path = cgxgbtf_MemoryFileStorage_read(cgxgbt_TeaFiles_getFileDB(var$2.$teaFiles, $path), var$2);
    else {
        $path = cgxgbtf_MemoryFileStorage_read(cgxgbt_TeaFiles_getFileDB(var$2.$teaFiles, var$5), var$2);
        if ($path === null) {
            $file = new cbgu_GdxRuntimeException;
            $path = var$2.$file;
            var$2 = jl_String_valueOf(var$2.$type0);
            var$5 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$5);
            jl_AbstractStringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(454)), $path), $rt_s(455)), var$2), 41);
            jl_RuntimeException__init_($file, jl_AbstractStringBuilder_toString(var$5));
            $rt_throw($file);
        }
    }
    a: {
        try {
            try {
                $bytes = cbgu_StreamUtils_copyStreamToByteArray($path, cbgf_FileHandle_estimateLength($file));
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof ji_IOException) {
                    var$5 = $$je;
                } else {
                    throw $$e;
                }
            }
            $rt_throw(cbgu_GdxRuntimeException__init_0(jl_StringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append3(jl_StringBuilder__init_(), $rt_s(456)), $file)), var$5));
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            $file = $$je;

        }
        cbgu_StreamUtils_closeQuietly($path);
        $rt_throw($file);
    }
    var$7 = $bytes.data;
    cbgu_StreamUtils_closeQuietly($path);
    $file = new cbggg_Gdx2DPixmap;
    var$8 = var$7.length;
    var$2 = new cbggg_Gdx2DPixmapNative;
    var$2.$nativeData = cbggg_Gdx2DPixmapNative_loadNative$js_body$_26(otji_JS_wrap($bytes), 0, var$8);
    cbggg_Gdx2DPixmapNative_updateNativeData(var$2);
    $file.$nativePixmap0 = var$2;
    $this.$nativePixmap = $file;
},
cbgg_Pixmap__init_0 = var_0 => {
    let var_1 = new cbgg_Pixmap();
    cbgg_Pixmap__init_1(var_1, var_0);
    return var_1;
},
cbgg_Pixmap__init_2 = ($this, $width, $height, $format) => {
    let var$4, var$5, var$6;
    $this.$blending = cbgg_Pixmap$Blending_SourceOver;
    $this.$filter = cbgg_Pixmap$Filter_BiLinear;
    $this.$color = 0;
    var$4 = new cbggg_Gdx2DPixmap;
    if ($format === cbgg_Pixmap$Format_Alpha)
        var$5 = 1;
    else if ($format === cbgg_Pixmap$Format_Intensity)
        var$5 = 1;
    else if ($format === cbgg_Pixmap$Format_LuminanceAlpha)
        var$5 = 2;
    else if ($format === cbgg_Pixmap$Format_RGB565)
        var$5 = 5;
    else if ($format === cbgg_Pixmap$Format_RGBA4444)
        var$5 = 6;
    else if ($format === cbgg_Pixmap$Format_RGB888)
        var$5 = 3;
    else {
        if ($format !== cbgg_Pixmap$Format_RGBA8888) {
            var$4 = new cbgu_GdxRuntimeException;
            $format = jl_String_valueOf($format);
            var$6 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$6);
            jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(457)), $format);
            jl_RuntimeException__init_(var$4, jl_AbstractStringBuilder_toString(var$6));
            $rt_throw(var$4);
        }
        var$5 = 4;
    }
    $format = cbggg_Gdx2DPixmapNative__init_0($width, $height, var$5);
    var$4.$nativePixmap0 = $format;
    $this.$nativePixmap = var$4;
    $this.$color = 0;
    Gdx.Gdx.prototype.g2d_clear($format.$basePtr, 0);
    cbggg_Gdx2DPixmapNative_copyHeapToBuffer($format);
},
cbgg_Pixmap__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cbgg_Pixmap();
    cbgg_Pixmap__init_2(var_3, var_0, var_1, var_2);
    return var_3;
},
cbgg_Pixmap_drawPixmap = ($this, $pixmap, $x, $y, $srcx, $srcy, $srcWidth, $srcHeight) => {
    let var$8;
    var$8 = $this.$nativePixmap;
    $pixmap = $pixmap.$nativePixmap;
    cbggg_Gdx2DPixmapNative_drawPixmap(var$8.$nativePixmap0, $pixmap.$nativePixmap0.$basePtr, $srcx, $srcy, $x, $y, $srcWidth, $srcHeight);
},
cbgg_Pixmap_getWidth = $this => {
    return $this.$nativePixmap.$nativePixmap0.$width1;
},
cbgg_Pixmap_getHeight = $this => {
    return $this.$nativePixmap.$nativePixmap0.$height1;
},
cbgg_Pixmap_dispose = $this => {
    let var$1;
    if ($this.$disposed) {
        var$1 = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_(var$1, $rt_s(458));
        $rt_throw(var$1);
    }
    cbggg_Gdx2DPixmapNative_dispose($this.$nativePixmap.$nativePixmap0);
    $this.$disposed = 1;
},
cbgg_Pixmap_getGLFormat = $this => {
    return cbggg_Gdx2DPixmap_getGLInternalFormat($this.$nativePixmap);
},
cbgg_Pixmap_getGLInternalFormat = $this => {
    return cbggg_Gdx2DPixmap_getGLInternalFormat($this.$nativePixmap);
},
cbgg_Pixmap_getGLType = $this => {
    let var$1, var$2, var$3;
    a: {
        var$1 = $this.$nativePixmap.$nativePixmap0.$format0;
        switch (var$1) {
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            case 5:
                var$1 = 33635;
                break a;
            case 6:
                var$1 = 32819;
                break a;
            default:
                var$2 = new cbgu_GdxRuntimeException;
                var$3 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$3);
                jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(459)), var$1);
                jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$3));
                $rt_throw(var$2);
        }
        var$1 = 5121;
    }
    return var$1;
},
cbgg_Pixmap_getPixels = $this => {
    return $this.$nativePixmap.$nativePixmap0.$buffer4;
},
cbgg_Pixmap_getFormat = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$nativePixmap.$nativePixmap0.$format0;
    if (var$1 == 1)
        var$2 = cbgg_Pixmap$Format_Alpha;
    else if (var$1 == 2)
        var$2 = cbgg_Pixmap$Format_LuminanceAlpha;
    else if (var$1 == 5)
        var$2 = cbgg_Pixmap$Format_RGB565;
    else if (var$1 == 6)
        var$2 = cbgg_Pixmap$Format_RGBA4444;
    else if (var$1 == 3)
        var$2 = cbgg_Pixmap$Format_RGB888;
    else {
        if (var$1 != 4) {
            var$2 = new cbgu_GdxRuntimeException;
            var$3 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$3);
            jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(460)), var$1);
            jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$3));
            $rt_throw(var$2);
        }
        var$2 = cbgg_Pixmap$Format_RGBA8888;
    }
    return var$2;
},
cbgg_Pixmap_setBlending = ($this, $blending) => {
    let var$2, var$3;
    $this.$blending = $blending;
    var$2 = $this.$nativePixmap;
    var$3 = $blending !== cbgg_Pixmap$Blending_None ? 1 : 0;
    cbggg_Gdx2DPixmapNative_setBlend(var$2.$nativePixmap0, var$3);
};
function jn_Buffer() {
    let a = this; jl_Object.call(a);
    a.$position0 = 0;
    a.$limit0 = 0;
    a.$mark = 0;
}
let jn_Buffer__init_ = $this => {
    $this.$mark = (-1);
},
jn_Buffer_position = ($this, $newPosition) => {
    let var$2, var$3, var$4;
    if ($newPosition >= 0 && $newPosition <= $this.$limit0) {
        $this.$position0 = $newPosition;
        if ($newPosition < $this.$mark)
            $this.$mark = 0;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    var$3 = $this.$limit0;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(461)), $newPosition), $rt_s(462)), var$3), 93);
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$2);
},
jn_Buffer_limit = ($this, $newLimit) => {
    let var$2;
    if ($newLimit >= 0 && $newLimit <= $this.$capacityImpl()) {
        if ($this.$mark > $newLimit)
            $this.$mark = (-1);
        $this.$limit0 = $newLimit;
        if ($this.$position0 > $newLimit)
            $this.$position0 = $newLimit;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jn_Buffer_clear = $this => {
    $this.$position0 = 0;
    $this.$limit0 = $this.$capacityImpl();
    $this.$mark = (-1);
    return $this;
},
jn_Buffer_flip = $this => {
    $this.$limit0 = $this.$position0;
    $this.$position0 = 0;
    $this.$mark = (-1);
    return $this;
},
jn_Buffer_remaining = $this => {
    return $this.$limit0 - $this.$position0 | 0;
},
jn_Buffer_hasRemaining = $this => {
    return $this.$position0 >= $this.$limit0 ? 0 : 1;
},
jn_FloatBuffer = $rt_classWithoutFields(jn_Buffer),
jn_FloatBuffer_put = ($this, $src, $offset, $length) => {
    let var$4;
    if ($this.$readOnly()) {
        var$4 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    if (jn_Buffer_remaining($this) < $length) {
        var$4 = new jn_BufferOverflowException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $src.data.length) {
        $this.$putImpl($this.$position0, $src, $offset, $length);
        $this.$position0 = $this.$position0 + $length | 0;
        return $this;
    }
    var$4 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$4);
    $rt_throw(var$4);
},
jn_FloatBuffer_limit0 = ($this, $newLimit) => {
    jn_Buffer_limit($this, $newLimit);
    return $this;
},
jn_FloatBuffer_position0 = ($this, $newPosition) => {
    jn_Buffer_position($this, $newPosition);
    return $this;
},
jn_FloatBuffer_flip = $this => {
    jn_Buffer_flip($this);
    return $this;
},
jn_FloatBuffer_clear = $this => {
    jn_Buffer_clear($this);
    return $this;
},
jn_FloatBuffer_limit = ($this, var$1) => {
    jn_Buffer_limit($this, var$1);
    return $this;
},
jn_FloatBuffer_position = ($this, var$1) => {
    jn_Buffer_position($this, var$1);
    return $this;
},
jn_ShortBuffer = $rt_classWithoutFields(jn_Buffer),
jn_ShortBuffer_put = ($this, $src, $offset, $length) => {
    let var$4;
    if ($this.$readOnly()) {
        var$4 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    if (jn_Buffer_remaining($this) < $length) {
        var$4 = new jn_BufferOverflowException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $src.data.length) {
        $this.$putImpl0($this.$position0, $src, $offset, $length);
        $this.$position0 = $this.$position0 + $length | 0;
        return $this;
    }
    var$4 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$4);
    $rt_throw(var$4);
},
jn_ShortBuffer_limit0 = ($this, $newLimit) => {
    jn_Buffer_limit($this, $newLimit);
    return $this;
},
jn_ShortBuffer_position0 = ($this, $newPosition) => {
    jn_Buffer_position($this, $newPosition);
    return $this;
},
jn_ShortBuffer_flip = $this => {
    jn_Buffer_flip($this);
    return $this;
},
jn_ShortBuffer_clear = $this => {
    jn_Buffer_clear($this);
    return $this;
},
jn_ShortBuffer_limit = ($this, var$1) => {
    jn_Buffer_limit($this, var$1);
    return $this;
},
jn_ShortBuffer_position = ($this, var$1) => {
    jn_Buffer_position($this, var$1);
    return $this;
},
cgxgbt_TeaTool = $rt_classWithoutFields(),
cgxgbt_TeaTool_isProd = 0,
cgxgbt_TeaTool__clinit_ = () => {
    cgxgbt_TeaTool_isProd = 1;
},
jn_IntBuffer = $rt_classWithoutFields(jn_Buffer),
jn_IntBuffer_position = ($this, $newPosition) => {
    jn_Buffer_position($this, $newPosition);
    return $this;
},
jn_IntBuffer_clear = $this => {
    jn_Buffer_clear($this);
    return $this;
};
function jn_ByteBuffer() {
    jn_Buffer.call(this);
    this.$order0 = null;
}
let jn_ByteBuffer_allocateDirect = $capacity => {
    let $result, var$3;
    if ($capacity < 0) {
        $result = new jl_IllegalArgumentException;
        var$3 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$3);
        jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(463)), $capacity);
        jl_RuntimeException__init_($result, jl_AbstractStringBuilder_toString(var$3));
        $rt_throw($result);
    }
    $result = jn_ByteBufferJsImpl__init_(null, 0, new Int8Array($capacity), 1, 0);
    $result.$limit0 = $capacity;
    return $result;
},
jn_ByteBuffer_allocate = $capacity => {
    let $array, $result, var$4;
    if ($capacity >= 0) {
        $array = $rt_createByteArray($capacity);
        $result = jn_ByteBufferJsImpl__init_($array, 0, $array.data, 0, 0);
        $result.$limit0 = $capacity;
        return $result;
    }
    $result = new jl_IllegalArgumentException;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(463)), $capacity);
    jl_RuntimeException__init_($result, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw($result);
},
jn_ByteBuffer_wrap0 = ($array, $offset, $length) => {
    let $data, $result;
    ju_Objects_checkFromIndexSize($offset, $length, $array.data.length);
    $data = $array.data;
    $result = jn_ByteBufferJsImpl__init_($array, 0, $data, 0, 0);
    $result.$position0 = $offset;
    $result.$limit0 = $offset + $length | 0;
    return $result;
},
jn_ByteBuffer_wrap = $array => {
    return jn_ByteBuffer_wrap0($array, 0, $array.data.length);
},
jn_ByteBuffer_get = ($this, $dst, $offset, $length) => {
    let var$4, var$5, var$6;
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $dst.data.length) {
        if ($length > jn_Buffer_remaining($this)) {
            var$4 = new jn_BufferUnderflowException;
            jl_Exception__init_(var$4);
            $rt_throw(var$4);
        }
        var$5 = $this.$position0;
        var$4 = $this;
        var$6 = new Int8Array(var$4.$data0.buffer, var$4.$data0.byteOffset + var$5 | 0, $length);
        $dst.data.set(var$6, $offset);
        $this.$position0 = $this.$position0 + $length | 0;
        return $this;
    }
    var$4 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$4);
    $rt_throw(var$4);
},
jn_ByteBuffer_put = ($this, $src, $offset, $length) => {
    let var$4, var$5, var$6, var$7;
    if (!$length)
        return $this;
    var$4 = $this;
    if (var$4.$readOnly0) {
        var$5 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$5);
        $rt_throw(var$5);
    }
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $src.data.length) {
        if ($length > jn_Buffer_remaining($this)) {
            var$5 = new jn_BufferOverflowException;
            jl_Exception__init_(var$5);
            $rt_throw(var$5);
        }
        var$6 = $this.$position0;
        var$7 = new Int8Array($src.data.buffer, $offset, $length);
        var$4.$data0.set(var$7, var$6);
        $this.$position0 = $this.$position0 + $length | 0;
        return $this;
    }
    var$5 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$5);
    $rt_throw(var$5);
},
jn_ByteBuffer_array = $this => {
    let var$1, var$2;
    var$1 = $this.$array3;
    if (var$1 !== null)
        return var$1;
    var$2 = new jl_UnsupportedOperationException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jn_ByteBuffer_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6;
    var$1 = $this.$position0;
    var$2 = $this.$limit0;
    var$3 = $this.$capacityImpl();
    var$4 = $this.$mark;
    if (var$4 < 0)
        var$5 = $rt_s(464);
    else {
        var$5 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$5);
        jl_StringBuilder_append0(jl_StringBuilder_append(var$5, $rt_s(465)), var$4);
        var$5 = jl_AbstractStringBuilder_toString(var$5);
    }
    var$6 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$6);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$6, $rt_s(466)), var$1), $rt_s(467)), var$2), $rt_s(468)), var$3), $rt_s(469)), var$5), 93);
    return jl_AbstractStringBuilder_toString(var$6);
},
jn_ByteBuffer_equals = ($this, $obj) => {
    let $other, $sz, $a, $b, $i, var$7, var$8;
    if ($this === $obj)
        return 1;
    if (!($obj instanceof jn_ByteBuffer))
        return 0;
    $other = $obj;
    $sz = jn_Buffer_remaining($this);
    if ($sz != jn_Buffer_remaining($other))
        return 0;
    $a = $this.$position0;
    $b = $other.$position0;
    $i = 0;
    $other = $other;
    while ($i < $sz) {
        var$7 = $a + 1 | 0;
        $a = jn_ByteBufferJsImpl_get($this, $a);
        var$8 = $b + 1 | 0;
        if ($a != jn_ByteBufferJsImpl_get($other, $b))
            return 0;
        $i = $i + 1 | 0;
        $a = var$7;
        $b = var$8;
    }
    return 1;
},
jn_ByteBuffer_order = ($this, $bo) => {
    $this.$order0 = $bo;
    return $this;
},
jn_ByteBuffer_limit = ($this, var$1) => {
    jn_Buffer_limit($this, var$1);
    return $this;
},
jn_ByteBuffer_position = ($this, var$1) => {
    jn_Buffer_position($this, var$1);
    return $this;
};
function jn_ByteOrder() {
    jl_Object.call(this);
    this.$name3 = null;
}
let jn_ByteOrder_BIG_ENDIAN = null,
jn_ByteOrder_LITTLE_ENDIAN = null,
jn_ByteOrder_nativeOrder0 = null,
jn_ByteOrder__init_0 = ($this, $name) => {
    $this.$name3 = $name;
},
jn_ByteOrder__init_ = var_0 => {
    let var_1 = new jn_ByteOrder();
    jn_ByteOrder__init_0(var_1, var_0);
    return var_1;
},
jn_ByteOrder_nativeOrder = () => {
    let $buffer;
    if (jn_ByteOrder_nativeOrder0 === null) {
        $buffer = new ArrayBuffer(2);
        (new Int16Array($buffer))[0] = 1;
        jn_ByteOrder_nativeOrder0 = (new Int8Array($buffer))[0] ? jn_ByteOrder_LITTLE_ENDIAN : jn_ByteOrder_BIG_ENDIAN;
    }
    return jn_ByteOrder_nativeOrder0;
},
jn_ByteOrder__clinit_ = () => {
    jn_ByteOrder_BIG_ENDIAN = jn_ByteOrder__init_($rt_s(470));
    jn_ByteOrder_LITTLE_ENDIAN = jn_ByteOrder__init_($rt_s(471));
},
cbgg_Pixmap$Blending = $rt_classWithoutFields(jl_Enum),
cbgg_Pixmap$Blending_None = null,
cbgg_Pixmap$Blending_SourceOver = null,
cbgg_Pixmap$Blending_$VALUES = null,
cbgg_Pixmap$Blending__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbgg_Pixmap$Blending;
    jl_Enum__init_(var$1, $rt_s(472), 0);
    cbgg_Pixmap$Blending_None = var$1;
    var$1 = new cbgg_Pixmap$Blending;
    jl_Enum__init_(var$1, $rt_s(473), 1);
    cbgg_Pixmap$Blending_SourceOver = var$1;
    var$2 = $rt_createArray(cbgg_Pixmap$Blending, 2);
    var$3 = var$2.data;
    var$3[0] = cbgg_Pixmap$Blending_None;
    var$3[1] = var$1;
    cbgg_Pixmap$Blending_$VALUES = var$2;
},
cbgg_Pixmap$Filter = $rt_classWithoutFields(jl_Enum),
cbgg_Pixmap$Filter_NearestNeighbour = null,
cbgg_Pixmap$Filter_BiLinear = null,
cbgg_Pixmap$Filter_$VALUES = null,
cbgg_Pixmap$Filter__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbgg_Pixmap$Filter;
    jl_Enum__init_(var$1, $rt_s(474), 0);
    cbgg_Pixmap$Filter_NearestNeighbour = var$1;
    var$1 = new cbgg_Pixmap$Filter;
    jl_Enum__init_(var$1, $rt_s(475), 1);
    cbgg_Pixmap$Filter_BiLinear = var$1;
    var$2 = $rt_createArray(cbgg_Pixmap$Filter, 2);
    var$3 = var$2.data;
    var$3[0] = cbgg_Pixmap$Filter_NearestNeighbour;
    var$3[1] = var$1;
    cbgg_Pixmap$Filter_$VALUES = var$2;
};
function cbggg_Gdx2DPixmap() {
    jl_Object.call(this);
    this.$nativePixmap0 = null;
}
let cbggg_Gdx2DPixmap_getGLInternalFormat = $this => {
    let var$1, var$2, var$3;
    a: {
        var$1 = $this.$nativePixmap0.$format0;
        switch (var$1) {
            case 1:
                break;
            case 2:
                var$1 = 6410;
                break a;
            case 3:
            case 5:
                var$1 = 6407;
                break a;
            case 4:
            case 6:
                var$1 = 6408;
                break a;
            default:
                var$2 = new cbgu_GdxRuntimeException;
                var$3 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$3);
                jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(459)), var$1);
                jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$3));
                $rt_throw(var$2);
        }
        var$1 = 6406;
    }
    return var$1;
},
jn_ArrayBufferViewProvider = $rt_classWithoutFields(0);
function jn_ByteBufferJsImpl() {
    let a = this; jn_ByteBuffer.call(a);
    a.$array3 = null;
    a.$arrayOffset = 0;
    a.$data0 = null;
    a.$direct = 0;
    a.$readOnly0 = 0;
}
let jn_ByteBufferJsImpl__init_0 = ($this, $array, $arrayOffset, $data, $direct, $readOnly) => {
    jn_Buffer__init_($this);
    $this.$order0 = jn_ByteOrder_BIG_ENDIAN;
    $this.$array3 = $array;
    $this.$arrayOffset = $arrayOffset;
    $this.$data0 = $data;
    $this.$direct = $direct;
    $this.$readOnly0 = $readOnly;
},
jn_ByteBufferJsImpl__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_ByteBufferJsImpl();
    jn_ByteBufferJsImpl__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_ByteBufferJsImpl_capacityImpl = $this => {
    return $this.$data0.length;
},
jn_ByteBufferJsImpl_get = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$limit0)
        return $this.$data0[$index];
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jn_ByteBufferJsImpl_asShortBuffer = $this => {
    let $sz, $slice, var$3, var$4, var$5;
    $sz = jn_Buffer_remaining($this) / 2 | 0;
    if ($this.$order0 === jn_ByteOrder_nativeOrder()) {
        $slice = new Int16Array($this.$data0.buffer, $this.$data0.byteOffset + $this.$position0 | 0, $sz);
        return jn_ShortBufferOverTypedArray__init_(0, $sz, $this.$readOnly0, $slice, null);
    }
    $slice = new DataView($this.$data0.buffer, $this.$data0.byteOffset + $this.$position0 | 0, $sz * 2 | 0);
    var$3 = new jn_ShortBufferOverDataView;
    var$4 = $this.$readOnly0;
    var$5 = $this.$order0 !== jn_ByteOrder_LITTLE_ENDIAN ? 0 : 1;
    jn_ShortBufferImpl__init_(var$3, 0, $sz);
    var$3.$readOnly4 = var$4;
    var$3.$data4 = $slice;
    var$3.$littleEndian1 = var$5;
    return var$3;
},
jn_ByteBufferJsImpl_asIntBuffer = $this => {
    let $sz, $slice, var$3, var$4, var$5;
    $sz = jn_Buffer_remaining($this) / 4 | 0;
    if ($this.$order0 === jn_ByteOrder_nativeOrder()) {
        $slice = new Int32Array($this.$data0.buffer, $this.$data0.byteOffset + $this.$position0 | 0, $sz);
        return jn_IntBufferOverTypedArray__init_(0, $sz, $this.$readOnly0, $slice, null);
    }
    $slice = new DataView($this.$data0.buffer, $this.$data0.byteOffset + $this.$position0 | 0, $sz * 4 | 0);
    var$3 = new jn_IntBufferOverDataView;
    var$4 = $this.$readOnly0;
    var$5 = $this.$order0 !== jn_ByteOrder_LITTLE_ENDIAN ? 0 : 1;
    jn_IntBufferImpl__init_(var$3, 0, $sz);
    var$3.$readOnly3 = var$4;
    var$3.$data8 = $slice;
    var$3.$littleEndian0 = var$5;
    return var$3;
},
jn_ByteBufferJsImpl_asFloatBuffer = $this => {
    let $sz, $slice, var$3, var$4, var$5;
    $sz = jn_Buffer_remaining($this) / 4 | 0;
    if ($this.$order0 === jn_ByteOrder_nativeOrder()) {
        $slice = new Float32Array($this.$data0.buffer, $this.$data0.byteOffset + $this.$position0 | 0, $sz);
        return jn_FloatBufferOverTypedArray__init_(0, $sz, $this.$readOnly0, $slice, null);
    }
    $slice = new DataView($this.$data0.buffer, $this.$data0.byteOffset + $this.$position0 | 0, $sz * 4 | 0);
    var$3 = new jn_FloatBufferOverDataView;
    var$4 = $this.$readOnly0;
    var$5 = $this.$order0 !== jn_ByteOrder_LITTLE_ENDIAN ? 0 : 1;
    jn_FloatBufferImpl__init_(var$3, 0, $sz);
    var$3.$readOnly5 = var$4;
    var$3.$data3 = $slice;
    var$3.$littleEndian = var$5;
    return var$3;
},
jn_ByteBufferJsImpl_getArrayBufferView = $this => {
    return $this.$data0;
},
cbgf_FileHandle = $rt_classWithoutFields(),
cbgf_FileHandle_estimateLength = $this => {
    let var$1, $length;
    var$1 = $this;
    $length = Long_lo((cgxgbtf_MemoryFileStorage_length(cgxgbt_TeaFiles_getFileDB(var$1.$teaFiles, var$1.$type0), var$1)));
    if (!$length)
        $length = 512;
    return $length;
};
function cbggg_Gdx2DPixmapNative() {
    let a = this; jl_Object.call(a);
    a.$basePtr = 0;
    a.$width1 = 0;
    a.$height1 = 0;
    a.$format0 = 0;
    a.$heapStartIndex = 0;
    a.$heapEndIndex = 0;
    a.$nativeData = null;
    a.$buffer4 = null;
}
let cbggg_Gdx2DPixmapNative__init_ = ($this, $width, $height, $format) => {
    $this.$nativeData = cbggg_Gdx2DPixmapNative_newPixmapNative$js_body$_27($width, $height, $format);
    cbggg_Gdx2DPixmapNative_updateNativeData($this);
},
cbggg_Gdx2DPixmapNative__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new cbggg_Gdx2DPixmapNative();
    cbggg_Gdx2DPixmapNative__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
cbggg_Gdx2DPixmapNative_updateNativeData = $this => {
    $this.$basePtr = $this.$nativeData[0];
    $this.$width1 = $this.$nativeData[1];
    $this.$height1 = $this.$nativeData[2];
    $this.$format0 = $this.$nativeData[3];
    $this.$heapStartIndex = $this.$nativeData[4];
    $this.$heapEndIndex = $this.$nativeData[5];
    cbggg_Gdx2DPixmapNative_copyHeapToBuffer($this);
},
cbggg_Gdx2DPixmapNative_copyHeapToBuffer = $this => {
    let var$1, $heapData;
    var$1 = $this.$heapStartIndex;
    $heapData = !var$1 && !$this.$heapEndIndex ? null : cbggg_Gdx2DPixmapNative_getHeapDataNative$js_body$_25(!!0, var$1, $this.$heapEndIndex);
    if ($this.$buffer4 === null)
        $this.$buffer4 = jn_ByteBuffer_allocateDirect($heapData.length);
    (jn_JSBufferHelper_toInt8Array(jn_JSBufferHelper_getArrayBufferView($this.$buffer4))).set($heapData);
},
cbggg_Gdx2DPixmapNative_dispose = $this => {
    let var$1;
    Gdx.Gdx.prototype.g2d_free($this.$basePtr);
    var$1 = $this.$buffer4;
    if (var$1 !== null) {
        otcin_Buffers_free(var$1);
        $this.$buffer4 = null;
    }
    $this.$nativeData = null;
},
cbggg_Gdx2DPixmapNative_drawPixmap = ($this, $basePtr, $srcX, $srcY, $dstX, $dstY, $width, $height) => {
    let var$8;
    var$8 = $this.$basePtr;
    Gdx.Gdx.prototype.g2d_draw_pixmap($basePtr, var$8, $srcX, $srcY, $width, $height, $dstX, $dstY, $width, $height);
    cbggg_Gdx2DPixmapNative_copyHeapToBuffer($this);
},
cbggg_Gdx2DPixmapNative_setBlend = ($this, $blend) => {
    Gdx.Gdx.prototype.g2d_set_blend($this.$basePtr, $blend);
    cbggg_Gdx2DPixmapNative_copyHeapToBuffer($this);
},
cbggg_Gdx2DPixmapNative_getHeapDataNative$js_body$_25 = (var$1, var$2, var$3) => {
    var heapArray = Gdx.HEAP8.subarray(var$2, var$3);
    if (var$1) {
        var newArray = new Int8Array(heapArray);
        return newArray;
    }
    return heapArray;
},
cbggg_Gdx2DPixmapNative_loadNative$js_body$_26 = (var$1, var$2, var$3) => {
    var cBufferSize = var$1.length * Uint8Array.BYTES_PER_ELEMENT;
    var cBuffer = Gdx._malloc(cBufferSize);
    Gdx.writeArrayToMemory(var$1, cBuffer);
    var pixmap = Gdx.Gdx.prototype.g2d_load(cBuffer, var$2, var$3);
    Gdx._free(cBuffer);
    var pixels = Gdx.Gdx.prototype.g2d_get_pixels(pixmap);
    var pixmapAddr = Gdx.getPointer(pixmap);
    var format = pixmap.get_format();
    var width = pixmap.get_width();
    var height = pixmap.get_height();
    var bytesPerPixel = Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);
    var bytesSize = width * height * bytesPerPixel;
    var startIndex = pixels;
    var endIndex = startIndex + bytesSize;
    var nativeData = new Int32Array(6);
    nativeData[0] = pixmapAddr;
    nativeData[1] = width;
    nativeData[2] = height;
    nativeData[3] = format;
    nativeData[4] = startIndex;
    nativeData[5] = endIndex;
    return nativeData;
},
cbggg_Gdx2DPixmapNative_newPixmapNative$js_body$_27 = (var$1, var$2, var$3) => {
    var pixmap = Gdx.Gdx.prototype.g2d_new(var$1, var$2, var$3);
    var pixels = Gdx.Gdx.prototype.g2d_get_pixels(pixmap);
    var pixmapAddr = Gdx.getPointer(pixmap);
    var var$3 = pixmap.get_format();
    var var$1 = pixmap.get_width();
    var var$2 = pixmap.get_height();
    var bytesPerPixel = Gdx.Gdx.prototype.g2d_bytes_per_pixel(var$3);
    var bytesSize = var$1 * var$2 * bytesPerPixel;
    var startIndex = pixels;
    var endIndex = startIndex + bytesSize;
    var nativeData = new Int32Array(6);
    nativeData[0] = pixmapAddr;
    nativeData[1] = var$1;
    nativeData[2] = var$2;
    nativeData[3] = var$3;
    nativeData[4] = startIndex;
    nativeData[5] = endIndex;
    return nativeData;
};
function cbgg_Texture$TextureFilter() {
    jl_Enum.call(this);
    this.$glEnum = 0;
}
let cbgg_Texture$TextureFilter_Nearest = null,
cbgg_Texture$TextureFilter_Linear = null,
cbgg_Texture$TextureFilter_MipMap = null,
cbgg_Texture$TextureFilter_MipMapNearestNearest = null,
cbgg_Texture$TextureFilter_MipMapLinearNearest = null,
cbgg_Texture$TextureFilter_MipMapNearestLinear = null,
cbgg_Texture$TextureFilter_MipMapLinearLinear = null,
cbgg_Texture$TextureFilter_$VALUES = null,
cbgg_Texture$TextureFilter__init_0 = ($this, var$1, var$2, var$3) => {
    jl_Enum__init_($this, var$1, var$2);
    $this.$glEnum = var$3;
},
cbgg_Texture$TextureFilter__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cbgg_Texture$TextureFilter();
    cbgg_Texture$TextureFilter__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cbgg_Texture$TextureFilter_getGLEnum = $this => {
    return $this.$glEnum;
},
cbgg_Texture$TextureFilter__clinit_ = () => {
    let var$1, var$2, var$3;
    cbgg_Texture$TextureFilter_Nearest = cbgg_Texture$TextureFilter__init_($rt_s(476), 0, 9728);
    cbgg_Texture$TextureFilter_Linear = cbgg_Texture$TextureFilter__init_($rt_s(477), 1, 9729);
    cbgg_Texture$TextureFilter_MipMap = cbgg_Texture$TextureFilter__init_($rt_s(478), 2, 9987);
    cbgg_Texture$TextureFilter_MipMapNearestNearest = cbgg_Texture$TextureFilter__init_($rt_s(479), 3, 9984);
    cbgg_Texture$TextureFilter_MipMapLinearNearest = cbgg_Texture$TextureFilter__init_($rt_s(480), 4, 9985);
    cbgg_Texture$TextureFilter_MipMapNearestLinear = cbgg_Texture$TextureFilter__init_($rt_s(481), 5, 9986);
    var$1 = cbgg_Texture$TextureFilter__init_($rt_s(482), 6, 9987);
    cbgg_Texture$TextureFilter_MipMapLinearLinear = var$1;
    var$2 = $rt_createArray(cbgg_Texture$TextureFilter, 7);
    var$3 = var$2.data;
    var$3[0] = cbgg_Texture$TextureFilter_Nearest;
    var$3[1] = cbgg_Texture$TextureFilter_Linear;
    var$3[2] = cbgg_Texture$TextureFilter_MipMap;
    var$3[3] = cbgg_Texture$TextureFilter_MipMapNearestNearest;
    var$3[4] = cbgg_Texture$TextureFilter_MipMapLinearNearest;
    var$3[5] = cbgg_Texture$TextureFilter_MipMapNearestLinear;
    var$3[6] = var$1;
    cbgg_Texture$TextureFilter_$VALUES = var$2;
};
function cbgg_Texture$TextureWrap() {
    jl_Enum.call(this);
    this.$glEnum0 = 0;
}
let cbgg_Texture$TextureWrap_MirroredRepeat = null,
cbgg_Texture$TextureWrap_ClampToEdge = null,
cbgg_Texture$TextureWrap_Repeat = null,
cbgg_Texture$TextureWrap_$VALUES = null,
cbgg_Texture$TextureWrap__init_0 = ($this, var$1, var$2, $glEnum) => {
    jl_Enum__init_($this, var$1, var$2);
    $this.$glEnum0 = $glEnum;
},
cbgg_Texture$TextureWrap__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cbgg_Texture$TextureWrap();
    cbgg_Texture$TextureWrap__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cbgg_Texture$TextureWrap_getGLEnum = $this => {
    return $this.$glEnum0;
},
cbgg_Texture$TextureWrap__clinit_ = () => {
    let var$1, var$2, var$3;
    cbgg_Texture$TextureWrap_MirroredRepeat = cbgg_Texture$TextureWrap__init_($rt_s(483), 0, 33648);
    cbgg_Texture$TextureWrap_ClampToEdge = cbgg_Texture$TextureWrap__init_($rt_s(484), 1, 33071);
    var$1 = cbgg_Texture$TextureWrap__init_($rt_s(485), 2, 10497);
    cbgg_Texture$TextureWrap_Repeat = var$1;
    var$2 = $rt_createArray(cbgg_Texture$TextureWrap, 3);
    var$3 = var$2.data;
    var$3[0] = cbgg_Texture$TextureWrap_MirroredRepeat;
    var$3[1] = cbgg_Texture$TextureWrap_ClampToEdge;
    var$3[2] = var$1;
    cbgg_Texture$TextureWrap_$VALUES = var$2;
},
jn_IntBufferImpl = $rt_classWithoutFields(jn_IntBuffer),
jn_IntBufferImpl__init_ = ($this, $position, $limit) => {
    jn_Buffer__init_($this);
    $this.$position0 = $position;
    $this.$limit0 = $limit;
},
jn_IntBufferImpl_get0 = $this => {
    let var$1, var$2;
    var$1 = $this.$position0;
    if (var$1 < $this.$limit0) {
        $this.$position0 = var$1 + 1 | 0;
        return $this.$getElement(var$1);
    }
    var$2 = new jn_BufferUnderflowException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jn_IntBufferImpl_put0 = ($this, $b) => {
    let var$2, var$3;
    if ($this.$readOnly()) {
        var$2 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    var$3 = $this.$position0;
    if (var$3 < $this.$limit0) {
        $this.$position0 = var$3 + 1 | 0;
        $this.$putElement(var$3, $b);
        return $this;
    }
    var$2 = new jn_BufferOverflowException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jn_IntBufferImpl_get = ($this, $index) => {
    let var$2, var$3, var$4;
    if ($index >= 0 && $index < $this.$limit0)
        return $this.$getElement($index);
    var$2 = new jl_IndexOutOfBoundsException;
    var$3 = $this.$limit0;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(486)), $index), $rt_s(462)), var$3), 41);
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$2);
},
jn_IntBufferImpl_put = ($this, $index, $b) => {
    let var$3, var$4;
    if ($this.$readOnly()) {
        var$3 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    if ($index >= 0 && $index < $this.$limit0) {
        $this.$putElement($index, $b);
        return $this;
    }
    var$3 = new jl_IndexOutOfBoundsException;
    $b = $this.$limit0;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(486)), $index), $rt_s(462)), $b), 41);
    jl_RuntimeException__init_(var$3, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$3);
},
jn_IntBufferImpl_isReadOnly = $this => {
    return $this.$readOnly();
};
function jn_IntBufferOverTypedArray() {
    let a = this; jn_IntBufferImpl.call(a);
    a.$readOnly7 = 0;
    a.$data6 = null;
    a.$array8 = null;
}
let jn_IntBufferOverTypedArray__init_0 = ($this, $position, $limit, $readOnly, $data, $array) => {
    jn_IntBufferImpl__init_($this, $position, $limit);
    $this.$readOnly7 = $readOnly;
    $this.$data6 = $data;
    $this.$array8 = $array;
},
jn_IntBufferOverTypedArray__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_IntBufferOverTypedArray();
    jn_IntBufferOverTypedArray__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_IntBufferOverTypedArray_readOnly = $this => {
    return $this.$readOnly7;
},
jn_IntBufferOverTypedArray_getElement = ($this, $index) => {
    return $this.$data6[$index];
},
jn_IntBufferOverTypedArray_putElement = ($this, $index, $value) => {
    $this.$data6[$index] = $value;
},
jn_IntBufferOverTypedArray_capacityImpl = $this => {
    return $this.$data6.length;
},
otjt_Int32Array = $rt_classWithoutFields(otjt_TypedArray),
jn_FloatBufferImpl = $rt_classWithoutFields(jn_FloatBuffer),
jn_FloatBufferImpl__init_ = ($this, $position, $limit) => {
    jn_Buffer__init_($this);
    $this.$position0 = $position;
    $this.$limit0 = $limit;
},
jn_FloatBufferImpl_get = ($this, $index) => {
    let var$2, var$3, var$4;
    if ($index >= 0 && $index < $this.$limit0)
        return $this.$getElement0($index);
    var$2 = new jl_IndexOutOfBoundsException;
    var$3 = $this.$limit0;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(486)), $index), $rt_s(462)), var$3), 41);
    jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$2);
},
jn_FloatBufferImpl_put = ($this, $index, $b) => {
    let var$3, var$4, var$5;
    if ($this.$readOnly()) {
        var$3 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    if ($index >= 0 && $index < $this.$limit0) {
        $this.$putElement0($index, $b);
        return $this;
    }
    var$3 = new jl_IndexOutOfBoundsException;
    var$4 = $this.$limit0;
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$5, $rt_s(486)), $index), $rt_s(462)), var$4), 41);
    jl_RuntimeException__init_(var$3, jl_AbstractStringBuilder_toString(var$5));
    $rt_throw(var$3);
},
jn_FloatBufferImpl_isReadOnly = $this => {
    return $this.$readOnly();
};
function jn_FloatBufferOverTypedArray() {
    let a = this; jn_FloatBufferImpl.call(a);
    a.$readOnly6 = 0;
    a.$data2 = null;
    a.$array6 = null;
}
let jn_FloatBufferOverTypedArray__init_0 = ($this, $position, $limit, $readOnly, $data, $array) => {
    jn_FloatBufferImpl__init_($this, $position, $limit);
    $this.$readOnly6 = $readOnly;
    $this.$data2 = $data;
    $this.$array6 = $array;
},
jn_FloatBufferOverTypedArray__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_FloatBufferOverTypedArray();
    jn_FloatBufferOverTypedArray__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_FloatBufferOverTypedArray_readOnly = $this => {
    return $this.$readOnly6;
},
jn_FloatBufferOverTypedArray_getElement = ($this, $index) => {
    return $this.$data2[$index];
},
jn_FloatBufferOverTypedArray_putElement = ($this, $index, $value) => {
    $this.$data2[$index] = $value;
},
jn_FloatBufferOverTypedArray_capacityImpl = $this => {
    return $this.$data2.length;
},
jn_FloatBufferOverTypedArray_putImpl = ($this, $index, $src, $offset, $length) => {
    let $slice;
    $slice = $src.data.buffer;
    $offset = $offset * 4 | 0;
    $slice = new Float32Array($slice, $offset, $length);
    $this.$data2.set($slice, $index);
},
jn_FloatBufferOverTypedArray_getArrayBufferView = $this => {
    return $this.$data2;
},
otjt_Float32Array = $rt_classWithoutFields(otjt_TypedArray),
cbgg_Pixmap$Format = $rt_classWithoutFields(jl_Enum),
cbgg_Pixmap$Format_Alpha = null,
cbgg_Pixmap$Format_Intensity = null,
cbgg_Pixmap$Format_LuminanceAlpha = null,
cbgg_Pixmap$Format_RGB565 = null,
cbgg_Pixmap$Format_RGBA4444 = null,
cbgg_Pixmap$Format_RGB888 = null,
cbgg_Pixmap$Format_RGBA8888 = null,
cbgg_Pixmap$Format_$VALUES = null,
cbgg_Pixmap$Format__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(179), 0);
    cbgg_Pixmap$Format_Alpha = var$1;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(487), 1);
    cbgg_Pixmap$Format_Intensity = var$1;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(488), 2);
    cbgg_Pixmap$Format_LuminanceAlpha = var$1;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(489), 3);
    cbgg_Pixmap$Format_RGB565 = var$1;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(490), 4);
    cbgg_Pixmap$Format_RGBA4444 = var$1;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(491), 5);
    cbgg_Pixmap$Format_RGB888 = var$1;
    var$1 = new cbgg_Pixmap$Format;
    jl_Enum__init_(var$1, $rt_s(492), 6);
    cbgg_Pixmap$Format_RGBA8888 = var$1;
    var$2 = $rt_createArray(cbgg_Pixmap$Format, 7);
    var$3 = var$2.data;
    var$3[0] = cbgg_Pixmap$Format_Alpha;
    var$3[1] = cbgg_Pixmap$Format_Intensity;
    var$3[2] = cbgg_Pixmap$Format_LuminanceAlpha;
    var$3[3] = cbgg_Pixmap$Format_RGB565;
    var$3[4] = cbgg_Pixmap$Format_RGBA4444;
    var$3[5] = cbgg_Pixmap$Format_RGB888;
    var$3[6] = var$1;
    cbgg_Pixmap$Format_$VALUES = var$2;
},
jn_ShortBufferImpl = $rt_classWithoutFields(jn_ShortBuffer),
jn_ShortBufferImpl__init_ = ($this, $position, $limit) => {
    jn_Buffer__init_($this);
    $this.$position0 = $position;
    $this.$limit0 = $limit;
},
jn_ShortBufferImpl_isReadOnly = $this => {
    return $this.$readOnly();
};
function jn_ShortBufferOverTypedArray() {
    let a = this; jn_ShortBufferImpl.call(a);
    a.$readOnly2 = 0;
    a.$data7 = null;
    a.$array7 = null;
}
let jn_ShortBufferOverTypedArray__init_0 = ($this, $position, $limit, $readOnly, $data, $array) => {
    jn_ShortBufferImpl__init_($this, $position, $limit);
    $this.$readOnly2 = $readOnly;
    $this.$data7 = $data;
    $this.$array7 = $array;
},
jn_ShortBufferOverTypedArray__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_ShortBufferOverTypedArray();
    jn_ShortBufferOverTypedArray__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_ShortBufferOverTypedArray_readOnly = $this => {
    return $this.$readOnly2;
},
jn_ShortBufferOverTypedArray_capacityImpl = $this => {
    return $this.$data7.length;
},
jn_ShortBufferOverTypedArray_putImpl = ($this, $index, $src, $offset, $length) => {
    let $slice;
    $slice = $src.data.buffer;
    $offset = $offset * 2 | 0;
    $slice = new Int16Array($slice, $offset, $length);
    $this.$data7.set($slice, $index);
},
jn_ShortBufferOverTypedArray_getArrayBufferView = $this => {
    return $this.$data7;
},
otjt_Int16Array = $rt_classWithoutFields(otjt_TypedArray),
jn_JSBufferHelper = $rt_classWithoutFields(),
jn_JSBufferHelper_getArrayBufferView = $buffer => {
    let $provider;
    if ($rt_isInstance($buffer, jn_ArrayBufferViewProvider))
        return $buffer.$getArrayBufferView0();
    $provider = new jl_IllegalArgumentException;
    jl_RuntimeException__init_($provider, $rt_s(493));
    $rt_throw($provider);
},
jn_JSBufferHelper_toInt8Array = $view => {
    return new Int8Array($view.buffer, $view.byteOffset, $view.byteLength);
};
function jn_IntBufferOverDataView() {
    let a = this; jn_IntBufferImpl.call(a);
    a.$readOnly3 = 0;
    a.$data8 = null;
    a.$littleEndian0 = 0;
}
let jn_IntBufferOverDataView_readOnly = $this => {
    return $this.$readOnly3;
},
jn_IntBufferOverDataView_getElement = ($this, $index) => {
    return $this.$data8.getInt32($index * 4 | 0, !!$this.$littleEndian0);
},
jn_IntBufferOverDataView_putElement = ($this, $index, $value) => {
    let var$3, var$4;
    var$3 = $this.$data8;
    $index = $index * 4 | 0;
    var$4 = $this.$littleEndian0;
    var$3.setInt32($index, $value, !!var$4);
},
jn_IntBufferOverDataView_capacityImpl = $this => {
    return $this.$data8.byteLength / 4 | 0;
};
function jn_FloatBufferOverDataView() {
    let a = this; jn_FloatBufferImpl.call(a);
    a.$readOnly5 = 0;
    a.$data3 = null;
    a.$littleEndian = 0;
}
let jn_FloatBufferOverDataView_readOnly = $this => {
    return $this.$readOnly5;
},
jn_FloatBufferOverDataView_getElement = ($this, $index) => {
    return $this.$data3.getFloat32($index * 4 | 0, !!$this.$littleEndian);
},
jn_FloatBufferOverDataView_putElement = ($this, $index, $value) => {
    let var$3, var$4;
    var$3 = $this.$data3;
    $index = $index * 4 | 0;
    var$4 = $this.$littleEndian;
    var$3.setFloat32($index, $value, !!var$4);
},
jn_FloatBufferOverDataView_putImpl = ($this, $index, $src, $offset, $length) => {
    let var$5, var$6, var$7, var$8, var$9;
    $index = $index * 4 | 0;
    while (true) {
        var$5 = $length + (-1) | 0;
        if ($length <= 0)
            break;
        var$6 = $src.data;
        var$7 = $this.$data3;
        var$8 = $offset + 1 | 0;
        var$9 = var$6[$offset];
        $offset = $this.$littleEndian;
        var$7.setFloat32($index, var$9, !!$offset);
        $index = $index + 4 | 0;
        $length = var$5;
        $offset = var$8;
    }
},
jn_FloatBufferOverDataView_capacityImpl = $this => {
    return $this.$data3.byteLength / 4 | 0;
},
jn_FloatBufferOverDataView_getArrayBufferView = $this => {
    return $this.$data3;
};
function jn_ShortBufferOverDataView() {
    let a = this; jn_ShortBufferImpl.call(a);
    a.$readOnly4 = 0;
    a.$data4 = null;
    a.$littleEndian1 = 0;
}
let jn_ShortBufferOverDataView_readOnly = $this => {
    return $this.$readOnly4;
},
jn_ShortBufferOverDataView_putImpl = ($this, $index, $src, $offset, $length) => {
    let var$5, var$6, var$7, var$8;
    $index = $index * 2 | 0;
    while (true) {
        var$5 = $length + (-1) | 0;
        if ($length <= 0)
            break;
        var$6 = $src.data;
        var$7 = $this.$data4;
        var$8 = $offset + 1 | 0;
        $offset = var$6[$offset];
        $length = $this.$littleEndian1;
        var$7.setInt16($index, $offset, !!$length);
        $index = $index + 2 | 0;
        $length = var$5;
        $offset = var$8;
    }
},
jn_ShortBufferOverDataView_capacityImpl = $this => {
    return $this.$data4.byteLength / 2 | 0;
},
jn_ShortBufferOverDataView_getArrayBufferView = $this => {
    return $this.$data4;
},
jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException),
jn_ReadOnlyBufferException = $rt_classWithoutFields(jl_UnsupportedOperationException),
jn_BufferUnderflowException = $rt_classWithoutFields(jl_RuntimeException);
function cgxgbta_AssetDownloadImpl$1() {
    let a = this; jl_Object.call(a);
    a.$val$listener = null;
    a.$this$06 = null;
}
let cgxgbta_AssetDownloadImpl$1_onFailure = ($this, $url) => {
    let var$2, var$3;
    if ($this.$this$06.$showLogs) {
        var$2 = jl_System_err();
        var$3 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$3);
        jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(494)), $url);
        $url = jl_AbstractStringBuilder_toString(var$3);
        otcic_JsConsolePrintStream_println(var$2, $url);
    }
},
cgxgbta_AssetDownloadImpl$1_onSuccess = ($this, var$1, var$2) => {
    let var$3, var$4;
    var$2 = var$2;
    if ($this.$this$06.$showLogs) {
        var$3 = jl_System_out();
        var$4 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$4);
        jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(495)), var$1);
        var$4 = jl_AbstractStringBuilder_toString(var$4);
        otcic_JsConsolePrintStream_println(var$3, var$4);
    }
    $this.$val$listener.$onSuccess(var$1, var$2);
},
cgxgbta_AssetDownloadImpl$3 = $rt_classWithoutFields(),
cgxgbta_AssetDownloadImpl$3_$SwitchMap$com$github$xpenatan$gdx$backends$teavm$assetloader$AssetType = null,
cgxgbta_AssetDownloadImpl$3_$callClinit = () => {
    cgxgbta_AssetDownloadImpl$3_$callClinit = $rt_eraseClinit(cgxgbta_AssetDownloadImpl$3);
    cgxgbta_AssetDownloadImpl$3__clinit_();
},
cgxgbta_AssetDownloadImpl$3__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createIntArray((cgxgbta_AssetType_$VALUES.$clone0()).data.length);
    var$2 = var$1.data;
    cgxgbta_AssetDownloadImpl$3_$SwitchMap$com$github$xpenatan$gdx$backends$teavm$assetloader$AssetType = var$1;
    var$2[cgxgbta_AssetType_Binary.$ordinal0] = 1;
    var$2[cgxgbta_AssetType_Directory.$ordinal0] = 2;
};
function cgxgbt_TeaFileHandle() {
    let a = this; cbgf_FileHandle.call(a);
    a.$file = null;
    a.$type0 = null;
    a.$teaFiles = null;
}
let cgxgbt_TeaFileHandle__init_0 = ($this, $teaFiles, $fileName, $type) => {
    if ($type !== cbg_Files$FileType_Internal && $type !== cbg_Files$FileType_Classpath && $type !== cbg_Files$FileType_Local) {
        $teaFiles = new cbgu_GdxRuntimeException;
        $fileName = jl_String_valueOf($type);
        $type = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($type);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append($type, $rt_s(496)), $fileName), $rt_s(497));
        jl_RuntimeException__init_($teaFiles, jl_AbstractStringBuilder_toString($type));
        $rt_throw($teaFiles);
    }
    $fileName = jl_String_replace($fileName, $rt_s(420), $rt_s(75));
    if (jl_String_endsWith($fileName, $rt_s(75)))
        $fileName = jl_String_substring($fileName, 0, $fileName.$nativeString.length - 1 | 0);
    $this.$file = $fileName;
    $this.$type0 = $type;
    $this.$teaFiles = $teaFiles;
},
cgxgbt_TeaFileHandle__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxgbt_TeaFileHandle();
    cgxgbt_TeaFileHandle__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxgbt_TeaFileHandle_type = $this => {
    return $this.$type0;
},
cgxgbt_TeaFileHandle_parent = $this => {
    let var$1, $index, $dir;
    var$1 = $this.$file;
    $index = jl_String_lastIndexOf0(var$1, $rt_s(75), var$1.$nativeString.length);
    $dir = $rt_s(13);
    if ($index > 0)
        $dir = jl_String_substring($this.$file, 0, $index);
    return cgxgbt_TeaFileHandle__init_($this.$teaFiles, $dir, $this.$type0);
},
cgxgbt_TeaFileHandle_exists = $this => {
    let $exists;
    a: {
        $exists = cgxgbtf_MemoryFileStorage_exists(cgxgbt_TeaFiles_getFileDB($this.$teaFiles, $this.$type0), $this);
        cgxgbt_TeaFileHandle$1_$callClinit();
        switch (cgxgbt_TeaFileHandle$1_$SwitchMap$com$badlogic$gdx$Files$FileType.data[$this.$type0.$ordinal0]) {
            case 1:
                if (!$exists)
                    break a;
                return 1;
            case 2:
                break a;
            default:
        }
        return $exists;
    }
    return cgxgbtf_MemoryFileStorage_exists(cgxgbt_TeaFiles_getFileDB($this.$teaFiles, cbg_Files$FileType_Classpath), $this);
},
cgxgbt_TeaFileHandle_toString = $this => {
    return $this.$file;
},
cbg_Files$FileType = $rt_classWithoutFields(jl_Enum),
cbg_Files$FileType_Classpath = null,
cbg_Files$FileType_Internal = null,
cbg_Files$FileType_External = null,
cbg_Files$FileType_Absolute = null,
cbg_Files$FileType_Local = null,
cbg_Files$FileType_$VALUES = null,
cbg_Files$FileType__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbg_Files$FileType;
    jl_Enum__init_(var$1, $rt_s(498), 0);
    cbg_Files$FileType_Classpath = var$1;
    var$1 = new cbg_Files$FileType;
    jl_Enum__init_(var$1, $rt_s(499), 1);
    cbg_Files$FileType_Internal = var$1;
    var$1 = new cbg_Files$FileType;
    jl_Enum__init_(var$1, $rt_s(500), 2);
    cbg_Files$FileType_External = var$1;
    var$1 = new cbg_Files$FileType;
    jl_Enum__init_(var$1, $rt_s(501), 3);
    cbg_Files$FileType_Absolute = var$1;
    var$1 = new cbg_Files$FileType;
    jl_Enum__init_(var$1, $rt_s(502), 4);
    cbg_Files$FileType_Local = var$1;
    var$2 = $rt_createArray(cbg_Files$FileType, 5);
    var$3 = var$2.data;
    var$3[0] = cbg_Files$FileType_Classpath;
    var$3[1] = cbg_Files$FileType_Internal;
    var$3[2] = cbg_Files$FileType_External;
    var$3[3] = cbg_Files$FileType_Absolute;
    var$3[4] = var$1;
    cbg_Files$FileType_$VALUES = var$2;
},
otcin_Buffers = $rt_classWithoutFields(),
otcin_Buffers_free = $buffer => {
    let var$2;
    if (!$buffer.$direct) {
        var$2 = new jl_IllegalArgumentException;
        jl_RuntimeException__init_(var$2, $rt_s(503));
        $rt_throw(var$2);
    }
    if ($rt_isInstance($buffer, jn_NativeBuffer))
        $buffer.$release();
},
otjb_TimerHandler = $rt_classWithoutFields(0);
function cgxgbta_AssetDownloadImpl$loadBinary$lambda$_6_0() {
    let a = this; jl_Object.call(a);
    a.$_02 = null;
    a.$_10 = null;
    a.$_20 = null;
    a.$_30 = 0;
}
let cgxgbta_AssetDownloadImpl$loadBinary$lambda$_6_0_onTimer$exported$0 = var$1 => {
    var$1 = var$1;
    cgxgbta_AssetDownloadImpl_loadBinaryInternally(var$1.$_02, 1, var$1.$_10, var$1.$_20, var$1.$_30);
},
jl_AbstractStringBuilder$Constants = $rt_classWithoutFields(),
jl_AbstractStringBuilder$Constants_longLogPowersOfTen = null,
jl_AbstractStringBuilder$Constants_doubleAnalysisResult = null,
jl_AbstractStringBuilder$Constants_floatAnalysisResult = null,
jl_AbstractStringBuilder$Constants__clinit_ = () => {
    jl_AbstractStringBuilder$Constants_longLogPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(10000), Long_fromInt(100000000), Long_create(1874919424, 2328306)]);
    jl_AbstractStringBuilder$Constants_doubleAnalysisResult = new otcit_DoubleAnalyzer$Result;
    jl_AbstractStringBuilder$Constants_floatAnalysisResult = new otcit_FloatAnalyzer$Result;
},
otcit_FloatAnalyzer = $rt_classWithoutFields(),
otcit_FloatAnalyzer_MAX_MANTISSA = 0,
otcit_FloatAnalyzer_mantissa10Table = null,
otcit_FloatAnalyzer_exp10Table = null,
otcit_FloatAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $decExponent, $upperPos, $upperPos_0, $mantissaShift, $decMantissa, $decMantissaHi, $decMantissaLow, $lowerPos, $lowerPos_0, $posCmp;
    $bits = (isNaN($d) ? 1 : 0) ? 2143289344 : $rt_floatToRawIntBits($d);
    $result.$sign0 = !($bits & (-2147483648)) ? 0 : 1;
    $mantissa = $bits & 8388607;
    $exponent = $bits >> 23 & 255;
    if (!$mantissa && !$exponent) {
        $result.$mantissa = 0;
        $result.$exponent = 0;
        return;
    }
    if ($exponent)
        $bits = $mantissa | 8388608;
    else {
        $bits = $mantissa << 1;
        while (Long_eq(Long_and(Long_fromInt($bits), Long_fromInt(8388608)), Long_ZERO)) {
            $bits = $bits << 1;
            $exponent = $exponent + (-1) | 0;
        }
    }
    var$6 = otcit_FloatAnalyzer_exp10Table.data;
    $mantissa = 0;
    $decExponent = var$6.length;
    if ($mantissa > $decExponent) {
        $result = new jl_IllegalArgumentException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $upperPos = $decExponent - 1 | 0;
    a: {
        while (true) {
            if ($mantissa > $upperPos) {
                $decExponent = ( -$mantissa | 0) - 1 | 0;
                break a;
            }
            $decExponent = ($mantissa + $upperPos | 0) / 2 | 0;
            $upperPos_0 = var$6[$decExponent];
            if ($upperPos_0 == $exponent)
                break;
            if ($exponent >= $upperPos_0)
                $mantissa = $decExponent + 1 | 0;
            else
                $upperPos = $decExponent - 1 | 0;
        }
    }
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    $mantissa = $decExponent + 1 | 0;
    $mantissaShift = 9 + ($exponent - var$6[$mantissa] | 0) | 0;
    $decMantissa = otcit_FloatAnalyzer_mulAndShiftRight($bits, otcit_FloatAnalyzer_mantissa10Table.data[$mantissa], $mantissaShift);
    if ($decMantissa < otcit_FloatAnalyzer_MAX_MANTISSA) {
        while ($rt_ucmp($decMantissa, otcit_FloatAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = ($decMantissa * 10 | 0) + 9 | 0;
        }
        var$6 = otcit_FloatAnalyzer_exp10Table.data;
        $mantissa = $decExponent + 1 | 0;
        $mantissaShift = 9 + ($exponent - var$6[$mantissa] | 0) | 0;
        $decMantissa = otcit_FloatAnalyzer_mulAndShiftRight($bits, otcit_FloatAnalyzer_mantissa10Table.data[$mantissa], $mantissaShift);
    }
    $mantissa = $bits << 1;
    $bits = $mantissa + 1 | 0;
    var$6 = otcit_FloatAnalyzer_mantissa10Table.data;
    $exponent = $decExponent + 1 | 0;
    $upperPos = var$6[$exponent];
    $upperPos_0 = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_FloatAnalyzer_mulAndShiftRight($bits, $upperPos, $upperPos_0);
    $decMantissaLow = otcit_FloatAnalyzer_mulAndShiftRight($mantissa - 1 | 0, otcit_FloatAnalyzer_mantissa10Table.data[$exponent], $upperPos_0);
    $lowerPos = 1;
    while (true) {
        $lowerPos_0 = $lowerPos * 10 | 0;
        if ($rt_ucmp($rt_udiv($decMantissa, $lowerPos_0), $rt_udiv($decMantissaLow, $lowerPos_0)) <= 0)
            break;
        $lowerPos = $lowerPos_0;
    }
    $upperPos = 1;
    while (true) {
        $upperPos_0 = $upperPos * 10 | 0;
        if ($rt_ucmp($rt_udiv($decMantissa, $upperPos_0), $rt_udiv($decMantissaHi, $upperPos_0)) >= 0)
            break;
        $upperPos = $upperPos_0;
    }
    $posCmp = $rt_ucmp($lowerPos, $upperPos);
    $mantissa = $posCmp > 0 ? $rt_imul($rt_udiv($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? $rt_imul($rt_udiv($decMantissa, $upperPos), $upperPos) + $upperPos | 0 : $rt_imul($rt_udiv(($decMantissa + ($upperPos / 2 | 0) | 0), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned(Long_fromInt($mantissa), Long_fromInt(1000000000)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            $mantissa = $rt_udiv($mantissa, 10);
            if ($rt_ucmp($mantissa, 1000000000) < 0)
                break;
        }
    else if ($rt_ucmp($mantissa, 100000000) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        $mantissa = $mantissa * 10 | 0;
    }
    $result.$mantissa = $mantissa;
    $result.$exponent = $decExponent - 50 | 0;
},
otcit_FloatAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    return Long_lo(Long_shru(Long_mul(Long_and(Long_fromInt($a), Long_create(4294967295, 0)), Long_and(Long_fromInt($b), Long_create(4294967295, 0))), 32 - $shift | 0));
},
otcit_FloatAnalyzer__clinit_ = () => {
    otcit_FloatAnalyzer_MAX_MANTISSA = $rt_udiv((-1), 10);
    otcit_FloatAnalyzer_mantissa10Table = $rt_createIntArrayFromData([(-18543760), (-873828468), (-1558056233), (-2105438446), (-791721136), (-1492370368), (-2052889754), (-707643228), (-1425108042), (-1999079893), (-621547450), (-1356231419), (-1943978595), (-533385374), (-1285701758), (-1887554866), (-443107408), (-1213479385), (-1829776968), (-350662770), (-1139523676), (-1770612400), (-255999462), (-1063793029), (-1710027882), (-159064234), (-986244846), (-1647989336), (-59802560), (-906835507), (-1584461865),
    (-2126562952), (-825520345), (-1519409735), (-2074521247), (-742253618), (-1452796353), (-2021230542), (-656988489), (-1384584251), (-1966660860), (-569676998), (-1314735058), (-1910781505), (-480270031), (-1243209484), (-1853561046), (-388717296), (-1169967296), (-1794967296), (-294967296), (-1094967296), (-1734967296), (-198967296), (-1018167296), (-1673527296), (-100663296), (-939524096), (-1610612736), (-2147483648), (-858993460), (-1546188227), (-2095944041), (-776530088), (-1480217529), (-2043167483),
    (-692087595), (-1412663535), (-1989124287), (-605618482), (-1343488245), (-1933784055), (-517074110), (-1272652747), (-1877115657), (-426404674), (-1200117198), (-1819087218), (-333559171), (-1125840796), (-1759666096), (-238485376), (-1049781760), (-1698818867), (-141129810), (-971897307), (-1636511305), (-41437710), (-892143627), (-1572708361), (-2117160148), (-810475859), (-1507374147), (-2064892777), (-726848065), (-1440471911), (-2011370988), (-641213203), (-1371964022), (-1956564688)]);
    otcit_FloatAnalyzer_exp10Table = $rt_createIntArrayFromData([(-37), (-34), (-31), (-28), (-24), (-21), (-18), (-14), (-11), (-8), (-4), (-1), 2, 6, 9, 12, 16, 19, 22, 26, 29, 32, 36, 39, 42, 46, 49, 52, 56, 59, 62, 65, 69, 72, 75, 79, 82, 85, 89, 92, 95, 99, 102, 105, 109, 112, 115, 119, 122, 125, 129, 132, 135, 139, 142, 145, 149, 152, 155, 158, 162, 165, 168, 172, 175, 178, 182, 185, 188, 192, 195, 198, 202, 205, 208, 212, 215, 218, 222, 225, 228, 232, 235, 238, 242, 245, 248, 252, 255, 258, 261, 265,
    268, 271, 275, 278, 281, 285, 288, 291]);
};
function otcit_FloatAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa = 0;
    a.$exponent = 0;
    a.$sign0 = 0;
}
function cgxgbta_AssetDownloadImpl$loadBinaryInternally$lambda$_7_0() {
    let a = this; jl_Object.call(a);
    a.$_012 = null;
    a.$_15 = null;
    a.$_24 = null;
    a.$_32 = null;
    a.$_40 = 0;
    a.$_5 = 0;
}
let cgxgbta_AssetDownloadImpl$loadBinaryInternally$lambda$_7_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, $$je;
    var$1 = var$1;
    var$2 = var$1.$_012;
    var$3 = var$1.$_15;
    var$4 = var$1.$_24;
    var$5 = var$1.$_32;
    var$6 = var$1.$_40;
    var$7 = var$1.$_5;
    if (var$3.readyState == 4) {
        var$8 = var$3.status;
        if (!var$8) {
            if (var$4 !== null)
                cgxgbta_AssetDownloadImpl$1_onFailure(var$4, var$5);
        } else if (var$8 != 200) {
            if (var$8 != 404 && var$8 != 403) {
                var$8 = var$6 + 1 | 0;
                var$1 = new cgxgbta_AssetDownloadImpl$lambda$loadBinaryInternally$3$lambda$_13_0;
                var$1.$_00 = var$2;
                var$1.$_1 = var$7;
                var$1.$_2 = var$5;
                var$1.$_3 = var$4;
                var$1.$_4 = var$8;
                setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$1), "onTimer"), 100);
            } else if (var$4 !== null)
                cgxgbta_AssetDownloadImpl$1_onFailure(var$4, var$5);
        } else {
            var$3 = var$3.response;
            if (!(typeof var$3 == 'string' ? 1 : 0))
                var$9 = new Int8Array(var$3);
            else {
                var$1 = $rt_str(var$3);
                jnci_UTF8Charset_$callClinit();
                var$3 = jnci_UTF8Charset_INSTANCE;
                var$1 = jn_CharBuffer_wrap($rt_fastStringToCharArray(var$1.$nativeString));
                a: {
                    try {
                        var$3 = jnc_CharsetEncoder_encode0(jnc_CharsetEncoder_onUnmappableCharacter(jnc_CharsetEncoder_onMalformedInput(jnci_UTF8Charset_newEncoder(var$3), jnc_CodingErrorAction_REPLACE), jnc_CodingErrorAction_REPLACE), var$1);
                        break a;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jnc_CharacterCodingException) {
                            var$2 = $$je;
                        } else {
                            throw $$e;
                        }
                    }
                    var$3 = new jl_AssertionError;
                    jl_Throwable__init_(var$3, $rt_s(415), var$2);
                    $rt_throw(var$3);
                }
                var$8 = var$3.$array3 === null ? 0 : 1;
                if (var$8 && !var$3.$position0 && var$3.$limit0 == var$3.$capacityImpl())
                    var$10 = jn_ByteBuffer_array(var$3);
                else {
                    var$10 = $rt_createByteArray(jn_Buffer_remaining(var$3));
                    jn_ByteBuffer_get(var$3, var$10, 0, var$10.data.length);
                }
                var$9 = var$10.data;
                var$3 = var$9.buffer;
            }
            if (var$4 !== null) {
                var$11 = new cgxgbta_TeaBlob;
                var$11.$data9 = var$9;
                var$11.$response = var$3;
                cgxgbta_AssetDownloadImpl$1_onSuccess(var$4, var$5, var$11);
            }
        }
        cgxgbta_AssetDownloadImpl_subtractQueue(var$2);
    }
},
cbgg_TextureData$TextureDataType = $rt_classWithoutFields(jl_Enum),
cbgg_TextureData$TextureDataType_Pixmap = null,
cbgg_TextureData$TextureDataType_Custom = null,
cbgg_TextureData$TextureDataType_$VALUES = null,
cbgg_TextureData$TextureDataType__clinit_ = () => {
    let var$1, var$2, var$3;
    var$1 = new cbgg_TextureData$TextureDataType;
    jl_Enum__init_(var$1, $rt_s(504), 0);
    cbgg_TextureData$TextureDataType_Pixmap = var$1;
    var$1 = new cbgg_TextureData$TextureDataType;
    jl_Enum__init_(var$1, $rt_s(505), 1);
    cbgg_TextureData$TextureDataType_Custom = var$1;
    var$2 = $rt_createArray(cbgg_TextureData$TextureDataType, 2);
    var$3 = var$2.data;
    var$3[0] = cbgg_TextureData$TextureDataType_Pixmap;
    var$3[1] = var$1;
    cbgg_TextureData$TextureDataType_$VALUES = var$2;
},
cbggg_MipMapGenerator = $rt_classWithoutFields(),
cbggg_MipMapGenerator_useHWMipMap = 0,
cbggg_MipMapGenerator_generateMipMapCPU = ($target, $pixmap, $textureWidth, $textureHeight) => {
    let $width, $height, $level, $tmp_0, var$9, var$10, var$11, var$12, var$13;
    cbg_Gdx_gl.$glTexImage2D($target, 0, cbgg_Pixmap_getGLInternalFormat($pixmap), cbgg_Pixmap_getWidth($pixmap), cbgg_Pixmap_getHeight($pixmap), 0, cbgg_Pixmap_getGLFormat($pixmap), cbgg_Pixmap_getGLType($pixmap), cbgg_Pixmap_getPixels($pixmap));
    if (cbg_Gdx_gl20 === null && $textureWidth != $textureHeight) {
        $pixmap = new cbgu_GdxRuntimeException;
        jl_RuntimeException__init_($pixmap, $rt_s(506));
        $rt_throw($pixmap);
    }
    $width = cbgg_Pixmap_getWidth($pixmap) / 2 | 0;
    $height = cbgg_Pixmap_getHeight($pixmap) / 2 | 0;
    $level = 1;
    while ($width > 0 && $height > 0) {
        $tmp_0 = cbgg_Pixmap__init_($width, $height, cbgg_Pixmap_getFormat($pixmap));
        cbgg_Pixmap_setBlending($tmp_0, cbgg_Pixmap$Blending_None);
        var$9 = cbgg_Pixmap_getWidth($pixmap);
        var$10 = cbgg_Pixmap_getHeight($pixmap);
        var$11 = $tmp_0.$nativePixmap;
        var$12 = $pixmap.$nativePixmap;
        var$13 = var$11.$nativePixmap0;
        Gdx.Gdx.prototype.g2d_draw_pixmap(var$12.$nativePixmap0.$basePtr, var$13.$basePtr, 0, 0, var$9, var$10, 0, 0, $width, $height);
        cbggg_Gdx2DPixmapNative_copyHeapToBuffer(var$13);
        if ($level > 1)
            cbgg_Pixmap_dispose($pixmap);
        cbg_Gdx_gl.$glTexImage2D($target, $level, cbgg_Pixmap_getGLInternalFormat($tmp_0), cbgg_Pixmap_getWidth($tmp_0), cbgg_Pixmap_getHeight($tmp_0), 0, cbgg_Pixmap_getGLFormat($tmp_0), cbgg_Pixmap_getGLType($tmp_0), cbgg_Pixmap_getPixels($tmp_0));
        $width = cbgg_Pixmap_getWidth($tmp_0) / 2 | 0;
        $height = cbgg_Pixmap_getHeight($tmp_0) / 2 | 0;
        $level = $level + 1 | 0;
        $pixmap = $tmp_0;
    }
},
cbggg_MipMapGenerator__clinit_ = () => {
    cbggg_MipMapGenerator_useHWMipMap = 1;
},
jn_NativeBuffer = $rt_classWithoutFields(0);
function cgxgbta_AssetDownloadImpl$setOnProgress$lambda$_8_0() {
    jl_Object.call(this);
    this.$_014 = null;
}
let cgxgbta_AssetDownloadImpl$setOnProgress$lambda$_8_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4;
    var$1 = var$1.$_014;
    var$3 = var$2.loaded;
    var$4 = var$2.total;
    if (var$1 !== null) {
        var$1 = var$1.$val$listener;
        if (var$1 !== null)
            var$1.$onProgress(var$4, var$3);
    }
},
otjde_EventTarget = $rt_classWithoutFields(0),
otja_XMLHttpRequest = $rt_classWithoutFields(),
otcit_DoubleAnalyzer$Result = $rt_classWithoutFields();
function jur_Matcher$1() {
    let a = this; jl_Object.call(a);
    a.$grN = 0;
    a.$val$gr = 0;
    a.$this$015 = null;
}
let jur_Matcher$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$015 = $this$0;
    $this.$val$gr = var$2;
    $this.$grN = var$2;
},
jur_Matcher$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Matcher$1();
    jur_Matcher$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Matcher$1_toString = $this => {
    return jur_Matcher_group($this.$this$015, $this.$grN);
},
otjt_Uint8Array = $rt_classWithoutFields(otjt_TypedArray),
otjt_Uint16Array = $rt_classWithoutFields(otjt_TypedArray);
function otjde_Registration() {
    let a = this; jl_Object.call(a);
    a.$target0 = null;
    a.$type6 = null;
    a.$listener = null;
    a.$useCapture = null;
}
let cgxgbt_TeaFileHandle$1 = $rt_classWithoutFields(),
cgxgbt_TeaFileHandle$1_$SwitchMap$com$badlogic$gdx$Files$FileType = null,
cgxgbt_TeaFileHandle$1_$callClinit = () => {
    cgxgbt_TeaFileHandle$1_$callClinit = $rt_eraseClinit(cgxgbt_TeaFileHandle$1);
    cgxgbt_TeaFileHandle$1__clinit_();
},
cgxgbt_TeaFileHandle$1__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createIntArray((cbg_Files$FileType_$VALUES.$clone0()).data.length);
    var$2 = var$1.data;
    cgxgbt_TeaFileHandle$1_$SwitchMap$com$badlogic$gdx$Files$FileType = var$1;
    var$2[cbg_Files$FileType_Internal.$ordinal0] = 1;
    var$2[cbg_Files$FileType_Classpath.$ordinal0] = 2;
},
cbgu_StreamUtils = $rt_classWithoutFields(),
cbgu_StreamUtils_EMPTY_BYTES = null,
cbgu_StreamUtils_copyStreamToByteArray = ($input, $estimatedSize) => {
    let $baos, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12;
    $baos = new cbgu_StreamUtils$OptimizedByteArrayOutputStream;
    ji_ByteArrayOutputStream__init_($baos, jl_Math_max(0, $estimatedSize));
    var$4 = $rt_createByteArray(4096);
    var$5 = var$4.data;
    var$6 = var$5.length;
    $input = $input;
    var$7 = $baos;
    while (true) {
        var$8 = 0;
        var$9 = jl_Math_min(var$6, $input.$count1 - $input.$pos | 0);
        var$10 = 0;
        while (var$10 < var$9) {
            $estimatedSize = var$8 + 1 | 0;
            var$11 = $input.$buf0.data;
            var$12 = $input.$pos;
            $input.$pos = var$12 + 1 | 0;
            var$5[var$8] = var$11[var$12];
            var$10 = var$10 + 1 | 0;
            var$8 = $estimatedSize;
        }
        if (var$9 <= 0)
            var$9 = (-1);
        if (var$9 == (-1))
            break;
        ji_ByteArrayOutputStream_write(var$7, var$4, 0, var$9);
    }
    return cbgu_StreamUtils$OptimizedByteArrayOutputStream_toByteArray($baos);
},
cbgu_StreamUtils_closeQuietly = $c => {
    let $$je;
    a: {
        if ($c !== null)
            try {
                $c.$close();
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
    }
},
cbgu_StreamUtils__clinit_ = () => {
    cbgu_StreamUtils_EMPTY_BYTES = $rt_createByteArray(0);
},
ji_IOException = $rt_classWithoutFields(jl_Exception),
cbgur_ArrayReflection = $rt_classWithoutFields();
function cgxgbta_TeaBlob() {
    let a = this; jl_Object.call(a);
    a.$response = null;
    a.$data9 = null;
}
function ji_ByteArrayOutputStream() {
    let a = this; ji_OutputStream.call(a);
    a.$buf = null;
    a.$count0 = 0;
}
let ji_ByteArrayOutputStream__init_ = ($this, $size) => {
    $this.$buf = $rt_createByteArray($size);
},
ji_ByteArrayOutputStream__init_0 = var_0 => {
    let var_1 = new ji_ByteArrayOutputStream();
    ji_ByteArrayOutputStream__init_(var_1, var_0);
    return var_1;
},
ji_ByteArrayOutputStream_write = ($this, $b, $off, $len) => {
    let $i, var$5, var$6, var$7, var$8;
    $i = $this.$count0 + $len | 0;
    var$5 = $this.$buf.data.length;
    if (var$5 < $i) {
        var$6 = jl_Math_max($i, (var$5 * 3 | 0) / 2 | 0);
        $this.$buf = ju_Arrays_copyOf($this.$buf, var$6);
    }
    $i = 0;
    while ($i < $len) {
        var$7 = $b.data;
        var$8 = $this.$buf.data;
        var$6 = $this.$count0;
        $this.$count0 = var$6 + 1 | 0;
        var$5 = $off + 1 | 0;
        var$8[var$6] = var$7[$off];
        $i = $i + 1 | 0;
        $off = var$5;
    }
},
ji_ByteArrayOutputStream_toByteArray = $this => {
    return ju_Arrays_copyOf($this.$buf, $this.$count0);
},
cbgu_StreamUtils$OptimizedByteArrayOutputStream = $rt_classWithoutFields(ji_ByteArrayOutputStream),
cbgu_StreamUtils$OptimizedByteArrayOutputStream_toByteArray = $this => {
    let var$1, var$2;
    jl_Object_monitorEnterSync($this);
    try {
        var$1 = $this.$count0;
        var$2 = $this.$buf;
        if (var$1 == var$2.data.length)
            return var$2;
        return ji_ByteArrayOutputStream_toByteArray($this);
    } finally {
        jl_Object_monitorExitSync($this);
    }
};
function cgxgbta_AssetDownloadImpl$lambda$loadBinaryInternally$3$lambda$_13_0() {
    let a = this; jl_Object.call(a);
    a.$_00 = null;
    a.$_1 = 0;
    a.$_2 = null;
    a.$_3 = null;
    a.$_4 = 0;
}
let cgxgbta_AssetDownloadImpl$lambda$loadBinaryInternally$3$lambda$_13_0_onTimer$exported$0 = var$1 => {
    var$1 = var$1;
    cgxgbta_AssetDownloadImpl_loadBinary(var$1.$_00, var$1.$_1, var$1.$_2, var$1.$_3, var$1.$_4);
},
ji_InputStream = $rt_classWithoutFields(),
jn_BufferOverflowException = $rt_classWithoutFields(jl_RuntimeException),
jnci_UTF8Charset = $rt_classWithoutFields(jnc_Charset),
jnci_UTF8Charset_INSTANCE = null,
jnci_UTF8Charset_$callClinit = () => {
    jnci_UTF8Charset_$callClinit = $rt_eraseClinit(jnci_UTF8Charset);
    jnci_UTF8Charset__clinit_();
},
jnci_UTF8Charset_newDecoder = $this => {
    let var$1, var$2;
    var$1 = new jnci_UTF8Decoder;
    var$1.$replacement = $rt_s(507);
    var$2 = jnc_CodingErrorAction_REPORT;
    var$1.$malformedAction = var$2;
    var$1.$unmappableAction0 = var$2;
    var$1.$charset0 = $this;
    var$1.$averageCharsPerByte = 0.3333333432674408;
    var$1.$maxCharsPerByte = 0.5;
    var$1.$inArray = $rt_createByteArray(512);
    var$1.$outArray0 = $rt_createCharArray(512);
    return var$1;
},
jnci_UTF8Charset_newEncoder = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = new jnci_UTF8Encoder;
    var$2 = $rt_createByteArray(1);
    var$3 = var$2.data;
    var$3[0] = 63;
    var$4 = jnc_CodingErrorAction_REPORT;
    var$1.$malformedAction0 = var$4;
    var$1.$unmappableAction = var$4;
    var$5 = var$3.length;
    if (var$5 && var$5 >= var$1.$maxBytesPerChar) {
        var$1.$charset = $this;
        var$1.$replacement1 = var$2.$clone0();
        var$1.$averageBytesPerChar = 2.0;
        var$1.$maxBytesPerChar = 4.0;
        var$1.$inArray0 = $rt_createCharArray(512);
        var$1.$outArray = $rt_createByteArray(512);
        return var$1;
    }
    var$4 = new jl_IllegalArgumentException;
    jl_RuntimeException__init_(var$4, $rt_s(508));
    $rt_throw(var$4);
},
jnci_UTF8Charset__clinit_ = () => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = new jnci_UTF8Charset;
    jnci_UTF8Charset_$callClinit();
    var$2 = $rt_createArray(jl_String, 0);
    var$3 = var$2.data;
    jnc_Charset_checkCanonicalName($rt_s(509));
    var$4 = var$3.length;
    var$5 = 0;
    while (var$5 < var$4) {
        jnc_Charset_checkCanonicalName(var$3[var$5]);
        var$5 = var$5 + 1 | 0;
    }
    var$1.$canonicalName = $rt_s(509);
    var$1.$aliases = var$2.$clone0();
    jnci_UTF8Charset_INSTANCE = var$1;
},
otc_PlatformDetector = $rt_classWithoutFields();
function jnc_IllegalCharsetNameException() {
    jl_IllegalArgumentException.call(this);
    this.$charsetName = null;
}
let jnc_IllegalCharsetNameException__init_0 = ($this, $charsetName) => {
    jl_Exception__init_($this);
    $this.$charsetName = $charsetName;
},
jnc_IllegalCharsetNameException__init_ = var_0 => {
    let var_1 = new jnc_IllegalCharsetNameException();
    jnc_IllegalCharsetNameException__init_0(var_1, var_0);
    return var_1;
};
function ji_ByteArrayInputStream() {
    let a = this; ji_InputStream.call(a);
    a.$buf0 = null;
    a.$pos = 0;
    a.$mark0 = 0;
    a.$count1 = 0;
}
let ji_ByteArrayInputStream__init_ = ($this, $buf) => {
    let var$2;
    var$2 = $buf.data.length;
    $this.$buf0 = $buf;
    $this.$pos = 0;
    $this.$mark0 = 0;
    $this.$count1 = 0 + var$2 | 0;
},
ji_ByteArrayInputStream__init_0 = var_0 => {
    let var_1 = new ji_ByteArrayInputStream();
    ji_ByteArrayInputStream__init_(var_1, var_0);
    return var_1;
},
ji_ByteArrayInputStream_close = $this => {
    return;
},
jl_Readable = $rt_classWithoutFields(0),
jn_CharBuffer = $rt_classWithoutFields(jn_Buffer),
jn_CharBuffer_allocate = $capacity => {
    let $array, var$3, var$4;
    if ($capacity >= 0) {
        $array = $rt_createCharArray($capacity);
        return jn_CharBufferOverTypedArray__init_(0, $capacity, 0, $array.data, $array);
    }
    var$3 = new jl_IllegalArgumentException;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(463)), $capacity);
    jl_RuntimeException__init_(var$3, jl_AbstractStringBuilder_toString(var$4));
    $rt_throw(var$3);
},
jn_CharBuffer_wrap = $array => {
    let var$2, var$3, var$4, var$5;
    var$2 = $array.data.length;
    if (var$2 >= 0) {
        var$3 = var$2 + 0 | 0;
        if (var$3 <= var$2) {
            var$4 = jn_CharBufferOverTypedArray__init_(0, var$2, 0, $array.data, $array);
            var$4.$position0 = 0;
            var$4.$limit0 = var$3;
            return var$4;
        }
    }
    var$5 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$5);
    $rt_throw(var$5);
},
jn_CharBuffer_get = ($this, $dst, $offset, $length) => {
    let var$4, var$5, var$6, var$7;
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $dst.data.length) {
        if ($length > jn_Buffer_remaining($this)) {
            var$4 = new jn_BufferUnderflowException;
            jl_Exception__init_(var$4);
            $rt_throw(var$4);
        }
        var$5 = $this.$position0;
        var$6 = $this;
        var$7 = new Uint16Array(var$6.$data1.buffer, var$6.$data1.byteOffset + (var$5 * 2 | 0) | 0, $length);
        $dst.data.set(var$7, $offset);
        $this.$position0 = $this.$position0 + $length | 0;
        return $this;
    }
    var$4 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$4);
    $rt_throw(var$4);
},
jn_CharBuffer_put = ($this, $src) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    var$2 = 0;
    var$3 = $src.$nativeString.length;
    if (jn_CharBufferImpl_isReadOnly($this)) {
        $src = new jn_ReadOnlyBufferException;
        jl_Exception__init_($src);
        $rt_throw($src);
    }
    if (var$3 >= var$2 && var$3 <= $src.$nativeString.length) {
        var$4 = var$3 - var$2 | 0;
        if (jn_Buffer_remaining($this) < var$4) {
            $src = new jn_BufferOverflowException;
            jl_Exception__init_($src);
            $rt_throw($src);
        }
        var$5 = $this.$position0;
        var$6 = $this;
        while (true) {
            var$7 = var$3 + (-1) | 0;
            if (var$3 <= 0)
                break;
            var$8 = var$6.$data1;
            var$9 = var$5 + 1 | 0;
            var$10 = var$2 + 1 | 0;
            var$8[var$5] = jl_String_charAt($src, var$2);
            var$3 = var$7;
            var$5 = var$9;
            var$2 = var$10;
        }
        $this.$position0 = $this.$position0 + var$4 | 0;
        return $this;
    }
    $src = new jl_IndexOutOfBoundsException;
    jl_Exception__init_($src);
    $rt_throw($src);
},
jn_CharBuffer_array = $this => {
    let var$1, var$2;
    var$1 = $this.$array5;
    if (var$1 !== null)
        return var$1;
    var$2 = new jl_UnsupportedOperationException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
};
function jnc_CodingErrorAction() {
    jl_Object.call(this);
    this.$name4 = null;
}
let jnc_CodingErrorAction_IGNORE = null,
jnc_CodingErrorAction_REPLACE = null,
jnc_CodingErrorAction_REPORT = null,
jnc_CodingErrorAction__init_0 = ($this, $name) => {
    $this.$name4 = $name;
},
jnc_CodingErrorAction__init_ = var_0 => {
    let var_1 = new jnc_CodingErrorAction();
    jnc_CodingErrorAction__init_0(var_1, var_0);
    return var_1;
},
jnc_CodingErrorAction__clinit_ = () => {
    jnc_CodingErrorAction_IGNORE = jnc_CodingErrorAction__init_($rt_s(510));
    jnc_CodingErrorAction_REPLACE = jnc_CodingErrorAction__init_($rt_s(511));
    jnc_CodingErrorAction_REPORT = jnc_CodingErrorAction__init_($rt_s(512));
};
function jnc_CharsetEncoder() {
    let a = this; jl_Object.call(a);
    a.$charset = null;
    a.$replacement1 = null;
    a.$averageBytesPerChar = 0.0;
    a.$maxBytesPerChar = 0.0;
    a.$malformedAction0 = null;
    a.$unmappableAction = null;
    a.$status = 0;
}
let jnc_CharsetEncoder_onMalformedInput = ($this, $newAction) => {
    let var$2;
    if ($newAction !== null) {
        $this.$malformedAction0 = $newAction;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    jl_RuntimeException__init_(var$2, $rt_s(513));
    $rt_throw(var$2);
},
jnc_CharsetEncoder_onUnmappableCharacter = ($this, $newAction) => {
    let var$2;
    if ($newAction !== null) {
        $this.$unmappableAction = $newAction;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    jl_RuntimeException__init_(var$2, $rt_s(513));
    $rt_throw(var$2);
},
jnc_CharsetEncoder_encode = ($this, $in, $out, $endOfInput) => {
    let var$4, $e, $result, $remaining, $action, var$9, $$je;
    a: {
        var$4 = $this.$status;
        if (var$4 != 3) {
            if ($endOfInput)
                break a;
            if (var$4 != 2)
                break a;
        }
        $in = new jl_IllegalStateException;
        jl_Exception__init_($in);
        $rt_throw($in);
    }
    $this.$status = !$endOfInput ? 1 : 2;
    $e = $this;
    while (true) {
        try {
            $result = jnci_BufferedEncoder_encodeLoop($e, $in, $out);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_RuntimeException) {
                $e = $$je;
                $rt_throw(jnc_CoderMalfunctionError__init_($e));
            } else {
                throw $$e;
            }
        }
        if (jnc_CoderResult_isUnderflow($result)) {
            if (!$endOfInput)
                return $result;
            $remaining = jn_Buffer_remaining($in);
            if ($remaining <= 0)
                return $result;
            $result = jnc_CoderResult_malformedForLength($remaining);
        } else if (jnc_CoderResult_isOverflow($result))
            break;
        $action = !jnc_CoderResult_isUnmappable($result) ? $this.$malformedAction0 : $this.$unmappableAction;
        b: {
            if ($action !== jnc_CodingErrorAction_REPLACE) {
                if ($action === jnc_CodingErrorAction_IGNORE)
                    break b;
                else
                    return $result;
            }
            $remaining = jn_Buffer_remaining($out);
            var$9 = $this.$replacement1;
            var$4 = var$9.data.length;
            if ($remaining < var$4)
                return jnc_CoderResult_OVERFLOW;
            jn_ByteBuffer_put($out, var$9, 0, var$4);
        }
        jn_Buffer_position($in, $in.$position0 + jnc_CoderResult_length($result) | 0);
    }
    return $result;
},
jnc_CharsetEncoder_encode0 = ($this, $in) => {
    let $output, $result, var$4;
    if (!jn_Buffer_remaining($in))
        return jn_ByteBuffer_allocate(0);
    $this.$status = 0;
    $output = jn_ByteBuffer_allocate(jn_Buffer_remaining($in) * $this.$averageBytesPerChar | 0);
    while (true) {
        $result = jnc_CharsetEncoder_encode($this, $in, $output, 0);
        if ($result === jnc_CoderResult_UNDERFLOW)
            break;
        if ($result === jnc_CoderResult_OVERFLOW) {
            $output = jnc_CharsetEncoder_allocateMore($this, $output);
            continue;
        }
        if (!jnc_CoderResult_isError($result))
            continue;
        jnc_CoderResult_throwException($result);
    }
    $in = jnc_CharsetEncoder_encode($this, $in, $output, 1);
    if (jnc_CoderResult_isError($in))
        jnc_CoderResult_throwException($in);
    while (true) {
        var$4 = $this.$status;
        if (var$4 != 2 && var$4 != 4) {
            $in = new jl_IllegalStateException;
            jl_Exception__init_($in);
            $rt_throw($in);
        }
        $in = jnc_CoderResult_UNDERFLOW;
        if ($in === $in)
            $this.$status = 3;
        if (jnc_CoderResult_isUnderflow($in))
            break;
        if (!jnc_CoderResult_isOverflow($in))
            continue;
        $output = jnc_CharsetEncoder_allocateMore($this, $output);
    }
    jn_Buffer_flip($output);
    return $output;
},
jnc_CharsetEncoder_allocateMore = ($this, $buffer) => {
    let $array, $result;
    $array = jn_ByteBuffer_array($buffer);
    $result = jn_ByteBuffer_wrap(ju_Arrays_copyOf($array, $array.data.length * 2 | 0));
    jn_Buffer_position($result, $buffer.$position0);
    return $result;
},
jnc_CharacterCodingException = $rt_classWithoutFields(ji_IOException),
jl_Error = $rt_classWithoutFields(jl_Throwable),
jl_AssertionError = $rt_classWithoutFields(jl_Error),
jn_CharBufferImpl = $rt_classWithoutFields(jn_CharBuffer),
jn_CharBufferImpl_isReadOnly = $this => {
    return $this.$readOnly1;
};
function jn_CharBufferOverTypedArray() {
    let a = this; jn_CharBufferImpl.call(a);
    a.$readOnly1 = 0;
    a.$data1 = null;
    a.$array5 = null;
}
let jn_CharBufferOverTypedArray__init_0 = ($this, $position, $limit, $readOnly, $data, $array) => {
    jn_Buffer__init_($this);
    $this.$position0 = $position;
    $this.$limit0 = $limit;
    $this.$readOnly1 = $readOnly;
    $this.$data1 = $data;
    $this.$array5 = $array;
},
jn_CharBufferOverTypedArray__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_CharBufferOverTypedArray();
    jn_CharBufferOverTypedArray__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_CharBufferOverTypedArray_capacityImpl = $this => {
    return $this.$data1.length;
};
function jnc_CoderResult() {
    let a = this; jl_Object.call(a);
    a.$kind = 0;
    a.$length3 = 0;
}
let jnc_CoderResult_UNDERFLOW = null,
jnc_CoderResult_OVERFLOW = null,
jnc_CoderResult__init_0 = ($this, $kind, $length) => {
    $this.$kind = $kind;
    $this.$length3 = $length;
},
jnc_CoderResult__init_ = (var_0, var_1) => {
    let var_2 = new jnc_CoderResult();
    jnc_CoderResult__init_0(var_2, var_0, var_1);
    return var_2;
},
jnc_CoderResult_isUnderflow = $this => {
    return $this.$kind ? 0 : 1;
},
jnc_CoderResult_isOverflow = $this => {
    return $this.$kind != 1 ? 0 : 1;
},
jnc_CoderResult_isError = $this => {
    return !jnc_CoderResult_isMalformed($this) && !jnc_CoderResult_isUnmappable($this) ? 0 : 1;
},
jnc_CoderResult_isMalformed = $this => {
    return $this.$kind != 2 ? 0 : 1;
},
jnc_CoderResult_isUnmappable = $this => {
    return $this.$kind != 3 ? 0 : 1;
},
jnc_CoderResult_length = $this => {
    let var$1;
    if (jnc_CoderResult_isError($this))
        return $this.$length3;
    var$1 = new jl_UnsupportedOperationException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jnc_CoderResult_malformedForLength = $length => {
    return jnc_CoderResult__init_(2, $length);
},
jnc_CoderResult_throwException = $this => {
    let var$1, var$2;
    switch ($this.$kind) {
        case 0:
            var$1 = new jnc_BufferUnderflowException;
            jl_Exception__init_(var$1);
            $rt_throw(var$1);
        case 1:
            var$1 = new jnc_BufferOverflowException;
            jl_Exception__init_(var$1);
            $rt_throw(var$1);
        case 2:
            var$1 = new jnc_MalformedInputException;
            var$2 = $this.$length3;
            jl_Exception__init_(var$1);
            var$1.$length5 = var$2;
            $rt_throw(var$1);
        case 3:
            var$1 = new jnc_UnmappableCharacterException;
            var$2 = $this.$length3;
            jl_Exception__init_(var$1);
            var$1.$length4 = var$2;
            $rt_throw(var$1);
        default:
    }
},
jnc_CoderResult__clinit_ = () => {
    jnc_CoderResult_UNDERFLOW = jnc_CoderResult__init_(0, 0);
    jnc_CoderResult_OVERFLOW = jnc_CoderResult__init_(1, 0);
},
jnc_CoderMalfunctionError = $rt_classWithoutFields(jl_Error),
jnc_CoderMalfunctionError__init_0 = ($this, $cause) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    jl_Throwable_fillInStackTrace($this);
    $this.$cause = $cause;
},
jnc_CoderMalfunctionError__init_ = var_0 => {
    let var_1 = new jnc_CoderMalfunctionError();
    jnc_CoderMalfunctionError__init_0(var_1, var_0);
    return var_1;
},
jnc_BufferUnderflowException = $rt_classWithoutFields(jl_RuntimeException),
jnc_BufferOverflowException = $rt_classWithoutFields(jl_RuntimeException);
function jnc_MalformedInputException() {
    jnc_CharacterCodingException.call(this);
    this.$length5 = 0;
}
let jnc_MalformedInputException_getMessage = $this => {
    let var$1, var$2;
    var$1 = $this.$length5;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(514)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jnc_UnmappableCharacterException() {
    jnc_CharacterCodingException.call(this);
    this.$length4 = 0;
}
let jnc_UnmappableCharacterException_getMessage = $this => {
    let var$1, var$2;
    var$1 = $this.$length4;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(515)), var$1);
    return jl_AbstractStringBuilder_toString(var$2);
};
function jnci_BufferedEncoder() {
    let a = this; jnc_CharsetEncoder.call(a);
    a.$inArray0 = null;
    a.$outArray = null;
}
let jnci_BufferedEncoder_encodeLoop = ($this, $in, $out) => {
    let $inArray, $inPos, $inSize, $outArray, var$7, $i, var$9, $outPos, $result, $outSize, $controller;
    $inArray = $this.$inArray0;
    $inPos = 0;
    $inSize = 0;
    $outArray = $this.$outArray;
    var$7 = $this;
    a: {
        while (true) {
            if (($inPos + 32 | 0) > $inSize && jn_Buffer_hasRemaining($in)) {
                $i = $inPos;
                while ($i < $inSize) {
                    var$9 = $inArray.data;
                    var$9[$i - $inPos | 0] = var$9[$i];
                    $i = $i + 1 | 0;
                }
                var$9 = $inArray.data;
                $outPos = $inSize - $inPos | 0;
                $inSize = jl_Math_min(jn_Buffer_remaining($in) + $outPos | 0, var$9.length);
                jn_CharBuffer_get($in, $inArray, $outPos, $inSize - $outPos | 0);
                $inPos = 0;
            }
            if (!jn_Buffer_hasRemaining($out)) {
                $result = !jn_Buffer_hasRemaining($in) && $inPos >= $inSize ? jnc_CoderResult_UNDERFLOW : jnc_CoderResult_OVERFLOW;
                break a;
            }
            var$9 = $outArray.data;
            $outSize = jl_Math_min(jn_Buffer_remaining($out), var$9.length);
            $controller = new jnci_BufferedEncoder$Controller;
            $controller.$in = $in;
            $controller.$out0 = $out;
            $result = jnci_UTF8Encoder_arrayEncode(var$7, $inArray, $inPos, $inSize, $outArray, 0, $outSize, $controller);
            $inPos = $controller.$inPosition;
            $outPos = $controller.$outPosition0;
            if ($result === null) {
                if (!jn_Buffer_hasRemaining($in) && $inPos >= $inSize)
                    $result = jnc_CoderResult_UNDERFLOW;
                else if (!jn_Buffer_hasRemaining($out) && $inPos >= $inSize)
                    $result = jnc_CoderResult_OVERFLOW;
            }
            jn_ByteBuffer_put($out, $outArray, 0, $outPos);
            if ($result !== null)
                break;
        }
    }
    jn_Buffer_position($in, $in.$position0 - ($inSize - $inPos | 0) | 0);
    return $result;
},
jnci_UTF8Encoder = $rt_classWithoutFields(jnci_BufferedEncoder),
jnci_UTF8Encoder_arrayEncode = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, $ch, $low, var$13, $codePoint;
    $result = null;
    a: {
        while ($inPos < $inSize) {
            if ($outPos >= $outSize) {
                var$9 = $inPos;
                break a;
            }
            var$10 = $inArray.data;
            var$9 = $inPos + 1 | 0;
            $ch = var$10[$inPos];
            if ($ch < 128) {
                var$10 = $outArray.data;
                $low = $outPos + 1 | 0;
                var$10[$outPos] = $ch << 24 >> 24;
            } else if ($ch < 2048) {
                if (($outPos + 2 | 0) > $outSize) {
                    var$9 = var$9 + (-1) | 0;
                    if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 2))
                        break a;
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$10 = $outArray.data;
                $inPos = $outPos + 1 | 0;
                var$10[$outPos] = (192 | $ch >> 6) << 24 >> 24;
                $low = $inPos + 1 | 0;
                var$10[$inPos] = (128 | $ch & 63) << 24 >> 24;
            } else if (!jl_Character_isSurrogate($ch)) {
                if (($outPos + 3 | 0) > $outSize) {
                    var$9 = var$9 + (-1) | 0;
                    if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 3))
                        break a;
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$10 = $outArray.data;
                var$13 = $outPos + 1 | 0;
                var$10[$outPos] = (224 | $ch >> 12) << 24 >> 24;
                $inPos = var$13 + 1 | 0;
                var$10[var$13] = (128 | $ch >> 6 & 63) << 24 >> 24;
                $low = $inPos + 1 | 0;
                var$10[$inPos] = (128 | $ch & 63) << 24 >> 24;
            } else {
                if (!jl_Character_isHighSurrogate($ch)) {
                    $result = jnc_CoderResult_malformedForLength(1);
                    break a;
                }
                if (var$9 >= $inSize) {
                    if (jn_Buffer_hasRemaining($controller.$in))
                        break a;
                    $result = jnc_CoderResult_UNDERFLOW;
                    break a;
                }
                $inPos = var$9 + 1 | 0;
                $low = var$10[var$9];
                if (!jl_Character_isLowSurrogate($low)) {
                    var$9 = $inPos + (-2) | 0;
                    $result = jnc_CoderResult_malformedForLength(1);
                    break a;
                }
                if (($outPos + 4 | 0) > $outSize) {
                    var$9 = $inPos + (-2) | 0;
                    if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 4))
                        break a;
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$10 = $outArray.data;
                $codePoint = jl_Character_toCodePoint($ch, $low);
                $low = $outPos + 1 | 0;
                var$10[$outPos] = (240 | $codePoint >> 18) << 24 >> 24;
                var$13 = $low + 1 | 0;
                var$10[$low] = (128 | $codePoint >> 12 & 63) << 24 >> 24;
                $outPos = var$13 + 1 | 0;
                var$10[var$13] = (128 | $codePoint >> 6 & 63) << 24 >> 24;
                $low = $outPos + 1 | 0;
                var$10[$outPos] = (128 | $codePoint & 63) << 24 >> 24;
                var$9 = $inPos;
            }
            $inPos = var$9;
            $outPos = $low;
        }
        var$9 = $inPos;
    }
    $controller.$inPosition = var$9;
    $controller.$outPosition0 = $outPos;
    return $result;
};
function cgxgbtft_LocalDBStorage$removeFile$lambda$_3_0() {
    jl_Object.call(this);
    this.$_010 = null;
}
let cgxgbtft_LocalDBStorage$removeFile$lambda$_3_0_handleEvent$exported$0 = var$1 => {
    let var$2, var$3;
    var$1 = var$1.$_010;
    var$2 = jl_System_err();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(516)), var$1);
    var$1 = jl_AbstractStringBuilder_toString(var$3);
    otcic_JsConsolePrintStream_println(var$2, var$1);
};
function cgxgbta_AssetLoadImpl$6() {
    let a = this; jl_Object.call(a);
    a.$val$listener0 = null;
    a.$val$path1 = null;
    a.$val$fileHandle = null;
    a.$this$09 = null;
}
let cgxgbta_AssetLoadImpl$6_onProgress = ($this, $total, $loaded) => {
    let var$3;
    var$3 = $this.$val$listener0;
    if (var$3 !== null)
        var$3.$onProgress($total, $loaded);
},
cgxgbta_AssetLoadImpl$6_onSuccess = ($this, var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, $$je;
    a: {
        var$1 = var$2;
        var$2 = $this.$this$09.$assetInQueue;
        var$3 = $this.$val$path1;
        var$2 = var$2.$backingMap;
        var$4 = 0;
        var$5 = null;
        if (var$3 === null) {
            var$6 = var$2.$elementData.data[0];
            while (var$6 !== null) {
                if (var$6.$key === null)
                    break a;
                var$3 = var$6.$next2;
                var$5 = var$6;
                var$6 = var$3;
            }
        } else {
            var$7 = jl_String_hashCode(var$3);
            var$8 = var$2.$elementData.data;
            var$4 = var$7 & (var$8.length - 1 | 0);
            var$6 = var$8[var$4];
            while (var$6 !== null && !(var$6.$origKeyHash == var$7 && ju_HashMap_areEqualKeys(var$3, var$6.$key))) {
                var$9 = var$6.$next2;
                var$5 = var$6;
                var$6 = var$9;
            }
        }
    }
    if (var$6 === null)
        var$6 = null;
    else {
        if (var$5 !== null)
            var$5.$next2 = var$6.$next2;
        else
            var$2.$elementData.data[var$4] = var$6.$next2;
        var$2.$modCount0 = var$2.$modCount0 + 1 | 0;
        var$2.$elementCount = var$2.$elementCount - 1 | 0;
    }
    var$8 = cgxgbtdt_TypedArrays_toByteArray(var$1.$data9);
    var$2 = $this.$val$fileHandle;
    var$3 = cgxgbt_TeaFiles_getFileDB(var$2.$teaFiles, var$2.$type0);
    var$6 = ji_ByteArrayOutputStream__init_0(jl_Math_max(512, jl_Math_min(4096, 8192)));
    var$5 = new cgxgbtf_FileDB$1;
    var$5.$this$013 = var$3;
    var$5.$val$buffer = var$6;
    var$5.$val$file = var$2;
    var$5.$val$append = 0;
    var$5.$val$bufferSize = 4096;
    b: {
        c: {
            try {
                cgxgbtf_FileDB$1_write(var$5, var$8);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof ji_IOException) {
                    var$1 = $$je;
                    break c;
                } else{
                    var$1 = $$je;
                    break b;
                }
            }
            cbgu_StreamUtils_closeQuietly(var$5);
            var$2 = $this.$val$listener0;
            if (var$2 !== null)
                var$2.$onSuccess($this.$val$path1, var$1);
            return;
        }
        try {
            var$2 = new cbgu_GdxRuntimeException;
            var$3 = jl_String_valueOf($this.$val$fileHandle);
            var$6 = jl_String_valueOf(cgxgbt_TeaFileHandle_type($this.$val$fileHandle));
            var$9 = jl_StringBuilder__init_();
            jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(517)), var$3), $rt_s(455)), var$6), 41);
            cbgu_GdxRuntimeException__init_(var$2, jl_StringBuilder_toString(var$9), var$1);
            $rt_throw(var$2);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$1 = $$je;

        }
    }
    cbgu_StreamUtils_closeQuietly(var$5);
    $rt_throw(var$1);
};
function jnc_CharsetDecoder() {
    let a = this; jl_Object.call(a);
    a.$charset0 = null;
    a.$averageCharsPerByte = 0.0;
    a.$maxCharsPerByte = 0.0;
    a.$replacement = null;
    a.$malformedAction = null;
    a.$unmappableAction0 = null;
    a.$state = 0;
}
let jnc_CharsetDecoder_onMalformedInput = ($this, $newAction) => {
    let var$2;
    if ($newAction !== null) {
        $this.$malformedAction = $newAction;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    jl_RuntimeException__init_(var$2, $rt_s(518));
    $rt_throw(var$2);
},
jnc_CharsetDecoder_onUnmappableCharacter = ($this, $newAction) => {
    let var$2;
    if ($newAction !== null) {
        $this.$unmappableAction0 = $newAction;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    jl_RuntimeException__init_(var$2, $rt_s(518));
    $rt_throw(var$2);
},
jnc_CharsetDecoder_decode = ($this, $in, $out, $endOfInput) => {
    let var$4, var$5, $result, $e, $$je;
    var$4 = $this.$state;
    if (!(var$4 == 2 && !$endOfInput) && var$4 != 3) {
        $this.$state = $endOfInput ? 2 : 1;
        var$5 = $this;
        while (true) {
            try {
                $result = jnci_BufferedDecoder_decodeLoop(var$5, $in, $out);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_RuntimeException) {
                    $e = $$je;
                    $rt_throw(jnc_CoderMalfunctionError__init_($e));
                } else {
                    throw $$e;
                }
            }
            if (jnc_CoderResult_isOverflow($result))
                return $result;
            if (jnc_CoderResult_isUnderflow($result)) {
                if ($endOfInput && jn_Buffer_hasRemaining($in)) {
                    if ($this.$malformedAction === jnc_CodingErrorAction_REPORT)
                        return jnc_CoderResult_malformedForLength(jn_Buffer_remaining($in));
                    if (jn_Buffer_remaining($out) <= $this.$replacement.$nativeString.length)
                        return jnc_CoderResult_OVERFLOW;
                    jn_Buffer_position($in, $in.$position0 + jn_Buffer_remaining($in) | 0);
                    if ($this.$malformedAction === jnc_CodingErrorAction_REPLACE)
                        jn_CharBuffer_put($out, $this.$replacement);
                }
                return $result;
            }
            if (jnc_CoderResult_isMalformed($result)) {
                $e = $this.$malformedAction;
                if ($e === jnc_CodingErrorAction_REPORT)
                    return $result;
                if ($e === jnc_CodingErrorAction_REPLACE) {
                    if (jn_Buffer_remaining($out) < $this.$replacement.$nativeString.length)
                        return jnc_CoderResult_OVERFLOW;
                    jn_CharBuffer_put($out, $this.$replacement);
                }
                jn_Buffer_position($in, $in.$position0 + jnc_CoderResult_length($result) | 0);
            } else if (jnc_CoderResult_isUnmappable($result)) {
                $e = $this.$unmappableAction0;
                if ($e === jnc_CodingErrorAction_REPORT)
                    break;
                if ($e === jnc_CodingErrorAction_REPLACE) {
                    if (jn_Buffer_remaining($out) < $this.$replacement.$nativeString.length)
                        return jnc_CoderResult_OVERFLOW;
                    jn_CharBuffer_put($out, $this.$replacement);
                }
                jn_Buffer_position($in, $in.$position0 + jnc_CoderResult_length($result) | 0);
            }
        }
        return $result;
    }
    $in = new jl_IllegalStateException;
    jl_Exception__init_($in);
    $rt_throw($in);
},
jnc_CharsetDecoder_decode0 = ($this, $in) => {
    let var$2, $out, $result, var$5;
    var$2 = $this.$state;
    if (var$2 && var$2 != 3) {
        $in = new jl_IllegalStateException;
        jl_Exception__init_($in);
        $rt_throw($in);
    }
    if (!jn_Buffer_remaining($in))
        return jn_CharBuffer_allocate(0);
    if ($this.$state)
        $this.$state = 0;
    $out = jn_CharBuffer_allocate(jl_Math_max(8, jn_Buffer_remaining($in) * $this.$averageCharsPerByte | 0));
    while (true) {
        $result = jnc_CharsetDecoder_decode($this, $in, $out, 0);
        if (jnc_CoderResult_isUnderflow($result))
            break;
        if (jnc_CoderResult_isOverflow($result))
            $out = jnc_CharsetDecoder_expand($this, $out);
        if (!jnc_CoderResult_isError($result))
            continue;
        jnc_CoderResult_throwException($result);
    }
    $in = jnc_CharsetDecoder_decode($this, $in, $out, 1);
    if (jnc_CoderResult_isError($in))
        jnc_CoderResult_throwException($in);
    while (true) {
        var$5 = $this.$state;
        if (var$5 != 3 && var$5 != 2) {
            $in = new jl_IllegalStateException;
            jl_Exception__init_($in);
            $rt_throw($in);
        }
        $this.$state = 3;
        if (jnc_CoderResult_isUnderflow(jnc_CoderResult_UNDERFLOW))
            break;
        $out = jnc_CharsetDecoder_expand($this, $out);
    }
    jn_Buffer_flip($out);
    return $out;
},
jnc_CharsetDecoder_expand = ($this, $buffer) => {
    let $array, $result;
    $array = jn_CharBuffer_array($buffer);
    $result = jn_CharBuffer_wrap(ju_Arrays_copyOf1($array, jl_Math_max(8, $array.data.length * 2 | 0)));
    jn_Buffer_position($result, $buffer.$position0);
    return $result;
};
function jnci_BufferedEncoder$Controller() {
    let a = this; jl_Object.call(a);
    a.$in = null;
    a.$out0 = null;
    a.$inPosition = 0;
    a.$outPosition0 = 0;
}
let jnci_BufferedEncoder$Controller_hasMoreOutput = ($this, $sz) => {
    return jn_Buffer_remaining($this.$out0) < $sz ? 0 : 1;
};
function jnci_BufferedDecoder() {
    let a = this; jnc_CharsetDecoder.call(a);
    a.$inArray = null;
    a.$outArray0 = null;
}
let jnci_BufferedDecoder_decodeLoop = ($this, $in, $out) => {
    let $inArray, $inPos, $inSize, $outArray, var$7, $i, var$9, $result, var$11, $outSize, $controller, $outPos, var$15;
    $inArray = $this.$inArray;
    $inPos = 0;
    $inSize = 0;
    $outArray = $this.$outArray0;
    var$7 = $this;
    a: {
        while (true) {
            if (($inPos + 32 | 0) > $inSize && jn_Buffer_hasRemaining($in)) {
                $i = $inPos;
                while ($i < $inSize) {
                    var$9 = $inArray.data;
                    var$9[$i - $inPos | 0] = var$9[$i];
                    $i = $i + 1 | 0;
                }
                var$9 = $inArray.data;
                $i = $inSize - $inPos | 0;
                $inSize = jl_Math_min(jn_Buffer_remaining($in) + $i | 0, var$9.length);
                jn_ByteBuffer_get($in, $inArray, $i, $inSize - $i | 0);
                $inPos = 0;
            }
            if (!jn_Buffer_hasRemaining($out)) {
                $result = !jn_Buffer_hasRemaining($in) && $inPos >= $inSize ? jnc_CoderResult_UNDERFLOW : jnc_CoderResult_OVERFLOW;
                break a;
            }
            var$9 = $outArray.data;
            $i = jn_Buffer_remaining($out);
            var$11 = var$9.length;
            $outSize = jl_Math_min($i, var$11);
            $controller = new jnci_BufferedDecoder$Controller;
            $controller.$in0 = $in;
            $controller.$out1 = $out;
            $result = jnci_UTF8Decoder_arrayDecode(var$7, $inArray, $inPos, $inSize, $outArray, 0, $outSize, $controller);
            $inPos = $controller.$inPosition0;
            if ($result === null && 0 == $controller.$outPosition)
                $result = jnc_CoderResult_UNDERFLOW;
            $i = $controller.$outPosition;
            if (jn_CharBufferImpl_isReadOnly($out)) {
                $in = new jn_ReadOnlyBufferException;
                jl_Exception__init_($in);
                $rt_throw($in);
            }
            if (jn_Buffer_remaining($out) < $i) {
                $in = new jn_BufferOverflowException;
                jl_Exception__init_($in);
                $rt_throw($in);
            }
            if ($i < 0)
                break;
            if ((0 + $i | 0) > var$11)
                break;
            $outPos = $out.$position0;
            $controller = $out;
            var$15 = new Uint16Array($outArray.data.buffer, 0, $i);
            $controller.$data1.set(var$15, $outPos);
            $out.$position0 = $out.$position0 + $i | 0;
            if ($result !== null)
                break a;
        }
        $in = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($in);
        $rt_throw($in);
    }
    jn_Buffer_position($in, $in.$position0 - ($inSize - $inPos | 0) | 0);
    return $result;
},
jnci_UTF8Decoder = $rt_classWithoutFields(jnci_BufferedDecoder),
jnci_UTF8Decoder_arrayDecode = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, $b, var$12, $b2, $b3, $c, $b4, $code;
    $result = null;
    a: {
        b: {
            c: {
                while ($inPos < $inSize) {
                    if ($outPos >= $outSize)
                        break a;
                    var$9 = $inArray.data;
                    var$10 = $inPos + 1 | 0;
                    $b = var$9[$inPos] & 255;
                    if (!($b & 128)) {
                        var$9 = $outArray.data;
                        var$12 = $outPos + 1 | 0;
                        var$9[$outPos] = $b & 65535;
                    } else if (($b & 224) == 192) {
                        if (var$10 >= $inSize) {
                            $inPos = var$10 + (-1) | 0;
                            if (jnci_BufferedDecoder$Controller_hasMoreInput($controller, 2))
                                break a;
                            $result = jnc_CoderResult_UNDERFLOW;
                            break a;
                        }
                        $inPos = var$10 + 1 | 0;
                        $b2 = var$9[var$10];
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b2)) {
                            $inPos = $inPos + (-2) | 0;
                            $result = jnc_CoderResult_malformedForLength(1);
                            break a;
                        }
                        var$9 = $outArray.data;
                        var$12 = $outPos + 1 | 0;
                        var$9[$outPos] = (($b & 31) << 6 | $b2 & 63) & 65535;
                        var$10 = $inPos;
                    } else if (($b & 240) == 224) {
                        if ((var$10 + 2 | 0) > $inSize) {
                            $inPos = var$10 + (-1) | 0;
                            if (jnci_BufferedDecoder$Controller_hasMoreInput($controller, 3))
                                break a;
                            $result = jnc_CoderResult_UNDERFLOW;
                            break a;
                        }
                        $inPos = var$10 + 1 | 0;
                        $b2 = var$9[var$10];
                        var$10 = $inPos + 1 | 0;
                        $b3 = var$9[$inPos];
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b2))
                            break b;
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b3))
                            break b;
                        $c = (($b & 15) << 12 | ($b2 & 63) << 6 | $b3 & 63) & 65535;
                        if (jl_Character_isSurrogate($c)) {
                            $inPos = var$10 + (-3) | 0;
                            $result = jnc_CoderResult_malformedForLength(3);
                            break a;
                        }
                        var$9 = $outArray.data;
                        var$12 = $outPos + 1 | 0;
                        var$9[$outPos] = $c;
                    } else {
                        if (($b & 248) != 240) {
                            $inPos = var$10 + (-1) | 0;
                            $result = jnc_CoderResult_malformedForLength(1);
                            break a;
                        }
                        if ((var$10 + 3 | 0) > $inSize) {
                            $inPos = var$10 + (-1) | 0;
                            if (jnci_BufferedDecoder$Controller_hasMoreInput($controller, 4))
                                break a;
                            $result = jnc_CoderResult_UNDERFLOW;
                            break a;
                        }
                        if (($outPos + 2 | 0) > $outSize) {
                            $inPos = var$10 + (-1) | 0;
                            if (jn_Buffer_remaining($controller.$out1) < 2 ? 0 : 1)
                                break a;
                            $result = jnc_CoderResult_OVERFLOW;
                            break a;
                        }
                        $inPos = var$10 + 1 | 0;
                        $b2 = var$9[var$10];
                        $b4 = $inPos + 1 | 0;
                        $b3 = var$9[$inPos];
                        var$10 = $b4 + 1 | 0;
                        $b4 = var$9[$b4];
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b2))
                            break c;
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b3))
                            break c;
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b4))
                            break c;
                        var$9 = $outArray.data;
                        $code = ($b & 7) << 18 | ($b2 & 63) << 12 | ($b3 & 63) << 6 | $b4 & 63;
                        $inPos = $outPos + 1 | 0;
                        var$9[$outPos] = jl_Character_highSurrogate($code);
                        var$12 = $inPos + 1 | 0;
                        var$9[$inPos] = jl_Character_lowSurrogate($code);
                    }
                    $inPos = var$10;
                    $outPos = var$12;
                }
                break a;
            }
            $inPos = var$10 + (-3) | 0;
            $result = jnc_CoderResult_malformedForLength(1);
            break a;
        }
        $inPos = var$10 + (-3) | 0;
        $result = jnc_CoderResult_malformedForLength(1);
    }
    $controller.$inPosition0 = $inPos;
    $controller.$outPosition = $outPos;
    return $result;
},
jnci_UTF8Decoder_checkMidByte = ($this, $b) => {
    return ($b & 192) != 128 ? 0 : 1;
};
function jnci_BufferedDecoder$Controller() {
    let a = this; jl_Object.call(a);
    a.$in0 = null;
    a.$out1 = null;
    a.$inPosition0 = 0;
    a.$outPosition = 0;
}
let jnci_BufferedDecoder$Controller_hasMoreInput = ($this, $sz) => {
    return jn_Buffer_remaining($this.$in0) < $sz ? 0 : 1;
};
function cgxgbtf_FileDB$1() {
    let a = this; ji_OutputStream.call(a);
    a.$val$buffer = null;
    a.$val$file = null;
    a.$val$append = 0;
    a.$val$bufferSize = 0;
    a.$this$013 = null;
}
let cgxgbtf_FileDB$1_write = ($this, $b) => {
    let var$2, var$3, var$4;
    var$2 = $b.data;
    var$3 = $this.$val$buffer;
    var$4 = var$2.length;
    ji_ByteArrayOutputStream_write(var$3, $b, 0, var$4);
},
cgxgbtf_FileDB$1_close = $this => {
    let $data, var$2, var$3, var$4, var$5, var$6;
    $data = ji_ByteArrayOutputStream_toByteArray($this.$val$buffer);
    var$2 = $data.data;
    var$3 = $this.$this$013;
    var$4 = $this.$val$file;
    var$5 = $this.$val$append;
    var$6 = jl_Math_max(var$2.length, $this.$val$bufferSize);
    cgxgbtf_MemoryFileStorage_writeInternal(var$3, var$4, $data, var$5, var$6);
};
$rt_packages([-1, "com", 0, "github", 1, "xpenatan", 2, "gdx", 3, "backends", 4, "teavm", 5, "filesystem", 6, "types", 0, "badlogic", 8, "gdx", 9, "utils", 10, "reflect", 9, "graphics", 12, "glutils", 12, "g2d", -1, "java", 15, "util", 16, "regex", 15, "nio", 18, "charset", 15, "lang", 20, "reflect", -1, "org", 22, "teavm", 23, "classlib", 24, "impl", 25, "unicode"
]);
$rt_metadata([jl_Object, "Object", 20, 0, [], 0, 3, 0, 0, ["$hashCode", $rt_wrapFunction0(jl_Object_hashCode), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString)],
cbgu_Pool$Poolable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbggg_GlyphLayout, 0, jl_Object, [cbgu_Pool$Poolable], 0, 3, 0, cbggg_GlyphLayout_$callClinit, 0,
cbggg_TextureRegion, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbggg_Sprite, 0, cbggg_TextureRegion, [], 0, 3, 0, 0, 0,
cbgu_Disposable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbggg_BitmapFont, 0, jl_Object, [cbgu_Disposable], 0, 3, 0, 0, 0,
cbggg_NinePatch, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgg_Color, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgg_GLTexture, 0, jl_Object, [cbgu_Disposable], 1, 3, 0, 0, 0,
cbgg_Texture, "Texture", 12, cbgg_GLTexture, [], 0, 3, 0, cbgg_Texture_$callClinit, ["$toString", $rt_wrapFunction0(cbgg_Texture_toString)],
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgu_Array, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
cbgu_Json, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgu_ObjectMap, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
cbgu_OrderedMap, 0, cbgu_ObjectMap, [], 0, 3, 0, 0, 0,
cbgu_Queue, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
cbgu_Predicate, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgg_VertexAttribute, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbg_Net, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgm_MapObject, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgggp_ResourceData$Configurable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgggp_ParticleEffect, 0, jl_Object, [cbgu_Disposable, cbgggp_ResourceData$Configurable], 0, 3, 0, 0, 0,
cbgu_Json$Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgggp_ParticleController, 0, jl_Object, [cbgu_Json$Serializable, cbgggp_ResourceData$Configurable], 0, 3, 0, 0, 0,
cbgggp_ResourceData, 0, jl_Object, [cbgu_Json$Serializable], 0, 3, 0, 0, 0,
cbgggp_ParallelArray, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgm_Interpolation, 0, jl_Object, [], 1, 3, 0, cbgm_Interpolation_$callClinit, 0,
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Class_toString)],
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_RuntimeException, "RuntimeException", 20, jl_Exception, [], 0, 3, 0, 0, 0,
jl_ClassCastException, "ClassCastException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String, "String", 20, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_String_toString), "$equals", $rt_wrapFunction1(jl_String_equals), "$hashCode", $rt_wrapFunction0(jl_String_hashCode)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$insert2", $rt_wrapFunction4(jl_StringBuilder_insert), "$append4", $rt_wrapFunction3(jl_StringBuilder_append4), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert1", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert1)],
otcir_FieldInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
otcir_MethodInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
otcir_ClassList, 0, jl_Object, [], 0, 3, 0, 0, 0,
dcgt_TeaVMLauncher, 0, jl_Object, [], 0, 3, 0, dcgt_TeaVMLauncher_$callClinit, 0]);
$rt_metadata([otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxgbt_TeaApplicationConfiguration, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbg_Application, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Runnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaApplication, 0, jl_Object, [cbg_Application, jl_Runnable], 0, 3, 0, 0, 0,
cbg_ApplicationListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbg_ApplicationAdapter, 0, jl_Object, [cbg_ApplicationListener], 1, 3, 0, 0, 0,
dcg_Main, 0, cbg_ApplicationAdapter, [], 0, 3, 0, 0, 0,
cbggg_GlyphLayout$GlyphRun, "GlyphLayout$GlyphRun", 14, jl_Object, [cbgu_Pool$Poolable], 0, 3, 0, 0, 0,
cbgu_Pools, 0, jl_Object, [], 0, 3, 0, cbgu_Pools_$callClinit, 0,
cbgu_IntArray, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
cbgm_Interpolation$1, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$2, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$3, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$4, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$Pow, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$PowIn, 0, cbgm_Interpolation$Pow, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$PowOut, 0, cbgm_Interpolation$Pow, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$5, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$6, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$7, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$8, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$9, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$10, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$11, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$Exp, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$ExpIn, 0, cbgm_Interpolation$Exp, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$ExpOut, 0, cbgm_Interpolation$Exp, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$12, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$13, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$14, 0, cbgm_Interpolation, [], 0, 0, 0, 0, 0,
cbgm_Interpolation$Elastic, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$ElasticIn, 0, cbgm_Interpolation$Elastic, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$ElasticOut, 0, cbgm_Interpolation$Elastic, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$Swing, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$SwingIn, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$SwingOut, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$BounceOut, 0, cbgm_Interpolation, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$Bounce, 0, cbgm_Interpolation$BounceOut, [], 0, 3, 0, 0, 0,
cbgm_Interpolation$BounceIn, 0, cbgm_Interpolation$BounceOut, [], 0, 3, 0, 0, 0,
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, 0, 0,
cgxgbtu_TeaBaseUrlProvider, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbtu_TeaDefaultBaseUrlProvider, 0, jl_Object, [cgxgbtu_TeaBaseUrlProvider], 0, 3, 0, 0, 0,
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Enum_toString)]]);
$rt_metadata([cgxgbt_TeaApplication$AppState, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cgxgbtd_WindowWrapper, 0, jl_Object, [], 3, 3, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjb_AnimationFrameCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbtdi_TeaWindow, 0, jl_Object, [cgxgbtd_WindowWrapper, otjb_AnimationFrameCallback], 0, 3, 0, cgxgbtdi_TeaWindow_$callClinit, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_IllegalArgumentException, "IllegalArgumentException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxgbta_TeaWebAgent, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbg_Graphics, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaGraphics, 0, jl_Object, [cbg_Graphics], 0, 3, 0, 0, 0,
cgxgbta_AssetDownloader, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbta_AssetDownloadImpl, 0, jl_Object, [cgxgbta_AssetDownloader], 0, 3, 0, 0, 0,
cgxgbta_AssetInstance, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxgbta_AssetLoader, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl, 0, jl_Object, [cgxgbta_AssetLoader], 0, 3, 0, 0, 0,
cgxjc_JMultiplatform, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxjc_JPlatformMap, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbg_Input, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbg_AbstractInput, 0, jl_Object, [cbg_Input], 1, 3, 0, 0, 0,
cgxgbtd_EventListenerWrapper, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbt_TeaInput, 0, cbg_AbstractInput, [cgxgbtd_EventListenerWrapper], 0, 3, 0, 0, 0,
cbg_Files, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaFiles, 0, jl_Object, [cbg_Files], 0, 3, 0, 0, 0,
cgxgbt_TeaNet, 0, jl_Object, [cbg_Net], 0, 3, 0, 0, 0,
cbg_ApplicationLogger, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaApplicationLogger, 0, jl_Object, [cbg_ApplicationLogger], 0, 3, 0, 0, 0,
cbgu_Clipboard, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaClipboard, 0, jl_Object, [cbgu_Clipboard], 0, 3, 0, 0, 0,
cbg_Gdx, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbg_Audio, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaAudio, 0, jl_Object, [cbg_Audio], 3, 3, 0, 0, 0,
cgxgbt_DefaultTeaAudio, 0, jl_Object, [cgxgbt_TeaAudio], 0, 3, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbt_TeaApplication$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, 0,
cgxgbt_TeaApplication$2, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 0, 0, 0, 0,
cgxgbt_TeaApplication$3, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, 0,
cbgu_Pool, 0, jl_Object, [], 1, 3, 0, 0, 0,
cbgu_ReflectionPool, 0, cbgu_Pool, [], 0, 3, 0, 0, 0,
jl_IndexOutOfBoundsException, "IndexOutOfBoundsException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
cbgu_ObjectSet, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
cgxgbtg_WebGLContextAttributesWrapper, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
cbgg_GL20, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbt_TeaGL20, "TeaGL20", 5, jl_Object, [cbgg_GL20], 0, 3, 0, 0, ["$glAttachShader", $rt_wrapFunction2(cgxgbt_TeaGL20_glAttachShader), "$glBindBuffer", $rt_wrapFunction2(cgxgbt_TeaGL20_glBindBuffer), "$glBindTexture", $rt_wrapFunction2(cgxgbt_TeaGL20_glBindTexture), "$glBlendFuncSeparate", $rt_wrapFunction4(cgxgbt_TeaGL20_glBlendFuncSeparate), "$glBufferData", $rt_wrapFunction4(cgxgbt_TeaGL20_glBufferData), "$glBufferSubData", $rt_wrapFunction4(cgxgbt_TeaGL20_glBufferSubData), "$glClear", $rt_wrapFunction1(cgxgbt_TeaGL20_glClear),
"$glClearColor", $rt_wrapFunction4(cgxgbt_TeaGL20_glClearColor), "$glCompileShader", $rt_wrapFunction1(cgxgbt_TeaGL20_glCompileShader), "$glCreateProgram", $rt_wrapFunction0(cgxgbt_TeaGL20_glCreateProgram), "$glCreateShader", $rt_wrapFunction1(cgxgbt_TeaGL20_glCreateShader), "$glDeleteProgram", $rt_wrapFunction1(cgxgbt_TeaGL20_glDeleteProgram), "$glDeleteShader", $rt_wrapFunction1(cgxgbt_TeaGL20_glDeleteShader), "$glDepthMask", $rt_wrapFunction1(cgxgbt_TeaGL20_glDepthMask), "$glDisable", $rt_wrapFunction1(cgxgbt_TeaGL20_glDisable),
"$glDisableVertexAttribArray", $rt_wrapFunction1(cgxgbt_TeaGL20_glDisableVertexAttribArray), "$glDrawArrays", $rt_wrapFunction3(cgxgbt_TeaGL20_glDrawArrays), "$glDrawElements", $rt_wrapFunction4(cgxgbt_TeaGL20_glDrawElements), "$glDrawElements0", $rt_wrapFunction4(cgxgbt_TeaGL20_glDrawElements0), "$glEnable", $rt_wrapFunction1(cgxgbt_TeaGL20_glEnable), "$glEnableVertexAttribArray", $rt_wrapFunction1(cgxgbt_TeaGL20_glEnableVertexAttribArray), "$glGenerateMipmap", $rt_wrapFunction1(cgxgbt_TeaGL20_glGenerateMipmap),
"$glGetActiveAttrib", $rt_wrapFunction4(cgxgbt_TeaGL20_glGetActiveAttrib), "$glGetActiveUniform", $rt_wrapFunction4(cgxgbt_TeaGL20_glGetActiveUniform), "$glGetAttribLocation", $rt_wrapFunction2(cgxgbt_TeaGL20_glGetAttribLocation), "$glGetFloatv", $rt_wrapFunction2(cgxgbt_TeaGL20_glGetFloatv), "$glGetProgramInfoLog", $rt_wrapFunction1(cgxgbt_TeaGL20_glGetProgramInfoLog), "$glGetProgramiv", $rt_wrapFunction3(cgxgbt_TeaGL20_glGetProgramiv), "$glGetShaderInfoLog", $rt_wrapFunction1(cgxgbt_TeaGL20_glGetShaderInfoLog),
"$glGetShaderiv", $rt_wrapFunction3(cgxgbt_TeaGL20_glGetShaderiv), "$glGetString", $rt_wrapFunction1(cgxgbt_TeaGL20_glGetString), "$glGetUniformLocation", $rt_wrapFunction2(cgxgbt_TeaGL20_glGetUniformLocation), "$glLinkProgram", $rt_wrapFunction1(cgxgbt_TeaGL20_glLinkProgram), "$glPixelStorei", $rt_wrapFunction2(cgxgbt_TeaGL20_glPixelStorei), "$glShaderSource", $rt_wrapFunction2(cgxgbt_TeaGL20_glShaderSource), "$glTexImage2D", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { cgxgbt_TeaGL20_glTexImage2D(this,
var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$glTexParameterf", $rt_wrapFunction3(cgxgbt_TeaGL20_glTexParameterf), "$glTexParameteri", $rt_wrapFunction3(cgxgbt_TeaGL20_glTexParameteri), "$glUniform1i", $rt_wrapFunction2(cgxgbt_TeaGL20_glUniform1i), "$glUseProgram", $rt_wrapFunction1(cgxgbt_TeaGL20_glUseProgram), "$glVertexAttribPointer", function(var_1, var_2, var_3, var_4, var_5, var_6) { cgxgbt_TeaGL20_glVertexAttribPointer(this, var_1, var_2, var_3, var_4, var_5, var_6); }, "$glViewport",
$rt_wrapFunction4(cgxgbt_TeaGL20_glViewport)],
cbgg_GL30, 0, jl_Object, [cbgg_GL20], 3, 3, 0, 0, 0,
cgxgbt_TeaGL30, "TeaGL30", 5, cgxgbt_TeaGL20, [cbgg_GL30], 0, 3, 0, 0, ["$glBindVertexArray", $rt_wrapFunction1(cgxgbt_TeaGL30_glBindVertexArray), "$glDeleteVertexArrays", $rt_wrapFunction2(cgxgbt_TeaGL30_glDeleteVertexArrays), "$glDrawArraysInstanced", $rt_wrapFunction4(cgxgbt_TeaGL30_glDrawArraysInstanced), "$glDrawElementsInstanced", function(var_1, var_2, var_3, var_4, var_5) { cgxgbt_TeaGL30_glDrawElementsInstanced(this, var_1, var_2, var_3, var_4, var_5); }, "$glGenVertexArrays", $rt_wrapFunction2(cgxgbt_TeaGL30_glGenVertexArrays),
"$glGetFloatv", $rt_wrapFunction2(cgxgbt_TeaGL30_glGetFloatv)],
cgxgbt_TeaGL30Debug, "TeaGL30Debug", 5, cgxgbt_TeaGL30, [], 0, 3, 0, 0, ["$glBindVertexArray", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glBindVertexArray), "$glDeleteVertexArrays", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glDeleteVertexArrays), "$glDrawArraysInstanced", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glDrawArraysInstanced), "$glDrawElementsInstanced", function(var_1, var_2, var_3, var_4, var_5) { cgxgbt_TeaGL30Debug_glDrawElementsInstanced(this, var_1, var_2, var_3, var_4, var_5); }, "$glGenVertexArrays", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glGenVertexArrays),
"$glBindTexture", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glBindTexture), "$glClear", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glClear), "$glClearColor", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glClearColor), "$glDepthMask", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glDepthMask), "$glDisable", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glDisable), "$glDrawArrays", $rt_wrapFunction3(cgxgbt_TeaGL30Debug_glDrawArrays), "$glDrawElements", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glDrawElements0), "$glEnable", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glEnable),
"$glGetString", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glGetString), "$glPixelStorei", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glPixelStorei), "$glTexImage2D", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { cgxgbt_TeaGL30Debug_glTexImage2D(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$glTexParameterf", $rt_wrapFunction3(cgxgbt_TeaGL30Debug_glTexParameterf), "$glViewport", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glViewport), "$glAttachShader", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glAttachShader),
"$glBindBuffer", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glBindBuffer), "$glBlendFuncSeparate", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glBlendFuncSeparate), "$glBufferData", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glBufferData), "$glBufferSubData", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glBufferSubData), "$glCompileShader", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glCompileShader), "$glCreateProgram", $rt_wrapFunction0(cgxgbt_TeaGL30Debug_glCreateProgram), "$glCreateShader", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glCreateShader),
"$glDeleteProgram", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glDeleteProgram), "$glDeleteShader", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glDeleteShader), "$glDisableVertexAttribArray", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glDisableVertexAttribArray), "$glDrawElements0", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glDrawElements), "$glEnableVertexAttribArray", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glEnableVertexAttribArray), "$glGenerateMipmap", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glGenerateMipmap), "$glGetActiveAttrib",
$rt_wrapFunction4(cgxgbt_TeaGL30Debug_glGetActiveAttrib), "$glGetActiveUniform", $rt_wrapFunction4(cgxgbt_TeaGL30Debug_glGetActiveUniform), "$glGetAttribLocation", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glGetAttribLocation), "$glGetFloatv", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glGetFloatv), "$glGetProgramiv", $rt_wrapFunction3(cgxgbt_TeaGL30Debug_glGetProgramiv), "$glGetProgramInfoLog", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glGetProgramInfoLog), "$glGetShaderiv", $rt_wrapFunction3(cgxgbt_TeaGL30Debug_glGetShaderiv),
"$glGetShaderInfoLog", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glGetShaderInfoLog), "$glGetUniformLocation", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glGetUniformLocation), "$glLinkProgram", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glLinkProgram), "$glShaderSource", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glShaderSource), "$glTexParameteri", $rt_wrapFunction3(cgxgbt_TeaGL30Debug_glTexParameteri), "$glUniform1i", $rt_wrapFunction2(cgxgbt_TeaGL30Debug_glUniform1i), "$glUseProgram", $rt_wrapFunction1(cgxgbt_TeaGL30Debug_glUseProgram),
"$glVertexAttribPointer", function(var_1, var_2, var_3, var_4, var_5, var_6) { cgxgbt_TeaGL30Debug_glVertexAttribPointer(this, var_1, var_2, var_3, var_4, var_5, var_6); }]]);
$rt_metadata([cbggg_GLVersion, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbg_Application$ApplicationType, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cgxgbt_TeaGraphics$FullscreenChanged, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbt_TeaGraphics$1, 0, jl_Object, [cgxgbt_TeaGraphics$FullscreenChanged], 0, 0, 0, 0, 0,
cgxgbt_TeaGL20Debug, "TeaGL20Debug", 5, cgxgbt_TeaGL20, [], 0, 3, 0, 0, ["$glBindTexture", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glBindTexture), "$glClear", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glClear), "$glClearColor", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glClearColor), "$glDepthMask", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glDepthMask), "$glDisable", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glDisable), "$glDrawArrays", $rt_wrapFunction3(cgxgbt_TeaGL20Debug_glDrawArrays), "$glDrawElements", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glDrawElements0),
"$glEnable", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glEnable), "$glGetString", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glGetString), "$glPixelStorei", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glPixelStorei), "$glTexImage2D", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { cgxgbt_TeaGL20Debug_glTexImage2D(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$glTexParameterf", $rt_wrapFunction3(cgxgbt_TeaGL20Debug_glTexParameterf), "$glViewport", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glViewport),
"$glAttachShader", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glAttachShader), "$glBindBuffer", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glBindBuffer), "$glBlendFuncSeparate", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glBlendFuncSeparate), "$glBufferData", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glBufferData), "$glBufferSubData", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glBufferSubData), "$glCompileShader", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glCompileShader), "$glCreateProgram", $rt_wrapFunction0(cgxgbt_TeaGL20Debug_glCreateProgram),
"$glCreateShader", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glCreateShader), "$glDeleteProgram", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glDeleteProgram), "$glDeleteShader", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glDeleteShader), "$glDisableVertexAttribArray", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glDisableVertexAttribArray), "$glDrawElements0", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glDrawElements), "$glEnableVertexAttribArray", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glEnableVertexAttribArray), "$glGenerateMipmap",
$rt_wrapFunction1(cgxgbt_TeaGL20Debug_glGenerateMipmap), "$glGetActiveAttrib", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glGetActiveAttrib), "$glGetActiveUniform", $rt_wrapFunction4(cgxgbt_TeaGL20Debug_glGetActiveUniform), "$glGetAttribLocation", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glGetAttribLocation), "$glGetFloatv", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glGetFloatv), "$glGetProgramiv", $rt_wrapFunction3(cgxgbt_TeaGL20Debug_glGetProgramiv), "$glGetProgramInfoLog", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glGetProgramInfoLog),
"$glGetShaderiv", $rt_wrapFunction3(cgxgbt_TeaGL20Debug_glGetShaderiv), "$glGetShaderInfoLog", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glGetShaderInfoLog), "$glGetUniformLocation", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glGetUniformLocation), "$glLinkProgram", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glLinkProgram), "$glShaderSource", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glShaderSource), "$glTexParameteri", $rt_wrapFunction3(cgxgbt_TeaGL20Debug_glTexParameteri), "$glUniform1i", $rt_wrapFunction2(cgxgbt_TeaGL20Debug_glUniform1i),
"$glUseProgram", $rt_wrapFunction1(cgxgbt_TeaGL20Debug_glUseProgram), "$glVertexAttribPointer", function(var_1, var_2, var_3, var_4, var_5, var_6) { cgxgbt_TeaGL20Debug_glVertexAttribPointer(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, 0,
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, 0,
ju_HashSet, 0, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
cbgu_IntMap, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
cbgu_IntSet, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxgbtf_FileDB, 0, jl_Object, [], 1, 3, 0, 0, 0,
cgxgbtf_MemoryFileStorage, 0, cgxgbtf_FileDB, [], 0, 3, 0, 0, ["$putFile", $rt_wrapFunction2(cgxgbtf_MemoryFileStorage_putFile), "$removeFile", $rt_wrapFunction1(cgxgbtf_MemoryFileStorage_removeFile)],
cgxgbtft_InternalStorage, "InternalStorage", 7, cgxgbtf_MemoryFileStorage, [], 0, 3, [0,0,0], 0, 0,
cgxgbtft_ClasspathStorage, "ClasspathStorage", 7, cgxgbtf_MemoryFileStorage, [], 0, 3, [0,0,0], 0, 0,
cgxgbtft_LocalDBStorage, "LocalDBStorage", 7, cgxgbtf_MemoryFileStorage, [], 0, 3, [0,0,0], 0, ["$putFile", $rt_wrapFunction2(cgxgbtft_LocalDBStorage_putFile), "$removeFile", $rt_wrapFunction1(cgxgbtft_LocalDBStorage_removeFile)],
cgxgbt_TeaPermissions$TeaPermissionResult, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbt_TeaClipboard$ClipboardWriteHandler, 0, jl_Object, [cgxgbt_TeaPermissions$TeaPermissionResult], 0, 0, 0, 0, 0,
cgxgbt_TeaClipboard$_init_$lambda$_0_0, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 3, 0, 0, 0,
cgxgbt_TeaClipboard$_init_$lambda$_0_1, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 3, 0, 0, 0,
cgxgbt_TeaClipboard$_init_$lambda$_0_2, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 3, 0, 0, 0,
cgxgbta_AssetLoaderListener, 0, jl_Object, [], 3, 3, 0, 0, ["$onProgress", $rt_wrapFunction2(cgxgbta_AssetLoaderListener_onProgress)],
cgxgbt_TeaApplication$4, 0, jl_Object, [cgxgbta_AssetLoaderListener], 0, 0, 0, 0, ["$onProgress", $rt_wrapFunction2(cgxgbta_AssetLoaderListener_onProgress)],
cgxgbt_TeaApplication$5, 0, jl_Object, [cgxgbta_AssetLoaderListener], 0, 0, 0, 0, ["$onProgress", $rt_wrapFunction2(cgxgbta_AssetLoaderListener_onProgress)],
cbg_LifecycleListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbtwh_HowlerAudioManager, 0, jl_Object, [cbg_LifecycleListener], 0, 3, 0, 0, 0,
cbgm_MathUtils, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_Dictionary, 0, jl_Object, [], 1, 3, 0, 0, 0,
ju_Hashtable, 0, ju_Dictionary, [ju_Map, jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
ju_Properties, 0, ju_Hashtable, [], 0, 3, 0, 0, 0,
cgxgbt_TeaGL20$CustomIntMap, 0, jl_Object, [otj_JSObject], 0, 0, 0, 0, 0,
cbggg_GLVersion$Type, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$1, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 0, 0, 0, 0,
cgxgbta_AssetLoadImpl$2, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 0, 0, 0, 0,
cgxgbta_AssetLoadImpl$3, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 0, 0, 0, 0,
cbgur_ClassReflection, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbgur_Constructor, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbgur_ReflectionException, "ReflectionException", 11, jl_Exception, [], 0, 3, 0, 0, 0,
jur_Pattern, 0, jl_Object, [ji_Serializable], 4, 3, 0, 0, 0,
jur_MatchResult, 0, jl_Object, [], 3, 3, 0, 0, 0,
jur_Matcher, 0, jl_Object, [jur_MatchResult], 4, 3, 0, 0, 0,
otji_IDBFactory, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
otji_EventHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_1, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_2, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
jl_SecurityException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_ReflectiveOperationException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jl_NoSuchMethodException, "NoSuchMethodException", 20, jl_ReflectiveOperationException, [], 0, 3, 0, 0, 0]);
$rt_metadata([jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, 0,
cbgm_RandomXS128, 0, ju_Random, [], 0, 3, 0, 0, 0,
ju_Enumeration, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Hashtable$1, 0, jl_Object, [ju_Enumeration], 0, 0, 0, 0, 0,
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Hashtable$2, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
jur_MatchResultImpl, 0, jl_Object, [jur_MatchResult], 0, 0, 0, 0, 0,
jl_NumberFormatException, "NumberFormatException", 20, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
jl_IllegalStateException, "IllegalStateException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jlr_Modifier, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
jlr_AccessibleObject, 0, jl_Object, [jlr_AnnotatedElement], 0, 3, 0, 0, 0,
jl_NullPointerException, "NullPointerException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_AbstractSet, 0, jl_Object, [], 1, 0, 0, 0, ["$find0", $rt_wrapFunction3(jur_AbstractSet_find), "$findBack", $rt_wrapFunction4(jur_AbstractSet_findBack), "$getType0", $rt_wrapFunction0(jur_AbstractSet_getType), "$toString", $rt_wrapFunction0(jur_AbstractSet_toString), "$setNext", $rt_wrapFunction1(jur_AbstractSet_setNext), "$first", $rt_wrapFunction1(jur_AbstractSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_AbstractSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_AbstractSet_processSecondPass)],
jlr_Member, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Constructor, "Constructor", 21, jlr_AccessibleObject, [jlr_Member], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jlr_Constructor_toString)],
otcir_MethodCaller, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, 0,
ju_Hashtable$Entry, 0, ju_MapEntry, [], 0, 0, 0, 0, 0,
jur_FSet, "FSet", 17, jur_AbstractSet, [], 0, 0, 0, jur_FSet_$callClinit, ["$matches", $rt_wrapFunction3(jur_FSet_matches), "$getName", $rt_wrapFunction0(jur_FSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_FSet_hasConsumed)],
jur_Lexer, 0, jl_Object, [], 0, 0, 0, 0, 0,
jur_PatternSyntaxException, "PatternSyntaxException", 17, jl_IllegalArgumentException, [], 0, 3, 0, 0, ["$getMessage", $rt_wrapFunction0(jur_PatternSyntaxException_getMessage)],
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_CloneNotSupportedException, "CloneNotSupportedException", 20, jl_Exception, [], 0, 3, 0, 0, 0,
otcir_MethodCaller$forJs$lambda$_1_0, 0, jl_Object, [otcir_MethodCaller], 0, 3, 0, 0, 0,
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, 0,
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, 0,
jur_NonCapFSet, "NonCapFSet", 17, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NonCapFSet_matches), "$getName", $rt_wrapFunction0(jur_NonCapFSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_NonCapFSet_hasConsumed)],
jur_AheadFSet, "AheadFSet", 17, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AheadFSet_matches), "$getName", $rt_wrapFunction0(jur_AheadFSet_getName)],
jur_BehindFSet, "BehindFSet", 17, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_BehindFSet_matches), "$getName", $rt_wrapFunction0(jur_BehindFSet_getName)],
jur_AtomicFSet, "AtomicFSet", 17, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AtomicFSet_matches), "$getName", $rt_wrapFunction0(jur_AtomicFSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_AtomicFSet_hasConsumed)],
jur_FinalSet, "FinalSet", 17, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FinalSet_matches), "$getName", $rt_wrapFunction0(jur_FinalSet_getName)],
jur_LeafSet, 0, jur_AbstractSet, [], 1, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_LeafSet_matches), "$charCount", $rt_wrapFunction0(jur_LeafSet_charCount), "$hasConsumed", $rt_wrapFunction1(jur_LeafSet_hasConsumed)],
jur_EmptySet, "EmptySet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_EmptySet_accepts), "$find0", $rt_wrapFunction3(jur_EmptySet_find), "$findBack", $rt_wrapFunction4(jur_EmptySet_findBack), "$getName", $rt_wrapFunction0(jur_EmptySet_getName), "$hasConsumed", $rt_wrapFunction1(jur_EmptySet_hasConsumed)],
jur_JointSet, "JointSet", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_JointSet_matches), "$setNext", $rt_wrapFunction1(jur_JointSet_setNext), "$getName", $rt_wrapFunction0(jur_JointSet_getName), "$first", $rt_wrapFunction1(jur_JointSet_first), "$hasConsumed", $rt_wrapFunction1(jur_JointSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_JointSet_processSecondPass)],
jur_NonCapJointSet, "NonCapJointSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NonCapJointSet_matches), "$getName", $rt_wrapFunction0(jur_NonCapJointSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_NonCapJointSet_hasConsumed)],
jur_AtomicJointSet, "AtomicJointSet", 17, jur_NonCapJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AtomicJointSet_matches), "$setNext", $rt_wrapFunction1(jur_AtomicJointSet_setNext), "$getName", $rt_wrapFunction0(jur_AtomicJointSet_getName)],
jur_PositiveLookAhead, "PositiveLookAhead", 17, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PositiveLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookAhead_hasConsumed), "$getName", $rt_wrapFunction0(jur_PositiveLookAhead_getName)],
jur_NegativeLookAhead, "NegativeLookAhead", 17, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NegativeLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookAhead_hasConsumed), "$getName", $rt_wrapFunction0(jur_NegativeLookAhead_getName)],
jur_PositiveLookBehind, "PositiveLookBehind", 17, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PositiveLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookBehind_hasConsumed), "$getName", $rt_wrapFunction0(jur_PositiveLookBehind_getName)],
jur_NegativeLookBehind, "NegativeLookBehind", 17, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NegativeLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookBehind_hasConsumed), "$getName", $rt_wrapFunction0(jur_NegativeLookBehind_getName)],
jur_SingleSet, "SingleSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SingleSet_matches), "$find0", $rt_wrapFunction3(jur_SingleSet_find), "$findBack", $rt_wrapFunction4(jur_SingleSet_findBack), "$first", $rt_wrapFunction1(jur_SingleSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_SingleSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_SingleSet_processSecondPass)],
jl_NegativeArraySizeException, "NegativeArraySizeException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_ArrayStoreException, "ArrayStoreException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_SpecialToken, 0, jl_Object, [], 1, 0, 0, 0, 0]);
$rt_metadata([jur_AbstractCharClass, 0, jur_SpecialToken, [], 1, 0, 0, 0, ["$getBits", $rt_wrapFunction0(jur_AbstractCharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getLowHighSurrogates), "$getInstance0", $rt_wrapFunction0(jur_AbstractCharClass_getInstance), "$hasUCI", $rt_wrapFunction0(jur_AbstractCharClass_hasUCI)],
ju_MissingResourceException, "MissingResourceException", 16, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_CharClass, "CharClass", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass_contains), "$getBits", $rt_wrapFunction0(jur_CharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_CharClass_getLowHighSurrogates), "$getInstance0", $rt_wrapFunction0(jur_CharClass_getInstance), "$toString", $rt_wrapFunction0(jur_CharClass_toString), "$hasUCI", $rt_wrapFunction0(jur_CharClass_hasUCI)],
jur_QuantifierSet, 0, jur_AbstractSet, [], 1, 0, 0, 0, ["$first", $rt_wrapFunction1(jur_QuantifierSet_first), "$hasConsumed", $rt_wrapFunction1(jur_QuantifierSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_QuantifierSet_processSecondPass)],
jur_LeafQuantifierSet, "LeafQuantifierSet", 17, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_LeafQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_LeafQuantifierSet_getName)],
jur_CompositeQuantifierSet, "CompositeQuantifierSet", 17, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_CompositeQuantifierSet_getName)],
jur_GroupQuantifierSet, "GroupQuantifierSet", 17, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_GroupQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_GroupQuantifierSet_getName)],
jur_AltQuantifierSet, "AltQuantifierSet", 17, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AltQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltQuantifierSet_setNext)],
jur_UnifiedQuantifierSet, "UnifiedQuantifierSet", 17, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UnifiedQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_UnifiedQuantifierSet_find)],
jur_AbstractCharClass$PredefinedCharacterClasses, 0, jl_Object, [], 4, 0, 0, 0, 0,
jur_AbstractCharClass$LazyCharClass, 0, jl_Object, [], 1, 0, 0, 0, 0,
jur_Quantifier, "Quantifier", 17, jur_SpecialToken, [jl_Cloneable], 0, 0, 0, 0, ["$toString", $rt_wrapFunction0(jur_Quantifier_toString)],
jur_FSet$PossessiveFSet, "FSet$PossessiveFSet", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FSet$PossessiveFSet_matches), "$getName", $rt_wrapFunction0(jur_FSet$PossessiveFSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_FSet$PossessiveFSet_hasConsumed)],
ju_BitSet, 0, jl_Object, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
jur_LowHighSurrogateRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$getName", $rt_wrapFunction0(jur_LowHighSurrogateRangeSet_getName)],
jur_CompositeRangeSet, "CompositeRangeSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeRangeSet_matches), "$setNext", $rt_wrapFunction1(jur_CompositeRangeSet_setNext), "$getName", $rt_wrapFunction0(jur_CompositeRangeSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_CompositeRangeSet_hasConsumed), "$first", $rt_wrapFunction1(jur_CompositeRangeSet_first)],
jur_SupplRangeSet, "SupplRangeSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SupplRangeSet_matches), "$getName", $rt_wrapFunction0(jur_SupplRangeSet_getName), "$contains", $rt_wrapFunction1(jur_SupplRangeSet_contains), "$first", $rt_wrapFunction1(jur_SupplRangeSet_first), "$setNext", $rt_wrapFunction1(jur_SupplRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_SupplRangeSet_hasConsumed)],
jur_UCISupplRangeSet, "UCISupplRangeSet", 17, jur_SupplRangeSet, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UCISupplRangeSet_contains), "$getName", $rt_wrapFunction0(jur_UCISupplRangeSet_getName)],
jur_UCIRangeSet, "UCIRangeSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCIRangeSet_accepts), "$getName", $rt_wrapFunction0(jur_UCIRangeSet_getName)],
jur_RangeSet, "RangeSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_RangeSet_accepts), "$getName", $rt_wrapFunction0(jur_RangeSet_getName), "$first", $rt_wrapFunction1(jur_RangeSet_first)],
jur_HangulDecomposedCharSet, "HangulDecomposedCharSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_HangulDecomposedCharSet_setNext), "$getName", $rt_wrapFunction0(jur_HangulDecomposedCharSet_getName), "$matches", $rt_wrapFunction3(jur_HangulDecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_HangulDecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HangulDecomposedCharSet_hasConsumed)],
jur_CharSet, "CharSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$charCount", $rt_wrapFunction0(jur_CharSet_charCount), "$accepts", $rt_wrapFunction2(jur_CharSet_accepts), "$find0", $rt_wrapFunction3(jur_CharSet_find), "$findBack", $rt_wrapFunction4(jur_CharSet_findBack), "$getName", $rt_wrapFunction0(jur_CharSet_getName), "$first", $rt_wrapFunction1(jur_CharSet_first)],
jur_UCICharSet, "UCICharSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCICharSet_accepts), "$getName", $rt_wrapFunction0(jur_UCICharSet_getName)],
jur_CICharSet, "CICharSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_CICharSet_accepts), "$getName", $rt_wrapFunction0(jur_CICharSet_getName)],
jur_DecomposedCharSet, "DecomposedCharSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_DecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_DecomposedCharSet_matches), "$getName", $rt_wrapFunction0(jur_DecomposedCharSet_getName), "$first", $rt_wrapFunction1(jur_DecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_DecomposedCharSet_hasConsumed)],
jur_UCIDecomposedCharSet, "UCIDecomposedCharSet", 17, jur_DecomposedCharSet, [], 0, 0, 0, 0, 0,
jur_CIDecomposedCharSet, "CIDecomposedCharSet", 17, jur_DecomposedCharSet, [], 0, 0, 0, 0, 0,
jur_PossessiveGroupQuantifierSet, "PossessiveGroupQuantifierSet", 17, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet_matches)],
jur_PosPlusGroupQuantifierSet, "PosPlusGroupQuantifierSet", 17, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet_matches)],
jur_AltGroupQuantifierSet, "AltGroupQuantifierSet", 17, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltGroupQuantifierSet_setNext)],
jur_PosAltGroupQuantifierSet, "PosAltGroupQuantifierSet", 17, jur_AltGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_PosAltGroupQuantifierSet_setNext)],
jur_CompositeGroupQuantifierSet, "CompositeGroupQuantifierSet", 17, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeGroupQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_CompositeGroupQuantifierSet_getName)],
jur_PosCompositeGroupQuantifierSet, "PosCompositeGroupQuantifierSet", 17, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosCompositeGroupQuantifierSet_matches)],
jur_ReluctantGroupQuantifierSet, "ReluctantGroupQuantifierSet", 17, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet_matches)],
jur_RelAltGroupQuantifierSet, "RelAltGroupQuantifierSet", 17, jur_AltGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet_matches)],
jur_RelCompositeGroupQuantifierSet, "RelCompositeGroupQuantifierSet", 17, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_RelCompositeGroupQuantifierSet_matches)],
jur_DotAllQuantifierSet, "DotAllQuantifierSet", 17, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotAllQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_DotAllQuantifierSet_find), "$getName", $rt_wrapFunction0(jur_DotAllQuantifierSet_getName)],
jur_DotQuantifierSet, "DotQuantifierSet", 17, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_DotQuantifierSet_find), "$getName", $rt_wrapFunction0(jur_DotQuantifierSet_getName)],
jur_AbstractLineTerminator, 0, jl_Object, [], 1, 0, 0, 0, 0,
jur_PossessiveQuantifierSet, "PossessiveQuantifierSet", 17, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveQuantifierSet_matches)],
jur_PossessiveAltQuantifierSet, "PossessiveAltQuantifierSet", 17, jur_AltQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet_matches)],
jur_PossessiveCompositeQuantifierSet, "PossessiveCompositeQuantifierSet", 17, jur_CompositeQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveCompositeQuantifierSet_matches)],
jur_ReluctantQuantifierSet, "ReluctantQuantifierSet", 17, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantQuantifierSet_matches)],
jur_ReluctantAltQuantifierSet, "ReluctantAltQuantifierSet", 17, jur_AltQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet_matches)],
jur_ReluctantCompositeQuantifierSet, "ReluctantCompositeQuantifierSet", 17, jur_CompositeQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantCompositeQuantifierSet_matches)],
jur_SOLSet, "SOLSet", 17, jur_AbstractSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_SOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_SOLSet_getName)],
jur_WordBoundary, "WordBoundary", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_WordBoundary_matches), "$hasConsumed", $rt_wrapFunction1(jur_WordBoundary_hasConsumed), "$getName", $rt_wrapFunction0(jur_WordBoundary_getName)],
jur_PreviousMatch, "PreviousMatch", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PreviousMatch_matches), "$hasConsumed", $rt_wrapFunction1(jur_PreviousMatch_hasConsumed), "$getName", $rt_wrapFunction0(jur_PreviousMatch_getName)],
jur_EOLSet, "EOLSet", 17, jur_AbstractSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_EOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_EOLSet_getName)],
jur_EOISet, "EOISet", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_EOISet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOISet_hasConsumed), "$getName", $rt_wrapFunction0(jur_EOISet_getName)]]);
$rt_metadata([jur_MultiLineSOLSet, "MultiLineSOLSet", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_MultiLineSOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineSOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_MultiLineSOLSet_getName)],
jur_DotAllSet, "DotAllSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotAllSet_matches), "$getName", $rt_wrapFunction0(jur_DotAllSet_getName), "$setNext", $rt_wrapFunction1(jur_DotAllSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotAllSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotAllSet_hasConsumed)],
jur_DotSet, "DotSet", 17, jur_JointSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotSet_matches), "$getName", $rt_wrapFunction0(jur_DotSet_getName), "$setNext", $rt_wrapFunction1(jur_DotSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotSet_hasConsumed)],
jur_UEOLSet, "UEOLSet", 17, jur_AbstractSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UEOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_UEOLSet_getName)],
jur_UMultiLineEOLSet, "UMultiLineEOLSet", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UMultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UMultiLineEOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_UMultiLineEOLSet_getName)],
jur_MultiLineEOLSet, "MultiLineEOLSet", 17, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_MultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineEOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_MultiLineEOLSet_getName)],
jur_CIBackReferenceSet, "CIBackReferenceSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CIBackReferenceSet_matches), "$setNext", $rt_wrapFunction1(jur_CIBackReferenceSet_setNext), "$getName", $rt_wrapFunction0(jur_CIBackReferenceSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_CIBackReferenceSet_hasConsumed)],
jur_BackReferenceSet, "BackReferenceSet", 17, jur_CIBackReferenceSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_BackReferenceSet_matches), "$find0", $rt_wrapFunction3(jur_BackReferenceSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferenceSet_findBack), "$first", $rt_wrapFunction1(jur_BackReferenceSet_first), "$getName", $rt_wrapFunction0(jur_BackReferenceSet_getName)],
jur_UCIBackReferenceSet, "UCIBackReferenceSet", 17, jur_CIBackReferenceSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UCIBackReferenceSet_matches), "$getName", $rt_wrapFunction0(jur_UCIBackReferenceSet_getName)],
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$insert2", $rt_wrapFunction4(jl_StringBuffer_insert0), "$append4", $rt_wrapFunction3(jl_StringBuffer_append0), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert1", $rt_wrapFunction2(jl_StringBuffer_insert1), "$insert", $rt_wrapFunction2(jl_StringBuffer_insert)],
jur_SequenceSet, "SequenceSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_SequenceSet_accepts), "$find0", $rt_wrapFunction3(jur_SequenceSet_find), "$findBack", $rt_wrapFunction4(jur_SequenceSet_findBack), "$getName", $rt_wrapFunction0(jur_SequenceSet_getName), "$first", $rt_wrapFunction1(jur_SequenceSet_first)],
jur_UCISequenceSet, "UCISequenceSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCISequenceSet_accepts), "$getName", $rt_wrapFunction0(jur_UCISequenceSet_getName)],
jur_CISequenceSet, "CISequenceSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_CISequenceSet_accepts), "$getName", $rt_wrapFunction0(jur_CISequenceSet_getName)],
jur_UCISupplCharSet, "UCISupplCharSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCISupplCharSet_accepts), "$getName", $rt_wrapFunction0(jur_UCISupplCharSet_getName)],
jur_LowSurrogateCharSet, "LowSurrogateCharSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_LowSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_LowSurrogateCharSet_matches), "$find0", $rt_wrapFunction3(jur_LowSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_LowSurrogateCharSet_findBack), "$getName", $rt_wrapFunction0(jur_LowSurrogateCharSet_getName), "$first", $rt_wrapFunction1(jur_LowSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_LowSurrogateCharSet_hasConsumed)],
jur_HighSurrogateCharSet, "HighSurrogateCharSet", 17, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_HighSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HighSurrogateCharSet_matches), "$find0", $rt_wrapFunction3(jur_HighSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_HighSurrogateCharSet_findBack), "$getName", $rt_wrapFunction0(jur_HighSurrogateCharSet_getName), "$first", $rt_wrapFunction1(jur_HighSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HighSurrogateCharSet_hasConsumed)],
jur_SupplCharSet, "SupplCharSet", 17, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_SupplCharSet_accepts), "$find0", $rt_wrapFunction3(jur_SupplCharSet_find), "$findBack", $rt_wrapFunction4(jur_SupplCharSet_findBack), "$getName", $rt_wrapFunction0(jur_SupplCharSet_getName), "$first", $rt_wrapFunction1(jur_SupplCharSet_first)],
jur_AbstractLineTerminator$1, 0, jur_AbstractLineTerminator, [], 0, 0, 0, 0, ["$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$1_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$1_isAfterLineTerminator)],
jur_AbstractLineTerminator$2, 0, jur_AbstractLineTerminator, [], 0, 0, 0, 0, ["$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$2_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$2_isAfterLineTerminator)],
jur_SequenceSet$IntHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
jur_AbstractCharClass$LazySpace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace_computeValue)],
jur_AbstractCharClass$LazyDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit_computeValue)],
jur_AbstractCharClass$LazyLower, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower_computeValue)],
jur_AbstractCharClass$LazyUpper, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper_computeValue)],
jur_AbstractCharClass$LazyASCII, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII_computeValue)],
jur_AbstractCharClass$LazyAlpha, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha_computeValue)],
jur_AbstractCharClass$LazyAlnum, 0, jur_AbstractCharClass$LazyAlpha, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum_computeValue)],
jur_AbstractCharClass$LazyPunct, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct_computeValue)],
jur_AbstractCharClass$LazyGraph, 0, jur_AbstractCharClass$LazyAlnum, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph_computeValue)],
jur_AbstractCharClass$LazyPrint, 0, jur_AbstractCharClass$LazyGraph, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint_computeValue)],
jur_AbstractCharClass$LazyBlank, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank_computeValue)],
jur_AbstractCharClass$LazyCntrl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl_computeValue)],
jur_AbstractCharClass$LazyXDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit_computeValue)],
jur_AbstractCharClass$LazyJavaLowerCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase_computeValue)],
jur_AbstractCharClass$LazyJavaUpperCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase_computeValue)],
jur_AbstractCharClass$LazyJavaWhitespace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace_computeValue)],
jur_AbstractCharClass$LazyJavaMirrored, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored_computeValue)],
jur_AbstractCharClass$LazyJavaDefined, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined_computeValue)],
jur_AbstractCharClass$LazyJavaDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit_computeValue)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue)],
jur_AbstractCharClass$LazyJavaISOControl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl_computeValue)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue)],
jur_AbstractCharClass$LazyJavaLetter, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter_computeValue)],
jur_AbstractCharClass$LazyJavaLetterOrDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue)],
jur_AbstractCharClass$LazyJavaSpaceChar, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar_computeValue)],
jur_AbstractCharClass$LazyJavaTitleCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase_computeValue)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue)],
jur_AbstractCharClass$LazyWord, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord_computeValue)]]);
$rt_metadata([jur_AbstractCharClass$LazyNonWord, 0, jur_AbstractCharClass$LazyWord, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord_computeValue)],
jur_AbstractCharClass$LazyNonSpace, 0, jur_AbstractCharClass$LazySpace, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace_computeValue)],
jur_AbstractCharClass$LazyNonDigit, 0, jur_AbstractCharClass$LazyDigit, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit_computeValue)],
jur_AbstractCharClass$LazyRange, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyRange_computeValue)],
jur_AbstractCharClass$LazySpecialsBlock, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock_computeValue)],
jur_AbstractCharClass$LazyCategory, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategory_computeValue)],
jur_AbstractCharClass$LazyCategoryScope, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategoryScope_computeValue)],
jur_IntHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
otciu_CharMapping, 0, jl_Object, [], 0, 3, 0, 0, 0,
otciu_UnicodeHelper$Range, "UnicodeHelper$Range", 26, jl_Object, [], 0, 3, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, 0,
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcir_Flags, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbgu_NumberUtils, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit, 0, jl_Enum, [], 9, 3, 0, cgxgbtd_StyleWrapper$Unit_$callClinit, 0,
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, 0,
jl_StringIndexOutOfBoundsException, "StringIndexOutOfBoundsException", 20, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
jur_AbstractCharClass$1, "AbstractCharClass$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$1_contains)],
jur_AbstractCharClass$2, "AbstractCharClass$2", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$2_contains)],
jur_CharClass$18, "CharClass$18", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$18_contains), "$toString", $rt_wrapFunction0(jur_CharClass$18_toString)],
jur_CharClass$1, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$1_contains)],
jur_CharClass$3, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$3_contains)],
jur_CharClass$2, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$2_contains)],
jur_CharClass$5, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$5_contains)],
jur_CharClass$4, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$4_contains)],
jur_CharClass$7, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$7_contains)],
jur_CharClass$6, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$6_contains)],
jur_CharClass$9, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$9_contains)],
jur_CharClass$8, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$8_contains)],
jur_CharClass$11, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$11_contains)],
jur_CharClass$10, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$10_contains)],
jur_CharClass$13, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$13_contains)],
jur_CharClass$12, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$12_contains)],
jur_CharClass$15, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$15_contains)],
jur_CharClass$14, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$14_contains)],
jur_CharClass$17, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$17_contains)],
jur_CharClass$16, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$16_contains)],
jl_Thread, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, 0,
jl_Object$Monitor, 0, jl_Object, [], 0, 0, 0, 0, 0,
jl_IllegalMonitorStateException, "IllegalMonitorStateException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
otjf_JSMapping, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_0, 0, jl_Object, [otjf_JSMapping], 0, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_1, 0, jl_Object, [otjf_JSMapping], 0, 3, 0, 0, 0,
otjf_JSSupplier, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_2, 0, jl_Object, [otjf_JSSupplier], 0, 3, 0, 0, 0,
jl_Float, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
cgxgbtu_KeyCodes, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgu_TimeUtils, 0, jl_Object, [], 4, 3, 0, 0, 0]);
$rt_metadata([otp_PlatformQueue, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otp_PlatformRunnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Object$monitorExit$lambda$_8_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, 0,
cgxgbt_TeaWindowListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjc_JSPromise$Executor, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$getFile$lambda$_2_0, 0, jl_Object, [otjc_JSPromise$Executor], 0, 3, 0, 0, 0,
otji_IDBObjectStoreParameters, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_0, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_1, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_2, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1, 3, 0, 0, 0,
ji_FilterOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, 0,
ji_PrintStream, 0, ji_FilterOutputStream, [jl_Appendable], 0, 3, 0, 0, 0,
otcic_JsConsolePrintStream, 0, ji_PrintStream, [], 1, 3, 0, 0, 0,
otcic_JSStderrPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, ["$print", $rt_wrapFunction1(otcic_JSStderrPrintStream_print)],
cgxgbtd_StyleWrapper$Unit$1, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$2, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$3, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$4, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$5, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$6, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$7, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$8, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
cgxgbtd_StyleWrapper$Unit$9, 0, cgxgbtd_StyleWrapper$Unit, [], 12, 0, 0, 0, 0,
jl_Thread$UncaughtExceptionHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_DefaultUncaughtExceptionHandler, 0, jl_Object, [jl_Thread$UncaughtExceptionHandler], 0, 3, 0, 0, 0,
jnc_Charset, 0, jl_Object, [jl_Comparable], 1, 3, 0, 0, 0,
oti_AsyncCallback, 0, jl_Object, [], 3, 3, 0, 0, 0,
otpp_AsyncCallbackWrapper, 0, jl_Object, [oti_AsyncCallback], 0, 0, 0, 0, ["$complete", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_complete), "$error", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_error)],
jl_Object$monitorEnterWait$lambda$_6_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, 0,
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otjc_JSFinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, 0,
otji_JSWrapper$Helper$_clinit_$lambda$_3_1, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, 0,
jur_BackReferencedSingleSet, "BackReferencedSingleSet", 17, jur_SingleSet, [], 0, 0, 0, 0, ["$find0", $rt_wrapFunction3(jur_BackReferencedSingleSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferencedSingleSet_findBack), "$processBackRefReplacement", $rt_wrapFunction0(jur_BackReferencedSingleSet_processBackRefReplacement)],
cgxgbt_TeaApplication$6, 0, jl_Object, [], 32, 0, 0, cgxgbt_TeaApplication$6_$callClinit, 0,
jur_AbstractCharClass$LazyJavaLowerCase$1, "AbstractCharClass$LazyJavaLowerCase$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1_contains)],
jur_AbstractCharClass$LazyJavaUpperCase$1, "AbstractCharClass$LazyJavaUpperCase$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1_contains)],
jur_AbstractCharClass$LazyJavaWhitespace$1, "AbstractCharClass$LazyJavaWhitespace$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1_contains)],
jur_AbstractCharClass$LazyJavaMirrored$1, "AbstractCharClass$LazyJavaMirrored$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1_contains)],
jur_AbstractCharClass$LazyJavaDefined$1, "AbstractCharClass$LazyJavaDefined$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1_contains)],
jur_AbstractCharClass$LazyJavaDigit$1, "AbstractCharClass$LazyJavaDigit$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1_contains)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1, "AbstractCharClass$LazyJavaIdentifierIgnorable$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains)],
jur_AbstractCharClass$LazyJavaISOControl$1, "AbstractCharClass$LazyJavaISOControl$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1_contains)]]);
$rt_metadata([jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1, "AbstractCharClass$LazyJavaJavaIdentifierPart$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1, "AbstractCharClass$LazyJavaJavaIdentifierStart$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains)],
jur_AbstractCharClass$LazyJavaLetter$1, "AbstractCharClass$LazyJavaLetter$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1_contains)],
jur_AbstractCharClass$LazyJavaLetterOrDigit$1, "AbstractCharClass$LazyJavaLetterOrDigit$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains)],
jur_AbstractCharClass$LazyJavaSpaceChar$1, "AbstractCharClass$LazyJavaSpaceChar$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1_contains)],
jur_AbstractCharClass$LazyJavaTitleCase$1, "AbstractCharClass$LazyJavaTitleCase$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1_contains)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierPart$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierStart$1", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains)],
jur_UnicodeCategory, "UnicodeCategory", 17, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UnicodeCategory_contains)],
jur_UnicodeCategoryScope, "UnicodeCategoryScope", 17, jur_UnicodeCategory, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UnicodeCategoryScope_contains)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
cgxgbta_AssetDownloadImpl$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, 0,
cgxgbta_AssetDownloadImpl$loadScript$lambda$_5_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
cbgu_Collections, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgu_Array$ArrayIterator, 0, jl_Object, [ju_Iterator, jl_Iterable], 0, 3, 0, 0, 0,
cbgu_Array$ArrayIterable, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
otcic_JSStdoutPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, ["$print", $rt_wrapFunction1(otcic_JSStdoutPrintStream_print)],
cgxgbtd_EventTargetWrapper, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbtd_FileReaderWrapper, 0, jl_Object, [cgxgbtd_EventTargetWrapper, otj_JSObject], 1, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$4, 0, jl_Object, [cgxgbtd_EventListenerWrapper], 0, 0, 0, 0, 0,
cgxgbtdt_TypedArrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
jur_IntArrHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
cgxgbtf_FileData, 0, jl_Object, [], 0, 3, 0, 0, 0,
otjt_ArrayBufferView, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otjt_TypedArray, 0, otjt_ArrayBufferView, [], 1, 3, 0, 0, 0,
otjt_Int8Array, 0, otjt_TypedArray, [], 0, 3, 0, 0, 0,
cbgu_GdxRuntimeException, "GdxRuntimeException", 10, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_NoSuchElementException, "NoSuchElementException", 16, jl_RuntimeException, [], 0, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$5, 0, jl_Object, [cgxgbta_AssetLoaderListener], 0, 0, 0, 0, ["$onProgress", $rt_wrapFunction2(cgxgbta_AssetLoaderListener_onProgress), "$onSuccess", $rt_wrapFunction2(cgxgbta_AssetLoadImpl$5_onSuccess)],
cgxgbta_AssetType, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cbggg_Batch, 0, jl_Object, [cbgu_Disposable], 3, 3, 0, 0, 0,
cbggg_SpriteBatch, 0, jl_Object, [cbggg_Batch], 0, 3, 0, cbggg_SpriteBatch_$callClinit, 0,
cbgu_ScreenUtils, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxgbtfi_IndexedDBFileData, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$putFile$lambda$_2_0, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
ju_ConcurrentModificationException, "ConcurrentModificationException", 16, jl_RuntimeException, [], 0, 3, 0, 0, 0,
cbgm_Matrix4, 0, jl_Object, [ji_Serializable], 0, 3, 0, cbgm_Matrix4_$callClinit, 0,
cbgg_Mesh$VertexDataType, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cbgg_Mesh, "Mesh", 12, jl_Object, [cbgu_Disposable], 0, 3, 0, cbgg_Mesh_$callClinit, 0,
cbgg_VertexAttributes, 0, jl_Object, [jl_Iterable, jl_Comparable], 4, 3, 0, 0, 0,
cbggg_ShaderProgram, "ShaderProgram", 13, jl_Object, [cbgu_Disposable], 0, 3, 0, cbggg_ShaderProgram_$callClinit, 0,
cbgg_TextureData$Factory, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbg_Graphics$BufferFormat, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbgm_Quaternion, 0, jl_Object, [ji_Serializable], 0, 3, 0, 0, 0,
cbgm_Vector, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgm_Vector3, 0, jl_Object, [ji_Serializable, cbgm_Vector], 0, 3, 0, cbgm_Vector3_$callClinit, 0,
cbgg_Mesh$1, 0, jl_Object, [], 32, 0, 0, cbgg_Mesh$1_$callClinit, 0,
cbggg_VertexData, 0, jl_Object, [cbgu_Disposable], 3, 3, 0, 0, 0,
cbggg_VertexBufferObject, 0, jl_Object, [cbggg_VertexData], 0, 3, 0, 0, ["$setVertices", $rt_wrapFunction3(cbggg_VertexBufferObject_setVertices), "$bind0", $rt_wrapFunction2(cbggg_VertexBufferObject_bind), "$unbind0", $rt_wrapFunction2(cbggg_VertexBufferObject_unbind), "$dispose", $rt_wrapFunction0(cbggg_VertexBufferObject_dispose)],
cbggg_IndexData, 0, jl_Object, [cbgu_Disposable], 3, 3, 0, 0, 0]);
$rt_metadata([cbggg_IndexBufferObject, 0, jl_Object, [cbggg_IndexData], 0, 3, 0, 0, ["$getNumIndices", $rt_wrapFunction0(cbggg_IndexBufferObject_getNumIndices), "$getNumMaxIndices", $rt_wrapFunction0(cbggg_IndexBufferObject_getNumMaxIndices), "$setIndices", $rt_wrapFunction3(cbggg_IndexBufferObject_setIndices), "$getBuffer", $rt_wrapFunction1(cbggg_IndexBufferObject_getBuffer), "$bind", $rt_wrapFunction0(cbggg_IndexBufferObject_bind), "$unbind", $rt_wrapFunction0(cbggg_IndexBufferObject_unbind), "$dispose",
$rt_wrapFunction0(cbggg_IndexBufferObject_dispose)],
cbggg_VertexBufferObjectSubData, 0, jl_Object, [cbggg_VertexData], 0, 3, 0, 0, ["$setVertices", $rt_wrapFunction3(cbggg_VertexBufferObjectSubData_setVertices), "$bind0", $rt_wrapFunction2(cbggg_VertexBufferObjectSubData_bind), "$unbind0", $rt_wrapFunction2(cbggg_VertexBufferObjectSubData_unbind), "$dispose", $rt_wrapFunction0(cbggg_VertexBufferObjectSubData_dispose)],
cbggg_IndexBufferObjectSubData, 0, jl_Object, [cbggg_IndexData], 0, 3, 0, 0, ["$getNumIndices", $rt_wrapFunction0(cbggg_IndexBufferObjectSubData_getNumIndices), "$getNumMaxIndices", $rt_wrapFunction0(cbggg_IndexBufferObjectSubData_getNumMaxIndices), "$setIndices", $rt_wrapFunction3(cbggg_IndexBufferObjectSubData_setIndices), "$getBuffer", $rt_wrapFunction1(cbggg_IndexBufferObjectSubData_getBuffer), "$bind", $rt_wrapFunction0(cbggg_IndexBufferObjectSubData_bind), "$unbind", $rt_wrapFunction0(cbggg_IndexBufferObjectSubData_unbind),
"$dispose", $rt_wrapFunction0(cbggg_IndexBufferObjectSubData_dispose)],
cbggg_VertexBufferObjectWithVAO, 0, jl_Object, [cbggg_VertexData], 0, 3, 0, cbggg_VertexBufferObjectWithVAO_$callClinit, ["$setVertices", $rt_wrapFunction3(cbggg_VertexBufferObjectWithVAO_setVertices), "$bind0", $rt_wrapFunction2(cbggg_VertexBufferObjectWithVAO_bind), "$unbind0", $rt_wrapFunction2(cbggg_VertexBufferObjectWithVAO_unbind), "$dispose", $rt_wrapFunction0(cbggg_VertexBufferObjectWithVAO_dispose)],
cbggg_VertexArray, 0, cbggg_VertexBufferObject, [], 0, 3, 0, 0, 0,
cbggg_IndexArray, 0, cbggg_IndexBufferObject, [], 0, 3, 0, 0, 0,
cbgu_ObjectIntMap, 0, jl_Object, [jl_Iterable], 0, 3, 0, 0, 0,
cbgu_BufferUtils, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbgg_TextureData, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbggg_FileTextureData, "FileTextureData", 13, jl_Object, [cbgg_TextureData], 0, 3, 0, 0, 0,
cbggg_PixmapNativeInterface, 0, jl_Object, [], 3, 3, 0, 0, 0,
cbgg_Pixmap, 0, jl_Object, [cbgu_Disposable, cbggg_PixmapNativeInterface], 0, 3, 0, 0, 0,
jn_Buffer, 0, jl_Object, [], 1, 3, 0, 0, 0,
jn_FloatBuffer, 0, jn_Buffer, [jl_Comparable], 1, 3, 0, 0, ["$limit", $rt_wrapFunction1(jn_FloatBuffer_limit), "$position", $rt_wrapFunction1(jn_FloatBuffer_position)],
jn_ShortBuffer, 0, jn_Buffer, [jl_Comparable], 1, 3, 0, 0, 0,
cgxgbt_TeaTool, 0, jl_Object, [], 0, 3, 0, 0, 0,
jn_IntBuffer, 0, jn_Buffer, [jl_Comparable], 1, 3, 0, 0, 0,
jn_ByteBuffer, 0, jn_Buffer, [jl_Comparable], 1, 3, 0, 0, ["$toString", $rt_wrapFunction0(jn_ByteBuffer_toString), "$equals", $rt_wrapFunction1(jn_ByteBuffer_equals), "$limit", $rt_wrapFunction1(jn_ByteBuffer_limit), "$position", $rt_wrapFunction1(jn_ByteBuffer_position)],
jn_ByteOrder, 0, jl_Object, [], 4, 3, 0, 0, 0,
cbgg_Pixmap$Blending, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cbgg_Pixmap$Filter, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cbggg_Gdx2DPixmap, 0, jl_Object, [cbgu_Disposable, cbggg_PixmapNativeInterface], 0, 3, 0, 0, 0,
jn_ArrayBufferViewProvider, 0, jl_Object, [], 3, 3, 0, 0, 0,
jn_ByteBufferJsImpl, "ByteBufferJsImpl", 18, jn_ByteBuffer, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$capacityImpl", $rt_wrapFunction0(jn_ByteBufferJsImpl_capacityImpl), "$getArrayBufferView0", $rt_wrapFunction0(jn_ByteBufferJsImpl_getArrayBufferView)],
cbgf_FileHandle, 0, jl_Object, [], 0, 3, 0, 0, 0,
cbggg_Gdx2DPixmapNative, 0, jl_Object, [cbgu_Disposable], 0, 3, 0, 0, 0,
cbgg_Texture$TextureFilter, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cbgg_Texture$TextureWrap, 0, jl_Enum, [], 12, 3, 0, 0, 0,
jn_IntBufferImpl, 0, jn_IntBuffer, [], 1, 0, 0, 0, 0,
jn_IntBufferOverTypedArray, 0, jn_IntBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$readOnly", $rt_wrapFunction0(jn_IntBufferOverTypedArray_readOnly), "$getElement", $rt_wrapFunction1(jn_IntBufferOverTypedArray_getElement), "$putElement", $rt_wrapFunction2(jn_IntBufferOverTypedArray_putElement), "$capacityImpl", $rt_wrapFunction0(jn_IntBufferOverTypedArray_capacityImpl)],
otjt_Int32Array, 0, otjt_TypedArray, [], 0, 3, 0, 0, 0,
jn_FloatBufferImpl, 0, jn_FloatBuffer, [], 1, 0, 0, 0, 0,
jn_FloatBufferOverTypedArray, "FloatBufferOverTypedArray", 18, jn_FloatBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$readOnly", $rt_wrapFunction0(jn_FloatBufferOverTypedArray_readOnly), "$getElement0", $rt_wrapFunction1(jn_FloatBufferOverTypedArray_getElement), "$putElement0", $rt_wrapFunction2(jn_FloatBufferOverTypedArray_putElement), "$capacityImpl", $rt_wrapFunction0(jn_FloatBufferOverTypedArray_capacityImpl), "$putImpl", $rt_wrapFunction4(jn_FloatBufferOverTypedArray_putImpl), "$getArrayBufferView0",
$rt_wrapFunction0(jn_FloatBufferOverTypedArray_getArrayBufferView)],
otjt_Float32Array, 0, otjt_TypedArray, [], 0, 3, 0, 0, 0,
cbgg_Pixmap$Format, 0, jl_Enum, [], 12, 3, 0, 0, 0,
jn_ShortBufferImpl, 0, jn_ShortBuffer, [], 1, 0, 0, 0, 0,
jn_ShortBufferOverTypedArray, "ShortBufferOverTypedArray", 18, jn_ShortBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$readOnly", $rt_wrapFunction0(jn_ShortBufferOverTypedArray_readOnly), "$capacityImpl", $rt_wrapFunction0(jn_ShortBufferOverTypedArray_capacityImpl), "$putImpl0", $rt_wrapFunction4(jn_ShortBufferOverTypedArray_putImpl), "$getArrayBufferView0", $rt_wrapFunction0(jn_ShortBufferOverTypedArray_getArrayBufferView)],
otjt_Int16Array, 0, otjt_TypedArray, [], 0, 3, 0, 0, 0,
jn_JSBufferHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
jn_IntBufferOverDataView, 0, jn_IntBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$readOnly", $rt_wrapFunction0(jn_IntBufferOverDataView_readOnly), "$getElement", $rt_wrapFunction1(jn_IntBufferOverDataView_getElement), "$putElement", $rt_wrapFunction2(jn_IntBufferOverDataView_putElement), "$capacityImpl", $rt_wrapFunction0(jn_IntBufferOverDataView_capacityImpl)],
jn_FloatBufferOverDataView, "FloatBufferOverDataView", 18, jn_FloatBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$readOnly", $rt_wrapFunction0(jn_FloatBufferOverDataView_readOnly), "$getElement0", $rt_wrapFunction1(jn_FloatBufferOverDataView_getElement), "$putElement0", $rt_wrapFunction2(jn_FloatBufferOverDataView_putElement), "$putImpl", $rt_wrapFunction4(jn_FloatBufferOverDataView_putImpl), "$capacityImpl", $rt_wrapFunction0(jn_FloatBufferOverDataView_capacityImpl), "$getArrayBufferView0", $rt_wrapFunction0(jn_FloatBufferOverDataView_getArrayBufferView)],
jn_ShortBufferOverDataView, "ShortBufferOverDataView", 18, jn_ShortBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$readOnly", $rt_wrapFunction0(jn_ShortBufferOverDataView_readOnly), "$putImpl0", $rt_wrapFunction4(jn_ShortBufferOverDataView_putImpl), "$capacityImpl", $rt_wrapFunction0(jn_ShortBufferOverDataView_capacityImpl), "$getArrayBufferView0", $rt_wrapFunction0(jn_ShortBufferOverDataView_getArrayBufferView)],
jl_UnsupportedOperationException, "UnsupportedOperationException", 20, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jn_ReadOnlyBufferException, "ReadOnlyBufferException", 18, jl_UnsupportedOperationException, [], 0, 3, 0, 0, 0,
jn_BufferUnderflowException, "BufferUnderflowException", 18, jl_RuntimeException, [], 0, 3, 0, 0, 0,
cgxgbta_AssetDownloadImpl$1, 0, jl_Object, [cgxgbta_AssetLoaderListener], 0, 0, 0, 0, 0,
cgxgbta_AssetDownloadImpl$3, 0, jl_Object, [], 32, 0, 0, cgxgbta_AssetDownloadImpl$3_$callClinit, 0,
cgxgbt_TeaFileHandle, "TeaFileHandle", 5, cbgf_FileHandle, [], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(cgxgbt_TeaFileHandle_toString)],
cbg_Files$FileType, 0, jl_Enum, [], 12, 3, 0, 0, 0,
otcin_Buffers, 0, jl_Object, [], 4, 3, 0, 0, 0]);
$rt_metadata([otjb_TimerHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxgbta_AssetDownloadImpl$loadBinary$lambda$_6_0, 0, jl_Object, [otjb_TimerHandler], 0, 3, 0, 0, 0,
jl_AbstractStringBuilder$Constants, 0, jl_Object, [], 0, 0, 0, 0, 0,
otcit_FloatAnalyzer, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxgbta_AssetDownloadImpl$loadBinaryInternally$lambda$_7_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
cbgg_TextureData$TextureDataType, 0, jl_Enum, [], 12, 3, 0, 0, 0,
cbggg_MipMapGenerator, 0, jl_Object, [], 0, 3, 0, 0, 0,
jn_NativeBuffer, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxgbta_AssetDownloadImpl$setOnProgress$lambda$_8_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otja_XMLHttpRequest, 0, jl_Object, [otj_JSObject, otjde_EventTarget], 0, 3, 0, 0, 0,
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
jur_Matcher$1, "Matcher$1", 17, jl_Object, [], 0, 0, 0, 0, ["$toString", $rt_wrapFunction0(jur_Matcher$1_toString)],
otjt_Uint8Array, 0, otjt_TypedArray, [], 0, 3, 0, 0, 0,
otjt_Uint16Array, 0, otjt_TypedArray, [], 0, 3, 0, 0, 0,
otjde_Registration, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxgbt_TeaFileHandle$1, 0, jl_Object, [], 32, 0, 0, cgxgbt_TeaFileHandle$1_$callClinit, 0,
cbgu_StreamUtils, 0, jl_Object, [], 4, 3, 0, 0, 0,
ji_IOException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
cbgur_ArrayReflection, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxgbta_TeaBlob, 0, jl_Object, [], 4, 3, 0, 0, 0,
ji_ByteArrayOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, 0,
cbgu_StreamUtils$OptimizedByteArrayOutputStream, 0, ji_ByteArrayOutputStream, [], 0, 3, 0, 0, 0,
cgxgbta_AssetDownloadImpl$lambda$loadBinaryInternally$3$lambda$_13_0, 0, jl_Object, [otjb_TimerHandler], 0, 3, 0, 0, 0,
ji_InputStream, 0, jl_Object, [ji_Closeable], 1, 3, 0, 0, 0,
jn_BufferOverflowException, "BufferOverflowException", 18, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jnci_UTF8Charset, 0, jnc_Charset, [], 0, 3, 0, jnci_UTF8Charset_$callClinit, 0,
otc_PlatformDetector, 0, jl_Object, [], 4, 3, 0, 0, 0,
jnc_IllegalCharsetNameException, "IllegalCharsetNameException", 19, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
ji_ByteArrayInputStream, 0, ji_InputStream, [], 0, 3, 0, 0, ["$close", $rt_wrapFunction0(ji_ByteArrayInputStream_close)],
jl_Readable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jn_CharBuffer, 0, jn_Buffer, [jl_Comparable, jl_Appendable, jl_CharSequence, jl_Readable], 1, 3, 0, 0, 0,
jnc_CodingErrorAction, 0, jl_Object, [], 0, 3, 0, 0, 0,
jnc_CharsetEncoder, 0, jl_Object, [], 1, 3, 0, 0, 0,
jnc_CharacterCodingException, 0, ji_IOException, [], 0, 3, 0, 0, 0,
jl_Error, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_AssertionError, "AssertionError", 20, jl_Error, [], 0, 3, 0, 0, 0,
jn_CharBufferImpl, 0, jn_CharBuffer, [], 1, 0, 0, 0, 0,
jn_CharBufferOverTypedArray, 0, jn_CharBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, 0, ["$capacityImpl", $rt_wrapFunction0(jn_CharBufferOverTypedArray_capacityImpl)],
jnc_CoderResult, 0, jl_Object, [], 0, 3, 0, 0, 0,
jnc_CoderMalfunctionError, "CoderMalfunctionError", 19, jl_Error, [], 0, 3, 0, 0, 0,
jnc_BufferUnderflowException, "BufferUnderflowException", 19, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jnc_BufferOverflowException, "BufferOverflowException", 19, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jnc_MalformedInputException, "MalformedInputException", 19, jnc_CharacterCodingException, [], 0, 3, 0, 0, ["$getMessage", $rt_wrapFunction0(jnc_MalformedInputException_getMessage)],
jnc_UnmappableCharacterException, "UnmappableCharacterException", 19, jnc_CharacterCodingException, [], 0, 3, 0, 0, ["$getMessage", $rt_wrapFunction0(jnc_UnmappableCharacterException_getMessage)],
jnci_BufferedEncoder, 0, jnc_CharsetEncoder, [], 1, 3, 0, 0, 0,
jnci_UTF8Encoder, 0, jnci_BufferedEncoder, [], 0, 3, 0, 0, 0,
cgxgbtft_LocalDBStorage$removeFile$lambda$_3_0, 0, jl_Object, [otji_EventHandler], 0, 3, 0, 0, 0,
cgxgbta_AssetLoadImpl$6, 0, jl_Object, [cgxgbta_AssetLoaderListener], 0, 0, 0, 0, ["$onProgress", $rt_wrapFunction2(cgxgbta_AssetLoadImpl$6_onProgress), "$onSuccess", $rt_wrapFunction2(cgxgbta_AssetLoadImpl$6_onSuccess)]]);
$rt_metadata([jnc_CharsetDecoder, 0, jl_Object, [], 1, 3, 0, 0, 0,
jnci_BufferedEncoder$Controller, 0, jl_Object, [], 0, 3, 0, 0, 0,
jnci_BufferedDecoder, 0, jnc_CharsetDecoder, [], 1, 3, 0, 0, 0,
jnci_UTF8Decoder, 0, jnci_BufferedDecoder, [], 0, 3, 0, 0, 0,
jnci_BufferedDecoder$Controller, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxgbtf_FileDB$1, 0, ji_OutputStream, [], 0, 0, 0, 0, ["$close", $rt_wrapFunction0(cgxgbtf_FileDB$1_close)]]);
let $rt_booleanArrayCls = $rt_arraycls($rt_booleancls),
$rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls),
$rt_floatArrayCls = $rt_arraycls($rt_floatcls);
$rt_stringPool(["Can\'t enter monitor from another thread synchronously", "Class cannot be created (missing no-arg constructor): ", "GL_EXT_texture_filter_anisotropic", "This TextureData implementation does not upload data itself", "Call prepare() before calling getPixmap()", "GL_ARB_framebuffer_object", "GL_EXT_framebuffer_object", "com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20", "index can\'t be >= size: ", " >= ", "key cannot be null.", "interface ", "class ", "", "[]", "<init>", ": ", "\n", "\tat ", "null",
"Caused by: ", "0", "String is null", "String is empty", "String contains invalid digits: ", "String contains digits out of radix ", "The value is too big for integer type", "The value is too big for int type: ", "Illegal radix: ", "false", "true", "app", "db/assets", "high-performance", "canvas", "java.runtime.name", "userAgent", "os.name", "Windows", "OS X", "no OS", "Linux", ".html", "index.html", "index-wasm.html", "index-debug.html", "pagehide", "resize", "assets.txt", "libgdx.png", "gdx.wasm.js", "howler.js",
"WEB_SCRIPT_PATH", "WEB_ASSET_PATH", "SpriteBatch.end must be called before begin.", "u_projTrans", "u_texture", "SpriteBatch.begin must be called before draw.", "SpriteBatch.begin must be called before end.", "bounces cannot be < 2 or > 5: ", "INIT", "PRELOAD_ASSETS", "DOWNLOAD_ASSETS", "APP_CREATE", "APP_LOOP", "object", "function", "string", "number", "undefined", "Either src or dest is null", "java.version", "1.8", "TeaVM", "file.separator", "/", "path.separator", ":", "line.separator", "java.io.tmpdir",
"/tmp", "java.vm.version", "user.home", "GLVersion", "OpenGL ES (\\d(\\.\\d){0,2})", "WebGL (\\d(\\.\\d){0,2})", "(\\d(\\.\\d){0,2})", "px", "Loading asset: ", "Unsupported asset type ", "assets/", "scripts/", "Loading script: ", "mousedown", "mouseup", "mousemove", "wheel", "touchstart", "touchmove", "touchcancel", "touchend", "keydown", "keypress", "keyup", "CSS1Compat", "IndexedDB is not supported in this browser", "hidden", "visible", "capacity must be >= 0: ", "The required capacity is too large: ", "glGetFloat not supported by WebGL backend",
"GL error: ", ", ", "Invalid version string: ", "\\.", "Error parsing number: ", ", assuming: ", "libGDX GL", "Android", "Desktop", "HeadlessDesktop", "Applet", "WebGL", "iOS", " REMOVE FOLDER: ", " REMOVE FILE: ", " Path: ", " Error: ", " CONTAINS FOLDER: ", " CONTAINS FILE: ", ".", "./", " GET FOLDER: ", " GET FILE: ", " Size: ", " PUT FILE: ", " Bytes: ", "Cannot put an empty folder name", " PUT FOLDER: ", "PUT FOLDER DB: ", "PUT FILE DB: ", "REMOVE FILE DB: ", "OpenGL", "GLES", "NONE", "Patter is null",
"IndexedDB Error opening database: ", "public", "protected", "private", "abstract", "static", "final", "transient", "volatile", "synchronized", "native", "strictfp", "interface", "fSet", "Is", "In", "NonCapFSet", "AheadFSet", "BehindFSet", "AtomicFSet", "FinalSet", "<Empty set>", "JointSet", "NonCapJointSet", "PosLookaheadJointSet", "NegLookaheadJointSet", "PosBehindJointSet", "NegBehindJointSet", "<Quant>", "<GroupQuant>", "Lower", "Upper", "ASCII", "Alpha", "Digit", "Alnum", "Punct", "Graph", "Print", "Blank",
"Cntrl", "XDigit", "javaLowerCase", "javaUpperCase", "javaWhitespace", "javaMirrored", "javaDefined", "javaDigit", "javaIdentifierIgnorable", "javaISOControl", "javaJavaIdentifierPart", "javaJavaIdentifierStart", "javaLetter", "javaLetterOrDigit", "javaSpaceChar", "javaTitleCase", "javaUnicodeIdentifierPart", "javaUnicodeIdentifierStart", "Space", "w", "W", "s", "S", "d", "D", "BasicLatin", "Latin-1Supplement", "LatinExtended-A", "LatinExtended-B", "IPAExtensions", "SpacingModifierLetters", "CombiningDiacriticalMarks",
"Greek", "Cyrillic", "CyrillicSupplement", "Armenian", "Hebrew", "Arabic", "Syriac", "ArabicSupplement", "Thaana", "Devanagari", "Bengali", "Gurmukhi", "Gujarati", "Oriya", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhala", "Thai", "Lao", "Tibetan", "Myanmar", "Georgian", "HangulJamo", "Ethiopic", "EthiopicSupplement", "Cherokee", "UnifiedCanadianAboriginalSyllabics", "Ogham", "Runic", "Tagalog", "Hanunoo", "Buhid", "Tagbanwa", "Khmer", "Mongolian", "Limbu", "TaiLe", "NewTaiLue", "KhmerSymbols", "Buginese",
"PhoneticExtensions", "PhoneticExtensionsSupplement", "CombiningDiacriticalMarksSupplement", "LatinExtendedAdditional", "GreekExtended", "GeneralPunctuation", "SuperscriptsandSubscripts", "CurrencySymbols", "CombiningMarksforSymbols", "LetterlikeSymbols", "NumberForms", "Arrows", "MathematicalOperators", "MiscellaneousTechnical", "ControlPictures", "OpticalCharacterRecognition", "EnclosedAlphanumerics", "BoxDrawing", "BlockElements", "GeometricShapes", "MiscellaneousSymbols", "Dingbats", "MiscellaneousMathematicalSymbols-A",
"SupplementalArrows-A", "BraillePatterns", "SupplementalArrows-B", "MiscellaneousMathematicalSymbols-B", "SupplementalMathematicalOperators", "MiscellaneousSymbolsandArrows", "Glagolitic", "Coptic", "GeorgianSupplement", "Tifinagh", "EthiopicExtended", "SupplementalPunctuation", "CJKRadicalsSupplement", "KangxiRadicals", "IdeographicDescriptionCharacters", "CJKSymbolsandPunctuation", "Hiragana", "Katakana", "Bopomofo", "HangulCompatibilityJamo", "Kanbun", "BopomofoExtended", "CJKStrokes", "KatakanaPhoneticExtensions",
"EnclosedCJKLettersandMonths", "CJKCompatibility", "CJKUnifiedIdeographsExtensionA", "YijingHexagramSymbols", "CJKUnifiedIdeographs", "YiSyllables", "YiRadicals", "ModifierToneLetters", "SylotiNagri", "HangulSyllables", "HighSurrogates", "HighPrivateUseSurrogates", "LowSurrogates", "PrivateUseArea", "CJKCompatibilityIdeographs", "AlphabeticPresentationForms", "ArabicPresentationForms-A", "VariationSelectors", "VerticalForms", "CombiningHalfMarks", "CJKCompatibilityForms", "SmallFormVariants", "ArabicPresentationForms-B",
"HalfwidthandFullwidthForms", "all", "Specials", "Cn", "IsL", "Lu", "Ll", "Lt", "Lm", "Lo", "IsM", "Mn", "Me", "Mc", "N", "Nd", "Nl", "No", "IsZ", "Zs", "Zl", "Zp", "IsC", "Cc", "Cf", "Co", "Cs", "IsP", "Pd", "Ps", "Pe", "Pc", "Po", "IsS", "Sm", "Sc", "Sk", "So", "Pi", "Pf", "posFSet", " ", "^ ", "range:", "CompositeRangeSet:  <nonsurrogate> ", " <surrogate> ", "UCI range:", "decomposed Hangul syllable:", "UCI ", "CI ", "decomposed char:", "<DotAllQuant>", "<DotQuant>", "<SOL>", "WordBoundary", "PreviousMatch",
"<EOL>", "EOI", "^", "DotAll", "<Unix MultiLine $>", "<MultiLine $>", "CI back reference: ", "back reference: ", "UCI back reference: ", "sequence: ", "UCI sequence: ", "CI sequence: ", "PX", "PCT", "EM", "EX", "PT", "PC", "IN", "CM", "MM", "main", "success", "failure", "IndexedDB Error cursor", "Script download success: ", "Script download failed: ", "#iterator() cannot be used nested.", "No support for buffer ", "Should never been thrown", "Invalid assets description file. ", "1", "c", "l", "\\", "Type ",
" is not supported", "Binary", "b", "Directory", "Can\'t have more than 8191 sprites per batch: ", "a_position", "a_color", "a_texCoord0", "attributes must be >= 1", "attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n", "#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}",
"Error compiling shader: ", "Mesh attempting to access memory outside of the index buffer (count: ", ", offset: ", ", max: ", ")", "IndexedDB Error putting file: ", "VertexArray", "VertexBufferObject", "VertexBufferObjectSubData", "VertexBufferObjectWithVAO", "Fragment shader:\n", "Vertex shader\n", "An attempted fetch uniform from uncompiled shader \n", "No uniform with name \'", "\' in shader", "No buffer allocated!", "IndexBufferObject cannot be used after it has been disposed.", "data must be a ByteBuffer or FloatBuffer",
"buffer not allocated with newUnsafeByteBuffer or already disposed", "Already prepared", "File is null, it does not exist: ", "File not found: ", " (", "Error reading file: ", "Unknown Format: ", "Pixmap already disposed!", "unknown format: ", "Unknown Gdx2DPixmap Format: ", "New position ", " is outside of range [0;", "Capacity is negative: ", " is not set", " at ", "[ByteBuffer position=", ", limit=", ", capacity=", ", mark ", "BIG_ENDIAN", "LITTLE_ENDIAN", "None", "SourceOver", "NearestNeighbour", "BiLinear",
"Nearest", "Linear", "MipMap", "MipMapNearestNearest", "MipMapLinearNearest", "MipMapNearestLinear", "MipMapLinearLinear", "MirroredRepeat", "ClampToEdge", "Repeat", "Index ", "Intensity", "LuminanceAlpha", "RGB565", "RGBA4444", "RGB888", "RGBA8888", "This buffer is not allocated in linear memory and does not wrap native JS buffer", "Asset download failed: ", "Asset download success: ", "FileType \'", "\' Not supported in web backend", "Classpath", "Internal", "External", "Absolute", "Local", "Can only free direct buffer",
"Pixmap", "Custom", "texture width and height must be square when using mipmapping.", "�", "Replacement preconditions do not hold", "UTF-8", "IGNORE", "REPLACE", "REPORT", "Action must be non-null", "Malformed input of length ", "Unmappable characters of length ", "IndexedDB Error removing file: ", "Error writing file: ", "newAction must be non-null"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(dcgt_TeaVMLauncher_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = cgxgbtdi_TeaWindow.prototype;
    c.onAnimationFrame = $rt_callWithReceiver(cgxgbtdi_TeaWindow_onAnimationFrame$exported$0);
    c = cgxgbt_TeaInput.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaInput_handleEvent$exported$0);
    c = cgxgbt_TeaApplication$1.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaApplication$1_handleEvent$exported$0);
    c = cgxgbt_TeaApplication$2.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaApplication$2_handleEvent$exported$0);
    c = cgxgbt_TeaApplication$3.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaApplication$3_handleEvent$exported$0);
    c = cgxgbt_TeaGraphics$1.prototype;
    c.fullscreenChanged = $rt_callWithReceiver(cgxgbt_TeaGraphics$1_fullscreenChanged$exported$0);
    c = cgxgbt_TeaClipboard$ClipboardWriteHandler.prototype;
    c.denied = $rt_callWithReceiver(cgxgbt_TeaClipboard$ClipboardWriteHandler_denied$exported$2);
    c.prompt = $rt_callWithReceiver(cgxgbt_TeaClipboard$ClipboardWriteHandler_prompt$exported$1);
    c.granted = $rt_callWithReceiver(cgxgbt_TeaClipboard$ClipboardWriteHandler_granted$exported$0);
    c = cgxgbt_TeaClipboard$_init_$lambda$_0_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaClipboard$_init_$lambda$_0_0_handleEvent$exported$0);
    c = cgxgbt_TeaClipboard$_init_$lambda$_0_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaClipboard$_init_$lambda$_0_1_handleEvent$exported$0);
    c = cgxgbt_TeaClipboard$_init_$lambda$_0_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbt_TeaClipboard$_init_$lambda$_0_2_handleEvent$exported$0);
    c = cgxgbta_AssetLoadImpl$1.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$1_handleEvent$exported$0);
    c = cgxgbta_AssetLoadImpl$2.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$2_handleEvent$exported$0);
    c = cgxgbta_AssetLoadImpl$3.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$3_handleEvent$exported$0);
    c = cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_0_handleEvent$exported$0);
    c = cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_1_handleEvent$exported$0);
    c = cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$setupIndexedDB$lambda$_1_2_handleEvent$exported$0);
    c = cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_0.prototype;
    c.apply = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_0_apply$exported$0);
    c = cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_1.prototype;
    c.apply = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_1_apply$exported$0);
    c = cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_2.prototype;
    c.get = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$downloadDroppedFile$lambda$_3_2_get$exported$0);
    c = cgxgbta_AssetLoadImpl$getFile$lambda$_2_0.prototype;
    c.onExecute = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$getFile$lambda$_2_0_onExecute$exported$0);
    c = cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_0_handleEvent$exported$0);
    c = cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_1_handleEvent$exported$0);
    c = cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$readAllFilesAsync$lambda$_4_2_handleEvent$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
    c = cgxgbta_AssetDownloadImpl$2.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetDownloadImpl$2_handleEvent$exported$0);
    c = cgxgbta_AssetDownloadImpl$loadScript$lambda$_5_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetDownloadImpl$loadScript$lambda$_5_0_handleEvent$exported$0);
    c = cgxgbta_AssetLoadImpl$4.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetLoadImpl$4_handleEvent$exported$0);
    c = cgxgbtft_LocalDBStorage$putFile$lambda$_2_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$putFile$lambda$_2_0_handleEvent$exported$0);
    c = cgxgbta_AssetDownloadImpl$loadBinary$lambda$_6_0.prototype;
    c.onTimer = $rt_callWithReceiver(cgxgbta_AssetDownloadImpl$loadBinary$lambda$_6_0_onTimer$exported$0);
    c = cgxgbta_AssetDownloadImpl$loadBinaryInternally$lambda$_7_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetDownloadImpl$loadBinaryInternally$lambda$_7_0_handleEvent$exported$0);
    c = cgxgbta_AssetDownloadImpl$setOnProgress$lambda$_8_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbta_AssetDownloadImpl$setOnProgress$lambda$_8_0_handleEvent$exported$0);
    c = cgxgbta_AssetDownloadImpl$lambda$loadBinaryInternally$3$lambda$_13_0.prototype;
    c.onTimer = $rt_callWithReceiver(cgxgbta_AssetDownloadImpl$lambda$loadBinaryInternally$3$lambda$_13_0_onTimer$exported$0);
    c = cgxgbtft_LocalDBStorage$removeFile$lambda$_3_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxgbtft_LocalDBStorage$removeFile$lambda$_3_0_handleEvent$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));

/*! For license information please see main.a5f19399.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_2fa_verification_input=self.webpackChunkreact_2fa_verification_input||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/VerificationInput.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomButtonStyle:()=>CustomButtonStyle,CustomErrorStyle:()=>CustomErrorStyle,CustomInputStyle:()=>CustomInputStyle,CustomLength:()=>CustomLength,Primary:()=>Primary,WithButton:()=>WithButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VerificationInput_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),verificationInput=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/stories/verificationInput.css"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(verificationInput.Z,options);verificationInput.Z.locals;__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js");var styles=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/styles.css"),styles_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(styles.Z,styles_options);styles.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function VerificationInput(_ref){var value=_ref.value,position=_ref.position,handleChange=_ref.handleChange,handleFocus=_ref.handleFocus,handleBlur=_ref.handleBlur,isError=_ref.isError,className=_ref.className,errorClassName=_ref.errorClassName,inputRef=(0,react.useRef)(),tab=(0,react.useCallback)((function(e){var _e$target,_e$target$nextSibling,_e$target2,_e$target2$previousSi;return e.data?null===(_e$target=e.target)||void 0===_e$target||null===(_e$target$nextSibling=_e$target.nextSibling)||void 0===_e$target$nextSibling?void 0:_e$target$nextSibling.focus():null===(_e$target2=e.target)||void 0===_e$target2||null===(_e$target2$previousSi=_e$target2.previousSibling)||void 0===_e$target2$previousSi?void 0:_e$target2$previousSi.focus()}),[]);return(0,react.useEffect)((function(){var input=inputRef.current;return input.addEventListener("input",tab),function(){return input.removeEventListener("input",tab)}}),[tab]),(0,jsx_runtime.jsx)("input",{ref:inputRef,className:className+" "+(isError?errorClassName:""),type:"text",value,onChange:function onChange(e){return handleChange({index:position,value:e.target.value})},onFocus:handleFocus,onBlur:handleBlur,maxLength:1,"data-testid":"verify-input"})}function Verification(_ref2){var _ref2$slots=_ref2.slots,slots=void 0===_ref2$slots?6:_ref2$slots,_ref2$handleVerify=_ref2.handleVerify,handleVerify=void 0===_ref2$handleVerify?function(){}:_ref2$handleVerify,_ref2$errorMessage=_ref2.errorMessage,errorMessage=void 0===_ref2$errorMessage?"The field is required":_ref2$errorMessage,_ref2$isAutomaticVeri=_ref2.isAutomaticVerify,isAutomaticVerify=void 0===_ref2$isAutomaticVeri||_ref2$isAutomaticVeri,_ref2$verifyInputClas=_ref2.verifyInputClassName,verifyInputClassName=void 0===_ref2$verifyInputClas?"verificationInput":_ref2$verifyInputClas,_ref2$verifyInputErro=_ref2.verifyInputErrorClassName,verifyInputErrorClassName=void 0===_ref2$verifyInputErro?"error":_ref2$verifyInputErro,_ref2$verifyErrorMess=_ref2.verifyErrorMessageClassName,verifyErrorMessageClassName=void 0===_ref2$verifyErrorMess?"errorRow":_ref2$verifyErrorMess,_ref2$verifyButtonCla=_ref2.verifyButtonClassName,verifyButtonClassName=void 0===_ref2$verifyButtonCla?"btn btnOutlined":_ref2$verifyButtonCla,_ref2$verifyButtonTex=_ref2.verifyButtonText,verifyButtonText=void 0===_ref2$verifyButtonTex?"Verify":_ref2$verifyButtonTex,pasteRef=(0,react.useRef)(),_useState2=_slicedToArray((0,react.useState)(Array.from({length:slots},(function(){return""}))),2),content=_useState2[0],setContent=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),isVisited=_useState4[0],setIsVisited=_useState4[1],handleFocus=(0,react.useCallback)((function(){return setIsVisited(!1)}),[]),handleBlur=(0,react.useCallback)((function(){return setIsVisited(!0)}),[]),handleSplitPaste=(0,react.useCallback)((function(e){var arry=e.clipboardData.getData("text/plain").split("");setContent((function(prevState){return prevState.map((function(value,index){return arry[index]||value}))}))}),[]),isDisabled=(0,react.useMemo)((function(){return content.some((function(value){return""===value}))}),[content]),handleSingleChange=(0,react.useCallback)((function(_ref3){var index=_ref3.index,value=_ref3.value;setContent((function(prevState){var newState=_toConsumableArray(prevState);return newState[index]=value,newState}))}),[]);return(0,react.useEffect)((function(){var pasteContainer=pasteRef.current;return pasteContainer.addEventListener("paste",handleSplitPaste),function(){return pasteContainer.removeEventListener("paste",handleSplitPaste)}}),[pasteRef,handleSplitPaste]),(0,react.useEffect)((function(){!isDisabled&&isAutomaticVerify&&handleVerify(content)}),[isDisabled,content,handleVerify,isAutomaticVerify]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{ref:pasteRef,children:[(0,jsx_runtime.jsx)("div",{children:content.map((function(value,position){return(0,jsx_runtime.jsx)(VerificationInput,{value,position,handleChange:handleSingleChange,handleFocus,handleBlur,isError:isVisited&&isDisabled,errorClassName:verifyInputErrorClassName,className:verifyInputClassName},position)}))}),(0,jsx_runtime.jsx)("div",{className:verifyErrorMessageClassName,"data-testid":"error-row",children:isVisited&&isDisabled?errorMessage:""}),!isAutomaticVerify&&(0,jsx_runtime.jsx)("button",{className:verifyButtonClassName,onClick:handleVerify,disabled:isDisabled,children:verifyButtonText})]})})}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(void 0===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}VerificationInput.displayName="VerificationInput",Verification.__docgenInfo={description:"",methods:[],displayName:"Verification",props:{slots:{defaultValue:{value:"6",computed:!1},required:!1},handleVerify:{defaultValue:{value:"() => {}",computed:!1},required:!1},errorMessage:{defaultValue:{value:"'The field is required'",computed:!1},required:!1},isAutomaticVerify:{defaultValue:{value:"true",computed:!1},required:!1},verifyInputClassName:{defaultValue:{value:"'verificationInput'",computed:!1},required:!1},verifyInputErrorClassName:{defaultValue:{value:"'error'",computed:!1},required:!1},verifyErrorMessageClassName:{defaultValue:{value:"'errorRow'",computed:!1},required:!1},verifyButtonClassName:{defaultValue:{value:"'btn btnOutlined'",computed:!1},required:!1},verifyButtonText:{defaultValue:{value:"'Verify'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component.js"]={name:"Verification",docgenInfo:Verification.__docgenInfo,path:"src/component.js"});const VerificationInput_stories={title:"Verification Input",component:Verification,argTypes:{handleVerify:{name:"handleVerify",description:"callback function that receives the values of the inputs",type:{name:"function"}},slots:{name:"slots",type:{name:"number"}},errorMessage:{name:"errorMessage",type:{name:"string"}},isAutomaticVerify:{name:"isAutomaticVerify",type:{name:"boolean"},control:{type:null}},verifyInputClassName:{name:"verifyInputClassName",type:{name:"string"},control:{type:null}},verifyInputErrorClassName:{name:"verifyInputErrorClassName",type:{name:"string"},control:{type:null}},verifyErrorMessageClassName:{name:"verifyErrorMessageClassName",type:{name:"string"},control:{type:null}},verifyButtonClassName:{name:"verifyButtonClassName",type:{name:"string"},control:{type:null}},verifyButtonText:{name:"verifyButtonText",type:{name:"string"}}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(Verification,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={handleVerify:function handleVerify(code){console.log("The code is "+code)}};var CustomLength=Template.bind({});CustomLength.args={slots:8};var CustomInputStyle=Template.bind({});CustomInputStyle.args={verifyInputClassName:"rounded"};var WithButton=Template.bind({});WithButton.args={isAutomaticVerify:!1};var CustomButtonStyle=Template.bind({});CustomButtonStyle.args={isAutomaticVerify:!1,verifyButtonClassName:"warn",verifyButtonText:"Do not push me"};var CustomErrorStyle=Template.bind({});CustomErrorStyle.args={verifyInputErrorClassName:"errorInput",verifyErrorMessageClassName:"errorMessage",errorMessage:"C'mon man!"},CustomErrorStyle.play=function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(_ref){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context.next=4,esm.mV.click(canvas.getAllByTestId("verify-input")[0]);case 4:return _context.next=6,esm.mV.click(canvas.getByTestId("error-row"));case 6:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}(),Primary.parameters=Object.assign({storySource:{source:"(args) => <Verification {...args} />"}},Primary.parameters),CustomLength.parameters=Object.assign({storySource:{source:"(args) => <Verification {...args} />"}},CustomLength.parameters),CustomInputStyle.parameters=Object.assign({storySource:{source:"(args) => <Verification {...args} />"}},CustomInputStyle.parameters),WithButton.parameters=Object.assign({storySource:{source:"(args) => <Verification {...args} />"}},WithButton.parameters),CustomButtonStyle.parameters=Object.assign({storySource:{source:"(args) => <Verification {...args} />"}},CustomButtonStyle.parameters),CustomErrorStyle.parameters=Object.assign({storySource:{source:"(args) => <Verification {...args} />"}},CustomErrorStyle.parameters);var __namedExportsOrder=["Primary","CustomLength","CustomInputStyle","WithButton","CustomButtonStyle","CustomErrorStyle"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/stories/verificationInput.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rounded {\n  width: 30px;\n  height: 30px;\n  margin: 8px;\n  margin-left: 0;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  text-align: center;\n}\n\n@keyframes throb {\n  0% {\n    font-size: 20px;\n  }\n  50% {\n    font-size: 25px;\n  }\n  100% {\n    font-size: 20px;\n  }\n}\n\n@keyframes borderPulse {\n  0% {\n    border-width: 1px;\n  }\n  50% {\n    border-width: 3px;\n  }\n  100% {\n    border-width: 1px;\n  }\n}\n\n.errorMessage {\n  color: red;\n  font-size: 20px;\n  font-weight: bold;\n  animation: throb 3s infinite;\n}\n\n.errorInput {\n  border-color: red;\n  animation: borderPulse 3s infinite;\n}\n\n.warn {\n  width: fit-content;\n  height: 48px;\n  border-radius: 4px;\n  border-color: red;\n  color: black;\n}\n\n.warn:disabled {\n  color: lightcoral;\n}\n","",{version:3,sources:["webpack://./src/stories/verificationInput.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB",sourcesContent:[".rounded {\n  width: 30px;\n  height: 30px;\n  margin: 8px;\n  margin-left: 0;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  text-align: center;\n}\n\n@keyframes throb {\n  0% {\n    font-size: 20px;\n  }\n  50% {\n    font-size: 25px;\n  }\n  100% {\n    font-size: 20px;\n  }\n}\n\n@keyframes borderPulse {\n  0% {\n    border-width: 1px;\n  }\n  50% {\n    border-width: 3px;\n  }\n  100% {\n    border-width: 1px;\n  }\n}\n\n.errorMessage {\n  color: red;\n  font-size: 20px;\n  font-weight: bold;\n  animation: throb 3s infinite;\n}\n\n.errorInput {\n  border-color: red;\n  animation: borderPulse 3s infinite;\n}\n\n.warn {\n  width: fit-content;\n  height: 48px;\n  border-radius: 4px;\n  border-color: red;\n  color: black;\n}\n\n.warn:disabled {\n  color: lightcoral;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/styles.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".verificationInput {\n  width: 30px;\n  height: 40px;\n  margin: 8px;\n  margin-left: 0;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.error {\n  border-color: #db433b;\n}\n\n.errorRow {\n  text-align: left;\n  min-height: 17px;\n  color: #db433b;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  margin-bottom: 13px;\n}\n\n.btn {\n  width: 92px;\n  height: 48px;\n  border-radius: 4px;\n}\n\n.btnOutlined {\n  background-color: transparent;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B",sourcesContent:[".verificationInput {\n  width: 30px;\n  height: 40px;\n  margin: 8px;\n  margin-left: 0;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.error {\n  border-color: #db433b;\n}\n\n.errorRow {\n  text-align: left;\n  min-height: 17px;\n  color: #db433b;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  margin-bottom: 13px;\n}\n\n.btn {\n  width: 92px;\n  height: 48px;\n  border-radius: 4px;\n}\n\n.btnOutlined {\n  background-color: transparent;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/VerificationInput.stories.jsx":"./src/stories/VerificationInput.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[199],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);
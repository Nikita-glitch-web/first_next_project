(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9330)}])},6390:function(e,n,t){"use strict";t.d(n,{I:function(){return l}});var r=t(5893);t(7294);var a=t(3967),o=t.n(a),s=t(9542),i=t.n(s);let l=e=>{let{errorMessage:n,value:t,type:a,placeholder:s,onFocus:l,onBlur:u,onChange:c,name:m,tooltip:p}=e,d="".concat(m+Date.now());return(0,r.jsxs)("div",{className:i().input_wrapper,children:[(0,r.jsxs)("div",{className:i().form_group,children:[(0,r.jsx)("input",{type:a,id:d,className:o()(i().form_field,{[i().notValid]:n}),placeholder:s,onFocus:l,onChange:c,onBlur:u,value:t,name:m}),(0,r.jsx)("label",{htmlFor:d,className:i().form_label,children:s})]}),n&&(0,r.jsx)("span",{className:i().error_message,children:n}),p&&(0,r.jsx)("span",{className:i().tooltip,children:p})]})}},9839:function(e,n,t){"use strict";t.d(n,{p:function(){return u}});var r=t(5893);t(7294);var a=t(7664),o=t.n(a),s={src:"/interview_work//_next/static/media/Preloader.bae432ed.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEUA2dAAxtUAw+EAvdIAvNUAvNMAvNIAu9IAwKkAtdoAt88AttAAstIAAAAAvNMAvNIAvdMAvdIAvNMAvNIAvdIAvNIAvdMAvdIAvNIAvdMAvdIAvNIAvdMAvNIAvNIAvNIAvNIAvdMAvNIAvdMAvNMAvNIAvNIAvdMAvdIAvNKxTyD8AAAAKnRSTlMAAAAAAAAAAAAAAAAAAAEBAgICAgUwMTIyRkZGSEiwwsbHx8jIyMvR0dGvINlnAAAAR0lEQVR42gVACRZAIBD9ZLIrCiGVnftf0EMtmHb3wCGIl/H6jWBEqeSLh66oEF2+w0WyaVqcuGZSimxA/9gsmV4DZsKxecN/llIEmwdzxhcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},i=t(5675),l=t.n(i);let u=()=>(0,r.jsx)("div",{className:o().preloader,children:(0,r.jsx)(l(),{className:o().loader,src:s,alt:""})})},9330:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(5893),a=t(7294),o=t(3967),s=t.n(o),i=t(1664),l=t.n(i),u=t(870),c=t.n(u),m=t(5507),p=t(6390),d=t(6627),_=t.n(d),h=t(9542),f=t.n(h);let g=e=>{let{value:n,onFocus:t,onBlur:a,onChange:o,name:s,...i}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(_(),{mask:"+380 (99) 999-99-99",value:n,onFocus:t,onBlur:a,onChange:o,name:s,children:e=>(0,r.jsx)(p.I,{...e,...i,placeholder:"Phone"})}),(0,r.jsx)("label",{className:f().label_phone,htmlFor:"phone",children:"+38 (XX) XXX - XX - XX"})]})};var v=t(8563),b=t.n(v);let w=e=>{let{position:n,selectedPosition:t,onChange:a}=e;return n?(console.log(">>>>>",t,n.name,n),(0,r.jsxs)("label",{className:b().pure_material_radio,children:[(0,r.jsx)("input",{type:"radio",value:n.id,name:"group",checked:t===String(n.id),onChange:e=>{a&&a(e.target.value)},className:b().radio_buttons__input}),(0,r.jsx)("span",{className:b().radio_buttons__span,children:n.name})]},n.id)):null};var k=t(9839),x=t(5066),A=t(6310),S=e=>{let{validTypes:n=["image/jpeg","image/jpg","image/png"],maxSize:t=5242880,minWidth:r=200,minHeight:o=200,maxWidth:s=5e3,maxHeight:i=5e3}=e,[l,u]=(0,a.useState)(""),[c,m]=(0,a.useState)(""),p=e=>new Promise((n,t)=>{let r=new Image;r.onload=()=>n(!0),r.onerror=()=>t(Error("Invalid image")),r.src=URL.createObjectURL(e)}),d=e=>new Promise((n,t)=>{let a=new Image;a.onload=()=>{a.width<r||a.height<o?t(Error("Image size should be at least ".concat(r,"x").concat(o,"px"))):a.width>s||a.height>i?t(Error("Image size should not exceed ".concat(s,"x").concat(i,"px"))):n(!0)},a.onerror=()=>t(Error("Invalid image.")),a.src=URL.createObjectURL(e)});return{imageError:l,fileName:c,handleFileChange:(0,a.useCallback)(async(e,r)=>{if(e){if(!n.includes(e.type)){u("Only JPG and PNG images are allowed."),r("photo",null);return}if(e.size>t){u("Image size shouldn't exceed 5MB."),r("photo",null);return}try{await p(e),await d(e),r("photo",e),m(e.name),u("")}catch(e){u(e.message),r("photo",null)}}},[n,t,r,o,s,i])}},I=function(e,n){let[t,r]=(0,a.useState)(!1),[o,s]=(0,a.useState)(null);return{makeRequest:async t=>{r(!0),s(null);try{let r=await fetch(e,{method:n,headers:{Accept:"application/json",..."GET"!==n&&{"Content-Type":"application/json"}},..."GET"!==n&&t&&{body:JSON.stringify(t)}});if(!r.ok)throw Error("HTTP error! status: ".concat(r.status));return await r.json()}catch(e){s(e.message||"Something went wrong")}finally{r(!1)}},loading:t,error:o}};let C=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)([]),[o,i]=(0,a.useState)(""),[u,d]=(0,a.useState)(!1),{imageError:_,fileName:h,handleFileChange:f}=S({}),{makeRequest:v,loading:b,error:C}=I("https://frontend-test-assignment-api.abz.agency/api/v1/users","POST"),{makeRequest:N,loading:j,error:M}=I("https://frontend-test-assignment-api.abz.agency/api/v1/positions","GET");(0,a.useEffect)(()=>{(async()=>{try{let e=await N();if(e.positions&&(t(e.positions),e.positions.length>0)){let n=e.positions[0].id;i(String(n)),P("position",n)}}catch(e){console.error("Ошибка при получении позиций:",M)}})()},[]);let y=A.Ry({name:A.Z_().min(3,"Имя должно содержать минимум 3 символа").required("Имя обязательно"),email:A.Z_().matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/,"Должно содержать '@' и доменное имя").required("Электронная почта обязательна"),phone:A.Z_().min(3,"Телефон должен содержать минимум 3 символа").required("Телефон обязателен"),position:A.Z_().required("Позиция обязательна"),photo:A.nK().required("Фото обязательно")}),{values:F,errors:O,touched:E,handleChange:D,handleBlur:V,handleSubmit:T,setFieldValue:P,isValid:R,dirty:B}=(0,x.TA)({initialValues:{name:"",email:"",phone:"",position:o,photo:null},validationSchema:y,onSubmit:async(e,n)=>{let{setFieldError:t}=n,r=new FormData;r.append("name",e.name),r.append("email",e.email),r.append("phone",e.phone),r.append("position_id",o),r.append("photo",e.photo);try{await v(r),d(!0)}catch(e){t("email","Ошибка при регистрации")}}});return(0,r.jsx)(r.Fragment,{children:b||j?(0,r.jsx)(k.p,{}):u?(0,r.jsxs)("div",{className:c().success_screen,children:[(0,r.jsx)("h4",{className:c().success_title,children:"Thank you for joining us , now register"}),(0,r.jsx)("img",{src:"./images/Success.png",alt:"Success",className:c().success_img}),(0,r.jsx)("div",{className:c().btn_register_wrapper,children:(0,r.jsx)(l(),{href:"/signup",children:(0,r.jsx)(m.z,{className:c().btn_submit,children:"Register"})})})]}):(0,r.jsxs)("form",{className:c().form,id:"signUpForm",onSubmit:T,children:[(0,r.jsx)("h3",{className:c().form_title,children:"Join us!"}),(0,r.jsxs)("div",{className:c().form_content_wrapper,children:[(0,r.jsx)(p.I,{id:"name",value:F.name,type:"text",placeholder:"Your name",onChange:D,onBlur:V,name:"name",errorMessage:E.name&&O.name}),(0,r.jsx)(p.I,{id:"email",value:F.email,type:"email",placeholder:"Email",onChange:D,onBlur:V,name:"email",errorMessage:E.email&&O.email}),(0,r.jsx)(g,{id:"phone",value:F.phone,type:"tel",placeholder:"Phone",onChange:D,onBlur:V,name:"phone",errorMessage:E.phone&&O.phone}),(0,r.jsxs)("div",{className:c().radio_wrapper,children:[(0,r.jsx)("h2",{className:c().radio_buttons__title,children:"Select your position"}),n.map(e=>(0,r.jsx)(w,{position:e,selectedPosition:o,onChange:e=>{i(e),P("position",e)}},e.id))]}),(0,r.jsxs)("div",{className:s()(c().upload_container,{[c().error_border]:_}),children:[(0,r.jsx)("button",{type:"button",onClick:()=>{e.current&&e.current.click()},className:s()(c().upload_button,{[c().error_btn_input]:_}),children:"Upload"}),(0,r.jsx)("input",{ref:e,className:c().img_input,type:"file",name:"photo",onChange:e=>{var n;let t=null===(n=e.target.files)||void 0===n?void 0:n[0];t&&f(t,P)},onBlur:V,style:{display:"none"}}),(0,r.jsx)("div",{className:c().image_preview_container,children:h?h.length<=20?h:"".concat(h.substring(0,7),"...").concat(h.substring(h.length-10)):"Upload your photo"}),_&&(0,r.jsx)("div",{className:c().error_message,children:_})]}),(C||M)&&(0,r.jsx)("div",{className:c().error_message,children:C||M}),(0,r.jsx)("div",{className:c().form_btn_wrapper,children:(0,r.jsx)(m.z,{type:"submit",disabled:!R||!B||b,className:c().btn_submit,children:"Sign up"})})]})]})})};var N=t(8792),j=t.n(N),M=t(3834);let y=()=>(0,r.jsx)("div",{className:j().banner_content_box,children:(0,r.jsx)("div",{className:j().banner_content,children:(0,r.jsxs)("div",{className:j().banner_text_box,children:[(0,r.jsx)("h1",{className:j().banner_title,children:"Test assignment for front-end developer"}),(0,r.jsx)("p",{className:j().bannner_text,children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as theyll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),(0,r.jsx)(M.z,{href:"#signUpForm",className:s()(j().banner_btn),children:"Sign up"})]})})});var F=t(1384),O=t.n(F);let E=()=>{let[e,n]=(0,a.useState)([]),[t,o]=(0,a.useState)(1),[i,l]=(0,a.useState)(!1),[u,c]=(0,a.useState)(null),[p,d]=(0,a.useState)(!0);(0,a.useEffect)(()=>{_(t)},[]);let _=async e=>{l(!0);try{let t=await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(e,"&count=6")),r=await t.json();r.users.length>0?n(e=>[...e,...r.users]):d(!1),l(!1)}catch(e){c(e),l(!1)}},h=e=>{e.currentTarget.src="https://via.placeholder.com/80",e.currentTarget.className=O().member_photo};return(0,r.jsxs)("div",{id:"teamMembers",className:O().team_members,children:[(0,r.jsx)("h2",{className:O().members_title,children:"Working with GET request"}),(0,r.jsx)("div",{className:O().members_grid,children:(0,r.jsx)("ul",{className:O().members_list,children:e.map((e,n)=>(0,r.jsx)("li",{className:O().member_card,children:(0,r.jsxs)("div",{className:O().member_text_wrapper,children:[(0,r.jsx)("img",{src:e.photo,alt:e.name,className:s()(O().member_photo,{[O().error_photo]:!e.photo}),onError:h}),(0,r.jsx)("p",{className:O().member_title,children:e.name}),(0,r.jsx)("p",{className:O().member_text,children:e.position}),(0,r.jsx)("p",{className:O().member_text,children:e.email}),(0,r.jsx)("p",{className:O().member_text,children:e.phone})]})},n))})}),i&&(0,r.jsx)(k.p,{}),u&&(0,r.jsxs)("div",{children:["Error: ",u.message]}),(0,r.jsx)("div",{className:O().btn_wrapper,children:p&&!i&&(0,r.jsx)(m.z,{onClick:()=>{o(e=>e+1),_(t+1)},children:"Show more"})})]})};function D(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(y,{}),(0,r.jsx)(E,{}),(0,r.jsx)(C,{})]})}},7664:function(e){e.exports={loader:"Preloader_loader__oAWgc",preloader:"Preloader_preloader__qCJfx"}},8792:function(e){e.exports={banner_content_box:"LandingBanner_banner_content_box___MUac",banner_content:"LandingBanner_banner_content__T8CwB",banner_title:"LandingBanner_banner_title__s6Osy",bannner_text:"LandingBanner_bannner_text__QCdIK",banner_text_box:"LandingBanner_banner_text_box__uEwiB",banner_btn:"LandingBanner_banner_btn__gRNqg"}},1384:function(e){e.exports={body:"TeamMembers_body__D2kMy",members_grid:"TeamMembers_members_grid__zFe25",members_list:"TeamMembers_members_list__ADlMd",member_card:"TeamMembers_member_card__IHVys",member_photo:"TeamMembers_member_photo__Qjp9a",members_title:"TeamMembers_members_title__3ar2V",member_text_wrapper:"TeamMembers_member_text_wrapper__huZ1D",member_text:"TeamMembers_member_text__98UDU",btn_wrapper:"TeamMembers_btn_wrapper__XzUwa",member_title:"TeamMembers_member_title__FP5SP"}},870:function(e){e.exports={form:"Form_form__ngj4g",form_title:"Form_form_title__dCWru",form_content_wrapper:"Form_form_content_wrapper__HM9kw",upload_container:"Form_upload_container__IrOC3",upload_button:"Form_upload_button__ZM9hq",image_input_wrapper:"Form_image_input_wrapper__I9iyQ",btn_register_wrapper:"Form_btn_register_wrapper__lI9Sd",image_preview:"Form_image_preview__h6nM4",radio_buttons__title:"Form_radio_buttons__title__j0cTx",form_label:"Form_form_label__HWyrw",form_input:"Form_form_input__5FFsH",form_input_last:"Form_form_input_last__vORmL",img_input:"Form_img_input__KKpRV",form_btn_wrapper:"Form_form_btn_wrapper__N5Y1U",submit_btn:"Form_submit_btn__DCVdI",checkbox_title:"Form_checkbox_title__tEKmk",custom_radio:"Form_custom_radio__8JbuK",btn_wrapper:"Form_btn_wrapper__afl7_",success_img:"Form_success_img__5Jgj4",input_error:"Form_input_error__5rPD2",radio_wrapper:"Form_radio_wrapper__iFhCg",success_screen:"Form_success_screen__2FU8r",success_title:"Form_success_title__CnrbL",radio_button:"Form_radio_button__oEztS",image_preview_container:"Form_image_preview_container__JUUWb",placeholder:"Form_placeholder__SiFjP",error_message:"Form_error_message__M61_N",file_name:"Form_file_name__GCzYd",error_border:"Form_error_border__RFqnW",error_btn_input:"Form_error_btn_input__p7_Ch"}},9542:function(e){e.exports={input_wrapper:"Input_input_wrapper__9IHkD",form_group:"Input_form_group__bmwLs",form_field:"Input_form_field__TNA8t",notValid:"Input_notValid__r9ktJ",form_label:"Input_form_label__R6kM2",label_phone:"Input_label_phone__SRJI1",error_message:"Input_error_message__B_P0F",tooltip:"Input_tooltip__Avmrq"}},8563:function(e){e.exports={radio_buttons:"RadioButton_radio_buttons__SWJuP",pure_material_radio:"RadioButton_pure_material_radio__6oqS7",radio_buttons_title:"RadioButton_radio_buttons_title__4J8wj"}},6627:function(e,n,t){e.exports=t(3462)},3462:function(e,n,t){"use strict";var r,a=(r=t(7294))&&"object"==typeof r&&"default"in r?r.default:r,o=t(3935);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,r,a,o,s,i){if(!e){var l;if(void 0===n)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,r,a,o,s,i],c=0;(l=Error(n.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}};function u(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",t-n),r.select()}}var c={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function m(e,n,t){var r="",a="",o=null,s=[];if(void 0===n&&(n="_"),null==t&&(t=c),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach(function(e){i=!i&&"\\"===e||(i||!t[e]?(s.push(r.length),r.length===s.length-1&&(a+=e)):o=r.length+1,r+=e,!1)}),{maskChar:n,formatChars:t,prefix:a,mask:r,lastEditablePosition:o,permanents:s}}function p(e,n){return -1!==e.permanents.indexOf(n)}function d(e,n,t){var r=e.mask,a=e.formatChars;return!!t&&(p(e,n)?r[n]===t:new RegExp(a[r[n]]).test(t))}function _(e,n){return n.split("").every(function(n,t){return p(e,t)||!d(e,t,n)})}function h(e,n){var t=e.maskChar,r=e.prefix;if(!t){for(;n.length>r.length&&p(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var a=r.length,o=n.length;o>=r.length;o--){var s=n[o];if(!p(e,o)&&d(e,o,s)){a=o+1;break}}return a}function f(e,n){return h(e,n)===e.mask.length}function g(e,n){var t=e.maskChar,r=e.mask,a=e.prefix;if(!t){for((n=v(e,"",n,0)).length<a.length&&(n=a);n.length<r.length&&p(e,n.length);)n+=r[n.length];return n}if(n)return v(e,g(e,""),n,0);for(var o=0;o<r.length;o++)p(e,o)?n+=r[o]:n+=t;return n}function v(e,n,t,r){var a=e.mask,o=e.maskChar,s=e.prefix,i=t.split(""),l=f(e,n);return!o&&r>n.length&&(n+=a.slice(n.length,r)),i.every(function(t){for(var i,u;p(e,u=r)&&t!==a[u];){if(r>=n.length&&(n+=a[r]),i=r,o&&p(e,i)&&t===o)return!0;if(++r>=a.length)return!1}return!d(e,r,t)&&t!==o||(r<n.length?n=o||l||r<s.length?n.slice(0,r)+t+n.slice(r+1):g(e,n=n.slice(0,r)+t+n.slice(r)):o||(n+=t),++r<a.length)}),n}function b(e,n){for(var t=e.mask,r=n;r<t.length;++r)if(!p(e,r))return r;return null}function w(e){return e||0===e?e+"":""}function k(e){return"function"==typeof e}function x(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function A(e){return(x()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function S(e){(x()||clearTimeout)(e)}var I=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=A(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(S(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=o.findDOMNode(i(i(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=h(t.maskOptions,t.value),n=b(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,r){void 0===r&&(r={});var a=t.getInputDOMNode(),o=t.isFocused();a&&o&&(r.deferred||u(a,e,n),null!==t.selectionDeferId&&S(t.selectionDeferId),t.selectionDeferId=A(function(){t.selectionDeferId=null,u(a,e,n)}),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(n=-r.moveStart("character",-e.value.length),t=-r.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,r=e.maskChar,a=e.permanents,o=e.formatChars;return{mask:n,maskChar:r,permanents:a,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:o}},t.isInputAutofilled=function(e,n,r,a){var o=t.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(e){}return!t.focused||a.end<r.length&&n.end===e.length},t.onChange=function(e){var n,r,a,o,s,l,u,c,m,_,h,f,w,x,A,S,I,C,N,j=i(i(t)).beforePasteState,M=i(i(t)).previousSelection,y=t.props.beforeMaskedValueChange,F=t.getInputValue(),O=t.value,E=t.getSelection();t.isInputAutofilled(F,E,O,M)&&(O=g(t.maskOptions,""),M={start:0,end:0,length:0}),j&&(M=j.selection,O=j.value,E={start:M.start+F.length,end:M.start+F.length,length:0},F=O.slice(0,M.start)+F+O.slice(M.end),t.beforePasteState=null);var D=(n=t.maskOptions,r=F,a=E,o=O,s=M,f=n.mask,w=n.prefix,x=n.lastEditablePosition,A=r,S="",I=0,C=0,N=Math.min(s.start,a.start),a.end>s.start?(l=S=A.slice(s.start,a.end),u=N,c=n.mask,m=n.maskChar,_=l.split(""),h=u,_.every(function(e){for(var t;p(n,t=u)&&e!==c[t];)if(++u>=c.length)return!1;return(d(n,u,e)||e===m)&&u++,u<c.length}),C=(I=u-h)?s.length:0):A.length<o.length&&(C=o.length-A.length),A=o,C&&(1!==C||s.length||(N=s.start===a.start?b(n,a.start):function(e,n){for(var t=n;0<=t;--t)if(!p(e,t))return t;return null}(n,a.start)),A=function(e,n,t,r){var a=t+r,o=e.maskChar,s=e.mask,i=e.prefix,l=n.split("");if(o)return l.map(function(n,r){return r<t||a<=r?n:p(e,r)?s[r]:o}).join("");for(var u=a;u<l.length;u++)p(e,u)&&(l[u]="");return t=Math.max(i.length,t),l.splice(t,a-t),g(e,n=l.join(""))}(n,A,N,C)),A=v(n,A,S,N),(N+=I)>=f.length?N=f.length:N<w.length&&!I?N=w.length:N>=w.length&&N<x&&I&&(N=b(n,N)),S||(S=null),{value:A=g(n,A),enteredString:S,selection:{start:N,end:N}}),V=D.enteredString,T=D.selection,P=D.value;if(k(y)){var R=y({value:P,selection:T},{value:O,selection:M},V,t.getBeforeMaskedValueChangeConfig());P=R.value,T=R.selection}t.setInputValue(P),k(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(T.start,T.end,{deferred:!0}):t.setSelection(T.start,T.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions,a=r.mask,o=r.prefix;if(t.focused=!0,t.mounted=!0,a){if(t.value)h(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var s=g(t.maskOptions,o),i=g(t.maskOptions,s),l=h(t.maskOptions,i),u=b(t.maskOptions,l),c={start:u,end:u};if(k(n)){var m=n({value:i,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());i=m.value,c=m.selection}var p=i!==t.getInputValue();p&&t.setInputValue(i),p&&k(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}k(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,r&&!t.props.alwaysShowMask&&_(t.maskOptions,t.value)){var a="";k(n)&&(a=n({value:a,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var o=a!==t.getInputValue();o&&t.setInputValue(a),o&&k(t.props.onChange)&&t.props.onChange(e)}k(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){!t.focused&&document.addEventListener&&(t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(n){if(document.removeEventListener("mouseup",e),t.focused){var r=Math.max(Math.abs(n.clientX-t.mouseDownX),Math.abs(n.clientY-t.mouseDownY)),a=(new Date).getTime()-t.mouseDownTime;(r<=10&&a<=200||r<=5&&a<=300)&&t.setCursorToEnd()}})),k(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){k(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&k(t.props.inputRef)&&t.props.inputRef(e)};var r=n.mask,a=n.maskChar,s=n.formatChars,l=n.alwaysShowMask,c=n.beforeMaskedValueChange,f=n.defaultValue,x=n.value;t.maskOptions=m(r,a,s),null==f&&(f=""),null==x&&(x=f);var I=w(x);if(t.maskOptions.mask&&(l||I)&&(I=g(t.maskOptions,I),k(c))){var C=n.value;null==n.value&&(C=f),I=c({value:I,selection:null},{value:C=w(C),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=I,t}n.prototype=Object.create(e.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),r=0;r<t.length;r++){var a=t[r],o=Object.getOwnPropertyDescriptor(n,a);o&&o.configurable&&void 0===e[a]&&Object.defineProperty(e,a,o)}}(n.prototype.constructor=n,e);var t=n.prototype;return t.componentDidMount=function(){var e;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=navigator.userAgent,/windows/i.test(e)&&/phone/i.test(e)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,r=n.alwaysShowMask,a=n.mask,o=n.maskChar,s=n.formatChars,i=this.maskOptions,l=r||this.isFocused(),u=null!=this.props.value,c=u?w(this.props.value):this.value,p=e?e.start:null;if(this.maskOptions=m(a,o,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var d=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(d||this.maskOptions.mask&&(c||l))&&(c=g(this.maskOptions,c)),d){var v=h(this.maskOptions,c);(null===p||v<p)&&(p=f(this.maskOptions,c)?v:b(this.maskOptions,v))}!this.maskOptions.mask||!_(this.maskOptions,c)||l||u&&this.props.value||(c="");var x={start:p,end:p};if(k(t)){var A=t({value:c,selection:x},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=A.value,x=A.selection}this.value=c;var S=this.getInputValue()!==this.value;S?(this.setInputValue(this.value),this.forceUpdate()):d&&this.forceUpdate();var I=!1;null!=x.start&&null!=x.end&&(I=!e||e.start!==x.start||e.end!==x.end),(I||S)&&this.setSelection(x.start,x.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&S(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),r=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)0<=n.indexOf(t=o[r])||(a[t]=e[t]);return a}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){k(t)||l(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=s({},r);o.forEach(function(e){return delete i[e]}),e=t(i),o.filter(function(n){return null!=e.props[n]&&e.props[n]!==r[n]}).length&&l(!1)}else e=a.createElement("input",s({ref:this.handleRef},r));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=r.value&&(u.value=this.value)),e=a.cloneElement(e,u)},n}(a.Component);e.exports=I}},function(e){e.O(0,[38,675,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
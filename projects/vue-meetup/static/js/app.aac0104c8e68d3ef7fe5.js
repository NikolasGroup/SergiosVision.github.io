webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),a={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"supervisor_account",title:"View Meetups",link:"/meetups"},{icon:"room",title:"Organize Meetup",link:"/meetup/add"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}},name:"App"},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[t._v("\n            "+t._s(e.title)+"\n          ")])],1)}),t._v(" "),t.userIsAuthenticated?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("exit_to_app")])],1),t._v(" "),s("v-list-tile-content",[t._v("\n            Logout\n          ")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"red lighten-1",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("SergiosMeetup")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userIsAuthenticated?s("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[s("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1)],1)},staticRenderFns:[]},n=s("VU/8")(a,i,!1,null,null,null).exports,o=s("Sazm"),l=s("/ocq"),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",large:"",router:"",to:"/meetups"}},[t._v("Explore Meetups")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",large:"",router:"",to:"/meetup/add"}},[t._v("Organize Meetup")])],1)],1),t._v(" "),s("v-layout",[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"red",width:7,size:70}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-carousel",t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageurl}},[s("div",{staticClass:"title",staticStyle:{cursor:"pointer"},on:{click:function(s){t.onLoadMeetup(e.id)}}},[t._v(t._s(e.title))])])}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("p",[t._v("Join our awesome meetups!")])])],1)],1)},staticRenderFns:[]};var d=s("VU/8")({computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}},u,!1,function(t){s("xL44")},"data-v-7834c663",null).exports,c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("v-card",{staticClass:"red lighten-4",attrs:{dark:""}},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[s("v-card-media",{attrs:{src:e.imageurl,height:"130px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h5",{staticClass:"mb-0"},[t._v(t._s(e.title))]),t._v(" "),s("div",[t._v(t._s(t._f("date")(e.date)))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:""}},[t._v("arrow_forward")]),t._v("\n                                    View Meetup\n                                ")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]},v=s("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},c,!1,null,null,null).exports,p=s("PJh5"),m=s.n(p),f={data:function(){return{title:"",location:"",imageurl:"",description:"",date:m()().format("YYYY-MM-DD"),time:m()().format("h:mm"),image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageurl&&""!==this.description},submittableDateTime:function(){var t=new Date(this.date);if("string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1];e=e.split(",")[0];var s=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submittableDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups/")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,s=t.target.files;if(s[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file!");var r=new FileReader;r.addEventListener("load",function(){e.imageurl=r.result}),r.readAsDataURL(s[0]),this.image=s[0]}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h2",{staticClass:"red--text lighten-1--text"},[t._v("Create a new meetup")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("form",{on:{submit:function(e){e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",raised:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("img",{attrs:{src:t.imageurl,alt:"",height:"300px"}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description",label:"Description","multi-line":"",id:"description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Choose a Date and Time")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{attrs:{"header-color":"red lighten-1",color:"red lighten-1"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-time-picker",{attrs:{"header-color":"red lighten-1",color:"red lighten-1",format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",type:"submit",disabled:!t.formIsValid}},[t._v("Create Meetup")])],1)],1)],1)])],1)],1)},staticRenderFns:[]},g=s("VU/8")(f,h,!1,null,null,null).exports,x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-card",[e("v-card-title",[e("h3",{staticClass:"red--text lighten-1--text"},[this._v("Coming soon!!!")])])],1)],1)],1)],1)},staticRenderFns:[]},_=s("VU/8")(null,x,!1,null,null,null).exports,w={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignUp:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignUp(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",required:"",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{staticClass:"red lighten-1",attrs:{type:"submit",dark:"",disabled:t.loading,loading:t.loading}},[t._v("\n                                        Sign up\n                                        "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},j=s("VU/8")(w,b,!1,null,null,null).exports,k={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignIn:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignIn(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{staticClass:"red lighten-1",attrs:{type:"submit",dark:"",disabled:t.loading,loading:t.loading}},[t._v("\n                                        Sign in\n                                        "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},D=s("VU/8")(k,y,!1,null,null,null).exports,M={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"red",width:7,size:70}})],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h5",{staticClass:"red--text lighten-1--text"},[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsCreator?[s("v-spacer"),t._v(" "),s("app-edit-meetup",{attrs:{meetup:t.meetup}})]:t._e()],2),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageurl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"red--text lighten-1--text"},[t._v(t._s(t._f("date")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("div",[t.userIsCreator?s("app-edit-meetup-date",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator?s("app-edit-meetup-time",{attrs:{meetup:t.meetup}}):t._e()],1),t._v(" "),s("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?s("app-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]},U=s("VU/8")(M,C,!1,null,null,null).exports,I=s("NYxO"),E=s("Dd8w"),L=s.n(E),z={state:{loadedMeetups:[{imageurl:"https://www.city-journal.org/sites/cj/files/New-York.jpg",id:"23235235",title:"New York",date:new Date,location:"New York",description:"simple1"},{imageurl:"http://www.pitribe.com/pitribe.ashx?act=image&id=176.1911866389",id:"232335235235235",title:"In biggest Hole",date:new Date,location:"Hole",description:"simple2"},{imageurl:"http://images.kuoni.co.uk/73/dubai-39699597-1508946889-ImageGalleryLightboxLarge.jpg",id:"dubai",title:"Dubai",date:new Date,location:"Dubai",description:"simple3"}]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetupData:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date)}},actions:{loadMeetups:function(t,e){var s=t.commit;s("setLoading",!0),o.database().ref("meetups").once("value").then(function(t){var e=[],r=t.val();for(var a in r)e.push({id:a,title:r[a].title,description:r[a].description,location:r[a].location,imageurl:r[a].imageurl,date:r[a].date,creatorId:r[a].creatorId});s("setLoading",!1),s("setLoadedMeetups",e)}).catch(function(t){s("setLoading",!1),console.log(t)})},createMeetup:function(t,e){var s=t.commit,r=t.getters,a={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:r.user.id},i=void 0,n=void 0;o.database().ref("meetups").push(a).then(function(t){return n=t.key}).then(function(t){var s=e.image.name,r=s.slice(s.lastIndexOf("."));return o.storage().ref("meetups/"+t+"."+r).put(e.image)}).then(function(t){return i=t.metadata.downloadURLs[0],o.database().ref("meetups").child(n).update({imageurl:i})}).then(function(){s("createMeetup",L()({},a,{imageurl:i,id:n}))}).catch(function(t){console.log(t)})},updateMeetupData:function(t,e){var s=t.commit;s("setLoading",!0);var r={};e.title&&(r.title=e.title),e.description&&(r.description=e.description),e.date&&(r.date=e.date),o.database().ref("meetups").child(e.id).update(r).then(function(){s("setLoading",!1),s("updateMeetupData",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}},F=s("uqrR"),S=s.n(F),$={state:{user:null},mutations:{registerUserForMeetup:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===s})>=0||(t.user.registeredMeetups.push(s),t.user.fbkeys[s]=e.fbkey)},unregisterUserForMeetup:function(t,e){var s=t.user.registeredMeetups;s.splice(s.findIndex(function(t){return t.id===e}),1),S()(t.user.fbkeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a=r.user;o.database().ref("/users/"+a.id).child("/registrations/").push(e).then(function(t){s("setLoading",!1),s("registerUserForMeetup",{id:e,fbkey:t.key})}).catch(function(t){console.log(t),s("setLoading",!1)})},unregisterUserForMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a=r.user;if(a.fbkeys){var i=a.fbkeys[e];o.database().ref("/users/"+a.id+"/registrations/").child(i).remove().then(function(){s("setLoading",!1),s("unregisterUserForMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbkeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbkeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbkeys:{}})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("setLoading",!0),o.database().ref("/users/"+s.user.id+"/registrations/").once("value").then(function(t){var r=t.val(),a=[],i={};for(var n in r)a.push(r[n]),i[r[n]]=n;var o={id:s.user.id,registeredMeetups:a,fbkeys:i};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;o.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}};r.a.use(I.a);var P=new I.a.Store({modules:{meetup:z,user:$,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),R=function(t,e,s){P.getters.user?s():s("/signin")};r.a.use(l.a);var T=new l.a({routes:[{path:"/",name:"Home",component:d},{path:"/meetups",name:"Meetups",component:v},{path:"/meetup/add",name:"CreateMeetup",component:g,beforeEnter:R},{path:"/meetups/:id",name:"Meetup",props:!0,component:U},{path:"/profile",name:"Profile",component:_,beforeEnter:R},{path:"/signup",name:"SignUp",component:j},{path:"/signin",name:"SignIn",component:D}]}),V=s("3EgV"),q=s.n(V),O=(s("7zck"),{render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{type:"error",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n    "+this._s(this.text)+"\n")])},staticRenderFns:[]}),N=s("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},O,!1,null,null,null).exports,A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",presistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"red lighten-1",attrs:{slot:"activator",dark:"",floating:"",accent:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-text-field",{attrs:{name:"description",label:"Description","multi-line":"",id:"description",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"red lighten-1",attrs:{flat:"",dark:""},on:{click:t.onSaveChanges}},[t._v("Save")]),t._v(" "),s("v-btn",{staticClass:"red lighten-1",attrs:{flat:"",dark:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},H=s("VU/8")({props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}},A,!1,null,null,null).exports,Y={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date);console.log(t);var e=new Date(this.editableDate).getUTCDate(),s=new Date(this.editableDate).getUTCMonth(),r=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.getUTCMonth(s),t.getUTCFullYear(r),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){this.editableDate=m()(this.meetup.date).format("YYYY-MM-DD")}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",presistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"red lighten-1",attrs:{slot:"activator",dark:"",floating:"",accent:""},slot:"activator"},[t._v("\n        Edit Date\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup Date")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-date-picker",{staticStyle:{width:"100%"},attrs:{actions:""},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("Save")]),t._v(" "),s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")])]}}]),model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},B=s("VU/8")(Y,X,!1,null,null,null).exports,W={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[1],s=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){this.editableTime=m()(this.meetup.date).format("h:mm")}},K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",presistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"red lighten-1",attrs:{slot:"activator",dark:"",floating:"",accent:""},slot:"activator"},[t._v("\n        Edit Time\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup Time")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-time-picker",{staticStyle:{width:"100%"},attrs:{actions:"",format:"24hr"},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("Save")]),t._v(" "),s("v-btn",{staticClass:"red lighten-1",attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")])]}}]),model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},G=s("VU/8")(W,K,!1,null,null,null).exports,J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{presistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[s("v-btn",{staticClass:"red lighten-1",attrs:{slot:"activator",dark:"",floating:"",accent:""},slot:"activator"},[t._v("\n        "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?s("v-card-title",[t._v("Unregister from Meetup?")]):s("v-card-title",[t._v("Register for Meetup?")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[t._v("You can always change your decision later on.")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"green--text darken-1",attrs:{dark:"",flat:""},on:{click:t.onAgree}},[t._v("Confirm")]),t._v(" "),s("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=s("VU/8")({props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserForMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}},J,!1,null,null,null).exports;r.a.use(q.a),r.a.config.productionTip=!1,r.a.filter("date",function(t){return new Date(t).toLocaleString(["en-US","ru"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),r.a.component("app-alert",N),r.a.component("app-edit-meetup",H),r.a.component("app-edit-meetup-date",B),r.a.component("app-edit-meetup-time",G),r.a.component("app-register-dialog",Z),new r.a({el:"#app",router:T,store:P,components:{App:n},template:"<App/>",created:function(){var t=this;o.initializeApp({apiKey:"AIzaSyA2XA4NIUyZxuv2UpZzsPSFK-vtEmhaCPU",authDomain:"sergiosmeetupapp.firebaseapp.com",databaseURL:"https://sergiosmeetupapp.firebaseio.com",projectId:"sergiosmeetupapp",storageBucket:"gs://sergiosmeetupapp.appspot.com"}),o.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},uslO:function(t,e,s){var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="uslO"},xL44:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.aac0104c8e68d3ef7fe5.js.map
"use strict";function uploadFile(){var e=new FormData,t=document.getElementById("myfile").files;e.enctype="multipart/form-data",[].slice.call(t,0).forEach(function(t){e.append("myfile",t)});var o=new XMLHttpRequest;o.open("post","/pic/uploadPic",!0),o.onload=function(e){200==this.status&&vue.logData()},o.send(e)}var vue=new Vue({el:"#vueCon",data:{imgSrc1:"<img src='../../picSpace/",imgSrc2:"'/>",content:[]},created:function(){this.logData();var e=new Clipboard(".copy-src");e.on("success",function(e){requestMsg("复制成功"),e.clearSelection()}),e.on("error",function(e){requestMsg("复制失败"),console.error("Action:",e.action),console.error("Trigger:",e.trigger)})},methods:{logData:function(){var e=this;$.ajax({url:"/pic/allPic",type:"post",success:function(t){console.log(t),e.content=t}})}}});
//# sourceMappingURL=../_srcmap/picSpace/pic.js.map

/**
 * Created by nizhiwei-labtop on 2017/6/30.
 */
let vue=new Vue({
    el:'#vueCon',
    data:{
        imgSrc1:"<img src='../../picSpace/",
        imgSrc2:"'/>",
        content:[],
    },
    created:function () {
        this.logData();
        let clipboard = new Clipboard('.copy-src');
        clipboard.on('success', function(e) {
            requestMsg('复制成功');
            e.clearSelection();
        });
        clipboard.on('error', function(e) {
            requestMsg('复制失败');
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    },
    methods: {
        logData(){
            let self=this;
            $.ajax({
                url:'/pic/allPic',
                type:'post',
                success:function (data) {
                    console.log(data);
                    self.content = data;
                }
            });
        }
    }
});
function uploadFile(){
    var formData = new FormData();
    var files = document.getElementById("myfile").files;
    formData.enctype="multipart/form-data";
    var fileArray=[].slice.call(files,0);//类数组转换为数组
    fileArray.forEach(function(file){
        formData.append("myfile",file);//循环遍历把文件对象插到formData对象上
    });
    var xhr = new XMLHttpRequest();
    xhr.open("post","/pic/uploadPic",true);//发送post请求到/upload
    xhr.onload = function (e) {
        if(this.status == 200){
            vue.logData()
        }
    };
    xhr.send(formData);
}


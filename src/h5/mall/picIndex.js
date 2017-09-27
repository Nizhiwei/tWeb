/**
 * Created by nizhiwei-labtop on 2017/7/14.
 */

let vue=new Vue({
    el:'#vueCon',
    data:{
        type:getUrl('name'),
        img:'../../picSpace/picIndex/'+getUrl('name')+'.png'
    },
    methods:{
        url(data){
            return 'picIndex.html?name='+data

        }
    }

});
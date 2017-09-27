/**
 * Created by nizhiwei-labtop on 2017/7/4.
 */
let express = require('express');
let router = express.Router();
let mysql      = require('mysql');
let pool = mysql.createPool({
    host     : '192.168.101.85',
    user     : '51fanbei',
    password : 'Hello1234',
    database : '51fanbei_app'
});
    let con={
        success:true
    };
    pool.query("SELECT name,goods_icon,id,goods_url,rebate_amount,sale_amount,thumbnail_icon FROM af_goods WHERE id BETWEEN 91625 AND 91636", function(err, rows) {
        if (err){
            con.success=false;
        }else{
            let list=[];
            for(let i=0;i<rows.length;i++){
                list[i]={
                    goodName:rows[i].name,
                    goodsIcon:rows[i].goods_icon,
                    goodsId:rows[i].id,
                    goodsType:0,
                    goodsUrl:rows[i].goods_url,
                    rebateAmount:rows[i].rebate_amount,
                    saleAmount:rows[i].sale_amount,
                    thumbnailIcon:rows[i].thumbnail_icon,
                }
            }
            con.data={
                goodTitle:'精品推荐',
                notifyUrl: "http://testapp.51fanbei.com/fanbei-web/opennative?name=GOODS_DETAIL_INFO",
                mainActivityList:[
                    {
                        activityUrl:'www.baidu.com',
                        sort:1
                    },
                    {
                        activityUrl:'www.baidu.com',
                        sort:2
                    },
                    {
                        activityUrl:'www.baidu.com',
                        sort:3
                    },
                ],
                qualityGoodsList:list
            };
        }
    });
/* GET home page. */
router.post('/info', function(req, res, next) {
    res.send(con);
    res.end();
});

module.exports = router;

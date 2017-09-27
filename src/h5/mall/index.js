/**
 * Created by nizhiwei-labtop on 2017/7/14.
 */

let vue=new Vue({
    el:'#vueCon',
    data:{
        fist:'picIndex.html?name=1',
        ying:[
            {name:'营销活动中心',url:'picIndex.html?name=2'},
            {name:'营销推广中心',url:'picIndex.html?name=3'},
            {name:'营销工具中心',url:'https://aliyx.taobao.com/?spm=a313o.201708ban.category.d82.366f86f3ihxL7'},
            {name:'我要推广',url:'https://myseller.taobao.com/app.htm?spm=a21y7.8304356.a1zvx.d23.6951274e8pe3Mx&aid=23&cid=65'},
            {name:'客户运营平台',url:'https://ecrm.taobao.com/jxt/index.htm?from=oldVersionMask&spm=a313o.7780192.category.d63.45e59ba8bgwTFF'},
            {name:'官方活动报名',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d3.45e59ba8bgwTFF&aid=3&cid=65'},
            {name:'商家活动中心',url:'picIndex.html?name=4'},
            {name:'手机营销专区',url:'picIndex.html?name=5'},
            {name:'生意参谋',url:'picIndex.html?name='},
            {name:'流量宝',url:'picIndex.html?name=6'},
            {name:'商家协作填表',url:'picIndex.html?name=7'},
            {name:'视频营销',url:'zhu'},
            // {name:'品牌会员中心',url:'picIndex.html?name='},
            {name:'娱乐营销中心',url:'https://ip.alibaba.com/?spm=687.8433302.sidebar.16.QkDyu7&scm=1028.1.1.33000069'},
        ],
        dian:[
            {name:'搜索流量管理',url:'picIndex.html?name=9'},
            {name:'域名设置',url:'picIndex.html?name=10'},
            {name:'媒体中心',url:'picIndex.html?name=11'},
            {name:'查看淘宝店铺',url:'https://shop483573530.taobao.com/shop/view_shop.htm?spm=a313o.7780192.category.d53.200c4539DEjnag&mytmenu=mdianpu&user_number_id=2054896098'},
            {name:'品牌和类目管理',url:'zhu'},
            {name:'店铺装修',url:'https://wangpu.taobao.com/wirelessPageList.htm'},
            {name:'图片空间',url:'https://tadget.taobao.com/redaction/manager.htm?spm=a313o.201708ban.category.d54.4e0034d9U16hWC'},
            {name:'宝贝分类管理',url:'https://siteadmin.taobao.com/category/index.htm?spm=a313o.201708ban.category.d55.4e0034d9U16hWC'},
            {name:'店铺基本设置',url:'https://myseller.taobao.com/app.htm?spm=a313o.201708ban.category.d12.4e0034d9U16hWC&aid=12&cid=64'},
            {name:'手机淘宝店铺',url:'https://myseller.taobao.com/app.htm?spm=a313o.201708ban.category.d15.4e0034d9U16hWC&aid=15&cid=64'},
            {name:'淘宝贷款',url:'#'},
            {name:'子账号管理',url:'https://zizhanghao.taobao.com/subaccount/index.htm?isOpen=false'},
            {name:'帐房',url:'https://pay.taobao.com/homePage.htm?spm=a313o.201708ban.category.d49.4e0034d9U16hWC'},
            {name:'商家保障',url:'#'},
            {name:'店铺品质管理',url:'picIndex.html?name=12'},
            {name:'电子发票',url:'picIndex.html?name=13'}
        ],
        wu:[
            {name:'电子面单平台',url:'https://waybill.wuliu.taobao.com/firstPage.htm?spm=a313o.201708ban.category.d29.4e0034d9U16hWC'},
            {name:'发货',url:'https://wuliu.taobao.com/user/order_list_new.htm?order_status_show=send&mytmenu=fh'},
            {name:'物流工具',url:'https://wuliu.taobao.com/user/logis_tools.htm?mytmenu=wlgj'},
            {name:'物流服务',url:'https://wlmart.wuliu.taobao.com/user/consign_setting.htm?mytmenu=fhsz'},
            {name:'我要寄快递',url:'https://wuliu.taobao.com/kuaidi/post.htm?spm=a1z0f.7.a1zvx.d33.6ce9b3b9TvdC7'},
            {name:'智选物流',url:'https://wlmart.wuliu.taobao.com/user/consign_setting.htm?mytmenu=fhsz'},
            {name:'仓储管理',url:'https://wuliubao.taobao.com/home_page.htm?mytmenu=ccguanli'}
        ],
        jiao:[
            {name:'已卖出的宝贝',url:'https://trade.taobao.com/trade/itemlist/list_sold_items.htm?spm=a313o.201708ban.category.d28.4e0034d9b7lReb&mytmenu=ymbb'},
            // {name:'提前收款',url:'picIndex.html?name='},
            {name:'评价管理',url:'https://rate.taobao.com/myRate.htm?spm=a313o.201708ban.category.d27.4e0034d9b7lReb&banner=1&mytmenu=pj'},
            // {name:'缺货商品',url:'picIndex.html?name='},
            {name:'海外订单支持',url:'picIndex.html?name=14'},
            {name:'分期管理',url:'https://smf.taobao.com/index.htm?spm=a313o.201708ban.category.d84.4e0034d9b7lReb&&menu=activity&module=fqg'},
            {name:'客户之声',url:'picIndex.html?name=15'}
        ],
        bao:[
            {name:'发布宝贝',url:'https://upload.taobao.com/auction/sell.jhtml?spm=a313o.201708ban.category.d48.4e0034d9b7lReb&mytmenu=wym'},
            {name:'发布新产品',url:'https://upload.taobao.com/auction/sell.jhtml?spm=a313o.201708ban.category.d48.4e0034d9b7lReb&mytmenu=wym'},
            {name:'我的产品库',url:'picIndex.html?name=17'},
            {name:'无线宝贝管理',url:'picIndex.html?name=16'},
            {name:'出售中的宝贝',url:'picIndex.html?name=18'},
            {name:'仓库中的宝贝',url:'https://sell.taobao.com/auction/merchandise/auction_list.htm?spm=a313o.201708ban.category.d44.4e0034d9b7lReb&type=1'},
            {name:'橱窗推荐',url:'picIndex.html?name=19'},
            {name:'体检中心',url:'https://healthcenter.taobao.com/home/health_home.htm?spm=a313o.201708ban.category.d47.4e0034d9b7lReb'}
        ],
        huo:[
            {name:'新品快订',url:'https://tao.1688.com/?spm=5144.7994333.a1zvx.d65.3155d206oFpdEl&uid=3310827150&tracelog=tbc_gc_pfcg'},
            {name:'我要进货',url:'https://myseller.taobao.com/app.htm?spm=5144.7994333.a1zvx.d17.3155d206oFpdEl&aid=17&cid=66'},
            {name:'分销管理',url:'https://gongxiao.tmall.com/userSettle.htm'},
            {name:'淘工厂',url:'https://tgc.1688.com/?spm=a313o.7780192.category.d64.17795061IjQUxi&tracelog=tgc_taobao_mjzx'},
            {name:'阿里进货管理',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d5.17795061IjQUxi&aid=5&cid=66'},
            {name:'企业采购频道',url:'https://b.tmall.com/?spm=687.8433302.sidebar.57.U1fhd2&scm=1028.1.1.33000017'}
        ],
        ruan:[
            // {name:'我要订购',url:'picIndex.html?name='},
            {name:'定制服务',url:'https://www.taobao.com/markets/fuwu/woyaofuwu2?spm=a313o.7780192.category.d68.708538a5ojBCJj'}
        ],
        ke:[
            {name:'退款售后管理',url:'https://refund.taobao.com/refund_list.htm?spm=a313o.7780192.category.d79.708538a5ojBCJj&banner=1&mytmenu=tuikuan'},
            {name:'售后管理',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d8.708538a5ojBCJj&aid=8&cid=69'},
            {name:'举报管理',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d21.443842dewZqd9X&aid=21&cid=69'},
            {name:'问商友',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d88.761fe1c9XzLPFk&aid=88&cid=69'},
            {name:'投诉管理',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d7.761fe1c9XzLPFk&aid=7&cid=69'},
            {name:'维修进度',url:'picIndex.html?name='},
            {name:'发票管理',url:'picIndex.html?name='},
            {name:'商家维修管理',url:'picIndex.html?name='},
            {name:'破损补寄管理',url:'picIndex.html?name='},
            {name:'服务数据看板',url:'picIndex.html?name='},
            {name:'申诉中心',url:'https://myseller.taobao.com/app.htm?spm=a313o.7780192.category.d22.761fe1c9XzLPFk&aid=22&cid=69'},
            {name:'知识产权',url:'picIndex.html?name='}
        ],
        // you:[
        //     {name:'余利宝',url:'picIndex.html?name='},
        //     {name:'支付宝',url:'picIndex.html?name='},
        //     {name:'全球速卖通',url:'picIndex.html?name='},
        //     {name:'淘工作',url:'picIndex.html?name='},
        //     {name:'阿里巴巴',url:'picIndex.html?name='}
        // ],
        te:[
            {name:'订购服务',url:'picIndex.html?name='},
            {name:'家具免费送装',url:'picIndex.html?name='},
            {name:'线下门店管理',url:'picIndex.html?name='},
            {name:'电子凭证管理',url:'picIndex.html?name='}
        ]
    },
    methods:{

    }
});

//开发 后端自己服务器 （内网）
//开发 测试服务器 （外网，内网）
//上线  正式服务器 （外网）


let host = 'http://jx.xuzhixiang.top'

//注册接口
let regApi = host+'/ap/api/reg.php'


//登录接口
let loginApi =host+'/ap/api/login.php'

// 添加商品 接口
//      接口地址：  http://jx.xuzhixiang.top/ap/api/goods/goods-add.php
// 	 
let productAddApi =host+'/ap/api/goods/goods-add.php'


// 所有商品接口
// get
// 参数
// pagesize  每页获取几个数据
// pagenum 获取第几页数据  第0页
// uid  用户id
// http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=20&pagenum=4

let productListApi =host+'/ap/api/allproductlist.php'


// 删除商品 接口   new
//      接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php
//      接口请求方式：get
//      接口参数：
//             pid（必选）商品的id
//             uid（必选）用户的id
let productDeleteApi =host+'/ap/api/goods/goods-delete.php'

// 
// .修改商品 接口
//      接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-update.php
//      接口请求方式：get
//      接口参数：
//             pid（必选）商品的id
// pname（必选）商品
// pprice（必选）商品
// pdesc（必选）商品

let productEditApi =host+'/ap/api/goods/goods-update.php'



// 根据商品id获取商品详情接口
//      接口地址：http://jx.xuzhixiang.top/ap/api/detail.php
//      接口请求方式：get
//      接口参数：
//           id  商品的id
let productDetailApi =host+'/ap/api/detail.php'
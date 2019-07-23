/**
 * Created by XuPengtao on 19/07/22
 *
 *  提示信息中英文转换
 *  数据格式：
 *      传入数据：{'code':'','msg':''},其中code代表提示信息的类型是OKorError, msg是消息的内容
 *      返回数据：{'type':'', 'code':'', 'path':''},其中type代表提示信息的类型是OKorError，cod代表key匹配的结果0代表失败，1代表成功，path代表key的路径
 * */
import zhLocal from '@/lang/zh'
export function translation(res) {
  if(res.code == 0){
    for(let i in zhLocal.message.error){
      if(typeof i == 'object'){
        for(let key in i){
          if(key === res.msg){
            return {'type':'error', 'code':1, 'path':'translation.js.i.key'}
          }else{
            return {'type':'error', 'code':0, 'path':'translation.js.i.key'}
          }
        }
      }else if(i === res.msg){
        return {'type': 'error', 'code':'1', 'path':'translation.js.i'}
      }else{
        return {'type': 'error', 'code':'0', 'path':''}
      }
    }
  }else if(res.code == 1){
    for(let i in zhLocal.message.ok){
      if(typeof i == 'object'){
        for(let key in i){
          if(key === res.msg){
            return {'type':'ok', 'code':1, 'path':'translation.js.i.key'}
          }else{
            return {'type':'ok', 'code':0, 'path':'translation.js.i.key'}
          }
        }
      }else if(i === res.msg){
        return {'type':'ok', 'code':'1', 'path':'translation.js.i'}
      }else{
        return {'type':'ok', 'code':'0', 'path':''}
      }
    }
  }

}

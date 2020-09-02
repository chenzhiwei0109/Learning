'use strict';

const db = uniCloud.database()

// 集合
const articleCollection = db.collection('article')


exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	
	// 新增数据
	// let {title,cover,category} = event
	// let res = await articleCollection.add({
	// 	title,cover,category
	// })
	
	// 删除数据
	// let _id = event.id;
	// // 删除数据
	// // let res = await articleCollection.doc(_id).remove()
	// // 删除数据
	// let res = await articleCollection.where({_id}).remove()
	
	// 更新记录
	// let _id = event._id;
	// await articleCollection.doc(_id).update({
	// 	title:event.title,
	// 	cover:event.cover
	// })
	// 批量更新,用where条件
	
	// 查
	// let res  = await articleCollection.get()
	// let res  = await articleCollection.where({id}).get()
	
	// 分页 从第0个开始 拿前十条
	//  第一页: 1-0 
	// 第二页 2-1 *10
	// let  {page,limit} = event;
	// let skip = (page-1)*limit;
	// let res  = await articleCollection.skip(skip).limit(10).get()
	
	// let res  = await articleCollection.skip(0).limit(10).get()
	// // 从第一页开始
	// let res  = await articleCollection.skip(10).limit(10).get()
	
	
	
	//返回数据给客户端
	return res
};

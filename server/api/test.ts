
import mongodb from "../mongodb"
export default defineEventHandler(async (event: any) => {
    const returnData = {} as any;
    await query().then((r: any) => {
        returnData.code = 200;
        returnData.data = r
    })
    return returnData
  })
  function query() {
    return new Promise(async (resolve, reject) => {
        const conn = await mongodb
            
            const dbTable = conn.db('myDatabase').collection('user')
            console.log(dbTable)
            dbTable.find().toArray().then((res: any) => {
                resolve(res)
            }).catch((err: any) => {
                console.log('数据库操作失败：' + err.message)
                reject()
            }).finally(() => {
                conn.close();
            })
       
    })
  }
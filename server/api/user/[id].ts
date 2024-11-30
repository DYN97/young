import User from '../../../models/user'
export default defineEventHandler(async (event: any) => {
    const id = getRouterParam(event, 'id') as String
    const returnData = {} as any;
    const res = await User.findById(id)
    if (res) {
        returnData.code = 200
        returnData.msg = '查询成功'
        returnData.data = res
    }
    return returnData
})
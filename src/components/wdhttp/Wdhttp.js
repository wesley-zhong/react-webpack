import DB from "../../app/db"

const wdHttp = DB.WdCommonAPI.aresCommApi
export default {

  async sendHttp(req, cb) {
    try {
      const {data} = await wdHttp(req);
      cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },
  async sendRpcCache(req, cb) {
    try {
      const {data} = await wdHttp(req);
      cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },
  async doAudit(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "audit",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //提交
  async submit(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "submit",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //撤销
  async unSubmit(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "unSubmit",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //审核
  async audit(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "audit",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //反审核
  async unAudit(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "unAudit",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //禁用
  async disable(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "disable",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //反禁用
  async unDisable(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "unDisable",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //删除
  async delete(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "delete",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //关闭
  async cole(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "close",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //反关闭
  async unCole(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "open",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },
  //保存对象方法
  async saveObjFunction(reqParam, cb) {
    var req = {
      service: "SysBizObjectClassManage",
      method: "saveObjFunction",
      payLoad:
        JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },
  //保存数据
  async saveBasicData(reqParam, cb) {
    var req = {
      service: "BasicDataShowManage",
      method: "saveBasicData",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`保存数据失败:${e.message}`);
    }
  },
  //未读
  async MarkUnRead(reqParam, cb) {
    var req = {
      service: "WfWorkflowTaskManage",
      method: "MarkUnRead",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //已读
  async MarkRead(reqParam, cb) {
    var req = {
      service: "WfWorkflowTaskManage",
      method: "MarkRead",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //处理
  async auditMain(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "auditMain",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

  //新撤销
  async unSubmitMain(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "unSubmitMain",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },


  //新提交
  async submitBakMain(reqParam, cb) {
    var req = {
      service: "CommonOpt",
      method: "submitBakMain",
      payLoad: JSON.stringify(reqParam)
    }
    try {
      const {data} = await wdHttp(req);
      if (cb != null)
        cb(data)
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },
  //保存角色权限方法
  async saveRoleAuth(reqParam, cb) {
    var req = {
      service: "RoleAuthManage",
      method: "saveRoleAuth",
      payLoad: JSON.stringify(reqParam)
    }
console.log(req)
    try {
      const {data} = await wdHttp(req);
      if (cb != null){
        cb(data)
      }
    } catch (e) {
      alert(`读取数据失败:${e.message}`);
    }
  },

}

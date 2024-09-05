# react + ts

- 介绍项目的ts 难点
  - api接口的ts 类型约束场景
    - 接口模块化，所有的接口都放在/api目录下，而不是散在组件中，方便管理
      baseURL 设置 dev/production 不一样 
    - 每个模块有独立的接口文件，适合大型项目
    - 每个接口返回值都是Promise，泛型约束resolve后的类型
      github member 接口，表示合作成员
      以getMembersCollection 获取github成员接口数据为例子
      接口函数他的返回值类型为Promise<MemberEntity[]>
      实例化Promise 并返回，并且将MemberEntity[] 在泛型中传递
      axios.get 请求的response 类型为AxiosResponse<any[]>，axios 的自带类型
      通过mapMemberListApiToModel 中转函数返回MemberEntity[]
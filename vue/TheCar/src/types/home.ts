// RouteRecordRaw 由vue-router提供的
// 自定义类型约束
// pinia 用到的状态都加类型约束，数据是核心


// type 声明类型 
export type HomeTopBarItem = {
    title:string;
    icon: string;
}

export type ScrollItem = {  
    title:string;
    cover:string;
}
export type RecentlyViewItem = {
    title:string;
    cover:string;
    url:string;
}
export type ServiceContent = {
    title:string;
    cover:string;
    content:string;
};
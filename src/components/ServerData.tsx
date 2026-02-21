// 这是一个服务端组件（默认），不需要 "use client"
import { cache } from "react";

// 模拟数据库查询
const getData = cache(() => {
  // 这个函数只在服务端执行
  return {
    message: "这是从服务端获取的数据！",
    timestamp: new Date().toISOString(),
    randomNumber: Math.floor(Math.random() * 1000),
  };
});

export default function ServerData() {
  // 在服务端执行
  const data = getData();

  return (
    <div className="p-6 border rounded-lg bg-green-50">
      <h3 className="text-lg font-semibold mb-4">🖥️ 服务端组件</h3>
      <p className="text-sm text-gray-600 mb-4">
        这个组件在服务端渲染，可以直接访问数据库或 API
      </p>
      <div className="space-y-2">
        <p className="text-gray-800">
          <span className="font-semibold">消息：</span>
          {data.message}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">服务端时间：</span>
          {data.timestamp}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">随机数：</span>
          {data.randomNumber}
        </p>
      </div>
      <p className="mt-4 text-xs text-gray-500">
        💡 刷新页面看看随机数是否会变化（每次服务端渲染都会重新执行）
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 border rounded-lg bg-blue-50">
      <h3 className="text-lg font-semibold mb-4">🔄 客户端组件 (use client)</h3>
      <p className="text-sm text-gray-600 mb-4">
        这个组件使用 useState，只在浏览器端执行交互逻辑
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
      <p className="mt-4 text-xs text-gray-500">
        💡 点击按钮只在客户端生效，服务端渲染时显示初始值 0
      </p>
    </div>
  );
}

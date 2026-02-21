"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// 模拟用户数据
const users = [
  { id: "1", name: "张三", email: "zhangsan@example.com", bio: "热爱编程的前端工程师" },
  { id: "2", name: "李四", email: "lisi@example.com", bio: "后端开发，擅长 Node.js" },
  { id: "3", name: "王五", email: "wangwu@example.com", bio: "全栈工程师，喜欢开源" },
];

export default function InterceptedEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  // 由于这是客户端组件，需要处理 Promise
  const id = (async () => {
    const { id } = await params;
    return id;
  }) as unknown as string;

  // 使用 useEffect 来获取 params
  const [userId, setUserId] = React.useState<string>("");
  
  React.useEffect(() => {
    params.then((p) => setUserId(p.id));
  }, [params]);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
          <h2 className="text-xl font-bold mb-4">用户未找到</h2>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            关闭
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* 拦截路由提示 */}
        <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded text-sm text-blue-800 dark:text-blue-200">
          📌 拦截路由：编辑页面在模态框中打开
        </div>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">编辑用户</h1>
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          当前编辑：用户 {userId}
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2 dark:text-gray-200">用户ID</label>
            <input
              type="text"
              value={user.id}
              disabled
              className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 dark:text-gray-200">姓名</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 dark:text-gray-200">邮箱</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 dark:text-gray-200">个人简介</label>
            <textarea
              defaultValue={user.bio}
              rows={3}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            保存
          </button>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            取消
          </button>
          <Link
            href={`/users/${userId}`}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            完整页面
          </Link>
        </div>
      </div>
    </div>
  );
}

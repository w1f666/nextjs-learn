import Link from "next/link";

// 模拟用户数据
const users = [
  { id: "1", name: "张三", email: "zhangsan@example.com" },
  { id: "2", name: "李四", email: "lisi@example.com" },
  { id: "3", name: "王五", email: "wangwu@example.com" },
];

export const metadata = {
  title: "用户列表 - Next.js 嵌套路由 Demo",
  description: "嵌套路由示例 - 用户列表页面",
};

export default function UsersPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">用户列表</h1>
        <p className="text-gray-600 mb-8">
          嵌套路由示例：/users → /users/[id] → /users/[id]/edit
        </p>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-6 border rounded-lg hover:bg-gray-50"
            >
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <div className="flex gap-4">
                <Link
                  href={`/users/${user.id}`}
                  className="text-blue-600 hover:underline"
                >
                  查看详情 →
                </Link>
                <Link
                  href={`/users/${user.id}/edit`}
                  className="text-green-600 hover:underline"
                >
                  编辑 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t">
          <Link href="/" className="text-blue-600 hover:underline">
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

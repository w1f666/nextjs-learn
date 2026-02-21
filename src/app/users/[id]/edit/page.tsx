import Link from "next/link";

// 模拟用户数据
const users = [
  { id: "1", name: "张三", email: "zhangsan@example.com", bio: "热爱编程的前端工程师" },
  { id: "2", name: "李四", email: "lisi@example.com", bio: "后端开发，擅长 Node.js" },
  { id: "3", name: "王五", email: "wangwu@example.com", bio: "全栈工程师，喜欢开源" },
];

export function generateStaticParams() {
  return users.map((user) => ({ id: user.id }));
}

export default async function UserEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">用户未找到</h1>
          <Link href="/users" className="text-blue-600 hover:underline">
            ← 返回用户列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">编辑用户</h1>
        <p className="text-gray-600 mb-8">
          当前编辑：用户 {id}
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg mb-6">
            这是嵌套路由的第三级页面：
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">用户ID</label>
              <input
                type="text"
                value={user.id}
                disabled
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">姓名</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">邮箱</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">个人简介</label>
              <textarea
                defaultValue={user.bio}
                rows={3}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              保存
            </button>
            <Link
              href={`/users/${id}`}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              取消
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

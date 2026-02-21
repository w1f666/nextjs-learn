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

export default async function UserDetailPage({
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
        <h1 className="text-4xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-600 mb-2">ID: {user.id}</p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-2">邮箱</h2>
          <p className="text-gray-700">{user.email}</p>
          
          <h2 className="text-lg font-semibold mb-2 mt-4">个人简介</h2>
          <p className="text-gray-700">{user.bio}</p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/users"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            ← 返回列表
          </Link>
          <Link
            href={`/users/${id}/edit`}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            编辑用户
          </Link>
        </div>
      </div>
    </div>
  );
}

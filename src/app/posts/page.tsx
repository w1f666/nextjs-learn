import Link from "next/link";

// 模拟数据库数据
const posts = [
  { id: "1", title: "第一篇文章", content: "这是第一篇文章的内容..." },
  { id: "2", title: "第二篇文章", content: "这是第二篇文章的内容..." },
  { id: "3", title: "第三篇文章", content: "这是第三篇文章的内容..." },
];

export const metadata = {
  title: "文章列表 - Next.js 教学 Demo",
  description: "动态路由示例 - 文章列表页面",
};

export default function PostsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">文章列表</h1>
        <p className="text-gray-600 mb-8">
          这是一个动态路由示例，使用 [id] 文件夹命名
        </p>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block p-6 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                点击查看详情 →
              </p>
            </Link>
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

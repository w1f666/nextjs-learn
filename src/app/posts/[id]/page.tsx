// 动态路由页面
// [id] 表示这是一个动态参数，会捕获 URL 中的 id 值

// 模拟数据库数据
const posts = [
  { id: "1", title: "第一篇文章", content: "这是第一篇文章的内容..." },
  { id: "2", title: "第二篇文章", content: "这是第二篇文章的内容..." },
  { id: "3", title: "第三篇文章", content: "这是第三篇文章的内容..." },
];

// 获取所有文章的 id，用于静态生成
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

// 页面组件
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 在服务端获取参数（需要 await）
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="text-gray-600">抱歉，您访问的文章不存在。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-8">文章 ID: {post.id}</p>
          <div className="prose lg:prose-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              {post.content}
            </p>
          </div>
        </article>

        {/* 返回列表链接 */}
        <div className="mt-12 pt-8 border-t">
          <a
            href="/posts"
            className="text-blue-600 hover:underline"
          >
            ← 返回文章列表
          </a>
        </div>
      </div>
    </div>
  );
}

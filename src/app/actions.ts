"use server";

// 这是一个 Server Action - 只在服务端执行
export async function submitForm(formData: FormData) {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name");
  const message = formData.get("message");

  // 在服务端处理数据（比如保存到数据库）
  console.log("服务端收到提交:", { name, message });

  return {
    success: true,
    message: `感谢 ${name}！你的消息已收到。`,
    timestamp: new Date().toISOString(),
  };
}

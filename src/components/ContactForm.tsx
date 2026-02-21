"use client";

import { useState } from "react";
import { submitForm } from "../app/actions";

export default function ContactForm() {
  const [result, setResult] = useState<{
    message: string;
    timestamp: string;
  } | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    try {
      const response = await submitForm(formData);
      setResult(response);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="p-6 border rounded-lg bg-purple-50">
      <h3 className="text-lg font-semibold mb-4">📝 Server Action 表单</h3>
      <p className="text-sm text-gray-600 mb-4">
        表单提交调用服务端函数处理数据
      </p>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">你的名字</label>
          <input
            name="name"
            required
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="请输入名字"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">留言内容</label>
          <textarea
            name="message"
            required
            rows={3}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="请输入留言"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-400"
        >
          {isPending ? "提交中..." : "提交"}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-white border rounded-lg">
          <p className="text-green-600 font-semibold">✅ {result.message}</p>
          <p className="text-xs text-gray-500 mt-1">
            服务端时间: {result.timestamp}
          </p>
        </div>
      )}

      <p className="mt-4 text-xs text-gray-500">
        💡 点击提交后，会调用服务端的 submitForm 函数处理
      </p>
    </div>
  );
}

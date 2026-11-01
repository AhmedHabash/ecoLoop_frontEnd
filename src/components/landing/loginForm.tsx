
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Input from "@/components/ui/Input";

export default function LoginForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // مؤقتًا: مفيش Backend للتحقق من بيانات المستخدم
    // بعد ربط الـ API هننفذ التحقق من الإيميل والباسورد
    router.push("/dashboard");
  }

  return (
    <section
      id="login"
      dir="rtl"
      className="bg-gradient-to-br h-full pt-24"
    >
      <Image
        src="/images/login-image.png" // المسار بيبدأ من فولدر public
        alt="Collector and customer using the EcoTrack app" // وصف للصورة (مهم لقارئات الشاشة)
        fill
         // الصورة تملا الحاوية كلها
        priority // حمّلها فورًا لأنها أول حاجة بتظهر
        className="-z-20 object-cover h-full object-right"
        // -z-20: تروح ورا كل حاجة
        // object-cover: تملا المساحة من غير ما تتشوه
        // object-right: تثبّت الجزء اليمين من الصورة
      />
      <div className="mx-auto grid max-w-[1360px] bg-white/20 backdrop-blur-xs border border-white/30 rounded-2xl p-6 shadow-lgitems-center gap-12 py-5 px-6 lg:grid-cols-2">

        {/* الجزء التعريفي */}
        <div className="text-white">
          <div className="mb-6 h-1 w-16 rounded bg-white/70" />

          <h2 className="text-5xl font-extrabold tracking-tight">
            مرحبًا بعودتك
          </h2>

          <p className="mt-6 max-w-md text-xl leading-relaxed text-white/90">
            سجّل الدخول إلى حسابك لمتابعة طلباتك وإدارة خدماتك بسهولة.
          </p>

          <a
            href="tel:+14155550134"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-2xl font-semibold text-emerald-600"
          >
            <Phone className="h-6 w-6" />
            (415) 555-0134
          </a>

          <p className="mt-4 text-white/80">
            يسعدنا انضمامك إلينا مرة أخرى!
          </p>
        </div>

        {/* كارت تسجيل الدخول */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl bg-white/20 backdrop-blur-xs border border-white/30 rounded-2xl p-6 shadow-lgitems-center p-8 shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              تسجيل الدخول
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              أدخل بيانات حسابك للمتابعة.
            </p>
          </div>

          <Input
            id="email"
            type="email"
            label="البريد الإلكتروني"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />

          <Input
            id="password"
            type="password"
            label="كلمة المرور"
            placeholder="أدخل كلمة المرور"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            required
          />

          <div className="text-left">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-600"
            >
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-emerald-600 text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            تسجيل الدخول
          </button>

          <p className="text-center text-xs text-gray-600">
            ليس لديك حساب؟
            <Link
              href="/register"
              className="mx-1.5 font-semibold text-emerald-800 hover:text-emerald-600"
            >
              إنشاء حساب جديد
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

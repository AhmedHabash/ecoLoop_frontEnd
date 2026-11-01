"use client";
// لازم السطر ده لأن الكومبوننت بيستخدم state وأحداث (حاجات بتشتغل في المتصفح)

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// useRouter: عشان ننقل المستخدم لصفحة تانية بعد التسجيل
// useSearchParams: عشان نقرأ ?role=user من الرابط
import { Phone } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Link from "next/link";

const roles = [
  { value: "user", label: "الشركة/المستخدم" },
  { value: "collector", label: "الجامع" },
];

const locations = [
  { value: "cairo", label: "القاهرة" },
  { value: "giza", label: "الجيزة" },
  { value: "alexandria", label: "الإسكندرية" },
  { value: "sharqia", label: "الشرقية" },
];
// مؤقتًا: غيّر المدن دي لأي قايمة تحتاجها

export default function JoinForm() {
  const router = useRouter();
  const params = useSearchParams();

  const [role, setRole] = useState(params.get("role") ?? "");
  // الدور المختار. لو الرابط فيه ?role=collector بيبدأ بيه، وإلا فاضي
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
  });
  // كل بيانات الفورم في object واحد

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // ننسخ القيم القديمة ونغيّر الحقل المطلوب بس
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // نمنع المتصفح من عمل reload للصفحة
    if (!role) return; // لو مختارش دور منكملش
    // لسه مفيش backend، فمؤقتًا بننقل المستخدم لصفحة تكميل البيانات حسب دوره
    router.push(
      role === "collector"
        ? "/collector/complete-profile"
        : "/user/complete-profile",
    );
  }

  return (
    <section
      id="register"
      dir="rtl"
      className="bg-gradient-to-br from-emerald-500 to-emerald-800 py-24"
    >
      {/* id="register": لو حبيت تعمل لينك ينزل للسكشن ده */}
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-6 lg:grid-cols-2">
        {/* grid lg:grid-cols-2: عمودين في الشاشات الكبيرة، وعمود واحد في الموبايل */}

        {/* الجزء الشمال: الكلام */}
        <div className="text-white">
          <div className="mb-6 h-1 w-16 rounded bg-white/70" />
          {/* الشرطة الخضرا/البيضا اللي فوق العنوان */}
          <h2 className="font-[family-name:var(--font-jakarta)] text-5xl font-extrabold tracking-tight">
            انضم إلينا
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-white/90">
            اختر نوع حسابك، وسنوجّهك إلى خطوات التسجيل المناسبة لك.
            {/* &apos; هي علامة ' (React مش بيحب نكتبها مباشرة داخل النص) */}
          </p>
          <a
            href="tel:+14155550134"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-2xl font-semibold text-emerald-600"
          >
            <Phone className="h-6 w-6" />
            (415) 555-0134
          </a>
          <p className="mt-4 text-white/80">
            بعد إتمام التسجيل، يمكنك استكمال بيانات ملفك الشخصي من خلال لوحة
            التحكم الخاصة بك.
          </p>
        </div>

        {/* الجزء اليمين: كارت الفورم */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl bg-white p-8 shadow-xl"
          // space-y-5: مسافة رأسية بين كل حقل والتاني
        >
          <Select
            id="role"
            label="أنا أكون"
            placeholder="اختر دورك"
            options={roles}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <Input
            id="name"
            label="اسم الشركة"
            placeholder="Green Valley Apartments"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
          <Select
            id="location"
            label="Location"
            placeholder="اختر موقعك"
            options={locations}
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            required
          />
          <Input
            id="email"
            type="email"
            label="ادخل الايميل"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
          <Input
            id="phone"
            type="tel"
            label="رقم الهاتف"
            placeholder="(415) 555-0134"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-emerald-600 text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            إنشاء حساب
          </button>
          <p className="text-center text-xs">
            لدي حساب بالفعل{" "}
            <Link
              href="/login"
              className="mx-1.5 font-semibold text-emerald-800 hover:text-emerald-600"
            >
              تسجيل دخول
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

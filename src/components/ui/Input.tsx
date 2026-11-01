type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string; // العنوان اللي فوق الحقل
};
// بنورث كل خصائص <input> العادية (type, placeholder, value...) ونزود عليها label

export default function Input({ label, id, ...props }: Props) {
  // ...props = أي خاصية تانية تتبعت للحقل مباشرة
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {/* htmlFor بيربط العنوان بالحقل: لما تضغط على العنوان يركّز على الحقل */}
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
        // h-14: ارتفاع الحقل. w-full: يملا العرض
        // placeholder:text-slate-400: لون النص الإرشادي (الرمادي الفاتح)
        // focus:...: لما تضغط على الحقل يتلون إطاره أخضر ويظهر هالة خفيفة
      />
    </div>
  );
}

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[]; // الاختيارات اللي هتظهر
  placeholder: string; // النص الأول (مثلا Select your role)
};

export default function Select({
  label,
  id,
  options,
  placeholder,
  ...props
}: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>
      <select
        id={id}
        {...props}
        className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
      >
        <option value="">{placeholder}</option>
        {/* أول اختيار فاضي: بيظهر كنص إرشادي */}
        {options.map((o) => (
          // map: بنعمل <option> لكل اختيار
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

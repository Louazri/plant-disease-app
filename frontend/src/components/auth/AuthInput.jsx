function AuthInput({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon,
  rightElement,
  autoComplete,
}) {
  return (
    <label className="block">
      <span className="sr-only">{placeholder}</span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-emerald-200/60">
          {icon}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full rounded-xl border border-emerald-100/15 bg-emerald-950/50 px-11 py-3 text-sm text-emerald-50 placeholder-emerald-100/50 outline-none transition focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-400/30"
          required
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </label>
  );
}

export default AuthInput;


import "./tabs.css";

// Accessible tab bar: <Tabs label="…" tabs={[{ id, label }]} active={id} onChange={setId} />
export const Tabs = ({ label, tabs, active, onChange, className = "" }) => (
  <div className={`tabs ${className}`} role="tablist" aria-label={label}>
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        role="tab"
        aria-selected={active === tab.id}
        className={active === tab.id ? "is-active" : ""}
        onClick={() => onChange(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

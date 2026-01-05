const actions = [
    "Skin diagnosis",
    "Upload photo",
    "Take selfie",
    "Shop skincare",
];

export default function QuickActions() {
    return (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {actions.map(action => (
                <button
                    key={action}
                    style={{
                        padding: "8px 14px",
                        borderRadius: "20px",
                        border: "1px solid #eee",
                        background: "#fff",
                        fontSize: "13px",
                        cursor: "pointer"
                    }}
                >
                    {action}
                </button>
            ))}
        </div>
    );
}

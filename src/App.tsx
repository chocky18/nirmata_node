import Chat from "./components/Chat";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Chat />
    </div>
  );
}

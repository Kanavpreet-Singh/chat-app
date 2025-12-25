export default async function ChatPage({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Room: {roomId}</h1>
    </div>
  );
}

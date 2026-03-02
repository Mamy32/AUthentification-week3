export async function POST(request) {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      barcode: body.barcode,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
import { POST } from "./route";

test("returns a successful response with the correct data", async () => {
    const mockResquest = {
        json: async () => ({
            barcode: "123"
        })
    };
    const response = await POST(mockResquest);
    const data = await response.json();
    expect(data.barcode).toBe("123");
});
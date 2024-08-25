// src/app/api/transcript/route.js

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { transcript } = body;

        if (!transcript) {
            return res.status(400).json({ error: 'Transcript data is required' });
        }

        // Respond with the transcript data
        return new Response(JSON.stringify({ message: 'Transcript received successfully', transcript }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'An error occurred while processing the request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// You can define more named exports for other HTTP methods like GET, PUT, DELETE, etc.

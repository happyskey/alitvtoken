
// ...existing code...

export const runtime = 'edge';

export async function generate_qr() {
    try {
        const response = await fetch('http://api.extscreen.com/aliyundrive/qrcode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                scopes: ["user:base", "file:all:read", "file:all:write"].join(','),
                width: 500,
                height: 500,
            })
        });
        const data = await response.json();
        return Response.json({ 
            qr_link: data.data.qrCodeUrl, 
            sid: data.data.sid 
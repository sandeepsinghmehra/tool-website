import { convertPdfToDocx } from '@/components/lib/convert';
import { NextResponse } from 'next/server';


export const config = {
  api: {
    bodyParser: false,
  },
};
export async function GET() {
  return Response.json({ abc: "testing" })
}
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    console.log("formData: ", formData);
    const file = formData.get('file') as Blob;
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);
  
    const docxBuffer = await convertPdfToDocx(fileBuffer);
  // const docxBuffer:any = {asf: 'test'}
    console.log("docxBuffer: ", docxBuffer)
    return new NextResponse(docxBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="converted.docx"',
      },
    });
  } catch (error) {
    console.error('Error in POST /api/convert:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}


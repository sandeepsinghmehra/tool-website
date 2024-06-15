// // lib/convert.ts
// import pdf from 'pdf-parse';
// import { Document, Packer, Paragraph, TextRun } from 'docx';

// export async function convertPdfToDocx(fileBuffer: Buffer): Promise<Buffer> {
//   try {
//     // Extract text from PDF
//     const data = await pdf(fileBuffer);
//     const text = data.text;

//     console.log("Extracted text:", text);

//     // Create a new DOCX document with appropriate metadata options
//     const doc = new Document({
//       sections: [
//         {
//           properties: {},
//           children: [
//             new Paragraph({
//               children: [new TextRun(text)],
//             }),
//           ],
//         },
//       ],
//     });

//     // Convert DOCX document to buffer
//     const docxBuffer = await Packer.toBuffer(doc);

//     return docxBuffer;
//   } catch (error) {
//     console.error('Error during PDF to DOCX conversion:', error);
//     throw new Error('Conversion failed');
//   }
// }

import pdf from 'pdf-parse';
import mammoth from 'mammoth';

export async function convertPdfToDocx(fileBuffer: Buffer): Promise<Buffer> {
  try {
    // Extract text from PDF
    const data = await pdf(fileBuffer);
    const text = data.text;

    console.log("Extracted text:", text);

    // Prepare the text as a simple DOCX file (WordprocessingML)
    const docxContent = `<!DOCTYPE html><html><body>${text}</body></html>`;
    const docxBuffer = Buffer.from(docxContent, 'utf-8');

    // Convert HTML to DOCX using Mammoth
    const { value: docx, messages } = await mammoth.convertToHtml({ buffer: docxBuffer });

    if (messages.length > 0) {
      console.warn('Mammoth warnings:', messages);
    }

    return Buffer.from(docx);
  } catch (error) {
    console.error('Error during PDF to DOCX conversion:', error);
    throw new Error('Conversion failed');
  }
}
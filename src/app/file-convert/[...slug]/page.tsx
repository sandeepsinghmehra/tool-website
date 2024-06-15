import FormSection from './components/FormSection';

export default function FileConvert({ params }: { params: { slug: string[] } }) {
    const paramsData = params?.slug[0];
    console.log("paramsData in fileConvert: ", paramsData);
    const [inputFormat, outputFormat]: [string, string] = paramsData.split("-to-") as [string, string];
    return (
        <div>
        <h1>PDF to DOCX Converter</h1>
        <FormSection />
        </div>
    );
}

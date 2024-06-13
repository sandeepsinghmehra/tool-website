import { Box } from "@mui/material";
import Tab from "./components/tab";


export default function ImageConvertLayout({
    children, params,
}: Readonly<{
    children: React.ReactNode;
    params: { slug?: string[] }
}>) {
    return (
        <Box component={'section'}>
            <Tab params={params} />
            {children}
        </Box>
    );
}

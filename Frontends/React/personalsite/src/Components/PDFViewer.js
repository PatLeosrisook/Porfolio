import { Document, Page } from 'react-pdf';
export default function PDFViewer() {
    const filePath = "https://www.dropbox.com/preview/PDF/Resume.pdf";

    return (
        <div>
            <Document file={filePath} >
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}
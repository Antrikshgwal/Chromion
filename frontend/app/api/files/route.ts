import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/utils/config";

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();

        const file = data.get("file") as File;
        const metadataRaw = data.get("metadata");

        if (!file || typeof metadataRaw !== "string") {
            return NextResponse.json(
                { error: "Missing file or metadata" },
                { status: 400 }
            );
        }

        // Parse the metadata
        const metadata = JSON.parse(metadataRaw);

        // Upload file to Pinata
        const { cid: fileCid } = await pinata.upload.public.file(file);
        const fileUrl = await pinata.gateways.public.convert(fileCid);

        // Upload metadata as JSON to Pinata
        const { cid: metadataCid } = await pinata.upload.public.json(metadata);
        const metadataUrl = await pinata.gateways.public.convert(metadataCid);

        return NextResponse.json(
            {
                fileUrl,
                metadataUrl,
                message: "File and metadata uploaded successfully",
            },
            { status: 200 }
        );
    } catch (e) {
        console.error("Upload Error:", e);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

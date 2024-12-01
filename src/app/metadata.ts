export async function getPageMetadata(pageId: string) {
    const filePath = './data/metadata.json';
    const pageData = await require(filePath);
    const page = pageData.find((p: any) => p.id === pageId);
    return page || null;
}

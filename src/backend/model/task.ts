export interface task {
    id?: string;
    sequenceNumber?: number;
    title?: string;
    descriptionId?: string | null;
    generatorId?: string;
    responsibleId?: string | null;
    status?: string;
    openingDate?: string;
    proceedingsIds?: string[];
}
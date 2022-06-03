export interface taskInfo {
    taskId?: string;
    sequenceNumber?: number;
    title?: string;
    description?: string | null;
    descriptionPlainText?: string | null;
    generatorName?: string;
    responsibleName?: string | null;
    status?: string;
    openingDate?: string;
    proceedingsIds?: string[];
}
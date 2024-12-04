'use server';
import { getSheetData as gl } from './google-sheets';

export async function getSheetData() { 
    const auth = await gl();

    const data = await auth.spreadsheets.values.get({
        spreadsheetId: "1gdAeqR7CI0LwBRM8KKF6O-cUzna5xEhPhDmsb0iCVmE",
        range: 'Asset!A8:AB',
    });

    return { data: data.data.values };
}
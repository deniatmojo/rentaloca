"use server"
import { getSheetData } from './google-sheets';

export async function sendData(data: any) {
    try {
        const auth = await getSheetData();

        const response = await auth.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEETID,
            range: 'Sheet1!A:Z',
            majorDimension: 'COLUMNS'
        });

        const dataToSend = {
            values: [
                [
                    data.id,
                    data.full_name,
                    data.nomor_ktp,
                    data.email,
                    data.phone,
                    "-",
                    data.address,
                    data.city,
                    data.postal_code,
                    data.provinces,
                    data.shipping_method,
                    data.subtotal,
                    data.shipping_bill,
                    data.deposit,
                    data.total,
                    JSON.stringify(data.product)
                ]
            ]
        };
        
        const numRows = response.data.values ? response.data.values[0].length : 0;
        const range = `Sheet1!A${numRows + 1}:Z${numRows + 1 + dataToSend.values.length}`; 
        
        const insertResponse = await auth.spreadsheets.values.update({
            spreadsheetId: process.env.SPREADSHEETID,
            range: range,
            valueInputOption: 'RAW',
            requestBody: dataToSend
        });

        return [];
    } catch (error) {
        console.error('Error sending data to Google Sheets:', error);
        throw error;
    }
}
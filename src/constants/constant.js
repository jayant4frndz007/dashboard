
//https://spreadsheets.google.com/feeds/cells/1UB43liBxGTpWaSGxfSR3oxcHk5ecmjM7B_jwqCXF7GE/11/public/full?alt=json


export const generateURL=(val)=>{
  const baseUrl='https://spreadsheets.google.com/feeds/cells/';
  const googleCode= '1UB43liBxGTpWaSGxfSR3oxcHk5ecmjM7B_jwqCXF7GE/';
  const sheetNumber= val ? val : 1;
  const operation ='/public/full?alt=json';
    console.log('generatedURL',baseUrl+googleCode+sheetNumber+operation)
  return (baseUrl+googleCode+sheetNumber+operation);
}
import * as fs from 'fs';
import { Response } from 'express';
import { ErrorResponse } from '../interfaces/errorHttps.interfaces';


export function handledHttps(response: Response): ErrorResponse {
  const statusCode = response.statusCode;

  
  const errorData = JSON.parse(fs.readFileSync('./json/errorCodes.json', 'utf-8'));


  const errorMessage = errorData[statusCode] || 'Error desconocido';

  return {
    code: statusCode,
    message: errorMessage,
  };
}
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
       
        const status = HttpStatus.CONFLICT; // You can use any appropriate HTTP status code
        const errorMessage = 'Duplicate entry error occurred'; // Customize error message as needed
        response.status(status).json({
            statusCode: status,
            message: errorMessage,
        });
    }
}

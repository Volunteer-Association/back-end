import { Body, Controller, Post, Query } from "@nestjs/common";

@Controller()
export class LoginController{
    // Define your methods here
    // For example, a method to handle login requests
    // @Post('login')
    // async login(@Body() loginDto: LoginDto) {
    //   // Handle login logic
    // }
    @Post('login')

    getLogin(@Body() buod: any, @Query() query: any) {
        // Here you can handle the login logic
        // For example, validate the user credentials
        console.log('Login request received:', buod, query);
        return {
            message: 'Login successful',
            data: {
                user: buod,
                queryParams: query
            }
        };

    }
}
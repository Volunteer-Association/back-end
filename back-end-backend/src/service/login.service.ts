import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginService {
    constructor() {}
    login(username: string, password: string): string {
        // 模拟登录逻辑
        if (username === "admin" && password === "password") {
            return "Login successful!";
        } else {
            return "Invalid credentials.";
        }
    }
}
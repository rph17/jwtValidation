export interface JWTInterface { 
    Name: string,
    Role: "Admin" | "Member" | "External",
    Seed: number
}
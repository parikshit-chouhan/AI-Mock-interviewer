/**@type {import ("drizzle-kit").config } */

export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:R6GsY1rtlgeN@ep-yellow-water-a581xg7l.us-east-2.aws.neon.tech/ai-moc-interviewer?sslmode=require'
        
    }
}
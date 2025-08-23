package main


import (

   "net/http"

   "github.com/gin-gonic/gin"

   "example.com/sa-68-example2/config"

   

)


const PORT = "8000"


func main() {
   // open connection database
   config.ConnectionDB()
   // Generate databases
   config.SetupDatabase()
    
   r := gin.Default()
   





   r.GET("/", func(c *gin.Context) {

       c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)

   })


   // Run the server


   r.Run("localhost:" + PORT)


}



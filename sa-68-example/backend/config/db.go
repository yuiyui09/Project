package config


import (

   "fmt"

   "example.com/sa-68-example/entity"

   "gorm.io/driver/sqlite"

   "gorm.io/gorm"

)


var db *gorm.DB


func DB() *gorm.DB {

   return db

}


func ConnectionDB() {

   database, err := gorm.Open(sqlite.Open("sa.example.db"), &gorm.Config{})

   if err != nil {

       panic("failed to connect database")

   }

   fmt.Println("connected database")

   db = database

}


func SetupDatabase() {


   db.AutoMigrate(
      &entity.Accommodation{},
   
      &entity.Booking{},
      &entity.BookingDetail{},
      &entity.Facility{},
      &entity.Location{},
      &entity.Member_User{},
      &entity.Room{},
      &entity.RoomAvailability{},

      
   )
   

   }

   
   


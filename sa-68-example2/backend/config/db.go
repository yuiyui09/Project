package config

import (
	"fmt"


	"example.com/sa-68-example2/entity"

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
      &entity.ApplicationHistory{},
      &entity.ApplicationStatus{},
      &entity.Guide{},
      &entity.GuideApplication{},
      &entity.GuideType{},
      &entity.Language{},
      &entity.Member_User{},
      &entity.Package{},
      &entity.ServiceArea{},

      
   )
   

   }

   
   


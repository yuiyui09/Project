package entity

import (
	

	"gorm.io/gorm"
)

type Location struct {
	gorm.Model

	Name string `json:"name"`



	//1 lo can have many acc
	Accommodation []Accommodation  `gorm:"foreignKey:LocationID"`


//FK not yet
}

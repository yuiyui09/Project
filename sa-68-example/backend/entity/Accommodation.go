package entity

import (
	"gorm.io/gorm"
)

type Accommodation struct {
	gorm.Model

	Name string `json:"name"`
	Type string `json:"type"`

	//FK
	LocationID *uint    `json:"location_id"`
	Location   Location `gorm:"foreignKey:LocationID;references:ID"`

	// 1 acc can have many Room
	Room []Room `gorm:"foreignKey:AccID"`

	Facilities []Facility `gorm:"many2many:accommodation_facility"`

	//FK not yet
}

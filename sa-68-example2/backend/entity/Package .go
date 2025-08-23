package entity

import (
	"time"

	"gorm.io/gorm"
)

type Package struct {
	gorm.Model

	Name  string    `json:"name"`
	Date time.Time `json:"date"`
	Price uint  `json:"price"`
	Type string    `json:"type"`




}

package entity

import (
	

	"gorm.io/gorm"
)

type GuideType struct {
	gorm.Model

	Name  string    `json:"name"`
	Description  string    `json:"description"`

	Guide  []Guide `gorm:"many2many:guide_type"`

}

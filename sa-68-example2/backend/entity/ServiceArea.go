package entity

import (
	

	"gorm.io/gorm"
)

type ServiceArea struct {
	gorm.Model

	District  string    `json:"user_name"`
	Status string    `json:"status"`

	GuideApplication []GuideApplication `gorm:"foreignKey:AreaID"`

	Guide  []Guide `gorm:"many2many:guide_servicearea"`




	
}

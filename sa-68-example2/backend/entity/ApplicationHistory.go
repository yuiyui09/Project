package entity

import (
	
	"gorm.io/gorm"
)

type ApplicationHistory struct {
	gorm.Model

	//Fk
	GuideApplicationID *uint
	GuideApplication GuideApplication `gorm:"foreignKey:GuideApplicationID;references:ID"`
	//Fk
	ApplicationStatusID *uint
	ApplicationStatus ApplicationStatus `gorm:"foreignKey:ApplicationStatusID;references:ID"`




}
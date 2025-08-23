package entity

import (
	"time"

	"gorm.io/gorm"
)

type ApplicationStatus struct {
	gorm.Model

	Status string    `json:"status"`
	Description  string    `json:"description"`
	UpdatedAt time.Time     `json:"updated_at"`

	//FK
	GuideApplicationID *uint
	GuideApplication GuideApplication `gorm:"foreignKey:GuideApplicationID;references:ID"`

	//1  ApplicationStatus can have ApplicationHistory
	ApplicationHistory []ApplicationHistory `gorm:"foreignKey:ApplicationStatusID"`

	
	



}

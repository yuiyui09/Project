package entity

import (
	"time"

	"gorm.io/gorm"
)

type GuideApplication struct {
	gorm.Model

	ApplicationStatusID string    `json:"application_status_id"`
	DocumentsPath       string    `json:"documents_path"`
	Submitted           time.Time `json:"submitted "`

	UserID *uint
	Member_User Member_User `gorm:"foreignKey:UserID;references:ID"`

	AreaID *uint
	ServiceArea ServiceArea `gorm:"foreignKey:AreaID;references:ID"`

	ApplicationHistory []ApplicationHistory `gorm:"foreignKey:GuideApplicationID"`
	ApplicationStatus []ApplicationStatus `gorm:"foreignKey:GuideApplicationID"`


}

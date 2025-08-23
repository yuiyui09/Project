package entity

import (
	"time"

	"gorm.io/gorm"
)

type Member_User struct {
	gorm.Model

	Username  string    `json:"user_name"`
	Password  string    `json:"password"`
	Email     string    `json:"email"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	Age       uint8     `json:"age"`
	BirthDay  time.Time `json:"birthday"`
	Tel       string    `json:"tel"`

	Booking []Booking `gorm:"foreignKey:UserID"`


}

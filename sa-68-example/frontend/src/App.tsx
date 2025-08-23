import { useState } from "react";
import "./App.css";

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("all");
  const [, setShowModal] = useState(false);
  const [, setModalContent] = useState({ title: "", content: "" });

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room with City View",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
    },
    {
      id: 2,
      name: "Ocean View Suite",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    },
    {
      id: 3,
      name: "Standard Room",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    },
  ];

  const handleBook = (roomName: string) => {
    alert(`คุณจองห้อง "${roomName}" สำเร็จแล้ว!`);
  };

  const handleUpdate = () => {
    alert(`อัปเดตข้อมูลการจอง!\nวันเช็คอิน: ${checkIn}\nวันเช็คเอาท์: ${checkOut}\nจำนวนผู้เข้าพัก: ${guests} คน`);
  };



  const showInfo = (type: string) => {
    let content = "";
    let title = "";
    
    switch(type) {
      case "review":
        title = "รีวิว";
        content = "⭐⭐⭐⭐⭐ 4.8/5 จากผู้เข้าพัก 1,250 คน\n\n• 'โรงแรมสวยมาก วิวทะเลสุดยอด' - คุณสมใจ\n• 'พนักงานบริการดีเยี่ยม อาหารเช้าอร่อย' - คุณมาลี\n• 'ห้องพักสะอาด สิ่งอำนวยความสะดวกครบครัน' - คุณวิชัย";
        break;
      case "facilities":
        title = "สิ่งอำนวยความสะดวก";
        content = "🏊‍♂️ สระว่ายน้ำกลางแจ้ง\n🍽️ ห้องอาหาร 3 แห่ง\n💆‍♀️ สปาและศูนย์ฟิตเนส\n🅿️ ที่จอดรถฟรี\n📶 WiFi ฟรีทั่วโรงแรม\n🏖️ ชายหาดส่วนตัว\n🎾 สนามเทนนิส\n👶 คลับเด็ก";
        break;
      case "help":
        title = "ช่วยเหลือ";
        content = "📞 โทรศัพท์: 02-123-4567\n📧 อีเมล: info@grandparadise.com\n⏰ เวลาทำการ: 24 ชั่วโมง\n\n🔹 การยกเลิกการจอง\n🔹 การเปลี่ยนแปลงวันเข้าพัก\n🔹 คำถามเกี่ยวกับห้องพัก\n🔹 บริการรถรับส่งสนามบิน";
        break;
    }
    
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div className="booking-container">
      {/* Header */}
    <header className="header-bar">
      <div className="header-content">
        <h1>Accommodation Reservation </h1>
      </div>
    </header>

    <div className="hotel-section">
        <h2 className="hotel-name">The Grand Paradise Resort</h2>
      </div>

      

    

  
      {/* Booking Form */}
      <div className="booking-form">
        <label>
          วันที่เช็คอิน:
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>

        <label>
          วันที่เช็คเอาท์:
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </label>

        <label>
          จำนวนผู้เข้าพัก:
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
          <button
              onClick={handleUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-lg font-medium transition-colors"
            >
              อัปเดต
            </button>
        </label>
      </div>

      


      <div className="hotel-hero">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
          alt="Hotel Main"
          className="hotel-main-image"
        />
      </div>


      {/* Info Buttons */}
      <div className="info-buttons">
        <button
          onClick={() => showInfo("review")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors shadow-md"
        >
          รีวิว
        </button>
        <button
          onClick={() => showInfo("facilities")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors shadow-md"
        >
          สิ่งอำนวยความสะดวก
        </button>
        <button
          onClick={() => showInfo("help")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors shadow-md"
        >
          ช่วยเหลือ
        </button>
      </div>

      {/* Room Type Filter */}
      <div className="room-type">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <label className="flex flex-col text-center">
            <span className="text-lg font-medium mb-2">เลือกประเภทห้องพัก:</span>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md text-lg min-w-48 bg-white"
            >
              <option value="all">ทุกประเภท</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
            </select>
          </label>
        </div>
      </div>

      





      {/* Room List */}
      <div className="room-list">
  {rooms.map((room) => (
    <div key={room.id} className="room-card">
      <img src={room.image} alt={room.name} />
      <div className="room-details">
        <h2>{room.name}</h2>
        <p>ห้องพักสุดหรูพร้อมสิ่งอำนวยความสะดวกครบครัน</p>
        <p>• เตียงคิงไซส์</p>
        <p>• ห้องน้ำส่วนตัว</p>
        <p>• ระเบียงวิวทะเล</p>
        <p className="price">ราคา: ฿{room.price.toLocaleString()} / คืน</p>
        <button onClick={() => handleBook(room.name)}>จองตอนนี้</button>
      
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default App;
